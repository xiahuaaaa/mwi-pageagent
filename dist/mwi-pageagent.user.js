// ==UserScript==
// @name         MWI PageAgent Read-only Analyst
// @namespace    mwi_pageagent
// @version      0.2.0
// @description  Read-only MWI state projection for private PageAgent analysis.
// @match        https://www.milkywayidle.com/game*
// @match        https://www.milkywayidlecn.com/game*
// @match        https://test.milkywayidle.com/game*
// @match        https://test.milkywayidlecn.com/game*
// @grant        none
// @run-at       document-end
// ==/UserScript==
(() => {
  var __defProp = Object.defineProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/zod/v4/core/core.js
  var NEVER = Object.freeze({
    status: "aborted"
  });
  // @__NO_SIDE_EFFECTS__
  function $constructor(name, initializer3, params) {
    function init(inst, def) {
      var _a2;
      Object.defineProperty(inst, "_zod", {
        value: inst._zod ?? {},
        enumerable: false
      });
      (_a2 = inst._zod).traits ?? (_a2.traits = /* @__PURE__ */ new Set());
      inst._zod.traits.add(name);
      initializer3(inst, def);
      for (const k in _.prototype) {
        if (!(k in inst))
          Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
      }
      inst._zod.constr = _;
      inst._zod.def = def;
    }
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _(def) {
      var _a2;
      const inst = params?.Parent ? new Definition() : this;
      init(inst, def);
      (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
      for (const fn of inst._zod.deferred) {
        fn();
      }
      return inst;
    }
    Object.defineProperty(_, "init", { value: init });
    Object.defineProperty(_, Symbol.hasInstance, {
      value: (inst) => {
        if (params?.Parent && inst instanceof params.Parent)
          return true;
        return inst?._zod?.traits?.has(name);
      }
    });
    Object.defineProperty(_, "name", { value: name });
    return _;
  }
  var $ZodAsyncError = class extends Error {
    constructor() {
      super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
  };
  var globalConfig = {};
  function config(newConfig) {
    if (newConfig)
      Object.assign(globalConfig, newConfig);
    return globalConfig;
  }

  // node_modules/zod/v4/core/util.js
  var util_exports = {};
  __export(util_exports, {
    BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
    Class: () => Class,
    NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
    aborted: () => aborted,
    allowsEval: () => allowsEval,
    assert: () => assert,
    assertEqual: () => assertEqual,
    assertIs: () => assertIs,
    assertNever: () => assertNever,
    assertNotEqual: () => assertNotEqual,
    assignProp: () => assignProp,
    cached: () => cached,
    captureStackTrace: () => captureStackTrace,
    cleanEnum: () => cleanEnum,
    cleanRegex: () => cleanRegex,
    clone: () => clone,
    createTransparentProxy: () => createTransparentProxy,
    defineLazy: () => defineLazy,
    esc: () => esc,
    escapeRegex: () => escapeRegex,
    extend: () => extend,
    finalizeIssue: () => finalizeIssue,
    floatSafeRemainder: () => floatSafeRemainder,
    getElementAtPath: () => getElementAtPath,
    getEnumValues: () => getEnumValues,
    getLengthableOrigin: () => getLengthableOrigin,
    getParsedType: () => getParsedType,
    getSizableOrigin: () => getSizableOrigin,
    isObject: () => isObject,
    isPlainObject: () => isPlainObject,
    issue: () => issue,
    joinValues: () => joinValues,
    jsonStringifyReplacer: () => jsonStringifyReplacer,
    merge: () => merge,
    normalizeParams: () => normalizeParams,
    nullish: () => nullish,
    numKeys: () => numKeys,
    omit: () => omit,
    optionalKeys: () => optionalKeys,
    partial: () => partial,
    pick: () => pick,
    prefixIssues: () => prefixIssues,
    primitiveTypes: () => primitiveTypes,
    promiseAllObject: () => promiseAllObject,
    propertyKeyTypes: () => propertyKeyTypes,
    randomString: () => randomString,
    required: () => required,
    stringifyPrimitive: () => stringifyPrimitive,
    unwrapMessage: () => unwrapMessage
  });
  function assertEqual(val) {
    return val;
  }
  function assertNotEqual(val) {
    return val;
  }
  function assertIs(_arg) {
  }
  function assertNever(_x) {
    throw new Error();
  }
  function assert(_) {
  }
  function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v) => typeof v === "number");
    const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
    return values;
  }
  function joinValues(array2, separator = "|") {
    return array2.map((val) => stringifyPrimitive(val)).join(separator);
  }
  function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint")
      return value.toString();
    return value;
  }
  function cached(getter) {
    const set = false;
    return {
      get value() {
        if (!set) {
          const value = getter();
          Object.defineProperty(this, "value", { value });
          return value;
        }
        throw new Error("cached value already set");
      }
    };
  }
  function nullish(input) {
    return input === null || input === void 0;
  }
  function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
  }
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
  }
  function defineLazy(object2, key, getter) {
    const set = false;
    Object.defineProperty(object2, key, {
      get() {
        if (!set) {
          const value = getter();
          object2[key] = value;
          return value;
        }
        throw new Error("cached value already set");
      },
      set(v) {
        Object.defineProperty(object2, key, {
          value: v
          // configurable: true,
        });
      },
      configurable: true
    });
  }
  function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
      value,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function getElementAtPath(obj, path) {
    if (!path)
      return obj;
    return path.reduce((acc, key) => acc?.[key], obj);
  }
  function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key) => promisesObj[key]);
    return Promise.all(promises).then((results) => {
      const resolvedObj = {};
      for (let i = 0; i < keys.length; i++) {
        resolvedObj[keys[i]] = results[i];
      }
      return resolvedObj;
    });
  }
  function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  function esc(str) {
    return JSON.stringify(str);
  }
  var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {
  };
  function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
  }
  var allowsEval = cached(() => {
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
      return false;
    }
    try {
      const F = Function;
      new F("");
      return true;
    } catch (_) {
      return false;
    }
  });
  function isPlainObject(o) {
    if (isObject(o) === false)
      return false;
    const ctor = o.constructor;
    if (ctor === void 0)
      return true;
    const prot = ctor.prototype;
    if (isObject(prot) === false)
      return false;
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
      return false;
    }
    return true;
  }
  function numKeys(data) {
    let keyCount = 0;
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        keyCount++;
      }
    }
    return keyCount;
  }
  var getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(data) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return "promise";
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return "map";
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return "set";
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return "date";
        }
        if (typeof File !== "undefined" && data instanceof File) {
          return "file";
        }
        return "object";
      default:
        throw new Error(`Unknown data type: ${t}`);
    }
  };
  var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  var primitiveTypes = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent)
      cl._zod.parent = inst;
    return cl;
  }
  function normalizeParams(_params) {
    const params = _params;
    if (!params)
      return {};
    if (typeof params === "string")
      return { error: () => params };
    if (params?.message !== void 0) {
      if (params?.error !== void 0)
        throw new Error("Cannot specify both `message` and `error` params");
      params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string")
      return { ...params, error: () => params.error };
    return params;
  }
  function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
      get(_, prop, receiver) {
        target ?? (target = getter());
        return Reflect.get(target, prop, receiver);
      },
      set(_, prop, value, receiver) {
        target ?? (target = getter());
        return Reflect.set(target, prop, value, receiver);
      },
      has(_, prop) {
        target ?? (target = getter());
        return Reflect.has(target, prop);
      },
      deleteProperty(_, prop) {
        target ?? (target = getter());
        return Reflect.deleteProperty(target, prop);
      },
      ownKeys(_) {
        target ?? (target = getter());
        return Reflect.ownKeys(target);
      },
      getOwnPropertyDescriptor(_, prop) {
        target ?? (target = getter());
        return Reflect.getOwnPropertyDescriptor(target, prop);
      },
      defineProperty(_, prop, descriptor) {
        target ?? (target = getter());
        return Reflect.defineProperty(target, prop, descriptor);
      }
    });
  }
  function stringifyPrimitive(value) {
    if (typeof value === "bigint")
      return value.toString() + "n";
    if (typeof value === "string")
      return `"${value}"`;
    return `${value}`;
  }
  function optionalKeys(shape) {
    return Object.keys(shape).filter((k) => {
      return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
  }
  var NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  };
  var BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
  };
  function pick(schema, mask) {
    const newShape = {};
    const currDef = schema._zod.def;
    for (const key in mask) {
      if (!(key in currDef.shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      newShape[key] = currDef.shape[key];
    }
    return clone(schema, {
      ...schema._zod.def,
      shape: newShape,
      checks: []
    });
  }
  function omit(schema, mask) {
    const newShape = { ...schema._zod.def.shape };
    const currDef = schema._zod.def;
    for (const key in mask) {
      if (!(key in currDef.shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      delete newShape[key];
    }
    return clone(schema, {
      ...schema._zod.def,
      shape: newShape,
      checks: []
    });
  }
  function extend(schema, shape) {
    if (!isPlainObject(shape)) {
      throw new Error("Invalid input to extend: expected a plain object");
    }
    const def = {
      ...schema._zod.def,
      get shape() {
        const _shape = { ...schema._zod.def.shape, ...shape };
        assignProp(this, "shape", _shape);
        return _shape;
      },
      checks: []
      // delete existing checks
    };
    return clone(schema, def);
  }
  function merge(a, b) {
    return clone(a, {
      ...a._zod.def,
      get shape() {
        const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
        assignProp(this, "shape", _shape);
        return _shape;
      },
      catchall: b._zod.def.catchall,
      checks: []
      // delete existing checks
    });
  }
  function partial(Class2, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = { ...oldShape };
    if (mask) {
      for (const key in mask) {
        if (!(key in oldShape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        shape[key] = Class2 ? new Class2({
          type: "optional",
          innerType: oldShape[key]
        }) : oldShape[key];
      }
    } else {
      for (const key in oldShape) {
        shape[key] = Class2 ? new Class2({
          type: "optional",
          innerType: oldShape[key]
        }) : oldShape[key];
      }
    }
    return clone(schema, {
      ...schema._zod.def,
      shape,
      checks: []
    });
  }
  function required(Class2, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = { ...oldShape };
    if (mask) {
      for (const key in mask) {
        if (!(key in shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        shape[key] = new Class2({
          type: "nonoptional",
          innerType: oldShape[key]
        });
      }
    } else {
      for (const key in oldShape) {
        shape[key] = new Class2({
          type: "nonoptional",
          innerType: oldShape[key]
        });
      }
    }
    return clone(schema, {
      ...schema._zod.def,
      shape,
      // optional: [],
      checks: []
    });
  }
  function aborted(x, startIndex = 0) {
    for (let i = startIndex; i < x.issues.length; i++) {
      if (x.issues[i]?.continue !== true)
        return true;
    }
    return false;
  }
  function prefixIssues(path, issues) {
    return issues.map((iss) => {
      var _a2;
      (_a2 = iss).path ?? (_a2.path = []);
      iss.path.unshift(path);
      return iss;
    });
  }
  function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
  }
  function finalizeIssue(iss, ctx, config2) {
    const full = { ...iss, path: iss.path ?? [] };
    if (!iss.message) {
      const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
      full.message = message;
    }
    delete full.inst;
    delete full.continue;
    if (!ctx?.reportInput) {
      delete full.input;
    }
    return full;
  }
  function getSizableOrigin(input) {
    if (input instanceof Set)
      return "set";
    if (input instanceof Map)
      return "map";
    if (input instanceof File)
      return "file";
    return "unknown";
  }
  function getLengthableOrigin(input) {
    if (Array.isArray(input))
      return "array";
    if (typeof input === "string")
      return "string";
    return "unknown";
  }
  function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
      return {
        message: iss,
        code: "custom",
        input,
        inst
      };
    }
    return { ...iss };
  }
  function cleanEnum(obj) {
    return Object.entries(obj).filter(([k, _]) => {
      return Number.isNaN(Number.parseInt(k, 10));
    }).map((el) => el[1]);
  }
  var Class = class {
    constructor(..._args) {
    }
  };

  // node_modules/zod/v4/core/errors.js
  var initializer = (inst, def) => {
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
      value: inst._zod,
      enumerable: false
    });
    Object.defineProperty(inst, "issues", {
      value: def,
      enumerable: false
    });
    Object.defineProperty(inst, "message", {
      get() {
        return JSON.stringify(def, jsonStringifyReplacer, 2);
      },
      enumerable: true
      // configurable: false,
    });
    Object.defineProperty(inst, "toString", {
      value: () => inst.message,
      enumerable: false
    });
  };
  var $ZodError = $constructor("$ZodError", initializer);
  var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
  function flattenError(error2, mapper = (issue2) => issue2.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error2.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  function formatError(error2, _mapper) {
    const mapper = _mapper || function(issue2) {
      return issue2.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error3) => {
      for (const issue2 of error3.issues) {
        if (issue2.code === "invalid_union" && issue2.errors.length) {
          issue2.errors.map((issues) => processError({ issues }));
        } else if (issue2.code === "invalid_key") {
          processError({ issues: issue2.issues });
        } else if (issue2.code === "invalid_element") {
          processError({ issues: issue2.issues });
        } else if (issue2.path.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue2.path.length) {
            const el = issue2.path[i];
            const terminal = i === issue2.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue2));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(error2);
    return fieldErrors;
  }
  function toDotPath(path) {
    const segs = [];
    for (const seg of path) {
      if (typeof seg === "number")
        segs.push(`[${seg}]`);
      else if (typeof seg === "symbol")
        segs.push(`[${JSON.stringify(String(seg))}]`);
      else if (/[^\w$]/.test(seg))
        segs.push(`[${JSON.stringify(seg)}]`);
      else {
        if (segs.length)
          segs.push(".");
        segs.push(seg);
      }
    }
    return segs.join("");
  }
  function prettifyError(error2) {
    const lines = [];
    const issues = [...error2.issues].sort((a, b) => a.path.length - b.path.length);
    for (const issue2 of issues) {
      lines.push(`\u2716 ${issue2.message}`);
      if (issue2.path?.length)
        lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
    }
    return lines.join("\n");
  }

  // node_modules/zod/v4/core/parse.js
  var _parse = (_Err) => (schema, value, _ctx, _params) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, _params?.callee);
      throw e;
    }
    return result.value;
  };
  var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, params?.callee);
      throw e;
    }
    return result.value;
  };
  var _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    return result.issues.length ? {
      success: false,
      error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    } : { success: true, data: result.value };
  };
  var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
  var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    return result.issues.length ? {
      success: false,
      error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    } : { success: true, data: result.value };
  };
  var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);

  // node_modules/zod/v4/core/regexes.js
  var cuid = /^[cC][^\s-]{8,}$/;
  var cuid2 = /^[0-9a-z]+$/;
  var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  var xid = /^[0-9a-vA-V]{20}$/;
  var ksuid = /^[A-Za-z0-9]{27}$/;
  var nanoid = /^[a-zA-Z0-9_-]{21}$/;
  var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  var uuid = (version2) => {
    if (!version2)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
  var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  function emoji() {
    return new RegExp(_emoji, "u");
  }
  var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
  var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  var base64url = /^[A-Za-z0-9_-]*$/;
  var hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
  var e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
  var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
  var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
  function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
  }
  function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
  }
  function datetime(args) {
    const time3 = timeSource({ precision: args.precision });
    const opts = ["Z"];
    if (args.local)
      opts.push("");
    if (args.offset)
      opts.push(`([+-]\\d{2}:\\d{2})`);
    const timeRegex = `${time3}(?:${opts.join("|")})`;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
  }
  var string = (params) => {
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
  };
  var integer = /^\d+$/;
  var number = /^-?\d+(?:\.\d+)?/i;
  var boolean = /true|false/i;
  var lowercase = /^[^A-Z]*$/;
  var uppercase = /^[^a-z]*$/;

  // node_modules/zod/v4/core/checks.js
  var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
    var _a2;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a2 = inst._zod).onattach ?? (_a2.onattach = []);
  });
  var numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date"
  };
  var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (def.value < curr) {
        if (def.inclusive)
          bag.maximum = def.value;
        else
          bag.exclusiveMaximum = def.value;
      }
    });
    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
        return;
      }
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.value,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (def.value > curr) {
        if (def.inclusive)
          bag.minimum = def.value;
        else
          bag.exclusiveMinimum = def.value;
      }
    });
    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
        return;
      }
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.value,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      var _a2;
      (_a2 = inst2._zod.bag).multipleOf ?? (_a2.multipleOf = def.value);
    });
    inst._zod.check = (payload) => {
      if (typeof payload.value !== typeof def.value)
        throw new Error("Cannot mix number and bigint in multiple_of check.");
      const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
      if (isMultiple)
        return;
      payload.issues.push({
        origin: typeof payload.value,
        code: "not_multiple_of",
        divisor: def.value,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
    $ZodCheck.init(inst, def);
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
      if (isInt)
        bag.pattern = integer;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (isInt) {
        if (!Number.isInteger(input)) {
          payload.issues.push({
            expected: origin,
            format: def.format,
            code: "invalid_type",
            input,
            inst
          });
          return;
        }
        if (!Number.isSafeInteger(input)) {
          if (input > 0) {
            payload.issues.push({
              input,
              code: "too_big",
              maximum: Number.MAX_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              continue: !def.abort
            });
          } else {
            payload.issues.push({
              input,
              code: "too_small",
              minimum: Number.MIN_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              continue: !def.abort
            });
          }
          return;
        }
      }
      if (input < minimum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_small",
          minimum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
      if (input > maximum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_big",
          maximum,
          inst
        });
      }
    };
  });
  var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a2;
    $ZodCheck.init(inst, def);
    (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length <= def.maximum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
    var _a2;
    $ZodCheck.init(inst, def);
    (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length >= def.minimum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a2;
    $ZodCheck.init(inst, def);
    (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.length;
      bag.maximum = def.length;
      bag.length = def.length;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length === def.length)
        return;
      const origin = getLengthableOrigin(input);
      const tooBig = length > def.length;
      payload.issues.push({
        origin,
        ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a2, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      if (def.pattern) {
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(def.pattern);
      }
    });
    if (def.pattern)
      (_a2 = inst._zod).check ?? (_a2.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          ...def.pattern ? { pattern: def.pattern.toString() } : {},
          inst,
          continue: !def.abort
        });
      });
    else
      (_b = inst._zod).check ?? (_b.check = () => {
      });
  });
  var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = lowercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = uppercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.includes(def.includes, def.position))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: def.includes,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.startsWith(def.prefix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: def.prefix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.endsWith(def.suffix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: def.suffix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      payload.value = def.tx(payload.value);
    };
  });

  // node_modules/zod/v4/core/doc.js
  var Doc = class {
    constructor(args = []) {
      this.content = [];
      this.indent = 0;
      if (this)
        this.args = args;
    }
    indented(fn) {
      this.indent += 1;
      fn(this);
      this.indent -= 1;
    }
    write(arg) {
      if (typeof arg === "function") {
        arg(this, { execution: "sync" });
        arg(this, { execution: "async" });
        return;
      }
      const content = arg;
      const lines = content.split("\n").filter((x) => x);
      const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
      const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
      for (const line of dedented) {
        this.content.push(line);
      }
    }
    compile() {
      const F = Function;
      const args = this?.args;
      const content = this?.content ?? [``];
      const lines = [...content.map((x) => `  ${x}`)];
      return new F(...args, lines.join("\n"));
    }
  };

  // node_modules/zod/v4/core/versions.js
  var version = {
    major: 4,
    minor: 0,
    patch: 0
  };

  // node_modules/zod/v4/core/schemas.js
  var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
    var _a2;
    inst ?? (inst = {});
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version;
    const checks = [...inst._zod.def.checks ?? []];
    if (inst._zod.traits.has("$ZodCheck")) {
      checks.unshift(inst);
    }
    for (const ch of checks) {
      for (const fn of ch._zod.onattach) {
        fn(inst);
      }
    }
    if (checks.length === 0) {
      (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
      inst._zod.deferred?.push(() => {
        inst._zod.run = inst._zod.parse;
      });
    } else {
      const runChecks = (payload, checks2, ctx) => {
        let isAborted = aborted(payload);
        let asyncResult;
        for (const ch of checks2) {
          if (ch._zod.def.when) {
            const shouldRun = ch._zod.def.when(payload);
            if (!shouldRun)
              continue;
          } else if (isAborted) {
            continue;
          }
          const currLen = payload.issues.length;
          const _ = ch._zod.check(payload);
          if (_ instanceof Promise && ctx?.async === false) {
            throw new $ZodAsyncError();
          }
          if (asyncResult || _ instanceof Promise) {
            asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
              await _;
              const nextLen = payload.issues.length;
              if (nextLen === currLen)
                return;
              if (!isAborted)
                isAborted = aborted(payload, currLen);
            });
          } else {
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              continue;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          }
        }
        if (asyncResult) {
          return asyncResult.then(() => {
            return payload;
          });
        }
        return payload;
      };
      inst._zod.run = (payload, ctx) => {
        const result = inst._zod.parse(payload, ctx);
        if (result instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError();
          return result.then((result2) => runChecks(result2, checks, ctx));
        }
        return runChecks(result, checks, ctx);
      };
    }
    inst["~standard"] = {
      validate: (value) => {
        try {
          const r = safeParse(inst, value);
          return r.success ? { value: r.data } : { issues: r.error?.issues };
        } catch (_) {
          return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
        }
      },
      vendor: "zod",
      version: 1
    };
  });
  var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
    inst._zod.parse = (payload, _) => {
      if (def.coerce)
        try {
          payload.value = String(payload.value);
        } catch (_2) {
        }
      if (typeof payload.value === "string")
        return payload;
      payload.issues.push({
        expected: "string",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
  });
  var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = guid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
      const versionMap = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      };
      const v = versionMap[def.version];
      if (v === void 0)
        throw new Error(`Invalid UUID version: "${def.version}"`);
      def.pattern ?? (def.pattern = uuid(v));
    } else
      def.pattern ?? (def.pattern = uuid());
    $ZodStringFormat.init(inst, def);
  });
  var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = email);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      try {
        const orig = payload.value;
        const url = new URL(orig);
        const href = url.href;
        if (def.hostname) {
          def.hostname.lastIndex = 0;
          if (!def.hostname.test(url.hostname)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: hostname.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (def.protocol) {
          def.protocol.lastIndex = 0;
          if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid protocol",
              pattern: def.protocol.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (!orig.endsWith("/") && href.endsWith("/")) {
          payload.value = href.slice(0, -1);
        } else {
          payload.value = href;
        }
        return;
      } catch (_) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = emoji());
    $ZodStringFormat.init(inst, def);
  });
  var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
    def.pattern ?? (def.pattern = nanoid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = cuid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = cuid2);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = ulid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = xid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = ksuid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = datetime(def));
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = date);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = time(def));
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = duration);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = ipv4);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = `ipv4`;
    });
  });
  var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = `ipv6`;
    });
    inst._zod.check = (payload) => {
      try {
        new URL(`http://[${payload.value}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv4);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      const [address, prefix] = payload.value.split("/");
      try {
        if (!prefix)
          throw new Error();
        const prefixNum = Number(prefix);
        if (`${prefixNum}` !== prefix)
          throw new Error();
        if (prefixNum < 0 || prefixNum > 128)
          throw new Error();
        new URL(`http://[${address}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  function isValidBase64(data) {
    if (data === "")
      return true;
    if (data.length % 4 !== 0)
      return false;
    try {
      atob(data);
      return true;
    } catch {
      return false;
    }
  }
  var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = base64);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      inst2._zod.bag.contentEncoding = "base64";
    });
    inst._zod.check = (payload) => {
      if (isValidBase64(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  function isValidBase64URL(data) {
    if (!base64url.test(data))
      return false;
    const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
    const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
    return isValidBase64(padded);
  }
  var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = base64url);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      inst2._zod.bag.contentEncoding = "base64url";
    });
    inst._zod.check = (payload) => {
      if (isValidBase64URL(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = e164);
    $ZodStringFormat.init(inst, def);
  });
  function isValidJWT(token, algorithm = null) {
    try {
      const tokensParts = token.split(".");
      if (tokensParts.length !== 3)
        return false;
      const [header] = tokensParts;
      if (!header)
        return false;
      const parsedHeader = JSON.parse(atob(header));
      if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
        return false;
      if (!parsedHeader.alg)
        return false;
      if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
        return false;
      return true;
    } catch {
      return false;
    }
  }
  var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (isValidJWT(payload.value, def.alg))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = inst._zod.bag.pattern ?? number;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = Number(payload.value);
        } catch (_) {
        }
      const input = payload.value;
      if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
        return payload;
      }
      const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
      payload.issues.push({
        expected: "number",
        code: "invalid_type",
        input,
        inst,
        ...received ? { received } : {}
      });
      return payload;
    };
  });
  var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
    $ZodCheckNumberFormat.init(inst, def);
    $ZodNumber.init(inst, def);
  });
  var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = boolean;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = Boolean(payload.value);
        } catch (_) {
        }
      const input = payload.value;
      if (typeof input === "boolean")
        return payload;
      payload.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
  });
  var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      payload.issues.push({
        expected: "never",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  function handleArrayResult(result, final, index) {
    if (result.issues.length) {
      final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
  }
  var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          expected: "array",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = Array(input.length);
      const proms = [];
      for (let i = 0; i < input.length; i++) {
        const item = input[i];
        const result = def.element._zod.run({
          value: item,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
        } else {
          handleArrayResult(result, payload, i);
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => payload);
      }
      return payload;
    };
  });
  function handleObjectResult(result, final, key) {
    if (result.issues.length) {
      final.issues.push(...prefixIssues(key, result.issues));
    }
    final.value[key] = result.value;
  }
  function handleOptionalObjectResult(result, final, key, input) {
    if (result.issues.length) {
      if (input[key] === void 0) {
        if (key in input) {
          final.value[key] = void 0;
        } else {
          final.value[key] = result.value;
        }
      } else {
        final.issues.push(...prefixIssues(key, result.issues));
      }
    } else if (result.value === void 0) {
      if (key in input)
        final.value[key] = void 0;
    } else {
      final.value[key] = result.value;
    }
  }
  var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
    $ZodType.init(inst, def);
    const _normalized = cached(() => {
      const keys = Object.keys(def.shape);
      for (const k of keys) {
        if (!(def.shape[k] instanceof $ZodType)) {
          throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
        }
      }
      const okeys = optionalKeys(def.shape);
      return {
        shape: def.shape,
        keys,
        keySet: new Set(keys),
        numKeys: keys.length,
        optionalKeys: new Set(okeys)
      };
    });
    defineLazy(inst._zod, "propValues", () => {
      const shape = def.shape;
      const propValues = {};
      for (const key in shape) {
        const field = shape[key]._zod;
        if (field.values) {
          propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
          for (const v of field.values)
            propValues[key].add(v);
        }
      }
      return propValues;
    });
    const generateFastpass = (shape) => {
      const doc = new Doc(["shape", "payload", "ctx"]);
      const normalized = _normalized.value;
      const parseStr = (key) => {
        const k = esc(key);
        return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
      };
      doc.write(`const input = payload.value;`);
      const ids2 = /* @__PURE__ */ Object.create(null);
      let counter = 0;
      for (const key of normalized.keys) {
        ids2[key] = `key_${counter++}`;
      }
      doc.write(`const newResult = {}`);
      for (const key of normalized.keys) {
        if (normalized.optionalKeys.has(key)) {
          const id = ids2[key];
          doc.write(`const ${id} = ${parseStr(key)};`);
          const k = esc(key);
          doc.write(`
        if (${id}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${id}.value;
        }
        `);
        } else {
          const id = ids2[key];
          doc.write(`const ${id} = ${parseStr(key)};`);
          doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc(key)}, ...iss.path] : [${esc(key)}]
          })));`);
          doc.write(`newResult[${esc(key)}] = ${id}.value`);
        }
      }
      doc.write(`payload.value = newResult;`);
      doc.write(`return payload;`);
      const fn = doc.compile();
      return (payload, ctx) => fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject2 = isObject;
    const jit = !globalConfig.jitless;
    const allowsEval2 = allowsEval;
    const fastEnabled = jit && allowsEval2.value;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject2(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      const proms = [];
      if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
        if (!fastpass)
          fastpass = generateFastpass(def.shape);
        payload = fastpass(payload, ctx);
      } else {
        payload.value = {};
        const shape = value.shape;
        for (const key of value.keys) {
          const el = shape[key];
          const r = el._zod.run({ value: input[key], issues: [] }, ctx);
          const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
          if (r instanceof Promise) {
            proms.push(r.then((r2) => isOptional ? handleOptionalObjectResult(r2, payload, key, input) : handleObjectResult(r2, payload, key)));
          } else if (isOptional) {
            handleOptionalObjectResult(r, payload, key, input);
          } else {
            handleObjectResult(r, payload, key);
          }
        }
      }
      if (!catchall) {
        return proms.length ? Promise.all(proms).then(() => payload) : payload;
      }
      const unrecognized = [];
      const keySet = value.keySet;
      const _catchall = catchall._zod;
      const t = _catchall.def.type;
      for (const key of Object.keys(input)) {
        if (keySet.has(key))
          continue;
        if (t === "never") {
          unrecognized.push(key);
          continue;
        }
        const r = _catchall.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
          proms.push(r.then((r2) => handleObjectResult(r2, payload, key)));
        } else {
          handleObjectResult(r, payload, key);
        }
      }
      if (unrecognized.length) {
        payload.issues.push({
          code: "unrecognized_keys",
          keys: unrecognized,
          input,
          inst
        });
      }
      if (!proms.length)
        return payload;
      return Promise.all(proms).then(() => {
        return payload;
      });
    };
  });
  function handleUnionResults(results, final, inst, ctx) {
    for (const result of results) {
      if (result.issues.length === 0) {
        final.value = result.value;
        return final;
      }
    }
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
    return final;
  }
  var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "values", () => {
      if (def.options.every((o) => o._zod.values)) {
        return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
      }
      return void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      if (def.options.every((o) => o._zod.pattern)) {
        const patterns = def.options.map((o) => o._zod.pattern);
        return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
      }
      return void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          if (result.issues.length === 0)
            return result;
          results.push(result);
        }
      }
      if (!async)
        return handleUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      const left = def.left._zod.run({ value: input, issues: [] }, ctx);
      const right = def.right._zod.run({ value: input, issues: [] }, ctx);
      const async = left instanceof Promise || right instanceof Promise;
      if (async) {
        return Promise.all([left, right]).then(([left2, right2]) => {
          return handleIntersectionResults(payload, left2, right2);
        });
      }
      return handleIntersectionResults(payload, left, right);
    };
  });
  function mergeValues(a, b) {
    if (a === b) {
      return { valid: true, data: a };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
      return { valid: true, data: a };
    }
    if (isPlainObject(a) && isPlainObject(b)) {
      const bKeys = Object.keys(b);
      const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return {
            valid: false,
            mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
          };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return { valid: false, mergeErrorPath: [] };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return {
            valid: false,
            mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
          };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
      result.issues.push(...left.issues);
    }
    if (right.issues.length) {
      result.issues.push(...right.issues);
    }
    if (aborted(result))
      return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
      throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
  }
  var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    inst._zod.values = new Set(values);
    inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (inst._zod.values.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values,
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const _out = def.transform(payload.value, payload);
      if (_ctx.async) {
        const output = _out instanceof Promise ? _out : Promise.resolve(_out);
        return output.then((output2) => {
          payload.value = output2;
          return payload;
        });
      }
      if (_out instanceof Promise) {
        throw new $ZodAsyncError();
      }
      payload.value = _out;
      return payload;
    };
  });
  var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (def.innerType._zod.optin === "optional") {
        return def.innerType._zod.run(payload, ctx);
      }
      if (payload.value === void 0) {
        return payload;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
    });
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === null)
        return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
        return payload;
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleDefaultResult(result2, def));
      }
      return handleDefaultResult(result, def);
    };
  });
  function handleDefaultResult(payload, def) {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return payload;
  }
  var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => {
      const v = def.innerType._zod.values;
      return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleNonOptionalResult(result2, inst));
      }
      return handleNonOptionalResult(result, inst);
    };
  });
  function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === void 0) {
      payload.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: payload.value,
        inst
      });
    }
    return payload;
  }
  var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => {
          payload.value = result2.value;
          if (result2.issues.length) {
            payload.value = def.catchValue({
              ...payload,
              error: {
                issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
              },
              input: payload.value
            });
            payload.issues = [];
          }
          return payload;
        });
      }
      payload.value = result.value;
      if (result.issues.length) {
        payload.value = def.catchValue({
          ...payload,
          error: {
            issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
          },
          input: payload.value
        });
        payload.issues = [];
      }
      return payload;
    };
  });
  var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    inst._zod.parse = (payload, ctx) => {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handlePipeResult(left2, def, ctx));
      }
      return handlePipeResult(left, def, ctx);
    };
  });
  function handlePipeResult(left, def, ctx) {
    if (aborted(left)) {
      return left;
    }
    return def.out._zod.run({ value: left.value, issues: left.issues }, ctx);
  }
  var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then(handleReadonlyResult);
      }
      return handleReadonlyResult(result);
    };
  });
  function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
  }
  var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
      return payload;
    };
    inst._zod.check = (payload) => {
      const input = payload.value;
      const r = def.fn(input);
      if (r instanceof Promise) {
        return r.then((r2) => handleRefineResult(r2, payload, input, inst));
      }
      handleRefineResult(r, payload, input, inst);
      return;
    };
  });
  function handleRefineResult(result, payload, input, inst) {
    if (!result) {
      const _iss = {
        code: "custom",
        input,
        inst,
        // incorporates params.error into issue reporting
        path: [...inst._zod.def.path ?? []],
        // incorporates params.error into issue reporting
        continue: !inst._zod.def.abort
        // params: inst._zod.def.params,
      };
      if (inst._zod.def.params)
        _iss.params = inst._zod.def.params;
      payload.issues.push(issue(_iss));
    }
  }

  // node_modules/zod/v4/locales/en.js
  var parsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "number";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
          return data.constructor.name;
        }
      }
    }
    return t;
  };
  var error = () => {
    const Sizable = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const Nouns = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type":
          return `Invalid input: expected ${issue2.expected}, received ${parsedType(issue2.input)}`;
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
          return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
          return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Invalid string: must start with "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Invalid string: must end with "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Invalid string: must include "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Invalid string: must match pattern ${_issue.pattern}`;
          return `Invalid ${Nouns[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${issue2.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${issue2.origin}`;
        default:
          return `Invalid input`;
      }
    };
  };
  function en_default() {
    return {
      localeError: error()
    };
  }

  // node_modules/zod/v4/core/registries.js
  var $ZodRegistry = class {
    constructor() {
      this._map = /* @__PURE__ */ new Map();
      this._idmap = /* @__PURE__ */ new Map();
    }
    add(schema, ..._meta) {
      const meta = _meta[0];
      this._map.set(schema, meta);
      if (meta && typeof meta === "object" && "id" in meta) {
        if (this._idmap.has(meta.id)) {
          throw new Error(`ID ${meta.id} already exists in the registry`);
        }
        this._idmap.set(meta.id, schema);
      }
      return this;
    }
    clear() {
      this._map = /* @__PURE__ */ new Map();
      this._idmap = /* @__PURE__ */ new Map();
      return this;
    }
    remove(schema) {
      const meta = this._map.get(schema);
      if (meta && typeof meta === "object" && "id" in meta) {
        this._idmap.delete(meta.id);
      }
      this._map.delete(schema);
      return this;
    }
    get(schema) {
      const p = schema._zod.parent;
      if (p) {
        const pm = { ...this.get(p) ?? {} };
        delete pm.id;
        return { ...pm, ...this._map.get(schema) };
      }
      return this._map.get(schema);
    }
    has(schema) {
      return this._map.has(schema);
    }
  };
  function registry() {
    return new $ZodRegistry();
  }
  var globalRegistry = /* @__PURE__ */ registry();

  // node_modules/zod/v4/core/api.js
  function _string(Class2, params) {
    return new Class2({
      type: "string",
      ...normalizeParams(params)
    });
  }
  function _email(Class2, params) {
    return new Class2({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _guid(Class2, params) {
    return new Class2({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _uuid(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _uuidv4(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4",
      ...normalizeParams(params)
    });
  }
  function _uuidv6(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...normalizeParams(params)
    });
  }
  function _uuidv7(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...normalizeParams(params)
    });
  }
  function _url(Class2, params) {
    return new Class2({
      type: "string",
      format: "url",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _emoji2(Class2, params) {
    return new Class2({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _nanoid(Class2, params) {
    return new Class2({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _cuid(Class2, params) {
    return new Class2({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _cuid2(Class2, params) {
    return new Class2({
      type: "string",
      format: "cuid2",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _ulid(Class2, params) {
    return new Class2({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _xid(Class2, params) {
    return new Class2({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _ksuid(Class2, params) {
    return new Class2({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _ipv4(Class2, params) {
    return new Class2({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _ipv6(Class2, params) {
    return new Class2({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _cidrv4(Class2, params) {
    return new Class2({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _cidrv6(Class2, params) {
    return new Class2({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _base64(Class2, params) {
    return new Class2({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _base64url(Class2, params) {
    return new Class2({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _e164(Class2, params) {
    return new Class2({
      type: "string",
      format: "e164",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _jwt(Class2, params) {
    return new Class2({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  function _isoDateTime(Class2, params) {
    return new Class2({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null,
      ...normalizeParams(params)
    });
  }
  function _isoDate(Class2, params) {
    return new Class2({
      type: "string",
      format: "date",
      check: "string_format",
      ...normalizeParams(params)
    });
  }
  function _isoTime(Class2, params) {
    return new Class2({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null,
      ...normalizeParams(params)
    });
  }
  function _isoDuration(Class2, params) {
    return new Class2({
      type: "string",
      format: "duration",
      check: "string_format",
      ...normalizeParams(params)
    });
  }
  function _number(Class2, params) {
    return new Class2({
      type: "number",
      checks: [],
      ...normalizeParams(params)
    });
  }
  function _int(Class2, params) {
    return new Class2({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...normalizeParams(params)
    });
  }
  function _boolean(Class2, params) {
    return new Class2({
      type: "boolean",
      ...normalizeParams(params)
    });
  }
  function _unknown(Class2) {
    return new Class2({
      type: "unknown"
    });
  }
  function _never(Class2, params) {
    return new Class2({
      type: "never",
      ...normalizeParams(params)
    });
  }
  function _lt(value, params) {
    return new $ZodCheckLessThan({
      check: "less_than",
      ...normalizeParams(params),
      value,
      inclusive: false
    });
  }
  function _lte(value, params) {
    return new $ZodCheckLessThan({
      check: "less_than",
      ...normalizeParams(params),
      value,
      inclusive: true
    });
  }
  function _gt(value, params) {
    return new $ZodCheckGreaterThan({
      check: "greater_than",
      ...normalizeParams(params),
      value,
      inclusive: false
    });
  }
  function _gte(value, params) {
    return new $ZodCheckGreaterThan({
      check: "greater_than",
      ...normalizeParams(params),
      value,
      inclusive: true
    });
  }
  function _multipleOf(value, params) {
    return new $ZodCheckMultipleOf({
      check: "multiple_of",
      ...normalizeParams(params),
      value
    });
  }
  function _maxLength(maximum, params) {
    const ch = new $ZodCheckMaxLength({
      check: "max_length",
      ...normalizeParams(params),
      maximum
    });
    return ch;
  }
  function _minLength(minimum, params) {
    return new $ZodCheckMinLength({
      check: "min_length",
      ...normalizeParams(params),
      minimum
    });
  }
  function _length(length, params) {
    return new $ZodCheckLengthEquals({
      check: "length_equals",
      ...normalizeParams(params),
      length
    });
  }
  function _regex(pattern, params) {
    return new $ZodCheckRegex({
      check: "string_format",
      format: "regex",
      ...normalizeParams(params),
      pattern
    });
  }
  function _lowercase(params) {
    return new $ZodCheckLowerCase({
      check: "string_format",
      format: "lowercase",
      ...normalizeParams(params)
    });
  }
  function _uppercase(params) {
    return new $ZodCheckUpperCase({
      check: "string_format",
      format: "uppercase",
      ...normalizeParams(params)
    });
  }
  function _includes(includes, params) {
    return new $ZodCheckIncludes({
      check: "string_format",
      format: "includes",
      ...normalizeParams(params),
      includes
    });
  }
  function _startsWith(prefix, params) {
    return new $ZodCheckStartsWith({
      check: "string_format",
      format: "starts_with",
      ...normalizeParams(params),
      prefix
    });
  }
  function _endsWith(suffix, params) {
    return new $ZodCheckEndsWith({
      check: "string_format",
      format: "ends_with",
      ...normalizeParams(params),
      suffix
    });
  }
  function _overwrite(tx) {
    return new $ZodCheckOverwrite({
      check: "overwrite",
      tx
    });
  }
  function _normalize(form) {
    return _overwrite((input) => input.normalize(form));
  }
  function _trim() {
    return _overwrite((input) => input.trim());
  }
  function _toLowerCase() {
    return _overwrite((input) => input.toLowerCase());
  }
  function _toUpperCase() {
    return _overwrite((input) => input.toUpperCase());
  }
  function _array(Class2, element, params) {
    return new Class2({
      type: "array",
      element,
      // get element() {
      //   return element;
      // },
      ...normalizeParams(params)
    });
  }
  function _refine(Class2, fn, _params) {
    const schema = new Class2({
      type: "custom",
      check: "custom",
      fn,
      ...normalizeParams(_params)
    });
    return schema;
  }

  // node_modules/zod/v4/core/to-json-schema.js
  var JSONSchemaGenerator = class {
    constructor(params) {
      this.counter = 0;
      this.metadataRegistry = params?.metadata ?? globalRegistry;
      this.target = params?.target ?? "draft-2020-12";
      this.unrepresentable = params?.unrepresentable ?? "throw";
      this.override = params?.override ?? (() => {
      });
      this.io = params?.io ?? "output";
      this.seen = /* @__PURE__ */ new Map();
    }
    process(schema, _params = { path: [], schemaPath: [] }) {
      var _a2;
      const def = schema._zod.def;
      const formatMap = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
        // do not set
      };
      const seen = this.seen.get(schema);
      if (seen) {
        seen.count++;
        const isCycle = _params.schemaPath.includes(schema);
        if (isCycle) {
          seen.cycle = _params.path;
        }
        return seen.schema;
      }
      const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
      this.seen.set(schema, result);
      const overrideSchema = schema._zod.toJSONSchema?.();
      if (overrideSchema) {
        result.schema = overrideSchema;
      } else {
        const params = {
          ..._params,
          schemaPath: [..._params.schemaPath, schema],
          path: _params.path
        };
        const parent = schema._zod.parent;
        if (parent) {
          result.ref = parent;
          this.process(parent, params);
          this.seen.get(parent).isParent = true;
        } else {
          const _json = result.schema;
          switch (def.type) {
            case "string": {
              const json = _json;
              json.type = "string";
              const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
              if (typeof minimum === "number")
                json.minLength = minimum;
              if (typeof maximum === "number")
                json.maxLength = maximum;
              if (format) {
                json.format = formatMap[format] ?? format;
                if (json.format === "")
                  delete json.format;
              }
              if (contentEncoding)
                json.contentEncoding = contentEncoding;
              if (patterns && patterns.size > 0) {
                const regexes = [...patterns];
                if (regexes.length === 1)
                  json.pattern = regexes[0].source;
                else if (regexes.length > 1) {
                  result.schema.allOf = [
                    ...regexes.map((regex) => ({
                      ...this.target === "draft-7" ? { type: "string" } : {},
                      pattern: regex.source
                    }))
                  ];
                }
              }
              break;
            }
            case "number": {
              const json = _json;
              const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
              if (typeof format === "string" && format.includes("int"))
                json.type = "integer";
              else
                json.type = "number";
              if (typeof exclusiveMinimum === "number")
                json.exclusiveMinimum = exclusiveMinimum;
              if (typeof minimum === "number") {
                json.minimum = minimum;
                if (typeof exclusiveMinimum === "number") {
                  if (exclusiveMinimum >= minimum)
                    delete json.minimum;
                  else
                    delete json.exclusiveMinimum;
                }
              }
              if (typeof exclusiveMaximum === "number")
                json.exclusiveMaximum = exclusiveMaximum;
              if (typeof maximum === "number") {
                json.maximum = maximum;
                if (typeof exclusiveMaximum === "number") {
                  if (exclusiveMaximum <= maximum)
                    delete json.maximum;
                  else
                    delete json.exclusiveMaximum;
                }
              }
              if (typeof multipleOf === "number")
                json.multipleOf = multipleOf;
              break;
            }
            case "boolean": {
              const json = _json;
              json.type = "boolean";
              break;
            }
            case "bigint": {
              if (this.unrepresentable === "throw") {
                throw new Error("BigInt cannot be represented in JSON Schema");
              }
              break;
            }
            case "symbol": {
              if (this.unrepresentable === "throw") {
                throw new Error("Symbols cannot be represented in JSON Schema");
              }
              break;
            }
            case "null": {
              _json.type = "null";
              break;
            }
            case "any": {
              break;
            }
            case "unknown": {
              break;
            }
            case "undefined": {
              if (this.unrepresentable === "throw") {
                throw new Error("Undefined cannot be represented in JSON Schema");
              }
              break;
            }
            case "void": {
              if (this.unrepresentable === "throw") {
                throw new Error("Void cannot be represented in JSON Schema");
              }
              break;
            }
            case "never": {
              _json.not = {};
              break;
            }
            case "date": {
              if (this.unrepresentable === "throw") {
                throw new Error("Date cannot be represented in JSON Schema");
              }
              break;
            }
            case "array": {
              const json = _json;
              const { minimum, maximum } = schema._zod.bag;
              if (typeof minimum === "number")
                json.minItems = minimum;
              if (typeof maximum === "number")
                json.maxItems = maximum;
              json.type = "array";
              json.items = this.process(def.element, { ...params, path: [...params.path, "items"] });
              break;
            }
            case "object": {
              const json = _json;
              json.type = "object";
              json.properties = {};
              const shape = def.shape;
              for (const key in shape) {
                json.properties[key] = this.process(shape[key], {
                  ...params,
                  path: [...params.path, "properties", key]
                });
              }
              const allKeys = new Set(Object.keys(shape));
              const requiredKeys = new Set([...allKeys].filter((key) => {
                const v = def.shape[key]._zod;
                if (this.io === "input") {
                  return v.optin === void 0;
                } else {
                  return v.optout === void 0;
                }
              }));
              if (requiredKeys.size > 0) {
                json.required = Array.from(requiredKeys);
              }
              if (def.catchall?._zod.def.type === "never") {
                json.additionalProperties = false;
              } else if (!def.catchall) {
                if (this.io === "output")
                  json.additionalProperties = false;
              } else if (def.catchall) {
                json.additionalProperties = this.process(def.catchall, {
                  ...params,
                  path: [...params.path, "additionalProperties"]
                });
              }
              break;
            }
            case "union": {
              const json = _json;
              json.anyOf = def.options.map((x, i) => this.process(x, {
                ...params,
                path: [...params.path, "anyOf", i]
              }));
              break;
            }
            case "intersection": {
              const json = _json;
              const a = this.process(def.left, {
                ...params,
                path: [...params.path, "allOf", 0]
              });
              const b = this.process(def.right, {
                ...params,
                path: [...params.path, "allOf", 1]
              });
              const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
              const allOf = [
                ...isSimpleIntersection(a) ? a.allOf : [a],
                ...isSimpleIntersection(b) ? b.allOf : [b]
              ];
              json.allOf = allOf;
              break;
            }
            case "tuple": {
              const json = _json;
              json.type = "array";
              const prefixItems = def.items.map((x, i) => this.process(x, { ...params, path: [...params.path, "prefixItems", i] }));
              if (this.target === "draft-2020-12") {
                json.prefixItems = prefixItems;
              } else {
                json.items = prefixItems;
              }
              if (def.rest) {
                const rest = this.process(def.rest, {
                  ...params,
                  path: [...params.path, "items"]
                });
                if (this.target === "draft-2020-12") {
                  json.items = rest;
                } else {
                  json.additionalItems = rest;
                }
              }
              if (def.rest) {
                json.items = this.process(def.rest, {
                  ...params,
                  path: [...params.path, "items"]
                });
              }
              const { minimum, maximum } = schema._zod.bag;
              if (typeof minimum === "number")
                json.minItems = minimum;
              if (typeof maximum === "number")
                json.maxItems = maximum;
              break;
            }
            case "record": {
              const json = _json;
              json.type = "object";
              json.propertyNames = this.process(def.keyType, { ...params, path: [...params.path, "propertyNames"] });
              json.additionalProperties = this.process(def.valueType, {
                ...params,
                path: [...params.path, "additionalProperties"]
              });
              break;
            }
            case "map": {
              if (this.unrepresentable === "throw") {
                throw new Error("Map cannot be represented in JSON Schema");
              }
              break;
            }
            case "set": {
              if (this.unrepresentable === "throw") {
                throw new Error("Set cannot be represented in JSON Schema");
              }
              break;
            }
            case "enum": {
              const json = _json;
              const values = getEnumValues(def.entries);
              if (values.every((v) => typeof v === "number"))
                json.type = "number";
              if (values.every((v) => typeof v === "string"))
                json.type = "string";
              json.enum = values;
              break;
            }
            case "literal": {
              const json = _json;
              const vals = [];
              for (const val of def.values) {
                if (val === void 0) {
                  if (this.unrepresentable === "throw") {
                    throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                  } else {
                  }
                } else if (typeof val === "bigint") {
                  if (this.unrepresentable === "throw") {
                    throw new Error("BigInt literals cannot be represented in JSON Schema");
                  } else {
                    vals.push(Number(val));
                  }
                } else {
                  vals.push(val);
                }
              }
              if (vals.length === 0) {
              } else if (vals.length === 1) {
                const val = vals[0];
                json.type = val === null ? "null" : typeof val;
                json.const = val;
              } else {
                if (vals.every((v) => typeof v === "number"))
                  json.type = "number";
                if (vals.every((v) => typeof v === "string"))
                  json.type = "string";
                if (vals.every((v) => typeof v === "boolean"))
                  json.type = "string";
                if (vals.every((v) => v === null))
                  json.type = "null";
                json.enum = vals;
              }
              break;
            }
            case "file": {
              const json = _json;
              const file = {
                type: "string",
                format: "binary",
                contentEncoding: "binary"
              };
              const { minimum, maximum, mime } = schema._zod.bag;
              if (minimum !== void 0)
                file.minLength = minimum;
              if (maximum !== void 0)
                file.maxLength = maximum;
              if (mime) {
                if (mime.length === 1) {
                  file.contentMediaType = mime[0];
                  Object.assign(json, file);
                } else {
                  json.anyOf = mime.map((m) => {
                    const mFile = { ...file, contentMediaType: m };
                    return mFile;
                  });
                }
              } else {
                Object.assign(json, file);
              }
              break;
            }
            case "transform": {
              if (this.unrepresentable === "throw") {
                throw new Error("Transforms cannot be represented in JSON Schema");
              }
              break;
            }
            case "nullable": {
              const inner = this.process(def.innerType, params);
              _json.anyOf = [inner, { type: "null" }];
              break;
            }
            case "nonoptional": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              break;
            }
            case "success": {
              const json = _json;
              json.type = "boolean";
              break;
            }
            case "default": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              _json.default = JSON.parse(JSON.stringify(def.defaultValue));
              break;
            }
            case "prefault": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              if (this.io === "input")
                _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
              break;
            }
            case "catch": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              let catchValue;
              try {
                catchValue = def.catchValue(void 0);
              } catch {
                throw new Error("Dynamic catch values are not supported in JSON Schema");
              }
              _json.default = catchValue;
              break;
            }
            case "nan": {
              if (this.unrepresentable === "throw") {
                throw new Error("NaN cannot be represented in JSON Schema");
              }
              break;
            }
            case "template_literal": {
              const json = _json;
              const pattern = schema._zod.pattern;
              if (!pattern)
                throw new Error("Pattern not found in template literal");
              json.type = "string";
              json.pattern = pattern.source;
              break;
            }
            case "pipe": {
              const innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
              this.process(innerType, params);
              result.ref = innerType;
              break;
            }
            case "readonly": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              _json.readOnly = true;
              break;
            }
            // passthrough types
            case "promise": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              break;
            }
            case "optional": {
              this.process(def.innerType, params);
              result.ref = def.innerType;
              break;
            }
            case "lazy": {
              const innerType = schema._zod.innerType;
              this.process(innerType, params);
              result.ref = innerType;
              break;
            }
            case "custom": {
              if (this.unrepresentable === "throw") {
                throw new Error("Custom types cannot be represented in JSON Schema");
              }
              break;
            }
            default: {
              def;
            }
          }
        }
      }
      const meta = this.metadataRegistry.get(schema);
      if (meta)
        Object.assign(result.schema, meta);
      if (this.io === "input" && isTransforming(schema)) {
        delete result.schema.examples;
        delete result.schema.default;
      }
      if (this.io === "input" && result.schema._prefault)
        (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
      delete result.schema._prefault;
      const _result = this.seen.get(schema);
      return _result.schema;
    }
    emit(schema, _params) {
      const params = {
        cycles: _params?.cycles ?? "ref",
        reused: _params?.reused ?? "inline",
        // unrepresentable: _params?.unrepresentable ?? "throw",
        // uri: _params?.uri ?? ((id) => `${id}`),
        external: _params?.external ?? void 0
      };
      const root = this.seen.get(schema);
      if (!root)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
      const makeURI = (entry) => {
        const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (params.external) {
          const externalId = params.external.registry.get(entry[0])?.id;
          const uriGenerator = params.external.uri ?? ((id2) => id2);
          if (externalId) {
            return { ref: uriGenerator(externalId) };
          }
          const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
          entry[1].defId = id;
          return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
        }
        if (entry[1] === root) {
          return { ref: "#" };
        }
        const uriPrefix = `#`;
        const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
        const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
        return { defId, ref: defUriPrefix + defId };
      };
      const extractToDef = (entry) => {
        if (entry[1].schema.$ref) {
          return;
        }
        const seen = entry[1];
        const { ref, defId } = makeURI(entry);
        seen.def = { ...seen.schema };
        if (defId)
          seen.defId = defId;
        const schema2 = seen.schema;
        for (const key in schema2) {
          delete schema2[key];
        }
        schema2.$ref = ref;
      };
      if (params.cycles === "throw") {
        for (const entry of this.seen.entries()) {
          const seen = entry[1];
          if (seen.cycle) {
            throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        }
      }
      for (const entry of this.seen.entries()) {
        const seen = entry[1];
        if (schema === entry[0]) {
          extractToDef(entry);
          continue;
        }
        if (params.external) {
          const ext = params.external.registry.get(entry[0])?.id;
          if (schema !== entry[0] && ext) {
            extractToDef(entry);
            continue;
          }
        }
        const id = this.metadataRegistry.get(entry[0])?.id;
        if (id) {
          extractToDef(entry);
          continue;
        }
        if (seen.cycle) {
          extractToDef(entry);
          continue;
        }
        if (seen.count > 1) {
          if (params.reused === "ref") {
            extractToDef(entry);
            continue;
          }
        }
      }
      const flattenRef = (zodSchema, params2) => {
        const seen = this.seen.get(zodSchema);
        const schema2 = seen.def ?? seen.schema;
        const _cached = { ...schema2 };
        if (seen.ref === null) {
          return;
        }
        const ref = seen.ref;
        seen.ref = null;
        if (ref) {
          flattenRef(ref, params2);
          const refSchema = this.seen.get(ref).schema;
          if (refSchema.$ref && params2.target === "draft-7") {
            schema2.allOf = schema2.allOf ?? [];
            schema2.allOf.push(refSchema);
          } else {
            Object.assign(schema2, refSchema);
            Object.assign(schema2, _cached);
          }
        }
        if (!seen.isParent)
          this.override({
            zodSchema,
            jsonSchema: schema2,
            path: seen.path ?? []
          });
      };
      for (const entry of [...this.seen.entries()].reverse()) {
        flattenRef(entry[0], { target: this.target });
      }
      const result = {};
      if (this.target === "draft-2020-12") {
        result.$schema = "https://json-schema.org/draft/2020-12/schema";
      } else if (this.target === "draft-7") {
        result.$schema = "http://json-schema.org/draft-07/schema#";
      } else {
        console.warn(`Invalid target: ${this.target}`);
      }
      if (params.external?.uri) {
        const id = params.external.registry.get(schema)?.id;
        if (!id)
          throw new Error("Schema is missing an `id` property");
        result.$id = params.external.uri(id);
      }
      Object.assign(result, root.def);
      const defs = params.external?.defs ?? {};
      for (const entry of this.seen.entries()) {
        const seen = entry[1];
        if (seen.def && seen.defId) {
          defs[seen.defId] = seen.def;
        }
      }
      if (params.external) {
      } else {
        if (Object.keys(defs).length > 0) {
          if (this.target === "draft-2020-12") {
            result.$defs = defs;
          } else {
            result.definitions = defs;
          }
        }
      }
      try {
        return JSON.parse(JSON.stringify(result));
      } catch (_err) {
        throw new Error("Error converting schema to JSON.");
      }
    }
  };
  function toJSONSchema(input, _params) {
    if (input instanceof $ZodRegistry) {
      const gen2 = new JSONSchemaGenerator(_params);
      const defs = {};
      for (const entry of input._idmap.entries()) {
        const [_, schema] = entry;
        gen2.process(schema);
      }
      const schemas = {};
      const external = {
        registry: input,
        uri: _params?.uri,
        defs
      };
      for (const entry of input._idmap.entries()) {
        const [key, schema] = entry;
        schemas[key] = gen2.emit(schema, {
          ..._params,
          external
        });
      }
      if (Object.keys(defs).length > 0) {
        const defsSegment = gen2.target === "draft-2020-12" ? "$defs" : "definitions";
        schemas.__shared = {
          [defsSegment]: defs
        };
      }
      return { schemas };
    }
    const gen = new JSONSchemaGenerator(_params);
    gen.process(input);
    return gen.emit(input, _params);
  }
  function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
    if (ctx.seen.has(_schema))
      return false;
    ctx.seen.add(_schema);
    const schema = _schema;
    const def = schema._zod.def;
    switch (def.type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "date":
      case "symbol":
      case "undefined":
      case "null":
      case "any":
      case "unknown":
      case "never":
      case "void":
      case "literal":
      case "enum":
      case "nan":
      case "file":
      case "template_literal":
        return false;
      case "array": {
        return isTransforming(def.element, ctx);
      }
      case "object": {
        for (const key in def.shape) {
          if (isTransforming(def.shape[key], ctx))
            return true;
        }
        return false;
      }
      case "union": {
        for (const option of def.options) {
          if (isTransforming(option, ctx))
            return true;
        }
        return false;
      }
      case "intersection": {
        return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
      }
      case "tuple": {
        for (const item of def.items) {
          if (isTransforming(item, ctx))
            return true;
        }
        if (def.rest && isTransforming(def.rest, ctx))
          return true;
        return false;
      }
      case "record": {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
      }
      case "map": {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
      }
      case "set": {
        return isTransforming(def.valueType, ctx);
      }
      // inner types
      case "promise":
      case "optional":
      case "nonoptional":
      case "nullable":
      case "readonly":
        return isTransforming(def.innerType, ctx);
      case "lazy":
        return isTransforming(def.getter(), ctx);
      case "default": {
        return isTransforming(def.innerType, ctx);
      }
      case "prefault": {
        return isTransforming(def.innerType, ctx);
      }
      case "custom": {
        return false;
      }
      case "transform": {
        return true;
      }
      case "pipe": {
        return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
      }
      case "success": {
        return false;
      }
      case "catch": {
        return false;
      }
      default:
        def;
    }
    throw new Error(`Unknown schema type: ${def.type}`);
  }

  // node_modules/zod/v4/classic/iso.js
  var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function datetime2(params) {
    return _isoDateTime(ZodISODateTime, params);
  }
  var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function date2(params) {
    return _isoDate(ZodISODate, params);
  }
  var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function time2(params) {
    return _isoTime(ZodISOTime, params);
  }
  var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function duration2(params) {
    return _isoDuration(ZodISODuration, params);
  }

  // node_modules/zod/v4/classic/errors.js
  var initializer2 = (inst, issues) => {
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
      format: {
        value: (mapper) => formatError(inst, mapper)
        // enumerable: false,
      },
      flatten: {
        value: (mapper) => flattenError(inst, mapper)
        // enumerable: false,
      },
      addIssue: {
        value: (issue2) => inst.issues.push(issue2)
        // enumerable: false,
      },
      addIssues: {
        value: (issues2) => inst.issues.push(...issues2)
        // enumerable: false,
      },
      isEmpty: {
        get() {
          return inst.issues.length === 0;
        }
        // enumerable: false,
      }
    });
  };
  var ZodError = $constructor("ZodError", initializer2);
  var ZodRealError = $constructor("ZodError", initializer2, {
    Parent: Error
  });

  // node_modules/zod/v4/classic/parse.js
  var parse = /* @__PURE__ */ _parse(ZodRealError);
  var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
  var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
  var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);

  // node_modules/zod/v4/classic/schemas.js
  var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
    $ZodType.init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", { value: def });
    inst.check = (...checks) => {
      return inst.clone(
        {
          ...def,
          checks: [
            ...def.checks ?? [],
            ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
          ]
        }
        // { parent: true }
      );
    };
    inst.clone = (def2, params) => clone(inst, def2, params);
    inst.brand = () => inst;
    inst.register = ((reg, meta) => {
      reg.add(inst, meta);
      return inst;
    });
    inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => safeParse2(inst, data, params);
    inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.refine = (check2, params) => inst.check(refine(check2, params));
    inst.superRefine = (refinement) => inst.check(superRefine(refinement));
    inst.overwrite = (fn) => inst.check(_overwrite(fn));
    inst.optional = () => optional(inst);
    inst.nullable = () => nullable(inst);
    inst.nullish = () => optional(nullable(inst));
    inst.nonoptional = (params) => nonoptional(inst, params);
    inst.array = () => array(inst);
    inst.or = (arg) => union([inst, arg]);
    inst.and = (arg) => intersection(inst, arg);
    inst.transform = (tx) => pipe(inst, transform(tx));
    inst.default = (def2) => _default(inst, def2);
    inst.prefault = (def2) => prefault(inst, def2);
    inst.catch = (params) => _catch(inst, params);
    inst.pipe = (target) => pipe(inst, target);
    inst.readonly = () => readonly(inst);
    inst.describe = (description) => {
      const cl = inst.clone();
      globalRegistry.add(cl, { description });
      return cl;
    };
    Object.defineProperty(inst, "description", {
      get() {
        return globalRegistry.get(inst)?.description;
      },
      configurable: true
    });
    inst.meta = (...args) => {
      if (args.length === 0) {
        return globalRegistry.get(inst);
      }
      const cl = inst.clone();
      globalRegistry.add(cl, args[0]);
      return cl;
    };
    inst.isOptional = () => inst.safeParse(void 0).success;
    inst.isNullable = () => inst.safeParse(null).success;
    return inst;
  });
  var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    inst.regex = (...args) => inst.check(_regex(...args));
    inst.includes = (...args) => inst.check(_includes(...args));
    inst.startsWith = (...args) => inst.check(_startsWith(...args));
    inst.endsWith = (...args) => inst.check(_endsWith(...args));
    inst.min = (...args) => inst.check(_minLength(...args));
    inst.max = (...args) => inst.check(_maxLength(...args));
    inst.length = (...args) => inst.check(_length(...args));
    inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
    inst.lowercase = (params) => inst.check(_lowercase(params));
    inst.uppercase = (params) => inst.check(_uppercase(params));
    inst.trim = () => inst.check(_trim());
    inst.normalize = (...args) => inst.check(_normalize(...args));
    inst.toLowerCase = () => inst.check(_toLowerCase());
    inst.toUpperCase = () => inst.check(_toUpperCase());
  });
  var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params) => inst.check(_email(ZodEmail, params));
    inst.url = (params) => inst.check(_url(ZodURL, params));
    inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
    inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
    inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
    inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
    inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
    inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
    inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
    inst.xid = (params) => inst.check(_xid(ZodXID, params));
    inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(_e164(ZodE164, params));
    inst.datetime = (params) => inst.check(datetime2(params));
    inst.date = (params) => inst.check(date2(params));
    inst.time = (params) => inst.check(time2(params));
    inst.duration = (params) => inst.check(duration2(params));
  });
  function string2(params) {
    return _string(ZodString, params);
  }
  var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
  });
  var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
    $ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst.gt = (value, params) => inst.check(_gt(value, params));
    inst.gte = (value, params) => inst.check(_gte(value, params));
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.lt = (value, params) => inst.check(_lt(value, params));
    inst.lte = (value, params) => inst.check(_lte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
    inst.int = (params) => inst.check(int(params));
    inst.safe = (params) => inst.check(int(params));
    inst.positive = (params) => inst.check(_gt(0, params));
    inst.nonnegative = (params) => inst.check(_gte(0, params));
    inst.negative = (params) => inst.check(_lt(0, params));
    inst.nonpositive = (params) => inst.check(_lte(0, params));
    inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
    inst.step = (value, params) => inst.check(_multipleOf(value, params));
    inst.finite = () => inst;
    const bag = inst._zod.bag;
    inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
  });
  function number2(params) {
    return _number(ZodNumber, params);
  }
  var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
    $ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
  });
  function int(params) {
    return _int(ZodNumberFormat, params);
  }
  var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
    $ZodBoolean.init(inst, def);
    ZodType.init(inst, def);
  });
  function boolean2(params) {
    return _boolean(ZodBoolean, params);
  }
  var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
    $ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
  });
  function unknown() {
    return _unknown(ZodUnknown);
  }
  var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
    $ZodNever.init(inst, def);
    ZodType.init(inst, def);
  });
  function never(params) {
    return _never(ZodNever, params);
  }
  var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
    inst.nonempty = (params) => inst.check(_minLength(1, params));
    inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
    inst.length = (len, params) => inst.check(_length(len, params));
    inst.unwrap = () => inst.element;
  });
  function array(element, params) {
    return _array(ZodArray, element, params);
  }
  var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
    $ZodObject.init(inst, def);
    ZodType.init(inst, def);
    util_exports.defineLazy(inst, "shape", () => def.shape);
    inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
    inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
    inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
    inst.strip = () => inst.clone({ ...inst._zod.def, catchall: void 0 });
    inst.extend = (incoming) => {
      return util_exports.extend(inst, incoming);
    };
    inst.merge = (other) => util_exports.merge(inst, other);
    inst.pick = (mask) => util_exports.pick(inst, mask);
    inst.omit = (mask) => util_exports.omit(inst, mask);
    inst.partial = (...args) => util_exports.partial(ZodOptional, inst, args[0]);
    inst.required = (...args) => util_exports.required(ZodNonOptional, inst, args[0]);
  });
  function object(shape, params) {
    const def = {
      type: "object",
      get shape() {
        util_exports.assignProp(this, "shape", { ...shape });
        return this.shape;
      },
      ...util_exports.normalizeParams(params)
    };
    return new ZodObject(def);
  }
  var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst.options = def.options;
  });
  function union(options, params) {
    return new ZodUnion({
      type: "union",
      options,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
  });
  function intersection(left, right) {
    return new ZodIntersection({
      type: "intersection",
      left,
      right
    });
  }
  var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
    $ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
      const newEntries = {};
      for (const value of values) {
        if (keys.has(value)) {
          newEntries[value] = def.entries[value];
        } else
          throw new Error(`Key ${value} not found in enum`);
      }
      return new ZodEnum({
        ...def,
        checks: [],
        ...util_exports.normalizeParams(params),
        entries: newEntries
      });
    };
    inst.exclude = (values, params) => {
      const newEntries = { ...def.entries };
      for (const value of values) {
        if (keys.has(value)) {
          delete newEntries[value];
        } else
          throw new Error(`Key ${value} not found in enum`);
      }
      return new ZodEnum({
        ...def,
        checks: [],
        ...util_exports.normalizeParams(params),
        entries: newEntries
      });
    };
  });
  function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new ZodEnum({
      type: "enum",
      entries,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      payload.addIssue = (issue2) => {
        if (typeof issue2 === "string") {
          payload.issues.push(util_exports.issue(issue2, payload.value, def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          _issue.code ?? (_issue.code = "custom");
          _issue.input ?? (_issue.input = payload.value);
          _issue.inst ?? (_issue.inst = inst);
          _issue.continue ?? (_issue.continue = true);
          payload.issues.push(util_exports.issue(_issue));
        }
      };
      const output = def.transform(payload.value, payload);
      if (output instanceof Promise) {
        return output.then((output2) => {
          payload.value = output2;
          return payload;
        });
      }
      payload.value = output;
      return payload;
    };
  });
  function transform(fn) {
    return new ZodTransform({
      type: "transform",
      transform: fn
    });
  }
  var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function optional(innerType) {
    return new ZodOptional({
      type: "optional",
      innerType
    });
  }
  var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function nullable(innerType) {
    return new ZodNullable({
      type: "nullable",
      innerType
    });
  }
  var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
  });
  function _default(innerType, defaultValue) {
    return new ZodDefault({
      type: "default",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      }
    });
  }
  var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function prefault(innerType, defaultValue) {
    return new ZodPrefault({
      type: "prefault",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      }
    });
  }
  var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function nonoptional(innerType, params) {
    return new ZodNonOptional({
      type: "nonoptional",
      innerType,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
  });
  function _catch(innerType, catchValue) {
    return new ZodCatch({
      type: "catch",
      innerType,
      catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
    });
  }
  var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
  });
  function pipe(in_, out) {
    return new ZodPipe({
      type: "pipe",
      in: in_,
      out
      // ...util.normalizeParams(params),
    });
  }
  var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
  });
  function readonly(innerType) {
    return new ZodReadonly({
      type: "readonly",
      innerType
    });
  }
  var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
  });
  function check(fn) {
    const ch = new $ZodCheck({
      check: "custom"
      // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
  }
  function refine(fn, _params = {}) {
    return _refine(ZodCustom, fn, _params);
  }
  function superRefine(fn) {
    const ch = check((payload) => {
      payload.addIssue = (issue2) => {
        if (typeof issue2 === "string") {
          payload.issues.push(util_exports.issue(issue2, payload.value, ch._zod.def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          _issue.code ?? (_issue.code = "custom");
          _issue.input ?? (_issue.input = payload.value);
          _issue.inst ?? (_issue.inst = ch);
          _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
          payload.issues.push(util_exports.issue(_issue));
        }
      };
      return fn(payload.value, payload);
    });
    return ch;
  }

  // node_modules/zod/v4/classic/external.js
  config(en_default());

  // node_modules/chalk/source/vendor/ansi-styles/index.js
  var ANSI_BACKGROUND_OFFSET = 10;
  var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
  var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
  var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
  var styles = {
    modifier: {
      reset: [0, 0],
      // 21 isn't widely supported and 22 does the same thing
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      // Bright color
      blackBright: [90, 39],
      gray: [90, 39],
      // Alias of `blackBright`
      grey: [90, 39],
      // Alias of `blackBright`
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // Bright color
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      // Alias of `bgBlackBright`
      bgGrey: [100, 49],
      // Alias of `bgBlackBright`
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  var modifierNames = Object.keys(styles.modifier);
  var foregroundColorNames = Object.keys(styles.color);
  var backgroundColorNames = Object.keys(styles.bgColor);
  var colorNames = [...foregroundColorNames, ...backgroundColorNames];
  function assembleStyles() {
    const codes = /* @__PURE__ */ new Map();
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi = wrapAnsi16();
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value(red, green, blue) {
          if (red === green && green === blue) {
            if (red < 8) {
              return 16;
            }
            if (red > 248) {
              return 231;
            }
            return Math.round((red - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value(hex) {
          const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let [colorString] = matches;
          if (colorString.length === 3) {
            colorString = [...colorString].map((character) => character + character).join("");
          }
          const integer2 = Number.parseInt(colorString, 16);
          return [
            /* eslint-disable no-bitwise */
            integer2 >> 16 & 255,
            integer2 >> 8 & 255,
            integer2 & 255
            /* eslint-enable no-bitwise */
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      },
      ansi256ToAnsi: {
        value(code) {
          if (code < 8) {
            return 30 + code;
          }
          if (code < 16) {
            return 90 + (code - 8);
          }
          let red;
          let green;
          let blue;
          if (code >= 232) {
            red = ((code - 232) * 10 + 8) / 255;
            green = red;
            blue = red;
          } else {
            code -= 16;
            const remainder = code % 36;
            red = Math.floor(code / 36) / 5;
            green = Math.floor(remainder / 6) / 5;
            blue = remainder % 6 / 5;
          }
          const value = Math.max(red, green, blue) * 2;
          if (value === 0) {
            return 30;
          }
          let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
          if (value === 2) {
            result += 60;
          }
          return result;
        },
        enumerable: false
      },
      rgbToAnsi: {
        value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
        enumerable: false
      },
      hexToAnsi: {
        value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  var ansiStyles = assembleStyles();
  var ansi_styles_default = ansiStyles;

  // node_modules/chalk/source/vendor/supports-color/browser.js
  var level = (() => {
    if (!("navigator" in globalThis)) {
      return 0;
    }
    if (globalThis.navigator.userAgentData) {
      const brand = navigator.userAgentData.brands.find(({ brand: brand2 }) => brand2 === "Chromium");
      if (brand && brand.version > 93) {
        return 3;
      }
    }
    if (/\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent)) {
      return 1;
    }
    return 0;
  })();
  var colorSupport = level !== 0 && {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
  var supportsColor = {
    stdout: colorSupport,
    stderr: colorSupport
  };
  var browser_default = supportsColor;

  // node_modules/chalk/source/utilities.js
  function stringReplaceAll(string3, substring, replacer) {
    let index = string3.indexOf(substring);
    if (index === -1) {
      return string3;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string3.slice(endIndex, index) + substring + replacer;
      endIndex = index + substringLength;
      index = string3.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string3.slice(endIndex);
    return returnValue;
  }
  function stringEncaseCRLFWithFirstIndex(string3, prefix, postfix, index) {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string3[index - 1] === "\r";
      returnValue += string3.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
      endIndex = index + 1;
      index = string3.indexOf("\n", endIndex);
    } while (index !== -1);
    returnValue += string3.slice(endIndex);
    return returnValue;
  }

  // node_modules/chalk/source/index.js
  var { stdout: stdoutColor, stderr: stderrColor } = browser_default;
  var GENERATOR = /* @__PURE__ */ Symbol("GENERATOR");
  var STYLER = /* @__PURE__ */ Symbol("STYLER");
  var IS_EMPTY = /* @__PURE__ */ Symbol("IS_EMPTY");
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles2 = /* @__PURE__ */ Object.create(null);
  var applyOptions = (object2, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object2.level = options.level === void 0 ? colorLevel : options.level;
  };
  var chalkFactory = (options) => {
    const chalk2 = (...strings) => strings.join(" ");
    applyOptions(chalk2, options);
    Object.setPrototypeOf(chalk2, createChalk.prototype);
    return chalk2;
  };
  function createChalk(options) {
    return chalkFactory(options);
  }
  Object.setPrototypeOf(createChalk.prototype, Function.prototype);
  for (const [styleName, style] of Object.entries(ansi_styles_default)) {
    styles2[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
        Object.defineProperty(this, styleName, { value: builder });
        return builder;
      }
    };
  }
  styles2.visible = {
    get() {
      const builder = createBuilder(this, this[STYLER], true);
      Object.defineProperty(this, "visible", { value: builder });
      return builder;
    }
  };
  var getModelAnsi = (model, level2, type, ...arguments_) => {
    if (model === "rgb") {
      if (level2 === "ansi16m") {
        return ansi_styles_default[type].ansi16m(...arguments_);
      }
      if (level2 === "ansi256") {
        return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
      }
      return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
    }
    if (model === "hex") {
      return getModelAnsi("rgb", level2, type, ...ansi_styles_default.hexToRgb(...arguments_));
    }
    return ansi_styles_default[type][model](...arguments_);
  };
  var usedModels = ["rgb", "hex", "ansi256"];
  for (const model of usedModels) {
    styles2[model] = {
      get() {
        const { level: level2 } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level2], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles2[bgModel] = {
      get() {
        const { level: level2 } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level2], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, {
    ...styles2,
    level: {
      enumerable: true,
      get() {
        return this[GENERATOR].level;
      },
      set(level2) {
        this[GENERATOR].level = level2;
      }
    }
  });
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === void 0) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self, _styler, _isEmpty) => {
    const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    Object.setPrototypeOf(builder, proto);
    builder[GENERATOR] = self;
    builder[STYLER] = _styler;
    builder[IS_EMPTY] = _isEmpty;
    return builder;
  };
  var applyStyle = (self, string3) => {
    if (self.level <= 0 || !string3) {
      return self[IS_EMPTY] ? "" : string3;
    }
    let styler = self[STYLER];
    if (styler === void 0) {
      return string3;
    }
    const { openAll, closeAll } = styler;
    if (string3.includes("\x1B")) {
      while (styler !== void 0) {
        string3 = stringReplaceAll(string3, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string3.indexOf("\n");
    if (lfIndex !== -1) {
      string3 = stringEncaseCRLFWithFirstIndex(string3, closeAll, openAll, lfIndex);
    }
    return openAll + string3 + closeAll;
  };
  Object.defineProperties(createChalk.prototype, styles2);
  var chalk = createChalk();
  var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
  var source_default = chalk;

  // node_modules/@page-agent/llms/dist/lib/page-agent-llms.js
  var InvokeErrorTypes = {
    NETWORK_ERROR: "network_error",
    RATE_LIMIT: "rate_limit",
    SERVER_ERROR: "server_error",
    NO_TOOL_CALL: "no_tool_call",
    INVALID_TOOL_ARGS: "invalid_tool_args",
    TOOL_EXECUTION_ERROR: "tool_execution_error",
    INVALID_RESPONSE: "invalid_response",
    INVALID_SCHEMA: "invalid_schema",
    UNKNOWN: "unknown",
    CONFIG_ERROR: "config_error",
    AUTH_ERROR: "auth_error",
    CONTEXT_LENGTH: "context_length",
    CONTENT_FILTER: "content_filter"
  };
  var RETRYABLE_TYPES = [
    InvokeErrorTypes.NETWORK_ERROR,
    InvokeErrorTypes.RATE_LIMIT,
    InvokeErrorTypes.SERVER_ERROR,
    InvokeErrorTypes.NO_TOOL_CALL,
    InvokeErrorTypes.INVALID_TOOL_ARGS,
    InvokeErrorTypes.TOOL_EXECUTION_ERROR,
    InvokeErrorTypes.INVALID_RESPONSE,
    InvokeErrorTypes.INVALID_SCHEMA,
    InvokeErrorTypes.UNKNOWN
  ];
  var InvokeError = class extends Error {
    constructor(type, message, rawError, rawResponse) {
      super(message);
      __publicField(this, "type");
      __publicField(this, "retryable");
      __publicField(this, "statusCode");
      __publicField(this, "rawError");
      __publicField(this, "rawResponse");
      this.name = "InvokeError";
      this.type = type;
      this.retryable = RETRYABLE_TYPES.includes(type);
      this.rawError = rawError;
      this.rawResponse = rawResponse;
    }
  };
  var debug = console.debug.bind(console, source_default.gray("[LLM]"));
  function zodToOpenAITool(name, tool2) {
    return {
      type: "function",
      function: {
        name,
        description: tool2.description,
        parameters: toJSONSchema(tool2.inputSchema, { target: "openapi-3.0" })
      }
    };
  }
  function modelPatch(body, baseURL) {
    const model = body.model || "";
    if (!model) return body;
    const provider = getProvider(baseURL);
    const modelName = normalizeModelName(model);
    if (modelName.startsWith("qwen")) {
      debug("Patch Qwen: disable thinking");
      body.enable_thinking = false;
      if (body.temperature === void 0 && !/max|plus/.test(modelName)) {
        debug("Patch Qwen: raise temperature to 1.0");
        body.temperature = 1;
      }
    }
    if (modelName.startsWith("deepseek")) {
      debug("Patch DeepSeek: disable thinking, remove tool_choice");
      body.thinking = { type: "disabled" };
      delete body.tool_choice;
    }
    if (modelName.startsWith("gpt")) {
      if (modelName.startsWith("gpt-5")) body.verbosity = "low";
      if (modelName.includes("chat-latest")) {
        debug("Patch chat-latest: omit reasoning_effort and temperature");
        delete body.reasoning_effort;
        delete body.temperature;
      } else if (/^gpt-5[12](-|$)/.test(modelName)) {
        debug("Patch GPT-5.1/5.2: reasoning_effort=none");
        body.reasoning_effort = "none";
      } else if (/^gpt-5(-|$)/.test(modelName)) {
        debug("Patch GPT-5: reasoning_effort=minimal");
        body.reasoning_effort = "minimal";
      } else {
        debug("Patch GPT: omit reasoning_effort");
        delete body.reasoning_effort;
      }
    }
    if (modelName.startsWith("claude")) if (/opus|sonnet|haiku/.test(modelName)) {
      debug("Patch Claude: disable thinking");
      body.thinking = { type: "disabled" };
      if (provider !== "openrouter") {
        if (body.tool_choice === "required") {
          debug('Applying Claude patch: convert tool_choice "required" to { type: "any" }');
          body.tool_choice = { type: "any" };
        } else if (body.tool_choice?.function?.name) {
          debug("Applying Claude patch: convert tool_choice format");
          body.tool_choice = {
            type: "tool",
            name: body.tool_choice.function.name
          };
        }
      }
    } else {
      debug("Patch Claude: reasoning_effort=low");
      body.reasoning_effort = "low";
      delete body.tool_choice;
    }
    if (modelName.startsWith("gemini")) {
      debug("Patch Gemini: reasoning_effort=low");
      body.reasoning_effort = "low";
      if (/^gemini-25(?!.*pro)/.test(modelName)) {
        debug("Patch Gemini 2.5 non-Pro: reasoning_effort=none");
        body.reasoning_effort = "none";
      } else if (modelName.startsWith("gemini-35-flash") || modelName.startsWith("gemini-31-flash-lite") || modelName.startsWith("gemini-3-flash")) {
        debug("Patch Gemini 3.x Flash/Lite: reasoning_effort=minimal");
        body.reasoning_effort = "minimal";
      }
    }
    if (modelName.startsWith("glm")) {
      debug("Patch GLM: disable thinking");
      body.thinking = { type: "disabled" };
    }
    if (modelName.startsWith("hy")) {
      debug("Patch Hunyuan: disable thinking, reasoning_effort=low");
      body.thinking = { type: "disabled" };
      body.reasoning_effort = "low";
    }
    if (modelName.startsWith("grok")) {
      if (/^grok-4-?3/.test(modelName)) {
        debug("Patch Grok 4.3: reasoning_effort=none");
        body.reasoning_effort = "none";
      } else if (modelName.startsWith("grok-3-mini") || modelName.startsWith("grok-code-fast")) {
        debug("Patch Grok mini/code: reasoning_effort=low");
        body.reasoning_effort = "low";
      }
    }
    if (modelName.startsWith("kimi")) {
      if (!modelName.includes("code")) {
        debug("Patch Kimi: disable thinking");
        body.thinking = { type: "disabled" };
      }
    }
    if (modelName.startsWith("minimax")) {
      debug("Patch MiniMax: remove parallel_tool_calls");
      delete body.parallel_tool_calls;
      if (modelName.includes("m3")) {
        debug("Patch MiniMax: disable thinking");
        body.thinking = { type: "disabled" };
      }
    }
    if (provider === "openrouter") {
      const reasoningEffort = body.reasoning_effort;
      if (body.thinking?.type === "disabled" || body.enable_thinking === false || reasoningEffort === "none") body.reasoning = { enabled: false };
      else if (reasoningEffort) body.reasoning = {
        enabled: true,
        effort: reasoningEffort
      };
    }
    return body;
  }
  function normalizeModelName(modelName) {
    let normalizedName = modelName.toLowerCase();
    if (normalizedName.includes("/")) normalizedName = normalizedName.split("/")[1];
    normalizedName = normalizedName.replace(/_/g, "");
    normalizedName = normalizedName.replace(/\./g, "");
    return normalizedName;
  }
  function getProvider(baseURL) {
    if (!baseURL) return void 0;
    try {
      if (new URL(baseURL).hostname === "openrouter.ai") return "openrouter";
      return;
    } catch (e) {
      return;
    }
  }
  var OpenAIClient = class {
    constructor(config2) {
      __publicField(this, "config");
      __publicField(this, "fetch");
      this.config = config2;
      this.fetch = config2.customFetch;
    }
    async invoke(messages, tools2, abortSignal, options) {
      abortSignal?.throwIfAborted();
      const openaiTools = Object.entries(tools2).map(([name, t]) => zodToOpenAITool(name, t));
      let toolChoice = "required";
      if (options?.toolChoiceName && !this.config.disableNamedToolChoice) toolChoice = {
        type: "function",
        function: { name: options.toolChoiceName }
      };
      const requestBody = {
        model: this.config.model,
        messages,
        tools: openaiTools,
        parallel_tool_calls: false,
        tool_choice: toolChoice
      };
      if (this.config.temperature !== void 0) requestBody.temperature = this.config.temperature;
      modelPatch(requestBody, this.config.baseURL);
      let transformedBody;
      try {
        transformedBody = this.config.transformRequestBody(requestBody);
      } catch (error2) {
        throw new InvokeError(InvokeErrorTypes.CONFIG_ERROR, `transformRequestBody failed: ${error2.message}`, error2);
      }
      const finalRequestBody = transformedBody ?? requestBody;
      let response;
      try {
        response = await this.fetch(`${this.config.baseURL}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...this.config.apiKey && { Authorization: `Bearer ${this.config.apiKey}` }
          },
          body: JSON.stringify(finalRequestBody),
          signal: abortSignal
        });
      } catch (error2) {
        if (error2?.name === "AbortError") throw error2;
        console.error(error2);
        throw new InvokeError(InvokeErrorTypes.NETWORK_ERROR, "Network request failed", error2);
      }
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (error2) {
          if (error2?.name === "AbortError") throw error2;
        }
        const errorMessage = errorData?.error?.message || response.statusText;
        if (response.status === 401 || response.status === 403) throw new InvokeError(InvokeErrorTypes.AUTH_ERROR, `Authentication failed: ${errorMessage}`, errorData);
        if (response.status === 429) throw new InvokeError(InvokeErrorTypes.RATE_LIMIT, `Rate limit exceeded: ${errorMessage}`, errorData);
        if (response.status >= 500) throw new InvokeError(InvokeErrorTypes.SERVER_ERROR, `Server error: ${errorMessage}`, errorData);
        throw new InvokeError(InvokeErrorTypes.UNKNOWN, `HTTP ${response.status}: ${errorMessage}`, errorData);
      }
      let data;
      try {
        data = await response.json();
      } catch (error2) {
        if (error2?.name === "AbortError") throw error2;
        throw new InvokeError(InvokeErrorTypes.INVALID_RESPONSE, "Response body is not valid JSON", error2);
      }
      const choice = data.choices?.[0];
      if (!choice) throw new InvokeError(InvokeErrorTypes.INVALID_SCHEMA, "No choices in response", data);
      switch (choice.finish_reason) {
        case "tool_calls":
        case "function_call":
        case "stop":
          break;
        case "length":
          throw new InvokeError(InvokeErrorTypes.CONTEXT_LENGTH, "Response truncated: max tokens reached", void 0, data);
        case "content_filter":
          throw new InvokeError(InvokeErrorTypes.CONTENT_FILTER, "Content filtered by safety system", void 0, data);
        default:
          throw new InvokeError(InvokeErrorTypes.INVALID_SCHEMA, `Unexpected finish_reason: ${choice.finish_reason}`, void 0, data);
      }
      const normalizedChoice = (options?.normalizeResponse ? options.normalizeResponse(data) : data).choices?.[0];
      const toolCallName = normalizedChoice?.message?.tool_calls?.[0]?.function?.name;
      if (!toolCallName) throw new InvokeError(InvokeErrorTypes.NO_TOOL_CALL, "No tool call found in response", void 0, data);
      const tool2 = tools2[toolCallName];
      if (!tool2) throw new InvokeError(InvokeErrorTypes.UNKNOWN, `Tool "${toolCallName}" not found in tools`, void 0, data);
      const argString = normalizedChoice.message?.tool_calls?.[0]?.function?.arguments;
      if (!argString) throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, "No tool call arguments found", void 0, data);
      let parsedArgs;
      try {
        parsedArgs = JSON.parse(argString);
      } catch (error2) {
        throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, "Failed to parse tool arguments as JSON", error2, data);
      }
      const validation = tool2.inputSchema.safeParse(parsedArgs);
      if (!validation.success) {
        console.error(prettifyError(validation.error));
        throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, "Tool arguments validation failed", validation.error, data);
      }
      const toolInput = validation.data;
      let toolResult;
      try {
        toolResult = await tool2.execute(toolInput);
      } catch (error2) {
        if (error2?.name === "AbortError") throw error2;
        throw new InvokeError(InvokeErrorTypes.TOOL_EXECUTION_ERROR, `Tool execution failed: ${error2?.message}`, error2, data);
      }
      return {
        toolCall: {
          name: toolCallName,
          args: toolInput
        },
        toolResult,
        usage: {
          promptTokens: data.usage?.prompt_tokens ?? 0,
          completionTokens: data.usage?.completion_tokens ?? 0,
          totalTokens: data.usage?.total_tokens ?? 0,
          cachedTokens: data.usage?.prompt_tokens_details?.cached_tokens,
          reasoningTokens: data.usage?.completion_tokens_details?.reasoning_tokens
        },
        rawResponse: data,
        rawRequest: finalRequestBody
      };
    }
  };
  var LLM = class extends EventTarget {
    constructor(config2) {
      super();
      __publicField(this, "config");
      __publicField(this, "client");
      this.config = parseLLMConfig(config2);
      this.client = new OpenAIClient(this.config);
    }
    /**
    * - call llm api *once*
    * - invoke tool call *once*
    * - return the result of the tool
    */
    async invoke(messages, tools2, abortSignal, options) {
      return await withRetry(async () => this.client.invoke(messages, tools2, abortSignal, options), {
        maxRetries: this.config.maxRetries,
        onRetry: (attempt, lastError) => {
          this.dispatchEvent(new CustomEvent("retry", { detail: {
            attempt,
            maxAttempts: this.config.maxRetries,
            lastError
          } }));
        }
      });
    }
  };
  async function withRetry(fn, settings) {
    let attempt = 0;
    while (true) try {
      return await fn();
    } catch (error2) {
      if (error2?.name === "AbortError") throw error2;
      if (error2 instanceof InvokeError && !error2.retryable) throw error2;
      attempt++;
      if (attempt > settings.maxRetries) throw error2;
      console.debug("[LLM] retryable failure, will retry:", error2);
      settings.onRetry(attempt, error2);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  function parseLLMConfig(config2) {
    if (!config2.baseURL || !config2.model) throw new Error("[PageAgent] LLM configuration required. Please provide: baseURL, model. See: https://alibaba.github.io/page-agent/docs/features/models");
    if (config2.temperature !== void 0) console.warn("[PageAgent] LLMConfig.temperature is deprecated and will be removed in a future version. Use transformRequestBody to set it only for models you have verified accept it.");
    return {
      baseURL: config2.baseURL,
      model: config2.model,
      apiKey: config2.apiKey || "",
      temperature: config2.temperature,
      maxRetries: config2.maxRetries ?? 2,
      transformRequestBody: config2.transformRequestBody ?? ((requestBody) => requestBody),
      disableNamedToolChoice: config2.disableNamedToolChoice ?? false,
      customFetch: (config2.customFetch ?? fetch).bind(globalThis)
    };
  }

  // node_modules/@page-agent/core/dist/esm/page-agent-core.js
  var system_prompt_default = 'You are an AI agent designed to operate in an iterative loop to automate browser tasks. Your ultimate goal is accomplishing the task provided in <user_request>.\n\n<intro>\nYou excel at following tasks:\n1. Navigating complex websites and extracting precise information\n2. Automating form submissions and interactive web actions\n3. Gathering and saving information \n4. Operate effectively in an agent loop\n5. Efficiently performing diverse web tasks\n</intro>\n\n<language_settings>\n- Default working language: **English**\n- Use the language that user is using. Return in user\'s language.\n</language_settings>\n\n<input>\nAt every step, your input will consist of: \n1. <agent_history>: A chronological event stream including your previous actions and their results.\n2. <agent_state>: Current <user_request> and <step_info>.\n3. <browser_state>: Current URL, interactive elements indexed for actions, and visible page content.\n</input>\n\n<agent_history>\nAgent history will be given as a list of step information as follows:\n\n<step_{step_number}>:\nEvaluation of Previous Step: Assessment of last action\nMemory: Your memory of this step\nNext Goal: Your goal for this step\nAction Results: Your actions and their results\n</step_{step_number}>\n\nand system messages wrapped in <sys> tag.\n</agent_history>\n\n<user_request>\nUSER REQUEST: This is your ultimate objective and always remains visible.\n- This has the highest priority. Make the user happy.\n- If the user request is very specific - then carefully follow each step and don\'t skip or hallucinate steps.\n- If the task is open ended you can plan yourself how to get it done.\n</user_request>\n\n<browser_state>\n1. Browser State will be given as:\n\nCurrent URL: URL of the page you are currently viewing.\nInteractive Elements: All interactive elements will be provided in format as [index]<type>text</type> where\n- index: Numeric identifier for interaction\n- type: HTML element type (button, input, etc.)\n- text: Element description\n\nExamples:\n[33]<div>User form</div>\n\\t*[35]<button aria-label=\'Submit form\'>Submit</button>\n\nNote that:\n- Only elements with numeric indexes in [] are interactive\n- (stacked) indentation (with \\t) is important and means that the element is a (html) child of the element above (with a lower index)\n- Elements tagged with `*[` are the new clickable elements that appeared on the website since the last step - if url has not changed.\n- Pure text elements without [] are not interactive.\n</browser_state>\n\n<browser_rules>\nStrictly follow these rules while using the browser and navigating the web:\n- Only interact with elements that have a numeric [index] assigned.\n- Only use indexes that are explicitly provided.\n- If the page changes after, for example, an input text action, analyze if you need to interact with new elements, e.g. selecting the right option from the list.\n- By default, only elements in the visible viewport are listed. Use scrolling actions if you suspect relevant content is offscreen which you need to interact with. Scroll ONLY if there are more pixels below or above the page.\n- You can scroll by a specific number of pages using the num_pages parameter (e.g., 0.5 for half page, 2.0 for two pages).\n- All the elements that are scrollable are marked with `data-scrollable` attribute. Including the scrollable distance in every directions. You can scroll *the element* in case some area are overflowed.\n- If a captcha appears, tell user you can not solve captcha. Finish the task and ask user to solve it.\n- If the page is not fully loaded, use the `wait` action.\n- Do not repeat one action for more than 3 times unless some conditions changed.\n- If you fill an input field and your action sequence is interrupted, most often something changed e.g. suggestions popped up under the field.\n- If the <user_request> includes specific page information such as product type, rating, price, location, etc., try to apply filters to be more efficient.\n- The <user_request> is the ultimate goal. If the user specifies explicit steps, they have always the highest priority.\n- If you input_text into a field, you might need to press enter, click the search button, or select from dropdown for completion.\n- Don\'t login into a page if you don\'t have to. Don\'t login if you don\'t have the credentials. \n- There are 2 types of tasks always first think which type of request you are dealing with:\n1. Very specific step by step instructions:\n- Follow them as very precise and don\'t skip steps. Try to complete everything as requested.\n2. Open ended tasks. Plan yourself, be creative in achieving them.\n- If you get stuck e.g. with logins or captcha in open-ended tasks you can re-evaluate the task and try alternative ways, e.g. sometimes accidentally login pops up, even though there some part of the page is accessible or you get some information via web search.\n</browser_rules>\n\n<capability>\n- You can only handle single page app. Do not jump out of current page.\n- Do not click on link if it will open in a new page (e.g., <a target="_blank">)\n- It is ok to fail the task.\n	- User can be wrong. If the request of user is not achievable, inappropriate or you do not have enough information or tools to achieve it. Tell user to make a better request.\n	- Webpage can be broken. All webpages or apps have bugs. Some bug will make it hard for your job. It\'s encouraged to tell user the problem of current page. Your feedbacks (including failing) are valuable for user.\n	- Trying too hard can be harmful. Repeating some action back and forth or pushing for a complex procedure with little knowledge can cause unwanted results and harmful side-effects. User would rather you complete the task with a fail.\n- If you do not have knowledge for the current webpage or task. You must require user to give specific instructions and detailed steps.\n</capability>\n\n<task_completion_rules>\nYou must call the `done` action in one of three cases:\n- When you have fully completed the USER REQUEST.\n- When you reach the final allowed step (`max_steps`), even if the task is incomplete.\n- When you feel stuck or unable to solve user request. Or user request is not clear or contains inappropriate content.\n- If it is ABSOLUTELY IMPOSSIBLE to continue.\n\nThe `done` action is your opportunity to terminate and share your findings with the user.\n- Set `success` to `true` only if the full USER REQUEST has been completed with no missing components.\n- If any part of the request is missing, incomplete, or uncertain, set `success` to `false`.\n- You can use the `text` field of the `done` action to communicate your findings and to provide a coherent reply to the user and fulfill the USER REQUEST.\n- You are ONLY ALLOWED to call `done` as a single action. Don\'t call it together with other actions.\n- If the user asks for specified format, such as "return JSON with following structure", "return a list of format...", MAKE sure to use the right format in your answer.\n- If the user asks for a structured output, your `done` action\'s schema may be modified. Take this schema into account when solving the task!\n</task_completion_rules>\n\n<reasoning_rules>\nExhibit the following reasoning patterns to successfully achieve the <user_request>:\n\n- Reason about <agent_history> to track progress and context toward <user_request>.\n- Analyze the most recent "Next Goal" and "Action Result" in <agent_history> and clearly state what you previously tried to achieve.\n- Analyze all relevant items in <agent_history> and <browser_state> to understand your state.\n- Explicitly judge success/failure/uncertainty of the last action. Never assume an action succeeded just because it appears to be executed in your last step in <agent_history>. If the expected change is missing, mark the last action as failed (or uncertain) and plan a recovery.\n- Analyze whether you are stuck, e.g. when you repeat the same actions multiple times without any progress. Then consider alternative approaches e.g. scrolling for more context or ask user for help.\n- Ask user for help if you have any difficulty. Keep user in the loop.\n- If you see information relevant to <user_request>, plan saving the information to memory.\n- Always reason about the <user_request>. Make sure to carefully analyze the specific steps and information required. E.g. specific filters, specific form fields, specific information to search. Make sure to always compare the current trajectory with the user request and think carefully if thats how the user requested it.\n</reasoning_rules>\n\n<examples>\nHere are examples of good output patterns. Use them as reference but never copy them directly.\n\n<evaluation_examples>\n"evaluation_previous_goal": "Successfully navigated to the product page and found the target information. Verdict: Success"\n"evaluation_previous_goal": "Clicked the login button and user authentication form appeared. Verdict: Success"\n</evaluation_examples>\n\n<memory_examples>\n"memory": "Found many pending reports that need to be analyzed in the main page. Successfully processed the first 2 reports on quarterly sales data and moving on to inventory analysis and customer feedback reports."\n</memory_examples>\n\n<next_goal_examples>\n"next_goal": "Click on the \'Add to Cart\' button to proceed with the purchase flow."\n</next_goal_examples>\n</examples>\n\n<output>\n{\n  "evaluation_previous_goal": "Concise one-sentence analysis of your last action. Clearly state success, failure, or uncertain.",\n  "memory": "1-3 concise sentences of specific memory of this step and overall progress. You should put here everything that will help you track progress in future steps. Like counting pages visited, items found, etc.",\n  "next_goal": "State the next immediate goal and action to achieve it, in one clear sentence.",\n  "action":{\n    "Action name": {// Action parameters}\n  }\n}\n</output>\n';
  var log = console.log.bind(console, source_default.yellow("[autoFixer]"));
  function normalizeResponse(response, tools2) {
    let resolvedArguments;
    const choice = response.choices?.[0];
    if (!choice) throw new Error("No choices in response");
    const message = choice.message;
    if (!message) throw new Error("No message in choice");
    const toolCall = message.tool_calls?.[0];
    if (toolCall?.function?.arguments) {
      resolvedArguments = safeJsonParse(toolCall.function.arguments);
      if (toolCall.function.name && toolCall.function.name !== "AgentOutput") {
        log(`#1: fixing tool_call`);
        resolvedArguments = { action: safeJsonParse(resolvedArguments) };
      }
    } else if (message.content) {
      const jsonInContent = retrieveJsonFromString(message.content.trim());
      if (jsonInContent) {
        resolvedArguments = safeJsonParse(jsonInContent);
        if (resolvedArguments?.name === "AgentOutput") {
          log(`#2: fixing tool_call`);
          resolvedArguments = safeJsonParse(resolvedArguments.arguments);
        }
        if (resolvedArguments?.type === "function") {
          log(`#3: fixing tool_call`);
          resolvedArguments = safeJsonParse(resolvedArguments.function.arguments);
        }
        if (!resolvedArguments?.action && !resolvedArguments?.evaluation_previous_goal && !resolvedArguments?.memory && !resolvedArguments?.next_goal && !resolvedArguments?.thinking) {
          log(`#4: fixing tool_call`);
          resolvedArguments = { action: safeJsonParse(resolvedArguments) };
        }
      } else throw new Error("No tool_call and the message content does not contain valid JSON");
    } else throw new Error("No tool_call nor message content is present");
    resolvedArguments = safeJsonParse(resolvedArguments);
    if (resolvedArguments.action) resolvedArguments.action = safeJsonParse(resolvedArguments.action);
    if (resolvedArguments.action && tools2) resolvedArguments.action = validateAction(resolvedArguments.action, tools2);
    if (!resolvedArguments.action) {
      log(`#5: fixing tool_call`);
      resolvedArguments.action = { wait: { seconds: 1 } };
    }
    return {
      ...response,
      choices: [{
        ...choice,
        message: {
          ...message,
          tool_calls: [{
            ...toolCall || {},
            function: {
              ...toolCall?.function || {},
              name: "AgentOutput",
              arguments: JSON.stringify(resolvedArguments)
            }
          }]
        }
      }]
    };
  }
  function validateAction(action, tools2) {
    if (typeof action !== "object" || action === null) return action;
    const toolName = Object.keys(action)[0];
    if (!toolName) return action;
    const tool2 = tools2.get(toolName);
    if (!tool2) {
      const available = Array.from(tools2.keys()).join(", ");
      throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, `Unknown action "${toolName}". Available: ${available}`);
    }
    let value = action[toolName];
    const schema = tool2.inputSchema;
    if (schema instanceof ZodObject && value !== null && typeof value !== "object") {
      const requiredKey = Object.keys(schema.shape).find((k) => !schema.shape[k].safeParse(void 0).success);
      if (requiredKey) {
        log(`coercing primitive action input for "${toolName}"`);
        value = { [requiredKey]: value };
      }
    }
    const result = schema.safeParse(value);
    if (!result.success) throw new InvokeError(InvokeErrorTypes.INVALID_TOOL_ARGS, `Invalid input for action "${toolName}": ${prettifyError(result.error)}`);
    return { [toolName]: result.data };
  }
  function safeJsonParse(input) {
    if (typeof input === "string") try {
      return JSON.parse(input.trim());
    } catch {
      return input;
    }
    return input;
  }
  function retrieveJsonFromString(str) {
    try {
      const json = /({[\s\S]*})/.exec(str) ?? [];
      if (json.length === 0) return null;
      return JSON.parse(json[0]);
    } catch {
      return null;
    }
  }
  async function waitFor(seconds, signal) {
    if (!signal) {
      await new Promise((resolve) => setTimeout(resolve, seconds * 1e3));
      return;
    }
    signal.throwIfAborted();
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        signal.removeEventListener("abort", onAbort);
        resolve();
      }, seconds * 1e3);
      const onAbort = () => {
        clearTimeout(timer);
        reject(signal.reason);
      };
      signal.addEventListener("abort", onAbort, { once: true });
    });
  }
  function truncate(text, maxLength) {
    if (text.length > maxLength) return text.substring(0, maxLength) + "...";
    return text;
  }
  function randomID(existingIDs) {
    let id = Math.random().toString(36).substring(2, 11);
    if (!existingIDs) return id;
    const MAX_TRY = 1e3;
    let tryCount = 0;
    while (existingIDs.includes(id)) {
      id = Math.random().toString(36).substring(2, 11);
      tryCount++;
      if (tryCount > MAX_TRY) throw new Error("randomID: too many tries");
    }
    return id;
  }
  var _global = globalThis;
  if (!_global.__PAGE_AGENT_IDS__) _global.__PAGE_AGENT_IDS__ = [];
  var ids = _global.__PAGE_AGENT_IDS__;
  function uid() {
    const id = randomID(ids);
    ids.push(id);
    return id;
  }
  var llmsTxtCache = /* @__PURE__ */ new Map();
  async function fetchLlmsTxt(url) {
    let origin;
    try {
      origin = new URL(url).origin;
    } catch {
      return null;
    }
    if (origin === "null") return null;
    if (llmsTxtCache.has(origin)) return llmsTxtCache.get(origin);
    const endpoint = `${origin}/llms.txt`;
    let result = null;
    try {
      console.log(source_default.gray(`[llms.txt] Fetching ${endpoint}`));
      const res = await fetch(endpoint, { signal: AbortSignal.timeout(3e3) });
      if (res.ok) {
        result = await res.text();
        console.log(source_default.green(`[llms.txt] Found (${result.length} chars)`));
        if (result.length > 1e3) {
          console.log(source_default.yellow(`[llms.txt] Truncating to 1000 chars`));
          result = truncate(result, 1e3);
        }
      } else console.debug(source_default.gray(`[llms.txt] ${res.status} for ${endpoint}`));
    } catch (e) {
      console.debug(source_default.gray(`[llms.txt] not found for ${endpoint}`), e);
    }
    llmsTxtCache.set(origin, result);
    return result;
  }
  function assert2(condition, message, silent) {
    if (!condition) {
      const errorMessage = message ?? "Assertion failed";
      if (!silent) console.error(source_default.red(`\u274C assert: ${errorMessage}`));
      throw new Error(errorMessage);
    }
  }
  async function suppress(fn) {
    try {
      return await fn();
    } catch (error2) {
      console.error(error2);
      return;
    }
  }
  function tool(options) {
    return options;
  }
  var tools = /* @__PURE__ */ new Map();
  tools.set("done", tool({
    description: "Complete task. Text is your final response to the user \u2014 keep it concise unless the user explicitly asks for detail.",
    inputSchema: object({
      text: string2(),
      success: boolean2().default(true)
    }),
    execute: async function(input) {
      return Promise.resolve("Task completed");
    }
  }));
  tools.set("wait", tool({
    description: "Wait for x seconds. Can be used to wait until the page or data is fully loaded.",
    inputSchema: object({ seconds: number2().min(1).max(10).default(1) }),
    execute: async function(input, { signal }) {
      const lastTimeUpdate = await this.pageController.getLastUpdateTime();
      const secondsSinceLastUpdate = (Date.now() - lastTimeUpdate) / 1e3;
      const actualWaitTime = Math.max(0, input.seconds - secondsSinceLastUpdate);
      console.log(`actualWaitTime: ${actualWaitTime} seconds`);
      await waitFor(actualWaitTime, signal);
      return `\u2705 Waited for ${(secondsSinceLastUpdate + actualWaitTime).toFixed(2)} seconds.`;
    }
  }));
  tools.set("ask_user", tool({
    description: "Ask the user a question and wait for their answer. Use this if you need more information or clarification.",
    inputSchema: object({ question: string2() }),
    execute: async function(input, { signal }) {
      if (!this.onAskUser) throw new Error("ask_user tool requires onAskUser callback to be set");
      return `User answered: ${await this.onAskUser(input.question, { signal })}`;
    }
  }));
  tools.set("click_element_by_index", tool({
    description: "Click element by index",
    inputSchema: object({ index: int().min(0) }),
    execute: async function(input) {
      return (await this.pageController.clickElement(input.index)).message;
    }
  }));
  tools.set("input_text", tool({
    description: "Click and type text into an interactive input element",
    inputSchema: object({
      index: int().min(0),
      text: string2()
    }),
    execute: async function(input) {
      return (await this.pageController.inputText(input.index, input.text)).message;
    }
  }));
  tools.set("select_dropdown_option", tool({
    description: "Select dropdown option for interactive element index by the text of the option you want to select",
    inputSchema: object({
      index: int().min(0),
      text: string2()
    }),
    execute: async function(input) {
      return (await this.pageController.selectOption(input.index, input.text)).message;
    }
  }));
  tools.set("scroll", tool({
    description: "Scroll vertically. Without index: scrolls the document. With index: scrolls the container at that index (or its nearest scrollable ancestor). Use index of a data-scrollable element to scroll a specific area.",
    inputSchema: object({
      down: boolean2().default(true),
      num_pages: number2().min(0).max(10).optional().default(0.1),
      pixels: number2().int().min(0).optional(),
      index: number2().int().min(0).optional()
    }),
    execute: async function(input) {
      return (await this.pageController.scroll({
        ...input,
        numPages: input.num_pages
      })).message;
    }
  }));
  tools.set("scroll_horizontally", tool({
    description: "Scroll horizontally. Without index: scrolls the document. With index: scrolls the container at that index (or its nearest scrollable ancestor). Use index of a data-scrollable element to scroll a specific area.",
    inputSchema: object({
      right: boolean2().default(true),
      pixels: number2().int().min(0),
      index: number2().int().min(0).optional()
    }),
    execute: async function(input) {
      return (await this.pageController.scrollHorizontally(input)).message;
    }
  }));
  tools.set("execute_javascript", tool({
    description: "Execute JavaScript code on the current page. Supports async/await syntax. Use with caution! An `AbortSignal` named `signal` is available in scope: long-running async code MUST honor it (e.g. `await fetch(url, { signal })`, or `signal.throwIfAborted()` in loops)",
    inputSchema: object({ script: string2() }),
    execute: async function(input, { signal }) {
      const result = await this.pageController.executeJavascript(input.script, signal);
      signal.throwIfAborted();
      return result.message;
    }
  }));
  var _status, _llm, _abortController, _observations, _running, _lastResult, _states, _PageAgentCore_instances, emitStatusChange_fn, emitHistoryChange_fn, emitActivity_fn, setStatus_fn, packMacroTool_fn, getSystemPrompt_fn, getInstructions_fn, handleObservations_fn, assembleUserPrompt_fn, _a;
  var PageAgentCore = (_a = class extends EventTarget {
    constructor(config2) {
      super();
      __privateAdd(this, _PageAgentCore_instances);
      __publicField(this, "id", uid());
      __publicField(this, "config");
      __publicField(this, "tools");
      /** PageController for DOM operations */
      __publicField(this, "pageController");
      __publicField(this, "task", "");
      __publicField(this, "taskId", "");
      /** History events */
      __publicField(this, "history", []);
      /** Whether this agent has been disposed */
      __publicField(this, "disposed", false);
      /**
      * Called when the agent needs to ask the user questions.
      * If unset, the `ask_user` tool will be disabled.
      * Implementations should reject the promise when `signal` aborts.
      * @example onAskUser: (q) => window.prompt(q) || ''
      */
      __publicField(this, "onAskUser");
      __privateAdd(this, _status, "idle");
      __privateAdd(this, _llm);
      /**
      * Task cancellation primitive: its signal reaches the LLM fetch, tools
      * (via `ctx.signal`) and async callbacks. Aborted only by `stop`/`dispose`
      * (during a task) or task setup, always WITHOUT a reason so `signal.reason`
      * stays a standard `AbortError`.
      */
      __privateAdd(this, _abortController, new AbortController());
      __privateAdd(this, _observations, []);
      /** Resolves when the current run has fully settled. Awaited by `stop()`. */
      __privateAdd(this, _running, Promise.resolve());
      __privateAdd(this, _lastResult, null);
      /** internal states during a single task execution */
      __privateAdd(this, _states, {
        /** Accumulated wait time in seconds */
        totalWaitTime: 0,
        /** For detecting navigation */
        lastURL: "",
        /** Browser state */
        browserState: null
      });
      this.config = {
        ...config2,
        maxSteps: config2.maxSteps ?? 40
      };
      __privateSet(this, _llm, new LLM(this.config));
      this.tools = new Map(tools);
      this.pageController = config2.pageController;
      __privateGet(this, _llm).addEventListener("retry", (e) => {
        const { attempt, maxAttempts, lastError } = e.detail;
        __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, {
          type: "retrying",
          attempt,
          maxAttempts
        });
        this.history.push({
          type: "error",
          message: String(lastError),
          rawResponse: lastError.rawResponse
        });
        this.history.push({
          type: "retry",
          message: `LLM retry attempt ${attempt} of ${maxAttempts}`,
          attempt,
          maxAttempts
        });
        __privateMethod(this, _PageAgentCore_instances, emitHistoryChange_fn).call(this);
      });
      if (this.config.customTools) for (const [name, tool2] of Object.entries(this.config.customTools)) {
        if (tool2 === null) {
          this.tools.delete(name);
          continue;
        }
        this.tools.set(name, tool2);
      }
      if (!this.config.experimentalScriptExecutionTool) this.tools.delete("execute_javascript");
    }
    /** Get current agent status */
    get status() {
      return __privateGet(this, _status);
    }
    /** Result of the most recent run, or `null` before the first run completes. */
    get lastResult() {
      return __privateGet(this, _lastResult);
    }
    /**
    * Push an observation message to the history event stream.
    * This will be visible in <agent_history> and remain persistent in memory across steps.
    * @experimental @internal
    * @note history change will be emitted before next step starts
    */
    pushObservation(content) {
      __privateGet(this, _observations).push(content);
    }
    /**
    * Stop the current task and wait until the run has fully settled (including lifecycle hooks).
    * @note never await .stop() in a lifecycle hook.
    */
    async stop() {
      if (__privateGet(this, _status) !== "running") return;
      __privateGet(this, _abortController).abort();
      await __privateGet(this, _running);
    }
    /**
    * external errors (pre-checks/config/hooks) will threw;
    * agent errors will be caught and added to history, and return a failed result
    */
    async execute(task) {
      if (this.disposed) throw new Error("PageAgent has been disposed. Create a new instance.");
      if (__privateGet(this, _status) === "running") throw new Error("A task is already running.");
      if (!task) throw new Error("Task is required");
      this.task = task;
      this.taskId = uid();
      this.history = [];
      __privateSet(this, _observations, []);
      __privateSet(this, _states, {
        totalWaitTime: 0,
        lastURL: "",
        browserState: null
      });
      __privateSet(this, _abortController, new AbortController());
      const signal = __privateGet(this, _abortController).signal;
      let resolveRunning;
      __privateSet(this, _running, new Promise((r) => resolveRunning = r));
      __privateMethod(this, _PageAgentCore_instances, setStatus_fn).call(this, "running");
      __privateMethod(this, _PageAgentCore_instances, emitHistoryChange_fn).call(this);
      if (!this.onAskUser) this.tools.delete("ask_user");
      const onBeforeStep = this.config.onBeforeStep;
      const onAfterStep = this.config.onAfterStep;
      const onBeforeTask = this.config.onBeforeTask;
      const onAfterTask = this.config.onAfterTask;
      const stepDelay = this.config.stepDelay ?? 0.4;
      const maxSteps = this.config.maxSteps;
      let step = 0;
      let taskResult;
      let finalStatus = "error";
      await suppress(() => this.pageController.showMask());
      try {
        await onBeforeTask?.(this);
        while (true) {
          await onBeforeStep?.(this, step);
          try {
            console.group(`step: ${step}`);
            if (step > 0) await waitFor(stepDelay, signal);
            signal.throwIfAborted();
            console.log(source_default.blue.bold("\u{1F440} Observing..."));
            __privateGet(this, _states).browserState = await this.pageController.getBrowserState();
            await __privateMethod(this, _PageAgentCore_instances, handleObservations_fn).call(this, step);
            const messages = [{
              role: "system",
              content: __privateMethod(this, _PageAgentCore_instances, getSystemPrompt_fn).call(this)
            }, {
              role: "user",
              content: await __privateMethod(this, _PageAgentCore_instances, assembleUserPrompt_fn).call(this)
            }];
            const macroTool = { AgentOutput: __privateMethod(this, _PageAgentCore_instances, packMacroTool_fn).call(this) };
            console.log(source_default.blue.bold("\u{1F9E0} Thinking..."));
            __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, { type: "thinking" });
            const result = await __privateGet(this, _llm).invoke(messages, macroTool, signal, {
              toolChoiceName: "AgentOutput",
              normalizeResponse: (res) => normalizeResponse(res, this.tools)
            });
            const macroResult = result.toolResult;
            const input = macroResult.input;
            const output = macroResult.output;
            const reflection = {
              evaluation_previous_goal: input.evaluation_previous_goal,
              memory: input.memory,
              next_goal: input.next_goal
            };
            const actionName = Object.keys(input.action)[0];
            const action = {
              name: actionName,
              input: input.action[actionName],
              output
            };
            __privateMethod(this, _PageAgentCore_instances, emitHistoryChange_fn).call(this, {
              type: "step",
              stepIndex: step,
              reflection,
              action,
              usage: result.usage,
              rawResponse: result.rawResponse,
              rawRequest: result.rawRequest
            });
            if (actionName === "done") {
              const success = action.input?.success ?? false;
              const data = action.input?.text || "no text provided";
              console.log(source_default.green.bold("Task completed"), success, data);
              taskResult = {
                success,
                data,
                history: this.history
              };
              __privateSet(this, _lastResult, taskResult);
              finalStatus = "completed";
              break;
            }
          } catch (error2) {
            const isAbortError = error2?.name === "AbortError";
            if (!isAbortError) console.error("Task failed", error2);
            const message = isAbortError ? "Task aborted" : String(error2);
            __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, {
              type: "error",
              message
            });
            __privateMethod(this, _PageAgentCore_instances, emitHistoryChange_fn).call(this, {
              type: "error",
              message,
              rawResponse: error2
            });
            taskResult = {
              success: false,
              data: message,
              history: this.history
            };
            __privateSet(this, _lastResult, taskResult);
            finalStatus = isAbortError ? "stopped" : "error";
            break;
          } finally {
            console.groupEnd();
            await onAfterStep?.(this, this.history);
          }
          step++;
          if (step > maxSteps) {
            const message = "Step count exceeded maximum limit";
            console.error(message);
            __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, {
              type: "error",
              message
            });
            __privateMethod(this, _PageAgentCore_instances, emitHistoryChange_fn).call(this, {
              type: "error",
              message
            });
            taskResult = {
              success: false,
              data: message,
              history: this.history
            };
            __privateSet(this, _lastResult, taskResult);
            finalStatus = "error";
            break;
          }
        }
        await onAfterTask?.(this, taskResult);
        return taskResult;
      } catch (error2) {
        __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, {
          type: "error",
          message: String(error2)
        });
        finalStatus = "error";
        throw error2;
      } finally {
        await suppress(() => this.pageController.cleanUpHighlights());
        await suppress(() => this.pageController.hideMask());
        __privateGet(this, _abortController).abort();
        resolveRunning();
        __privateMethod(this, _PageAgentCore_instances, setStatus_fn).call(this, finalStatus);
      }
    }
    dispose() {
      console.log("Disposing PageAgent...");
      this.disposed = true;
      this.pageController.dispose();
      __privateGet(this, _abortController).abort();
      this.dispatchEvent(new Event("dispose"));
      this.config.onDispose?.(this);
    }
  }, _status = new WeakMap(), _llm = new WeakMap(), _abortController = new WeakMap(), _observations = new WeakMap(), _running = new WeakMap(), _lastResult = new WeakMap(), _states = new WeakMap(), _PageAgentCore_instances = new WeakSet(), /** Emit statuschange event */
  emitStatusChange_fn = function() {
    this.dispatchEvent(new Event("statuschange"));
  }, /** Emit historychange event */
  emitHistoryChange_fn = function(pushHistoricalEvent) {
    if (pushHistoricalEvent) this.history.push(pushHistoricalEvent);
    this.dispatchEvent(new Event("historychange"));
  }, /**
  * Emit activity event - for transient UI feedback
  * @param activity - Current agent activity
  */
  emitActivity_fn = function(activity) {
    this.dispatchEvent(new CustomEvent("activity", { detail: activity }));
  }, /** Update status and emit event */
  setStatus_fn = function(status) {
    if (__privateGet(this, _status) !== status) {
      __privateSet(this, _status, status);
      __privateMethod(this, _PageAgentCore_instances, emitStatusChange_fn).call(this);
    }
  }, /**
  * Merge all tools into a single MacroTool with the following input:
  * - thinking: string
  * - evaluation_previous_goal: string
  * - memory: string
  * - next_goal: string
  * - action: { toolName: toolInput }
  * where action must be selected from tools defined in this.tools
  */
  packMacroTool_fn = function() {
    const tools2 = this.tools;
    const actionSchemas = Array.from(tools2.entries()).map(([toolName, tool2]) => {
      return object({ [toolName]: tool2.inputSchema }).describe(tool2.description);
    });
    const actionSchema = union(actionSchemas);
    return {
      description: "You MUST call this tool every step!",
      inputSchema: object({
        evaluation_previous_goal: string2().optional(),
        memory: string2().optional(),
        next_goal: string2().optional(),
        action: actionSchema
      }),
      execute: async (input) => {
        const signal = __privateGet(this, _abortController).signal;
        signal.throwIfAborted();
        console.log(source_default.blue.bold("MacroTool input"), input);
        const action = input.action;
        const toolName = Object.keys(action)[0];
        const toolInput = action[toolName];
        const reflectionLines = [];
        if (input.evaluation_previous_goal) reflectionLines.push(`\u2705: ${input.evaluation_previous_goal}`);
        if (input.memory) reflectionLines.push(`\u{1F4BE}: ${input.memory}`);
        if (input.next_goal) reflectionLines.push(`\u{1F3AF}: ${input.next_goal}`);
        const reflectionText = reflectionLines.length > 0 ? reflectionLines.join("\n") : "";
        if (reflectionText) console.log(reflectionText);
        const tool2 = tools2.get(toolName);
        assert2(tool2, `Tool ${toolName} not found`);
        console.log(source_default.blue.bold(`Executing tool: ${toolName}`), toolInput);
        __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, {
          type: "executing",
          tool: toolName,
          input: toolInput
        });
        const startTime = Date.now();
        const result = await tool2.execute.bind(this)(toolInput, { signal });
        signal.throwIfAborted();
        const duration3 = Date.now() - startTime;
        console.log(source_default.green.bold(`Tool (${toolName}) executed for ${duration3}ms`), result);
        __privateMethod(this, _PageAgentCore_instances, emitActivity_fn).call(this, {
          type: "executed",
          tool: toolName,
          input: toolInput,
          output: result,
          duration: duration3
        });
        if (toolName === "wait") __privateGet(this, _states).totalWaitTime += toolInput?.seconds || 0;
        else __privateGet(this, _states).totalWaitTime = 0;
        return {
          input,
          output: result
        };
      }
    };
  }, /**
  * Get system prompt, dynamically replace language settings based on configured language
  */
  getSystemPrompt_fn = function() {
    if (this.config.customSystemPrompt) return this.config.customSystemPrompt;
    const targetLanguage = this.config.language === "zh-CN" ? "\u4E2D\u6587" : "English";
    return system_prompt_default.replace(/Default working language: \*\*.*?\*\*/, `Default working language: **${targetLanguage}**`);
  }, getInstructions_fn = async function() {
    const { instructions, experimentalLlmsTxt } = this.config;
    const systemInstructions = instructions?.system?.trim();
    let pageInstructions;
    const url = __privateGet(this, _states).browserState?.url || "";
    if (instructions?.getPageInstructions && url) try {
      pageInstructions = instructions.getPageInstructions(url)?.trim();
    } catch (error2) {
      console.error(source_default.red("[PageAgent] Failed to execute getPageInstructions callback:"), error2);
    }
    const llmsTxt = experimentalLlmsTxt && url ? await fetchLlmsTxt(url) : void 0;
    if (!systemInstructions && !pageInstructions && !llmsTxt) return "";
    let result = "<instructions>\n";
    if (systemInstructions) result += `<system_instructions>
${systemInstructions}
</system_instructions>
`;
    if (pageInstructions) result += `<page_instructions>
${pageInstructions}
</page_instructions>
`;
    if (llmsTxt) result += `<llms_txt>
${llmsTxt}
</llms_txt>
`;
    result += "</instructions>\n\n";
    return result;
  }, handleObservations_fn = async function(step) {
    if (__privateGet(this, _states).totalWaitTime >= 3) this.pushObservation(`You have waited ${__privateGet(this, _states).totalWaitTime} seconds accumulatively. DO NOT wait any longer unless you have a good reason.`);
    const currentURL = __privateGet(this, _states).browserState?.url || "";
    if (currentURL !== __privateGet(this, _states).lastURL) {
      this.pushObservation(`Page navigated to \u2192 ${currentURL}`);
      __privateGet(this, _states).lastURL = currentURL;
      await waitFor(0.5);
    }
    const remaining = this.config.maxSteps - step;
    if (remaining === 5) this.pushObservation(`\u26A0\uFE0F Only ${remaining} steps remaining. Consider wrapping up or calling done with partial results.`);
    else if (remaining === 2) this.pushObservation(`\u26A0\uFE0F Critical: Only ${remaining} steps left! You must finish the task or call done immediately.`);
    if (__privateGet(this, _observations).length > 0) {
      for (const content of __privateGet(this, _observations)) {
        this.history.push({
          type: "observation",
          content
        });
        console.log(source_default.cyan("Observation:"), content);
      }
      __privateSet(this, _observations, []);
      __privateMethod(this, _PageAgentCore_instances, emitHistoryChange_fn).call(this);
    }
  }, assembleUserPrompt_fn = async function() {
    const browserState = __privateGet(this, _states).browserState;
    let prompt = "";
    prompt += await __privateMethod(this, _PageAgentCore_instances, getInstructions_fn).call(this);
    const stepCount = this.history.filter((e) => e.type === "step").length;
    prompt += "<agent_state>\n";
    prompt += "<user_request>\n";
    prompt += `${this.task}
`;
    prompt += "</user_request>\n";
    prompt += "<step_info>\n";
    prompt += `Step ${stepCount + 1} of ${this.config.maxSteps} max possible steps
`;
    prompt += `Current time: ${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
    prompt += "</step_info>\n";
    prompt += "</agent_state>\n\n";
    prompt += "<agent_history>\n";
    let stepIndex = 0;
    for (const event of this.history) if (event.type === "step") {
      stepIndex++;
      prompt += `<step_${stepIndex}>
`;
      prompt += `Evaluation of Previous Step: ${event.reflection.evaluation_previous_goal}
`;
      prompt += `Memory: ${event.reflection.memory}
`;
      prompt += `Next Goal: ${event.reflection.next_goal}
`;
      prompt += `Action Results: ${event.action.output}
`;
      prompt += `</step_${stepIndex}>
`;
    } else if (event.type === "observation") prompt += `<sys>${event.content}</sys>
`;
    else if (event.type === "user_takeover") prompt += `<sys>User took over control and made changes to the page</sys>
`;
    else if (event.type === "error") {
    }
    prompt += "</agent_history>\n\n";
    let pageContent = browserState.content;
    if (this.config.transformPageContent) pageContent = await this.config.transformPageContent(pageContent);
    prompt += "<browser_state>\n";
    prompt += browserState.header + "\n";
    prompt += pageContent + "\n";
    prompt += browserState.footer + "\n\n";
    prompt += "</browser_state>\n\n";
    return prompt;
  }, _a);

  // src/endpoint.js
  var COMPILED_PROXY_PORT = false ? 8788 : 8788;
  function validateProxyPort(value) {
    if (!Number.isInteger(value) || value < 1 || value > 65535) {
      throw policyError();
    }
    return value;
  }
  var DEFAULT_PROXY_PORT = validateProxyPort(COMPILED_PROXY_PORT);
  var MODEL_NAME = "qwen-plus";
  var MODEL_BASE_URL = `http://127.0.0.1:${DEFAULT_PROXY_PORT}/v1`;
  var FINAL_REQUEST_URL = `${MODEL_BASE_URL}/chat/completions`;
  var BASE_URL_PATTERN = /^http:\/\/(127\.0\.0\.1|\[::1\]):([0-9]{1,5})\/v1$/;
  var FINAL_URL_PATTERN = /^http:\/\/(127\.0\.0\.1|\[::1\]):([0-9]{1,5})\/v1\/chat\/completions$/;
  var ALLOWED_HEADERS = /* @__PURE__ */ new Map([
    ["content-type", "application/json"],
    ["accept", "application/json"]
  ]);
  var SENSITIVE_HEADER_PREFIXES = [
    "x-forwarded-"
  ];
  var SENSITIVE_HEADERS = /* @__PURE__ */ new Set([
    "authorization",
    "cookie",
    "set-cookie",
    "proxy-authorization",
    "x-api-key",
    "x-auth-token"
  ]);
  var ENDPOINT_ERROR_CODE = "endpoint_policy_violation";
  function policyError() {
    const error2 = new Error(ENDPOINT_ERROR_CODE);
    error2.code = ENDPOINT_ERROR_CODE;
    return error2;
  }
  function parseStrictURL(value, pattern, suffix) {
    if (typeof value !== "string" || !pattern.test(value)) throw policyError();
    let parsed;
    try {
      parsed = new URL(value);
    } catch {
      throw policyError();
    }
    if (parsed.protocol !== "http:" || parsed.username || parsed.password || parsed.search || parsed.hash) {
      throw policyError();
    }
    const match = value.match(pattern);
    const port = Number(match[2]);
    if (!Number.isInteger(port) || port < 1 || port > 65535 || parsed.pathname !== suffix) {
      throw policyError();
    }
    return Object.freeze({
      value,
      host: match[1],
      port
    });
  }
  function parseModelBaseURL(value) {
    return parseStrictURL(value, BASE_URL_PATTERN, "/v1");
  }
  function parseFinalRequestURL(value) {
    return parseStrictURL(value, FINAL_URL_PATTERN, "/v1/chat/completions");
  }
  function expectedFinalURL(baseURL) {
    const parsed = parseModelBaseURL(baseURL);
    return `${parsed.value}/chat/completions`;
  }
  function readHeaderPairs(headers) {
    if (headers === void 0) return [];
    if (headers === null || typeof headers !== "object" && typeof headers !== "function") {
      throw policyError();
    }
    try {
      if (typeof Headers !== "undefined" && headers instanceof Headers) {
        return Array.from(headers.entries());
      }
      if (Array.isArray(headers)) {
        return headers.map((pair) => {
          if (!Array.isArray(pair) || pair.length !== 2) throw policyError();
          return [pair[0], pair[1]];
        });
      }
      const pairs = [];
      for (const name of Object.keys(headers)) pairs.push([name, headers[name]]);
      return pairs;
    } catch (error2) {
      if (error2?.code === ENDPOINT_ERROR_CODE) throw error2;
      throw policyError();
    }
  }
  function readAllowedHeaders(headers) {
    const values = /* @__PURE__ */ new Map();
    for (const pair of readHeaderPairs(headers)) {
      const [rawName, rawValue] = pair;
      if (typeof rawName !== "string" || typeof rawValue !== "string") throw policyError();
      const name = rawName.toLowerCase();
      if (SENSITIVE_HEADERS.has(name) || SENSITIVE_HEADER_PREFIXES.some((prefix) => name.startsWith(prefix))) {
        throw policyError();
      }
      const expectedValue = ALLOWED_HEADERS.get(name);
      if (expectedValue === void 0 || rawValue !== expectedValue || values.has(name)) throw policyError();
      values.set(name, rawValue);
    }
    return values;
  }
  function readInputURL(input, finalURL) {
    if (typeof input === "string") {
      if (input !== finalURL) throw policyError();
      return input;
    }
    if (typeof URL !== "undefined" && input instanceof URL) {
      if (input.href !== finalURL) throw policyError();
      return input.href;
    }
    throw policyError();
  }
  function readRequestInit(init) {
    if (init === void 0) throw policyError();
    if (init === null || typeof init !== "object" || Array.isArray(init)) throw policyError();
    try {
      const allowedKeys = /* @__PURE__ */ new Set(["method", "headers", "body", "signal"]);
      for (const key of Object.keys(init)) if (!allowedKeys.has(key)) throw policyError();
      const method = init.method;
      const headers = init.headers;
      const body = init.body;
      const signal = init.signal;
      if (method !== "POST" || typeof body !== "string") throw policyError();
      return { headers, body, signal };
    } catch {
      throw policyError();
    }
  }
  function createSecureCustomFetch({ baseURL = MODEL_BASE_URL, fetchImpl = globalThis.fetch } = {}) {
    const parsedBaseURL = parseModelBaseURL(baseURL);
    const finalURL = expectedFinalURL(parsedBaseURL.value);
    parseFinalRequestURL(finalURL);
    if (typeof fetchImpl !== "function") throw policyError();
    return async function secureCustomFetch2(input, init) {
      const requestURL = readInputURL(input, finalURL);
      const requestInit = readRequestInit(init);
      const suppliedHeaders = readAllowedHeaders(requestInit.headers);
      const headers = {
        "Content-Type": suppliedHeaders.get("content-type") || "application/json",
        Accept: suppliedHeaders.get("accept") || "application/json"
      };
      const safeInit = {
        method: "POST",
        headers,
        body: requestInit.body,
        credentials: "omit",
        referrerPolicy: "no-referrer",
        cache: "no-store",
        redirect: "error"
      };
      if (requestInit.signal !== void 0) safeInit.signal = requestInit.signal;
      return fetchImpl(requestURL, safeInit);
    };
  }
  var secureCustomFetch = createSecureCustomFetch();

  // src/constants.js
  var PROJECTION_SCHEMA_VERSION = 2;
  var MAX_CONTEXT_BYTES = 16 * 1024;
  var MAX_QUEUE_ACTIONS = 32;
  var MAX_ACTION_ID_LENGTH = 80;
  var MAX_ACTION_TEXT_LENGTH = 160;
  var MAX_MARKET_RECORDS = 256;
  var MAX_WARNINGS = 16;
  var PAGE_URL_SENTINEL = "mwi://unapproved-page";
  var GAME_PAGE_SELECTOR = '[class*="GamePage_gamePage"]';
  var APPROVED_GAME_PATH = "/game";
  var APPROVED_MWI_ORIGINS = Object.freeze([
    "https://www.milkywayidle.com",
    "https://www.milkywayidlecn.com",
    "https://test.milkywayidle.com",
    "https://test.milkywayidlecn.com"
  ]);
  var WARNING_CODES = Object.freeze([
    "native_root_missing",
    "native_core_missing",
    "native_core_ambiguous",
    "native_traversal_limit",
    "native_invalid",
    "game_not_ready",
    "game_disconnected",
    "queue_unavailable",
    "queue_text_unavailable",
    "queue_truncated",
    "queue_invalid_action",
    "market_unavailable",
    "market_invalid",
    "market_truncated"
  ]);
  var WARNING_ORDER = Object.freeze(WARNING_CODES.slice());
  var NATIVE_CORE_FAILURE_WARNINGS = Object.freeze([
    "native_root_missing",
    "native_core_missing",
    "native_core_ambiguous",
    "native_traversal_limit",
    "native_invalid"
  ]);
  var PLUGIN_IDS = Object.freeze(["mwi-pageagent"]);
  var ACTION_ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9:._\/-]{0,79}$/;
  var ACTION_SKILLS = Object.freeze([
    "alchemy",
    "brewing",
    "cheesesmithing",
    "combat",
    "cooking",
    "crafting",
    "enhancing",
    "fishing",
    "foraging",
    "milking",
    "mining",
    "tailoring",
    "woodcutting"
  ]);
  var FIXED_ACTION_LABELS = Object.freeze({
    alchemy: "Alchemy",
    brewing: "Brewing",
    cheesesmithing: "Cheesesmithing",
    combat: "Combat",
    cooking: "Cooking",
    crafting: "Crafting",
    enhancing: "Enhancing",
    fishing: "Fishing",
    foraging: "Foraging",
    milking: "Milking",
    mining: "Mining",
    tailoring: "Tailoring",
    woodcutting: "Woodcutting"
  });
  var PROJECTION_OVERSIZE_CODE = "projection_oversize";
  function isWarningCode(value) {
    return typeof value === "string" && WARNING_CODES.includes(value);
  }
  function nativeStatusWarning(status) {
    switch (status) {
      case "root_missing":
        return "native_root_missing";
      case "react_root_missing":
      case "core_missing":
        return "native_core_missing";
      case "core_ambiguous":
        return "native_core_ambiguous";
      case "traversal_limit":
        return "native_traversal_limit";
      case "native_invalid":
        return "native_invalid";
      default:
        return null;
    }
  }
  function normalizeBoundedText(value, maxLength) {
    if (typeof value !== "string") return "";
    return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
  }
  function normalizeGamePath(pathname) {
    if (typeof pathname !== "string") return null;
    if (pathname === "/game" || pathname === "/game/") return APPROVED_GAME_PATH;
    return null;
  }

  // src/native-core-adapter.js
  var DEFAULT_MAX_VISITED = 5e4;
  var NATIVE_CORE_STATUS = Object.freeze({
    READY: "ready",
    ROOT_MISSING: "root_missing",
    REACT_ROOT_MISSING: "react_root_missing",
    CORE_MISSING: "core_missing",
    CORE_AMBIGUOUS: "core_ambiguous",
    TRAVERSAL_LIMIT: "traversal_limit",
    NATIVE_INVALID: "native_invalid"
  });
  function objectLike(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
  }
  function invalidResult(visited = 0) {
    return { core: null, status: NATIVE_CORE_STATUS.NATIVE_INVALID, visited };
  }
  function readMaxVisited(limits) {
    if (limits === void 0) return DEFAULT_MAX_VISITED;
    if (!objectLike(limits)) return DEFAULT_MAX_VISITED;
    try {
      const value = limits.maxVisited;
      if (Number.isSafeInteger(value) && value > 0) return value;
    } catch {
      return DEFAULT_MAX_VISITED;
    }
    return DEFAULT_MAX_VISITED;
  }
  function readRootFiber(rootContainer) {
    let current;
    try {
      current = rootContainer.current;
    } catch {
      return { fiber: null, status: NATIVE_CORE_STATUS.NATIVE_INVALID };
    }
    if (objectLike(current)) return { fiber: current, status: null };
    let internalRoot;
    try {
      internalRoot = rootContainer._internalRoot;
    } catch {
      return { fiber: null, status: NATIVE_CORE_STATUS.NATIVE_INVALID };
    }
    if (!objectLike(internalRoot)) {
      return { fiber: null, status: NATIVE_CORE_STATUS.REACT_ROOT_MISSING };
    }
    try {
      current = internalRoot.current;
    } catch {
      return { fiber: null, status: NATIVE_CORE_STATUS.NATIVE_INVALID };
    }
    return objectLike(current) ? { fiber: current, status: null } : { fiber: null, status: NATIVE_CORE_STATUS.REACT_ROOT_MISSING };
  }
  function resolveNativeCore({ documentRef = globalThis.document, limits } = {}) {
    const maxVisited = readMaxVisited(limits);
    if (!objectLike(documentRef)) return invalidResult();
    let root;
    try {
      if (typeof documentRef.getElementById !== "function") {
        return { core: null, status: NATIVE_CORE_STATUS.ROOT_MISSING, visited: 0 };
      }
      root = documentRef.getElementById("root");
    } catch {
      return invalidResult();
    }
    if (!objectLike(root)) {
      return { core: null, status: NATIVE_CORE_STATUS.ROOT_MISSING, visited: 0 };
    }
    let rootContainer;
    try {
      rootContainer = root._reactRootContainer;
    } catch {
      return invalidResult();
    }
    if (!objectLike(rootContainer)) {
      return { core: null, status: NATIVE_CORE_STATUS.REACT_ROOT_MISSING, visited: 0 };
    }
    const rootResult = readRootFiber(rootContainer);
    if (rootResult.status !== null) return { core: null, status: rootResult.status, visited: 0 };
    const stack = [rootResult.fiber];
    const visited = /* @__PURE__ */ new Set();
    const candidates = /* @__PURE__ */ new Set();
    let candidateCore = null;
    while (stack.length > 0) {
      const fiber = stack.pop();
      if (!objectLike(fiber)) return invalidResult(visited.size);
      if (visited.has(fiber)) continue;
      if (visited.size >= maxVisited) {
        return { core: null, status: NATIVE_CORE_STATUS.TRAVERSAL_LIMIT, visited: visited.size };
      }
      visited.add(fiber);
      let stateNode;
      try {
        stateNode = fiber.stateNode;
      } catch {
        return invalidResult(visited.size);
      }
      if (objectLike(stateNode)) {
        let sendPing;
        try {
          sendPing = stateNode.sendPing;
        } catch {
          return invalidResult(visited.size);
        }
        if (typeof sendPing === "function") {
          let state;
          try {
            state = stateNode.state;
          } catch {
            return invalidResult(visited.size);
          }
          if (objectLike(state) && !candidates.has(stateNode)) {
            candidates.add(stateNode);
            candidateCore = stateNode;
            if (candidates.size > 1) {
              return { core: null, status: NATIVE_CORE_STATUS.CORE_AMBIGUOUS, visited: visited.size };
            }
          }
        }
      }
      let child;
      let sibling;
      try {
        child = fiber.child;
        sibling = fiber.sibling;
      } catch {
        return invalidResult(visited.size);
      }
      if (child !== null && child !== void 0 && !objectLike(child)) {
        return invalidResult(visited.size);
      }
      if (sibling !== null && sibling !== void 0 && !objectLike(sibling)) {
        return invalidResult(visited.size);
      }
      if (sibling !== null && sibling !== void 0) stack.push(sibling);
      if (child !== null && child !== void 0) stack.push(child);
    }
    if (candidates.size === 0) {
      return { core: null, status: NATIVE_CORE_STATUS.CORE_MISSING, visited: visited.size };
    }
    if (candidates.size !== 1) {
      return { core: null, status: NATIVE_CORE_STATUS.CORE_AMBIGUOUS, visited: visited.size };
    }
    return { core: candidateCore, status: NATIVE_CORE_STATUS.READY, visited: visited.size };
  }

  // src/market-adapter.js
  function isObjectLike(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
  }
  function emptyMarket() {
    return {
      available: false,
      scannedListings: 0,
      truncated: false,
      bySide: { buy: 0, sell: 0, unknown: 0 },
      claimableListings: 0
    };
  }
  function invalidResult2() {
    return { market: emptyMarket(), warnings: ["market_invalid"] };
  }
  function unavailableResult() {
    return { market: emptyMarket(), warnings: ["market_unavailable"] };
  }
  function readSide(listing) {
    let isSell;
    try {
      isSell = listing.isSell;
    } catch {
      return { invalid: true, side: "unknown" };
    }
    if (typeof isSell === "boolean") {
      return { invalid: false, side: isSell ? "sell" : "buy" };
    }
    let side;
    try {
      side = listing.side;
    } catch {
      return { invalid: true, side: "unknown" };
    }
    if (side === "buy" || side === "sell") return { invalid: false, side };
    return { invalid: false, side: "unknown" };
  }
  function readIteratorEntry(iterator) {
    try {
      const result = iterator.next();
      if (!isObjectLike(result)) return { ok: false, done: false, listing: null };
      const done = result.done;
      const listing = result.value;
      return { ok: true, done, listing };
    } catch {
      return { ok: false, done: false, listing: null };
    }
  }
  function readCount(listing, key) {
    let value;
    try {
      value = listing[key];
    } catch {
      return { invalid: true, value: 0 };
    }
    if (value === void 0) return { invalid: false, value: 0 };
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
      return { invalid: true, value: 0 };
    }
    return { invalid: false, value };
  }
  function readMapSize(map) {
    try {
      const getter = Object.getOwnPropertyDescriptor(Map.prototype, "size")?.get;
      if (typeof getter !== "function") return null;
      const size = getter.call(map);
      return Number.isSafeInteger(size) && size >= 0 ? size : null;
    } catch {
      return null;
    }
  }
  function readMarketProjection({ nativeResult, state } = {}) {
    if (nativeResult?.status !== NATIVE_CORE_STATUS.READY || !isObjectLike(state)) {
      return unavailableResult();
    }
    let listingMap;
    try {
      listingMap = state.myMarketListingMap;
    } catch {
      return invalidResult2();
    }
    if (!(listingMap instanceof Map)) return unavailableResult();
    const size = readMapSize(listingMap);
    if (size === null) return invalidResult2();
    let iterator;
    try {
      iterator = Map.prototype.values.call(listingMap);
    } catch {
      return invalidResult2();
    }
    const scannedListings = Math.min(size, MAX_MARKET_RECORDS);
    const bySide = { buy: 0, sell: 0, unknown: 0 };
    let claimableListings = 0;
    for (let index = 0; index < scannedListings; index += 1) {
      const entry = readIteratorEntry(iterator);
      if (!entry.ok || entry.done === true || !isObjectLike(entry.listing)) return invalidResult2();
      const listing = entry.listing;
      const sideResult = readSide(listing);
      if (sideResult.invalid) return invalidResult2();
      const itemCount = readCount(listing, "unclaimedItemCount");
      const coinCount = readCount(listing, "unclaimedCoinCount");
      if (itemCount.invalid || coinCount.invalid) return invalidResult2();
      bySide[sideResult.side] += 1;
      if (itemCount.value > 0 || coinCount.value > 0) claimableListings += 1;
    }
    const truncated = size > MAX_MARKET_RECORDS;
    return {
      market: {
        available: true,
        scannedListings,
        truncated,
        bySide,
        claimableListings
      },
      warnings: truncated ? ["market_truncated"] : []
    };
  }

  // src/page-adapter.js
  function isObjectLike2(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
  }
  function pushWarning(warnings, warning) {
    if (warning !== null && !warnings.includes(warning)) warnings.push(warning);
  }
  function readPageLocation(locationRef) {
    let protocol = "";
    let origin = "";
    let pathname = "";
    try {
      if (typeof locationRef?.protocol === "string") protocol = locationRef.protocol;
    } catch {
      protocol = "";
    }
    try {
      if (typeof locationRef?.origin === "string") origin = locationRef.origin;
    } catch {
      origin = "";
    }
    try {
      if (typeof locationRef?.pathname === "string") pathname = locationRef.pathname;
    } catch {
      pathname = "";
    }
    return { protocol, origin, normalizedPath: normalizeGamePath(pathname) };
  }
  function readPageState({ locationRef, documentRef, nativeResult, state } = {}) {
    const warnings = [];
    const { protocol, origin, normalizedPath } = readPageLocation(locationRef);
    const approvedOrigin = protocol === "https:" && APPROVED_MWI_ORIGINS.includes(origin);
    const approvedPath = normalizedPath === APPROVED_GAME_PATH;
    const safeUrl = approvedOrigin && approvedPath ? `${origin}${normalizedPath}` : PAGE_URL_SENTINEL;
    let title = "";
    try {
      if (typeof documentRef?.title === "string") title = normalizeBoundedText(documentRef.title, 160);
    } catch {
      title = "";
    }
    let hasGamePage = false;
    try {
      const querySelector = documentRef?.querySelector;
      if (typeof querySelector === "function") {
        hasGamePage = querySelector.call(documentRef, GAME_PAGE_SELECTOR) !== null;
      }
    } catch {
      hasGamePage = false;
    }
    const nativeWarning = nativeStatusWarning(nativeResult?.status);
    pushWarning(warnings, nativeWarning);
    const nativeReady = nativeResult?.status === NATIVE_CORE_STATUS.READY && isObjectLike2(state);
    let disconnected = false;
    let disconnectReadable = false;
    let nativeInvalid = nativeResult?.status === NATIVE_CORE_STATUS.READY && !isObjectLike2(state);
    if (nativeInvalid) pushWarning(warnings, "native_invalid");
    if (nativeReady) {
      try {
        disconnected = Boolean(state.disconnectMessage);
        disconnectReadable = true;
      } catch {
        nativeInvalid = true;
        pushWarning(warnings, "native_invalid");
      }
    }
    if (disconnected) pushWarning(warnings, "game_disconnected");
    const gameReady = approvedOrigin && approvedPath && hasGamePage && nativeReady && disconnectReadable && !nativeInvalid;
    if (!gameReady) pushWarning(warnings, "game_not_ready");
    return {
      page: { url: safeUrl, title, gameReady, disconnected },
      approvedPage: approvedOrigin && approvedPath,
      hasGamePage,
      nativeInvalid,
      warnings
    };
  }

  // src/queue-adapter.js
  var ACTION_HRID_PATTERN = new RegExp(
    `^/?actions/(${ACTION_SKILLS.join("|")})/[a-z0-9][a-z0-9._/-]*$`
  );
  var ACTION_TYPE_PATTERN = new RegExp(`^/?action_types/(${ACTION_SKILLS.join("|")})$`);
  function isObjectLike3(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
  }
  function pushWarning2(warnings, warning) {
    if (!warnings.includes(warning)) warnings.push(warning);
  }
  function normalizeActionId(value) {
    if (typeof value === "string") {
      const normalized = value.trim();
      if (normalized.length <= MAX_ACTION_ID_LENGTH && ACTION_ID_PATTERN.test(normalized)) return normalized;
      return null;
    }
    if (Number.isSafeInteger(value)) return String(value);
    return null;
  }
  function readActionId(action) {
    if (!isObjectLike3(action)) return null;
    try {
      return normalizeActionId(action.id);
    } catch {
      return null;
    }
  }
  function readActionSkill(action, key, pattern) {
    if (!isObjectLike3(action)) return { skill: null, valid: false, present: false };
    try {
      const value = action[key];
      if (value === void 0) return { skill: null, valid: true, present: false };
      if (typeof value !== "string") return { skill: null, valid: false, present: true };
      if (value.length > MAX_ACTION_ID_LENGTH) return { skill: null, valid: false, present: true };
      const match = pattern.exec(value);
      if (!match) return { skill: null, valid: false, present: true };
      return { skill: match[1], valid: true, present: true };
    } catch {
      return { skill: null, valid: false, present: true };
    }
  }
  function actionText(actionHrid, actionType) {
    const skill = actionHrid.skill || actionType.skill;
    if (skill === null) return "";
    return typeof FIXED_ACTION_LABELS[skill] === "string" ? FIXED_ACTION_LABELS[skill].slice(0, MAX_ACTION_TEXT_LENGTH) : "";
  }
  function unavailable() {
    return { available: false, actions: [], warnings: ["queue_unavailable"] };
  }
  function readQueueProjection({ nativeResult, state } = {}) {
    if (nativeResult?.status !== NATIVE_CORE_STATUS.READY || !isObjectLike3(state)) return unavailable();
    const warnings = [];
    let actions;
    try {
      actions = state.characterActions;
    } catch {
      return unavailable();
    }
    if (!Array.isArray(actions)) return unavailable();
    let actionCount;
    try {
      actionCount = actions.length;
    } catch {
      return unavailable();
    }
    const output = [];
    const limit = Math.min(actionCount, MAX_QUEUE_ACTIONS);
    for (let index = 0; index < limit; index += 1) {
      let action;
      try {
        action = actions[index];
      } catch {
        pushWarning2(warnings, "queue_invalid_action");
        continue;
      }
      const id = readActionId(action);
      if (id === null) {
        pushWarning2(warnings, "queue_invalid_action");
        continue;
      }
      const actionHrid = readActionSkill(action, "actionHrid", ACTION_HRID_PATTERN);
      const actionType = readActionSkill(action, "actionType", ACTION_TYPE_PATTERN);
      const text = actionHrid.valid && actionType.valid ? actionText(actionHrid, actionType) : "";
      if (!actionHrid.valid || !actionType.valid || !text) pushWarning2(warnings, "queue_text_unavailable");
      output.push({ id, text, current: index === 0 });
    }
    if (actionCount > MAX_QUEUE_ACTIONS) pushWarning2(warnings, "queue_truncated");
    return { available: true, actions: output, warnings };
  }

  // src/projection.js
  var ProjectionOversizeError = class extends Error {
    constructor() {
      super(PROJECTION_OVERSIZE_CODE);
      this.name = "ProjectionOversizeError";
      this.code = PROJECTION_OVERSIZE_CODE;
    }
  };
  function orderedWarnings(warnings) {
    const present = new Set(warnings.filter(isWarningCode));
    return WARNING_ORDER.filter((warning) => present.has(warning)).slice(0, MAX_WARNINGS);
  }
  function isObjectLike4(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
  }
  function readNativeState(nativeResult) {
    if (nativeResult?.status !== NATIVE_CORE_STATUS.READY || !isObjectLike4(nativeResult.core)) {
      return { nativeResult, state: null };
    }
    try {
      const state = nativeResult.core.state;
      if (!isObjectLike4(state)) throw new Error();
      return { nativeResult, state };
    } catch {
      return {
        nativeResult: {
          core: null,
          status: NATIVE_CORE_STATUS.NATIVE_INVALID,
          visited: nativeResult.visited
        },
        state: null
      };
    }
  }
  function assertProjectionSize(projection) {
    const serialized = JSON.stringify(projection);
    const bytes = new TextEncoder().encode(serialized).byteLength;
    if (bytes > MAX_CONTEXT_BYTES) throw new ProjectionOversizeError();
    return { serialized, bytes };
  }
  function createProjection({
    documentRef = globalThis.document,
    locationRef = globalThis.location
  } = {}) {
    const resolved = resolveNativeCore({ documentRef });
    const nativeState = readNativeState(resolved);
    let nativeResult = nativeState.nativeResult;
    const state = nativeState.state;
    const pageResult = readPageState({ locationRef, documentRef, nativeResult, state });
    if (pageResult.nativeInvalid && nativeResult.status === NATIVE_CORE_STATUS.READY) {
      nativeResult = {
        core: null,
        status: NATIVE_CORE_STATUS.NATIVE_INVALID,
        visited: nativeResult.visited
      };
    }
    const queueResult = readQueueProjection({ nativeResult, state: pageResult.nativeInvalid ? null : state });
    const marketResult = readMarketProjection({ nativeResult, state: pageResult.nativeInvalid ? null : state });
    const projection = {
      schemaVersion: PROJECTION_SCHEMA_VERSION,
      page: {
        url: pageResult.page.url,
        title: pageResult.page.title,
        gameReady: pageResult.page.gameReady,
        disconnected: pageResult.page.disconnected
      },
      capabilities: {
        nativeCore: nativeResult.status === NATIVE_CORE_STATUS.READY,
        queue: queueResult.available === true,
        market: marketResult.market.available === true
      },
      queue: {
        actions: queueResult.actions.map((action) => ({
          id: action.id,
          text: action.text,
          current: action.current
        }))
      },
      market: {
        available: marketResult.market.available,
        scannedListings: marketResult.market.scannedListings,
        truncated: marketResult.market.truncated,
        bySide: {
          buy: marketResult.market.bySide.buy,
          sell: marketResult.market.bySide.sell,
          unknown: marketResult.market.bySide.unknown
        },
        claimableListings: marketResult.market.claimableListings
      },
      plugins: PLUGIN_IDS.slice(),
      warnings: orderedWarnings([
        ...pageResult.warnings,
        ...queueResult.warnings,
        ...marketResult.warnings,
        ...pageResult.nativeInvalid ? ["native_invalid"] : []
      ])
    };
    assertProjectionSize(projection);
    return projection;
  }

  // src/projection-controller.js
  var READ_ONLY_CONTROLLER = "READ_ONLY_CONTROLLER";
  var SAFE_CONTEXT_HEADER = "MWI_PAGEAGENT_SAFE_CONTEXT_V1";
  var SAFE_CONTEXT_FOOTER = "READ_ONLY; NO_GAME_ACTIONS";
  function readOnlyError() {
    const error2 = new Error(READ_ONLY_CONTROLLER);
    error2.code = READ_ONLY_CONTROLLER;
    return error2;
  }
  var ProjectionController = class {
    constructor(options = {}) {
      this.readProjection = typeof options === "function" ? options : options.readProjection || createProjection;
    }
    getBrowserState() {
      const projection = this.readProjection();
      const { serialized } = assertProjectionSize(projection);
      return {
        url: projection.page.url,
        title: projection.page.title,
        header: SAFE_CONTEXT_HEADER,
        content: serialized,
        footer: SAFE_CONTEXT_FOOTER
      };
    }
    showMask() {
    }
    hideMask() {
    }
    cleanUpHighlights() {
    }
    dispose() {
    }
    clickElement() {
      throw readOnlyError();
    }
    inputText() {
      throw readOnlyError();
    }
    selectOption() {
      throw readOnlyError();
    }
    scroll() {
      throw readOnlyError();
    }
    scrollHorizontally() {
      throw readOnlyError();
    }
    executeJavascript() {
      throw readOnlyError();
    }
  };

  // src/agent-factory.js
  var MODEL_EXECUTION_BLOCKED = "MODEL_EXECUTION_BLOCKED";
  var MODEL_EXECUTION_BUSY = "MODEL_EXECUTION_BUSY";
  var TEST_PROMPT_LIMIT = 2048;
  var TEST_HISTORY_LIMIT = 16;
  var TEST_HISTORY_ENTRY_LIMIT = 512;
  var TOOL_REMOVALS = Object.freeze({
    wait: null,
    ask_user: null,
    click_element_by_index: null,
    input_text: null,
    select_dropdown_option: null,
    scroll: null,
    scroll_horizontally: null,
    execute_javascript: null
  });
  function fixedError(code) {
    const error2 = new Error(code);
    error2.code = code;
    return error2;
  }
  function defaultReadProjection() {
    return createProjection();
  }
  function normalizeHistory(history) {
    if (history === void 0) return [];
    if (!Array.isArray(history) || history.length > TEST_HISTORY_LIMIT) throw fixedError(MODEL_EXECUTION_BLOCKED);
    const normalized = [];
    for (const entry of history) {
      if (typeof entry !== "string") throw fixedError(MODEL_EXECUTION_BLOCKED);
      const text = entry.trim();
      if (text.length > TEST_HISTORY_ENTRY_LIMIT) throw fixedError(MODEL_EXECUTION_BLOCKED);
      normalized.push(text);
    }
    return normalized;
  }
  function normalizePrompt(prompt) {
    if (typeof prompt !== "string") throw fixedError(MODEL_EXECUTION_BLOCKED);
    const normalized = prompt.trim();
    if (normalized.length === 0 || normalized.length > TEST_PROMPT_LIMIT) {
      throw fixedError(MODEL_EXECUTION_BLOCKED);
    }
    return normalized;
  }
  function safeProjectionJSON(readProjection) {
    const projection = readProjection();
    return {
      projection,
      serialized: assertProjectionSize(projection).serialized
    };
  }
  function isApprovedProjectionURL(value) {
    if (typeof value !== "string" || value === PAGE_URL_SENTINEL) return false;
    try {
      const url = new URL(value);
      return url.protocol === "https:" && APPROVED_MWI_ORIGINS.includes(url.origin) && url.pathname === APPROVED_GAME_PATH && url.search === "" && url.hash === "";
    } catch {
      return false;
    }
  }
  function assertExecutableProjection(projection) {
    const serialized = assertProjectionSize(projection).serialized;
    const page = projection?.page;
    const warnings = projection?.warnings;
    const hasApprovedPage = isApprovedProjectionURL(page?.url);
    const hasNativeFailure = Array.isArray(warnings) && NATIVE_CORE_FAILURE_WARNINGS.some((warning) => warnings.includes(warning));
    const hasSafePageShape = page !== null && typeof page === "object" && typeof page.title === "string" && typeof page.gameReady === "boolean" && typeof page.disconnected === "boolean";
    if (projection?.schemaVersion !== PROJECTION_SCHEMA_VERSION || !hasSafePageShape || !Array.isArray(warnings) || !hasApprovedPage || page.gameReady !== true || page.disconnected !== false || hasNativeFailure) {
      throw fixedError(MODEL_EXECUTION_BLOCKED);
    }
    return serialized;
  }
  function assertToolSet(agent) {
    const keys = Array.from(agent.tools.keys()).sort();
    if (keys.length !== 1 || keys[0] !== "done") throw fixedError("PAGEAGENT_TOOL_SET_INVALID");
  }
  function createPageAgent({
    readProjection = defaultReadProjection,
    projectionOptions,
    fetchImpl = globalThis.fetch
  } = {}) {
    const projectionReader = projectionOptions === void 0 ? readProjection : () => createProjection(projectionOptions);
    if (typeof projectionReader !== "function") throw fixedError(MODEL_EXECUTION_BLOCKED);
    const controller = new ProjectionController({ readProjection: projectionReader });
    const customFetch = createSecureCustomFetch({
      baseURL: MODEL_BASE_URL,
      fetchImpl
    });
    let pendingHistory = null;
    const safeTransformPageContent = () => {
      const { projection } = safeProjectionJSON(projectionReader);
      return assertExecutableProjection(projection);
    };
    const factoryConfig = {
      model: MODEL_NAME,
      baseURL: MODEL_BASE_URL,
      customFetch,
      maxSteps: 1,
      maxRetries: 0,
      pageController: controller,
      customTools: TOOL_REMOVALS,
      transformPageContent: safeTransformPageContent,
      onBeforeTask: (agent2) => {
        if (pendingHistory === null) return;
        for (const entry of pendingHistory) agent2.pushObservation(`SAFE_PRIOR_CONTEXT: ${entry}`);
      }
    };
    const agent = new PageAgentCore(factoryConfig);
    assertToolSet(agent);
    const readContext2 = () => safeProjectionJSON(projectionReader).projection;
    const executeForTest = async (prompt, history = []) => {
      if (pendingHistory !== null || agent.status === "running") throw fixedError(MODEL_EXECUTION_BUSY);
      const normalizedPrompt = normalizePrompt(prompt);
      const normalizedHistory = normalizeHistory(history);
      const { projection } = safeProjectionJSON(projectionReader);
      assertExecutableProjection(projection);
      pendingHistory = normalizedHistory;
      try {
        return await agent.execute(normalizedPrompt);
      } finally {
        pendingHistory = null;
      }
    };
    return Object.freeze({
      agent,
      controller,
      config: factoryConfig,
      readContext: readContext2,
      executeForTest,
      model: MODEL_NAME,
      baseURL: MODEL_BASE_URL,
      finalURL: FINAL_REQUEST_URL,
      ProjectionOversizeError
    });
  }

  // src/userscript.js
  var pageWindow = globalThis.window;
  if (pageWindow === null || typeof pageWindow !== "object" && typeof pageWindow !== "function") {
    throw new Error("MWI_PAGEAGENT_WINDOW_REQUIRED");
  }
  if ("MWI_PAGEAGENT" in pageWindow) {
    throw new Error("MWI_PAGEAGENT_ALREADY_PRESENT");
  }
  var privateFactory = createPageAgent();
  var readContext = () => privateFactory.readContext();
  var facade = Object.freeze({ readContext });
  Object.defineProperty(pageWindow, "MWI_PAGEAGENT", {
    value: facade,
    enumerable: true,
    writable: false,
    configurable: false
  });
})();
