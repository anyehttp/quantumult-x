// 模块导入工具类
class $ {
  static async imports(...input) {
    return await Promise.all(input.map(i => this.import(...i)));
  }

  static async import(...args) {
    const url = this.#cdn(args.pop());
    const rule = args[0];

    try {
      const module = await import(url);
      const exp = "default" in module ? module.default : module;
      const expName = typeof exp.name === "string" ? exp.name : "default";
      this.#mountFunction(rule, exp, expName);
      console.log(`✅ ${url} 加载成功`);
    } catch (error) {
      console.log(`❌ 模块加载失败: ${url}`, error);
      throw error;
    }
  }
  static #cdn(path) {
    const { host } = new URL(path);
    if (!host.includes("github")) return path;
    return path
      .replace(host, `fastly.jsdelivr.net/gh`)
      .replace(/refs.+(?=main)/, "")
      .replace(/\/blob\//, "@")
      .replace(/\/main/, "@main")
      .replace(/\/master/, "@master");
  }
  static #mountFunction(rule, exp, expName, depth = 0) {
    if (typeof exp === "object" && depth === 0) {
      if (typeof rule === "string" && rule.includes("* as"))
        return (this[rule.split(" ").at(-1)] = exp);

      Object.entries(exp).forEach(([k, v]) => {
        this.#mountFunction(rule, v, k, depth + 1);
      });
    } else if (!rule) {
      this[expName] = exp;
    } else if (typeof rule === "string") {
      this[rule.split(" ").at(-1)] = exp;
    } else if (typeof rule === "function") {
      const result = rule({ name: expName, fn: exp });
      result.stop || (this[result.name ?? expName] = result.fn ?? exp);
    } else if (Array.isArray(rule)) {
      rule.forEach(n => {
        if (n.includes(expName)) this[n.split(" ").at(-1)] = exp;
      });
    }
  }
}
// LRU缓存类
class LRUCache {
  #cache;
  constructor(capacity, cache) {
    this.capacity = capacity;
    this.#cache = new Map(cache || []);
  }

  has(key) {
    return this.#cache.has(key);
  }

  get(key) {
    if (!this.#cache.has(key)) return;
    const value = this.#cache.get(key);
    this.#cache.delete(key);
    this.#cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.#cache.has(key)) {
      this.#cache.delete(key);
    } else if (this.#cache.size >= this.capacity) {
      this.#cache.delete(this.#cache.keys().next().value);
    }

    this.#cache.set(key, value);
  }

  toArray() {
    return this.#cache.entries().toArray();
  }
}
// 自定义错误类
class CustomError extends Error {
  constructor(...args) {
    super(args.pop());
    if (args[0]) this.name = args[0] + "Error";
  }
}
// 生成虚拟GUID·缓存Mac地址
const getMAc = key => {
  const generateHexPair = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");

  let uniqueId = $.cache.get(key);

  if (!uniqueId) {
    uniqueId = Array.from({ length: 6 }, generateHexPair)
      .join("")
      .toUpperCase();

    $.cache.set(key, uniqueId);
  }

  return uniqueId;
};
// 计算容量
const formatSize = (size, unit = "B") => {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  const currentIndex = Math.max(0, units.indexOf(unit.toUpperCase()));
  let bytes = size * 1024 ** currentIndex;
  let unitIndex = 0;
  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024;
    unitIndex++;
  }
  const formattedSize =
    bytes < 10
      ? bytes.toFixed(2)
      : bytes < 100
      ? bytes.toFixed(1)
      : Math.round(bytes).toString();
  return `${formattedSize} ${units[unitIndex]}`;
};
// 共享状态·全局配置
const sharedState = {
  GUID: "AppleMac",
  LOGIN_KEY: "AppleLogin",
  VERSION_KEY: "AppVersions",
  MAX_APP_CACHE: 50,
  CONCURRENCY_CONFIG: {
    concurrencyLimit: 5,
    maxRetry: 2,
    waitTime: 0.5,
  },
};

