function operator(proxies = [], targetPlatform, context) {
  // 过滤掉没有 obfs-opts 字段的节点
  const filteredProxies = proxies.filter(proxy => {
    return proxy['obfs-opts'] !== undefined && proxy['obfs-opts'] !== null;
  });
  
  console.log(`原始节点数: ${proxies.length}, 过滤后节点数: ${filteredProxies.length}`);
  
  return filteredProxies;
}