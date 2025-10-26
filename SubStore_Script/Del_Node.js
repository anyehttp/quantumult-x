function operator(proxies = [], targetPlatform, context) {
  // 过滤条件：1. 存在 obfs-opts 字段 2. obfs-opts 下存在 mode 字段
  const filteredProxies = proxies.filter(proxy => {
    // 先判断 obfs-opts 存在且不为 null，再判断其下的 mode 存在且不为 null/undefined
    return proxy['obfs-opts'] !== undefined && 
           proxy['obfs-opts'] !== null && 
           proxy['obfs-opts'].mode !== undefined && 
           proxy['obfs-opts'].mode !== null;
  });
  
  console.log(`原始节点数: ${proxies.length}, 过滤后节点数: ${filteredProxies.length}`);
  
  return filteredProxies;
}