/**
 * 第三方服务抽象基类
 * 提供通用的接口发现和数据获取能力
 * @description 为所有第三方服务提供统一的基础功能
 */
const ThirdPartyService = class {
  /**
   * 抽象属性：子类必须实现的类型标识
   * @returns {string} 服务类型标识
   */
  static get type() {
    throw new Error(
      `抽象属性 type 定义接口类型 必须在子类 ${this.name} 中实现`
    );
  }

  /**
   * 获取所有可用的第三方接口列表
   * 接口命名规范：_get + InterfacesName + type
   * @description 返回当前支持的所有第三方接口标识符
   * @param {number} [limit=Number.MAX_SAFE_INTEGER] - 限制返回的接口数量，默认返回所有接口
   * @returns {Array<string>} - 可用的第三方接口标识符数组
   */
  static getAvailableInterfaces(limit = Number.MAX_SAFE_INTEGER) {
    const methods = Object.getOwnPropertyNames(this);
    const excludeMethod = `_getApp${this.type}List`;
    const regex = new RegExp(`^_get(.+)${this.type}$`);

    // 筛选符合模式的私有方法名并提取接口名称
    return methods
      .flatMap(method => {
        if (
          method.startsWith("_get") &&
          method.endsWith(this.type) &&
          method !== excludeMethod
        ) {
          return method.replace(regex, "$1");
        }
        return [];
      })
      .slice(0, limit);
  }

  /**
   * 动态搜索并调用第三方接口
   * @description 根据接口名称动态调用对应的私有方法
   * @param {string} selset - 接口名称 (如 "Timbrd", "Bilin")
   * @param {...any} args - 传递给具体方法的参数
   * @returns {Promise<any>} - 接口调用结果
   */
  static async searchInterface(selset, ...args) {
    const methodName = `_get${
      selset.charAt(0).toUpperCase() + selset.slice(1)
    }${this.type}`;

    if (this[methodName]) {
      return await this[methodName](...args);
    } else {
      throw new Error(`第三方接口 ${selset} 暂未实现`);
    }
  }

  /**
   * 通用第三方数据获取方法
   * @param {string|onject} req - 请求URL|请求对象
   * @param {string} id - 应用ID或查询参数
   * @param {Function} dataExtractor - 数据提取函数
   * @returns {Promise<Object>} - 格式化后的数据信息
   */
  static async _fetchThirdPartyData(req, id, dataExtractor) {
    try {
      const { body } = await $.http(req, 8);
      const data = dataExtractor(body);

      return {
        appId: id,
        data,
        total: data.length,
      };
    } catch (error) {
      throw new Error(`${req?.url ?? req} 接口请求失败: ${error.message}`);
    }
  }
};

/**
 * 版本查询服务
 * 专门处理应用版本相关查询
 * 重写基类抽象属性 type，返回 "Versions"
 * 接口命名规范：_get + InterfacesName + type
 * @description 继承自 ThirdPartyService，提供应用版本查询功能
 */
