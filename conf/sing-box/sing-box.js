const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'cn',
}
let compatible
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})
config.outbounds.push(...proxies)
config.outbounds.map(i => {
  if (['国内', 'gn-auto'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /China|china|中国/i))
  }
  if (['国内', 'gn'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /China|china|中国/i))
  }
  if (['国外', 'gw'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /JP|日本|美国|jp/i))
  }
  if (['国外', 'gw-auto'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /JP|日本|美国|jp/i))
  }
})
config.outbounds.forEach(outbound => {
  if (Array.isArray(outbound.outbounds) && outbound.outbounds.length === 0) {
    if (!compatible) {
      config.outbounds.push(compatible_outbound)
      compatible = true
    }
    outbound.outbounds.push(compatible_outbound.tag);
  }
});
$content = JSON.stringify(config, null, 2)
function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}