const VersionService = class extends ThirdPartyService {
  static type = "Versions";

  /**
   * 获取应用版本列表
   * @description 根据应用ID和选择的第三方接口获取应用版本列表
   * @param {string} id - 应用ID
   * @param {string} selset - 选择的第三方接口标识
   * @returns {Promise<[number, number][]>>} - 应用版本列表信息，每个元素为 [版本ID, 版本号]
   */
  static async getAppVersionList(id, selset) {
    return await this.searchInterface(selset, id);
  }

  /**
   * 并发获取应用版本列表
   * @description 并发调用所有可用的版本接口，返回第一个成功的结果
   * @param {string} id - 应用ID
   * @param {number} [num=Number.MAX_SAFE_INTEGER] - 限制返回的接口数量，默认返回所有接口
   * @returns {Promise<Object>} - 第一个成功的版本接口调用结果
   * @throws {Error} - 当所有接口都失败时抛出错误
   */
  static async concurrentGetVersionList(id, num = Number.MAX_SAFE_INTEGER) {
    const availableInterfaces = this.getAvailableInterfaces(num);

    if (availableInterfaces.length === 0) {
      throw new Error(`没有可用的版本接口`);
    }

    return Promise.any(
      availableInterfaces.map(interfaceName =>
        this.getAppVersionList(id, interfaceName)
      )
    );
  }

  /**
   * 通过 timbrd 接口获取应用版本列表（私有方法）
   * @param {string} id - 应用ID
   * @returns {Promise<Object>} - 应用版本列表
   */
  static async _getTimbrdVersions(id) {
    const url = `https://api.timbrd.com/apple/app-version/index.php?id=${id}`;
    return this._fetchThirdPartyData(url, id, body =>
      JSON.parse(body)
        .reverse()
        .map(({ external_identifier, bundle_version }) => [
          external_identifier,
          bundle_version,
        ])
    );
  }

  /**
   * 通过 bilin 接口获取应用版本列表（私有方法）
   * @param {string} id - 应用ID
   * @returns {Promise<Object>} - 应用版本列表
   */
  static async _getBilinVersions(id) {
    const url = `https://apis.bilin.eu.org/history/${id}`;
    return this._fetchThirdPartyData(url, id, body =>
      body.data.map(({ external_identifier, bundle_version }) => [
        external_identifier,
        bundle_version,
      ])
    );
  }
};

// 认证服务·登录Apple账号
const AuthService = class {
  /**
   * 登录Apple账号
   * 缓存登录响应
   * @description 登录Apple账号，获取登录响应数据
   * @param {Object} op - 登录参数
   * @param {string} op.appleId - Apple账号
   * @param {string} op.password - Apple账号密码
   * @param {string} [op.code] - 验证码，登录时需要提供
   * @returns {Promise<Object>} - 登录成功后的响应数据
   */
  static async #login({ appleId, password, code }) {
    const dataJson = {
      attempt: code ? 2 : 4,
      createSession: "true",
      guid: getMAc(sharedState.GUID),
      rmp: 0,
      why: "signIn",
      appleId,
      password: `${password}${code ?? ""}`,
    };
    const body = $.plist.build(dataJson);
    const url = `https://auth.itunes.apple.com/auth/v1/native/fast?guid=${dataJson.guid}`;
    const resp = await $.http.post({ url, body, timeout: 6 });
    const parsedResp = $.plist.parse(resp.body);

    this.validate(parsedResp);
    $.log("✅登录成功", parsedResp?.accountInfo);
    const cacheLoginResp = JSON.parse(
      $.cache.get(sharedState.LOGIN_KEY) || "{}"
    );

    const { "set-cookie": Cookie } = resp.headers;
    const storeFront = resp.headers["x-set-apple-store-front"]?.split("-")?.[0];
    Object.assign(cacheLoginResp, parsedResp, { password, Cookie, storeFront });
    $.cache.setJson(sharedState.LOGIN_KEY, cacheLoginResp);
    return { ...parsedResp, storeFront };
  }

  /**
   * 加载缓存登录响应
   * @description 从缓存中加载登录响应，如果不存在则进行登录并缓存
   * @param {Object} op - 登录参数
   * @param {string} op.appleId - Apple账号 当登录账号与缓存账号不一致时，会切换账号重新登录
   * @returns {Promise<Object>} - 登录成功后的响应数据
   */
  static async login(op) {
    const loginResp = JSON.parse($.cache.get(sharedState.LOGIN_KEY) || null);

    if (op && !loginResp) return await this.#login(op);

    if (op && op.appleId !== loginResp.accountInfo?.appleId) {
      $.log("登录账号与缓存账号不一致, 切换账号登录");
      $.cache.remove(sharedState.LOGIN_KEY);
      return await this.#login(op);
    }

    if (op && op.password !== loginResp.password) {
      $.log("密码变化，尝试重新登陆");
      return await this.#login(op);
    }

    this.validate(loginResp);
    op && $.log("✅已登录", loginResp.accountInfo);
    return loginResp;
  }

  /**
   * 刷新登录Cookie
   * @des