import {
  $r,
  A,
  AdditiveBlending,
  AmbientLight,
  AnimationClip,
  AnimationMixer,
  ArrowHelper,
  Audio,
  AudioListener,
  AudioLoader,
  BackSide,
  Bone,
  Box2,
  Box3,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Camera,
  CatmullRomCurve3,
  ClampToEdgeWrapping,
  Color,
  CompressedTexture,
  CubeReflectionMapping,
  CubeTextureLoader,
  Curve,
  CylinderGeometry,
  DataTexture,
  DataTextureLoader,
  DataUtils,
  DefaultLoadingManager,
  DepthFormat,
  DepthTexture,
  DirectionalLight,
  DirectionalLightHelper,
  DoubleSide,
  EquirectangularReflectionMapping,
  Euler,
  EventDispatcher,
  ExtrudeGeometry,
  FileLoader,
  Float32BufferAttribute,
  FloatType,
  FramebufferTexture,
  FrontSide,
  Ft,
  Group,
  HalfFloatType,
  HemisphereLightHelper,
  IcosahedronGeometry,
  ImageBitmapLoader,
  InstancedBufferGeometry,
  InstancedInterleavedBuffer,
  InstancedMesh,
  InterleavedBuffer,
  InterleavedBufferAttribute,
  Interpolant,
  InterpolateDiscrete,
  InterpolateLinear,
  Ir,
  Line,
  Line3,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  LinearFilter,
  LinearMipmapLinearFilter,
  LinearMipmapNearestFilter,
  Loader,
  LoaderUtils,
  MOUSE,
  Material,
  MathUtils,
  Matrix3,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MirroredRepeatWrapping,
  NearestFilter,
  NearestMipmapLinearFilter,
  NearestMipmapNearestFilter,
  NoBlending,
  Nr,
  NumberKeyframeTrack,
  Object3D,
  OctahedronGeometry,
  OrthographicCamera,
  Path,
  PerspectiveCamera,
  Plane,
  PlaneGeometry,
  PointLight,
  PointLightHelper,
  Points,
  PointsMaterial,
  PropertyBinding,
  QuadraticBezierCurve3,
  Quaternion,
  QuaternionKeyframeTrack,
  REVISION,
  RGBAFormat,
  RawShaderMaterial,
  Ray,
  Raycaster,
  RepeatWrapping,
  Scene,
  ShaderLib,
  ShaderMaterial,
  Shape,
  ShapeGeometry,
  ShapePath,
  ShapeUtils,
  Skeleton,
  SkinnedMesh,
  Sphere,
  SphereGeometry,
  Spherical,
  SpotLight,
  SpotLightHelper,
  TOUCH,
  Texture,
  TextureLoader,
  TorusGeometry,
  Triangle,
  TriangleFanDrawMode,
  TriangleStripDrawMode,
  TrianglesDrawMode,
  UVMapping,
  Uint16BufferAttribute,
  Uniform,
  UniformsLib,
  UniformsUtils,
  UnsignedByteType,
  UnsignedShortType,
  Vector2,
  Vector3,
  Vector4,
  VectorKeyframeTrack,
  VideoTexture,
  WebGLRenderTarget,
  WebGLRenderer,
  WireframeGeometry,
  dr,
  re
} from "./chunk-WIHGGV47.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  isReactive,
  isRef,
  mergeProps,
  nextTick,
  normalizeProps,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  shallowReactive,
  shallowRef,
  toRefs,
  toValue,
  triggerRef,
  unref,
  useAttrs,
  useSlots,
  watch,
  watchEffect,
  withAsyncContext
} from "./chunk-KA37DFDH.js";

// node_modules/tweakpane/dist/tweakpane.js
function forceCast(v) {
  return v;
}
function isEmpty(value) {
  return value === null || value === void 0;
}
function isObject$1(value) {
  return value !== null && typeof value === "object";
}
function isRecord(value) {
  return value !== null && typeof value === "object";
}
function deepEqualsArray(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}
function deepMerge(r1, r2) {
  const keys = Array.from(/* @__PURE__ */ new Set([...Object.keys(r1), ...Object.keys(r2)]));
  return keys.reduce((result, key) => {
    const v1 = r1[key];
    const v2 = r2[key];
    return isRecord(v1) && isRecord(v2) ? Object.assign(Object.assign({}, result), { [key]: deepMerge(v1, v2) }) : Object.assign(Object.assign({}, result), { [key]: key in r2 ? v2 : v1 });
  }, {});
}
function isBinding(value) {
  if (!isObject$1(value)) {
    return false;
  }
  return "target" in value;
}
var CREATE_MESSAGE_MAP = {
  alreadydisposed: () => "View has been already disposed",
  invalidparams: (context) => `Invalid parameters for '${context.name}'`,
  nomatchingcontroller: (context) => `No matching controller for '${context.key}'`,
  nomatchingview: (context) => `No matching view for '${JSON.stringify(context.params)}'`,
  notbindable: () => `Value is not bindable`,
  notcompatible: (context) => `Not compatible with  plugin '${context.id}'`,
  propertynotfound: (context) => `Property '${context.name}' not found`,
  shouldneverhappen: () => "This error should never happen"
};
var TpError = class _TpError {
  static alreadyDisposed() {
    return new _TpError({ type: "alreadydisposed" });
  }
  static notBindable() {
    return new _TpError({
      type: "notbindable"
    });
  }
  static notCompatible(bundleId, id2) {
    return new _TpError({
      type: "notcompatible",
      context: {
        id: `${bundleId}.${id2}`
      }
    });
  }
  static propertyNotFound(name) {
    return new _TpError({
      type: "propertynotfound",
      context: {
        name
      }
    });
  }
  static shouldNeverHappen() {
    return new _TpError({ type: "shouldneverhappen" });
  }
  constructor(config) {
    var _a2;
    this.message = (_a2 = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a2 !== void 0 ? _a2 : "Unexpected error";
    this.name = this.constructor.name;
    this.stack = new Error(this.message).stack;
    this.type = config.type;
  }
  toString() {
    return this.message;
  }
};
var BindingTarget = class _BindingTarget {
  constructor(obj, key) {
    this.obj_ = obj;
    this.key = key;
  }
  static isBindable(obj) {
    if (obj === null) {
      return false;
    }
    if (typeof obj !== "object" && typeof obj !== "function") {
      return false;
    }
    return true;
  }
  read() {
    return this.obj_[this.key];
  }
  write(value) {
    this.obj_[this.key] = value;
  }
  writeProperty(name, value) {
    const valueObj = this.read();
    if (!_BindingTarget.isBindable(valueObj)) {
      throw TpError.notBindable();
    }
    if (!(name in valueObj)) {
      throw TpError.propertyNotFound(name);
    }
    valueObj[name] = value;
  }
};
var Emitter = class {
  constructor() {
    this.observers_ = {};
  }
  on(eventName, handler, opt_options) {
    var _a2;
    let observers = this.observers_[eventName];
    if (!observers) {
      observers = this.observers_[eventName] = [];
    }
    observers.push({
      handler,
      key: (_a2 = opt_options === null || opt_options === void 0 ? void 0 : opt_options.key) !== null && _a2 !== void 0 ? _a2 : handler
    });
    return this;
  }
  off(eventName, key) {
    const observers = this.observers_[eventName];
    if (observers) {
      this.observers_[eventName] = observers.filter((observer) => {
        return observer.key !== key;
      });
    }
    return this;
  }
  emit(eventName, event) {
    const observers = this.observers_[eventName];
    if (!observers) {
      return;
    }
    observers.forEach((observer) => {
      observer.handler(event);
    });
  }
};
var ComplexValue = class {
  constructor(initialValue, config) {
    var _a2;
    this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
    this.equals_ = (_a2 = config === null || config === void 0 ? void 0 : config.equals) !== null && _a2 !== void 0 ? _a2 : (v1, v2) => v1 === v2;
    this.emitter = new Emitter();
    this.rawValue_ = initialValue;
  }
  get constraint() {
    return this.constraint_;
  }
  get rawValue() {
    return this.rawValue_;
  }
  set rawValue(rawValue) {
    this.setRawValue(rawValue, {
      forceEmit: false,
      last: true
    });
  }
  setRawValue(rawValue, options) {
    const opts = options !== null && options !== void 0 ? options : {
      forceEmit: false,
      last: true
    };
    const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
    const prevValue = this.rawValue_;
    const changed = !this.equals_(prevValue, constrainedValue);
    if (!changed && !opts.forceEmit) {
      return;
    }
    this.emitter.emit("beforechange", {
      sender: this
    });
    this.rawValue_ = constrainedValue;
    this.emitter.emit("change", {
      options: opts,
      previousRawValue: prevValue,
      rawValue: constrainedValue,
      sender: this
    });
  }
};
var PrimitiveValue = class {
  constructor(initialValue) {
    this.emitter = new Emitter();
    this.value_ = initialValue;
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(value) {
    this.setRawValue(value, {
      forceEmit: false,
      last: true
    });
  }
  setRawValue(value, options) {
    const opts = options !== null && options !== void 0 ? options : {
      forceEmit: false,
      last: true
    };
    const prevValue = this.value_;
    if (prevValue === value && !opts.forceEmit) {
      return;
    }
    this.emitter.emit("beforechange", {
      sender: this
    });
    this.value_ = value;
    this.emitter.emit("change", {
      options: opts,
      previousRawValue: prevValue,
      rawValue: this.value_,
      sender: this
    });
  }
};
var ReadonlyPrimitiveValue = class {
  constructor(value) {
    this.emitter = new Emitter();
    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.value_ = value;
    this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
    this.value_.emitter.on("change", this.onValueChange_);
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  onValueBeforeChange_(ev) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), { sender: this }));
  }
  onValueChange_(ev) {
    this.emitter.emit("change", Object.assign(Object.assign({}, ev), { sender: this }));
  }
};
function createValue(initialValue, config) {
  const constraint = config === null || config === void 0 ? void 0 : config.constraint;
  const equals = config === null || config === void 0 ? void 0 : config.equals;
  if (!constraint && !equals) {
    return new PrimitiveValue(initialValue);
  }
  return new ComplexValue(initialValue, config);
}
function createReadonlyValue(value) {
  return [
    new ReadonlyPrimitiveValue(value),
    (rawValue, options) => {
      value.setRawValue(rawValue, options);
    }
  ];
}
var ValueMap = class _ValueMap {
  constructor(valueMap) {
    this.emitter = new Emitter();
    this.valMap_ = valueMap;
    for (const key in this.valMap_) {
      const v = this.valMap_[key];
      v.emitter.on("change", () => {
        this.emitter.emit("change", {
          key,
          sender: this
        });
      });
    }
  }
  static createCore(initialValue) {
    const keys = Object.keys(initialValue);
    return keys.reduce((o, key) => {
      return Object.assign(o, {
        [key]: createValue(initialValue[key])
      });
    }, {});
  }
  static fromObject(initialValue) {
    const core = this.createCore(initialValue);
    return new _ValueMap(core);
  }
  get(key) {
    return this.valMap_[key].rawValue;
  }
  set(key, value) {
    this.valMap_[key].rawValue = value;
  }
  value(key) {
    return this.valMap_[key];
  }
};
var DefiniteRangeConstraint = class {
  constructor(config) {
    this.values = ValueMap.fromObject({
      max: config.max,
      min: config.min
    });
  }
  constrain(value) {
    const max = this.values.get("max");
    const min = this.values.get("min");
    return Math.min(Math.max(value, min), max);
  }
};
var RangeConstraint = class {
  constructor(config) {
    this.values = ValueMap.fromObject({
      max: config.max,
      min: config.min
    });
  }
  constrain(value) {
    const max = this.values.get("max");
    const min = this.values.get("min");
    let result = value;
    if (!isEmpty(min)) {
      result = Math.max(result, min);
    }
    if (!isEmpty(max)) {
      result = Math.min(result, max);
    }
    return result;
  }
};
var StepConstraint = class {
  constructor(step, origin = 0) {
    this.step = step;
    this.origin = origin;
  }
  constrain(value) {
    const o = this.origin % this.step;
    const r = Math.round((value - o) / this.step);
    return o + r * this.step;
  }
};
var NumberLiteralNode = class {
  constructor(text) {
    this.text = text;
  }
  evaluate() {
    return Number(this.text);
  }
  toString() {
    return this.text;
  }
};
var BINARY_OPERATION_MAP = {
  "**": (v1, v2) => Math.pow(v1, v2),
  "*": (v1, v2) => v1 * v2,
  "/": (v1, v2) => v1 / v2,
  "%": (v1, v2) => v1 % v2,
  "+": (v1, v2) => v1 + v2,
  "-": (v1, v2) => v1 - v2,
  "<<": (v1, v2) => v1 << v2,
  ">>": (v1, v2) => v1 >> v2,
  ">>>": (v1, v2) => v1 >>> v2,
  "&": (v1, v2) => v1 & v2,
  "^": (v1, v2) => v1 ^ v2,
  "|": (v1, v2) => v1 | v2
};
var BinaryOperationNode = class {
  constructor(operator, left, right) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
  evaluate() {
    const op2 = BINARY_OPERATION_MAP[this.operator];
    if (!op2) {
      throw new Error(`unexpected binary operator: '${this.operator}`);
    }
    return op2(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return [
      "b(",
      this.left.toString(),
      this.operator,
      this.right.toString(),
      ")"
    ].join(" ");
  }
};
var UNARY_OPERATION_MAP = {
  "+": (v) => v,
  "-": (v) => -v,
  "~": (v) => ~v
};
var UnaryOperationNode = class {
  constructor(operator, expr) {
    this.operator = operator;
    this.expression = expr;
  }
  evaluate() {
    const op2 = UNARY_OPERATION_MAP[this.operator];
    if (!op2) {
      throw new Error(`unexpected unary operator: '${this.operator}`);
    }
    return op2(this.expression.evaluate());
  }
  toString() {
    return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
  }
};
function combineReader(parsers) {
  return (text, cursor) => {
    for (let i = 0; i < parsers.length; i++) {
      const result = parsers[i](text, cursor);
      if (result !== "") {
        return result;
      }
    }
    return "";
  };
}
function readWhitespace(text, cursor) {
  var _a2;
  const m = text.substr(cursor).match(/^\s+/);
  return (_a2 = m && m[0]) !== null && _a2 !== void 0 ? _a2 : "";
}
function readNonZeroDigit(text, cursor) {
  const ch2 = text.substr(cursor, 1);
  return ch2.match(/^[1-9]$/) ? ch2 : "";
}
function readDecimalDigits(text, cursor) {
  var _a2;
  const m = text.substr(cursor).match(/^[0-9]+/);
  return (_a2 = m && m[0]) !== null && _a2 !== void 0 ? _a2 : "";
}
function readSignedInteger(text, cursor) {
  const ds = readDecimalDigits(text, cursor);
  if (ds !== "") {
    return ds;
  }
  const sign = text.substr(cursor, 1);
  cursor += 1;
  if (sign !== "-" && sign !== "+") {
    return "";
  }
  const sds = readDecimalDigits(text, cursor);
  if (sds === "") {
    return "";
  }
  return sign + sds;
}
function readExponentPart(text, cursor) {
  const e = text.substr(cursor, 1);
  cursor += 1;
  if (e.toLowerCase() !== "e") {
    return "";
  }
  const si = readSignedInteger(text, cursor);
  if (si === "") {
    return "";
  }
  return e + si;
}
function readDecimalIntegerLiteral(text, cursor) {
  const ch2 = text.substr(cursor, 1);
  if (ch2 === "0") {
    return ch2;
  }
  const nzd = readNonZeroDigit(text, cursor);
  cursor += nzd.length;
  if (nzd === "") {
    return "";
  }
  return nzd + readDecimalDigits(text, cursor);
}
function readDecimalLiteral1(text, cursor) {
  const dil = readDecimalIntegerLiteral(text, cursor);
  cursor += dil.length;
  if (dil === "") {
    return "";
  }
  const dot = text.substr(cursor, 1);
  cursor += dot.length;
  if (dot !== ".") {
    return "";
  }
  const dds = readDecimalDigits(text, cursor);
  cursor += dds.length;
  return dil + dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral2(text, cursor) {
  const dot = text.substr(cursor, 1);
  cursor += dot.length;
  if (dot !== ".") {
    return "";
  }
  const dds = readDecimalDigits(text, cursor);
  cursor += dds.length;
  if (dds === "") {
    return "";
  }
  return dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral3(text, cursor) {
  const dil = readDecimalIntegerLiteral(text, cursor);
  cursor += dil.length;
  if (dil === "") {
    return "";
  }
  return dil + readExponentPart(text, cursor);
}
var readDecimalLiteral = combineReader([
  readDecimalLiteral1,
  readDecimalLiteral2,
  readDecimalLiteral3
]);
function parseBinaryDigits(text, cursor) {
  var _a2;
  const m = text.substr(cursor).match(/^[01]+/);
  return (_a2 = m && m[0]) !== null && _a2 !== void 0 ? _a2 : "";
}
function readBinaryIntegerLiteral(text, cursor) {
  const prefix = text.substr(cursor, 2);
  cursor += prefix.length;
  if (prefix.toLowerCase() !== "0b") {
    return "";
  }
  const bds = parseBinaryDigits(text, cursor);
  if (bds === "") {
    return "";
  }
  return prefix + bds;
}
function readOctalDigits(text, cursor) {
  var _a2;
  const m = text.substr(cursor).match(/^[0-7]+/);
  return (_a2 = m && m[0]) !== null && _a2 !== void 0 ? _a2 : "";
}
function readOctalIntegerLiteral(text, cursor) {
  const prefix = text.substr(cursor, 2);
  cursor += prefix.length;
  if (prefix.toLowerCase() !== "0o") {
    return "";
  }
  const ods = readOctalDigits(text, cursor);
  if (ods === "") {
    return "";
  }
  return prefix + ods;
}
function readHexDigits(text, cursor) {
  var _a2;
  const m = text.substr(cursor).match(/^[0-9a-f]+/i);
  return (_a2 = m && m[0]) !== null && _a2 !== void 0 ? _a2 : "";
}
function readHexIntegerLiteral(text, cursor) {
  const prefix = text.substr(cursor, 2);
  cursor += prefix.length;
  if (prefix.toLowerCase() !== "0x") {
    return "";
  }
  const hds = readHexDigits(text, cursor);
  if (hds === "") {
    return "";
  }
  return prefix + hds;
}
var readNonDecimalIntegerLiteral = combineReader([
  readBinaryIntegerLiteral,
  readOctalIntegerLiteral,
  readHexIntegerLiteral
]);
var readNumericLiteral = combineReader([
  readNonDecimalIntegerLiteral,
  readDecimalLiteral
]);
function parseLiteral(text, cursor) {
  const num = readNumericLiteral(text, cursor);
  cursor += num.length;
  if (num === "") {
    return null;
  }
  return {
    evaluable: new NumberLiteralNode(num),
    cursor
  };
}
function parseParenthesizedExpression(text, cursor) {
  const op2 = text.substr(cursor, 1);
  cursor += op2.length;
  if (op2 !== "(") {
    return null;
  }
  const expr = parseExpression(text, cursor);
  if (!expr) {
    return null;
  }
  cursor = expr.cursor;
  cursor += readWhitespace(text, cursor).length;
  const cl = text.substr(cursor, 1);
  cursor += cl.length;
  if (cl !== ")") {
    return null;
  }
  return {
    evaluable: expr.evaluable,
    cursor
  };
}
function parsePrimaryExpression(text, cursor) {
  var _a2;
  return (_a2 = parseLiteral(text, cursor)) !== null && _a2 !== void 0 ? _a2 : parseParenthesizedExpression(text, cursor);
}
function parseUnaryExpression(text, cursor) {
  const expr = parsePrimaryExpression(text, cursor);
  if (expr) {
    return expr;
  }
  const op2 = text.substr(cursor, 1);
  cursor += op2.length;
  if (op2 !== "+" && op2 !== "-" && op2 !== "~") {
    return null;
  }
  const num = parseUnaryExpression(text, cursor);
  if (!num) {
    return null;
  }
  cursor = num.cursor;
  return {
    cursor,
    evaluable: new UnaryOperationNode(op2, num.evaluable)
  };
}
function readBinaryOperator(ops, text, cursor) {
  cursor += readWhitespace(text, cursor).length;
  const op2 = ops.filter((op3) => text.startsWith(op3, cursor))[0];
  if (!op2) {
    return null;
  }
  cursor += op2.length;
  cursor += readWhitespace(text, cursor).length;
  return {
    cursor,
    operator: op2
  };
}
function createBinaryOperationExpressionParser(exprParser, ops) {
  return (text, cursor) => {
    const firstExpr = exprParser(text, cursor);
    if (!firstExpr) {
      return null;
    }
    cursor = firstExpr.cursor;
    let expr = firstExpr.evaluable;
    for (; ; ) {
      const op2 = readBinaryOperator(ops, text, cursor);
      if (!op2) {
        break;
      }
      cursor = op2.cursor;
      const nextExpr = exprParser(text, cursor);
      if (!nextExpr) {
        return null;
      }
      cursor = nextExpr.cursor;
      expr = new BinaryOperationNode(op2.operator, expr, nextExpr.evaluable);
    }
    return expr ? {
      cursor,
      evaluable: expr
    } : null;
  };
}
var parseBinaryOperationExpression = [
  ["**"],
  ["*", "/", "%"],
  ["+", "-"],
  ["<<", ">>>", ">>"],
  ["&"],
  ["^"],
  ["|"]
].reduce((parser, ops) => {
  return createBinaryOperationExpressionParser(parser, ops);
}, parseUnaryExpression);
function parseExpression(text, cursor) {
  cursor += readWhitespace(text, cursor).length;
  return parseBinaryOperationExpression(text, cursor);
}
function parseEcmaNumberExpression(text) {
  const expr = parseExpression(text, 0);
  if (!expr) {
    return null;
  }
  const cursor = expr.cursor + readWhitespace(text, expr.cursor).length;
  if (cursor !== text.length) {
    return null;
  }
  return expr.evaluable;
}
function parseNumber(text) {
  var _a2;
  const r = parseEcmaNumberExpression(text);
  return (_a2 = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a2 !== void 0 ? _a2 : null;
}
function numberFromUnknown(value) {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    const pv = parseNumber(value);
    if (!isEmpty(pv)) {
      return pv;
    }
  }
  return 0;
}
function numberToString(value) {
  return String(value);
}
function createNumberFormatter(digits) {
  return (value) => {
    return value.toFixed(Math.max(Math.min(digits, 20), 0));
  };
}
function mapRange(value, start1, end1, start2, end2) {
  const p = (value - start1) / (end1 - start1);
  return start2 + p * (end2 - start2);
}
function getDecimalDigits(value) {
  const text = String(value.toFixed(10));
  const frac = text.split(".")[1];
  return frac.replace(/0+$/, "").length;
}
function constrainRange(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function loopRange(value, max) {
  return (value % max + max) % max;
}
function getSuitableDecimalDigits(params, rawValue) {
  return !isEmpty(params.step) ? getDecimalDigits(params.step) : Math.max(getDecimalDigits(rawValue), 2);
}
function getSuitableKeyScale(params) {
  var _a2;
  return (_a2 = params.step) !== null && _a2 !== void 0 ? _a2 : 1;
}
function getSuitablePointerScale(params, rawValue) {
  var _a2;
  const base = Math.abs((_a2 = params.step) !== null && _a2 !== void 0 ? _a2 : rawValue);
  return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
}
function createStepConstraint(params, initialValue) {
  if (!isEmpty(params.step)) {
    return new StepConstraint(params.step, initialValue);
  }
  return null;
}
function createRangeConstraint(params) {
  if (!isEmpty(params.max) && !isEmpty(params.min)) {
    return new DefiniteRangeConstraint({
      max: params.max,
      min: params.min
    });
  }
  if (!isEmpty(params.max) || !isEmpty(params.min)) {
    return new RangeConstraint({
      max: params.max,
      min: params.min
    });
  }
  return null;
}
function createNumberTextPropsObject(params, initialValue) {
  var _a2, _b, _c2;
  return {
    formatter: (_a2 = params.format) !== null && _a2 !== void 0 ? _a2 : createNumberFormatter(getSuitableDecimalDigits(params, initialValue)),
    keyScale: (_b = params.keyScale) !== null && _b !== void 0 ? _b : getSuitableKeyScale(params),
    pointerScale: (_c2 = params.pointerScale) !== null && _c2 !== void 0 ? _c2 : getSuitablePointerScale(params, initialValue)
  };
}
function createNumberTextInputParamsParser(p) {
  return {
    format: p.optional.function,
    keyScale: p.optional.number,
    max: p.optional.number,
    min: p.optional.number,
    pointerScale: p.optional.number,
    step: p.optional.number
  };
}
function createPointAxis(config) {
  return {
    constraint: config.constraint,
    textProps: ValueMap.fromObject(createNumberTextPropsObject(config.params, config.initialValue))
  };
}
var BladeApi = class {
  constructor(controller) {
    this.controller = controller;
  }
  get element() {
    return this.controller.view.element;
  }
  get disabled() {
    return this.controller.viewProps.get("disabled");
  }
  set disabled(disabled) {
    this.controller.viewProps.set("disabled", disabled);
  }
  get hidden() {
    return this.controller.viewProps.get("hidden");
  }
  set hidden(hidden) {
    this.controller.viewProps.set("hidden", hidden);
  }
  dispose() {
    this.controller.viewProps.set("disposed", true);
  }
  importState(state) {
    return this.controller.importState(state);
  }
  exportState() {
    return this.controller.exportState();
  }
};
var TpEvent = class {
  constructor(target) {
    this.target = target;
  }
};
var TpChangeEvent = class extends TpEvent {
  constructor(target, value, last) {
    super(target);
    this.value = value;
    this.last = last !== null && last !== void 0 ? last : true;
  }
};
var TpFoldEvent = class extends TpEvent {
  constructor(target, expanded) {
    super(target);
    this.expanded = expanded;
  }
};
var TpTabSelectEvent = class extends TpEvent {
  constructor(target, index) {
    super(target);
    this.index = index;
  }
};
var TpMouseEvent = class extends TpEvent {
  constructor(target, nativeEvent) {
    super(target);
    this.native = nativeEvent;
  }
};
var BindingApi = class extends BladeApi {
  constructor(controller) {
    super(controller);
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.emitter_ = new Emitter();
    this.controller.value.emitter.on("change", this.onValueChange_);
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(label) {
    this.controller.labelController.props.set("label", label);
  }
  get key() {
    return this.controller.value.binding.target.key;
  }
  get tag() {
    return this.controller.tag;
  }
  set tag(tag) {
    this.controller.tag = tag;
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
  refresh() {
    this.controller.value.fetch();
  }
  onValueChange_(ev) {
    const value = this.controller.value;
    this.emitter_.emit("change", new TpChangeEvent(this, forceCast(value.binding.target.read()), ev.options.last));
  }
};
var InputBindingValue = class {
  constructor(value, binding) {
    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.binding = binding;
    this.value_ = value;
    this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
    this.value_.emitter.on("change", this.onValueChange_);
    this.emitter = new Emitter();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(rawValue) {
    this.value_.rawValue = rawValue;
  }
  setRawValue(rawValue, options) {
    this.value_.setRawValue(rawValue, options);
  }
  fetch() {
    this.value_.rawValue = this.binding.read();
  }
  push() {
    this.binding.write(this.value_.rawValue);
  }
  onValueBeforeChange_(ev) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), { sender: this }));
  }
  onValueChange_(ev) {
    this.push();
    this.emitter.emit("change", Object.assign(Object.assign({}, ev), { sender: this }));
  }
};
function isInputBindingValue(v) {
  if (!("binding" in v)) {
    return false;
  }
  const b = v["binding"];
  return isBinding(b) && "read" in b && "write" in b;
}
function parseObject(value, keyToParserMap) {
  const keys = Object.keys(keyToParserMap);
  const result = keys.reduce((tmp, key) => {
    if (tmp === void 0) {
      return void 0;
    }
    const parser = keyToParserMap[key];
    const result2 = parser(value[key]);
    return result2.succeeded ? Object.assign(Object.assign({}, tmp), { [key]: result2.value }) : void 0;
  }, {});
  return forceCast(result);
}
function parseArray(value, parseItem) {
  return value.reduce((tmp, item) => {
    if (tmp === void 0) {
      return void 0;
    }
    const result = parseItem(item);
    if (!result.succeeded || result.value === void 0) {
      return void 0;
    }
    return [...tmp, result.value];
  }, []);
}
function isObject(value) {
  if (value === null) {
    return false;
  }
  return typeof value === "object";
}
function createMicroParserBuilder(parse) {
  return (optional) => (v) => {
    if (!optional && v === void 0) {
      return {
        succeeded: false,
        value: void 0
      };
    }
    if (optional && v === void 0) {
      return {
        succeeded: true,
        value: void 0
      };
    }
    const result = parse(v);
    return result !== void 0 ? {
      succeeded: true,
      value: result
    } : {
      succeeded: false,
      value: void 0
    };
  };
}
function createMicroParserBuilders(optional) {
  return {
    custom: (parse) => createMicroParserBuilder(parse)(optional),
    boolean: createMicroParserBuilder((v) => typeof v === "boolean" ? v : void 0)(optional),
    number: createMicroParserBuilder((v) => typeof v === "number" ? v : void 0)(optional),
    string: createMicroParserBuilder((v) => typeof v === "string" ? v : void 0)(optional),
    function: createMicroParserBuilder((v) => typeof v === "function" ? v : void 0)(optional),
    constant: (value) => createMicroParserBuilder((v) => v === value ? value : void 0)(optional),
    raw: createMicroParserBuilder((v) => v)(optional),
    object: (keyToParserMap) => createMicroParserBuilder((v) => {
      if (!isObject(v)) {
        return void 0;
      }
      return parseObject(v, keyToParserMap);
    })(optional),
    array: (itemParser) => createMicroParserBuilder((v) => {
      if (!Array.isArray(v)) {
        return void 0;
      }
      return parseArray(v, itemParser);
    })(optional)
  };
}
var MicroParsers = {
  optional: createMicroParserBuilders(true),
  required: createMicroParserBuilders(false)
};
function parseRecord(value, keyToParserMap) {
  const map = keyToParserMap(MicroParsers);
  const result = MicroParsers.required.object(map)(value);
  return result.succeeded ? result.value : void 0;
}
function importBladeState(state, superImport, parser, callback) {
  if (superImport && !superImport(state)) {
    return false;
  }
  const result = parseRecord(state, parser);
  return result ? callback(result) : false;
}
function exportBladeState(superExport, thisState) {
  var _a2;
  return deepMerge((_a2 = superExport === null || superExport === void 0 ? void 0 : superExport()) !== null && _a2 !== void 0 ? _a2 : {}, thisState);
}
function isValueBladeController(bc2) {
  return "value" in bc2;
}
function isBindingValue(v) {
  if (!isObject$1(v) || !("binding" in v)) {
    return false;
  }
  const b = v.binding;
  return isBinding(b);
}
var SVG_NS = "http://www.w3.org/2000/svg";
function forceReflow(element) {
  element.offsetHeight;
}
function disableTransitionTemporarily(element, callback) {
  const t = element.style.transition;
  element.style.transition = "none";
  callback();
  element.style.transition = t;
}
function supportsTouch(doc) {
  return doc.ontouchstart !== void 0;
}
function getGlobalObject() {
  return globalThis;
}
function getWindowDocument() {
  const globalObj = forceCast(getGlobalObject());
  return globalObj.document;
}
function getCanvasContext(canvasElement) {
  const win = canvasElement.ownerDocument.defaultView;
  if (!win) {
    return null;
  }
  const isBrowser = "document" in win;
  return isBrowser ? canvasElement.getContext("2d", {
    willReadFrequently: true
  }) : null;
}
var ICON_ID_TO_INNER_HTML_MAP = {
  check: '<path d="M2 8l4 4l8 -8"/>',
  dropdown: '<path d="M5 7h6l-3 3 z"/>',
  p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
};
function createSvgIconElement(document2, iconId) {
  const elem = document2.createElementNS(SVG_NS, "svg");
  elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
  return elem;
}
function insertElementAt(parentElement, element, index) {
  parentElement.insertBefore(element, parentElement.children[index]);
}
function removeElement(element) {
  if (element.parentElement) {
    element.parentElement.removeChild(element);
  }
}
function removeChildElements(element) {
  while (element.children.length > 0) {
    element.removeChild(element.children[0]);
  }
}
function removeChildNodes(element) {
  while (element.childNodes.length > 0) {
    element.removeChild(element.childNodes[0]);
  }
}
function findNextTarget(ev) {
  if (ev.relatedTarget) {
    return forceCast(ev.relatedTarget);
  }
  if ("explicitOriginalTarget" in ev) {
    return ev.explicitOriginalTarget;
  }
  return null;
}
function bindValue(value, applyValue) {
  value.emitter.on("change", (ev) => {
    applyValue(ev.rawValue);
  });
  applyValue(value.rawValue);
}
function bindValueMap(valueMap, key, applyValue) {
  bindValue(valueMap.value(key), applyValue);
}
var PREFIX = "tp";
function ClassName(viewName) {
  const fn = (opt_elementName, opt_modifier) => {
    return [
      PREFIX,
      "-",
      viewName,
      "v",
      opt_elementName ? `_${opt_elementName}` : "",
      opt_modifier ? `-${opt_modifier}` : ""
    ].join("");
  };
  return fn;
}
var cn$r = ClassName("lbl");
function createLabelNode(doc, label) {
  const frag = doc.createDocumentFragment();
  const lineNodes = label.split("\n").map((line) => {
    return doc.createTextNode(line);
  });
  lineNodes.forEach((lineNode, index) => {
    if (index > 0) {
      frag.appendChild(doc.createElement("br"));
    }
    frag.appendChild(lineNode);
  });
  return frag;
}
var LabelView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$r());
    config.viewProps.bindClassModifiers(this.element);
    const labelElem = doc.createElement("div");
    labelElem.classList.add(cn$r("l"));
    bindValueMap(config.props, "label", (value) => {
      if (isEmpty(value)) {
        this.element.classList.add(cn$r(void 0, "nol"));
      } else {
        this.element.classList.remove(cn$r(void 0, "nol"));
        removeChildNodes(labelElem);
        labelElem.appendChild(createLabelNode(doc, value));
      }
    });
    this.element.appendChild(labelElem);
    this.labelElement = labelElem;
    const valueElem = doc.createElement("div");
    valueElem.classList.add(cn$r("v"));
    this.element.appendChild(valueElem);
    this.valueElement = valueElem;
  }
};
var LabelController = class {
  constructor(doc, config) {
    this.props = config.props;
    this.valueController = config.valueController;
    this.viewProps = config.valueController.viewProps;
    this.view = new LabelView(doc, {
      props: config.props,
      viewProps: this.viewProps
    });
    this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(state) {
    return importBladeState(state, null, (p) => ({
      label: p.optional.string
    }), (result) => {
      this.props.set("label", result.label);
      return true;
    });
  }
  exportProps() {
    return exportBladeState(null, {
      label: this.props.get("label")
    });
  }
};
function getAllBladePositions() {
  return ["veryfirst", "first", "last", "verylast"];
}
var cn$q = ClassName("");
var POS_TO_CLASS_NAME_MAP = {
  veryfirst: "vfst",
  first: "fst",
  last: "lst",
  verylast: "vlst"
};
var BladeController = class {
  constructor(config) {
    this.parent_ = null;
    this.blade = config.blade;
    this.view = config.view;
    this.viewProps = config.viewProps;
    const elem = this.view.element;
    this.blade.value("positions").emitter.on("change", () => {
      getAllBladePositions().forEach((pos) => {
        elem.classList.remove(cn$q(void 0, POS_TO_CLASS_NAME_MAP[pos]));
      });
      this.blade.get("positions").forEach((pos) => {
        elem.classList.add(cn$q(void 0, POS_TO_CLASS_NAME_MAP[pos]));
      });
    });
    this.viewProps.handleDispose(() => {
      removeElement(elem);
    });
  }
  get parent() {
    return this.parent_;
  }
  set parent(parent) {
    this.parent_ = parent;
    this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
  }
  importState(state) {
    return importBladeState(state, null, (p) => ({
      disabled: p.required.boolean,
      hidden: p.required.boolean
    }), (result) => {
      this.viewProps.importState(result);
      return true;
    });
  }
  exportState() {
    return exportBladeState(null, Object.assign({}, this.viewProps.exportState()));
  }
};
var LabeledValueBladeController = class extends BladeController {
  constructor(doc, config) {
    if (config.value !== config.valueController.value) {
      throw TpError.shouldNeverHappen();
    }
    const viewProps = config.valueController.viewProps;
    const lc2 = new LabelController(doc, {
      blade: config.blade,
      props: config.props,
      valueController: config.valueController
    });
    super(Object.assign(Object.assign({}, config), { view: new LabelView(doc, {
      props: config.props,
      viewProps
    }), viewProps }));
    this.labelController = lc2;
    this.value = config.value;
    this.valueController = config.valueController;
    this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importState(state) {
    return importBladeState(state, (s) => {
      var _a2, _b, _c2;
      return super.importState(s) && this.labelController.importProps(s) && ((_c2 = (_b = (_a2 = this.valueController).importProps) === null || _b === void 0 ? void 0 : _b.call(_a2, state)) !== null && _c2 !== void 0 ? _c2 : true);
    }, (p) => ({
      value: p.optional.raw
    }), (result) => {
      if (result.value) {
        this.value.rawValue = result.value;
      }
      return true;
    });
  }
  exportState() {
    var _a2, _b, _c2;
    return exportBladeState(() => super.exportState(), Object.assign(Object.assign({ value: this.value.rawValue }, this.labelController.exportProps()), (_c2 = (_b = (_a2 = this.valueController).exportProps) === null || _b === void 0 ? void 0 : _b.call(_a2)) !== null && _c2 !== void 0 ? _c2 : {}));
  }
};
function excludeValue(state) {
  const result = Object.assign({}, state);
  delete result.value;
  return result;
}
var BindingController = class extends LabeledValueBladeController {
  constructor(doc, config) {
    super(doc, config);
    this.tag = config.tag;
  }
  importState(state) {
    return importBladeState(
      state,
      (_s) => super.importState(excludeValue(state)),
      (p) => ({
        tag: p.optional.string
      }),
      (result) => {
        this.tag = result.tag;
        return true;
      }
    );
  }
  exportState() {
    return exportBladeState(() => excludeValue(super.exportState()), {
      binding: {
        key: this.value.binding.target.key,
        value: this.value.binding.target.read()
      },
      tag: this.tag
    });
  }
};
function isBindingController(bc2) {
  return isValueBladeController(bc2) && isBindingValue(bc2.value);
}
var InputBindingController = class extends BindingController {
  importState(state) {
    return importBladeState(state, (s) => super.importState(s), (p) => ({
      binding: p.required.object({
        value: p.required.raw
      })
    }), (result) => {
      this.value.binding.inject(result.binding.value);
      this.value.fetch();
      return true;
    });
  }
};
function isInputBindingController(bc2) {
  return isValueBladeController(bc2) && isInputBindingValue(bc2.value);
}
function fillBuffer(buffer, bufferSize) {
  while (buffer.length < bufferSize) {
    buffer.push(void 0);
  }
}
function initializeBuffer(bufferSize) {
  const buffer = [];
  fillBuffer(buffer, bufferSize);
  return buffer;
}
function createTrimmedBuffer(buffer) {
  const index = buffer.indexOf(void 0);
  return forceCast(index < 0 ? buffer : buffer.slice(0, index));
}
function createPushedBuffer(buffer, newValue) {
  const newBuffer = [...createTrimmedBuffer(buffer), newValue];
  if (newBuffer.length > buffer.length) {
    newBuffer.splice(0, newBuffer.length - buffer.length);
  } else {
    fillBuffer(newBuffer, buffer.length);
  }
  return newBuffer;
}
var MonitorBindingValue = class {
  constructor(config) {
    this.emitter = new Emitter();
    this.onTick_ = this.onTick_.bind(this);
    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.binding = config.binding;
    this.value_ = createValue(initializeBuffer(config.bufferSize));
    this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
    this.value_.emitter.on("change", this.onValueChange_);
    this.ticker = config.ticker;
    this.ticker.emitter.on("tick", this.onTick_);
    this.fetch();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(rawValue) {
    this.value_.rawValue = rawValue;
  }
  setRawValue(rawValue, options) {
    this.value_.setRawValue(rawValue, options);
  }
  fetch() {
    this.value_.rawValue = createPushedBuffer(this.value_.rawValue, this.binding.read());
  }
  onTick_() {
    this.fetch();
  }
  onValueBeforeChange_(ev) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), { sender: this }));
  }
  onValueChange_(ev) {
    this.emitter.emit("change", Object.assign(Object.assign({}, ev), { sender: this }));
  }
};
function isMonitorBindingValue(v) {
  if (!("binding" in v)) {
    return false;
  }
  const b = v["binding"];
  return isBinding(b) && "read" in b && !("write" in b);
}
var MonitorBindingController = class extends BindingController {
  exportState() {
    return exportBladeState(() => super.exportState(), {
      binding: {
        readonly: true
      }
    });
  }
};
function isMonitorBindingController(bc2) {
  return isValueBladeController(bc2) && isMonitorBindingValue(bc2.value);
}
var ButtonApi = class extends BladeApi {
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(label) {
    this.controller.labelController.props.set("label", label);
  }
  get title() {
    var _a2;
    return (_a2 = this.controller.buttonController.props.get("title")) !== null && _a2 !== void 0 ? _a2 : "";
  }
  set title(title) {
    this.controller.buttonController.props.set("title", title);
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    const emitter = this.controller.buttonController.emitter;
    emitter.on(eventName, (ev) => {
      bh2(new TpMouseEvent(this, ev.nativeEvent));
    });
    return this;
  }
  off(eventName, handler) {
    const emitter = this.controller.buttonController.emitter;
    emitter.off(eventName, handler);
    return this;
  }
};
function applyClass(elem, className, active) {
  if (active) {
    elem.classList.add(className);
  } else {
    elem.classList.remove(className);
  }
}
function valueToClassName(elem, className) {
  return (value) => {
    applyClass(elem, className, value);
  };
}
function bindValueToTextContent(value, elem) {
  bindValue(value, (text) => {
    elem.textContent = text !== null && text !== void 0 ? text : "";
  });
}
var cn$p = ClassName("btn");
var ButtonView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$p());
    config.viewProps.bindClassModifiers(this.element);
    const buttonElem = doc.createElement("button");
    buttonElem.classList.add(cn$p("b"));
    config.viewProps.bindDisabled(buttonElem);
    this.element.appendChild(buttonElem);
    this.buttonElement = buttonElem;
    const titleElem = doc.createElement("div");
    titleElem.classList.add(cn$p("t"));
    bindValueToTextContent(config.props.value("title"), titleElem);
    this.buttonElement.appendChild(titleElem);
  }
};
var ButtonController = class {
  constructor(doc, config) {
    this.emitter = new Emitter();
    this.onClick_ = this.onClick_.bind(this);
    this.props = config.props;
    this.viewProps = config.viewProps;
    this.view = new ButtonView(doc, {
      props: this.props,
      viewProps: this.viewProps
    });
    this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  importProps(state) {
    return importBladeState(state, null, (p) => ({
      title: p.optional.string
    }), (result) => {
      this.props.set("title", result.title);
      return true;
    });
  }
  exportProps() {
    return exportBladeState(null, {
      title: this.props.get("title")
    });
  }
  onClick_(ev) {
    this.emitter.emit("click", {
      nativeEvent: ev,
      sender: this
    });
  }
};
var ButtonBladeController = class extends BladeController {
  constructor(doc, config) {
    const bc2 = new ButtonController(doc, {
      props: config.buttonProps,
      viewProps: config.viewProps
    });
    const lc2 = new LabelController(doc, {
      blade: config.blade,
      props: config.labelProps,
      valueController: bc2
    });
    super({
      blade: config.blade,
      view: lc2.view,
      viewProps: config.viewProps
    });
    this.buttonController = bc2;
    this.labelController = lc2;
  }
  importState(state) {
    return importBladeState(state, (s) => super.importState(s) && this.buttonController.importProps(s) && this.labelController.importProps(s), () => ({}), () => true);
  }
  exportState() {
    return exportBladeState(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
  }
};
var Semver = class {
  constructor(text) {
    const [core, prerelease] = text.split("-");
    const coreComps = core.split(".");
    this.major = parseInt(coreComps[0], 10);
    this.minor = parseInt(coreComps[1], 10);
    this.patch = parseInt(coreComps[2], 10);
    this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
  }
  toString() {
    const core = [this.major, this.minor, this.patch].join(".");
    return this.prerelease !== null ? [core, this.prerelease].join("-") : core;
  }
};
var VERSION$1 = new Semver("2.0.3");
function createPlugin(plugin) {
  return Object.assign({ core: VERSION$1 }, plugin);
}
var ButtonBladePlugin = createPlugin({
  id: "button",
  type: "blade",
  accept(params) {
    const result = parseRecord(params, (p) => ({
      title: p.required.string,
      view: p.required.constant("button"),
      label: p.optional.string
    }));
    return result ? { params: result } : null;
  },
  controller(args) {
    return new ButtonBladeController(args.document, {
      blade: args.blade,
      buttonProps: ValueMap.fromObject({
        title: args.params.title
      }),
      labelProps: ValueMap.fromObject({
        label: args.params.label
      }),
      viewProps: args.viewProps
    });
  },
  api(args) {
    if (args.controller instanceof ButtonBladeController) {
      return new ButtonApi(args.controller);
    }
    return null;
  }
});
function addButtonAsBlade(api, params) {
  return api.addBlade(Object.assign(Object.assign({}, params), { view: "button" }));
}
function addFolderAsBlade(api, params) {
  return api.addBlade(Object.assign(Object.assign({}, params), { view: "folder" }));
}
function addTabAsBlade(api, params) {
  return api.addBlade(Object.assign(Object.assign({}, params), { view: "tab" }));
}
function isRefreshable(value) {
  if (!isObject$1(value)) {
    return false;
  }
  return "refresh" in value && typeof value.refresh === "function";
}
function createBindingTarget(obj, key) {
  if (!BindingTarget.isBindable(obj)) {
    throw TpError.notBindable();
  }
  return new BindingTarget(obj, key);
}
var RackApi = class {
  constructor(controller, pool) {
    this.onRackValueChange_ = this.onRackValueChange_.bind(this);
    this.controller_ = controller;
    this.emitter_ = new Emitter();
    this.pool_ = pool;
    const rack = this.controller_.rack;
    rack.emitter.on("valuechange", this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((bc2) => this.pool_.createApi(bc2));
  }
  addBinding(object, key, opt_params) {
    const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
    const doc = this.controller_.element.ownerDocument;
    const bc2 = this.pool_.createBinding(doc, createBindingTarget(object, key), params);
    const api = this.pool_.createBindingApi(bc2);
    return this.add(api, params.index);
  }
  addFolder(params) {
    return addFolderAsBlade(this, params);
  }
  addButton(params) {
    return addButtonAsBlade(this, params);
  }
  addTab(params) {
    return addTabAsBlade(this, params);
  }
  add(api, opt_index) {
    const bc2 = api.controller;
    this.controller_.rack.add(bc2, opt_index);
    return api;
  }
  remove(api) {
    this.controller_.rack.remove(api.controller);
  }
  addBlade(params) {
    const doc = this.controller_.element.ownerDocument;
    const bc2 = this.pool_.createBlade(doc, params);
    const api = this.pool_.createApi(bc2);
    return this.add(api, params.index);
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
  refresh() {
    this.children.forEach((c) => {
      if (isRefreshable(c)) {
        c.refresh();
      }
    });
  }
  onRackValueChange_(ev) {
    const bc2 = ev.bladeController;
    const api = this.pool_.createApi(bc2);
    const binding = isBindingValue(bc2.value) ? bc2.value.binding : null;
    this.emitter_.emit("change", new TpChangeEvent(api, binding ? binding.target.read() : bc2.value.rawValue, ev.options.last));
  }
};
var ContainerBladeApi = class extends BladeApi {
  constructor(controller, pool) {
    super(controller);
    this.rackApi_ = new RackApi(controller.rackController, pool);
  }
  refresh() {
    this.rackApi_.refresh();
  }
};
var ContainerBladeController = class extends BladeController {
  constructor(config) {
    super({
      blade: config.blade,
      view: config.view,
      viewProps: config.rackController.viewProps
    });
    this.rackController = config.rackController;
  }
  importState(state) {
    return importBladeState(state, (s) => super.importState(s), (p) => ({
      children: p.required.array(p.required.raw)
    }), (result) => {
      return this.rackController.rack.children.every((c, index) => {
        return c.importState(result.children[index]);
      });
    });
  }
  exportState() {
    return exportBladeState(() => super.exportState(), {
      children: this.rackController.rack.children.map((c) => c.exportState())
    });
  }
};
function isContainerBladeController(bc2) {
  return "rackController" in bc2;
}
var NestedOrderedSet = class {
  constructor(extract) {
    this.emitter = new Emitter();
    this.items_ = [];
    this.cache_ = /* @__PURE__ */ new Set();
    this.onSubListAdd_ = this.onSubListAdd_.bind(this);
    this.onSubListRemove_ = this.onSubListRemove_.bind(this);
    this.extract_ = extract;
  }
  get items() {
    return this.items_;
  }
  allItems() {
    return Array.from(this.cache_);
  }
  find(callback) {
    for (const item of this.allItems()) {
      if (callback(item)) {
        return item;
      }
    }
    return null;
  }
  includes(item) {
    return this.cache_.has(item);
  }
  add(item, opt_index) {
    if (this.includes(item)) {
      throw TpError.shouldNeverHappen();
    }
    const index = opt_index !== void 0 ? opt_index : this.items_.length;
    this.items_.splice(index, 0, item);
    this.cache_.add(item);
    const subList = this.extract_(item);
    if (subList) {
      subList.emitter.on("add", this.onSubListAdd_);
      subList.emitter.on("remove", this.onSubListRemove_);
      subList.allItems().forEach((i) => {
        this.cache_.add(i);
      });
    }
    this.emitter.emit("add", {
      index,
      item,
      root: this,
      target: this
    });
  }
  remove(item) {
    const index = this.items_.indexOf(item);
    if (index < 0) {
      return;
    }
    this.items_.splice(index, 1);
    this.cache_.delete(item);
    const subList = this.extract_(item);
    if (subList) {
      subList.allItems().forEach((i) => {
        this.cache_.delete(i);
      });
      subList.emitter.off("add", this.onSubListAdd_);
      subList.emitter.off("remove", this.onSubListRemove_);
    }
    this.emitter.emit("remove", {
      index,
      item,
      root: this,
      target: this
    });
  }
  onSubListAdd_(ev) {
    this.cache_.add(ev.item);
    this.emitter.emit("add", {
      index: ev.index,
      item: ev.item,
      root: this,
      target: ev.target
    });
  }
  onSubListRemove_(ev) {
    this.cache_.delete(ev.item);
    this.emitter.emit("remove", {
      index: ev.index,
      item: ev.item,
      root: this,
      target: ev.target
    });
  }
};
function findValueBladeController(bcs, v) {
  for (let i = 0; i < bcs.length; i++) {
    const bc2 = bcs[i];
    if (isValueBladeController(bc2) && bc2.value === v) {
      return bc2;
    }
  }
  return null;
}
function findSubBladeControllerSet(bc2) {
  return isContainerBladeController(bc2) ? bc2.rackController.rack["bcSet_"] : null;
}
var Rack = class {
  constructor(config) {
    var _a2, _b;
    this.emitter = new Emitter();
    this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
    this.onSetAdd_ = this.onSetAdd_.bind(this);
    this.onSetRemove_ = this.onSetRemove_.bind(this);
    this.onChildDispose_ = this.onChildDispose_.bind(this);
    this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
    this.onChildValueChange_ = this.onChildValueChange_.bind(this);
    this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
    this.onRackLayout_ = this.onRackLayout_.bind(this);
    this.onRackValueChange_ = this.onRackValueChange_.bind(this);
    this.blade_ = (_a2 = config.blade) !== null && _a2 !== void 0 ? _a2 : null;
    (_b = this.blade_) === null || _b === void 0 ? void 0 : _b.value("positions").emitter.on("change", this.onBladePositionsChange_);
    this.viewProps = config.viewProps;
    this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
    this.bcSet_.emitter.on("add", this.onSetAdd_);
    this.bcSet_.emitter.on("remove", this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(bc2, opt_index) {
    var _a2;
    (_a2 = bc2.parent) === null || _a2 === void 0 ? void 0 : _a2.remove(bc2);
    bc2.parent = this;
    this.bcSet_.add(bc2, opt_index);
  }
  remove(bc2) {
    bc2.parent = null;
    this.bcSet_.remove(bc2);
  }
  find(finder) {
    return this.bcSet_.allItems().filter(finder);
  }
  onSetAdd_(ev) {
    this.updatePositions_();
    const root = ev.target === ev.root;
    this.emitter.emit("add", {
      bladeController: ev.item,
      index: ev.index,
      root,
      sender: this
    });
    if (!root) {
      return;
    }
    const bc2 = ev.item;
    bc2.viewProps.emitter.on("change", this.onChildViewPropsChange_);
    bc2.blade.value("positions").emitter.on("change", this.onChildPositionsChange_);
    bc2.viewProps.handleDispose(this.onChildDispose_);
    if (isValueBladeController(bc2)) {
      bc2.value.emitter.on("change", this.onChildValueChange_);
    } else if (isContainerBladeController(bc2)) {
      const rack = bc2.rackController.rack;
      if (rack) {
        const emitter = rack.emitter;
        emitter.on("layout", this.onRackLayout_);
        emitter.on("valuechange", this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(ev) {
    this.updatePositions_();
    const root = ev.target === ev.root;
    this.emitter.emit("remove", {
      bladeController: ev.item,
      root,
      sender: this
    });
    if (!root) {
      return;
    }
    const bc2 = ev.item;
    if (isValueBladeController(bc2)) {
      bc2.value.emitter.off("change", this.onChildValueChange_);
    } else if (isContainerBladeController(bc2)) {
      const rack = bc2.rackController.rack;
      if (rack) {
        const emitter = rack.emitter;
        emitter.off("layout", this.onRackLayout_);
        emitter.off("valuechange", this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const visibleItems = this.bcSet_.items.filter((bc2) => !bc2.viewProps.get("hidden"));
    const firstVisibleItem = visibleItems[0];
    const lastVisibleItem = visibleItems[visibleItems.length - 1];
    this.bcSet_.items.forEach((bc2) => {
      const ps = [];
      if (bc2 === firstVisibleItem) {
        ps.push("first");
        if (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) {
          ps.push("veryfirst");
        }
      }
      if (bc2 === lastVisibleItem) {
        ps.push("last");
        if (!this.blade_ || this.blade_.get("positions").includes("verylast")) {
          ps.push("verylast");
        }
      }
      bc2.blade.set("positions", ps);
    });
  }
  onChildPositionsChange_() {
    this.updatePositions_();
    this.emitter.emit("layout", {
      sender: this
    });
  }
  onChildViewPropsChange_(_ev) {
    this.updatePositions_();
    this.emitter.emit("layout", {
      sender: this
    });
  }
  onChildDispose_() {
    const disposedUcs = this.bcSet_.items.filter((bc2) => {
      return bc2.viewProps.get("disposed");
    });
    disposedUcs.forEach((bc2) => {
      this.bcSet_.remove(bc2);
    });
  }
  onChildValueChange_(ev) {
    const bc2 = findValueBladeController(this.find(isValueBladeController), ev.sender);
    if (!bc2) {
      throw TpError.alreadyDisposed();
    }
    this.emitter.emit("valuechange", {
      bladeController: bc2,
      options: ev.options,
      sender: this
    });
  }
  onRackLayout_(_) {
    this.updatePositions_();
    this.emitter.emit("layout", {
      sender: this
    });
  }
  onRackValueChange_(ev) {
    this.emitter.emit("valuechange", {
      bladeController: ev.bladeController,
      options: ev.options,
      sender: this
    });
  }
  onBladePositionsChange_() {
    this.updatePositions_();
  }
};
var RackController = class {
  constructor(config) {
    this.onRackAdd_ = this.onRackAdd_.bind(this);
    this.onRackRemove_ = this.onRackRemove_.bind(this);
    this.element = config.element;
    this.viewProps = config.viewProps;
    const rack = new Rack({
      blade: config.root ? void 0 : config.blade,
      viewProps: config.viewProps
    });
    rack.emitter.on("add", this.onRackAdd_);
    rack.emitter.on("remove", this.onRackRemove_);
    this.rack = rack;
    this.viewProps.handleDispose(() => {
      for (let i = this.rack.children.length - 1; i >= 0; i--) {
        const bc2 = this.rack.children[i];
        bc2.viewProps.set("disposed", true);
      }
    });
  }
  onRackAdd_(ev) {
    if (!ev.root) {
      return;
    }
    insertElementAt(this.element, ev.bladeController.view.element, ev.index);
  }
  onRackRemove_(ev) {
    if (!ev.root) {
      return;
    }
    removeElement(ev.bladeController.view.element);
  }
};
function createBlade() {
  return new ValueMap({
    positions: createValue([], {
      equals: deepEqualsArray
    })
  });
}
var Foldable = class _Foldable extends ValueMap {
  constructor(valueMap) {
    super(valueMap);
  }
  static create(expanded) {
    const coreObj = {
      completed: true,
      expanded,
      expandedHeight: null,
      shouldFixHeight: false,
      temporaryExpanded: null
    };
    const core = ValueMap.createCore(coreObj);
    return new _Foldable(core);
  }
  get styleExpanded() {
    var _a2;
    return (_a2 = this.get("temporaryExpanded")) !== null && _a2 !== void 0 ? _a2 : this.get("expanded");
  }
  get styleHeight() {
    if (!this.styleExpanded) {
      return "0";
    }
    const exHeight = this.get("expandedHeight");
    if (this.get("shouldFixHeight") && !isEmpty(exHeight)) {
      return `${exHeight}px`;
    }
    return "auto";
  }
  bindExpandedClass(elem, expandedClassName) {
    const onExpand = () => {
      const expanded = this.styleExpanded;
      if (expanded) {
        elem.classList.add(expandedClassName);
      } else {
        elem.classList.remove(expandedClassName);
      }
    };
    bindValueMap(this, "expanded", onExpand);
    bindValueMap(this, "temporaryExpanded", onExpand);
  }
  cleanUpTransition() {
    this.set("shouldFixHeight", false);
    this.set("expandedHeight", null);
    this.set("completed", true);
  }
};
function computeExpandedFolderHeight(folder, containerElement) {
  let height = 0;
  disableTransitionTemporarily(containerElement, () => {
    folder.set("expandedHeight", null);
    folder.set("temporaryExpanded", true);
    forceReflow(containerElement);
    height = containerElement.clientHeight;
    folder.set("temporaryExpanded", null);
    forceReflow(containerElement);
  });
  return height;
}
function applyHeight(foldable, elem) {
  elem.style.height = foldable.styleHeight;
}
function bindFoldable(foldable, elem) {
  foldable.value("expanded").emitter.on("beforechange", () => {
    foldable.set("completed", false);
    if (isEmpty(foldable.get("expandedHeight"))) {
      const h = computeExpandedFolderHeight(foldable, elem);
      if (h > 0) {
        foldable.set("expandedHeight", h);
      }
    }
    foldable.set("shouldFixHeight", true);
    forceReflow(elem);
  });
  foldable.emitter.on("change", () => {
    applyHeight(foldable, elem);
  });
  applyHeight(foldable, elem);
  elem.addEventListener("transitionend", (ev) => {
    if (ev.propertyName !== "height") {
      return;
    }
    foldable.cleanUpTransition();
  });
}
var FolderApi = class extends ContainerBladeApi {
  constructor(controller, pool) {
    super(controller, pool);
    this.emitter_ = new Emitter();
    this.controller.foldable.value("expanded").emitter.on("change", (ev) => {
      this.emitter_.emit("fold", new TpFoldEvent(this, ev.sender.rawValue));
    });
    this.rackApi_.on("change", (ev) => {
      this.emitter_.emit("change", ev);
    });
  }
  get expanded() {
    return this.controller.foldable.get("expanded");
  }
  set expanded(expanded) {
    this.controller.foldable.set("expanded", expanded);
  }
  get title() {
    return this.controller.props.get("title");
  }
  set title(title) {
    this.controller.props.set("title", title);
  }
  get children() {
    return this.rackApi_.children;
  }
  addBinding(object, key, opt_params) {
    return this.rackApi_.addBinding(object, key, opt_params);
  }
  addFolder(params) {
    return this.rackApi_.addFolder(params);
  }
  addButton(params) {
    return this.rackApi_.addButton(params);
  }
  addTab(params) {
    return this.rackApi_.addTab(params);
  }
  add(api, opt_index) {
    return this.rackApi_.add(api, opt_index);
  }
  remove(api) {
    this.rackApi_.remove(api);
  }
  addBlade(params) {
    return this.rackApi_.addBlade(params);
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
};
var bladeContainerClassName = ClassName("cnt");
var FolderView = class {
  constructor(doc, config) {
    var _a2;
    this.className_ = ClassName((_a2 = config.viewName) !== null && _a2 !== void 0 ? _a2 : "fld");
    this.element = doc.createElement("div");
    this.element.classList.add(this.className_(), bladeContainerClassName());
    config.viewProps.bindClassModifiers(this.element);
    this.foldable_ = config.foldable;
    this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded"));
    bindValueMap(this.foldable_, "completed", valueToClassName(this.element, this.className_(void 0, "cpl")));
    const buttonElem = doc.createElement("button");
    buttonElem.classList.add(this.className_("b"));
    bindValueMap(config.props, "title", (title) => {
      if (isEmpty(title)) {
        this.element.classList.add(this.className_(void 0, "not"));
      } else {
        this.element.classList.remove(this.className_(void 0, "not"));
      }
    });
    config.viewProps.bindDisabled(buttonElem);
    this.element.appendChild(buttonElem);
    this.buttonElement = buttonElem;
    const indentElem = doc.createElement("div");
    indentElem.classList.add(this.className_("i"));
    this.element.appendChild(indentElem);
    const titleElem = doc.createElement("div");
    titleElem.classList.add(this.className_("t"));
    bindValueToTextContent(config.props.value("title"), titleElem);
    this.buttonElement.appendChild(titleElem);
    this.titleElement = titleElem;
    const markElem = doc.createElement("div");
    markElem.classList.add(this.className_("m"));
    this.buttonElement.appendChild(markElem);
    const containerElem = doc.createElement("div");
    containerElem.classList.add(this.className_("c"));
    this.element.appendChild(containerElem);
    this.containerElement = containerElem;
  }
};
var FolderController = class extends ContainerBladeController {
  constructor(doc, config) {
    var _a2;
    const foldable = Foldable.create((_a2 = config.expanded) !== null && _a2 !== void 0 ? _a2 : true);
    const view = new FolderView(doc, {
      foldable,
      props: config.props,
      viewName: config.root ? "rot" : void 0,
      viewProps: config.viewProps
    });
    super(Object.assign(Object.assign({}, config), { rackController: new RackController({
      blade: config.blade,
      element: view.containerElement,
      root: config.root,
      viewProps: config.viewProps
    }), view }));
    this.onTitleClick_ = this.onTitleClick_.bind(this);
    this.props = config.props;
    this.foldable = foldable;
    bindFoldable(this.foldable, this.view.containerElement);
    this.rackController.rack.emitter.on("add", () => {
      this.foldable.cleanUpTransition();
    });
    this.rackController.rack.emitter.on("remove", () => {
      this.foldable.cleanUpTransition();
    });
    this.view.buttonElement.addEventListener("click", this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(state) {
    return importBladeState(state, (s) => super.importState(s), (p) => ({
      expanded: p.required.boolean,
      title: p.optional.string
    }), (result) => {
      this.foldable.set("expanded", result.expanded);
      this.props.set("title", result.title);
      return true;
    });
  }
  exportState() {
    return exportBladeState(() => super.exportState(), {
      expanded: this.foldable.get("expanded"),
      title: this.props.get("title")
    });
  }
  onTitleClick_() {
    this.foldable.set("expanded", !this.foldable.get("expanded"));
  }
};
var FolderBladePlugin = createPlugin({
  id: "folder",
  type: "blade",
  accept(params) {
    const result = parseRecord(params, (p) => ({
      title: p.required.string,
      view: p.required.constant("folder"),
      expanded: p.optional.boolean
    }));
    return result ? { params: result } : null;
  },
  controller(args) {
    return new FolderController(args.document, {
      blade: args.blade,
      expanded: args.params.expanded,
      props: ValueMap.fromObject({
        title: args.params.title
      }),
      viewProps: args.viewProps
    });
  },
  api(args) {
    if (!(args.controller instanceof FolderController)) {
      return null;
    }
    return new FolderApi(args.controller, args.pool);
  }
});
var cn$o = ClassName("");
function valueToModifier(elem, modifier) {
  return valueToClassName(elem, cn$o(void 0, modifier));
}
var ViewProps = class _ViewProps extends ValueMap {
  constructor(valueMap) {
    var _a2;
    super(valueMap);
    this.onDisabledChange_ = this.onDisabledChange_.bind(this);
    this.onParentChange_ = this.onParentChange_.bind(this);
    this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this);
    [this.globalDisabled_, this.setGlobalDisabled_] = createReadonlyValue(createValue(this.getGlobalDisabled_()));
    this.value("disabled").emitter.on("change", this.onDisabledChange_);
    this.value("parent").emitter.on("change", this.onParentChange_);
    (_a2 = this.get("parent")) === null || _a2 === void 0 ? void 0 : _a2.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
  }
  static create(opt_initialValue) {
    var _a2, _b, _c2;
    const initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
    return new _ViewProps(ValueMap.createCore({
      disabled: (_a2 = initialValue.disabled) !== null && _a2 !== void 0 ? _a2 : false,
      disposed: false,
      hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false,
      parent: (_c2 = initialValue.parent) !== null && _c2 !== void 0 ? _c2 : null
    }));
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(elem) {
    bindValue(this.globalDisabled_, valueToModifier(elem, "disabled"));
    bindValueMap(this, "hidden", valueToModifier(elem, "hidden"));
  }
  bindDisabled(target) {
    bindValue(this.globalDisabled_, (disabled) => {
      target.disabled = disabled;
    });
  }
  bindTabIndex(elem) {
    bindValue(this.globalDisabled_, (disabled) => {
      elem.tabIndex = disabled ? -1 : 0;
    });
  }
  handleDispose(callback) {
    this.value("disposed").emitter.on("change", (disposed) => {
      if (disposed) {
        callback();
      }
    });
  }
  importState(state) {
    this.set("disabled", state.disabled);
    this.set("hidden", state.hidden);
  }
  exportState() {
    return {
      disabled: this.get("disabled"),
      hidden: this.get("hidden")
    };
  }
  getGlobalDisabled_() {
    const parent = this.get("parent");
    const parentDisabled = parent ? parent.globalDisabled.rawValue : false;
    return parentDisabled || this.get("disabled");
  }
  updateGlobalDisabled_() {
    this.setGlobalDisabled_(this.getGlobalDisabled_());
  }
  onDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentGlobalDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentChange_(ev) {
    var _a2;
    const prevParent = ev.previousRawValue;
    prevParent === null || prevParent === void 0 ? void 0 : prevParent.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_);
    (_a2 = this.get("parent")) === null || _a2 === void 0 ? void 0 : _a2.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
    this.updateGlobalDisabled_();
  }
};
var cn$n = ClassName("tbp");
var TabPageView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$n());
    config.viewProps.bindClassModifiers(this.element);
    const containerElem = doc.createElement("div");
    containerElem.classList.add(cn$n("c"));
    this.element.appendChild(containerElem);
    this.containerElement = containerElem;
  }
};
var cn$m = ClassName("tbi");
var TabItemView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$m());
    config.viewProps.bindClassModifiers(this.element);
    bindValueMap(config.props, "selected", (selected) => {
      if (selected) {
        this.element.classList.add(cn$m(void 0, "sel"));
      } else {
        this.element.classList.remove(cn$m(void 0, "sel"));
      }
    });
    const buttonElem = doc.createElement("button");
    buttonElem.classList.add(cn$m("b"));
    config.viewProps.bindDisabled(buttonElem);
    this.element.appendChild(buttonElem);
    this.buttonElement = buttonElem;
    const titleElem = doc.createElement("div");
    titleElem.classList.add(cn$m("t"));
    bindValueToTextContent(config.props.value("title"), titleElem);
    this.buttonElement.appendChild(titleElem);
    this.titleElement = titleElem;
  }
};
var TabItemController = class {
  constructor(doc, config) {
    this.emitter = new Emitter();
    this.onClick_ = this.onClick_.bind(this);
    this.props = config.props;
    this.viewProps = config.viewProps;
    this.view = new TabItemView(doc, {
      props: config.props,
      viewProps: config.viewProps
    });
    this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  onClick_() {
    this.emitter.emit("click", {
      sender: this
    });
  }
};
var TabPageController = class extends ContainerBladeController {
  constructor(doc, config) {
    const view = new TabPageView(doc, {
      viewProps: config.viewProps
    });
    super(Object.assign(Object.assign({}, config), { rackController: new RackController({
      blade: config.blade,
      element: view.containerElement,
      viewProps: config.viewProps
    }), view }));
    this.onItemClick_ = this.onItemClick_.bind(this);
    this.ic_ = new TabItemController(doc, {
      props: config.itemProps,
      viewProps: ViewProps.create()
    });
    this.ic_.emitter.on("click", this.onItemClick_);
    this.props = config.props;
    bindValueMap(this.props, "selected", (selected) => {
      this.itemController.props.set("selected", selected);
      this.viewProps.set("hidden", !selected);
    });
  }
  get itemController() {
    return this.ic_;
  }
  importState(state) {
    return importBladeState(state, (s) => super.importState(s), (p) => ({
      selected: p.required.boolean,
      title: p.required.string
    }), (result) => {
      this.ic_.props.set("selected", result.selected);
      this.ic_.props.set("title", result.title);
      return true;
    });
  }
  exportState() {
    return exportBladeState(() => super.exportState(), {
      selected: this.ic_.props.get("selected"),
      title: this.ic_.props.get("title")
    });
  }
  onItemClick_() {
    this.props.set("selected", true);
  }
};
var TabApi = class extends ContainerBladeApi {
  constructor(controller, pool) {
    super(controller, pool);
    this.emitter_ = new Emitter();
    this.onSelect_ = this.onSelect_.bind(this);
    this.pool_ = pool;
    this.rackApi_.on("change", (ev) => {
      this.emitter_.emit("change", ev);
    });
    this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(params) {
    const doc = this.controller.view.element.ownerDocument;
    const pc2 = new TabPageController(doc, {
      blade: createBlade(),
      itemProps: ValueMap.fromObject({
        selected: false,
        title: params.title
      }),
      props: ValueMap.fromObject({
        selected: false
      }),
      viewProps: ViewProps.create()
    });
    const papi = this.pool_.createApi(pc2);
    return this.rackApi_.add(papi, params.index);
  }
  removePage(index) {
    this.rackApi_.remove(this.rackApi_.children[index]);
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
  onSelect_(ev) {
    this.emitter_.emit("select", new TpTabSelectEvent(this, ev.rawValue));
  }
};
var TabPageApi = class extends ContainerBladeApi {
  get title() {
    var _a2;
    return (_a2 = this.controller.itemController.props.get("title")) !== null && _a2 !== void 0 ? _a2 : "";
  }
  set title(title) {
    this.controller.itemController.props.set("title", title);
  }
  get selected() {
    return this.controller.props.get("selected");
  }
  set selected(selected) {
    this.controller.props.set("selected", selected);
  }
  get children() {
    return this.rackApi_.children;
  }
  addButton(params) {
    return this.rackApi_.addButton(params);
  }
  addFolder(params) {
    return this.rackApi_.addFolder(params);
  }
  addTab(params) {
    return this.rackApi_.addTab(params);
  }
  add(api, opt_index) {
    this.rackApi_.add(api, opt_index);
  }
  remove(api) {
    this.rackApi_.remove(api);
  }
  addBinding(object, key, opt_params) {
    return this.rackApi_.addBinding(object, key, opt_params);
  }
  addBlade(params) {
    return this.rackApi_.addBlade(params);
  }
};
var INDEX_NOT_SELECTED = -1;
var Tab = class {
  constructor() {
    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
    this.empty = createValue(true);
    this.selectedIndex = createValue(INDEX_NOT_SELECTED);
    this.items_ = [];
  }
  add(item, opt_index) {
    const index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
    this.items_.splice(index, 0, item);
    item.emitter.on("change", this.onItemSelectedChange_);
    this.keepSelection_();
  }
  remove(item) {
    const index = this.items_.indexOf(item);
    if (index < 0) {
      return;
    }
    this.items_.splice(index, 1);
    item.emitter.off("change", this.onItemSelectedChange_);
    this.keepSelection_();
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
      this.empty.rawValue = true;
      return;
    }
    const firstSelIndex = this.items_.findIndex((s) => s.rawValue);
    if (firstSelIndex < 0) {
      this.items_.forEach((s, i) => {
        s.rawValue = i === 0;
      });
      this.selectedIndex.rawValue = 0;
    } else {
      this.items_.forEach((s, i) => {
        s.rawValue = i === firstSelIndex;
      });
      this.selectedIndex.rawValue = firstSelIndex;
    }
    this.empty.rawValue = false;
  }
  onItemSelectedChange_(ev) {
    if (ev.rawValue) {
      const index = this.items_.findIndex((s) => s === ev.sender);
      this.items_.forEach((s, i) => {
        s.rawValue = i === index;
      });
      this.selectedIndex.rawValue = index;
    } else {
      this.keepSelection_();
    }
  }
};
var cn$l = ClassName("tab");
var TabView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$l(), bladeContainerClassName());
    config.viewProps.bindClassModifiers(this.element);
    bindValue(config.empty, valueToClassName(this.element, cn$l(void 0, "nop")));
    const titleElem = doc.createElement("div");
    titleElem.classList.add(cn$l("t"));
    this.element.appendChild(titleElem);
    this.itemsElement = titleElem;
    const indentElem = doc.createElement("div");
    indentElem.classList.add(cn$l("i"));
    this.element.appendChild(indentElem);
    const contentsElem = doc.createElement("div");
    contentsElem.classList.add(cn$l("c"));
    this.element.appendChild(contentsElem);
    this.contentsElement = contentsElem;
  }
};
var TabController = class extends ContainerBladeController {
  constructor(doc, config) {
    const tab = new Tab();
    const view = new TabView(doc, {
      empty: tab.empty,
      viewProps: config.viewProps
    });
    super({
      blade: config.blade,
      rackController: new RackController({
        blade: config.blade,
        element: view.contentsElement,
        viewProps: config.viewProps
      }),
      view
    });
    this.onRackAdd_ = this.onRackAdd_.bind(this);
    this.onRackRemove_ = this.onRackRemove_.bind(this);
    const rack = this.rackController.rack;
    rack.emitter.on("add", this.onRackAdd_);
    rack.emitter.on("remove", this.onRackRemove_);
    this.tab = tab;
  }
  add(pc2, opt_index) {
    this.rackController.rack.add(pc2, opt_index);
  }
  remove(index) {
    this.rackController.rack.remove(this.rackController.rack.children[index]);
  }
  onRackAdd_(ev) {
    if (!ev.root) {
      return;
    }
    const pc2 = ev.bladeController;
    insertElementAt(this.view.itemsElement, pc2.itemController.view.element, ev.index);
    pc2.itemController.viewProps.set("parent", this.viewProps);
    this.tab.add(pc2.props.value("selected"));
  }
  onRackRemove_(ev) {
    if (!ev.root) {
      return;
    }
    const pc2 = ev.bladeController;
    removeElement(pc2.itemController.view.element);
    pc2.itemController.viewProps.set("parent", null);
    this.tab.remove(pc2.props.value("selected"));
  }
};
var TabBladePlugin = createPlugin({
  id: "tab",
  type: "blade",
  accept(params) {
    const result = parseRecord(params, (p) => ({
      pages: p.required.array(p.required.object({ title: p.required.string })),
      view: p.required.constant("tab")
    }));
    if (!result || result.pages.length === 0) {
      return null;
    }
    return { params: result };
  },
  controller(args) {
    const c = new TabController(args.document, {
      blade: args.blade,
      viewProps: args.viewProps
    });
    args.params.pages.forEach((p) => {
      const pc2 = new TabPageController(args.document, {
        blade: createBlade(),
        itemProps: ValueMap.fromObject({
          selected: false,
          title: p.title
        }),
        props: ValueMap.fromObject({
          selected: false
        }),
        viewProps: ViewProps.create()
      });
      c.add(pc2);
    });
    return c;
  },
  api(args) {
    if (args.controller instanceof TabController) {
      return new TabApi(args.controller, args.pool);
    }
    if (args.controller instanceof TabPageController) {
      return new TabPageApi(args.controller, args.pool);
    }
    return null;
  }
});
function createBladeController(plugin, args) {
  const ac = plugin.accept(args.params);
  if (!ac) {
    return null;
  }
  const params = parseRecord(args.params, (p) => ({
    disabled: p.optional.boolean,
    hidden: p.optional.boolean
  }));
  return plugin.controller({
    blade: createBlade(),
    document: args.document,
    params: forceCast(Object.assign(Object.assign({}, ac.params), { disabled: params === null || params === void 0 ? void 0 : params.disabled, hidden: params === null || params === void 0 ? void 0 : params.hidden })),
    viewProps: ViewProps.create({
      disabled: params === null || params === void 0 ? void 0 : params.disabled,
      hidden: params === null || params === void 0 ? void 0 : params.hidden
    })
  });
}
var ListInputBindingApi = class extends BindingApi {
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(options) {
    this.controller.valueController.props.set("options", options);
  }
};
var ManualTicker = class {
  constructor() {
    this.disabled = false;
    this.emitter = new Emitter();
  }
  dispose() {
  }
  tick() {
    if (this.disabled) {
      return;
    }
    this.emitter.emit("tick", {
      sender: this
    });
  }
};
var IntervalTicker = class {
  constructor(doc, interval) {
    this.disabled_ = false;
    this.timerId_ = null;
    this.onTick_ = this.onTick_.bind(this);
    this.doc_ = doc;
    this.emitter = new Emitter();
    this.interval_ = interval;
    this.setTimer_();
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(inactive) {
    this.disabled_ = inactive;
    if (this.disabled_) {
      this.clearTimer_();
    } else {
      this.setTimer_();
    }
  }
  dispose() {
    this.clearTimer_();
  }
  clearTimer_() {
    if (this.timerId_ === null) {
      return;
    }
    const win = this.doc_.defaultView;
    if (win) {
      win.clearInterval(this.timerId_);
    }
    this.timerId_ = null;
  }
  setTimer_() {
    this.clearTimer_();
    if (this.interval_ <= 0) {
      return;
    }
    const win = this.doc_.defaultView;
    if (win) {
      this.timerId_ = win.setInterval(this.onTick_, this.interval_);
    }
  }
  onTick_() {
    if (this.disabled_) {
      return;
    }
    this.emitter.emit("tick", {
      sender: this
    });
  }
};
var CompositeConstraint = class {
  constructor(constraints) {
    this.constraints = constraints;
  }
  constrain(value) {
    return this.constraints.reduce((result, c) => {
      return c.constrain(result);
    }, value);
  }
};
function findConstraint(c, constraintClass) {
  if (c instanceof constraintClass) {
    return c;
  }
  if (c instanceof CompositeConstraint) {
    const result = c.constraints.reduce((tmpResult, sc) => {
      if (tmpResult) {
        return tmpResult;
      }
      return sc instanceof constraintClass ? sc : null;
    }, null);
    if (result) {
      return result;
    }
  }
  return null;
}
var ListConstraint = class {
  constructor(options) {
    this.values = ValueMap.fromObject({
      options
    });
  }
  constrain(value) {
    const opts = this.values.get("options");
    if (opts.length === 0) {
      return value;
    }
    const matched = opts.filter((item) => {
      return item.value === value;
    }).length > 0;
    return matched ? value : opts[0].value;
  }
};
function parseListOptions(value) {
  var _a2;
  const p = MicroParsers;
  if (Array.isArray(value)) {
    return (_a2 = parseRecord({ items: value }, (p2) => ({
      items: p2.required.array(p2.required.object({
        text: p2.required.string,
        value: p2.required.raw
      }))
    }))) === null || _a2 === void 0 ? void 0 : _a2.items;
  }
  if (typeof value === "object") {
    return p.required.raw(value).value;
  }
  return void 0;
}
function normalizeListOptions(options) {
  if (Array.isArray(options)) {
    return options;
  }
  const items = [];
  Object.keys(options).forEach((text) => {
    items.push({ text, value: options[text] });
  });
  return items;
}
function createListConstraint(options) {
  return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
}
var cn$k = ClassName("lst");
var ListView = class {
  constructor(doc, config) {
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.props_ = config.props;
    this.element = doc.createElement("div");
    this.element.classList.add(cn$k());
    config.viewProps.bindClassModifiers(this.element);
    const selectElem = doc.createElement("select");
    selectElem.classList.add(cn$k("s"));
    config.viewProps.bindDisabled(selectElem);
    this.element.appendChild(selectElem);
    this.selectElement = selectElem;
    const markElem = doc.createElement("div");
    markElem.classList.add(cn$k("m"));
    markElem.appendChild(createSvgIconElement(doc, "dropdown"));
    this.element.appendChild(markElem);
    config.value.emitter.on("change", this.onValueChange_);
    this.value_ = config.value;
    bindValueMap(this.props_, "options", (opts) => {
      removeChildElements(this.selectElement);
      opts.forEach((item) => {
        const optionElem = doc.createElement("option");
        optionElem.textContent = item.text;
        this.selectElement.appendChild(optionElem);
      });
      this.update_();
    });
  }
  update_() {
    const values = this.props_.get("options").map((o) => o.value);
    this.selectElement.selectedIndex = values.indexOf(this.value_.rawValue);
  }
  onValueChange_() {
    this.update_();
  }
};
var ListController = class {
  constructor(doc, config) {
    this.onSelectChange_ = this.onSelectChange_.bind(this);
    this.props = config.props;
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new ListView(doc, {
      props: this.props,
      value: this.value,
      viewProps: this.viewProps
    });
    this.view.selectElement.addEventListener("change", this.onSelectChange_);
  }
  onSelectChange_(e) {
    const selectElem = forceCast(e.currentTarget);
    this.value.rawValue = this.props.get("options")[selectElem.selectedIndex].value;
  }
  importProps(state) {
    return importBladeState(state, null, (p) => ({
      options: p.required.custom(parseListOptions)
    }), (result) => {
      this.props.set("options", normalizeListOptions(result.options));
      return true;
    });
  }
  exportProps() {
    return exportBladeState(null, {
      options: this.props.get("options")
    });
  }
};
var cn$j = ClassName("pop");
var PopupView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$j());
    config.viewProps.bindClassModifiers(this.element);
    bindValue(config.shows, valueToClassName(this.element, cn$j(void 0, "v")));
  }
};
var PopupController = class {
  constructor(doc, config) {
    this.shows = createValue(false);
    this.viewProps = config.viewProps;
    this.view = new PopupView(doc, {
      shows: this.shows,
      viewProps: this.viewProps
    });
  }
};
var cn$i = ClassName("txt");
var TextView = class {
  constructor(doc, config) {
    this.onChange_ = this.onChange_.bind(this);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$i());
    config.viewProps.bindClassModifiers(this.element);
    this.props_ = config.props;
    this.props_.emitter.on("change", this.onChange_);
    const inputElem = doc.createElement("input");
    inputElem.classList.add(cn$i("i"));
    inputElem.type = "text";
    config.viewProps.bindDisabled(inputElem);
    this.element.appendChild(inputElem);
    this.inputElement = inputElem;
    config.value.emitter.on("change", this.onChange_);
    this.value_ = config.value;
    this.refresh();
  }
  refresh() {
    const formatter = this.props_.get("formatter");
    this.inputElement.value = formatter(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
};
var TextController = class {
  constructor(doc, config) {
    this.onInputChange_ = this.onInputChange_.bind(this);
    this.parser_ = config.parser;
    this.props = config.props;
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new TextView(doc, {
      props: config.props,
      value: this.value,
      viewProps: this.viewProps
    });
    this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(e) {
    const inputElem = forceCast(e.currentTarget);
    const value = inputElem.value;
    const parsedValue = this.parser_(value);
    if (!isEmpty(parsedValue)) {
      this.value.rawValue = parsedValue;
    }
    this.view.refresh();
  }
};
function boolToString(value) {
  return String(value);
}
function boolFromUnknown(value) {
  if (value === "false") {
    return false;
  }
  return !!value;
}
function BooleanFormatter(value) {
  return boolToString(value);
}
function composeParsers(parsers) {
  return (text) => {
    return parsers.reduce((result, parser) => {
      if (result !== null) {
        return result;
      }
      return parser(text);
    }, null);
  };
}
var innerFormatter = createNumberFormatter(0);
function formatPercentage(value) {
  return innerFormatter(value) + "%";
}
function stringFromUnknown(value) {
  return String(value);
}
function formatString(value) {
  return value;
}
function connectValues({ primary, secondary, forward, backward }) {
  let changing = false;
  function preventFeedback(callback) {
    if (changing) {
      return;
    }
    changing = true;
    callback();
    changing = false;
  }
  primary.emitter.on("change", (ev) => {
    preventFeedback(() => {
      secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
    });
  });
  secondary.emitter.on("change", (ev) => {
    preventFeedback(() => {
      primary.setRawValue(backward(primary.rawValue, secondary.rawValue), ev.options);
    });
    preventFeedback(() => {
      secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
    });
  });
  preventFeedback(() => {
    secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), {
      forceEmit: false,
      last: true
    });
  });
}
function getStepForKey(keyScale, keys) {
  const step = keyScale * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
  if (keys.upKey) {
    return +step;
  } else if (keys.downKey) {
    return -step;
  }
  return 0;
}
function getVerticalStepKeys(ev) {
  return {
    altKey: ev.altKey,
    downKey: ev.key === "ArrowDown",
    shiftKey: ev.shiftKey,
    upKey: ev.key === "ArrowUp"
  };
}
function getHorizontalStepKeys(ev) {
  return {
    altKey: ev.altKey,
    downKey: ev.key === "ArrowLeft",
    shiftKey: ev.shiftKey,
    upKey: ev.key === "ArrowRight"
  };
}
function isVerticalArrowKey(key) {
  return key === "ArrowUp" || key === "ArrowDown";
}
function isArrowKey(key) {
  return isVerticalArrowKey(key) || key === "ArrowLeft" || key === "ArrowRight";
}
function computeOffset$1(ev, elem) {
  var _a2, _b;
  const win = elem.ownerDocument.defaultView;
  const rect = elem.getBoundingClientRect();
  return {
    x: ev.pageX - (((_a2 = win && win.scrollX) !== null && _a2 !== void 0 ? _a2 : 0) + rect.left),
    y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
  };
}
var PointerHandler = class {
  constructor(element) {
    this.lastTouch_ = null;
    this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
    this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
    this.onMouseDown_ = this.onMouseDown_.bind(this);
    this.onTouchEnd_ = this.onTouchEnd_.bind(this);
    this.onTouchMove_ = this.onTouchMove_.bind(this);
    this.onTouchStart_ = this.onTouchStart_.bind(this);
    this.elem_ = element;
    this.emitter = new Emitter();
    element.addEventListener("touchstart", this.onTouchStart_, {
      passive: false
    });
    element.addEventListener("touchmove", this.onTouchMove_, {
      passive: true
    });
    element.addEventListener("touchend", this.onTouchEnd_);
    element.addEventListener("mousedown", this.onMouseDown_);
  }
  computePosition_(offset) {
    const rect = this.elem_.getBoundingClientRect();
    return {
      bounds: {
        width: rect.width,
        height: rect.height
      },
      point: offset ? {
        x: offset.x,
        y: offset.y
      } : null
    };
  }
  onMouseDown_(ev) {
    var _a2;
    ev.preventDefault();
    (_a2 = ev.currentTarget) === null || _a2 === void 0 ? void 0 : _a2.focus();
    const doc = this.elem_.ownerDocument;
    doc.addEventListener("mousemove", this.onDocumentMouseMove_);
    doc.addEventListener("mouseup", this.onDocumentMouseUp_);
    this.emitter.emit("down", {
      altKey: ev.altKey,
      data: this.computePosition_(computeOffset$1(ev, this.elem_)),
      sender: this,
      shiftKey: ev.shiftKey
    });
  }
  onDocumentMouseMove_(ev) {
    this.emitter.emit("move", {
      altKey: ev.altKey,
      data: this.computePosition_(computeOffset$1(ev, this.elem_)),
      sender: this,
      shiftKey: ev.shiftKey
    });
  }
  onDocumentMouseUp_(ev) {
    const doc = this.elem_.ownerDocument;
    doc.removeEventListener("mousemove", this.onDocumentMouseMove_);
    doc.removeEventListener("mouseup", this.onDocumentMouseUp_);
    this.emitter.emit("up", {
      altKey: ev.altKey,
      data: this.computePosition_(computeOffset$1(ev, this.elem_)),
      sender: this,
      shiftKey: ev.shiftKey
    });
  }
  onTouchStart_(ev) {
    ev.preventDefault();
    const touch = ev.targetTouches.item(0);
    const rect = this.elem_.getBoundingClientRect();
    this.emitter.emit("down", {
      altKey: ev.altKey,
      data: this.computePosition_(touch ? {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      } : void 0),
      sender: this,
      shiftKey: ev.shiftKey
    });
    this.lastTouch_ = touch;
  }
  onTouchMove_(ev) {
    const touch = ev.targetTouches.item(0);
    const rect = this.elem_.getBoundingClientRect();
    this.emitter.emit("move", {
      altKey: ev.altKey,
      data: this.computePosition_(touch ? {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      } : void 0),
      sender: this,
      shiftKey: ev.shiftKey
    });
    this.lastTouch_ = touch;
  }
  onTouchEnd_(ev) {
    var _a2;
    const touch = (_a2 = ev.targetTouches.item(0)) !== null && _a2 !== void 0 ? _a2 : this.lastTouch_;
    const rect = this.elem_.getBoundingClientRect();
    this.emitter.emit("up", {
      altKey: ev.altKey,
      data: this.computePosition_(touch ? {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      } : void 0),
      sender: this,
      shiftKey: ev.shiftKey
    });
  }
};
var cn$h = ClassName("txt");
var NumberTextView = class {
  constructor(doc, config) {
    this.onChange_ = this.onChange_.bind(this);
    this.props_ = config.props;
    this.props_.emitter.on("change", this.onChange_);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$h(), cn$h(void 0, "num"));
    if (config.arrayPosition) {
      this.element.classList.add(cn$h(void 0, config.arrayPosition));
    }
    config.viewProps.bindClassModifiers(this.element);
    const inputElem = doc.createElement("input");
    inputElem.classList.add(cn$h("i"));
    inputElem.type = "text";
    config.viewProps.bindDisabled(inputElem);
    this.element.appendChild(inputElem);
    this.inputElement = inputElem;
    this.onDraggingChange_ = this.onDraggingChange_.bind(this);
    this.dragging_ = config.dragging;
    this.dragging_.emitter.on("change", this.onDraggingChange_);
    this.element.classList.add(cn$h());
    this.inputElement.classList.add(cn$h("i"));
    const knobElem = doc.createElement("div");
    knobElem.classList.add(cn$h("k"));
    this.element.appendChild(knobElem);
    this.knobElement = knobElem;
    const guideElem = doc.createElementNS(SVG_NS, "svg");
    guideElem.classList.add(cn$h("g"));
    this.knobElement.appendChild(guideElem);
    const bodyElem = doc.createElementNS(SVG_NS, "path");
    bodyElem.classList.add(cn$h("gb"));
    guideElem.appendChild(bodyElem);
    this.guideBodyElem_ = bodyElem;
    const headElem = doc.createElementNS(SVG_NS, "path");
    headElem.classList.add(cn$h("gh"));
    guideElem.appendChild(headElem);
    this.guideHeadElem_ = headElem;
    const tooltipElem = doc.createElement("div");
    tooltipElem.classList.add(ClassName("tt")());
    this.knobElement.appendChild(tooltipElem);
    this.tooltipElem_ = tooltipElem;
    config.value.emitter.on("change", this.onChange_);
    this.value = config.value;
    this.refresh();
  }
  onDraggingChange_(ev) {
    if (ev.rawValue === null) {
      this.element.classList.remove(cn$h(void 0, "drg"));
      return;
    }
    this.element.classList.add(cn$h(void 0, "drg"));
    const x = ev.rawValue / this.props_.get("pointerScale");
    const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
    const adx = constrainRange(-aox, -4, 4);
    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${aox + adx},0 L${aox},4 L${aox + adx},8`, `M ${x},-1 L${x},9`].join(" "));
    this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${x},4`);
    const formatter = this.props_.get("formatter");
    this.tooltipElem_.textContent = formatter(this.value.rawValue);
    this.tooltipElem_.style.left = `${x}px`;
  }
  refresh() {
    const formatter = this.props_.get("formatter");
    this.inputElement.value = formatter(this.value.rawValue);
  }
  onChange_() {
    this.refresh();
  }
};
var NumberTextController = class {
  constructor(doc, config) {
    var _a2;
    this.originRawValue_ = 0;
    this.onInputChange_ = this.onInputChange_.bind(this);
    this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
    this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.parser_ = config.parser;
    this.props = config.props;
    this.sliderProps_ = (_a2 = config.sliderProps) !== null && _a2 !== void 0 ? _a2 : null;
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.dragging_ = createValue(null);
    this.view = new NumberTextView(doc, {
      arrayPosition: config.arrayPosition,
      dragging: this.dragging_,
      props: this.props,
      value: this.value,
      viewProps: this.viewProps
    });
    this.view.inputElement.addEventListener("change", this.onInputChange_);
    this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_);
    this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
    const ph2 = new PointerHandler(this.view.knobElement);
    ph2.emitter.on("down", this.onPointerDown_);
    ph2.emitter.on("move", this.onPointerMove_);
    ph2.emitter.on("up", this.onPointerUp_);
  }
  constrainValue_(value) {
    var _a2, _b;
    const min = (_a2 = this.sliderProps_) === null || _a2 === void 0 ? void 0 : _a2.get("min");
    const max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get("max");
    let v = value;
    if (min !== void 0) {
      v = Math.max(v, min);
    }
    if (max !== void 0) {
      v = Math.min(v, max);
    }
    return v;
  }
  onInputChange_(e) {
    const inputElem = forceCast(e.currentTarget);
    const value = inputElem.value;
    const parsedValue = this.parser_(value);
    if (!isEmpty(parsedValue)) {
      this.value.rawValue = this.constrainValue_(parsedValue);
    }
    this.view.refresh();
  }
  onInputKeyDown_(ev) {
    const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
    if (step === 0) {
      return;
    }
    this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
      forceEmit: false,
      last: false
    });
  }
  onInputKeyUp_(ev) {
    const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
    if (step === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue, {
      forceEmit: true,
      last: true
    });
  }
  onPointerDown_() {
    this.originRawValue_ = this.value.rawValue;
    this.dragging_.rawValue = 0;
  }
  computeDraggingValue_(data) {
    if (!data.point) {
      return null;
    }
    const dx = data.point.x - data.bounds.width / 2;
    return this.constrainValue_(this.originRawValue_ + dx * this.props.get("pointerScale"));
  }
  onPointerMove_(ev) {
    const v = this.computeDraggingValue_(ev.data);
    if (v === null) {
      return;
    }
    this.value.setRawValue(v, {
      forceEmit: false,
      last: false
    });
    this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
  }
  onPointerUp_(ev) {
    const v = this.computeDraggingValue_(ev.data);
    if (v === null) {
      return;
    }
    this.value.setRawValue(v, {
      forceEmit: true,
      last: true
    });
    this.dragging_.rawValue = null;
  }
};
var cn$g = ClassName("sld");
var SliderView = class {
  constructor(doc, config) {
    this.onChange_ = this.onChange_.bind(this);
    this.props_ = config.props;
    this.props_.emitter.on("change", this.onChange_);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$g());
    config.viewProps.bindClassModifiers(this.element);
    const trackElem = doc.createElement("div");
    trackElem.classList.add(cn$g("t"));
    config.viewProps.bindTabIndex(trackElem);
    this.element.appendChild(trackElem);
    this.trackElement = trackElem;
    const knobElem = doc.createElement("div");
    knobElem.classList.add(cn$g("k"));
    this.trackElement.appendChild(knobElem);
    this.knobElement = knobElem;
    config.value.emitter.on("change", this.onChange_);
    this.value = config.value;
    this.update_();
  }
  update_() {
    const p = constrainRange(mapRange(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
    this.knobElement.style.width = `${p}%`;
  }
  onChange_() {
    this.update_();
  }
};
var SliderController = class {
  constructor(doc, config) {
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onKeyUp_ = this.onKeyUp_.bind(this);
    this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.props = config.props;
    this.view = new SliderView(doc, {
      props: this.props,
      value: this.value,
      viewProps: this.viewProps
    });
    this.ptHandler_ = new PointerHandler(this.view.trackElement);
    this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_);
    this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_);
    this.ptHandler_.emitter.on("up", this.onPointerUp_);
    this.view.trackElement.addEventListener("keydown", this.onKeyDown_);
    this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(d, opts) {
    if (!d.point) {
      return;
    }
    this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get("min"), this.props.get("max")), opts);
  }
  onPointerDownOrMove_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerUp_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: true,
      last: true
    });
  }
  onKeyDown_(ev) {
    const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
    if (step === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue + step, {
      forceEmit: false,
      last: false
    });
  }
  onKeyUp_(ev) {
    const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
    if (step === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue, {
      forceEmit: true,
      last: true
    });
  }
};
var cn$f = ClassName("sldtxt");
var SliderTextView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$f());
    const sliderElem = doc.createElement("div");
    sliderElem.classList.add(cn$f("s"));
    this.sliderView_ = config.sliderView;
    sliderElem.appendChild(this.sliderView_.element);
    this.element.appendChild(sliderElem);
    const textElem = doc.createElement("div");
    textElem.classList.add(cn$f("t"));
    this.textView_ = config.textView;
    textElem.appendChild(this.textView_.element);
    this.element.appendChild(textElem);
  }
};
var SliderTextController = class {
  constructor(doc, config) {
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.sliderC_ = new SliderController(doc, {
      props: config.sliderProps,
      value: config.value,
      viewProps: this.viewProps
    });
    this.textC_ = new NumberTextController(doc, {
      parser: config.parser,
      props: config.textProps,
      sliderProps: config.sliderProps,
      value: config.value,
      viewProps: config.viewProps
    });
    this.view = new SliderTextView(doc, {
      sliderView: this.sliderC_.view,
      textView: this.textC_.view
    });
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(state) {
    return importBladeState(state, null, (p) => ({
      max: p.required.number,
      min: p.required.number
    }), (result) => {
      const sliderProps = this.sliderC_.props;
      sliderProps.set("max", result.max);
      sliderProps.set("min", result.min);
      return true;
    });
  }
  exportProps() {
    const sliderProps = this.sliderC_.props;
    return exportBladeState(null, {
      max: sliderProps.get("max"),
      min: sliderProps.get("min")
    });
  }
};
function createSliderTextProps(config) {
  return {
    sliderProps: new ValueMap({
      keyScale: config.keyScale,
      max: config.max,
      min: config.min
    }),
    textProps: new ValueMap({
      formatter: createValue(config.formatter),
      keyScale: config.keyScale,
      pointerScale: createValue(config.pointerScale)
    })
  };
}
var CSS_VAR_MAP = {
  containerUnitSize: "cnt-usz"
};
function getCssVar(key) {
  return `--${CSS_VAR_MAP[key]}`;
}
function createPointDimensionParser(p) {
  return createNumberTextInputParamsParser(p);
}
function parsePointDimensionParams(value) {
  if (!isRecord(value)) {
    return void 0;
  }
  return parseRecord(value, createPointDimensionParser);
}
function createDimensionConstraint(params, initialValue) {
  if (!params) {
    return void 0;
  }
  const constraints = [];
  const cs = createStepConstraint(params, initialValue);
  if (cs) {
    constraints.push(cs);
  }
  const rs = createRangeConstraint(params);
  if (rs) {
    constraints.push(rs);
  }
  return new CompositeConstraint(constraints);
}
function isCompatible(ver) {
  if (!ver) {
    return false;
  }
  return ver.major === VERSION$1.major;
}
function parsePickerLayout(value) {
  if (value === "inline" || value === "popup") {
    return value;
  }
  return void 0;
}
function writePrimitive(target, value) {
  target.write(value);
}
var cn$e = ClassName("ckb");
var CheckboxView = class {
  constructor(doc, config) {
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$e());
    config.viewProps.bindClassModifiers(this.element);
    const labelElem = doc.createElement("label");
    labelElem.classList.add(cn$e("l"));
    this.element.appendChild(labelElem);
    this.labelElement = labelElem;
    const inputElem = doc.createElement("input");
    inputElem.classList.add(cn$e("i"));
    inputElem.type = "checkbox";
    this.labelElement.appendChild(inputElem);
    this.inputElement = inputElem;
    config.viewProps.bindDisabled(this.inputElement);
    const wrapperElem = doc.createElement("div");
    wrapperElem.classList.add(cn$e("w"));
    this.labelElement.appendChild(wrapperElem);
    const markElem = createSvgIconElement(doc, "check");
    wrapperElem.appendChild(markElem);
    config.value.emitter.on("change", this.onValueChange_);
    this.value = config.value;
    this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
};
var CheckboxController = class {
  constructor(doc, config) {
    this.onInputChange_ = this.onInputChange_.bind(this);
    this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new CheckboxView(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    this.view.inputElement.addEventListener("change", this.onInputChange_);
    this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
  }
  onInputChange_(ev) {
    const inputElem = forceCast(ev.currentTarget);
    this.value.rawValue = inputElem.checked;
    ev.preventDefault();
    ev.stopPropagation();
  }
  onLabelMouseDown_(ev) {
    ev.preventDefault();
  }
};
function createConstraint$6(params) {
  const constraints = [];
  const lc2 = createListConstraint(params.options);
  if (lc2) {
    constraints.push(lc2);
  }
  return new CompositeConstraint(constraints);
}
var BooleanInputPlugin = createPlugin({
  id: "input-bool",
  type: "input",
  accept: (value, params) => {
    if (typeof value !== "boolean") {
      return null;
    }
    const result = parseRecord(params, (p) => ({
      options: p.optional.custom(parseListOptions),
      readonly: p.optional.constant(false)
    }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => boolFromUnknown,
    constraint: (args) => createConstraint$6(args.params),
    writer: (_args) => writePrimitive
  },
  controller: (args) => {
    const doc = args.document;
    const value = args.value;
    const c = args.constraint;
    const lc2 = c && findConstraint(c, ListConstraint);
    if (lc2) {
      return new ListController(doc, {
        props: new ValueMap({
          options: lc2.values.value("options")
        }),
        value,
        viewProps: args.viewProps
      });
    }
    return new CheckboxController(doc, {
      value,
      viewProps: args.viewProps
    });
  },
  api(args) {
    if (typeof args.controller.value.rawValue !== "boolean") {
      return null;
    }
    if (args.controller.valueController instanceof ListController) {
      return new ListInputBindingApi(args.controller);
    }
    return null;
  }
});
var cn$d = ClassName("col");
var ColorView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$d());
    config.foldable.bindExpandedClass(this.element, cn$d(void 0, "expanded"));
    bindValueMap(config.foldable, "completed", valueToClassName(this.element, cn$d(void 0, "cpl")));
    const headElem = doc.createElement("div");
    headElem.classList.add(cn$d("h"));
    this.element.appendChild(headElem);
    const swatchElem = doc.createElement("div");
    swatchElem.classList.add(cn$d("s"));
    headElem.appendChild(swatchElem);
    this.swatchElement = swatchElem;
    const textElem = doc.createElement("div");
    textElem.classList.add(cn$d("t"));
    headElem.appendChild(textElem);
    this.textElement = textElem;
    if (config.pickerLayout === "inline") {
      const pickerElem = doc.createElement("div");
      pickerElem.classList.add(cn$d("p"));
      this.element.appendChild(pickerElem);
      this.pickerElement = pickerElem;
    } else {
      this.pickerElement = null;
    }
  }
};
function rgbToHslInt(r, g, b) {
  const rp2 = constrainRange(r / 255, 0, 1);
  const gp2 = constrainRange(g / 255, 0, 1);
  const bp2 = constrainRange(b / 255, 0, 1);
  const cmax = Math.max(rp2, gp2, bp2);
  const cmin = Math.min(rp2, gp2, bp2);
  const c = cmax - cmin;
  let h = 0;
  let s = 0;
  const l = (cmin + cmax) / 2;
  if (c !== 0) {
    s = c / (1 - Math.abs(cmax + cmin - 1));
    if (rp2 === cmax) {
      h = (gp2 - bp2) / c;
    } else if (gp2 === cmax) {
      h = 2 + (bp2 - rp2) / c;
    } else {
      h = 4 + (rp2 - gp2) / c;
    }
    h = h / 6 + (h < 0 ? 1 : 0);
  }
  return [h * 360, s * 100, l * 100];
}
function hslToRgbInt(h, s, l) {
  const hp2 = (h % 360 + 360) % 360;
  const sp2 = constrainRange(s / 100, 0, 1);
  const lp2 = constrainRange(l / 100, 0, 1);
  const c = (1 - Math.abs(2 * lp2 - 1)) * sp2;
  const x = c * (1 - Math.abs(hp2 / 60 % 2 - 1));
  const m = lp2 - c / 2;
  let rp2, gp2, bp2;
  if (hp2 >= 0 && hp2 < 60) {
    [rp2, gp2, bp2] = [c, x, 0];
  } else if (hp2 >= 60 && hp2 < 120) {
    [rp2, gp2, bp2] = [x, c, 0];
  } else if (hp2 >= 120 && hp2 < 180) {
    [rp2, gp2, bp2] = [0, c, x];
  } else if (hp2 >= 180 && hp2 < 240) {
    [rp2, gp2, bp2] = [0, x, c];
  } else if (hp2 >= 240 && hp2 < 300) {
    [rp2, gp2, bp2] = [x, 0, c];
  } else {
    [rp2, gp2, bp2] = [c, 0, x];
  }
  return [(rp2 + m) * 255, (gp2 + m) * 255, (bp2 + m) * 255];
}
function rgbToHsvInt(r, g, b) {
  const rp2 = constrainRange(r / 255, 0, 1);
  const gp2 = constrainRange(g / 255, 0, 1);
  const bp2 = constrainRange(b / 255, 0, 1);
  const cmax = Math.max(rp2, gp2, bp2);
  const cmin = Math.min(rp2, gp2, bp2);
  const d = cmax - cmin;
  let h;
  if (d === 0) {
    h = 0;
  } else if (cmax === rp2) {
    h = 60 * (((gp2 - bp2) / d % 6 + 6) % 6);
  } else if (cmax === gp2) {
    h = 60 * ((bp2 - rp2) / d + 2);
  } else {
    h = 60 * ((rp2 - gp2) / d + 4);
  }
  const s = cmax === 0 ? 0 : d / cmax;
  const v = cmax;
  return [h, s * 100, v * 100];
}
function hsvToRgbInt(h, s, v) {
  const hp2 = loopRange(h, 360);
  const sp2 = constrainRange(s / 100, 0, 1);
  const vp2 = constrainRange(v / 100, 0, 1);
  const c = vp2 * sp2;
  const x = c * (1 - Math.abs(hp2 / 60 % 2 - 1));
  const m = vp2 - c;
  let rp2, gp2, bp2;
  if (hp2 >= 0 && hp2 < 60) {
    [rp2, gp2, bp2] = [c, x, 0];
  } else if (hp2 >= 60 && hp2 < 120) {
    [rp2, gp2, bp2] = [x, c, 0];
  } else if (hp2 >= 120 && hp2 < 180) {
    [rp2, gp2, bp2] = [0, c, x];
  } else if (hp2 >= 180 && hp2 < 240) {
    [rp2, gp2, bp2] = [0, x, c];
  } else if (hp2 >= 240 && hp2 < 300) {
    [rp2, gp2, bp2] = [x, 0, c];
  } else {
    [rp2, gp2, bp2] = [c, 0, x];
  }
  return [(rp2 + m) * 255, (gp2 + m) * 255, (bp2 + m) * 255];
}
function hslToHsvInt(h, s, l) {
  const sd2 = l + s * (100 - Math.abs(2 * l - 100)) / (2 * 100);
  return [
    h,
    sd2 !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd2 : 0,
    l + s * (100 - Math.abs(2 * l - 100)) / (2 * 100)
  ];
}
function hsvToHslInt(h, s, v) {
  const sd2 = 100 - Math.abs(v * (200 - s) / 100 - 100);
  return [h, sd2 !== 0 ? s * v / sd2 : 0, v * (200 - s) / (2 * 100)];
}
function removeAlphaComponent(comps) {
  return [comps[0], comps[1], comps[2]];
}
function appendAlphaComponent(comps, alpha) {
  return [comps[0], comps[1], comps[2], alpha];
}
var MODE_CONVERTER_MAP = {
  hsl: {
    hsl: (h, s, l) => [h, s, l],
    hsv: hslToHsvInt,
    rgb: hslToRgbInt
  },
  hsv: {
    hsl: hsvToHslInt,
    hsv: (h, s, v) => [h, s, v],
    rgb: hsvToRgbInt
  },
  rgb: {
    hsl: rgbToHslInt,
    hsv: rgbToHsvInt,
    rgb: (r, g, b) => [r, g, b]
  }
};
function getColorMaxComponents(mode, type) {
  return [
    type === "float" ? 1 : mode === "rgb" ? 255 : 360,
    type === "float" ? 1 : mode === "rgb" ? 255 : 100,
    type === "float" ? 1 : mode === "rgb" ? 255 : 100
  ];
}
function loopHueRange(hue, max) {
  return hue === max ? max : loopRange(hue, max);
}
function constrainColorComponents(components, mode, type) {
  var _a2;
  const ms2 = getColorMaxComponents(mode, type);
  return [
    mode === "rgb" ? constrainRange(components[0], 0, ms2[0]) : loopHueRange(components[0], ms2[0]),
    constrainRange(components[1], 0, ms2[1]),
    constrainRange(components[2], 0, ms2[2]),
    constrainRange((_a2 = components[3]) !== null && _a2 !== void 0 ? _a2 : 1, 0, 1)
  ];
}
function convertColorType(comps, mode, from, to2) {
  const fms = getColorMaxComponents(mode, from);
  const tms = getColorMaxComponents(mode, to2);
  return comps.map((c, index) => c / fms[index] * tms[index]);
}
function convertColor(components, from, to2) {
  const intComps = convertColorType(components, from.mode, from.type, "int");
  const result = MODE_CONVERTER_MAP[from.mode][to2.mode](...intComps);
  return convertColorType(result, to2.mode, "int", to2.type);
}
var IntColor = class _IntColor {
  static black() {
    return new _IntColor([0, 0, 0], "rgb");
  }
  constructor(comps, mode) {
    this.type = "int";
    this.mode = mode;
    this.comps_ = constrainColorComponents(comps, mode, this.type);
  }
  getComponents(opt_mode) {
    return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), { mode: this.mode, type: this.type }, { mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const rgbComps = this.getComponents("rgb");
    return {
      r: rgbComps[0],
      g: rgbComps[1],
      b: rgbComps[2],
      a: rgbComps[3]
    };
  }
};
var cn$c = ClassName("colp");
var ColorPickerView = class {
  constructor(doc, config) {
    this.alphaViews_ = null;
    this.element = doc.createElement("div");
    this.element.classList.add(cn$c());
    config.viewProps.bindClassModifiers(this.element);
    const hsvElem = doc.createElement("div");
    hsvElem.classList.add(cn$c("hsv"));
    const svElem = doc.createElement("div");
    svElem.classList.add(cn$c("sv"));
    this.svPaletteView_ = config.svPaletteView;
    svElem.appendChild(this.svPaletteView_.element);
    hsvElem.appendChild(svElem);
    const hElem = doc.createElement("div");
    hElem.classList.add(cn$c("h"));
    this.hPaletteView_ = config.hPaletteView;
    hElem.appendChild(this.hPaletteView_.element);
    hsvElem.appendChild(hElem);
    this.element.appendChild(hsvElem);
    const rgbElem = doc.createElement("div");
    rgbElem.classList.add(cn$c("rgb"));
    this.textsView_ = config.textsView;
    rgbElem.appendChild(this.textsView_.element);
    this.element.appendChild(rgbElem);
    if (config.alphaViews) {
      this.alphaViews_ = {
        palette: config.alphaViews.palette,
        text: config.alphaViews.text
      };
      const aElem = doc.createElement("div");
      aElem.classList.add(cn$c("a"));
      const apElem = doc.createElement("div");
      apElem.classList.add(cn$c("ap"));
      apElem.appendChild(this.alphaViews_.palette.element);
      aElem.appendChild(apElem);
      const atElem = doc.createElement("div");
      atElem.classList.add(cn$c("at"));
      atElem.appendChild(this.alphaViews_.text.element);
      aElem.appendChild(atElem);
      this.element.appendChild(aElem);
    }
  }
  get allFocusableElements() {
    const elems = [
      this.svPaletteView_.element,
      this.hPaletteView_.element,
      this.textsView_.modeSelectElement,
      ...this.textsView_.inputViews.map((v) => v.inputElement)
    ];
    if (this.alphaViews_) {
      elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
    }
    return elems;
  }
};
function parseColorType(value) {
  return value === "int" ? "int" : value === "float" ? "float" : void 0;
}
function parseColorInputParams(params) {
  return parseRecord(params, (p) => ({
    color: p.optional.object({
      alpha: p.optional.boolean,
      type: p.optional.custom(parseColorType)
    }),
    expanded: p.optional.boolean,
    picker: p.optional.custom(parsePickerLayout),
    readonly: p.optional.constant(false)
  }));
}
function getKeyScaleForColor(forAlpha) {
  return forAlpha ? 0.1 : 1;
}
function extractColorType(params) {
  var _a2;
  return (_a2 = params.color) === null || _a2 === void 0 ? void 0 : _a2.type;
}
var FloatColor = class {
  constructor(comps, mode) {
    this.type = "float";
    this.mode = mode;
    this.comps_ = constrainColorComponents(comps, mode, this.type);
  }
  getComponents(opt_mode) {
    return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), { mode: this.mode, type: this.type }, { mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const rgbComps = this.getComponents("rgb");
    return {
      r: rgbComps[0],
      g: rgbComps[1],
      b: rgbComps[2],
      a: rgbComps[3]
    };
  }
};
var TYPE_TO_CONSTRUCTOR_MAP = {
  int: (comps, mode) => new IntColor(comps, mode),
  float: (comps, mode) => new FloatColor(comps, mode)
};
function createColor(comps, mode, type) {
  return TYPE_TO_CONSTRUCTOR_MAP[type](comps, mode);
}
function isFloatColor(c) {
  return c.type === "float";
}
function isIntColor(c) {
  return c.type === "int";
}
function convertFloatToInt(cf2) {
  const comps = cf2.getComponents();
  const ms2 = getColorMaxComponents(cf2.mode, "int");
  return new IntColor([
    Math.round(mapRange(comps[0], 0, 1, 0, ms2[0])),
    Math.round(mapRange(comps[1], 0, 1, 0, ms2[1])),
    Math.round(mapRange(comps[2], 0, 1, 0, ms2[2])),
    comps[3]
  ], cf2.mode);
}
function convertIntToFloat(ci2) {
  const comps = ci2.getComponents();
  const ms2 = getColorMaxComponents(ci2.mode, "int");
  return new FloatColor([
    mapRange(comps[0], 0, ms2[0], 0, 1),
    mapRange(comps[1], 0, ms2[1], 0, 1),
    mapRange(comps[2], 0, ms2[2], 0, 1),
    comps[3]
  ], ci2.mode);
}
function mapColorType(c, type) {
  if (c.type === type) {
    return c;
  }
  if (isIntColor(c) && type === "float") {
    return convertIntToFloat(c);
  }
  if (isFloatColor(c) && type === "int") {
    return convertFloatToInt(c);
  }
  throw TpError.shouldNeverHappen();
}
function equalsStringColorFormat(f1, f2) {
  return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
}
function parseCssNumberOrPercentage(text, max) {
  const m = text.match(/^(.+)%$/);
  if (!m) {
    return Math.min(parseFloat(text), max);
  }
  return Math.min(parseFloat(m[1]) * 0.01 * max, max);
}
var ANGLE_TO_DEG_MAP = {
  deg: (angle) => angle,
  grad: (angle) => angle * 360 / 400,
  rad: (angle) => angle * 360 / (2 * Math.PI),
  turn: (angle) => angle * 360
};
function parseCssNumberOrAngle(text) {
  const m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!m) {
    return parseFloat(text);
  }
  const angle = parseFloat(m[1]);
  const unit = m[2];
  return ANGLE_TO_DEG_MAP[unit](angle);
}
function parseFunctionalRgbColorComponents(text) {
  const m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!m) {
    return null;
  }
  const comps = [
    parseCssNumberOrPercentage(m[1], 255),
    parseCssNumberOrPercentage(m[2], 255),
    parseCssNumberOrPercentage(m[3], 255)
  ];
  if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
    return null;
  }
  return comps;
}
function parseFunctionalRgbColor(text) {
  const comps = parseFunctionalRgbColorComponents(text);
  return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalRgbaColorComponents(text) {
  const m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!m) {
    return null;
  }
  const comps = [
    parseCssNumberOrPercentage(m[1], 255),
    parseCssNumberOrPercentage(m[2], 255),
    parseCssNumberOrPercentage(m[3], 255),
    parseCssNumberOrPercentage(m[4], 1)
  ];
  if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
    return null;
  }
  return comps;
}
function parseFunctionalRgbaColor(text) {
  const comps = parseFunctionalRgbaColorComponents(text);
  return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalHslColorComponents(text) {
  const m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!m) {
    return null;
  }
  const comps = [
    parseCssNumberOrAngle(m[1]),
    parseCssNumberOrPercentage(m[2], 100),
    parseCssNumberOrPercentage(m[3], 100)
  ];
  if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
    return null;
  }
  return comps;
}
function parseFunctionalHslColor(text) {
  const comps = parseFunctionalHslColorComponents(text);
  return comps ? new IntColor(comps, "hsl") : null;
}
function parseHslaColorComponents(text) {
  const m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!m) {
    return null;
  }
  const comps = [
    parseCssNumberOrAngle(m[1]),
    parseCssNumberOrPercentage(m[2], 100),
    parseCssNumberOrPercentage(m[3], 100),
    parseCssNumberOrPercentage(m[4], 1)
  ];
  if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
    return null;
  }
  return comps;
}
function parseFunctionalHslaColor(text) {
  const comps = parseHslaColorComponents(text);
  return comps ? new IntColor(comps, "hsl") : null;
}
function parseHexRgbColorComponents(text) {
  const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (mRgb) {
    return [
      parseInt(mRgb[1] + mRgb[1], 16),
      parseInt(mRgb[2] + mRgb[2], 16),
      parseInt(mRgb[3] + mRgb[3], 16)
    ];
  }
  const mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  if (mRrggbb) {
    return [
      parseInt(mRrggbb[1], 16),
      parseInt(mRrggbb[2], 16),
      parseInt(mRrggbb[3], 16)
    ];
  }
  return null;
}
function parseHexRgbColor(text) {
  const comps = parseHexRgbColorComponents(text);
  return comps ? new IntColor(comps, "rgb") : null;
}
function parseHexRgbaColorComponents(text) {
  const mRgb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (mRgb) {
    return [
      parseInt(mRgb[1] + mRgb[1], 16),
      parseInt(mRgb[2] + mRgb[2], 16),
      parseInt(mRgb[3] + mRgb[3], 16),
      mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)
    ];
  }
  const mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  if (mRrggbb) {
    return [
      parseInt(mRrggbb[1], 16),
      parseInt(mRrggbb[2], 16),
      parseInt(mRrggbb[3], 16),
      mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)
    ];
  }
  return null;
}
function parseHexRgbaColor(text) {
  const comps = parseHexRgbaColorComponents(text);
  return comps ? new IntColor(comps, "rgb") : null;
}
function parseObjectRgbColorComponents(text) {
  const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!m) {
    return null;
  }
  const comps = [
    parseFloat(m[1]),
    parseFloat(m[2]),
    parseFloat(m[3])
  ];
  if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
    return null;
  }
  return comps;
}
function createObjectRgbColorParser(type) {
  return (text) => {
    const comps = parseObjectRgbColorComponents(text);
    return comps ? createColor(comps, "rgb", type) : null;
  };
}
function parseObjectRgbaColorComponents(text) {
  const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!m) {
    return null;
  }
  const comps = [
    parseFloat(m[1]),
    parseFloat(m[2]),
    parseFloat(m[3]),
    parseFloat(m[4])
  ];
  if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
    return null;
  }
  return comps;
}
function createObjectRgbaColorParser(type) {
  return (text) => {
    const comps = parseObjectRgbaColorComponents(text);
    return comps ? createColor(comps, "rgb", type) : null;
  };
}
var PARSER_AND_RESULT = [
  {
    parser: parseHexRgbColorComponents,
    result: {
      alpha: false,
      mode: "rgb",
      notation: "hex"
    }
  },
  {
    parser: parseHexRgbaColorComponents,
    result: {
      alpha: true,
      mode: "rgb",
      notation: "hex"
    }
  },
  {
    parser: parseFunctionalRgbColorComponents,
    result: {
      alpha: false,
      mode: "rgb",
      notation: "func"
    }
  },
  {
    parser: parseFunctionalRgbaColorComponents,
    result: {
      alpha: true,
      mode: "rgb",
      notation: "func"
    }
  },
  {
    parser: parseFunctionalHslColorComponents,
    result: {
      alpha: false,
      mode: "hsl",
      notation: "func"
    }
  },
  {
    parser: parseHslaColorComponents,
    result: {
      alpha: true,
      mode: "hsl",
      notation: "func"
    }
  },
  {
    parser: parseObjectRgbColorComponents,
    result: {
      alpha: false,
      mode: "rgb",
      notation: "object"
    }
  },
  {
    parser: parseObjectRgbaColorComponents,
    result: {
      alpha: true,
      mode: "rgb",
      notation: "object"
    }
  }
];
function detectStringColor(text) {
  return PARSER_AND_RESULT.reduce((prev, { parser, result: detection }) => {
    if (prev) {
      return prev;
    }
    return parser(text) ? detection : null;
  }, null);
}
function detectStringColorFormat(text, type = "int") {
  const r = detectStringColor(text);
  if (!r) {
    return null;
  }
  if (r.notation === "hex" && type !== "float") {
    return Object.assign(Object.assign({}, r), { type: "int" });
  }
  if (r.notation === "func") {
    return Object.assign(Object.assign({}, r), { type });
  }
  return null;
}
function createColorStringParser(type) {
  const parsers = [
    parseHexRgbColor,
    parseHexRgbaColor,
    parseFunctionalRgbColor,
    parseFunctionalRgbaColor,
    parseFunctionalHslColor,
    parseFunctionalHslaColor
  ];
  if (type === "int") {
    parsers.push(createObjectRgbColorParser("int"), createObjectRgbaColorParser("int"));
  }
  if (type === "float") {
    parsers.push(createObjectRgbColorParser("float"), createObjectRgbaColorParser("float"));
  }
  const parser = composeParsers(parsers);
  return (text) => {
    const result = parser(text);
    return result ? mapColorType(result, type) : null;
  };
}
function readIntColorString(value) {
  const parser = createColorStringParser("int");
  if (typeof value !== "string") {
    return IntColor.black();
  }
  const result = parser(value);
  return result !== null && result !== void 0 ? result : IntColor.black();
}
function zerofill(comp) {
  const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
function colorToHexRgbString(value, prefix = "#") {
  const hexes = removeAlphaComponent(value.getComponents("rgb")).map(zerofill).join("");
  return `${prefix}${hexes}`;
}
function colorToHexRgbaString(value, prefix = "#") {
  const rgbaComps = value.getComponents("rgb");
  const hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255].map(zerofill).join("");
  return `${prefix}${hexes}`;
}
function colorToFunctionalRgbString(value) {
  const formatter = createNumberFormatter(0);
  const ci2 = mapColorType(value, "int");
  const comps = removeAlphaComponent(ci2.getComponents("rgb")).map((comp) => formatter(comp));
  return `rgb(${comps.join(", ")})`;
}
function colorToFunctionalRgbaString(value) {
  const aFormatter = createNumberFormatter(2);
  const rgbFormatter = createNumberFormatter(0);
  const ci2 = mapColorType(value, "int");
  const comps = ci2.getComponents("rgb").map((comp, index) => {
    const formatter = index === 3 ? aFormatter : rgbFormatter;
    return formatter(comp);
  });
  return `rgba(${comps.join(", ")})`;
}
function colorToFunctionalHslString(value) {
  const formatters = [
    createNumberFormatter(0),
    formatPercentage,
    formatPercentage
  ];
  const ci2 = mapColorType(value, "int");
  const comps = removeAlphaComponent(ci2.getComponents("hsl")).map((comp, index) => formatters[index](comp));
  return `hsl(${comps.join(", ")})`;
}
function colorToFunctionalHslaString(value) {
  const formatters = [
    createNumberFormatter(0),
    formatPercentage,
    formatPercentage,
    createNumberFormatter(2)
  ];
  const ci2 = mapColorType(value, "int");
  const comps = ci2.getComponents("hsl").map((comp, index) => formatters[index](comp));
  return `hsla(${comps.join(", ")})`;
}
function colorToObjectRgbString(value, type) {
  const formatter = createNumberFormatter(type === "float" ? 2 : 0);
  const names = ["r", "g", "b"];
  const cc2 = mapColorType(value, type);
  const comps = removeAlphaComponent(cc2.getComponents("rgb")).map((comp, index) => `${names[index]}: ${formatter(comp)}`);
  return `{${comps.join(", ")}}`;
}
function createObjectRgbColorFormatter(type) {
  return (value) => colorToObjectRgbString(value, type);
}
function colorToObjectRgbaString(value, type) {
  const aFormatter = createNumberFormatter(2);
  const rgbFormatter = createNumberFormatter(type === "float" ? 2 : 0);
  const names = ["r", "g", "b", "a"];
  const cc2 = mapColorType(value, type);
  const comps = cc2.getComponents("rgb").map((comp, index) => {
    const formatter = index === 3 ? aFormatter : rgbFormatter;
    return `${names[index]}: ${formatter(comp)}`;
  });
  return `{${comps.join(", ")}}`;
}
function createObjectRgbaColorFormatter(type) {
  return (value) => colorToObjectRgbaString(value, type);
}
var FORMAT_AND_STRINGIFIERS = [
  {
    format: {
      alpha: false,
      mode: "rgb",
      notation: "hex",
      type: "int"
    },
    stringifier: colorToHexRgbString
  },
  {
    format: {
      alpha: true,
      mode: "rgb",
      notation: "hex",
      type: "int"
    },
    stringifier: colorToHexRgbaString
  },
  {
    format: {
      alpha: false,
      mode: "rgb",
      notation: "func",
      type: "int"
    },
    stringifier: colorToFunctionalRgbString
  },
  {
    format: {
      alpha: true,
      mode: "rgb",
      notation: "func",
      type: "int"
    },
    stringifier: colorToFunctionalRgbaString
  },
  {
    format: {
      alpha: false,
      mode: "hsl",
      notation: "func",
      type: "int"
    },
    stringifier: colorToFunctionalHslString
  },
  {
    format: {
      alpha: true,
      mode: "hsl",
      notation: "func",
      type: "int"
    },
    stringifier: colorToFunctionalHslaString
  },
  ...["int", "float"].reduce((prev, type) => {
    return [
      ...prev,
      {
        format: {
          alpha: false,
          mode: "rgb",
          notation: "object",
          type
        },
        stringifier: createObjectRgbColorFormatter(type)
      },
      {
        format: {
          alpha: true,
          mode: "rgb",
          notation: "object",
          type
        },
        stringifier: createObjectRgbaColorFormatter(type)
      }
    ];
  }, [])
];
function findColorStringifier(format) {
  return FORMAT_AND_STRINGIFIERS.reduce((prev, fas) => {
    if (prev) {
      return prev;
    }
    return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
  }, null);
}
var cn$b = ClassName("apl");
var APaletteView = class {
  constructor(doc, config) {
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.value = config.value;
    this.value.emitter.on("change", this.onValueChange_);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$b());
    config.viewProps.bindClassModifiers(this.element);
    config.viewProps.bindTabIndex(this.element);
    const barElem = doc.createElement("div");
    barElem.classList.add(cn$b("b"));
    this.element.appendChild(barElem);
    const colorElem = doc.createElement("div");
    colorElem.classList.add(cn$b("c"));
    barElem.appendChild(colorElem);
    this.colorElem_ = colorElem;
    const markerElem = doc.createElement("div");
    markerElem.classList.add(cn$b("m"));
    this.element.appendChild(markerElem);
    this.markerElem_ = markerElem;
    const previewElem = doc.createElement("div");
    previewElem.classList.add(cn$b("p"));
    this.markerElem_.appendChild(previewElem);
    this.previewElem_ = previewElem;
    this.update_();
  }
  update_() {
    const c = this.value.rawValue;
    const rgbaComps = c.getComponents("rgb");
    const leftColor = new IntColor([rgbaComps[0], rgbaComps[1], rgbaComps[2], 0], "rgb");
    const rightColor = new IntColor([rgbaComps[0], rgbaComps[1], rgbaComps[2], 255], "rgb");
    const gradientComps = [
      "to right",
      colorToFunctionalRgbaString(leftColor),
      colorToFunctionalRgbaString(rightColor)
    ];
    this.colorElem_.style.background = `linear-gradient(${gradientComps.join(",")})`;
    this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
    const left = mapRange(rgbaComps[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${left}%`;
  }
  onValueChange_() {
    this.update_();
  }
};
var APaletteController = class {
  constructor(doc, config) {
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onKeyUp_ = this.onKeyUp_.bind(this);
    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new APaletteView(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    this.ptHandler_ = new PointerHandler(this.view.element);
    this.ptHandler_.emitter.on("down", this.onPointerDown_);
    this.ptHandler_.emitter.on("move", this.onPointerMove_);
    this.ptHandler_.emitter.on("up", this.onPointerUp_);
    this.view.element.addEventListener("keydown", this.onKeyDown_);
    this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(d, opts) {
    if (!d.point) {
      return;
    }
    const alpha = d.point.x / d.bounds.width;
    const c = this.value.rawValue;
    const [h, s, v] = c.getComponents("hsv");
    this.value.setRawValue(new IntColor([h, s, v, alpha], "hsv"), opts);
  }
  onPointerDown_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerMove_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerUp_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: true,
      last: true
    });
  }
  onKeyDown_(ev) {
    const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
    if (step === 0) {
      return;
    }
    const c = this.value.rawValue;
    const [h, s, v, a] = c.getComponents("hsv");
    this.value.setRawValue(new IntColor([h, s, v, a + step], "hsv"), {
      forceEmit: false,
      last: false
    });
  }
  onKeyUp_(ev) {
    const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
    if (step === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue, {
      forceEmit: true,
      last: true
    });
  }
};
var cn$a = ClassName("coltxt");
function createModeSelectElement(doc) {
  const selectElem = doc.createElement("select");
  const items = [
    { text: "RGB", value: "rgb" },
    { text: "HSL", value: "hsl" },
    { text: "HSV", value: "hsv" },
    { text: "HEX", value: "hex" }
  ];
  selectElem.appendChild(items.reduce((frag, item) => {
    const optElem = doc.createElement("option");
    optElem.textContent = item.text;
    optElem.value = item.value;
    frag.appendChild(optElem);
    return frag;
  }, doc.createDocumentFragment()));
  return selectElem;
}
var ColorTextsView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$a());
    config.viewProps.bindClassModifiers(this.element);
    const modeElem = doc.createElement("div");
    modeElem.classList.add(cn$a("m"));
    this.modeElem_ = createModeSelectElement(doc);
    this.modeElem_.classList.add(cn$a("ms"));
    modeElem.appendChild(this.modeSelectElement);
    config.viewProps.bindDisabled(this.modeElem_);
    const modeMarkerElem = doc.createElement("div");
    modeMarkerElem.classList.add(cn$a("mm"));
    modeMarkerElem.appendChild(createSvgIconElement(doc, "dropdown"));
    modeElem.appendChild(modeMarkerElem);
    this.element.appendChild(modeElem);
    const inputsElem = doc.createElement("div");
    inputsElem.classList.add(cn$a("w"));
    this.element.appendChild(inputsElem);
    this.inputsElem_ = inputsElem;
    this.inputViews_ = config.inputViews;
    this.applyInputViews_();
    bindValue(config.mode, (mode) => {
      this.modeElem_.value = mode;
    });
  }
  get modeSelectElement() {
    return this.modeElem_;
  }
  get inputViews() {
    return this.inputViews_;
  }
  set inputViews(inputViews) {
    this.inputViews_ = inputViews;
    this.applyInputViews_();
  }
  applyInputViews_() {
    removeChildElements(this.inputsElem_);
    const doc = this.element.ownerDocument;
    this.inputViews_.forEach((v) => {
      const compElem = doc.createElement("div");
      compElem.classList.add(cn$a("c"));
      compElem.appendChild(v.element);
      this.inputsElem_.appendChild(compElem);
    });
  }
};
function createFormatter$2(type) {
  return createNumberFormatter(type === "float" ? 2 : 0);
}
function createConstraint$5(mode, type, index) {
  const max = getColorMaxComponents(mode, type)[index];
  return new DefiniteRangeConstraint({
    min: 0,
    max
  });
}
function createComponentController(doc, config, index) {
  return new NumberTextController(doc, {
    arrayPosition: index === 0 ? "fst" : index === 3 - 1 ? "lst" : "mid",
    parser: config.parser,
    props: ValueMap.fromObject({
      formatter: createFormatter$2(config.colorType),
      keyScale: getKeyScaleForColor(false),
      pointerScale: config.colorType === "float" ? 0.01 : 1
    }),
    value: createValue(0, {
      constraint: createConstraint$5(config.colorMode, config.colorType, index)
    }),
    viewProps: config.viewProps
  });
}
function createComponentControllers(doc, config) {
  const cc2 = {
    colorMode: config.colorMode,
    colorType: config.colorType,
    parser: parseNumber,
    viewProps: config.viewProps
  };
  return [0, 1, 2].map((i) => {
    const c = createComponentController(doc, cc2, i);
    connectValues({
      primary: config.value,
      secondary: c.value,
      forward(p) {
        const mc2 = mapColorType(p, config.colorType);
        return mc2.getComponents(config.colorMode)[i];
      },
      backward(p, s) {
        const pickedMode = config.colorMode;
        const mc2 = mapColorType(p, config.colorType);
        const comps = mc2.getComponents(pickedMode);
        comps[i] = s;
        const c2 = createColor(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, config.colorType);
        return mapColorType(c2, "int");
      }
    });
    return c;
  });
}
function createHexController(doc, config) {
  const c = new TextController(doc, {
    parser: createColorStringParser("int"),
    props: ValueMap.fromObject({
      formatter: colorToHexRgbString
    }),
    value: createValue(IntColor.black()),
    viewProps: config.viewProps
  });
  connectValues({
    primary: config.value,
    secondary: c.value,
    forward: (p) => new IntColor(removeAlphaComponent(p.getComponents()), p.mode),
    backward: (p, s) => new IntColor(appendAlphaComponent(removeAlphaComponent(s.getComponents(p.mode)), p.getComponents()[3]), p.mode)
  });
  return [c];
}
function isColorMode(mode) {
  return mode !== "hex";
}
var ColorTextsController = class {
  constructor(doc, config) {
    this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
    this.colorType_ = config.colorType;
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.colorMode = createValue(this.value.rawValue.mode);
    this.ccs_ = this.createComponentControllers_(doc);
    this.view = new ColorTextsView(doc, {
      mode: this.colorMode,
      inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
      viewProps: this.viewProps
    });
    this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
  }
  createComponentControllers_(doc) {
    const mode = this.colorMode.rawValue;
    if (isColorMode(mode)) {
      return createComponentControllers(doc, {
        colorMode: mode,
        colorType: this.colorType_,
        value: this.value,
        viewProps: this.viewProps
      });
    }
    return createHexController(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
  }
  onModeSelectChange_(ev) {
    const selectElem = ev.currentTarget;
    this.colorMode.rawValue = selectElem.value;
    this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
    this.view.inputViews = this.ccs_.map((cc2) => cc2.view);
  }
};
var cn$9 = ClassName("hpl");
var HPaletteView = class {
  constructor(doc, config) {
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.value = config.value;
    this.value.emitter.on("change", this.onValueChange_);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$9());
    config.viewProps.bindClassModifiers(this.element);
    config.viewProps.bindTabIndex(this.element);
    const colorElem = doc.createElement("div");
    colorElem.classList.add(cn$9("c"));
    this.element.appendChild(colorElem);
    const markerElem = doc.createElement("div");
    markerElem.classList.add(cn$9("m"));
    this.element.appendChild(markerElem);
    this.markerElem_ = markerElem;
    this.update_();
  }
  update_() {
    const c = this.value.rawValue;
    const [h] = c.getComponents("hsv");
    this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new IntColor([h, 100, 100], "hsv"));
    const left = mapRange(h, 0, 360, 0, 100);
    this.markerElem_.style.left = `${left}%`;
  }
  onValueChange_() {
    this.update_();
  }
};
var HPaletteController = class {
  constructor(doc, config) {
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onKeyUp_ = this.onKeyUp_.bind(this);
    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new HPaletteView(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    this.ptHandler_ = new PointerHandler(this.view.element);
    this.ptHandler_.emitter.on("down", this.onPointerDown_);
    this.ptHandler_.emitter.on("move", this.onPointerMove_);
    this.ptHandler_.emitter.on("up", this.onPointerUp_);
    this.view.element.addEventListener("keydown", this.onKeyDown_);
    this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(d, opts) {
    if (!d.point) {
      return;
    }
    const hue = mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 360);
    const c = this.value.rawValue;
    const [, s, v, a] = c.getComponents("hsv");
    this.value.setRawValue(new IntColor([hue, s, v, a], "hsv"), opts);
  }
  onPointerDown_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerMove_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerUp_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: true,
      last: true
    });
  }
  onKeyDown_(ev) {
    const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
    if (step === 0) {
      return;
    }
    const c = this.value.rawValue;
    const [h, s, v, a] = c.getComponents("hsv");
    this.value.setRawValue(new IntColor([h + step, s, v, a], "hsv"), {
      forceEmit: false,
      last: false
    });
  }
  onKeyUp_(ev) {
    const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
    if (step === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue, {
      forceEmit: true,
      last: true
    });
  }
};
var cn$8 = ClassName("svp");
var CANVAS_RESOL = 64;
var SvPaletteView = class {
  constructor(doc, config) {
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.value = config.value;
    this.value.emitter.on("change", this.onValueChange_);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$8());
    config.viewProps.bindClassModifiers(this.element);
    config.viewProps.bindTabIndex(this.element);
    const canvasElem = doc.createElement("canvas");
    canvasElem.height = CANVAS_RESOL;
    canvasElem.width = CANVAS_RESOL;
    canvasElem.classList.add(cn$8("c"));
    this.element.appendChild(canvasElem);
    this.canvasElement = canvasElem;
    const markerElem = doc.createElement("div");
    markerElem.classList.add(cn$8("m"));
    this.element.appendChild(markerElem);
    this.markerElem_ = markerElem;
    this.update_();
  }
  update_() {
    const ctx = getCanvasContext(this.canvasElement);
    if (!ctx) {
      return;
    }
    const c = this.value.rawValue;
    const hsvComps = c.getComponents("hsv");
    const width = this.canvasElement.width;
    const height = this.canvasElement.height;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    for (let iy = 0; iy < height; iy++) {
      for (let ix = 0; ix < width; ix++) {
        const s = mapRange(ix, 0, width, 0, 100);
        const v = mapRange(iy, 0, height, 100, 0);
        const rgbComps = hsvToRgbInt(hsvComps[0], s, v);
        const i = (iy * width + ix) * 4;
        data[i] = rgbComps[0];
        data[i + 1] = rgbComps[1];
        data[i + 2] = rgbComps[2];
        data[i + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
    const left = mapRange(hsvComps[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${left}%`;
    const top = mapRange(hsvComps[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${top}%`;
  }
  onValueChange_() {
    this.update_();
  }
};
var SvPaletteController = class {
  constructor(doc, config) {
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onKeyUp_ = this.onKeyUp_.bind(this);
    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new SvPaletteView(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    this.ptHandler_ = new PointerHandler(this.view.element);
    this.ptHandler_.emitter.on("down", this.onPointerDown_);
    this.ptHandler_.emitter.on("move", this.onPointerMove_);
    this.ptHandler_.emitter.on("up", this.onPointerUp_);
    this.view.element.addEventListener("keydown", this.onKeyDown_);
    this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(d, opts) {
    if (!d.point) {
      return;
    }
    const saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
    const value = mapRange(d.point.y, 0, d.bounds.height, 100, 0);
    const [h, , , a] = this.value.rawValue.getComponents("hsv");
    this.value.setRawValue(new IntColor([h, saturation, value, a], "hsv"), opts);
  }
  onPointerDown_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerMove_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerUp_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: true,
      last: true
    });
  }
  onKeyDown_(ev) {
    if (isArrowKey(ev.key)) {
      ev.preventDefault();
    }
    const [h, s, v, a] = this.value.rawValue.getComponents("hsv");
    const keyScale = getKeyScaleForColor(false);
    const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
    const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
    if (ds === 0 && dv === 0) {
      return;
    }
    this.value.setRawValue(new IntColor([h, s + ds, v + dv, a], "hsv"), {
      forceEmit: false,
      last: false
    });
  }
  onKeyUp_(ev) {
    const keyScale = getKeyScaleForColor(false);
    const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
    const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
    if (ds === 0 && dv === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue, {
      forceEmit: true,
      last: true
    });
  }
};
var ColorPickerController = class {
  constructor(doc, config) {
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.hPaletteC_ = new HPaletteController(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    this.svPaletteC_ = new SvPaletteController(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    this.alphaIcs_ = config.supportsAlpha ? {
      palette: new APaletteController(doc, {
        value: this.value,
        viewProps: this.viewProps
      }),
      text: new NumberTextController(doc, {
        parser: parseNumber,
        props: ValueMap.fromObject({
          pointerScale: 0.01,
          keyScale: 0.1,
          formatter: createNumberFormatter(2)
        }),
        value: createValue(0, {
          constraint: new DefiniteRangeConstraint({ min: 0, max: 1 })
        }),
        viewProps: this.viewProps
      })
    } : null;
    if (this.alphaIcs_) {
      connectValues({
        primary: this.value,
        secondary: this.alphaIcs_.text.value,
        forward: (p) => p.getComponents()[3],
        backward: (p, s) => {
          const comps = p.getComponents();
          comps[3] = s;
          return new IntColor(comps, p.mode);
        }
      });
    }
    this.textsC_ = new ColorTextsController(doc, {
      colorType: config.colorType,
      value: this.value,
      viewProps: this.viewProps
    });
    this.view = new ColorPickerView(doc, {
      alphaViews: this.alphaIcs_ ? {
        palette: this.alphaIcs_.palette.view,
        text: this.alphaIcs_.text.view
      } : null,
      hPaletteView: this.hPaletteC_.view,
      supportsAlpha: config.supportsAlpha,
      svPaletteView: this.svPaletteC_.view,
      textsView: this.textsC_.view,
      viewProps: this.viewProps
    });
  }
  get textsController() {
    return this.textsC_;
  }
};
var cn$7 = ClassName("colsw");
var ColorSwatchView = class {
  constructor(doc, config) {
    this.onValueChange_ = this.onValueChange_.bind(this);
    config.value.emitter.on("change", this.onValueChange_);
    this.value = config.value;
    this.element = doc.createElement("div");
    this.element.classList.add(cn$7());
    config.viewProps.bindClassModifiers(this.element);
    const swatchElem = doc.createElement("div");
    swatchElem.classList.add(cn$7("sw"));
    this.element.appendChild(swatchElem);
    this.swatchElem_ = swatchElem;
    const buttonElem = doc.createElement("button");
    buttonElem.classList.add(cn$7("b"));
    config.viewProps.bindDisabled(buttonElem);
    this.element.appendChild(buttonElem);
    this.buttonElement = buttonElem;
    this.update_();
  }
  update_() {
    const value = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
  }
  onValueChange_() {
    this.update_();
  }
};
var ColorSwatchController = class {
  constructor(doc, config) {
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new ColorSwatchView(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
  }
};
var ColorController = class {
  constructor(doc, config) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this);
    this.onButtonClick_ = this.onButtonClick_.bind(this);
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
    this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.foldable_ = Foldable.create(config.expanded);
    this.swatchC_ = new ColorSwatchController(doc, {
      value: this.value,
      viewProps: this.viewProps
    });
    const buttonElem = this.swatchC_.view.buttonElement;
    buttonElem.addEventListener("blur", this.onButtonBlur_);
    buttonElem.addEventListener("click", this.onButtonClick_);
    this.textC_ = new TextController(doc, {
      parser: config.parser,
      props: ValueMap.fromObject({
        formatter: config.formatter
      }),
      value: this.value,
      viewProps: this.viewProps
    });
    this.view = new ColorView(doc, {
      foldable: this.foldable_,
      pickerLayout: config.pickerLayout
    });
    this.view.swatchElement.appendChild(this.swatchC_.view.element);
    this.view.textElement.appendChild(this.textC_.view.element);
    this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
      viewProps: this.viewProps
    }) : null;
    const pickerC = new ColorPickerController(doc, {
      colorType: config.colorType,
      supportsAlpha: config.supportsAlpha,
      value: this.value,
      viewProps: this.viewProps
    });
    pickerC.view.allFocusableElements.forEach((elem) => {
      elem.addEventListener("blur", this.onPopupChildBlur_);
      elem.addEventListener("keydown", this.onPopupChildKeydown_);
    });
    this.pickerC_ = pickerC;
    if (this.popC_) {
      this.view.element.appendChild(this.popC_.view.element);
      this.popC_.view.element.appendChild(pickerC.view.element);
      connectValues({
        primary: this.foldable_.value("expanded"),
        secondary: this.popC_.shows,
        forward: (p) => p,
        backward: (_, s) => s
      });
    } else if (this.view.pickerElement) {
      this.view.pickerElement.appendChild(this.pickerC_.view.element);
      bindFoldable(this.foldable_, this.view.pickerElement);
    }
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(e) {
    if (!this.popC_) {
      return;
    }
    const elem = this.view.element;
    const nextTarget = forceCast(e.relatedTarget);
    if (!nextTarget || !elem.contains(nextTarget)) {
      this.popC_.shows.rawValue = false;
    }
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded"));
    if (this.foldable_.get("expanded")) {
      this.pickerC_.view.allFocusableElements[0].focus();
    }
  }
  onPopupChildBlur_(ev) {
    if (!this.popC_) {
      return;
    }
    const elem = this.popC_.view.element;
    const nextTarget = findNextTarget(ev);
    if (nextTarget && elem.contains(nextTarget)) {
      return;
    }
    if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
      return;
    }
    this.popC_.shows.rawValue = false;
  }
  onPopupChildKeydown_(ev) {
    if (this.popC_) {
      if (ev.key === "Escape") {
        this.popC_.shows.rawValue = false;
      }
    } else if (this.view.pickerElement) {
      if (ev.key === "Escape") {
        this.swatchC_.view.buttonElement.focus();
      }
    }
  }
};
function colorToRgbNumber(value) {
  return removeAlphaComponent(value.getComponents("rgb")).reduce((result, comp) => {
    return result << 8 | Math.floor(comp) & 255;
  }, 0);
}
function colorToRgbaNumber(value) {
  return value.getComponents("rgb").reduce((result, comp, index) => {
    const hex = Math.floor(index === 3 ? comp * 255 : comp) & 255;
    return result << 8 | hex;
  }, 0) >>> 0;
}
function numberToRgbColor(num) {
  return new IntColor([num >> 16 & 255, num >> 8 & 255, num & 255], "rgb");
}
function numberToRgbaColor(num) {
  return new IntColor([
    num >> 24 & 255,
    num >> 16 & 255,
    num >> 8 & 255,
    mapRange(num & 255, 0, 255, 0, 1)
  ], "rgb");
}
function colorFromRgbNumber(value) {
  if (typeof value !== "number") {
    return IntColor.black();
  }
  return numberToRgbColor(value);
}
function colorFromRgbaNumber(value) {
  if (typeof value !== "number") {
    return IntColor.black();
  }
  return numberToRgbaColor(value);
}
function isRgbColorComponent(obj, key) {
  if (typeof obj !== "object" || isEmpty(obj)) {
    return false;
  }
  return key in obj && typeof obj[key] === "number";
}
function isRgbColorObject(obj) {
  return isRgbColorComponent(obj, "r") && isRgbColorComponent(obj, "g") && isRgbColorComponent(obj, "b");
}
function isRgbaColorObject(obj) {
  return isRgbColorObject(obj) && isRgbColorComponent(obj, "a");
}
function isColorObject(obj) {
  return isRgbColorObject(obj);
}
function equalsColor(v1, v2) {
  if (v1.mode !== v2.mode) {
    return false;
  }
  if (v1.type !== v2.type) {
    return false;
  }
  const comps1 = v1.getComponents();
  const comps2 = v2.getComponents();
  for (let i = 0; i < comps1.length; i++) {
    if (comps1[i] !== comps2[i]) {
      return false;
    }
  }
  return true;
}
function createColorComponentsFromRgbObject(obj) {
  return "a" in obj ? [obj.r, obj.g, obj.b, obj.a] : [obj.r, obj.g, obj.b];
}
function createColorStringWriter(format) {
  const stringify = findColorStringifier(format);
  return stringify ? (target, value) => {
    writePrimitive(target, stringify(value));
  } : null;
}
function createColorNumberWriter(supportsAlpha) {
  const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
  return (target, value) => {
    writePrimitive(target, colorToNumber(value));
  };
}
function writeRgbaColorObject(target, value, type) {
  const cc2 = mapColorType(value, type);
  const obj = cc2.toRgbaObject();
  target.writeProperty("r", obj.r);
  target.writeProperty("g", obj.g);
  target.writeProperty("b", obj.b);
  target.writeProperty("a", obj.a);
}
function writeRgbColorObject(target, value, type) {
  const cc2 = mapColorType(value, type);
  const obj = cc2.toRgbaObject();
  target.writeProperty("r", obj.r);
  target.writeProperty("g", obj.g);
  target.writeProperty("b", obj.b);
}
function createColorObjectWriter(supportsAlpha, type) {
  return (target, inValue) => {
    if (supportsAlpha) {
      writeRgbaColorObject(target, inValue, type);
    } else {
      writeRgbColorObject(target, inValue, type);
    }
  };
}
function shouldSupportAlpha$1(inputParams) {
  var _a2;
  if ((_a2 = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a2 === void 0 ? void 0 : _a2.alpha) {
    return true;
  }
  return false;
}
function createFormatter$1(supportsAlpha) {
  return supportsAlpha ? (v) => colorToHexRgbaString(v, "0x") : (v) => colorToHexRgbString(v, "0x");
}
function isForColor(params) {
  if ("color" in params) {
    return true;
  }
  if (params.view === "color") {
    return true;
  }
  return false;
}
var NumberColorInputPlugin = createPlugin({
  id: "input-color-number",
  type: "input",
  accept: (value, params) => {
    if (typeof value !== "number") {
      return null;
    }
    if (!isForColor(params)) {
      return null;
    }
    const result = parseColorInputParams(params);
    return result ? {
      initialValue: value,
      params: Object.assign(Object.assign({}, result), { supportsAlpha: shouldSupportAlpha$1(params) })
    } : null;
  },
  binding: {
    reader: (args) => {
      return args.params.supportsAlpha ? colorFromRgbaNumber : colorFromRgbNumber;
    },
    equals: equalsColor,
    writer: (args) => {
      return createColorNumberWriter(args.params.supportsAlpha);
    }
  },
  controller: (args) => {
    var _a2, _b;
    return new ColorController(args.document, {
      colorType: "int",
      expanded: (_a2 = args.params.expanded) !== null && _a2 !== void 0 ? _a2 : false,
      formatter: createFormatter$1(args.params.supportsAlpha),
      parser: createColorStringParser("int"),
      pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
      supportsAlpha: args.params.supportsAlpha,
      value: args.value,
      viewProps: args.viewProps
    });
  }
});
function colorFromObject(value, type) {
  if (!isColorObject(value)) {
    return mapColorType(IntColor.black(), type);
  }
  if (type === "int") {
    const comps = createColorComponentsFromRgbObject(value);
    return new IntColor(comps, "rgb");
  }
  if (type === "float") {
    const comps = createColorComponentsFromRgbObject(value);
    return new FloatColor(comps, "rgb");
  }
  return mapColorType(IntColor.black(), "int");
}
function shouldSupportAlpha(initialValue) {
  return isRgbaColorObject(initialValue);
}
function createColorObjectBindingReader(type) {
  return (value) => {
    const c = colorFromObject(value, type);
    return mapColorType(c, "int");
  };
}
function createColorObjectFormatter(supportsAlpha, type) {
  return (value) => {
    if (supportsAlpha) {
      return colorToObjectRgbaString(value, type);
    }
    return colorToObjectRgbString(value, type);
  };
}
var ObjectColorInputPlugin = createPlugin({
  id: "input-color-object",
  type: "input",
  accept: (value, params) => {
    var _a2;
    if (!isColorObject(value)) {
      return null;
    }
    const result = parseColorInputParams(params);
    return result ? {
      initialValue: value,
      params: Object.assign(Object.assign({}, result), { colorType: (_a2 = extractColorType(params)) !== null && _a2 !== void 0 ? _a2 : "int" })
    } : null;
  },
  binding: {
    reader: (args) => createColorObjectBindingReader(args.params.colorType),
    equals: equalsColor,
    writer: (args) => createColorObjectWriter(shouldSupportAlpha(args.initialValue), args.params.colorType)
  },
  controller: (args) => {
    var _a2, _b;
    const supportsAlpha = isRgbaColorObject(args.initialValue);
    return new ColorController(args.document, {
      colorType: args.params.colorType,
      expanded: (_a2 = args.params.expanded) !== null && _a2 !== void 0 ? _a2 : false,
      formatter: createColorObjectFormatter(supportsAlpha, args.params.colorType),
      parser: createColorStringParser("int"),
      pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
      supportsAlpha,
      value: args.value,
      viewProps: args.viewProps
    });
  }
});
var StringColorInputPlugin = createPlugin({
  id: "input-color-string",
  type: "input",
  accept: (value, params) => {
    if (typeof value !== "string") {
      return null;
    }
    if (params.view === "text") {
      return null;
    }
    const format = detectStringColorFormat(value, extractColorType(params));
    if (!format) {
      return null;
    }
    const stringifier = findColorStringifier(format);
    if (!stringifier) {
      return null;
    }
    const result = parseColorInputParams(params);
    return result ? {
      initialValue: value,
      params: Object.assign(Object.assign({}, result), { format, stringifier })
    } : null;
  },
  binding: {
    reader: () => readIntColorString,
    equals: equalsColor,
    writer: (args) => {
      const writer = createColorStringWriter(args.params.format);
      if (!writer) {
        throw TpError.notBindable();
      }
      return writer;
    }
  },
  controller: (args) => {
    var _a2, _b;
    return new ColorController(args.document, {
      colorType: args.params.format.type,
      expanded: (_a2 = args.params.expanded) !== null && _a2 !== void 0 ? _a2 : false,
      formatter: args.params.stringifier,
      parser: createColorStringParser("int"),
      pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
      supportsAlpha: args.params.format.alpha,
      value: args.value,
      viewProps: args.viewProps
    });
  }
});
var PointNdConstraint = class {
  constructor(config) {
    this.components = config.components;
    this.asm_ = config.assembly;
  }
  constrain(value) {
    const comps = this.asm_.toComponents(value).map((comp, index) => {
      var _a2, _b;
      return (_b = (_a2 = this.components[index]) === null || _a2 === void 0 ? void 0 : _a2.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
    });
    return this.asm_.fromComponents(comps);
  }
};
var cn$6 = ClassName("pndtxt");
var PointNdTextView = class {
  constructor(doc, config) {
    this.textViews = config.textViews;
    this.element = doc.createElement("div");
    this.element.classList.add(cn$6());
    this.textViews.forEach((v) => {
      const axisElem = doc.createElement("div");
      axisElem.classList.add(cn$6("a"));
      axisElem.appendChild(v.element);
      this.element.appendChild(axisElem);
    });
  }
};
function createAxisController(doc, config, index) {
  return new NumberTextController(doc, {
    arrayPosition: index === 0 ? "fst" : index === config.axes.length - 1 ? "lst" : "mid",
    parser: config.parser,
    props: config.axes[index].textProps,
    value: createValue(0, {
      constraint: config.axes[index].constraint
    }),
    viewProps: config.viewProps
  });
}
var PointNdTextController = class {
  constructor(doc, config) {
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.acs_ = config.axes.map((_, index) => createAxisController(doc, config, index));
    this.acs_.forEach((c, index) => {
      connectValues({
        primary: this.value,
        secondary: c.value,
        forward: (p) => config.assembly.toComponents(p)[index],
        backward: (p, s) => {
          const comps = config.assembly.toComponents(p);
          comps[index] = s;
          return config.assembly.fromComponents(comps);
        }
      });
    });
    this.view = new PointNdTextView(doc, {
      textViews: this.acs_.map((ac) => ac.view)
    });
  }
  get textControllers() {
    return this.acs_;
  }
};
var SliderInputBindingApi = class extends BindingApi {
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(max) {
    this.controller.valueController.sliderController.props.set("max", max);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(max) {
    this.controller.valueController.sliderController.props.set("min", max);
  }
};
function createConstraint$4(params, initialValue) {
  const constraints = [];
  const sc = createStepConstraint(params, initialValue);
  if (sc) {
    constraints.push(sc);
  }
  const rc = createRangeConstraint(params);
  if (rc) {
    constraints.push(rc);
  }
  const lc2 = createListConstraint(params.options);
  if (lc2) {
    constraints.push(lc2);
  }
  return new CompositeConstraint(constraints);
}
var NumberInputPlugin = createPlugin({
  id: "input-number",
  type: "input",
  accept: (value, params) => {
    if (typeof value !== "number") {
      return null;
    }
    const result = parseRecord(params, (p) => Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), { options: p.optional.custom(parseListOptions), readonly: p.optional.constant(false) }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => numberFromUnknown,
    constraint: (args) => createConstraint$4(args.params, args.initialValue),
    writer: (_args) => writePrimitive
  },
  controller: (args) => {
    const value = args.value;
    const c = args.constraint;
    const lc2 = c && findConstraint(c, ListConstraint);
    if (lc2) {
      return new ListController(args.document, {
        props: new ValueMap({
          options: lc2.values.value("options")
        }),
        value,
        viewProps: args.viewProps
      });
    }
    const textPropsObj = createNumberTextPropsObject(args.params, value.rawValue);
    const drc = c && findConstraint(c, DefiniteRangeConstraint);
    if (drc) {
      return new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps(Object.assign(Object.assign({}, textPropsObj), { keyScale: createValue(textPropsObj.keyScale), max: drc.values.value("max"), min: drc.values.value("min") }))), { parser: parseNumber, value, viewProps: args.viewProps }));
    }
    return new NumberTextController(args.document, {
      parser: parseNumber,
      props: ValueMap.fromObject(textPropsObj),
      value,
      viewProps: args.viewProps
    });
  },
  api(args) {
    if (typeof args.controller.value.rawValue !== "number") {
      return null;
    }
    if (args.controller.valueController instanceof SliderTextController) {
      return new SliderInputBindingApi(args.controller);
    }
    if (args.controller.valueController instanceof ListController) {
      return new ListInputBindingApi(args.controller);
    }
    return null;
  }
});
var Point2d = class {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(obj) {
    if (isEmpty(obj)) {
      return false;
    }
    const x = obj.x;
    const y = obj.y;
    if (typeof x !== "number" || typeof y !== "number") {
      return false;
    }
    return true;
  }
  static equals(v1, v2) {
    return v1.x === v2.x && v1.y === v2.y;
  }
  toObject() {
    return {
      x: this.x,
      y: this.y
    };
  }
};
var Point2dAssembly = {
  toComponents: (p) => p.getComponents(),
  fromComponents: (comps) => new Point2d(...comps)
};
var cn$5 = ClassName("p2d");
var Point2dView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn$5());
    config.viewProps.bindClassModifiers(this.element);
    bindValue(config.expanded, valueToClassName(this.element, cn$5(void 0, "expanded")));
    const headElem = doc.createElement("div");
    headElem.classList.add(cn$5("h"));
    this.element.appendChild(headElem);
    const buttonElem = doc.createElement("button");
    buttonElem.classList.add(cn$5("b"));
    buttonElem.appendChild(createSvgIconElement(doc, "p2dpad"));
    config.viewProps.bindDisabled(buttonElem);
    headElem.appendChild(buttonElem);
    this.buttonElement = buttonElem;
    const textElem = doc.createElement("div");
    textElem.classList.add(cn$5("t"));
    headElem.appendChild(textElem);
    this.textElement = textElem;
    if (config.pickerLayout === "inline") {
      const pickerElem = doc.createElement("div");
      pickerElem.classList.add(cn$5("p"));
      this.element.appendChild(pickerElem);
      this.pickerElement = pickerElem;
    } else {
      this.pickerElement = null;
    }
  }
};
var cn$4 = ClassName("p2dp");
var Point2dPickerView = class {
  constructor(doc, config) {
    this.onFoldableChange_ = this.onFoldableChange_.bind(this);
    this.onPropsChange_ = this.onPropsChange_.bind(this);
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.props_ = config.props;
    this.props_.emitter.on("change", this.onPropsChange_);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$4());
    if (config.layout === "popup") {
      this.element.classList.add(cn$4(void 0, "p"));
    }
    config.viewProps.bindClassModifiers(this.element);
    const padElem = doc.createElement("div");
    padElem.classList.add(cn$4("p"));
    config.viewProps.bindTabIndex(padElem);
    this.element.appendChild(padElem);
    this.padElement = padElem;
    const svgElem = doc.createElementNS(SVG_NS, "svg");
    svgElem.classList.add(cn$4("g"));
    this.padElement.appendChild(svgElem);
    this.svgElem_ = svgElem;
    const xAxisElem = doc.createElementNS(SVG_NS, "line");
    xAxisElem.classList.add(cn$4("ax"));
    xAxisElem.setAttributeNS(null, "x1", "0");
    xAxisElem.setAttributeNS(null, "y1", "50%");
    xAxisElem.setAttributeNS(null, "x2", "100%");
    xAxisElem.setAttributeNS(null, "y2", "50%");
    this.svgElem_.appendChild(xAxisElem);
    const yAxisElem = doc.createElementNS(SVG_NS, "line");
    yAxisElem.classList.add(cn$4("ax"));
    yAxisElem.setAttributeNS(null, "x1", "50%");
    yAxisElem.setAttributeNS(null, "y1", "0");
    yAxisElem.setAttributeNS(null, "x2", "50%");
    yAxisElem.setAttributeNS(null, "y2", "100%");
    this.svgElem_.appendChild(yAxisElem);
    const lineElem = doc.createElementNS(SVG_NS, "line");
    lineElem.classList.add(cn$4("l"));
    lineElem.setAttributeNS(null, "x1", "50%");
    lineElem.setAttributeNS(null, "y1", "50%");
    this.svgElem_.appendChild(lineElem);
    this.lineElem_ = lineElem;
    const markerElem = doc.createElement("div");
    markerElem.classList.add(cn$4("m"));
    this.padElement.appendChild(markerElem);
    this.markerElem_ = markerElem;
    config.value.emitter.on("change", this.onValueChange_);
    this.value = config.value;
    this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [x, y] = this.value.rawValue.getComponents();
    const max = this.props_.get("max");
    const px = mapRange(x, -max, +max, 0, 100);
    const py = mapRange(y, -max, +max, 0, 100);
    const ipy = this.props_.get("invertsY") ? 100 - py : py;
    this.lineElem_.setAttributeNS(null, "x2", `${px}%`);
    this.lineElem_.setAttributeNS(null, "y2", `${ipy}%`);
    this.markerElem_.style.left = `${px}%`;
    this.markerElem_.style.top = `${ipy}%`;
  }
  onValueChange_() {
    this.update_();
  }
  onPropsChange_() {
    this.update_();
  }
  onFoldableChange_() {
    this.update_();
  }
};
function computeOffset(ev, keyScales, invertsY) {
  return [
    getStepForKey(keyScales[0], getHorizontalStepKeys(ev)),
    getStepForKey(keyScales[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)
  ];
}
var Point2dPickerController = class {
  constructor(doc, config) {
    this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
    this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.props = config.props;
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new Point2dPickerView(doc, {
      layout: config.layout,
      props: this.props,
      value: this.value,
      viewProps: this.viewProps
    });
    this.ptHandler_ = new PointerHandler(this.view.padElement);
    this.ptHandler_.emitter.on("down", this.onPointerDown_);
    this.ptHandler_.emitter.on("move", this.onPointerMove_);
    this.ptHandler_.emitter.on("up", this.onPointerUp_);
    this.view.padElement.addEventListener("keydown", this.onPadKeyDown_);
    this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
  }
  handlePointerEvent_(d, opts) {
    if (!d.point) {
      return;
    }
    const max = this.props.get("max");
    const px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
    const py = mapRange(this.props.get("invertsY") ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
    this.value.setRawValue(new Point2d(px, py), opts);
  }
  onPointerDown_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerMove_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: false,
      last: false
    });
  }
  onPointerUp_(ev) {
    this.handlePointerEvent_(ev.data, {
      forceEmit: true,
      last: true
    });
  }
  onPadKeyDown_(ev) {
    if (isArrowKey(ev.key)) {
      ev.preventDefault();
    }
    const [dx, dy] = computeOffset(ev, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    if (dx === 0 && dy === 0) {
      return;
    }
    this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
      forceEmit: false,
      last: false
    });
  }
  onPadKeyUp_(ev) {
    const [dx, dy] = computeOffset(ev, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    if (dx === 0 && dy === 0) {
      return;
    }
    this.value.setRawValue(this.value.rawValue, {
      forceEmit: true,
      last: true
    });
  }
};
var Point2dController = class {
  constructor(doc, config) {
    var _a2, _b;
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
    this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
    this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
    this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.foldable_ = Foldable.create(config.expanded);
    this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
      viewProps: this.viewProps
    }) : null;
    const padC = new Point2dPickerController(doc, {
      layout: config.pickerLayout,
      props: new ValueMap({
        invertsY: createValue(config.invertsY),
        max: createValue(config.max),
        xKeyScale: config.axes[0].textProps.value("keyScale"),
        yKeyScale: config.axes[1].textProps.value("keyScale")
      }),
      value: this.value,
      viewProps: this.viewProps
    });
    padC.view.allFocusableElements.forEach((elem) => {
      elem.addEventListener("blur", this.onPopupChildBlur_);
      elem.addEventListener("keydown", this.onPopupChildKeydown_);
    });
    this.pickerC_ = padC;
    this.textC_ = new PointNdTextController(doc, {
      assembly: Point2dAssembly,
      axes: config.axes,
      parser: config.parser,
      value: this.value,
      viewProps: this.viewProps
    });
    this.view = new Point2dView(doc, {
      expanded: this.foldable_.value("expanded"),
      pickerLayout: config.pickerLayout,
      viewProps: this.viewProps
    });
    this.view.textElement.appendChild(this.textC_.view.element);
    (_a2 = this.view.buttonElement) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("blur", this.onPadButtonBlur_);
    (_b = this.view.buttonElement) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.onPadButtonClick_);
    if (this.popC_) {
      this.view.element.appendChild(this.popC_.view.element);
      this.popC_.view.element.appendChild(this.pickerC_.view.element);
      connectValues({
        primary: this.foldable_.value("expanded"),
        secondary: this.popC_.shows,
        forward: (p) => p,
        backward: (_, s) => s
      });
    } else if (this.view.pickerElement) {
      this.view.pickerElement.appendChild(this.pickerC_.view.element);
      bindFoldable(this.foldable_, this.view.pickerElement);
    }
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(e) {
    if (!this.popC_) {
      return;
    }
    const elem = this.view.element;
    const nextTarget = forceCast(e.relatedTarget);
    if (!nextTarget || !elem.contains(nextTarget)) {
      this.popC_.shows.rawValue = false;
    }
  }
  onPadButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded"));
    if (this.foldable_.get("expanded")) {
      this.pickerC_.view.allFocusableElements[0].focus();
    }
  }
  onPopupChildBlur_(ev) {
    if (!this.popC_) {
      return;
    }
    const elem = this.popC_.view.element;
    const nextTarget = findNextTarget(ev);
    if (nextTarget && elem.contains(nextTarget)) {
      return;
    }
    if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
      return;
    }
    this.popC_.shows.rawValue = false;
  }
  onPopupChildKeydown_(ev) {
    if (this.popC_) {
      if (ev.key === "Escape") {
        this.popC_.shows.rawValue = false;
      }
    } else if (this.view.pickerElement) {
      if (ev.key === "Escape") {
        this.view.buttonElement.focus();
      }
    }
  }
};
function point2dFromUnknown(value) {
  return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
}
function writePoint2d(target, value) {
  target.writeProperty("x", value.x);
  target.writeProperty("y", value.y);
}
function createConstraint$3(params, initialValue) {
  return new PointNdConstraint({
    assembly: Point2dAssembly,
    components: [
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y)
    ]
  });
}
function getSuitableMaxDimensionValue(params, rawValue) {
  var _a2, _b;
  if (!isEmpty(params.min) || !isEmpty(params.max)) {
    return Math.max(Math.abs((_a2 = params.min) !== null && _a2 !== void 0 ? _a2 : 0), Math.abs((_b = params.max) !== null && _b !== void 0 ? _b : 0));
  }
  const step = getSuitableKeyScale(params);
  return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
}
function getSuitableMax(params, initialValue) {
  var _a2, _b;
  const xr2 = getSuitableMaxDimensionValue(deepMerge(params, (_a2 = params.x) !== null && _a2 !== void 0 ? _a2 : {}), initialValue.x);
  const yr2 = getSuitableMaxDimensionValue(deepMerge(params, (_b = params.y) !== null && _b !== void 0 ? _b : {}), initialValue.y);
  return Math.max(xr2, yr2);
}
function shouldInvertY(params) {
  if (!("y" in params)) {
    return false;
  }
  const yParams = params.y;
  if (!yParams) {
    return false;
  }
  return "inverted" in yParams ? !!yParams.inverted : false;
}
var Point2dInputPlugin = createPlugin({
  id: "input-point2d",
  type: "input",
  accept: (value, params) => {
    if (!Point2d.isObject(value)) {
      return null;
    }
    const result = parseRecord(params, (p) => Object.assign(Object.assign({}, createPointDimensionParser(p)), { expanded: p.optional.boolean, picker: p.optional.custom(parsePickerLayout), readonly: p.optional.constant(false), x: p.optional.custom(parsePointDimensionParams), y: p.optional.object(Object.assign(Object.assign({}, createPointDimensionParser(p)), { inverted: p.optional.boolean })) }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: () => point2dFromUnknown,
    constraint: (args) => createConstraint$3(args.params, args.initialValue),
    equals: Point2d.equals,
    writer: () => writePoint2d
  },
  controller: (args) => {
    var _a2, _b;
    const doc = args.document;
    const value = args.value;
    const c = args.constraint;
    const dParams = [args.params.x, args.params.y];
    return new Point2dController(doc, {
      axes: value.rawValue.getComponents().map((comp, i) => {
        var _a3;
        return createPointAxis({
          constraint: c.components[i],
          initialValue: comp,
          params: deepMerge(args.params, (_a3 = dParams[i]) !== null && _a3 !== void 0 ? _a3 : {})
        });
      }),
      expanded: (_a2 = args.params.expanded) !== null && _a2 !== void 0 ? _a2 : false,
      invertsY: shouldInvertY(args.params),
      max: getSuitableMax(args.params, value.rawValue),
      parser: parseNumber,
      pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
      value,
      viewProps: args.viewProps
    });
  }
});
var Point3d = class {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(obj) {
    if (isEmpty(obj)) {
      return false;
    }
    const x = obj.x;
    const y = obj.y;
    const z = obj.z;
    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
      return false;
    }
    return true;
  }
  static equals(v1, v2) {
    return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
  }
  toObject() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    };
  }
};
var Point3dAssembly = {
  toComponents: (p) => p.getComponents(),
  fromComponents: (comps) => new Point3d(...comps)
};
function point3dFromUnknown(value) {
  return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
}
function writePoint3d(target, value) {
  target.writeProperty("x", value.x);
  target.writeProperty("y", value.y);
  target.writeProperty("z", value.z);
}
function createConstraint$2(params, initialValue) {
  return new PointNdConstraint({
    assembly: Point3dAssembly,
    components: [
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z)
    ]
  });
}
var Point3dInputPlugin = createPlugin({
  id: "input-point3d",
  type: "input",
  accept: (value, params) => {
    if (!Point3d.isObject(value)) {
      return null;
    }
    const result = parseRecord(params, (p) => Object.assign(Object.assign({}, createPointDimensionParser(p)), { readonly: p.optional.constant(false), x: p.optional.custom(parsePointDimensionParams), y: p.optional.custom(parsePointDimensionParams), z: p.optional.custom(parsePointDimensionParams) }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => point3dFromUnknown,
    constraint: (args) => createConstraint$2(args.params, args.initialValue),
    equals: Point3d.equals,
    writer: (_args) => writePoint3d
  },
  controller: (args) => {
    const value = args.value;
    const c = args.constraint;
    const dParams = [args.params.x, args.params.y, args.params.z];
    return new PointNdTextController(args.document, {
      assembly: Point3dAssembly,
      axes: value.rawValue.getComponents().map((comp, i) => {
        var _a2;
        return createPointAxis({
          constraint: c.components[i],
          initialValue: comp,
          params: deepMerge(args.params, (_a2 = dParams[i]) !== null && _a2 !== void 0 ? _a2 : {})
        });
      }),
      parser: parseNumber,
      value,
      viewProps: args.viewProps
    });
  }
});
var Point4d = class {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(obj) {
    if (isEmpty(obj)) {
      return false;
    }
    const x = obj.x;
    const y = obj.y;
    const z = obj.z;
    const w = obj.w;
    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof w !== "number") {
      return false;
    }
    return true;
  }
  static equals(v1, v2) {
    return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
  }
  toObject() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      w: this.w
    };
  }
};
var Point4dAssembly = {
  toComponents: (p) => p.getComponents(),
  fromComponents: (comps) => new Point4d(...comps)
};
function point4dFromUnknown(value) {
  return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
}
function writePoint4d(target, value) {
  target.writeProperty("x", value.x);
  target.writeProperty("y", value.y);
  target.writeProperty("z", value.z);
  target.writeProperty("w", value.w);
}
function createConstraint$1(params, initialValue) {
  return new PointNdConstraint({
    assembly: Point4dAssembly,
    components: [
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z),
      createDimensionConstraint(Object.assign(Object.assign({}, params), params.w), initialValue.w)
    ]
  });
}
var Point4dInputPlugin = createPlugin({
  id: "input-point4d",
  type: "input",
  accept: (value, params) => {
    if (!Point4d.isObject(value)) {
      return null;
    }
    const result = parseRecord(params, (p) => Object.assign(Object.assign({}, createPointDimensionParser(p)), { readonly: p.optional.constant(false), w: p.optional.custom(parsePointDimensionParams), x: p.optional.custom(parsePointDimensionParams), y: p.optional.custom(parsePointDimensionParams), z: p.optional.custom(parsePointDimensionParams) }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => point4dFromUnknown,
    constraint: (args) => createConstraint$1(args.params, args.initialValue),
    equals: Point4d.equals,
    writer: (_args) => writePoint4d
  },
  controller: (args) => {
    const value = args.value;
    const c = args.constraint;
    const dParams = [
      args.params.x,
      args.params.y,
      args.params.z,
      args.params.w
    ];
    return new PointNdTextController(args.document, {
      assembly: Point4dAssembly,
      axes: value.rawValue.getComponents().map((comp, i) => {
        var _a2;
        return createPointAxis({
          constraint: c.components[i],
          initialValue: comp,
          params: deepMerge(args.params, (_a2 = dParams[i]) !== null && _a2 !== void 0 ? _a2 : {})
        });
      }),
      parser: parseNumber,
      value,
      viewProps: args.viewProps
    });
  }
});
function createConstraint(params) {
  const constraints = [];
  const lc2 = createListConstraint(params.options);
  if (lc2) {
    constraints.push(lc2);
  }
  return new CompositeConstraint(constraints);
}
var StringInputPlugin = createPlugin({
  id: "input-string",
  type: "input",
  accept: (value, params) => {
    if (typeof value !== "string") {
      return null;
    }
    const result = parseRecord(params, (p) => ({
      readonly: p.optional.constant(false),
      options: p.optional.custom(parseListOptions)
    }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => stringFromUnknown,
    constraint: (args) => createConstraint(args.params),
    writer: (_args) => writePrimitive
  },
  controller: (args) => {
    const doc = args.document;
    const value = args.value;
    const c = args.constraint;
    const lc2 = c && findConstraint(c, ListConstraint);
    if (lc2) {
      return new ListController(doc, {
        props: new ValueMap({
          options: lc2.values.value("options")
        }),
        value,
        viewProps: args.viewProps
      });
    }
    return new TextController(doc, {
      parser: (v) => v,
      props: ValueMap.fromObject({
        formatter: formatString
      }),
      value,
      viewProps: args.viewProps
    });
  },
  api(args) {
    if (typeof args.controller.value.rawValue !== "string") {
      return null;
    }
    if (args.controller.valueController instanceof ListController) {
      return new ListInputBindingApi(args.controller);
    }
    return null;
  }
});
var Constants = {
  monitor: {
    defaultInterval: 200,
    defaultRows: 3
  }
};
var cn$3 = ClassName("mll");
var MultiLogView = class {
  constructor(doc, config) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this);
    this.formatter_ = config.formatter;
    this.element = doc.createElement("div");
    this.element.classList.add(cn$3());
    config.viewProps.bindClassModifiers(this.element);
    const textareaElem = doc.createElement("textarea");
    textareaElem.classList.add(cn$3("i"));
    textareaElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
    textareaElem.readOnly = true;
    config.viewProps.bindDisabled(textareaElem);
    this.element.appendChild(textareaElem);
    this.textareaElem_ = textareaElem;
    config.value.emitter.on("change", this.onValueUpdate_);
    this.value = config.value;
    this.update_();
  }
  update_() {
    const elem = this.textareaElem_;
    const shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
    const lines = [];
    this.value.rawValue.forEach((value) => {
      if (value !== void 0) {
        lines.push(this.formatter_(value));
      }
    });
    elem.textContent = lines.join("\n");
    if (shouldScroll) {
      elem.scrollTop = elem.scrollHeight;
    }
  }
  onValueUpdate_() {
    this.update_();
  }
};
var MultiLogController = class {
  constructor(doc, config) {
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new MultiLogView(doc, {
      formatter: config.formatter,
      rows: config.rows,
      value: this.value,
      viewProps: this.viewProps
    });
  }
};
var cn$2 = ClassName("sgl");
var SingleLogView = class {
  constructor(doc, config) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this);
    this.formatter_ = config.formatter;
    this.element = doc.createElement("div");
    this.element.classList.add(cn$2());
    config.viewProps.bindClassModifiers(this.element);
    const inputElem = doc.createElement("input");
    inputElem.classList.add(cn$2("i"));
    inputElem.readOnly = true;
    inputElem.type = "text";
    config.viewProps.bindDisabled(inputElem);
    this.element.appendChild(inputElem);
    this.inputElement = inputElem;
    config.value.emitter.on("change", this.onValueUpdate_);
    this.value = config.value;
    this.update_();
  }
  update_() {
    const values = this.value.rawValue;
    const lastValue = values[values.length - 1];
    this.inputElement.value = lastValue !== void 0 ? this.formatter_(lastValue) : "";
  }
  onValueUpdate_() {
    this.update_();
  }
};
var SingleLogController = class {
  constructor(doc, config) {
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.view = new SingleLogView(doc, {
      formatter: config.formatter,
      value: this.value,
      viewProps: this.viewProps
    });
  }
};
var BooleanMonitorPlugin = createPlugin({
  id: "monitor-bool",
  type: "monitor",
  accept: (value, params) => {
    if (typeof value !== "boolean") {
      return null;
    }
    const result = parseRecord(params, (p) => ({
      readonly: p.required.constant(true),
      rows: p.optional.number
    }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => boolFromUnknown
  },
  controller: (args) => {
    var _a2;
    if (args.value.rawValue.length === 1) {
      return new SingleLogController(args.document, {
        formatter: BooleanFormatter,
        value: args.value,
        viewProps: args.viewProps
      });
    }
    return new MultiLogController(args.document, {
      formatter: BooleanFormatter,
      rows: (_a2 = args.params.rows) !== null && _a2 !== void 0 ? _a2 : Constants.monitor.defaultRows,
      value: args.value,
      viewProps: args.viewProps
    });
  }
});
var GraphLogMonitorBindingApi = class extends BindingApi {
  get max() {
    return this.controller.valueController.props.get("max");
  }
  set max(max) {
    this.controller.valueController.props.set("max", max);
  }
  get min() {
    return this.controller.valueController.props.get("min");
  }
  set min(min) {
    this.controller.valueController.props.set("min", min);
  }
};
var cn$1 = ClassName("grl");
var GraphLogView = class {
  constructor(doc, config) {
    this.onCursorChange_ = this.onCursorChange_.bind(this);
    this.onValueUpdate_ = this.onValueUpdate_.bind(this);
    this.element = doc.createElement("div");
    this.element.classList.add(cn$1());
    config.viewProps.bindClassModifiers(this.element);
    this.formatter_ = config.formatter;
    this.props_ = config.props;
    this.cursor_ = config.cursor;
    this.cursor_.emitter.on("change", this.onCursorChange_);
    const svgElem = doc.createElementNS(SVG_NS, "svg");
    svgElem.classList.add(cn$1("g"));
    svgElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
    this.element.appendChild(svgElem);
    this.svgElem_ = svgElem;
    const lineElem = doc.createElementNS(SVG_NS, "polyline");
    this.svgElem_.appendChild(lineElem);
    this.lineElem_ = lineElem;
    const tooltipElem = doc.createElement("div");
    tooltipElem.classList.add(cn$1("t"), ClassName("tt")());
    this.element.appendChild(tooltipElem);
    this.tooltipElem_ = tooltipElem;
    config.value.emitter.on("change", this.onValueUpdate_);
    this.value = config.value;
    this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const { clientWidth: w, clientHeight: h } = this.element;
    const maxIndex = this.value.rawValue.length - 1;
    const min = this.props_.get("min");
    const max = this.props_.get("max");
    const points = [];
    this.value.rawValue.forEach((v, index) => {
      if (v === void 0) {
        return;
      }
      const x = mapRange(index, 0, maxIndex, 0, w);
      const y = mapRange(v, min, max, h, 0);
      points.push([x, y].join(","));
    });
    this.lineElem_.setAttributeNS(null, "points", points.join(" "));
    const tooltipElem = this.tooltipElem_;
    const value = this.value.rawValue[this.cursor_.rawValue];
    if (value === void 0) {
      tooltipElem.classList.remove(cn$1("t", "a"));
      return;
    }
    const tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, w);
    const ty = mapRange(value, min, max, h, 0);
    tooltipElem.style.left = `${tx}px`;
    tooltipElem.style.top = `${ty}px`;
    tooltipElem.textContent = `${this.formatter_(value)}`;
    if (!tooltipElem.classList.contains(cn$1("t", "a"))) {
      tooltipElem.classList.add(cn$1("t", "a"), cn$1("t", "in"));
      forceReflow(tooltipElem);
      tooltipElem.classList.remove(cn$1("t", "in"));
    }
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
};
var GraphLogController = class {
  constructor(doc, config) {
    this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
    this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
    this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
    this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
    this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
    this.props = config.props;
    this.value = config.value;
    this.viewProps = config.viewProps;
    this.cursor_ = createValue(-1);
    this.view = new GraphLogView(doc, {
      cursor: this.cursor_,
      formatter: config.formatter,
      rows: config.rows,
      props: this.props,
      value: this.value,
      viewProps: this.viewProps
    });
    if (!supportsTouch(doc)) {
      this.view.element.addEventListener("mousemove", this.onGraphMouseMove_);
      this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
    } else {
      const ph2 = new PointerHandler(this.view.element);
      ph2.emitter.on("down", this.onGraphPointerDown_);
      ph2.emitter.on("move", this.onGraphPointerMove_);
      ph2.emitter.on("up", this.onGraphPointerUp_);
    }
  }
  importProps(state) {
    return importBladeState(state, null, (p) => ({
      max: p.required.number,
      min: p.required.number
    }), (result) => {
      this.props.set("max", result.max);
      this.props.set("min", result.min);
      return true;
    });
  }
  exportProps() {
    return exportBladeState(null, {
      max: this.props.get("max"),
      min: this.props.get("min")
    });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(ev) {
    const { clientWidth: w } = this.view.element;
    this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, w, 0, this.value.rawValue.length));
  }
  onGraphPointerDown_(ev) {
    this.onGraphPointerMove_(ev);
  }
  onGraphPointerMove_(ev) {
    if (!ev.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
};
function createFormatter(params) {
  return !isEmpty(params.format) ? params.format : createNumberFormatter(2);
}
function createTextMonitor(args) {
  var _a2;
  if (args.value.rawValue.length === 1) {
    return new SingleLogController(args.document, {
      formatter: createFormatter(args.params),
      value: args.value,
      viewProps: args.viewProps
    });
  }
  return new MultiLogController(args.document, {
    formatter: createFormatter(args.params),
    rows: (_a2 = args.params.rows) !== null && _a2 !== void 0 ? _a2 : Constants.monitor.defaultRows,
    value: args.value,
    viewProps: args.viewProps
  });
}
function createGraphMonitor(args) {
  var _a2, _b, _c2;
  return new GraphLogController(args.document, {
    formatter: createFormatter(args.params),
    rows: (_a2 = args.params.rows) !== null && _a2 !== void 0 ? _a2 : Constants.monitor.defaultRows,
    props: ValueMap.fromObject({
      max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 100,
      min: (_c2 = args.params.min) !== null && _c2 !== void 0 ? _c2 : 0
    }),
    value: args.value,
    viewProps: args.viewProps
  });
}
function shouldShowGraph(params) {
  return params.view === "graph";
}
var NumberMonitorPlugin = createPlugin({
  id: "monitor-number",
  type: "monitor",
  accept: (value, params) => {
    if (typeof value !== "number") {
      return null;
    }
    const result = parseRecord(params, (p) => ({
      format: p.optional.function,
      max: p.optional.number,
      min: p.optional.number,
      readonly: p.required.constant(true),
      rows: p.optional.number,
      view: p.optional.string
    }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    defaultBufferSize: (params) => shouldShowGraph(params) ? 64 : 1,
    reader: (_args) => numberFromUnknown
  },
  controller: (args) => {
    if (shouldShowGraph(args.params)) {
      return createGraphMonitor(args);
    }
    return createTextMonitor(args);
  },
  api: (args) => {
    if (args.controller.valueController instanceof GraphLogController) {
      return new GraphLogMonitorBindingApi(args.controller);
    }
    return null;
  }
});
var StringMonitorPlugin = createPlugin({
  id: "monitor-string",
  type: "monitor",
  accept: (value, params) => {
    if (typeof value !== "string") {
      return null;
    }
    const result = parseRecord(params, (p) => ({
      multiline: p.optional.boolean,
      readonly: p.required.constant(true),
      rows: p.optional.number
    }));
    return result ? {
      initialValue: value,
      params: result
    } : null;
  },
  binding: {
    reader: (_args) => stringFromUnknown
  },
  controller: (args) => {
    var _a2;
    const value = args.value;
    const multiline = value.rawValue.length > 1 || args.params.multiline;
    if (multiline) {
      return new MultiLogController(args.document, {
        formatter: formatString,
        rows: (_a2 = args.params.rows) !== null && _a2 !== void 0 ? _a2 : Constants.monitor.defaultRows,
        value,
        viewProps: args.viewProps
      });
    }
    return new SingleLogController(args.document, {
      formatter: formatString,
      value,
      viewProps: args.viewProps
    });
  }
});
var BladeApiCache = class {
  constructor() {
    this.map_ = /* @__PURE__ */ new Map();
  }
  get(bc2) {
    var _a2;
    return (_a2 = this.map_.get(bc2)) !== null && _a2 !== void 0 ? _a2 : null;
  }
  has(bc2) {
    return this.map_.has(bc2);
  }
  add(bc2, api) {
    this.map_.set(bc2, api);
    bc2.viewProps.handleDispose(() => {
      this.map_.delete(bc2);
    });
    return api;
  }
};
var ReadWriteBinding = class {
  constructor(config) {
    this.target = config.target;
    this.reader_ = config.reader;
    this.writer_ = config.writer;
  }
  read() {
    return this.reader_(this.target.read());
  }
  write(value) {
    this.writer_(this.target, value);
  }
  inject(value) {
    this.write(this.reader_(value));
  }
};
function createInputBindingController(plugin, args) {
  var _a2;
  const result = plugin.accept(args.target.read(), args.params);
  if (isEmpty(result)) {
    return null;
  }
  const valueArgs = {
    target: args.target,
    initialValue: result.initialValue,
    params: result.params
  };
  const params = parseRecord(args.params, (p) => ({
    disabled: p.optional.boolean,
    hidden: p.optional.boolean,
    label: p.optional.string,
    tag: p.optional.string
  }));
  const reader = plugin.binding.reader(valueArgs);
  const constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : void 0;
  const binding = new ReadWriteBinding({
    reader,
    target: args.target,
    writer: plugin.binding.writer(valueArgs)
  });
  const value = new InputBindingValue(createValue(reader(result.initialValue), {
    constraint,
    equals: plugin.binding.equals
  }), binding);
  const controller = plugin.controller({
    constraint,
    document: args.document,
    initialValue: result.initialValue,
    params: result.params,
    value,
    viewProps: ViewProps.create({
      disabled: params === null || params === void 0 ? void 0 : params.disabled,
      hidden: params === null || params === void 0 ? void 0 : params.hidden
    })
  });
  return new InputBindingController(args.document, {
    blade: createBlade(),
    props: ValueMap.fromObject({
      label: "label" in args.params ? (_a2 = params === null || params === void 0 ? void 0 : params.label) !== null && _a2 !== void 0 ? _a2 : null : args.target.key
    }),
    tag: params === null || params === void 0 ? void 0 : params.tag,
    value,
    valueController: controller
  });
}
var ReadonlyBinding = class {
  constructor(config) {
    this.target = config.target;
    this.reader_ = config.reader;
  }
  read() {
    return this.reader_(this.target.read());
  }
};
function createTicker(document2, interval) {
  return interval === 0 ? new ManualTicker() : new IntervalTicker(document2, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
}
function createMonitorBindingController(plugin, args) {
  var _a2, _b, _c2;
  const result = plugin.accept(args.target.read(), args.params);
  if (isEmpty(result)) {
    return null;
  }
  const bindingArgs = {
    target: args.target,
    initialValue: result.initialValue,
    params: result.params
  };
  const params = parseRecord(args.params, (p) => ({
    bufferSize: p.optional.number,
    disabled: p.optional.boolean,
    hidden: p.optional.boolean,
    interval: p.optional.number,
    label: p.optional.string
  }));
  const reader = plugin.binding.reader(bindingArgs);
  const bufferSize = (_b = (_a2 = params === null || params === void 0 ? void 0 : params.bufferSize) !== null && _a2 !== void 0 ? _a2 : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b !== void 0 ? _b : 1;
  const value = new MonitorBindingValue({
    binding: new ReadonlyBinding({
      reader,
      target: args.target
    }),
    bufferSize,
    ticker: createTicker(args.document, params === null || params === void 0 ? void 0 : params.interval)
  });
  const controller = plugin.controller({
    document: args.document,
    params: result.params,
    value,
    viewProps: ViewProps.create({
      disabled: params === null || params === void 0 ? void 0 : params.disabled,
      hidden: params === null || params === void 0 ? void 0 : params.hidden
    })
  });
  controller.viewProps.bindDisabled(value.ticker);
  controller.viewProps.handleDispose(() => {
    value.ticker.dispose();
  });
  return new MonitorBindingController(args.document, {
    blade: createBlade(),
    props: ValueMap.fromObject({
      label: "label" in args.params ? (_c2 = params === null || params === void 0 ? void 0 : params.label) !== null && _c2 !== void 0 ? _c2 : null : args.target.key
    }),
    value,
    valueController: controller
  });
}
var PluginPool = class {
  constructor(apiCache) {
    this.pluginsMap_ = {
      blades: [],
      inputs: [],
      monitors: []
    };
    this.apiCache_ = apiCache;
  }
  getAll() {
    return [
      ...this.pluginsMap_.blades,
      ...this.pluginsMap_.inputs,
      ...this.pluginsMap_.monitors
    ];
  }
  register(bundleId, r) {
    if (!isCompatible(r.core)) {
      throw TpError.notCompatible(bundleId, r.id);
    }
    if (r.type === "blade") {
      this.pluginsMap_.blades.unshift(r);
    } else if (r.type === "input") {
      this.pluginsMap_.inputs.unshift(r);
    } else if (r.type === "monitor") {
      this.pluginsMap_.monitors.unshift(r);
    }
  }
  createInput_(document2, target, params) {
    return this.pluginsMap_.inputs.reduce((result, plugin) => result !== null && result !== void 0 ? result : createInputBindingController(plugin, {
      document: document2,
      target,
      params
    }), null);
  }
  createMonitor_(document2, target, params) {
    return this.pluginsMap_.monitors.reduce((result, plugin) => result !== null && result !== void 0 ? result : createMonitorBindingController(plugin, {
      document: document2,
      params,
      target
    }), null);
  }
  createBinding(doc, target, params) {
    const initialValue = target.read();
    if (isEmpty(initialValue)) {
      throw new TpError({
        context: {
          key: target.key
        },
        type: "nomatchingcontroller"
      });
    }
    const ic = this.createInput_(doc, target, params);
    if (ic) {
      return ic;
    }
    const mc2 = this.createMonitor_(doc, target, params);
    if (mc2) {
      return mc2;
    }
    throw new TpError({
      context: {
        key: target.key
      },
      type: "nomatchingcontroller"
    });
  }
  createBlade(document2, params) {
    const bc2 = this.pluginsMap_.blades.reduce((result, plugin) => result !== null && result !== void 0 ? result : createBladeController(plugin, {
      document: document2,
      params
    }), null);
    if (!bc2) {
      throw new TpError({
        type: "nomatchingview",
        context: {
          params
        }
      });
    }
    return bc2;
  }
  createInputBindingApi_(bc2) {
    const api = this.pluginsMap_.inputs.reduce((result, plugin) => {
      var _a2, _b;
      if (result) {
        return result;
      }
      return (_b = (_a2 = plugin.api) === null || _a2 === void 0 ? void 0 : _a2.call(plugin, {
        controller: bc2
      })) !== null && _b !== void 0 ? _b : null;
    }, null);
    return this.apiCache_.add(bc2, api !== null && api !== void 0 ? api : new BindingApi(bc2));
  }
  createMonitorBindingApi_(bc2) {
    const api = this.pluginsMap_.monitors.reduce((result, plugin) => {
      var _a2, _b;
      if (result) {
        return result;
      }
      return (_b = (_a2 = plugin.api) === null || _a2 === void 0 ? void 0 : _a2.call(plugin, {
        controller: bc2
      })) !== null && _b !== void 0 ? _b : null;
    }, null);
    return this.apiCache_.add(bc2, api !== null && api !== void 0 ? api : new BindingApi(bc2));
  }
  createBindingApi(bc2) {
    if (this.apiCache_.has(bc2)) {
      return this.apiCache_.get(bc2);
    }
    if (isInputBindingController(bc2)) {
      return this.createInputBindingApi_(bc2);
    }
    if (isMonitorBindingController(bc2)) {
      return this.createMonitorBindingApi_(bc2);
    }
    throw TpError.shouldNeverHappen();
  }
  createApi(bc2) {
    if (this.apiCache_.has(bc2)) {
      return this.apiCache_.get(bc2);
    }
    if (isBindingController(bc2)) {
      return this.createBindingApi(bc2);
    }
    const api = this.pluginsMap_.blades.reduce((result, plugin) => result !== null && result !== void 0 ? result : plugin.api({
      controller: bc2,
      pool: this
    }), null);
    if (!api) {
      throw TpError.shouldNeverHappen();
    }
    return this.apiCache_.add(bc2, api);
  }
};
var sharedCache = new BladeApiCache();
function createDefaultPluginPool() {
  const pool = new PluginPool(sharedCache);
  [
    Point2dInputPlugin,
    Point3dInputPlugin,
    Point4dInputPlugin,
    StringInputPlugin,
    NumberInputPlugin,
    StringColorInputPlugin,
    ObjectColorInputPlugin,
    NumberColorInputPlugin,
    BooleanInputPlugin,
    BooleanMonitorPlugin,
    StringMonitorPlugin,
    NumberMonitorPlugin,
    ButtonBladePlugin,
    FolderBladePlugin,
    TabBladePlugin
  ].forEach((p) => {
    pool.register("core", p);
  });
  return pool;
}
var ListBladeApi = class extends BladeApi {
  /**
   * @hidden
   */
  constructor(controller) {
    super(controller);
    this.emitter_ = new Emitter();
    this.controller.value.emitter.on("change", (ev) => {
      this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(label) {
    this.controller.labelController.props.set("label", label);
  }
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(options) {
    this.controller.valueController.props.set("options", options);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(value) {
    this.controller.value.rawValue = value;
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
};
var SeparatorBladeApi = class extends BladeApi {
};
var SliderBladeApi = class extends BladeApi {
  /**
   * @hidden
   */
  constructor(controller) {
    super(controller);
    this.emitter_ = new Emitter();
    this.controller.value.emitter.on("change", (ev) => {
      this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(label) {
    this.controller.labelController.props.set("label", label);
  }
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(max) {
    this.controller.valueController.sliderController.props.set("max", max);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(min) {
    this.controller.valueController.sliderController.props.set("min", min);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(value) {
    this.controller.value.rawValue = value;
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
};
var TextBladeApi = class extends BladeApi {
  /**
   * @hidden
   */
  constructor(controller) {
    super(controller);
    this.emitter_ = new Emitter();
    this.controller.value.emitter.on("change", (ev) => {
      this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(label) {
    this.controller.labelController.props.set("label", label);
  }
  get formatter() {
    return this.controller.valueController.props.get("formatter");
  }
  set formatter(formatter) {
    this.controller.valueController.props.set("formatter", formatter);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(value) {
    this.controller.value.rawValue = value;
  }
  on(eventName, handler) {
    const bh2 = handler.bind(this);
    this.emitter_.on(eventName, (ev) => {
      bh2(ev);
    }, {
      key: handler
    });
    return this;
  }
  off(eventName, handler) {
    this.emitter_.off(eventName, handler);
    return this;
  }
};
var ListBladePlugin = /* @__PURE__ */ function() {
  return {
    id: "list",
    type: "blade",
    core: VERSION$1,
    accept(params) {
      const result = parseRecord(params, (p) => ({
        options: p.required.custom(parseListOptions),
        value: p.required.raw,
        view: p.required.constant("list"),
        label: p.optional.string
      }));
      return result ? { params: result } : null;
    },
    controller(args) {
      const lc2 = new ListConstraint(normalizeListOptions(args.params.options));
      const value = createValue(args.params.value, {
        constraint: lc2
      });
      const ic = new ListController(args.document, {
        props: new ValueMap({
          options: lc2.values.value("options")
        }),
        value,
        viewProps: args.viewProps
      });
      return new LabeledValueBladeController(args.document, {
        blade: args.blade,
        props: ValueMap.fromObject({
          label: args.params.label
        }),
        value,
        valueController: ic
      });
    },
    api(args) {
      if (!(args.controller instanceof LabeledValueBladeController)) {
        return null;
      }
      if (!(args.controller.valueController instanceof ListController)) {
        return null;
      }
      return new ListBladeApi(args.controller);
    }
  };
}();
var RootApi = class extends FolderApi {
  /**
   * @hidden
   */
  constructor(controller, pool) {
    super(controller, pool);
  }
  get element() {
    return this.controller.view.element;
  }
};
var RootController = class extends FolderController {
  constructor(doc, config) {
    super(doc, {
      expanded: config.expanded,
      blade: config.blade,
      props: config.props,
      root: true,
      viewProps: config.viewProps
    });
  }
};
var cn = ClassName("spr");
var SeparatorView = class {
  constructor(doc, config) {
    this.element = doc.createElement("div");
    this.element.classList.add(cn());
    config.viewProps.bindClassModifiers(this.element);
    const hrElem = doc.createElement("hr");
    hrElem.classList.add(cn("r"));
    this.element.appendChild(hrElem);
  }
};
var SeparatorController = class extends BladeController {
  /**
   * @hidden
   */
  constructor(doc, config) {
    super(Object.assign(Object.assign({}, config), { view: new SeparatorView(doc, {
      viewProps: config.viewProps
    }) }));
  }
};
var SeparatorBladePlugin = {
  id: "separator",
  type: "blade",
  core: VERSION$1,
  accept(params) {
    const result = parseRecord(params, (p) => ({
      view: p.required.constant("separator")
    }));
    return result ? { params: result } : null;
  },
  controller(args) {
    return new SeparatorController(args.document, {
      blade: args.blade,
      viewProps: args.viewProps
    });
  },
  api(args) {
    if (!(args.controller instanceof SeparatorController)) {
      return null;
    }
    return new SeparatorBladeApi(args.controller);
  }
};
var SliderBladePlugin = {
  id: "slider",
  type: "blade",
  core: VERSION$1,
  accept(params) {
    const result = parseRecord(params, (p) => ({
      max: p.required.number,
      min: p.required.number,
      view: p.required.constant("slider"),
      format: p.optional.function,
      label: p.optional.string,
      value: p.optional.number
    }));
    return result ? { params: result } : null;
  },
  controller(args) {
    var _a2, _b;
    const initialValue = (_a2 = args.params.value) !== null && _a2 !== void 0 ? _a2 : 0;
    const drc = new DefiniteRangeConstraint({
      max: args.params.max,
      min: args.params.min
    });
    const v = createValue(initialValue, {
      constraint: drc
    });
    const vc2 = new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps({
      formatter: (_b = args.params.format) !== null && _b !== void 0 ? _b : numberToString,
      keyScale: createValue(1),
      max: drc.values.value("max"),
      min: drc.values.value("min"),
      pointerScale: getSuitablePointerScale(args.params, initialValue)
    })), { parser: parseNumber, value: v, viewProps: args.viewProps }));
    return new LabeledValueBladeController(args.document, {
      blade: args.blade,
      props: ValueMap.fromObject({
        label: args.params.label
      }),
      value: v,
      valueController: vc2
    });
  },
  api(args) {
    if (!(args.controller instanceof LabeledValueBladeController)) {
      return null;
    }
    if (!(args.controller.valueController instanceof SliderTextController)) {
      return null;
    }
    return new SliderBladeApi(args.controller);
  }
};
var TextBladePlugin = /* @__PURE__ */ function() {
  return {
    id: "text",
    type: "blade",
    core: VERSION$1,
    accept(params) {
      const result = parseRecord(params, (p) => ({
        parse: p.required.function,
        value: p.required.raw,
        view: p.required.constant("text"),
        format: p.optional.function,
        label: p.optional.string
      }));
      return result ? { params: result } : null;
    },
    controller(args) {
      var _a2;
      const v = createValue(args.params.value);
      const ic = new TextController(args.document, {
        parser: args.params.parse,
        props: ValueMap.fromObject({
          formatter: (_a2 = args.params.format) !== null && _a2 !== void 0 ? _a2 : (v2) => String(v2)
        }),
        value: v,
        viewProps: args.viewProps
      });
      return new LabeledValueBladeController(args.document, {
        blade: args.blade,
        props: ValueMap.fromObject({
          label: args.params.label
        }),
        value: v,
        valueController: ic
      });
    },
    api(args) {
      if (!(args.controller instanceof LabeledValueBladeController)) {
        return null;
      }
      if (!(args.controller.valueController instanceof TextController)) {
        return null;
      }
      return new TextBladeApi(args.controller);
    }
  };
}();
function createDefaultWrapperElement(doc) {
  const elem = doc.createElement("div");
  elem.classList.add(ClassName("dfw")());
  if (doc.body) {
    doc.body.appendChild(elem);
  }
  return elem;
}
function embedStyle(doc, id2, css) {
  if (doc.querySelector(`style[data-tp-style=${id2}]`)) {
    return;
  }
  const styleElem = doc.createElement("style");
  styleElem.dataset.tpStyle = id2;
  styleElem.textContent = css;
  doc.head.appendChild(styleElem);
}
var Pane = class extends RootApi {
  constructor(opt_config) {
    var _a2, _b;
    const config = opt_config !== null && opt_config !== void 0 ? opt_config : {};
    const doc = (_a2 = config.document) !== null && _a2 !== void 0 ? _a2 : getWindowDocument();
    const pool = createDefaultPluginPool();
    const rootController = new RootController(doc, {
      expanded: config.expanded,
      blade: createBlade(),
      props: ValueMap.fromObject({
        title: config.title
      }),
      viewProps: ViewProps.create()
    });
    super(rootController, pool);
    this.pool_ = pool;
    this.containerElem_ = (_b = config.container) !== null && _b !== void 0 ? _b : createDefaultWrapperElement(doc);
    this.containerElem_.appendChild(this.element);
    this.doc_ = doc;
    this.usesDefaultWrapper_ = !config.container;
    this.setUpDefaultPlugins_();
  }
  get document() {
    if (!this.doc_) {
      throw TpError.alreadyDisposed();
    }
    return this.doc_;
  }
  dispose() {
    const containerElem = this.containerElem_;
    if (!containerElem) {
      throw TpError.alreadyDisposed();
    }
    if (this.usesDefaultWrapper_) {
      const parentElem = containerElem.parentElement;
      if (parentElem) {
        parentElem.removeChild(containerElem);
      }
    }
    this.containerElem_ = null;
    this.doc_ = null;
    super.dispose();
  }
  registerPlugin(bundle) {
    if (bundle.css) {
      embedStyle(this.document, `plugin-${bundle.id}`, bundle.css);
    }
    const plugins = "plugin" in bundle ? [bundle.plugin] : "plugins" in bundle ? bundle.plugins : [];
    plugins.forEach((p) => {
      this.pool_.register(bundle.id, p);
    });
  }
  setUpDefaultPlugins_() {
    this.registerPlugin({
      id: "default",
      // NOTE: This string literal will be replaced with the default CSS by Rollup at the compilation time
      css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
      plugins: [
        ListBladePlugin,
        SeparatorBladePlugin,
        SliderBladePlugin,
        TabBladePlugin,
        TextBladePlugin
      ]
    });
  }
};
var VERSION = new Semver("4.0.3");

// node_modules/@tresjs/cientos/dist/trescientos.js
var rl = Object.defineProperty;
var ol = (o, e, t) => e in o ? rl(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var oe = (o, e, t) => (ol(o, typeof e != "symbol" ? e + "" : e, t), t);
function Rr(o, e) {
  if (e === TrianglesDrawMode)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), o;
  if (e === TriangleFanDrawMode || e === TriangleStripDrawMode) {
    let t = o.getIndex();
    if (t === null) {
      const r = [], a = o.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          r.push(l);
        o.setIndex(r), t = o.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), o;
    }
    const n = t.count - 2, s = [];
    if (t)
      if (e === TriangleFanDrawMode)
        for (let r = 1; r <= n; r++)
          s.push(t.getX(0)), s.push(t.getX(r)), s.push(t.getX(r + 1));
      else
        for (let r = 0; r < n; r++)
          r % 2 === 0 ? (s.push(t.getX(r)), s.push(t.getX(r + 1)), s.push(t.getX(r + 2))) : (s.push(t.getX(r + 2)), s.push(t.getX(r + 1)), s.push(t.getX(r)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = o.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), o;
}
var da = parseInt(REVISION.replace(/\D+/g, ""));
var lc = Object.defineProperty;
var cc = (o, e, t) => e in o ? lc(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var uc = (o, e, t) => (cc(o, typeof e != "symbol" ? e + "" : e, t), t);
async function Cr(o) {
  const e = await o.arrayBuffer(), t = btoa(String.fromCharCode(...new Uint8Array(e)));
  return `data:${o.type || ""};base64,${t}`;
}
var Es;
var ci;
var Pn;
var Ms;
function ui(o, e = 1 / 0, t = null) {
  ci || (ci = new PlaneGeometry(2, 2, 1, 1)), Pn || (Pn = new ShaderMaterial({
    uniforms: { blitTexture: new Uniform(o) },
    vertexShader: (
      /* glsl */
      `
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = vec4(position.xy * 1.0,0.,.999999);
        }
      `
    ),
    fragmentShader: (
      /* glsl */
      `
          uniform sampler2D blitTexture; 
          varying vec2 vUv;

          void main(){ 
              gl_FragColor = vec4(vUv.xy, 0, 1);
              
              #ifdef IS_SRGB
              gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
              #else
              gl_FragColor = texture2D( blitTexture, vUv);
              #endif
          }
      `
    )
  })), Pn.uniforms.blitTexture.value = o, Pn.defines.IS_SRGB = "colorSpace" in o ? o.colorSpace === "srgb" : o.encoding === 3001, Pn.needsUpdate = true, Ms || (Ms = new Mesh(ci, Pn), Ms.frustrumCulled = false);
  const n = new PerspectiveCamera(), s = new Scene();
  s.add(Ms), t || (t = Es = new WebGLRenderer({ antialias: false })), t.setSize(Math.min(o.image.width, e), Math.min(o.image.height, e)), t.clear(), t.render(s, n);
  const i = new Texture(t.domElement);
  return i.minFilter = o.minFilter, i.magFilter = o.magFilter, i.wrapS = o.wrapS, i.wrapT = o.wrapT, i.name = o.name, Es && (Es.dispose(), Es = null), i;
}
var Ir2 = {
  POSITION: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "unsigned byte normalized",
    "short",
    "short normalized",
    "unsigned short",
    "unsigned short normalized"
  ],
  NORMAL: ["byte normalized", "short normalized"],
  TANGENT: ["byte normalized", "short normalized"],
  TEXCOORD: ["byte", "byte normalized", "unsigned byte", "short", "short normalized", "unsigned short"]
};
var hr = class {
  constructor() {
    this.pluginCallbacks = [], this.register(function(e) {
      return new xc(e);
    }), this.register(function(e) {
      return new wc(e);
    }), this.register(function(e) {
      return new Ec(e);
    }), this.register(function(e) {
      return new Mc(e);
    }), this.register(function(e) {
      return new Sc(e);
    }), this.register(function(e) {
      return new Ac(e);
    }), this.register(function(e) {
      return new Tc(e);
    }), this.register(function(e) {
      return new bc(e);
    }), this.register(function(e) {
      return new Pc(e);
    }), this.register(function(e) {
      return new Rc(e);
    }), this.register(function(e) {
      return new Cc(e);
    });
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Function} onError  Callback on errors
   * @param  {Object} options options
   */
  parse(e, t, n, s) {
    const i = new _c(), r = [];
    for (let a = 0, l = this.pluginCallbacks.length; a < l; a++)
      r.push(this.pluginCallbacks[a](i));
    i.setPlugins(r), i.write(e, t, s).catch(n);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, s, i, t);
    });
  }
};
uc(hr, "Utils", {
  insertKeyframe: function(o, e) {
    const n = o.getValueSize(), s = new o.TimeBufferType(o.times.length + 1), i = new o.ValueBufferType(o.values.length + n), r = o.createInterpolant(new o.ValueBufferType(n));
    let a;
    if (o.times.length === 0) {
      s[0] = e;
      for (let l = 0; l < n; l++)
        i[l] = 0;
      a = 0;
    } else if (e < o.times[0]) {
      if (Math.abs(o.times[0] - e) < 1e-3)
        return 0;
      s[0] = e, s.set(o.times, 1), i.set(r.evaluate(e), 0), i.set(o.values, n), a = 0;
    } else if (e > o.times[o.times.length - 1]) {
      if (Math.abs(o.times[o.times.length - 1] - e) < 1e-3)
        return o.times.length - 1;
      s[s.length - 1] = e, s.set(o.times, 0), i.set(o.values, 0), i.set(r.evaluate(e), o.values.length), a = s.length - 1;
    } else
      for (let l = 0; l < o.times.length; l++) {
        if (Math.abs(o.times[l] - e) < 1e-3)
          return l;
        if (o.times[l] < e && o.times[l + 1] > e) {
          s.set(o.times.slice(0, l + 1), 0), s[l + 1] = e, s.set(o.times.slice(l + 1), l + 2), i.set(o.values.slice(0, (l + 1) * n), 0), i.set(r.evaluate(e), (l + 1) * n), i.set(o.values.slice((l + 1) * n), (l + 2) * n), a = l + 1;
          break;
        }
      }
    return o.times = s, o.values = i, a;
  },
  mergeMorphTargetTracks: function(o, e) {
    const t = [], n = {}, s = o.tracks;
    for (let i = 0; i < s.length; ++i) {
      let r = s[i];
      const a = PropertyBinding.parseTrackName(r.name), l = PropertyBinding.findNode(e, a.nodeName);
      if (a.propertyName !== "morphTargetInfluences" || a.propertyIndex === void 0) {
        t.push(r);
        continue;
      }
      if (r.createInterpolant !== r.InterpolantFactoryMethodDiscrete && r.createInterpolant !== r.InterpolantFactoryMethodLinear) {
        if (r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
        console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), r = r.clone(), r.setInterpolation(InterpolateLinear);
      }
      const c = l.morphTargetInfluences.length, u = l.morphTargetDictionary[a.propertyIndex];
      if (u === void 0)
        throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
      let h;
      if (n[l.uuid] === void 0) {
        h = r.clone();
        const p = new h.ValueBufferType(c * h.times.length);
        for (let v = 0; v < h.times.length; v++)
          p[v * c + u] = h.values[v];
        h.name = (a.nodeName || "") + ".morphTargetInfluences", h.values = p, n[l.uuid] = h, t.push(h);
        continue;
      }
      const m = r.createInterpolant(new r.ValueBufferType(1));
      h = n[l.uuid];
      for (let p = 0; p < h.times.length; p++)
        h.values[p * c + u] = m.evaluate(h.times[p]);
      for (let p = 0; p < r.times.length; p++) {
        const v = this.insertKeyframe(h, r.times[p]);
        h.values[v * c + u] = r.values[p];
      }
    }
    return o.tracks = t, o;
  }
});
var Pe = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  ARRAY_BUFFER: 34962,
  ELEMENT_ARRAY_BUFFER: 34963,
  NEAREST: 9728,
  LINEAR: 9729,
  NEAREST_MIPMAP_NEAREST: 9984,
  LINEAR_MIPMAP_NEAREST: 9985,
  NEAREST_MIPMAP_LINEAR: 9986,
  LINEAR_MIPMAP_LINEAR: 9987,
  CLAMP_TO_EDGE: 33071,
  MIRRORED_REPEAT: 33648,
  REPEAT: 10497
};
var hi = "KHR_mesh_quantization";
var mt = {};
mt[NearestFilter] = Pe.NEAREST;
mt[NearestMipmapNearestFilter] = Pe.NEAREST_MIPMAP_NEAREST;
mt[NearestMipmapLinearFilter] = Pe.NEAREST_MIPMAP_LINEAR;
mt[LinearFilter] = Pe.LINEAR;
mt[LinearMipmapNearestFilter] = Pe.LINEAR_MIPMAP_NEAREST;
mt[LinearMipmapLinearFilter] = Pe.LINEAR_MIPMAP_LINEAR;
mt[ClampToEdgeWrapping] = Pe.CLAMP_TO_EDGE;
mt[RepeatWrapping] = Pe.REPEAT;
mt[MirroredRepeatWrapping] = Pe.MIRRORED_REPEAT;
var Dr = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
};
var hc = new Color();
var Lr = 12;
var fc = 1179937895;
var dc = 2;
var Or = 8;
var pc = 1313821514;
var mc = 5130562;
function ts(o, e) {
  return o.length === e.length && o.every(function(t, n) {
    return t === e[n];
  });
}
function gc(o) {
  return new TextEncoder().encode(o).buffer;
}
function yc(o) {
  return ts(o.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function vc(o, e, t) {
  const n = {
    min: new Array(o.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(o.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let s = e; s < e + t; s++)
    for (let i = 0; i < o.itemSize; i++) {
      let r;
      o.itemSize > 4 ? r = o.array[s * o.itemSize + i] : (i === 0 ? r = o.getX(s) : i === 1 ? r = o.getY(s) : i === 2 ? r = o.getZ(s) : i === 3 && (r = o.getW(s)), o.normalized === true && (r = MathUtils.normalize(r, o.array))), n.min[i] = Math.min(n.min[i], r), n.max[i] = Math.max(n.max[i], r);
    }
  return n;
}
function pa(o) {
  return Math.ceil(o / 4) * 4;
}
function fi(o, e = 0) {
  const t = pa(o.byteLength);
  if (t !== o.byteLength) {
    const n = new Uint8Array(t);
    if (n.set(new Uint8Array(o)), e !== 0)
      for (let s = o.byteLength; s < t; s++)
        n[s] = e;
    return n.buffer;
  }
  return o;
}
function Fr() {
  return typeof document > "u" && typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : document.createElement("canvas");
}
function kr(o, e) {
  if (o.toBlob !== void 0)
    return new Promise((n) => o.toBlob(n, e));
  let t;
  return e === "image/jpeg" ? t = 0.92 : e === "image/webp" && (t = 0.8), o.convertToBlob({
    type: e,
    quality: t
  });
}
var _c = class {
  constructor() {
    this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = /* @__PURE__ */ new Map(), this.skins = [], this.extensionsUsed = {}, this.extensionsRequired = {}, this.uids = /* @__PURE__ */ new Map(), this.uid = 0, this.json = {
      asset: {
        version: "2.0",
        generator: "THREE.GLTFExporter"
      }
    }, this.cache = {
      meshes: /* @__PURE__ */ new Map(),
      attributes: /* @__PURE__ */ new Map(),
      attributesNormalized: /* @__PURE__ */ new Map(),
      materials: /* @__PURE__ */ new Map(),
      textures: /* @__PURE__ */ new Map(),
      images: /* @__PURE__ */ new Map()
    };
  }
  setPlugins(e) {
    this.plugins = e;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Object} options options
   */
  async write(e, t, n = {}) {
    this.options = Object.assign(
      {
        // default options
        binary: false,
        trs: false,
        onlyVisible: true,
        maxTextureSize: 1 / 0,
        animations: [],
        includeCustomExtensions: false
      },
      n
    ), this.options.animations.length > 0 && (this.options.trs = true), this.processInput(e), await Promise.all(this.pending);
    const s = this, i = s.buffers, r = s.json;
    n = s.options;
    const a = s.extensionsUsed, l = s.extensionsRequired, c = new Blob(i, { type: "application/octet-stream" }), u = Object.keys(a), h = Object.keys(l);
    u.length > 0 && (r.extensionsUsed = u), h.length > 0 && (r.extensionsRequired = h), r.buffers && r.buffers.length > 0 && (r.buffers[0].byteLength = c.size), n.binary === true ? c.arrayBuffer().then((m) => {
      const p = fi(m), v = new DataView(new ArrayBuffer(Or));
      v.setUint32(0, p.byteLength, true), v.setUint32(4, mc, true);
      const _ = fi(gc(JSON.stringify(r)), 32), y = new DataView(new ArrayBuffer(Or));
      y.setUint32(0, _.byteLength, true), y.setUint32(4, pc, true);
      const E = new ArrayBuffer(Lr), R = new DataView(E);
      R.setUint32(0, fc, true), R.setUint32(4, dc, true);
      const T = Lr + y.byteLength + _.byteLength + v.byteLength + p.byteLength;
      R.setUint32(8, T, true), new Blob([E, y, _, v, p], {
        type: "application/octet-stream"
      }).arrayBuffer().then(t);
    }) : r.buffers && r.buffers.length > 0 ? Cr(c).then((m) => {
      r.buffers[0].uri = m, t(r);
    }) : t(r);
  }
  /**
   * Serializes a userData.
   *
   * @param {THREE.Object3D|THREE.Material} object
   * @param {Object} objectDef
   */
  serializeUserData(e, t) {
    if (Object.keys(e.userData).length === 0)
      return;
    const n = this.options, s = this.extensionsUsed;
    try {
      const i = JSON.parse(JSON.stringify(e.userData));
      if (n.includeCustomExtensions && i.gltfExtensions) {
        t.extensions === void 0 && (t.extensions = {});
        for (const r in i.gltfExtensions)
          t.extensions[r] = i.gltfExtensions[r], s[r] = true;
        delete i.gltfExtensions;
      }
      Object.keys(i).length > 0 && (t.extras = i);
    } catch (i) {
      console.warn(
        "THREE.GLTFExporter: userData of '" + e.name + "' won't be serialized because of JSON.stringify error - " + i.message
      );
    }
  }
  /**
   * Returns ids for buffer attributes.
   * @param  {Object} object
   * @return {Integer}
   */
  getUID(e, t = false) {
    if (this.uids.has(e) === false) {
      const s = /* @__PURE__ */ new Map();
      s.set(true, this.uid++), s.set(false, this.uid++), this.uids.set(e, s);
    }
    return this.uids.get(e).get(t);
  }
  /**
   * Checks if normal attribute values are normalized.
   *
   * @param {BufferAttribute} normal
   * @returns {Boolean}
   */
  isNormalizedNormalAttribute(e) {
    if (this.cache.attributesNormalized.has(e))
      return false;
    const n = new Vector3();
    for (let s = 0, i = e.count; s < i; s++)
      if (Math.abs(n.fromBufferAttribute(e, s).length() - 1) > 5e-4)
        return false;
    return true;
  }
  /**
   * Creates normalized normal buffer attribute.
   *
   * @param {BufferAttribute} normal
   * @returns {BufferAttribute}
   *
   */
  createNormalizedNormalAttribute(e) {
    const t = this.cache;
    if (t.attributesNormalized.has(e))
      return t.attributesNormalized.get(e);
    const n = e.clone(), s = new Vector3();
    for (let i = 0, r = n.count; i < r; i++)
      s.fromBufferAttribute(n, i), s.x === 0 && s.y === 0 && s.z === 0 ? s.setX(1) : s.normalize(), n.setXYZ(i, s.x, s.y, s.z);
    return t.attributesNormalized.set(e, n), n;
  }
  /**
   * Applies a texture transform, if present, to the map definition. Requires
   * the KHR_texture_transform extension.
   *
   * @param {Object} mapDef
   * @param {THREE.Texture} texture
   */
  applyTextureTransform(e, t) {
    let n = false;
    const s = {};
    (t.offset.x !== 0 || t.offset.y !== 0) && (s.offset = t.offset.toArray(), n = true), t.rotation !== 0 && (s.rotation = t.rotation, n = true), (t.repeat.x !== 1 || t.repeat.y !== 1) && (s.scale = t.repeat.toArray(), n = true), n && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = s, this.extensionsUsed.KHR_texture_transform = true);
  }
  buildMetalRoughTexture(e, t) {
    if (e === t)
      return e;
    function n(p) {
      return ("colorSpace" in p ? p.colorSpace === "srgb" : p.encoding === 3001) ? function(_) {
        return _ < 0.04045 ? _ * 0.0773993808 : Math.pow(_ * 0.9478672986 + 0.0521327014, 2.4);
      } : function(_) {
        return _;
      };
    }
    console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof CompressedTexture && (e = ui(e)), t instanceof CompressedTexture && (t = ui(t));
    const s = e ? e.image : null, i = t ? t.image : null, r = Math.max(s ? s.width : 0, i ? i.width : 0), a = Math.max(s ? s.height : 0, i ? i.height : 0), l = Fr();
    l.width = r, l.height = a;
    const c = l.getContext("2d");
    c.fillStyle = "#00ffff", c.fillRect(0, 0, r, a);
    const u = c.getImageData(0, 0, r, a);
    if (s) {
      c.drawImage(s, 0, 0, r, a);
      const p = n(e), v = c.getImageData(0, 0, r, a).data;
      for (let _ = 2; _ < v.length; _ += 4)
        u.data[_] = p(v[_] / 256) * 256;
    }
    if (i) {
      c.drawImage(i, 0, 0, r, a);
      const p = n(t), v = c.getImageData(0, 0, r, a).data;
      for (let _ = 1; _ < v.length; _ += 4)
        u.data[_] = p(v[_] / 256) * 256;
    }
    c.putImageData(u, 0, 0);
    const m = (e || t).clone();
    return m.source = new Texture(l).source, "colorSpace" in m ? m.colorSpace = "" : m.encoding = 3e3, m.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), m;
  }
  /**
   * Process a buffer to append to the default one.
   * @param  {ArrayBuffer} buffer
   * @return {Integer}
   */
  processBuffer(e) {
    const t = this.json, n = this.buffers;
    return t.buffers || (t.buffers = [{ byteLength: 0 }]), n.push(e), 0;
  }
  /**
   * Process and generate a BufferView
   * @param  {BufferAttribute} attribute
   * @param  {number} componentType
   * @param  {number} start
   * @param  {number} count
   * @param  {number} target (Optional) Target usage of the BufferView
   * @return {Object}
   */
  processBufferView(e, t, n, s, i) {
    const r = this.json;
    r.bufferViews || (r.bufferViews = []);
    let a;
    switch (t) {
      case Pe.BYTE:
      case Pe.UNSIGNED_BYTE:
        a = 1;
        break;
      case Pe.SHORT:
      case Pe.UNSIGNED_SHORT:
        a = 2;
        break;
      default:
        a = 4;
    }
    const l = pa(s * e.itemSize * a), c = new DataView(new ArrayBuffer(l));
    let u = 0;
    for (let p = n; p < n + s; p++)
      for (let v = 0; v < e.itemSize; v++) {
        let _;
        e.itemSize > 4 ? _ = e.array[p * e.itemSize + v] : (v === 0 ? _ = e.getX(p) : v === 1 ? _ = e.getY(p) : v === 2 ? _ = e.getZ(p) : v === 3 && (_ = e.getW(p)), e.normalized === true && (_ = MathUtils.normalize(_, e.array))), t === Pe.FLOAT ? c.setFloat32(u, _, true) : t === Pe.INT ? c.setInt32(u, _, true) : t === Pe.UNSIGNED_INT ? c.setUint32(u, _, true) : t === Pe.SHORT ? c.setInt16(u, _, true) : t === Pe.UNSIGNED_SHORT ? c.setUint16(u, _, true) : t === Pe.BYTE ? c.setInt8(u, _) : t === Pe.UNSIGNED_BYTE && c.setUint8(u, _), u += a;
      }
    const h = {
      buffer: this.processBuffer(c.buffer),
      byteOffset: this.byteOffset,
      byteLength: l
    };
    return i !== void 0 && (h.target = i), i === Pe.ARRAY_BUFFER && (h.byteStride = e.itemSize * a), this.byteOffset += l, r.bufferViews.push(h), {
      id: r.bufferViews.length - 1,
      byteLength: 0
    };
  }
  /**
   * Process and generate a BufferView from an image Blob.
   * @param {Blob} blob
   * @return {Promise<Integer>}
   */
  processBufferViewImage(e) {
    const t = this, n = t.json;
    return n.bufferViews || (n.bufferViews = []), e.arrayBuffer().then((s) => {
      const i = fi(s), r = {
        buffer: t.processBuffer(i),
        byteOffset: t.byteOffset,
        byteLength: i.byteLength
      };
      return t.byteOffset += i.byteLength, n.bufferViews.push(r) - 1;
    });
  }
  /**
   * Process attribute to generate an accessor
   * @param  {BufferAttribute} attribute Attribute to process
   * @param  {THREE.BufferGeometry} geometry (Optional) Geometry used for truncated draw range
   * @param  {Integer} start (Optional)
   * @param  {Integer} count (Optional)
   * @return {Integer|null} Index of the processed accessor on the "accessors" array
   */
  processAccessor(e, t, n, s) {
    const i = this.json, r = {
      1: "SCALAR",
      2: "VEC2",
      3: "VEC3",
      4: "VEC4",
      9: "MAT3",
      16: "MAT4"
    };
    let a;
    if (e.array.constructor === Float32Array)
      a = Pe.FLOAT;
    else if (e.array.constructor === Int32Array)
      a = Pe.INT;
    else if (e.array.constructor === Uint32Array)
      a = Pe.UNSIGNED_INT;
    else if (e.array.constructor === Int16Array)
      a = Pe.SHORT;
    else if (e.array.constructor === Uint16Array)
      a = Pe.UNSIGNED_SHORT;
    else if (e.array.constructor === Int8Array)
      a = Pe.BYTE;
    else if (e.array.constructor === Uint8Array)
      a = Pe.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name
      );
    if (n === void 0 && (n = 0), s === void 0 && (s = e.count), s === 0)
      return null;
    const l = vc(e, n, s);
    let c;
    t !== void 0 && (c = e === t.index ? Pe.ELEMENT_ARRAY_BUFFER : Pe.ARRAY_BUFFER);
    const u = this.processBufferView(e, a, n, s, c), h = {
      bufferView: u.id,
      byteOffset: u.byteOffset,
      componentType: a,
      count: s,
      max: l.max,
      min: l.min,
      type: r[e.itemSize]
    };
    return e.normalized === true && (h.normalized = true), i.accessors || (i.accessors = []), i.accessors.push(h) - 1;
  }
  /**
   * Process image
   * @param  {Image} image to process
   * @param  {Integer} format of the image (RGBAFormat)
   * @param  {Boolean} flipY before writing out the image
   * @param  {String} mimeType export format
   * @return {Integer}     Index of the processed texture in the "images" array
   */
  processImage(e, t, n, s = "image/png") {
    if (e !== null) {
      const i = this, r = i.cache, a = i.json, l = i.options, c = i.pending;
      r.images.has(e) || r.images.set(e, {});
      const u = r.images.get(e), h = s + ":flipY/" + n.toString();
      if (u[h] !== void 0)
        return u[h];
      a.images || (a.images = []);
      const m = { mimeType: s }, p = Fr();
      p.width = Math.min(e.width, l.maxTextureSize), p.height = Math.min(e.height, l.maxTextureSize);
      const v = p.getContext("2d");
      if (n === true && (v.translate(0, p.height), v.scale(1, -1)), e.data !== void 0) {
        t !== RGBAFormat && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > l.maxTextureSize || e.height > l.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        const y = new Uint8ClampedArray(e.height * e.width * 4);
        for (let E = 0; E < y.length; E += 4)
          y[E + 0] = e.data[E + 0], y[E + 1] = e.data[E + 1], y[E + 2] = e.data[E + 2], y[E + 3] = e.data[E + 3];
        v.putImageData(new ImageData(y, e.width, e.height), 0, 0);
      } else
        v.drawImage(e, 0, 0, p.width, p.height);
      l.binary === true ? c.push(
        kr(p, s).then((y) => i.processBufferViewImage(y)).then((y) => {
          m.bufferView = y;
        })
      ) : p.toDataURL !== void 0 ? m.uri = p.toDataURL(s) : c.push(
        kr(p, s).then(Cr).then((y) => {
          m.uri = y;
        })
      );
      const _ = a.images.push(m) - 1;
      return u[h] = _, _;
    } else
      throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.");
  }
  /**
   * Process sampler
   * @param  {Texture} map Texture to process
   * @return {Integer}     Index of the processed texture in the "samplers" array
   */
  processSampler(e) {
    const t = this.json;
    t.samplers || (t.samplers = []);
    const n = {
      magFilter: mt[e.magFilter],
      minFilter: mt[e.minFilter],
      wrapS: mt[e.wrapS],
      wrapT: mt[e.wrapT]
    };
    return t.samplers.push(n) - 1;
  }
  /**
   * Process texture
   * @param  {Texture} map Map to process
   * @return {Integer} Index of the processed texture in the "textures" array
   */
  processTexture(e) {
    const n = this.options, s = this.cache, i = this.json;
    if (s.textures.has(e))
      return s.textures.get(e);
    i.textures || (i.textures = []), e instanceof CompressedTexture && (e = ui(e, n.maxTextureSize));
    let r = e.userData.mimeType;
    r === "image/webp" && (r = "image/png");
    const a = {
      sampler: this.processSampler(e),
      source: this.processImage(e.image, e.format, e.flipY, r)
    };
    e.name && (a.name = e.name), this._invokeAll(function(c) {
      c.writeTexture && c.writeTexture(e, a);
    });
    const l = i.textures.push(a) - 1;
    return s.textures.set(e, l), l;
  }
  /**
   * Process material
   * @param  {THREE.Material} material Material to process
   * @return {Integer|null} Index of the processed material in the "materials" array
   */
  processMaterial(e) {
    const t = this.cache, n = this.json;
    if (t.materials.has(e))
      return t.materials.get(e);
    if (e.isShaderMaterial)
      return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
    n.materials || (n.materials = []);
    const s = { pbrMetallicRoughness: {} };
    e.isMeshStandardMaterial !== true && e.isMeshBasicMaterial !== true && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
    const i = e.color.toArray().concat([e.opacity]);
    if (ts(i, [1, 1, 1, 1]) || (s.pbrMetallicRoughness.baseColorFactor = i), e.isMeshStandardMaterial ? (s.pbrMetallicRoughness.metallicFactor = e.metalness, s.pbrMetallicRoughness.roughnessFactor = e.roughness) : (s.pbrMetallicRoughness.metallicFactor = 0.5, s.pbrMetallicRoughness.roughnessFactor = 0.5), e.metalnessMap || e.roughnessMap) {
      const a = this.buildMetalRoughTexture(e.metalnessMap, e.roughnessMap), l = {
        index: this.processTexture(a),
        channel: a.channel
      };
      this.applyTextureTransform(l, a), s.pbrMetallicRoughness.metallicRoughnessTexture = l;
    }
    if (e.map) {
      const a = {
        index: this.processTexture(e.map),
        texCoord: e.map.channel
      };
      this.applyTextureTransform(a, e.map), s.pbrMetallicRoughness.baseColorTexture = a;
    }
    if (e.emissive) {
      const a = e.emissive;
      if (Math.max(a.r, a.g, a.b) > 0 && (s.emissiveFactor = e.emissive.toArray()), e.emissiveMap) {
        const c = {
          index: this.processTexture(e.emissiveMap),
          texCoord: e.emissiveMap.channel
        };
        this.applyTextureTransform(c, e.emissiveMap), s.emissiveTexture = c;
      }
    }
    if (e.normalMap) {
      const a = {
        index: this.processTexture(e.normalMap),
        texCoord: e.normalMap.channel
      };
      e.normalScale && e.normalScale.x !== 1 && (a.scale = e.normalScale.x), this.applyTextureTransform(a, e.normalMap), s.normalTexture = a;
    }
    if (e.aoMap) {
      const a = {
        index: this.processTexture(e.aoMap),
        texCoord: e.aoMap.channel
      };
      e.aoMapIntensity !== 1 && (a.strength = e.aoMapIntensity), this.applyTextureTransform(a, e.aoMap), s.occlusionTexture = a;
    }
    e.transparent ? s.alphaMode = "BLEND" : e.alphaTest > 0 && (s.alphaMode = "MASK", s.alphaCutoff = e.alphaTest), e.side === DoubleSide && (s.doubleSided = true), e.name !== "" && (s.name = e.name), this.serializeUserData(e, s), this._invokeAll(function(a) {
      a.writeMaterial && a.writeMaterial(e, s);
    });
    const r = n.materials.push(s) - 1;
    return t.materials.set(e, r), r;
  }
  /**
   * Process mesh
   * @param  {THREE.Mesh} mesh Mesh to process
   * @return {Integer|null} Index of the processed mesh in the "meshes" array
   */
  processMesh(e) {
    const t = this.cache, n = this.json, s = [e.geometry.uuid];
    if (Array.isArray(e.material))
      for (let T = 0, g = e.material.length; T < g; T++)
        s.push(e.material[T].uuid);
    else
      s.push(e.material.uuid);
    const i = s.join(":");
    if (t.meshes.has(i))
      return t.meshes.get(i);
    const r = e.geometry;
    let a;
    e.isLineSegments ? a = Pe.LINES : e.isLineLoop ? a = Pe.LINE_LOOP : e.isLine ? a = Pe.LINE_STRIP : e.isPoints ? a = Pe.POINTS : a = e.material.wireframe ? Pe.LINES : Pe.TRIANGLES;
    const l = {}, c = {}, u = [], h = [], m = {
      ...da >= 152 ? {
        uv: "TEXCOORD_0",
        uv1: "TEXCOORD_1",
        uv2: "TEXCOORD_2",
        uv3: "TEXCOORD_3"
      } : {
        uv: "TEXCOORD_0",
        uv2: "TEXCOORD_1"
      },
      color: "COLOR_0",
      skinWeight: "WEIGHTS_0",
      skinIndex: "JOINTS_0"
    }, p = r.getAttribute("normal");
    p !== void 0 && !this.isNormalizedNormalAttribute(p) && (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), r.setAttribute("normal", this.createNormalizedNormalAttribute(p)));
    let v = null;
    for (let T in r.attributes) {
      if (T.slice(0, 5) === "morph")
        continue;
      const g = r.attributes[T];
      if (T = m[T] || T.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(T) || (T = "_" + T), t.attributes.has(this.getUID(g))) {
        c[T] = t.attributes.get(this.getUID(g));
        continue;
      }
      v = null;
      const x = g.array;
      T === "JOINTS_0" && !(x instanceof Uint16Array) && !(x instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), v = new BufferAttribute(new Uint16Array(x), g.itemSize, g.normalized));
      const M = this.processAccessor(v || g, r);
      M !== null && (T.startsWith("_") || this.detectMeshQuantization(T, g), c[T] = M, t.attributes.set(this.getUID(g), M));
    }
    if (p !== void 0 && r.setAttribute("normal", p), Object.keys(c).length === 0)
      return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      const T = [], g = [], A2 = {};
      if (e.morphTargetDictionary !== void 0)
        for (const x in e.morphTargetDictionary)
          A2[e.morphTargetDictionary[x]] = x;
      for (let x = 0; x < e.morphTargetInfluences.length; ++x) {
        const M = {};
        let d = false;
        for (const w in r.morphAttributes) {
          if (w !== "position" && w !== "normal") {
            d || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), d = true);
            continue;
          }
          const f = r.morphAttributes[w][x], P = w.toUpperCase(), I = r.attributes[w];
          if (t.attributes.has(this.getUID(f, true))) {
            M[P] = t.attributes.get(this.getUID(f, true));
            continue;
          }
          const K = f.clone();
          if (!r.morphTargetsRelative)
            for (let N = 0, Z = f.count; N < Z; N++)
              for (let W = 0; W < f.itemSize; W++)
                W === 0 && K.setX(N, f.getX(N) - I.getX(N)), W === 1 && K.setY(N, f.getY(N) - I.getY(N)), W === 2 && K.setZ(N, f.getZ(N) - I.getZ(N)), W === 3 && K.setW(N, f.getW(N) - I.getW(N));
          M[P] = this.processAccessor(K, r), t.attributes.set(this.getUID(I, true), M[P]);
        }
        h.push(M), T.push(e.morphTargetInfluences[x]), e.morphTargetDictionary !== void 0 && g.push(A2[x]);
      }
      l.weights = T, g.length > 0 && (l.extras = {}, l.extras.targetNames = g);
    }
    const _ = Array.isArray(e.material);
    if (_ && r.groups.length === 0)
      return null;
    const y = _ ? e.material : [e.material], E = _ ? r.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let T = 0, g = E.length; T < g; T++) {
      const A2 = {
        mode: a,
        attributes: c
      };
      if (this.serializeUserData(r, A2), h.length > 0 && (A2.targets = h), r.index !== null) {
        let M = this.getUID(r.index);
        (E[T].start !== void 0 || E[T].count !== void 0) && (M += ":" + E[T].start + ":" + E[T].count), t.attributes.has(M) ? A2.indices = t.attributes.get(M) : (A2.indices = this.processAccessor(r.index, r, E[T].start, E[T].count), t.attributes.set(M, A2.indices)), A2.indices === null && delete A2.indices;
      }
      const x = this.processMaterial(y[E[T].materialIndex]);
      x !== null && (A2.material = x), u.push(A2);
    }
    l.primitives = u, n.meshes || (n.meshes = []), this._invokeAll(function(T) {
      T.writeMesh && T.writeMesh(e, l);
    });
    const R = n.meshes.push(l) - 1;
    return t.meshes.set(i, R), R;
  }
  /**
   * If a vertex attribute with a
   * [non-standard data type](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#meshes-overview)
   * is used, it is checked whether it is a valid data type according to the
   * [KHR_mesh_quantization](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
   * extension.
   * In this case the extension is automatically added to the list of used extensions.
   *
   * @param {string} attributeName
   * @param {THREE.BufferAttribute} attribute
   */
  detectMeshQuantization(e, t) {
    if (this.extensionsUsed[hi])
      return;
    let n;
    switch (t.array.constructor) {
      case Int8Array:
        n = "byte";
        break;
      case Uint8Array:
        n = "unsigned byte";
        break;
      case Int16Array:
        n = "short";
        break;
      case Uint16Array:
        n = "unsigned short";
        break;
      default:
        return;
    }
    t.normalized && (n += " normalized");
    const s = e.split("_", 1)[0];
    Ir2[s] && Ir2[s].includes(n) && (this.extensionsUsed[hi] = true, this.extensionsRequired[hi] = true);
  }
  /**
   * Process camera
   * @param  {THREE.Camera} camera Camera to process
   * @return {Integer}      Index of the processed mesh in the "camera" array
   */
  processCamera(e) {
    const t = this.json;
    t.cameras || (t.cameras = []);
    const n = e.isOrthographicCamera, s = {
      type: n ? "orthographic" : "perspective"
    };
    return n ? s.orthographic = {
      xmag: e.right * 2,
      ymag: e.top * 2,
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    } : s.perspective = {
      aspectRatio: e.aspect,
      yfov: MathUtils.degToRad(e.fov),
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    }, e.name !== "" && (s.name = e.type), t.cameras.push(s) - 1;
  }
  /**
   * Creates glTF animation entry from AnimationClip object.
   *
   * Status:
   * - Only properties listed in PATH_PROPERTIES may be animated.
   *
   * @param {THREE.AnimationClip} clip
   * @param {THREE.Object3D} root
   * @return {number|null}
   */
  processAnimation(e, t) {
    const n = this.json, s = this.nodeMap;
    n.animations || (n.animations = []), e = hr.Utils.mergeMorphTargetTracks(e.clone(), t);
    const i = e.tracks, r = [], a = [];
    for (let l = 0; l < i.length; ++l) {
      const c = i[l], u = PropertyBinding.parseTrackName(c.name);
      let h = PropertyBinding.findNode(t, u.nodeName);
      const m = Dr[u.propertyName];
      if (u.objectName === "bones" && (h.isSkinnedMesh === true ? h = h.skeleton.getBoneByName(u.objectIndex) : h = void 0), !h || !m)
        return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', c.name), null;
      const p = 1;
      let v = c.values.length / c.times.length;
      m === Dr.morphTargetInfluences && (v /= h.morphTargetInfluences.length);
      let _;
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true ? (_ = "CUBICSPLINE", v /= 3) : c.getInterpolation() === InterpolateDiscrete ? _ = "STEP" : _ = "LINEAR", a.push({
        input: this.processAccessor(new BufferAttribute(c.times, p)),
        output: this.processAccessor(new BufferAttribute(c.values, v)),
        interpolation: _
      }), r.push({
        sampler: a.length - 1,
        target: {
          node: s.get(h),
          path: m
        }
      });
    }
    return n.animations.push({
      name: e.name || "clip_" + n.animations.length,
      samplers: a,
      channels: r
    }), n.animations.length - 1;
  }
  /**
   * @param {THREE.Object3D} object
   * @return {number|null}
   */
  processSkin(e) {
    const t = this.json, n = this.nodeMap, s = t.nodes[n.get(e)], i = e.skeleton;
    if (i === void 0)
      return null;
    const r = e.skeleton.bones[0];
    if (r === void 0)
      return null;
    const a = [], l = new Float32Array(i.bones.length * 16), c = new Matrix4();
    for (let h = 0; h < i.bones.length; ++h)
      a.push(n.get(i.bones[h])), c.copy(i.boneInverses[h]), c.multiply(e.bindMatrix).toArray(l, h * 16);
    return t.skins === void 0 && (t.skins = []), t.skins.push({
      inverseBindMatrices: this.processAccessor(new BufferAttribute(l, 16)),
      joints: a,
      skeleton: n.get(r)
    }), s.skin = t.skins.length - 1;
  }
  /**
   * Process Object3D node
   * @param  {THREE.Object3D} node Object3D to processNode
   * @return {Integer} Index of the node in the nodes list
   */
  processNode(e) {
    const t = this.json, n = this.options, s = this.nodeMap;
    t.nodes || (t.nodes = []);
    const i = {};
    if (n.trs) {
      const a = e.quaternion.toArray(), l = e.position.toArray(), c = e.scale.toArray();
      ts(a, [0, 0, 0, 1]) || (i.rotation = a), ts(l, [0, 0, 0]) || (i.translation = l), ts(c, [1, 1, 1]) || (i.scale = c);
    } else
      e.matrixAutoUpdate && e.updateMatrix(), yc(e.matrix) === false && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      const a = this.processMesh(e);
      a !== null && (i.mesh = a);
    } else
      e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      const a = [];
      for (let l = 0, c = e.children.length; l < c; l++) {
        const u = e.children[l];
        if (u.visible || n.onlyVisible === false) {
          const h = this.processNode(u);
          h !== null && a.push(h);
        }
      }
      a.length > 0 && (i.children = a);
    }
    this._invokeAll(function(a) {
      a.writeNode && a.writeNode(e, i);
    });
    const r = t.nodes.push(i) - 1;
    return s.set(e, r), r;
  }
  /**
   * Process Scene
   * @param  {Scene} node Scene to process
   */
  processScene(e) {
    const t = this.json, n = this.options;
    t.scenes || (t.scenes = [], t.scene = 0);
    const s = {};
    e.name !== "" && (s.name = e.name), t.scenes.push(s);
    const i = [];
    for (let r = 0, a = e.children.length; r < a; r++) {
      const l = e.children[r];
      if (l.visible || n.onlyVisible === false) {
        const c = this.processNode(l);
        c !== null && i.push(c);
      }
    }
    i.length > 0 && (s.nodes = i), this.serializeUserData(e, s);
  }
  /**
   * Creates a Scene to hold a list of objects and parse it
   * @param  {Array} objects List of objects to process
   */
  processObjects(e) {
    const t = new Scene();
    t.name = "AuxScene";
    for (let n = 0; n < e.length; n++)
      t.children.push(e[n]);
    this.processScene(t);
  }
  /**
   * @param {THREE.Object3D|Array<THREE.Object3D>} input
   */
  processInput(e) {
    const t = this.options;
    e = e instanceof Array ? e : [e], this._invokeAll(function(s) {
      s.beforeParse && s.beforeParse(e);
    });
    const n = [];
    for (let s = 0; s < e.length; s++)
      e[s] instanceof Scene ? this.processScene(e[s]) : n.push(e[s]);
    n.length > 0 && this.processObjects(n);
    for (let s = 0; s < this.skins.length; ++s)
      this.processSkin(this.skins[s]);
    for (let s = 0; s < t.animations.length; ++s)
      this.processAnimation(t.animations[s], e[0]);
    this._invokeAll(function(s) {
      s.afterParse && s.afterParse(e);
    });
  }
  _invokeAll(e) {
    for (let t = 0, n = this.plugins.length; t < n; t++)
      e(this.plugins[t]);
  }
};
var xc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_lights_punctual";
  }
  writeNode(e, t) {
    if (!e.isLight)
      return;
    if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) {
      console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", e);
      return;
    }
    const n = this.writer, s = n.json, i = n.extensionsUsed, r = {};
    e.name && (r.name = e.name), r.color = e.color.toArray(), r.intensity = e.intensity, e.isDirectionalLight ? r.type = "directional" : e.isPointLight ? (r.type = "point", e.distance > 0 && (r.range = e.distance)) : e.isSpotLight && (r.type = "spot", e.distance > 0 && (r.range = e.distance), r.spot = {}, r.spot.innerConeAngle = (e.penumbra - 1) * e.angle * -1, r.spot.outerConeAngle = e.angle), e.decay !== void 0 && e.decay !== 2 && console.warn(
      "THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."
    ), e.target && (e.target.parent !== e || e.target.position.x !== 0 || e.target.position.y !== 0 || e.target.position.z !== -1) && console.warn(
      "THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."
    ), i[this.name] || (s.extensions = s.extensions || {}, s.extensions[this.name] = { lights: [] }, i[this.name] = true);
    const a = s.extensions[this.name].lights;
    a.push(r), t.extensions = t.extensions || {}, t.extensions[this.name] = { light: a.length - 1 };
  }
};
var wc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_unlit";
  }
  writeMaterial(e, t) {
    if (!e.isMeshBasicMaterial)
      return;
    const s = this.writer.extensionsUsed;
    t.extensions = t.extensions || {}, t.extensions[this.name] = {}, s[this.name] = true, t.pbrMetallicRoughness.metallicFactor = 0, t.pbrMetallicRoughness.roughnessFactor = 0.9;
  }
};
var Tc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_clearcoat";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.clearcoat === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
      const r = {
        index: n.processTexture(e.clearcoatMap),
        texCoord: e.clearcoatMap.channel
      };
      n.applyTextureTransform(r, e.clearcoatMap), i.clearcoatTexture = r;
    }
    if (i.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
      const r = {
        index: n.processTexture(e.clearcoatRoughnessMap),
        texCoord: e.clearcoatRoughnessMap.channel
      };
      n.applyTextureTransform(r, e.clearcoatRoughnessMap), i.clearcoatRoughnessTexture = r;
    }
    if (e.clearcoatNormalMap) {
      const r = {
        index: n.processTexture(e.clearcoatNormalMap),
        texCoord: e.clearcoatNormalMap.channel
      };
      n.applyTextureTransform(r, e.clearcoatNormalMap), i.clearcoatNormalTexture = r;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var bc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_iridescence";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.iridescence === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.iridescenceFactor = e.iridescence, e.iridescenceMap) {
      const r = {
        index: n.processTexture(e.iridescenceMap),
        texCoord: e.iridescenceMap.channel
      };
      n.applyTextureTransform(r, e.iridescenceMap), i.iridescenceTexture = r;
    }
    if (i.iridescenceIor = e.iridescenceIOR, i.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], i.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
      const r = {
        index: n.processTexture(e.iridescenceThicknessMap),
        texCoord: e.iridescenceThicknessMap.channel
      };
      n.applyTextureTransform(r, e.iridescenceThicknessMap), i.iridescenceThicknessTexture = r;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Ec = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_transmission";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.transmissionFactor = e.transmission, e.transmissionMap) {
      const r = {
        index: n.processTexture(e.transmissionMap),
        texCoord: e.transmissionMap.channel
      };
      n.applyTextureTransform(r, e.transmissionMap), i.transmissionTexture = r;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Mc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_volume";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (i.thicknessFactor = e.thickness, e.thicknessMap) {
      const r = {
        index: n.processTexture(e.thicknessMap),
        texCoord: e.thicknessMap.channel
      };
      n.applyTextureTransform(r, e.thicknessMap), i.thicknessTexture = r;
    }
    i.attenuationDistance = e.attenuationDistance, i.attenuationColor = e.attenuationColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Sc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_ior";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.ior === 1.5)
      return;
    const s = this.writer.extensionsUsed, i = {};
    i.ior = e.ior, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Ac = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(hc) && !e.specularIntensityMap && !e.specularColorTexture)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.specularIntensityMap) {
      const r = {
        index: n.processTexture(e.specularIntensityMap),
        texCoord: e.specularIntensityMap.channel
      };
      n.applyTextureTransform(r, e.specularIntensityMap), i.specularTexture = r;
    }
    if (e.specularColorMap) {
      const r = {
        index: n.processTexture(e.specularColorMap),
        texCoord: e.specularColorMap.channel
      };
      n.applyTextureTransform(r, e.specularColorMap), i.specularColorTexture = r;
    }
    i.specularFactor = e.specularIntensity, i.specularColorFactor = e.specularColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Pc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_sheen";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.sheen == 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.sheenRoughnessMap) {
      const r = {
        index: n.processTexture(e.sheenRoughnessMap),
        texCoord: e.sheenRoughnessMap.channel
      };
      n.applyTextureTransform(r, e.sheenRoughnessMap), i.sheenRoughnessTexture = r;
    }
    if (e.sheenColorMap) {
      const r = {
        index: n.processTexture(e.sheenColorMap),
        texCoord: e.sheenColorMap.channel
      };
      n.applyTextureTransform(r, e.sheenColorMap), i.sheenColorTexture = r;
    }
    i.sheenRoughnessFactor = e.sheenRoughness, i.sheenColorFactor = e.sheenColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Rc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_anisotropy";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.anisotropy == 0)
      return;
    const n = this.writer, s = n.extensionsUsed, i = {};
    if (e.anisotropyMap) {
      const r = { index: n.processTexture(e.anisotropyMap) };
      n.applyTextureTransform(r, e.anisotropyMap), i.anisotropyTexture = r;
    }
    i.anisotropyStrength = e.anisotropy, i.anisotropyRotation = e.anisotropyRotation, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var Cc = class {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_emissive_strength";
  }
  writeMaterial(e, t) {
    if (!e.isMeshStandardMaterial || e.emissiveIntensity === 1)
      return;
    const s = this.writer.extensionsUsed, i = {};
    i.emissiveStrength = e.emissiveIntensity, t.extensions = t.extensions || {}, t.extensions[this.name] = i, s[this.name] = true;
  }
};
var _t = Uint8Array;
var hn = Uint16Array;
var Zi = Uint32Array;
var ma = new _t([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var ga = new _t([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var Ic = new _t([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var ya = function(o, e) {
  for (var t = new hn(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << o[n - 1];
  for (var s = new Zi(t[30]), n = 1; n < 30; ++n)
    for (var i = t[n]; i < t[n + 1]; ++i)
      s[i] = i - t[n] << 5 | n;
  return [t, s];
};
var va = ya(ma, 2);
var _a = va[0];
var Dc = va[1];
_a[28] = 258, Dc[258] = 28;
var Lc = ya(ga, 0);
var Oc = Lc[0];
var Ki = new hn(32768);
for (Ge = 0; Ge < 32768; ++Ge) {
  qt = (Ge & 43690) >>> 1 | (Ge & 21845) << 1;
  qt = (qt & 52428) >>> 2 | (qt & 13107) << 2, qt = (qt & 61680) >>> 4 | (qt & 3855) << 4, Ki[Ge] = ((qt & 65280) >>> 8 | (qt & 255) << 8) >>> 1;
}
var qt;
var Ge;
var ss = function(o, e, t) {
  for (var n = o.length, s = 0, i = new hn(e); s < n; ++s)
    ++i[o[s] - 1];
  var r = new hn(e);
  for (s = 0; s < e; ++s)
    r[s] = r[s - 1] + i[s - 1] << 1;
  var a;
  if (t) {
    a = new hn(1 << e);
    var l = 15 - e;
    for (s = 0; s < n; ++s)
      if (o[s])
        for (var c = s << 4 | o[s], u = e - o[s], h = r[o[s] - 1]++ << u, m = h | (1 << u) - 1; h <= m; ++h)
          a[Ki[h] >>> l] = c;
  } else
    for (a = new hn(n), s = 0; s < n; ++s)
      o[s] && (a[s] = Ki[r[o[s] - 1]++] >>> 15 - o[s]);
  return a;
};
var ms = new _t(288);
for (Ge = 0; Ge < 144; ++Ge)
  ms[Ge] = 8;
var Ge;
for (Ge = 144; Ge < 256; ++Ge)
  ms[Ge] = 9;
var Ge;
for (Ge = 256; Ge < 280; ++Ge)
  ms[Ge] = 7;
var Ge;
for (Ge = 280; Ge < 288; ++Ge)
  ms[Ge] = 8;
var Ge;
var xa = new _t(32);
for (Ge = 0; Ge < 32; ++Ge)
  xa[Ge] = 5;
var Ge;
var Fc = ss(ms, 9, 1);
var kc = ss(xa, 5, 1);
var di = function(o) {
  for (var e = o[0], t = 1; t < o.length; ++t)
    o[t] > e && (e = o[t]);
  return e;
};
var wt = function(o, e, t) {
  var n = e / 8 | 0;
  return (o[n] | o[n + 1] << 8) >> (e & 7) & t;
};
var pi = function(o, e) {
  var t = e / 8 | 0;
  return (o[t] | o[t + 1] << 8 | o[t + 2] << 16) >> (e & 7);
};
var Uc = function(o) {
  return (o / 8 | 0) + (o & 7 && 1);
};
var Bc = function(o, e, t) {
  (e == null || e < 0) && (e = 0), (t == null || t > o.length) && (t = o.length);
  var n = new (o instanceof hn ? hn : o instanceof Zi ? Zi : _t)(t - e);
  return n.set(o.subarray(e, t)), n;
};
var Nc = function(o, e, t) {
  var n = o.length;
  if (!n || t && !t.l && n < 5)
    return e || new _t(0);
  var s = !e || t, i = !t || t.i;
  t || (t = {}), e || (e = new _t(n * 3));
  var r = function(J) {
    var F = e.length;
    if (J > F) {
      var B = new _t(Math.max(F * 2, J));
      B.set(e), e = B;
    }
  }, a = t.f || 0, l = t.p || 0, c = t.b || 0, u = t.l, h = t.d, m = t.m, p = t.n, v = n * 8;
  do {
    if (!u) {
      t.f = a = wt(o, l, 1);
      var _ = wt(o, l + 1, 3);
      if (l += 3, _)
        if (_ == 1)
          u = Fc, h = kc, m = 9, p = 5;
        else if (_ == 2) {
          var T = wt(o, l, 31) + 257, g = wt(o, l + 10, 15) + 4, A2 = T + wt(o, l + 5, 31) + 1;
          l += 14;
          for (var x = new _t(A2), M = new _t(19), d = 0; d < g; ++d)
            M[Ic[d]] = wt(o, l + d * 3, 7);
          l += g * 3;
          for (var w = di(M), f = (1 << w) - 1, P = ss(M, w, 1), d = 0; d < A2; ) {
            var I = P[wt(o, l, f)];
            l += I & 15;
            var y = I >>> 4;
            if (y < 16)
              x[d++] = y;
            else {
              var K = 0, N = 0;
              for (y == 16 ? (N = 3 + wt(o, l, 3), l += 2, K = x[d - 1]) : y == 17 ? (N = 3 + wt(o, l, 7), l += 3) : y == 18 && (N = 11 + wt(o, l, 127), l += 7); N--; )
                x[d++] = K;
            }
          }
          var Z = x.subarray(0, T), W = x.subarray(T);
          m = di(Z), p = di(W), u = ss(Z, m, 1), h = ss(W, p, 1);
        } else
          throw "invalid block type";
      else {
        var y = Uc(l) + 4, E = o[y - 4] | o[y - 3] << 8, R = y + E;
        if (R > n) {
          if (i)
            throw "unexpected EOF";
          break;
        }
        s && r(c + E), e.set(o.subarray(y, R), c), t.b = c += E, t.p = l = R * 8;
        continue;
      }
      if (l > v) {
        if (i)
          throw "unexpected EOF";
        break;
      }
    }
    s && r(c + 131072);
    for (var X = (1 << m) - 1, V = (1 << p) - 1, ne = l; ; ne = l) {
      var K = u[pi(o, l) & X], se = K >>> 4;
      if (l += K & 15, l > v) {
        if (i)
          throw "unexpected EOF";
        break;
      }
      if (!K)
        throw "invalid length/literal";
      if (se < 256)
        e[c++] = se;
      else if (se == 256) {
        ne = l, u = null;
        break;
      } else {
        var he = se - 254;
        if (se > 264) {
          var d = se - 257, H = ma[d];
          he = wt(o, l, (1 << H) - 1) + _a[d], l += H;
        }
        var k = h[pi(o, l) & V], b = k >>> 4;
        if (!k)
          throw "invalid distance";
        l += k & 15;
        var W = Oc[b];
        if (b > 3) {
          var H = ga[b];
          W += pi(o, l) & (1 << H) - 1, l += H;
        }
        if (l > v) {
          if (i)
            throw "unexpected EOF";
          break;
        }
        s && r(c + 131072);
        for (var U = c + he; c < U; c += 4)
          e[c] = e[c - W], e[c + 1] = e[c + 1 - W], e[c + 2] = e[c + 2 - W], e[c + 3] = e[c + 3 - W];
        c = U;
      }
    }
    t.l = u, t.p = ne, t.b = c, u && (a = 1, t.m = m, t.d = h, t.n = p);
  } while (!a);
  return c == e.length ? e : Bc(e, 0, c);
};
var zc = new _t(0);
var Hc = function(o) {
  if ((o[0] & 15) != 8 || o[0] >>> 4 > 7 || (o[0] << 8 | o[1]) % 31)
    throw "invalid zlib data";
  if (o[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function Gc(o, e) {
  return Nc((Hc(o), o.subarray(2, -4)), e);
}
var jc = typeof TextDecoder < "u" && new TextDecoder();
var Vc = 0;
try {
  jc.decode(zc, { stream: true }), Vc = 1;
} catch {
}
var Je = new Triangle();
var Ss = new Vector3();
var Yc = class {
  constructor(e) {
    let t = e.geometry;
    t.index && (console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."), t = t.toNonIndexed()), this.geometry = t, this.randomFunction = Math.random, this.positionAttribute = this.geometry.getAttribute("position"), this.colorAttribute = this.geometry.getAttribute("color"), this.weightAttribute = null, this.distribution = null;
  }
  setWeightAttribute(e) {
    return this.weightAttribute = e ? this.geometry.getAttribute(e) : null, this;
  }
  build() {
    const e = this.positionAttribute, t = this.weightAttribute, n = new Float32Array(e.count / 3);
    for (let i = 0; i < e.count; i += 3) {
      let r = 1;
      t && (r = t.getX(i) + t.getX(i + 1) + t.getX(i + 2)), Je.a.fromBufferAttribute(e, i), Je.b.fromBufferAttribute(e, i + 1), Je.c.fromBufferAttribute(e, i + 2), r *= Je.getArea(), n[i / 3] = r;
    }
    this.distribution = new Float32Array(e.count / 3);
    let s = 0;
    for (let i = 0; i < n.length; i++)
      s += n[i], this.distribution[i] = s;
    return this;
  }
  setRandomGenerator(e) {
    return this.randomFunction = e, this;
  }
  sample(e, t, n) {
    const s = this.sampleFaceIndex();
    return this.sampleFace(s, e, t, n);
  }
  sampleFaceIndex() {
    const e = this.distribution[this.distribution.length - 1];
    return this.binarySearch(this.randomFunction() * e);
  }
  binarySearch(e) {
    const t = this.distribution;
    let n = 0, s = t.length - 1, i = -1;
    for (; n <= s; ) {
      const r = Math.ceil((n + s) / 2);
      if (r === 0 || t[r - 1] <= e && t[r] > e) {
        i = r;
        break;
      } else
        e < t[r] ? s = r - 1 : n = r + 1;
    }
    return i;
  }
  sampleFace(e, t, n, s) {
    let i = this.randomFunction(), r = this.randomFunction();
    return i + r > 1 && (i = 1 - i, r = 1 - r), Je.a.fromBufferAttribute(this.positionAttribute, e * 3), Je.b.fromBufferAttribute(this.positionAttribute, e * 3 + 1), Je.c.fromBufferAttribute(this.positionAttribute, e * 3 + 2), t.set(0, 0, 0).addScaledVector(Je.a, i).addScaledVector(Je.b, r).addScaledVector(Je.c, 1 - (i + r)), n !== void 0 && Je.getNormal(n), s !== void 0 && this.colorAttribute !== void 0 && (Je.a.fromBufferAttribute(this.colorAttribute, e * 3), Je.b.fromBufferAttribute(this.colorAttribute, e * 3 + 1), Je.c.fromBufferAttribute(this.colorAttribute, e * 3 + 2), Ss.set(0, 0, 0).addScaledVector(Je.a, i).addScaledVector(Je.b, r).addScaledVector(Je.c, 1 - (i + r)), s.r = Ss.x, s.g = Ss.y, s.b = Ss.z), this;
  }
};
var Xc = Object.defineProperty;
var Wc = (o, e, t) => e in o ? Xc(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var q = (o, e, t) => (Wc(o, typeof e != "symbol" ? e + "" : e, t), t);
var $c = class extends Object3D {
  constructor(e, t) {
    super(), q(this, "isTransformControls", true), q(this, "visible", false), q(this, "domElement"), q(this, "raycaster", new Raycaster()), q(this, "gizmo"), q(this, "plane"), q(this, "tempVector", new Vector3()), q(this, "tempVector2", new Vector3()), q(this, "tempQuaternion", new Quaternion()), q(this, "unit", {
      X: new Vector3(1, 0, 0),
      Y: new Vector3(0, 1, 0),
      Z: new Vector3(0, 0, 1)
    }), q(this, "pointStart", new Vector3()), q(this, "pointEnd", new Vector3()), q(this, "offset", new Vector3()), q(this, "rotationAxis", new Vector3()), q(this, "startNorm", new Vector3()), q(this, "endNorm", new Vector3()), q(this, "rotationAngle", 0), q(this, "cameraPosition", new Vector3()), q(this, "cameraQuaternion", new Quaternion()), q(this, "cameraScale", new Vector3()), q(this, "parentPosition", new Vector3()), q(this, "parentQuaternion", new Quaternion()), q(this, "parentQuaternionInv", new Quaternion()), q(this, "parentScale", new Vector3()), q(this, "worldPositionStart", new Vector3()), q(this, "worldQuaternionStart", new Quaternion()), q(this, "worldScaleStart", new Vector3()), q(this, "worldPosition", new Vector3()), q(this, "worldQuaternion", new Quaternion()), q(this, "worldQuaternionInv", new Quaternion()), q(this, "worldScale", new Vector3()), q(this, "eye", new Vector3()), q(this, "positionStart", new Vector3()), q(this, "quaternionStart", new Quaternion()), q(this, "scaleStart", new Vector3()), q(this, "camera"), q(this, "object"), q(this, "enabled", true), q(this, "axis", null), q(this, "mode", "translate"), q(this, "translationSnap", null), q(this, "rotationSnap", null), q(this, "scaleSnap", null), q(this, "space", "world"), q(this, "size", 1), q(this, "dragging", false), q(this, "showX", true), q(this, "showY", true), q(this, "showZ", true), q(this, "changeEvent", { type: "change" }), q(this, "mouseDownEvent", { type: "mouseDown", mode: this.mode }), q(this, "mouseUpEvent", { type: "mouseUp", mode: this.mode }), q(this, "objectChangeEvent", { type: "objectChange" }), q(this, "intersectObjectWithRay", (s, i, r) => {
      const a = i.intersectObject(s, true);
      for (let l = 0; l < a.length; l++)
        if (a[l].object.visible || r)
          return a[l];
      return false;
    }), q(this, "attach", (s) => (this.object = s, this.visible = true, this)), q(this, "detach", () => (this.object = void 0, this.visible = false, this.axis = null, this)), q(this, "reset", () => this.enabled ? (this.dragging && this.object !== void 0 && (this.object.position.copy(this.positionStart), this.object.quaternion.copy(this.quaternionStart), this.object.scale.copy(this.scaleStart), this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent), this.pointStart.copy(this.pointEnd)), this) : this), q(this, "updateMatrixWorld", () => {
      this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this.parentPosition, this.parentQuaternion, this.parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this.worldScale), this.parentQuaternionInv.copy(this.parentQuaternion).invert(), this.worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld();
    }), q(this, "pointerHover", (s) => {
      if (this.object === void 0 || this.dragging === true)
        return;
      this.raycaster.setFromCamera(s, this.camera);
      const i = this.intersectObjectWithRay(this.gizmo.picker[this.mode], this.raycaster);
      i ? this.axis = i.object.name : this.axis = null;
    }), q(this, "pointerDown", (s) => {
      if (!(this.object === void 0 || this.dragging === true || s.button !== 0) && this.axis !== null) {
        this.raycaster.setFromCamera(s, this.camera);
        const i = this.intersectObjectWithRay(this.plane, this.raycaster, true);
        if (i) {
          let r = this.space;
          if (this.mode === "scale" ? r = "local" : (this.axis === "E" || this.axis === "XYZE" || this.axis === "XYZ") && (r = "world"), r === "local" && this.mode === "rotate") {
            const a = this.rotationSnap;
            this.axis === "X" && a && (this.object.rotation.x = Math.round(this.object.rotation.x / a) * a), this.axis === "Y" && a && (this.object.rotation.y = Math.round(this.object.rotation.y / a) * a), this.axis === "Z" && a && (this.object.rotation.z = Math.round(this.object.rotation.z / a) * a);
          }
          this.object.updateMatrixWorld(), this.object.parent && this.object.parent.updateMatrixWorld(), this.positionStart.copy(this.object.position), this.quaternionStart.copy(this.object.quaternion), this.scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart), this.pointStart.copy(i.point).sub(this.worldPositionStart);
        }
        this.dragging = true, this.mouseDownEvent.mode = this.mode, this.dispatchEvent(this.mouseDownEvent);
      }
    }), q(this, "pointerMove", (s) => {
      const i = this.axis, r = this.mode, a = this.object;
      let l = this.space;
      if (r === "scale" ? l = "local" : (i === "E" || i === "XYZE" || i === "XYZ") && (l = "world"), a === void 0 || i === null || this.dragging === false || s.button !== -1)
        return;
      this.raycaster.setFromCamera(s, this.camera);
      const c = this.intersectObjectWithRay(this.plane, this.raycaster, true);
      if (c) {
        if (this.pointEnd.copy(c.point).sub(this.worldPositionStart), r === "translate")
          this.offset.copy(this.pointEnd).sub(this.pointStart), l === "local" && i !== "XYZ" && this.offset.applyQuaternion(this.worldQuaternionInv), i.indexOf("X") === -1 && (this.offset.x = 0), i.indexOf("Y") === -1 && (this.offset.y = 0), i.indexOf("Z") === -1 && (this.offset.z = 0), l === "local" && i !== "XYZ" ? this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale) : this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale), a.position.copy(this.offset).add(this.positionStart), this.translationSnap && (l === "local" && (a.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()), i.search("X") !== -1 && (a.position.x = Math.round(a.position.x / this.translationSnap) * this.translationSnap), i.search("Y") !== -1 && (a.position.y = Math.round(a.position.y / this.translationSnap) * this.translationSnap), i.search("Z") !== -1 && (a.position.z = Math.round(a.position.z / this.translationSnap) * this.translationSnap), a.position.applyQuaternion(this.quaternionStart)), l === "world" && (a.parent && a.position.add(this.tempVector.setFromMatrixPosition(a.parent.matrixWorld)), i.search("X") !== -1 && (a.position.x = Math.round(a.position.x / this.translationSnap) * this.translationSnap), i.search("Y") !== -1 && (a.position.y = Math.round(a.position.y / this.translationSnap) * this.translationSnap), i.search("Z") !== -1 && (a.position.z = Math.round(a.position.z / this.translationSnap) * this.translationSnap), a.parent && a.position.sub(this.tempVector.setFromMatrixPosition(a.parent.matrixWorld))));
        else if (r === "scale") {
          if (i.search("XYZ") !== -1) {
            let u = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (u *= -1), this.tempVector2.set(u, u, u);
          } else
            this.tempVector.copy(this.pointStart), this.tempVector2.copy(this.pointEnd), this.tempVector.applyQuaternion(this.worldQuaternionInv), this.tempVector2.applyQuaternion(this.worldQuaternionInv), this.tempVector2.divide(this.tempVector), i.search("X") === -1 && (this.tempVector2.x = 1), i.search("Y") === -1 && (this.tempVector2.y = 1), i.search("Z") === -1 && (this.tempVector2.z = 1);
          a.scale.copy(this.scaleStart).multiply(this.tempVector2), this.scaleSnap && this.object && (i.search("X") !== -1 && (this.object.scale.x = Math.round(a.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), i.search("Y") !== -1 && (a.scale.y = Math.round(a.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), i.search("Z") !== -1 && (a.scale.z = Math.round(a.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
        } else if (r === "rotate") {
          this.offset.copy(this.pointEnd).sub(this.pointStart);
          const u = 20 / this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));
          i === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this.startNorm.copy(this.pointStart).normalize(), this.endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1) : i === "XYZE" ? (this.rotationAxis.copy(this.offset).cross(this.eye).normalize(), this.rotationAngle = this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye)) * u) : (i === "X" || i === "Y" || i === "Z") && (this.rotationAxis.copy(this.unit[i]), this.tempVector.copy(this.unit[i]), l === "local" && this.tempVector.applyQuaternion(this.worldQuaternion), this.rotationAngle = this.offset.dot(this.tempVector.cross(this.eye).normalize()) * u), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), l === "local" && i !== "E" && i !== "XYZE" ? (a.quaternion.copy(this.quaternionStart), a.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this.parentQuaternionInv), a.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), a.quaternion.multiply(this.quaternionStart).normalize());
        }
        this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent);
      }
    }), q(this, "pointerUp", (s) => {
      s.button === 0 && (this.dragging && this.axis !== null && (this.mouseUpEvent.mode = this.mode, this.dispatchEvent(this.mouseUpEvent)), this.dragging = false, this.axis = null);
    }), q(this, "getPointer", (s) => {
      var i;
      if (this.domElement && ((i = this.domElement.ownerDocument) != null && i.pointerLockElement))
        return {
          x: 0,
          y: 0,
          button: s.button
        };
      {
        const r = s.changedTouches ? s.changedTouches[0] : s, a = this.domElement.getBoundingClientRect();
        return {
          x: (r.clientX - a.left) / a.width * 2 - 1,
          y: -(r.clientY - a.top) / a.height * 2 + 1,
          button: s.button
        };
      }
    }), q(this, "onPointerHover", (s) => {
      if (this.enabled)
        switch (s.pointerType) {
          case "mouse":
          case "pen":
            this.pointerHover(this.getPointer(s));
            break;
        }
    }), q(this, "onPointerDown", (s) => {
      !this.enabled || !this.domElement || (this.domElement.style.touchAction = "none", this.domElement.ownerDocument.addEventListener("pointermove", this.onPointerMove), this.pointerHover(this.getPointer(s)), this.pointerDown(this.getPointer(s)));
    }), q(this, "onPointerMove", (s) => {
      this.enabled && this.pointerMove(this.getPointer(s));
    }), q(this, "onPointerUp", (s) => {
      !this.enabled || !this.domElement || (this.domElement.style.touchAction = "", this.domElement.ownerDocument.removeEventListener("pointermove", this.onPointerMove), this.pointerUp(this.getPointer(s)));
    }), q(this, "getMode", () => this.mode), q(this, "setMode", (s) => {
      this.mode = s;
    }), q(this, "setTranslationSnap", (s) => {
      this.translationSnap = s;
    }), q(this, "setRotationSnap", (s) => {
      this.rotationSnap = s;
    }), q(this, "setScaleSnap", (s) => {
      this.scaleSnap = s;
    }), q(this, "setSize", (s) => {
      this.size = s;
    }), q(this, "setSpace", (s) => {
      this.space = s;
    }), q(this, "update", () => {
      console.warn(
        "THREE.TransformControls: update function has no more functionality and therefore has been deprecated."
      );
    }), q(this, "connect", (s) => {
      s === document && console.error(
        'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
      ), this.domElement = s, this.domElement.addEventListener("pointerdown", this.onPointerDown), this.domElement.addEventListener("pointermove", this.onPointerHover), this.domElement.ownerDocument.addEventListener("pointerup", this.onPointerUp);
    }), q(this, "dispose", () => {
      var s, i, r, a, l, c;
      (s = this.domElement) == null || s.removeEventListener("pointerdown", this.onPointerDown), (i = this.domElement) == null || i.removeEventListener("pointermove", this.onPointerHover), (a = (r = this.domElement) == null ? void 0 : r.ownerDocument) == null || a.removeEventListener("pointermove", this.onPointerMove), (c = (l = this.domElement) == null ? void 0 : l.ownerDocument) == null || c.removeEventListener("pointerup", this.onPointerUp), this.traverse((u) => {
        const h = u;
        h.geometry && h.geometry.dispose(), h.material && h.material.dispose();
      });
    }), this.domElement = t, this.camera = e, this.gizmo = new Zc(), this.add(this.gizmo), this.plane = new Kc(), this.add(this.plane);
    const n = (s, i) => {
      let r = i;
      Object.defineProperty(this, s, {
        get: function() {
          return r !== void 0 ? r : i;
        },
        set: function(a) {
          r !== a && (r = a, this.plane[s] = a, this.gizmo[s] = a, this.dispatchEvent({ type: s + "-changed", value: a }), this.dispatchEvent(this.changeEvent));
        }
      }), this[s] = i, this.plane[s] = i, this.gizmo[s] = i;
    };
    n("camera", this.camera), n("object", this.object), n("enabled", this.enabled), n("axis", this.axis), n("mode", this.mode), n("translationSnap", this.translationSnap), n("rotationSnap", this.rotationSnap), n("scaleSnap", this.scaleSnap), n("space", this.space), n("size", this.size), n("dragging", this.dragging), n("showX", this.showX), n("showY", this.showY), n("showZ", this.showZ), n("worldPosition", this.worldPosition), n("worldPositionStart", this.worldPositionStart), n("worldQuaternion", this.worldQuaternion), n("worldQuaternionStart", this.worldQuaternionStart), n("cameraPosition", this.cameraPosition), n("cameraQuaternion", this.cameraQuaternion), n("pointStart", this.pointStart), n("pointEnd", this.pointEnd), n("rotationAxis", this.rotationAxis), n("rotationAngle", this.rotationAngle), n("eye", this.eye), t !== void 0 && this.connect(t);
  }
};
var Zc = class extends Object3D {
  constructor() {
    super(), q(this, "isTransformControlsGizmo", true), q(this, "type", "TransformControlsGizmo"), q(this, "tempVector", new Vector3(0, 0, 0)), q(this, "tempEuler", new Euler()), q(this, "alignVector", new Vector3(0, 1, 0)), q(this, "zeroVector", new Vector3(0, 0, 0)), q(this, "lookAtMatrix", new Matrix4()), q(this, "tempQuaternion", new Quaternion()), q(this, "tempQuaternion2", new Quaternion()), q(this, "identityQuaternion", new Quaternion()), q(this, "unitX", new Vector3(1, 0, 0)), q(this, "unitY", new Vector3(0, 1, 0)), q(this, "unitZ", new Vector3(0, 0, 1)), q(this, "gizmo"), q(this, "picker"), q(this, "helper"), q(this, "rotationAxis", new Vector3()), q(this, "cameraPosition", new Vector3()), q(this, "worldPositionStart", new Vector3()), q(this, "worldQuaternionStart", new Quaternion()), q(this, "worldPosition", new Vector3()), q(this, "worldQuaternion", new Quaternion()), q(this, "eye", new Vector3()), q(this, "camera", null), q(this, "enabled", true), q(this, "axis", null), q(this, "mode", "translate"), q(this, "space", "world"), q(this, "size", 1), q(this, "dragging", false), q(this, "showX", true), q(this, "showY", true), q(this, "showZ", true), q(this, "updateMatrixWorld", () => {
      let se = this.space;
      this.mode === "scale" && (se = "local");
      const he = se === "local" ? this.worldQuaternion : this.identityQuaternion;
      this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
      let H = [];
      H = H.concat(this.picker[this.mode].children), H = H.concat(this.gizmo[this.mode].children), H = H.concat(this.helper[this.mode].children);
      for (let k = 0; k < H.length; k++) {
        const b = H[k];
        b.visible = true, b.rotation.set(0, 0, 0), b.position.copy(this.worldPosition);
        let U;
        if (this.camera.isOrthographicCamera ? U = (this.camera.top - this.camera.bottom) / this.camera.zoom : U = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), b.scale.set(1, 1, 1).multiplyScalar(U * this.size / 7), b.tag === "helper") {
          b.visible = false, b.name === "AXIS" ? (b.position.copy(this.worldPositionStart), b.visible = !!this.axis, this.axis === "X" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0)), b.quaternion.copy(he).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(he).dot(this.eye)) > 0.9 && (b.visible = false)), this.axis === "Y" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2)), b.quaternion.copy(he).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(he).dot(this.eye)) > 0.9 && (b.visible = false)), this.axis === "Z" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), b.quaternion.copy(he).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(he).dot(this.eye)) > 0.9 && (b.visible = false)), this.axis === "XYZE" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), this.alignVector.copy(this.rotationAxis), b.quaternion.setFromRotationMatrix(
            this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY)
          ), b.quaternion.multiply(this.tempQuaternion), b.visible = this.dragging), this.axis === "E" && (b.visible = false)) : b.name === "START" ? (b.position.copy(this.worldPositionStart), b.visible = this.dragging) : b.name === "END" ? (b.position.copy(this.worldPosition), b.visible = this.dragging) : b.name === "DELTA" ? (b.position.copy(this.worldPositionStart), b.quaternion.copy(this.worldQuaternionStart), this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()), b.scale.copy(this.tempVector), b.visible = this.dragging) : (b.quaternion.copy(he), this.dragging ? b.position.copy(this.worldPositionStart) : b.position.copy(this.worldPosition), this.axis && (b.visible = this.axis.search(b.name) !== -1));
          continue;
        }
        b.quaternion.copy(he), this.mode === "translate" || this.mode === "scale" ? ((b.name === "X" || b.name === "XYZX") && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(he).dot(this.eye)) > 0.99 && (b.scale.set(1e-10, 1e-10, 1e-10), b.visible = false), (b.name === "Y" || b.name === "XYZY") && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(he).dot(this.eye)) > 0.99 && (b.scale.set(1e-10, 1e-10, 1e-10), b.visible = false), (b.name === "Z" || b.name === "XYZZ") && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(he).dot(this.eye)) > 0.99 && (b.scale.set(1e-10, 1e-10, 1e-10), b.visible = false), b.name === "XY" && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(he).dot(this.eye)) < 0.2 && (b.scale.set(1e-10, 1e-10, 1e-10), b.visible = false), b.name === "YZ" && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(he).dot(this.eye)) < 0.2 && (b.scale.set(1e-10, 1e-10, 1e-10), b.visible = false), b.name === "XZ" && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(he).dot(this.eye)) < 0.2 && (b.scale.set(1e-10, 1e-10, 1e-10), b.visible = false), b.name.search("X") !== -1 && (this.alignVector.copy(this.unitX).applyQuaternion(he).dot(this.eye) < 0 ? b.tag === "fwd" ? b.visible = false : b.scale.x *= -1 : b.tag === "bwd" && (b.visible = false)), b.name.search("Y") !== -1 && (this.alignVector.copy(this.unitY).applyQuaternion(he).dot(this.eye) < 0 ? b.tag === "fwd" ? b.visible = false : b.scale.y *= -1 : b.tag === "bwd" && (b.visible = false)), b.name.search("Z") !== -1 && (this.alignVector.copy(this.unitZ).applyQuaternion(he).dot(this.eye) < 0 ? b.tag === "fwd" ? b.visible = false : b.scale.z *= -1 : b.tag === "bwd" && (b.visible = false))) : this.mode === "rotate" && (this.tempQuaternion2.copy(he), this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(he).invert()), b.name.search("E") !== -1 && b.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY)), b.name === "X" && (this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), b.quaternion.copy(this.tempQuaternion)), b.name === "Y" && (this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(this.alignVector.x, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), b.quaternion.copy(this.tempQuaternion)), b.name === "Z" && (this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(this.alignVector.y, this.alignVector.x)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), b.quaternion.copy(this.tempQuaternion))), b.visible = b.visible && (b.name.indexOf("X") === -1 || this.showX), b.visible = b.visible && (b.name.indexOf("Y") === -1 || this.showY), b.visible = b.visible && (b.name.indexOf("Z") === -1 || this.showZ), b.visible = b.visible && (b.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), b.material.tempOpacity = b.material.tempOpacity || b.material.opacity, b.material.tempColor = b.material.tempColor || b.material.color.clone(), b.material.color.copy(b.material.tempColor), b.material.opacity = b.material.tempOpacity, this.enabled ? this.axis && (b.name === this.axis ? (b.material.opacity = 1, b.material.color.lerp(new Color(1, 1, 1), 0.5)) : this.axis.split("").some(function(J) {
          return b.name === J;
        }) ? (b.material.opacity = 1, b.material.color.lerp(new Color(1, 1, 1), 0.5)) : (b.material.opacity *= 0.25, b.material.color.lerp(new Color(1, 1, 1), 0.5))) : (b.material.opacity *= 0.5, b.material.color.lerp(new Color(1, 1, 1), 0.5));
      }
      super.updateMatrixWorld();
    });
    const e = new MeshBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      side: DoubleSide,
      fog: false,
      toneMapped: false
    }), t = new LineBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      linewidth: 1,
      fog: false,
      toneMapped: false
    }), n = e.clone();
    n.opacity = 0.15;
    const s = e.clone();
    s.opacity = 0.33;
    const i = e.clone();
    i.color.set(16711680);
    const r = e.clone();
    r.color.set(65280);
    const a = e.clone();
    a.color.set(255);
    const l = e.clone();
    l.opacity = 0.25;
    const c = l.clone();
    c.color.set(16776960);
    const u = l.clone();
    u.color.set(65535);
    const h = l.clone();
    h.color.set(16711935), e.clone().color.set(16776960);
    const p = t.clone();
    p.color.set(16711680);
    const v = t.clone();
    v.color.set(65280);
    const _ = t.clone();
    _.color.set(255);
    const y = t.clone();
    y.color.set(65535);
    const E = t.clone();
    E.color.set(16711935);
    const R = t.clone();
    R.color.set(16776960);
    const T = t.clone();
    T.color.set(7895160);
    const g = R.clone();
    g.opacity = 0.25;
    const A2 = new CylinderGeometry(0, 0.05, 0.2, 12, 1, false), x = new BoxGeometry(0.125, 0.125, 0.125), M = new BufferGeometry();
    M.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    const d = (se, he) => {
      const H = new BufferGeometry(), k = [];
      for (let b = 0; b <= 64 * he; ++b)
        k.push(0, Math.cos(b / 32 * Math.PI) * se, Math.sin(b / 32 * Math.PI) * se);
      return H.setAttribute("position", new Float32BufferAttribute(k, 3)), H;
    }, w = () => {
      const se = new BufferGeometry();
      return se.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 1, 1, 1], 3)), se;
    }, f = {
      X: [
        [new Mesh(A2, i), [1, 0, 0], [0, 0, -Math.PI / 2], null, "fwd"],
        [new Mesh(A2, i), [1, 0, 0], [0, 0, Math.PI / 2], null, "bwd"],
        [new Line(M, p)]
      ],
      Y: [
        [new Mesh(A2, r), [0, 1, 0], null, null, "fwd"],
        [new Mesh(A2, r), [0, 1, 0], [Math.PI, 0, 0], null, "bwd"],
        [new Line(M, v), null, [0, 0, Math.PI / 2]]
      ],
      Z: [
        [new Mesh(A2, a), [0, 0, 1], [Math.PI / 2, 0, 0], null, "fwd"],
        [new Mesh(A2, a), [0, 0, 1], [-Math.PI / 2, 0, 0], null, "bwd"],
        [new Line(M, _), null, [0, -Math.PI / 2, 0]]
      ],
      XYZ: [[new Mesh(new OctahedronGeometry(0.1, 0), l.clone()), [0, 0, 0], [0, 0, 0]]],
      XY: [
        [new Mesh(new PlaneGeometry(0.295, 0.295), c.clone()), [0.15, 0.15, 0]],
        [new Line(M, R), [0.18, 0.3, 0], null, [0.125, 1, 1]],
        [new Line(M, R), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]
      ],
      YZ: [
        [new Mesh(new PlaneGeometry(0.295, 0.295), u.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]],
        [new Line(M, y), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]],
        [new Line(M, y), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
      ],
      XZ: [
        [
          new Mesh(new PlaneGeometry(0.295, 0.295), h.clone()),
          [0.15, 0, 0.15],
          [-Math.PI / 2, 0, 0]
        ],
        [new Line(M, E), [0.18, 0, 0.3], null, [0.125, 1, 1]],
        [new Line(M, E), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
      ]
    }, P = {
      X: [[new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), n), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), n), [0, 0.6, 0]]],
      Z: [[new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), n), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new Mesh(new OctahedronGeometry(0.2, 0), n)]],
      XY: [[new Mesh(new PlaneGeometry(0.4, 0.4), n), [0.2, 0.2, 0]]],
      YZ: [[new Mesh(new PlaneGeometry(0.4, 0.4), n), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
      XZ: [[new Mesh(new PlaneGeometry(0.4, 0.4), n), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]
    }, I = {
      START: [[new Mesh(new OctahedronGeometry(0.01, 2), s), null, null, null, "helper"]],
      END: [[new Mesh(new OctahedronGeometry(0.01, 2), s), null, null, null, "helper"]],
      DELTA: [[new Line(w(), s), null, null, null, "helper"]],
      X: [[new Line(M, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
      Y: [[new Line(M, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
      Z: [[new Line(M, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
    }, K = {
      X: [
        [new Line(d(1, 0.5), p)],
        [new Mesh(new OctahedronGeometry(0.04, 0), i), [0, 0, 0.99], null, [1, 3, 1]]
      ],
      Y: [
        [new Line(d(1, 0.5), v), null, [0, 0, -Math.PI / 2]],
        [new Mesh(new OctahedronGeometry(0.04, 0), r), [0, 0, 0.99], null, [3, 1, 1]]
      ],
      Z: [
        [new Line(d(1, 0.5), _), null, [0, Math.PI / 2, 0]],
        [new Mesh(new OctahedronGeometry(0.04, 0), a), [0.99, 0, 0], null, [1, 3, 1]]
      ],
      E: [
        [new Line(d(1.25, 1), g), null, [0, Math.PI / 2, 0]],
        [
          new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), g),
          [1.17, 0, 0],
          [0, 0, -Math.PI / 2],
          [1, 1, 1e-3]
        ],
        [
          new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), g),
          [-1.17, 0, 0],
          [0, 0, Math.PI / 2],
          [1, 1, 1e-3]
        ],
        [
          new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), g),
          [0, -1.17, 0],
          [Math.PI, 0, 0],
          [1, 1, 1e-3]
        ],
        [
          new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), g),
          [0, 1.17, 0],
          [0, 0, 0],
          [1, 1, 1e-3]
        ]
      ],
      XYZE: [[new Line(d(1, 1), T), null, [0, Math.PI / 2, 0]]]
    }, N = {
      AXIS: [[new Line(M, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]]
    }, Z = {
      X: [[new Mesh(new TorusGeometry(1, 0.1, 4, 24), n), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
      Y: [[new Mesh(new TorusGeometry(1, 0.1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]]],
      Z: [[new Mesh(new TorusGeometry(1, 0.1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]]],
      E: [[new Mesh(new TorusGeometry(1.25, 0.1, 2, 24), n)]],
      XYZE: [[new Mesh(new SphereGeometry(0.7, 10, 8), n)]]
    }, W = {
      X: [
        [new Mesh(x, i), [0.8, 0, 0], [0, 0, -Math.PI / 2]],
        [new Line(M, p), null, null, [0.8, 1, 1]]
      ],
      Y: [
        [new Mesh(x, r), [0, 0.8, 0]],
        [new Line(M, v), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]
      ],
      Z: [
        [new Mesh(x, a), [0, 0, 0.8], [Math.PI / 2, 0, 0]],
        [new Line(M, _), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]
      ],
      XY: [
        [new Mesh(x, c), [0.85, 0.85, 0], null, [2, 2, 0.2]],
        [new Line(M, R), [0.855, 0.98, 0], null, [0.125, 1, 1]],
        [new Line(M, R), [0.98, 0.855, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]
      ],
      YZ: [
        [new Mesh(x, u), [0, 0.85, 0.85], null, [0.2, 2, 2]],
        [new Line(M, y), [0, 0.855, 0.98], [0, 0, Math.PI / 2], [0.125, 1, 1]],
        [new Line(M, y), [0, 0.98, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
      ],
      XZ: [
        [new Mesh(x, h), [0.85, 0, 0.85], null, [2, 0.2, 2]],
        [new Line(M, E), [0.855, 0, 0.98], null, [0.125, 1, 1]],
        [new Line(M, E), [0.98, 0, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
      ],
      XYZX: [[new Mesh(new BoxGeometry(0.125, 0.125, 0.125), l.clone()), [1.1, 0, 0]]],
      XYZY: [[new Mesh(new BoxGeometry(0.125, 0.125, 0.125), l.clone()), [0, 1.1, 0]]],
      XYZZ: [[new Mesh(new BoxGeometry(0.125, 0.125, 0.125), l.clone()), [0, 0, 1.1]]]
    }, X = {
      X: [[new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), n), [0.5, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), n), [0, 0.5, 0]]],
      Z: [[new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), n), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
      XY: [[new Mesh(x, n), [0.85, 0.85, 0], null, [3, 3, 0.2]]],
      YZ: [[new Mesh(x, n), [0, 0.85, 0.85], null, [0.2, 3, 3]]],
      XZ: [[new Mesh(x, n), [0.85, 0, 0.85], null, [3, 0.2, 3]]],
      XYZX: [[new Mesh(new BoxGeometry(0.2, 0.2, 0.2), n), [1.1, 0, 0]]],
      XYZY: [[new Mesh(new BoxGeometry(0.2, 0.2, 0.2), n), [0, 1.1, 0]]],
      XYZZ: [[new Mesh(new BoxGeometry(0.2, 0.2, 0.2), n), [0, 0, 1.1]]]
    }, V = {
      X: [[new Line(M, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
      Y: [[new Line(M, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
      Z: [[new Line(M, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
    }, ne = (se) => {
      const he = new Object3D();
      for (let H in se)
        for (let k = se[H].length; k--; ) {
          const b = se[H][k][0].clone(), U = se[H][k][1], J = se[H][k][2], F = se[H][k][3], B = se[H][k][4];
          b.name = H, b.tag = B, U && b.position.set(U[0], U[1], U[2]), J && b.rotation.set(J[0], J[1], J[2]), F && b.scale.set(F[0], F[1], F[2]), b.updateMatrix();
          const S = b.geometry.clone();
          S.applyMatrix4(b.matrix), b.geometry = S, b.renderOrder = 1 / 0, b.position.set(0, 0, 0), b.rotation.set(0, 0, 0), b.scale.set(1, 1, 1), he.add(b);
        }
      return he;
    };
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = ne(f)), this.add(this.gizmo.rotate = ne(K)), this.add(this.gizmo.scale = ne(W)), this.add(this.picker.translate = ne(P)), this.add(this.picker.rotate = ne(Z)), this.add(this.picker.scale = ne(X)), this.add(this.helper.translate = ne(I)), this.add(this.helper.rotate = ne(N)), this.add(this.helper.scale = ne(V)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
  }
};
var Kc = class extends Mesh {
  constructor() {
    super(
      new PlaneGeometry(1e5, 1e5, 2, 2),
      new MeshBasicMaterial({
        visible: false,
        wireframe: true,
        side: DoubleSide,
        transparent: true,
        opacity: 0.1,
        toneMapped: false
      })
    ), q(this, "isTransformControlsPlane", true), q(this, "type", "TransformControlsPlane"), q(this, "unitX", new Vector3(1, 0, 0)), q(this, "unitY", new Vector3(0, 1, 0)), q(this, "unitZ", new Vector3(0, 0, 1)), q(this, "tempVector", new Vector3()), q(this, "dirVector", new Vector3()), q(this, "alignVector", new Vector3()), q(this, "tempMatrix", new Matrix4()), q(this, "identityQuaternion", new Quaternion()), q(this, "cameraQuaternion", new Quaternion()), q(this, "worldPosition", new Vector3()), q(this, "worldQuaternion", new Quaternion()), q(this, "eye", new Vector3()), q(this, "axis", null), q(this, "mode", "translate"), q(this, "space", "world"), q(this, "updateMatrixWorld", () => {
      let e = this.space;
      switch (this.position.copy(this.worldPosition), this.mode === "scale" && (e = "local"), this.unitX.set(1, 0, 0).applyQuaternion(e === "local" ? this.worldQuaternion : this.identityQuaternion), this.unitY.set(0, 1, 0).applyQuaternion(e === "local" ? this.worldQuaternion : this.identityQuaternion), this.unitZ.set(0, 0, 1).applyQuaternion(e === "local" ? this.worldQuaternion : this.identityQuaternion), this.alignVector.copy(this.unitY), this.mode) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              this.alignVector.copy(this.eye).cross(this.unitX), this.dirVector.copy(this.unitX).cross(this.alignVector);
              break;
            case "Y":
              this.alignVector.copy(this.eye).cross(this.unitY), this.dirVector.copy(this.unitY).cross(this.alignVector);
              break;
            case "Z":
              this.alignVector.copy(this.eye).cross(this.unitZ), this.dirVector.copy(this.unitZ).cross(this.alignVector);
              break;
            case "XY":
              this.dirVector.copy(this.unitZ);
              break;
            case "YZ":
              this.dirVector.copy(this.unitX);
              break;
            case "XZ":
              this.alignVector.copy(this.unitZ), this.dirVector.copy(this.unitY);
              break;
            case "XYZ":
            case "E":
              this.dirVector.set(0, 0, 0);
              break;
          }
          break;
        case "rotate":
        default:
          this.dirVector.set(0, 0, 0);
      }
      this.dirVector.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector), this.quaternion.setFromRotationMatrix(this.tempMatrix)), super.updateMatrixWorld();
    });
  }
};
var qc = Object.defineProperty;
var Qc = (o, e, t) => e in o ? qc(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var Ze = (o, e, t) => (Qc(o, typeof e != "symbol" ? e + "" : e, t), t);
var Rn = new Euler(0, 0, 0, "YXZ");
var Cn = new Vector3();
var Jc = { type: "change" };
var eu = { type: "lock" };
var tu = { type: "unlock" };
var Ur = Math.PI / 2;
var qi = class extends EventDispatcher {
  constructor(e, t) {
    super(), Ze(this, "camera"), Ze(this, "domElement"), Ze(this, "isLocked"), Ze(this, "minPolarAngle"), Ze(this, "maxPolarAngle"), Ze(this, "pointerSpeed"), Ze(this, "onMouseMove", (n) => {
      if (!this.domElement || this.isLocked === false)
        return;
      const s = n.movementX || n.mozMovementX || n.webkitMovementX || 0, i = n.movementY || n.mozMovementY || n.webkitMovementY || 0;
      Rn.setFromQuaternion(this.camera.quaternion), Rn.y -= s * 2e-3 * this.pointerSpeed, Rn.x -= i * 2e-3 * this.pointerSpeed, Rn.x = Math.max(Ur - this.maxPolarAngle, Math.min(Ur - this.minPolarAngle, Rn.x)), this.camera.quaternion.setFromEuler(Rn), this.dispatchEvent(Jc);
    }), Ze(this, "onPointerlockChange", () => {
      this.domElement && (this.domElement.ownerDocument.pointerLockElement === this.domElement ? (this.dispatchEvent(eu), this.isLocked = true) : (this.dispatchEvent(tu), this.isLocked = false));
    }), Ze(this, "onPointerlockError", () => {
      console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
    }), Ze(this, "connect", (n) => {
      this.domElement = n || this.domElement, this.domElement && (this.domElement.ownerDocument.addEventListener("mousemove", this.onMouseMove), this.domElement.ownerDocument.addEventListener("pointerlockchange", this.onPointerlockChange), this.domElement.ownerDocument.addEventListener("pointerlockerror", this.onPointerlockError));
    }), Ze(this, "disconnect", () => {
      this.domElement && (this.domElement.ownerDocument.removeEventListener("mousemove", this.onMouseMove), this.domElement.ownerDocument.removeEventListener("pointerlockchange", this.onPointerlockChange), this.domElement.ownerDocument.removeEventListener("pointerlockerror", this.onPointerlockError));
    }), Ze(this, "dispose", () => {
      this.disconnect();
    }), Ze(this, "getObject", () => this.camera), Ze(this, "direction", new Vector3(0, 0, -1)), Ze(this, "getDirection", (n) => n.copy(this.direction).applyQuaternion(this.camera.quaternion)), Ze(this, "moveForward", (n) => {
      Cn.setFromMatrixColumn(this.camera.matrix, 0), Cn.crossVectors(this.camera.up, Cn), this.camera.position.addScaledVector(Cn, n);
    }), Ze(this, "moveRight", (n) => {
      Cn.setFromMatrixColumn(this.camera.matrix, 0), this.camera.position.addScaledVector(Cn, n);
    }), Ze(this, "lock", () => {
      this.domElement && this.domElement.requestPointerLock();
    }), Ze(this, "unlock", () => {
      this.domElement && this.domElement.ownerDocument.exitPointerLock();
    }), this.camera = e, this.domElement = t, this.isLocked = false, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1, t && this.connect(t);
  }
};
var nu = Object.defineProperty;
var su = (o, e, t) => e in o ? nu(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var ge = (o, e, t) => (su(o, typeof e != "symbol" ? e + "" : e, t), t);
var As = new Ray();
var Br = new Plane();
var iu = Math.cos(70 * (Math.PI / 180));
var Nr2 = (o, e) => (o % e + e) % e;
var wa = class extends EventDispatcher {
  constructor(e, t) {
    super(), ge(this, "object"), ge(this, "domElement"), ge(this, "enabled", true), ge(this, "target", new Vector3()), ge(this, "minDistance", 0), ge(this, "maxDistance", 1 / 0), ge(this, "minZoom", 0), ge(this, "maxZoom", 1 / 0), ge(this, "minPolarAngle", 0), ge(this, "maxPolarAngle", Math.PI), ge(this, "minAzimuthAngle", -1 / 0), ge(this, "maxAzimuthAngle", 1 / 0), ge(this, "enableDamping", false), ge(this, "dampingFactor", 0.05), ge(this, "enableZoom", true), ge(this, "zoomSpeed", 1), ge(this, "enableRotate", true), ge(this, "rotateSpeed", 1), ge(this, "enablePan", true), ge(this, "panSpeed", 1), ge(this, "screenSpacePanning", true), ge(this, "keyPanSpeed", 7), ge(this, "zoomToCursor", false), ge(this, "autoRotate", false), ge(this, "autoRotateSpeed", 2), ge(this, "reverseOrbit", false), ge(this, "reverseHorizontalOrbit", false), ge(this, "reverseVerticalOrbit", false), ge(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), ge(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    }), ge(this, "touches", { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }), ge(this, "target0"), ge(this, "position0"), ge(this, "zoom0"), ge(this, "_domElementKeyEvents", null), ge(this, "getPolarAngle"), ge(this, "getAzimuthalAngle"), ge(this, "setPolarAngle"), ge(this, "setAzimuthalAngle"), ge(this, "getDistance"), ge(this, "listenToKeyEvents"), ge(this, "stopListenToKeyEvents"), ge(this, "saveState"), ge(this, "reset"), ge(this, "update"), ge(this, "connect"), ge(this, "dispose"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => u.phi, this.getAzimuthalAngle = () => u.theta, this.setPolarAngle = (j) => {
      let ie = Nr2(j, 2 * Math.PI), ve = u.phi;
      ve < 0 && (ve += 2 * Math.PI), ie < 0 && (ie += 2 * Math.PI);
      let Oe = Math.abs(ie - ve);
      2 * Math.PI - Oe < Oe && (ie < ve ? ie += 2 * Math.PI : ve += 2 * Math.PI), h.phi = ie - ve, n.update();
    }, this.setAzimuthalAngle = (j) => {
      let ie = Nr2(j, 2 * Math.PI), ve = u.theta;
      ve < 0 && (ve += 2 * Math.PI), ie < 0 && (ie += 2 * Math.PI);
      let Oe = Math.abs(ie - ve);
      2 * Math.PI - Oe < Oe && (ie < ve ? ie += 2 * Math.PI : ve += 2 * Math.PI), h.theta = ie - ve, n.update();
    }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = (j) => {
      j.addEventListener("keydown", An), this._domElementKeyEvents = j;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", An), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = () => {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(s), n.update(), l = a.NONE;
    }, this.update = (() => {
      const j = new Vector3(), ie = new Vector3(0, 1, 0), ve = new Quaternion().setFromUnitVectors(e.up, ie), Oe = ve.clone().invert(), Qe = new Vector3(), Ut = new Quaternion(), Zt = 2 * Math.PI;
      return function() {
        const Sr = n.object.position;
        ve.setFromUnitVectors(e.up, ie), Oe.copy(ve).invert(), j.copy(Sr).sub(n.target), j.applyQuaternion(ve), u.setFromVector3(j), n.autoRotate && l === a.NONE && N(I()), n.enableDamping ? (u.theta += h.theta * n.dampingFactor, u.phi += h.phi * n.dampingFactor) : (u.theta += h.theta, u.phi += h.phi);
        let Bt = n.minAzimuthAngle, Nt = n.maxAzimuthAngle;
        isFinite(Bt) && isFinite(Nt) && (Bt < -Math.PI ? Bt += Zt : Bt > Math.PI && (Bt -= Zt), Nt < -Math.PI ? Nt += Zt : Nt > Math.PI && (Nt -= Zt), Bt <= Nt ? u.theta = Math.max(Bt, Math.min(Nt, u.theta)) : u.theta = u.theta > (Bt + Nt) / 2 ? Math.max(Bt, u.theta) : Math.min(Nt, u.theta)), u.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, u.phi)), u.makeSafe(), n.enableDamping === true ? n.target.addScaledVector(p, n.dampingFactor) : n.target.add(p), n.zoomToCursor && w || n.object.isOrthographicCamera ? u.radius = H(u.radius) : u.radius = H(u.radius * m), j.setFromSpherical(u), j.applyQuaternion(Oe), Sr.copy(n.target).add(j), n.object.matrixAutoUpdate || n.object.updateMatrix(), n.object.lookAt(n.target), n.enableDamping === true ? (h.theta *= 1 - n.dampingFactor, h.phi *= 1 - n.dampingFactor, p.multiplyScalar(1 - n.dampingFactor)) : (h.set(0, 0, 0), p.set(0, 0, 0));
        let Vn = false;
        if (n.zoomToCursor && w) {
          let Yn = null;
          if (n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera) {
            const Xn = j.length();
            Yn = H(Xn * m);
            const _s = Xn - Yn;
            n.object.position.addScaledVector(M, _s), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const Xn = new Vector3(d.x, d.y, 0);
            Xn.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / m)), n.object.updateProjectionMatrix(), Vn = true;
            const _s = new Vector3(d.x, d.y, 0);
            _s.unproject(n.object), n.object.position.sub(_s).add(Xn), n.object.updateMatrixWorld(), Yn = j.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = false;
          Yn !== null && (n.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Yn).add(n.object.position) : (As.origin.copy(n.object.position), As.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(As.direction)) < iu ? e.lookAt(n.target) : (Br.setFromNormalAndCoplanarPoint(n.object.up, n.target), As.intersectPlane(Br, n.target))));
        } else
          n.object instanceof OrthographicCamera && n.object.isOrthographicCamera && (Vn = m !== 1, Vn && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / m)), n.object.updateProjectionMatrix()));
        return m = 1, w = false, Vn || Qe.distanceToSquared(n.object.position) > c || 8 * (1 - Ut.dot(n.object.quaternion)) > c ? (n.dispatchEvent(s), Qe.copy(n.object.position), Ut.copy(n.object.quaternion), Vn = false, true) : false;
      };
    })(), this.connect = (j) => {
      j === document && console.error(
        'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
      ), n.domElement = j, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", br), n.domElement.addEventListener("pointerdown", Me), n.domElement.addEventListener("pointercancel", kt), n.domElement.addEventListener("wheel", gt);
    }, this.dispose = () => {
      var j, ie, ve, Oe, Qe, Ut;
      (j = n.domElement) == null || j.removeEventListener("contextmenu", br), (ie = n.domElement) == null || ie.removeEventListener("pointerdown", Me), (ve = n.domElement) == null || ve.removeEventListener("pointercancel", kt), (Oe = n.domElement) == null || Oe.removeEventListener("wheel", gt), (Qe = n.domElement) == null || Qe.ownerDocument.removeEventListener("pointermove", Se), (Ut = n.domElement) == null || Ut.ownerDocument.removeEventListener("pointerup", qe), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", An);
    };
    const n = this, s = { type: "change" }, i = { type: "start" }, r = { type: "end" }, a = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let l = a.NONE;
    const c = 1e-6, u = new Spherical(), h = new Spherical();
    let m = 1;
    const p = new Vector3(), v = new Vector2(), _ = new Vector2(), y = new Vector2(), E = new Vector2(), R = new Vector2(), T = new Vector2(), g = new Vector2(), A2 = new Vector2(), x = new Vector2(), M = new Vector3(), d = new Vector2();
    let w = false;
    const f = [], P = {};
    function I() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function K() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function N(j) {
      n.reverseOrbit || n.reverseHorizontalOrbit ? h.theta += j : h.theta -= j;
    }
    function Z(j) {
      n.reverseOrbit || n.reverseVerticalOrbit ? h.phi += j : h.phi -= j;
    }
    const W = (() => {
      const j = new Vector3();
      return function(ve, Oe) {
        j.setFromMatrixColumn(Oe, 0), j.multiplyScalar(-ve), p.add(j);
      };
    })(), X = (() => {
      const j = new Vector3();
      return function(ve, Oe) {
        n.screenSpacePanning === true ? j.setFromMatrixColumn(Oe, 1) : (j.setFromMatrixColumn(Oe, 0), j.crossVectors(n.object.up, j)), j.multiplyScalar(ve), p.add(j);
      };
    })(), V = (() => {
      const j = new Vector3();
      return function(ve, Oe) {
        const Qe = n.domElement;
        if (Qe && n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera) {
          const Ut = n.object.position;
          j.copy(Ut).sub(n.target);
          let Zt = j.length();
          Zt *= Math.tan(n.object.fov / 2 * Math.PI / 180), W(2 * ve * Zt / Qe.clientHeight, n.object.matrix), X(2 * Oe * Zt / Qe.clientHeight, n.object.matrix);
        } else
          Qe && n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? (W(
            ve * (n.object.right - n.object.left) / n.object.zoom / Qe.clientWidth,
            n.object.matrix
          ), X(
            Oe * (n.object.top - n.object.bottom) / n.object.zoom / Qe.clientHeight,
            n.object.matrix
          )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
      };
    })();
    function ne(j) {
      n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera || n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? m /= j : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function se(j) {
      n.object instanceof PerspectiveCamera && n.object.isPerspectiveCamera || n.object instanceof OrthographicCamera && n.object.isOrthographicCamera ? m *= j : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function he(j) {
      if (!n.zoomToCursor || !n.domElement)
        return;
      w = true;
      const ie = n.domElement.getBoundingClientRect(), ve = j.clientX - ie.left, Oe = j.clientY - ie.top, Qe = ie.width, Ut = ie.height;
      d.x = ve / Qe * 2 - 1, d.y = -(Oe / Ut) * 2 + 1, M.set(d.x, d.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function H(j) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, j));
    }
    function k(j) {
      v.set(j.clientX, j.clientY);
    }
    function b(j) {
      he(j), g.set(j.clientX, j.clientY);
    }
    function U(j) {
      E.set(j.clientX, j.clientY);
    }
    function J(j) {
      _.set(j.clientX, j.clientY), y.subVectors(_, v).multiplyScalar(n.rotateSpeed);
      const ie = n.domElement;
      ie && (N(2 * Math.PI * y.x / ie.clientHeight), Z(2 * Math.PI * y.y / ie.clientHeight)), v.copy(_), n.update();
    }
    function F(j) {
      A2.set(j.clientX, j.clientY), x.subVectors(A2, g), x.y > 0 ? ne(K()) : x.y < 0 && se(K()), g.copy(A2), n.update();
    }
    function B(j) {
      R.set(j.clientX, j.clientY), T.subVectors(R, E).multiplyScalar(n.panSpeed), V(T.x, T.y), E.copy(R), n.update();
    }
    function S(j) {
      he(j), j.deltaY < 0 ? se(K()) : j.deltaY > 0 && ne(K()), n.update();
    }
    function C(j) {
      let ie = false;
      switch (j.code) {
        case n.keys.UP:
          V(0, n.keyPanSpeed), ie = true;
          break;
        case n.keys.BOTTOM:
          V(0, -n.keyPanSpeed), ie = true;
          break;
        case n.keys.LEFT:
          V(n.keyPanSpeed, 0), ie = true;
          break;
        case n.keys.RIGHT:
          V(-n.keyPanSpeed, 0), ie = true;
          break;
      }
      ie && (j.preventDefault(), n.update());
    }
    function D() {
      if (f.length == 1)
        v.set(f[0].pageX, f[0].pageY);
      else {
        const j = 0.5 * (f[0].pageX + f[1].pageX), ie = 0.5 * (f[0].pageY + f[1].pageY);
        v.set(j, ie);
      }
    }
    function G() {
      if (f.length == 1)
        E.set(f[0].pageX, f[0].pageY);
      else {
        const j = 0.5 * (f[0].pageX + f[1].pageX), ie = 0.5 * (f[0].pageY + f[1].pageY);
        E.set(j, ie);
      }
    }
    function $() {
      const j = f[0].pageX - f[1].pageX, ie = f[0].pageY - f[1].pageY, ve = Math.sqrt(j * j + ie * ie);
      g.set(0, ve);
    }
    function Y() {
      n.enableZoom && $(), n.enablePan && G();
    }
    function te() {
      n.enableZoom && $(), n.enableRotate && D();
    }
    function O(j) {
      if (f.length == 1)
        _.set(j.pageX, j.pageY);
      else {
        const ve = si(j), Oe = 0.5 * (j.pageX + ve.x), Qe = 0.5 * (j.pageY + ve.y);
        _.set(Oe, Qe);
      }
      y.subVectors(_, v).multiplyScalar(n.rotateSpeed);
      const ie = n.domElement;
      ie && (N(2 * Math.PI * y.x / ie.clientHeight), Z(2 * Math.PI * y.y / ie.clientHeight)), v.copy(_);
    }
    function L(j) {
      if (f.length == 1)
        R.set(j.pageX, j.pageY);
      else {
        const ie = si(j), ve = 0.5 * (j.pageX + ie.x), Oe = 0.5 * (j.pageY + ie.y);
        R.set(ve, Oe);
      }
      T.subVectors(R, E).multiplyScalar(n.panSpeed), V(T.x, T.y), E.copy(R);
    }
    function re2(j) {
      const ie = si(j), ve = j.pageX - ie.x, Oe = j.pageY - ie.y, Qe = Math.sqrt(ve * ve + Oe * Oe);
      A2.set(0, Qe), x.set(0, Math.pow(A2.y / g.y, n.zoomSpeed)), ne(x.y), g.copy(A2);
    }
    function ce(j) {
      n.enableZoom && re2(j), n.enablePan && L(j);
    }
    function be(j) {
      n.enableZoom && re2(j), n.enableRotate && O(j);
    }
    function Me(j) {
      var ie, ve;
      n.enabled !== false && (f.length === 0 && ((ie = n.domElement) == null || ie.ownerDocument.addEventListener("pointermove", Se), (ve = n.domElement) == null || ve.ownerDocument.addEventListener("pointerup", qe)), il(j), j.pointerType === "touch" ? nl(j) : jn(j));
    }
    function Se(j) {
      n.enabled !== false && (j.pointerType === "touch" ? sl(j) : Sn(j));
    }
    function qe(j) {
      var ie, ve, Oe;
      Er(j), f.length === 0 && ((ie = n.domElement) == null || ie.releasePointerCapture(j.pointerId), (ve = n.domElement) == null || ve.ownerDocument.removeEventListener("pointermove", Se), (Oe = n.domElement) == null || Oe.ownerDocument.removeEventListener("pointerup", qe)), n.dispatchEvent(r), l = a.NONE;
    }
    function kt(j) {
      Er(j);
    }
    function jn(j) {
      let ie;
      switch (j.button) {
        case 0:
          ie = n.mouseButtons.LEFT;
          break;
        case 1:
          ie = n.mouseButtons.MIDDLE;
          break;
        case 2:
          ie = n.mouseButtons.RIGHT;
          break;
        default:
          ie = -1;
      }
      switch (ie) {
        case MOUSE.DOLLY:
          if (n.enableZoom === false)
            return;
          b(j), l = a.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (j.ctrlKey || j.metaKey || j.shiftKey) {
            if (n.enablePan === false)
              return;
            U(j), l = a.PAN;
          } else {
            if (n.enableRotate === false)
              return;
            k(j), l = a.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (j.ctrlKey || j.metaKey || j.shiftKey) {
            if (n.enableRotate === false)
              return;
            k(j), l = a.ROTATE;
          } else {
            if (n.enablePan === false)
              return;
            U(j), l = a.PAN;
          }
          break;
        default:
          l = a.NONE;
      }
      l !== a.NONE && n.dispatchEvent(i);
    }
    function Sn(j) {
      if (n.enabled !== false)
        switch (l) {
          case a.ROTATE:
            if (n.enableRotate === false)
              return;
            J(j);
            break;
          case a.DOLLY:
            if (n.enableZoom === false)
              return;
            F(j);
            break;
          case a.PAN:
            if (n.enablePan === false)
              return;
            B(j);
            break;
        }
    }
    function gt(j) {
      n.enabled === false || n.enableZoom === false || l !== a.NONE && l !== a.ROTATE || (j.preventDefault(), n.dispatchEvent(i), S(j), n.dispatchEvent(r));
    }
    function An(j) {
      n.enabled === false || n.enablePan === false || C(j);
    }
    function nl(j) {
      switch (Mr(j), f.length) {
        case 1:
          switch (n.touches.ONE) {
            case TOUCH.ROTATE:
              if (n.enableRotate === false)
                return;
              D(), l = a.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (n.enablePan === false)
                return;
              G(), l = a.TOUCH_PAN;
              break;
            default:
              l = a.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (n.enableZoom === false && n.enablePan === false)
                return;
              Y(), l = a.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (n.enableZoom === false && n.enableRotate === false)
                return;
              te(), l = a.TOUCH_DOLLY_ROTATE;
              break;
            default:
              l = a.NONE;
          }
          break;
        default:
          l = a.NONE;
      }
      l !== a.NONE && n.dispatchEvent(i);
    }
    function sl(j) {
      switch (Mr(j), l) {
        case a.TOUCH_ROTATE:
          if (n.enableRotate === false)
            return;
          O(j), n.update();
          break;
        case a.TOUCH_PAN:
          if (n.enablePan === false)
            return;
          L(j), n.update();
          break;
        case a.TOUCH_DOLLY_PAN:
          if (n.enableZoom === false && n.enablePan === false)
            return;
          ce(j), n.update();
          break;
        case a.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === false && n.enableRotate === false)
            return;
          be(j), n.update();
          break;
        default:
          l = a.NONE;
      }
    }
    function br(j) {
      n.enabled !== false && j.preventDefault();
    }
    function il(j) {
      f.push(j);
    }
    function Er(j) {
      delete P[j.pointerId];
      for (let ie = 0; ie < f.length; ie++)
        if (f[ie].pointerId == j.pointerId) {
          f.splice(ie, 1);
          return;
        }
    }
    function Mr(j) {
      let ie = P[j.pointerId];
      ie === void 0 && (ie = new Vector2(), P[j.pointerId] = ie), ie.set(j.pageX, j.pageY);
    }
    function si(j) {
      const ie = j.pointerId === f[0].pointerId ? f[1] : f[0];
      return P[ie.pointerId];
    }
    t !== void 0 && this.connect(t), this.update();
  }
};
var ru = class extends wa {
  constructor(e, t) {
    super(e, t), this.screenSpacePanning = false, this.mouseButtons.LEFT = MOUSE.PAN, this.mouseButtons.RIGHT = MOUSE.ROTATE, this.touches.ONE = TOUCH.PAN, this.touches.TWO = TOUCH.DOLLY_ROTATE;
  }
};
var ou = class extends Loader {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new hu(t);
    }), this.register(function(t) {
      return new _u(t);
    }), this.register(function(t) {
      return new xu(t);
    }), this.register(function(t) {
      return new wu(t);
    }), this.register(function(t) {
      return new du(t);
    }), this.register(function(t) {
      return new pu(t);
    }), this.register(function(t) {
      return new mu(t);
    }), this.register(function(t) {
      return new gu(t);
    }), this.register(function(t) {
      return new uu(t);
    }), this.register(function(t) {
      return new yu(t);
    }), this.register(function(t) {
      return new fu(t);
    }), this.register(function(t) {
      return new vu(t);
    }), this.register(function(t) {
      return new lu(t);
    }), this.register(function(t) {
      return new Tu(t);
    }), this.register(function(t) {
      return new bu(t);
    });
  }
  load(e, t, n, s) {
    const i = this;
    let r;
    this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = LoaderUtils.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, l = new FileLoader(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(
      e,
      function(c) {
        try {
          i.parse(
            c,
            r,
            function(u) {
              t(u), i.manager.itemEnd(e);
            },
            a
          );
        } catch (u) {
          a(u);
        }
      },
      n,
      a
    );
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, s) {
    let i;
    const r = {}, a = {};
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))) === Ta) {
        try {
          r[Ce.KHR_BINARY_GLTF] = new Eu(e);
        } catch (u) {
          s && s(u);
          return;
        }
        i = JSON.parse(r[Ce.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(LoaderUtils.decodeText(new Uint8Array(e)));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Uu(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const u = this.pluginCallbacks[c](l);
      a[u.name] = u, r[u.name] = true;
    }
    if (i.extensionsUsed)
      for (let c = 0; c < i.extensionsUsed.length; ++c) {
        const u = i.extensionsUsed[c], h = i.extensionsRequired || [];
        switch (u) {
          case Ce.KHR_MATERIALS_UNLIT:
            r[u] = new cu();
            break;
          case Ce.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new Mu(i, this.dracoLoader);
            break;
          case Ce.KHR_TEXTURE_TRANSFORM:
            r[u] = new Su();
            break;
          case Ce.KHR_MESH_QUANTIZATION:
            r[u] = new Au();
            break;
          default:
            h.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(r), l.setPlugins(a), l.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
};
function au() {
  let o = {};
  return {
    get: function(e) {
      return o[e];
    },
    add: function(e, t) {
      o[e] = t;
    },
    remove: function(e) {
      delete o[e];
    },
    removeAll: function() {
      o = {};
    }
  };
}
var Ce = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
var lu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s)
      return s;
    const i = t.json, l = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Color(16777215);
    l.color !== void 0 && u.fromArray(l.color);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new DirectionalLight(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new PointLight(u), c.distance = h;
        break;
      case "spot":
        c = new SpotLight(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, an(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
};
var cu = class {
  constructor() {
    this.name = Ce.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Color(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.fromArray(r), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, 3001));
    }
    return Promise.all(s);
  }
};
var uu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
};
var hu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const a = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Vector2(a, a);
    }
    return Promise.all(i);
  }
};
var fu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(
      n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)
    ), Promise.all(i);
  }
};
var du = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = s.extensions[this.name];
    return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, 3001)), r.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
};
var pu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
};
var mu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const a = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Color(a[0], a[1], a[2]), Promise.all(i);
  }
};
var gu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
};
var yu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const a = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Color(a[0], a[1], a[2]), r.specularColorTexture !== void 0 && i.push(
      n.assignTexture(t, "specularColorMap", r.specularColorTexture, 3001)
      // sRGBEncoding
    ), Promise.all(i);
  }
};
var vu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
};
var _u = class {
  constructor(e) {
    this.parser = e, this.name = Ce.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
};
var xu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], a = s.images[r.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
};
var wu = class {
  constructor(e) {
    this.parser = e, this.name = Ce.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], a = s.images[r.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
};
var Tu = class {
  constructor(e) {
    this.name = Ce.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, h = s.byteStride, m = new Uint8Array(a, l, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(u, h, m, s.mode, s.filter).then(function(p) {
          return p.buffer;
        }) : r.ready.then(function() {
          const p = new ArrayBuffer(u * h);
          return r.decodeGltfBuffer(
            new Uint8Array(p),
            u,
            h,
            m,
            s.mode,
            s.filter
          ), p;
        });
      });
    } else
      return null;
  }
};
var bu = class {
  constructor(e) {
    this.name = Ce.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== vt.TRIANGLES && c.mode !== vt.TRIANGLE_STRIP && c.mode !== vt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in r)
      a.push(
        this.parser.getDependency("accessor", r[c]).then((u) => (l[c] = u, l[c]))
      );
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], m = c[0].count, p = [];
      for (const v of h) {
        const _ = new Matrix4(), y = new Vector3(), E = new Quaternion(), R = new Vector3(1, 1, 1), T = new InstancedMesh(v.geometry, v.material, m);
        for (let g = 0; g < m; g++)
          l.TRANSLATION && y.fromBufferAttribute(l.TRANSLATION, g), l.ROTATION && E.fromBufferAttribute(l.ROTATION, g), l.SCALE && R.fromBufferAttribute(l.SCALE, g), T.setMatrixAt(g, _.compose(y, E, R));
        for (const g in l)
          g !== "TRANSLATION" && g !== "ROTATION" && g !== "SCALE" && v.geometry.setAttribute(g, l[g]);
        Object3D.prototype.copy.call(T, v), this.parser.assignFinalMaterial(T), p.push(T);
      }
      return u.isGroup ? (u.clear(), u.add(...p), u) : p[0];
    }));
  }
};
var Ta = "glTF";
var Wn = 12;
var zr = { JSON: 1313821514, BIN: 5130562 };
var Eu = class {
  constructor(e) {
    this.name = Ce.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Wn);
    if (this.header = {
      magic: LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, true),
      length: t.getUint32(8, true)
    }, this.header.magic !== Ta)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Wn, s = new DataView(e, Wn);
    let i = 0;
    for (; i < n; ) {
      const r = s.getUint32(i, true);
      i += 4;
      const a = s.getUint32(i, true);
      if (i += 4, a === zr.JSON) {
        const l = new Uint8Array(e, Wn + i, r);
        this.content = LoaderUtils.decodeText(l);
      } else if (a === zr.BIN) {
        const l = Wn + i;
        this.body = e.slice(l, l + r);
      }
      i += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
};
var Mu = class {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ce.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in r) {
      const h = Qi[u] || u.toLowerCase();
      a[h] = r[u];
    }
    for (const u in e.attributes) {
      const h = Qi[u] || u.toLowerCase();
      if (r[u] !== void 0) {
        const m = n.accessors[e.attributes[u]], p = Nn[m.componentType];
        c[h] = p.name, l[h] = m.normalized === true;
      }
    }
    return t.getDependency("bufferView", i).then(function(u) {
      return new Promise(function(h) {
        s.decodeDracoFile(
          u,
          function(m) {
            for (const p in m.attributes) {
              const v = m.attributes[p], _ = l[p];
              _ !== void 0 && (v.normalized = _);
            }
            h(m);
          },
          a,
          c
        );
      });
    });
  }
};
var Su = class {
  constructor() {
    this.name = Ce.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
};
var Au = class {
  constructor() {
    this.name = Ce.KHR_MESH_QUANTIZATION;
  }
};
var ba = class extends Interpolant {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let r = 0; r !== s; r++)
      t[r] = n[i + r];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, r = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = s - t, h = (n - t) / u, m = h * h, p = m * h, v = e * c, _ = v - c, y = -2 * p + 3 * m, E = p - m, R = 1 - y, T = E - m + h;
    for (let g = 0; g !== a; g++) {
      const A2 = r[_ + g + a], x = r[_ + g + l] * u, M = r[v + g + a], d = r[v + g] * u;
      i[g] = R * A2 + T * x + y * M + E * d;
    }
    return i;
  }
};
var Pu = new Quaternion();
var Ru = class extends ba {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return Pu.fromArray(i).normalize().toArray(i), i;
  }
};
var vt = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
};
var Nn = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
var Hr = {
  9728: NearestFilter,
  9729: LinearFilter,
  9984: NearestMipmapNearestFilter,
  9985: LinearMipmapNearestFilter,
  9986: NearestMipmapLinearFilter,
  9987: LinearMipmapLinearFilter
};
var Gr = {
  33071: ClampToEdgeWrapping,
  33648: MirroredRepeatWrapping,
  10497: RepeatWrapping
};
var mi = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
var Qi = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...da >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
var Qt = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
};
var Cu = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: InterpolateLinear,
  STEP: InterpolateDiscrete
};
var gi = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Iu(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new MeshStandardMaterial({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: false,
    depthTest: true,
    side: FrontSide
  })), o.DefaultMaterial;
}
function pn(o, e, t) {
  for (const n in t.extensions)
    o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function an(o, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Du(o, e, t) {
  let n = false, s = false, i = false;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = true), h.NORMAL !== void 0 && (s = true), h.COLOR_0 !== void 0 && (i = true), n && s && i)
      break;
  }
  if (!n && !s && !i)
    return Promise.resolve(o);
  const r = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const m = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : o.attributes.position;
      r.push(m);
    }
    if (s) {
      const m = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : o.attributes.normal;
      a.push(m);
    }
    if (i) {
      const m = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : o.attributes.color;
      l.push(m);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], m = c[2];
    return n && (o.morphAttributes.position = u), s && (o.morphAttributes.normal = h), i && (o.morphAttributes.color = m), o.morphTargetsRelative = true, o;
  });
}
function Lu(o, e) {
  if (o.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      o.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (o.morphTargetInfluences.length === t.length) {
      o.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        o.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ou(o) {
  let e;
  const t = o.extensions && o.extensions[Ce.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + yi(t.attributes) : e = o.indices + ":" + yi(o.attributes) + ":" + o.mode, o.targets !== void 0)
    for (let n = 0, s = o.targets.length; n < s; n++)
      e += ":" + yi(o.targets[n]);
  return e;
}
function yi(o) {
  let e = "";
  const t = Object.keys(o).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + o[t[n]] + ";";
  return e;
}
function Ji(o) {
  switch (o) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Fu(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
var ku = new Matrix4();
var Uu = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new au(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, s = false, i = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true, s = navigator.userAgent.indexOf("Firefox") > -1, i = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || s && i < 98 ? this.textureLoader = new TextureLoader(this.options.manager) : this.textureLoader = new ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(
      this._invokeAll(function(r) {
        return r.beforeRoot && r.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const a = {
        scene: r[0][s.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      pn(i, a, s), an(a, s), Promise.all(
        n._invokeAll(function(l) {
          return l.afterRoot && l.afterRoot(a);
        })
      ).then(function() {
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s].joints;
      for (let a = 0, l = r.length; a < l; a++)
        e[r[a]].isBone = true;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = true)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const s = n.clone(), i = (r, a) => {
      const l = this.associations.get(r);
      l != null && this.associations.set(a, l);
      for (const [c, u] of r.children.entries())
        i(u, a.children[c]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s)
        return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(
        s.map(function(i, r) {
          return n.getDependency(e, r);
        })
      ), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ce.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, r) {
      n.load(LoaderUtils.resolveURL(t.uri, s.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const r = mi[s.type], a = Nn[s.componentType], l = s.normalized === true, c = new a(s.count * r);
      return Promise.resolve(new BufferAttribute(c, r, l));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const a = r[0], l = mi[s.type], c = Nn[s.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, m = s.byteOffset || 0, p = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, v = s.normalized === true;
      let _, y;
      if (p && p !== h) {
        const E = Math.floor(m / p), R = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + E + ":" + s.count;
        let T = t.cache.get(R);
        T || (_ = new c(a, E * p, s.count * p / u), T = new InterleavedBuffer(_, p / u), t.cache.add(R, T)), y = new InterleavedBufferAttribute(
          T,
          l,
          m % p / u,
          v
        );
      } else
        a === null ? _ = new c(s.count * l) : _ = new c(a, m, s.count * l), y = new BufferAttribute(_, l, v);
      if (s.sparse !== void 0) {
        const E = mi.SCALAR, R = Nn[s.sparse.indices.componentType], T = s.sparse.indices.byteOffset || 0, g = s.sparse.values.byteOffset || 0, A2 = new R(
          r[1],
          T,
          s.sparse.count * E
        ), x = new c(r[2], g, s.sparse.count * l);
        a !== null && (y = new BufferAttribute(
          y.array.slice(),
          y.itemSize,
          y.normalized
        ));
        for (let M = 0, d = A2.length; M < d; M++) {
          const w = A2[M];
          if (y.setX(w, x[M * l]), l >= 2 && y.setY(w, x[M * l + 1]), l >= 3 && y.setZ(w, x[M * l + 2]), l >= 4 && y.setW(w, x[M * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return y;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, r = t.images[i];
    let a = this.textureLoader;
    if (r.uri) {
      const l = n.manager.getHandler(r.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, r = i.textures[e], a = i.images[t], l = (a.uri || a.bufferView) + ":" + r.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = false, u.name = r.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (u.name = a.uri);
      const m = (i.samplers || {})[r.sampler] || {};
      return u.magFilter = Hr[m.magFilter] || LinearFilter, u.minFilter = Hr[m.minFilter] || LinearMipmapLinearFilter, u.wrapS = Gr[m.wrapS] || RepeatWrapping, u.wrapT = Gr[m.wrapT] || RepeatWrapping, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = s.images[e], a = self.URL || self.webkitURL;
    let l = r.uri || "", c = false;
    if (r.bufferView !== void 0)
      l = n.getDependency("bufferView", r.bufferView).then(function(h) {
        c = true;
        const m = new Blob([h], { type: r.mimeType });
        return l = a.createObjectURL(m), l;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(m, p) {
        let v = m;
        t.isImageBitmapLoader === true && (v = function(_) {
          const y = new Texture(_);
          y.needsUpdate = true, m(y);
        }), t.load(LoaderUtils.resolveURL(h, i.path), v, void 0, p);
      });
    }).then(function(h) {
      return c === true && a.revokeObjectURL(l), h.userData.mimeType = r.mimeType || Fu(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (r = r.clone(), r.channel = n.texCoord), i.extensions[Ce.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Ce.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = i.associations.get(r);
          r = i.extensions[Ce.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), i.associations.set(r, l);
        }
      }
      return s !== void 0 && ("colorSpace" in r ? r.colorSpace = s === 3001 ? "srgb" : "srgb-linear" : r.encoding = s), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new PointsMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new LineBasicMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (s || i || r) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), r && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), i && (l.vertexColors = true), r && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let r;
    const a = {}, l = i.extensions || {}, c = [];
    if (l[Ce.KHR_MATERIALS_UNLIT]) {
      const h = s[Ce.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), c.push(h.extendParams(a, i, t));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (a.color = new Color(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const m = h.baseColorFactor;
        a.color.fromArray(m), a.opacity = m[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, 3001)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(m) {
        return m.getMaterialType && m.getMaterialType(e);
      }), c.push(
        Promise.all(
          this._invokeAll(function(m) {
            return m.extendMaterialParams && m.extendMaterialParams(e, a);
          })
        )
      );
    }
    i.doubleSided === true && (a.side = DoubleSide);
    const u = i.alphaMode || gi.OPAQUE;
    if (u === gi.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === gi.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== MeshBasicMaterial && (c.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new Vector2(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    return i.occlusionTexture !== void 0 && r !== MeshBasicMaterial && (c.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== MeshBasicMaterial && (a.emissive = new Color().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && r !== MeshBasicMaterial && c.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, 3001)), Promise.all(c).then(function() {
      const h = new r(a);
      return i.name && (h.name = i.name), an(h, i), t.associations.set(h, { materials: e }), i.extensions && pn(s, h, i), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = PropertyBinding.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(a) {
      return n[Ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return jr(l, a, t);
      });
    }
    const r = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = Ou(c), h = s[u];
      if (h)
        r.push(h.promise);
      else {
        let m;
        c.extensions && c.extensions[Ce.KHR_DRACO_MESH_COMPRESSION] ? m = i(c) : m = jr(new BufferGeometry(), c, t), s[u] = { primitive: c, promise: m }, r.push(m);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], r = i.primitives, a = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const u = r[l].material === void 0 ? Iu(this.cache) : this.getDependency("material", r[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(r)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let p = 0, v = u.length; p < v; p++) {
        const _ = u[p], y = r[p];
        let E;
        const R = c[p];
        if (y.mode === vt.TRIANGLES || y.mode === vt.TRIANGLE_STRIP || y.mode === vt.TRIANGLE_FAN || y.mode === void 0)
          E = i.isSkinnedMesh === true ? new SkinnedMesh(_, R) : new Mesh(_, R), E.isSkinnedMesh === true && E.normalizeSkinWeights(), y.mode === vt.TRIANGLE_STRIP ? E.geometry = Rr(E.geometry, TriangleStripDrawMode) : y.mode === vt.TRIANGLE_FAN && (E.geometry = Rr(E.geometry, TriangleFanDrawMode));
        else if (y.mode === vt.LINES)
          E = new LineSegments(_, R);
        else if (y.mode === vt.LINE_STRIP)
          E = new Line(_, R);
        else if (y.mode === vt.LINE_LOOP)
          E = new LineLoop(_, R);
        else if (y.mode === vt.POINTS)
          E = new Points(_, R);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + y.mode);
        Object.keys(E.geometry.morphAttributes).length > 0 && Lu(E, i), E.name = t.createUniqueName(i.name || "mesh_" + e), an(E, i), y.extensions && pn(s, E, y), t.assignFinalMaterial(E), h.push(E);
      }
      for (let p = 0, v = h.length; p < v; p++)
        t.associations.set(h[p], {
          meshes: e,
          primitives: p
        });
      if (h.length === 1)
        return i.extensions && pn(s, h[0], i), h[0];
      const m = new Group();
      i.extensions && pn(s, m, i), t.associations.set(m, { meshes: e });
      for (let p = 0, v = h.length; p < v; p++)
        m.add(h[p]);
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new PerspectiveCamera(
      MathUtils.radToDeg(s.yfov),
      s.aspectRatio || 1,
      s.znear || 1,
      s.zfar || 2e6
    ) : n.type === "orthographic" && (t = new OrthographicCamera(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), an(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), r = s, a = [], l = [];
      for (let c = 0, u = r.length; c < u; c++) {
        const h = r[c];
        if (h) {
          a.push(h);
          const m = new Matrix4();
          i !== null && m.fromArray(i.array, c * 16), l.push(m);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Skeleton(a, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const n = this.json.animations[e], s = n.name ? n.name : "animation_" + e, i = [], r = [], a = [], l = [], c = [];
    for (let u = 0, h = n.channels.length; u < h; u++) {
      const m = n.channels[u], p = n.samplers[m.sampler], v = m.target, _ = v.node, y = n.parameters !== void 0 ? n.parameters[p.input] : p.input, E = n.parameters !== void 0 ? n.parameters[p.output] : p.output;
      v.node !== void 0 && (i.push(this.getDependency("node", _)), r.push(this.getDependency("accessor", y)), a.push(this.getDependency("accessor", E)), l.push(p), c.push(v));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(r),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c)
    ]).then(function(u) {
      const h = u[0], m = u[1], p = u[2], v = u[3], _ = u[4], y = [];
      for (let E = 0, R = h.length; E < R; E++) {
        const T = h[E], g = m[E], A2 = p[E], x = v[E], M = _[E];
        if (T === void 0)
          continue;
        T.updateMatrix();
        let d;
        switch (Qt[M.path]) {
          case Qt.weights:
            d = NumberKeyframeTrack;
            break;
          case Qt.rotation:
            d = QuaternionKeyframeTrack;
            break;
          case Qt.position:
          case Qt.scale:
          default:
            d = VectorKeyframeTrack;
            break;
        }
        const w = T.name ? T.name : T.uuid, f = x.interpolation !== void 0 ? Cu[x.interpolation] : InterpolateLinear, P = [];
        Qt[M.path] === Qt.weights ? T.traverse(function(K) {
          K.morphTargetInfluences && P.push(K.name ? K.name : K.uuid);
        }) : P.push(w);
        let I = A2.array;
        if (A2.normalized) {
          const K = Ji(I.constructor), N = new Float32Array(I.length);
          for (let Z = 0, W = I.length; Z < W; Z++)
            N[Z] = I[Z] * K;
          I = N;
        }
        for (let K = 0, N = P.length; K < N; K++) {
          const Z = new d(
            P[K] + "." + Qt[M.path],
            g.array,
            I,
            f
          );
          x.interpolation === "CUBICSPLINE" && (Z.createInterpolant = function(X) {
            const V = this instanceof QuaternionKeyframeTrack ? Ru : ba;
            return new V(this.times, this.values, this.getValueSize() / 3, X);
          }, Z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true), y.push(Z);
        }
      }
      return new AnimationClip(s, void 0, y);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const r = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && r.traverse(function(a) {
        if (a.isMesh)
          for (let l = 0, c = s.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = s.weights[l];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), r = [], a = s.children || [];
    for (let c = 0, u = a.length; c < u; c++)
      r.push(n.getDependency("node", a[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([i, Promise.all(r), l]).then(function(c) {
      const u = c[0], h = c[1], m = c[2];
      m !== null && u.traverse(function(p) {
        p.isSkinnedMesh && p.bind(m, ku);
      });
      for (let p = 0, v = h.length; p < v; p++)
        u.add(h[p]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], r = i.name ? s.createUniqueName(i.name) : "", a = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), i.camera !== void 0 && a.push(
      s.getDependency("camera", i.camera).then(function(c) {
        return s._getNodeRef(s.cameraCache, i.camera, c);
      })
    ), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let u;
      if (i.isBone === true ? u = new Bone() : c.length > 1 ? u = new Group() : c.length === 1 ? u = c[0] : u = new Object3D(), u !== c[0])
        for (let h = 0, m = c.length; h < m; h++)
          u.add(c[h]);
      if (i.name && (u.userData.name = i.name, u.name = r), an(u, i), i.extensions && pn(n, u, i), i.matrix !== void 0) {
        const h = new Matrix4();
        h.fromArray(i.matrix), u.applyMatrix4(h);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      return s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new Group();
    n.name && (i.name = s.createUniqueName(n.name)), an(i, n), n.extensions && pn(t, i, n);
    const r = n.nodes || [], a = [];
    for (let l = 0, c = r.length; l < c; l++)
      a.push(s.getDependency("node", r[l]));
    return Promise.all(a).then(function(l) {
      for (let u = 0, h = l.length; u < h; u++)
        i.add(l[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [m, p] of s.associations)
          (m instanceof Material || m instanceof Texture) && h.set(m, p);
        return u.traverse((m) => {
          const p = s.associations.get(m);
          p != null && h.set(m, p);
        }), h;
      };
      return s.associations = c(i), i;
    });
  }
};
function Bu(o, e, t) {
  const n = e.attributes, s = new Box3();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(new Vector3(l[0], l[1], l[2]), new Vector3(c[0], c[1], c[2])), a.normalized) {
        const u = Ji(Nn[a.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const a = new Vector3(), l = new Vector3();
    for (let c = 0, u = i.length; c < u; c++) {
      const h = i[c];
      if (h.POSITION !== void 0) {
        const m = t.json.accessors[h.POSITION], p = m.min, v = m.max;
        if (p !== void 0 && v !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(v[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(v[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(v[2]))), m.normalized) {
            const _ = Ji(Nn[m.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  o.boundingBox = s;
  const r = new Sphere();
  s.getCenter(r.center), r.radius = s.min.distanceTo(s.max) / 2, o.boundingSphere = r;
}
function jr(o, e, t) {
  const n = e.attributes, s = [];
  function i(r, a) {
    return t.getDependency("accessor", r).then(function(l) {
      o.setAttribute(a, l);
    });
  }
  for (const r in n) {
    const a = Qi[r] || r.toLowerCase();
    a in o.attributes || s.push(i(n[r], a));
  }
  if (e.indices !== void 0 && !o.index) {
    const r = t.getDependency("accessor", e.indices).then(function(a) {
      o.setIndex(a);
    });
    s.push(r);
  }
  return an(o, e), Bu(o, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? Du(o, e.targets, t) : o;
  });
}
var Vr = class extends ExtrudeGeometry {
  constructor(e, t = {}) {
    const {
      bevelEnabled: n = false,
      bevelSize: s = 8,
      bevelThickness: i = 10,
      font: r,
      height: a = 50,
      size: l = 100,
      lineHeight: c = 1,
      letterSpacing: u = 0,
      ...h
    } = t;
    if (r === void 0)
      super();
    else {
      const m = r.generateShapes(e, l, { lineHeight: c, letterSpacing: u });
      super(m, { ...h, bevelEnabled: n, bevelSize: s, bevelThickness: i, depth: a });
    }
    this.type = "TextGeometry";
  }
};
var Nu = {
  uniforms: {
    tDiffuse: { value: null },
    h: { value: 1 / 512 }
  },
  vertexShader: (
    /* glsl */
    `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `
  ),
  fragmentShader: (
    /* glsl */
    `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
  )
};
var zu = {
  uniforms: {
    tDiffuse: { value: null },
    v: { value: 1 / 512 }
  },
  vertexShader: (
    /* glsl */
    `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `
  ),
  fragmentShader: (
    /* glsl */
    `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
  )
};
function Ea(o, e, t) {
  const n = t.length - o - 1;
  if (e >= t[n])
    return n - 1;
  if (e <= t[o])
    return o;
  let s = o, i = n, r = Math.floor((s + i) / 2);
  for (; e < t[r] || e >= t[r + 1]; )
    e < t[r] ? i = r : s = r, r = Math.floor((s + i) / 2);
  return r;
}
function Hu(o, e, t, n) {
  const s = [], i = [], r = [];
  s[0] = 1;
  for (let a = 1; a <= t; ++a) {
    i[a] = e - n[o + 1 - a], r[a] = n[o + a] - e;
    let l = 0;
    for (let c = 0; c < a; ++c) {
      const u = r[c + 1], h = i[a - c], m = s[c] / (u + h);
      s[c] = l + u * m, l = h * m;
    }
    s[a] = l;
  }
  return s;
}
function Gu(o, e, t, n) {
  const s = Ea(o, n, e), i = Hu(s, n, o, e), r = new Vector4(0, 0, 0, 0);
  for (let a = 0; a <= o; ++a) {
    const l = t[s - o + a], c = i[a], u = l.w * c;
    r.x += l.x * u, r.y += l.y * u, r.z += l.z * u, r.w += l.w * c;
  }
  return r;
}
function ju(o, e, t, n, s) {
  const i = [];
  for (let h = 0; h <= t; ++h)
    i[h] = 0;
  const r = [];
  for (let h = 0; h <= n; ++h)
    r[h] = i.slice(0);
  const a = [];
  for (let h = 0; h <= t; ++h)
    a[h] = i.slice(0);
  a[0][0] = 1;
  const l = i.slice(0), c = i.slice(0);
  for (let h = 1; h <= t; ++h) {
    l[h] = e - s[o + 1 - h], c[h] = s[o + h] - e;
    let m = 0;
    for (let p = 0; p < h; ++p) {
      const v = c[p + 1], _ = l[h - p];
      a[h][p] = v + _;
      const y = a[p][h - 1] / a[h][p];
      a[p][h] = m + v * y, m = _ * y;
    }
    a[h][h] = m;
  }
  for (let h = 0; h <= t; ++h)
    r[0][h] = a[h][t];
  for (let h = 0; h <= t; ++h) {
    let m = 0, p = 1;
    const v = [];
    for (let _ = 0; _ <= t; ++_)
      v[_] = i.slice(0);
    v[0][0] = 1;
    for (let _ = 1; _ <= n; ++_) {
      let y = 0;
      const E = h - _, R = t - _;
      h >= _ && (v[p][0] = v[m][0] / a[R + 1][E], y = v[p][0] * a[E][R]);
      const T = E >= -1 ? 1 : -E, g = h - 1 <= R ? _ - 1 : t - h;
      for (let x = T; x <= g; ++x)
        v[p][x] = (v[m][x] - v[m][x - 1]) / a[R + 1][E + x], y += v[p][x] * a[E + x][R];
      h <= R && (v[p][_] = -v[m][_ - 1] / a[R + 1][h], y += v[p][_] * a[h][R]), r[_][h] = y;
      const A2 = m;
      m = p, p = A2;
    }
  }
  let u = t;
  for (let h = 1; h <= n; ++h) {
    for (let m = 0; m <= t; ++m)
      r[h][m] *= u;
    u *= t - h;
  }
  return r;
}
function Vu(o, e, t, n, s) {
  const i = s < o ? s : o, r = [], a = Ea(o, n, e), l = ju(a, n, o, i, e), c = [];
  for (let u = 0; u < t.length; ++u) {
    const h = t[u].clone(), m = h.w;
    h.x *= m, h.y *= m, h.z *= m, c[u] = h;
  }
  for (let u = 0; u <= i; ++u) {
    const h = c[a - o].clone().multiplyScalar(l[u][0]);
    for (let m = 1; m <= o; ++m)
      h.add(c[a - o + m].clone().multiplyScalar(l[u][m]));
    r[u] = h;
  }
  for (let u = i + 1; u <= s + 1; ++u)
    r[u] = new Vector4(0, 0, 0);
  return r;
}
function Yu(o, e) {
  let t = 1;
  for (let s = 2; s <= o; ++s)
    t *= s;
  let n = 1;
  for (let s = 2; s <= e; ++s)
    n *= s;
  for (let s = 2; s <= o - e; ++s)
    n *= s;
  return t / n;
}
function Xu(o) {
  const e = o.length, t = [], n = [];
  for (let i = 0; i < e; ++i) {
    const r = o[i];
    t[i] = new Vector3(r.x, r.y, r.z), n[i] = r.w;
  }
  const s = [];
  for (let i = 0; i < e; ++i) {
    const r = t[i].clone();
    for (let a = 1; a <= i; ++a)
      r.sub(s[i - a].clone().multiplyScalar(Yu(i, a) * n[a]));
    s[i] = r.divideScalar(n[0]);
  }
  return s;
}
function Wu(o, e, t, n, s) {
  const i = Vu(o, e, t, n, s);
  return Xu(i);
}
var Yr = class extends Curve {
  constructor(e, t, n, s, i) {
    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = s || 0, this.endKnot = i || this.knots.length - 1;
    for (let r = 0; r < n.length; ++r) {
      const a = n[r];
      this.controlPoints[r] = new Vector4(a.x, a.y, a.z, a.w);
    }
  }
  getPoint(e, t) {
    const n = t || new Vector3(), s = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), i = Gu(this.degree, this.knots, this.controlPoints, s);
    return i.w != 1 && i.divideScalar(i.w), n.set(i.x, i.y, i.z);
  }
  getTangent(e, t) {
    const n = t || new Vector3(), s = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), i = Wu(this.degree, this.knots, this.controlPoints, s, 1);
    return n.copy(i[1]).normalize(), n;
  }
};
var Ae;
var Xe;
var ut;
var $u = class extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const i = this, r = i.path === "" ? LoaderUtils.extractUrlBase(e) : i.path, a = new FileLoader(this.manager);
    a.setPath(i.path), a.setResponseType("arraybuffer"), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(
      e,
      function(l) {
        try {
          t(i.parse(l, r));
        } catch (c) {
          s ? s(c) : console.error(c), i.manager.itemError(e);
        }
      },
      n,
      s
    );
  }
  parse(e, t) {
    if (eh(e))
      Ae = new Ju().parse(e);
    else {
      const s = Pa(e);
      if (!th(s))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (Wr(s) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Wr(s));
      Ae = new Qu().parse(s);
    }
    const n = new TextureLoader(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new Zu(n, this.manager).parse(Ae);
  }
};
var Zu = class {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    Xe = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), s = this.parseDeformers(), i = new Ku().parse(s);
    return this.parseScene(s, i, n), ut;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in Ae && Ae.Connections.connections.forEach(function(n) {
      const s = n[0], i = n[1], r = n[2];
      e.has(s) || e.set(s, {
        parents: [],
        children: []
      });
      const a = { ID: i, relationship: r };
      e.get(s).parents.push(a), e.has(i) || e.set(i, {
        parents: [],
        children: []
      });
      const l = { ID: s, relationship: r };
      e.get(i).children.push(l);
    }), e;
  }
  // Parse FBXTree.Objects.Video for embedded image data
  // These images are connected to textures in FBXTree.Objects.Textures
  // via FBXTree.Connections.
  parseImages() {
    const e = {}, t = {};
    if ("Video" in Ae.Objects) {
      const n = Ae.Objects.Video;
      for (const s in n) {
        const i = n[s], r = parseInt(s);
        if (e[r] = i.RelativeFilename || i.Filename, "Content" in i) {
          const a = i.Content instanceof ArrayBuffer && i.Content.byteLength > 0, l = typeof i.Content == "string" && i.Content !== "";
          if (a || l) {
            const c = this.parseImage(n[s]);
            t[i.RelativeFilename || i.Filename] = c;
          }
        }
      }
    }
    for (const n in e) {
      const s = e[n];
      t[s] !== void 0 ? e[n] = t[s] : e[n] = e[n].split("\\").pop();
    }
    return e;
  }
  // Parse embedded image data in FBXTree.Video.Content
  parseImage(e) {
    const t = e.Content, n = e.RelativeFilename || e.Filename, s = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let i;
    switch (s) {
      case "bmp":
        i = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        i = "image/jpeg";
        break;
      case "png":
        i = "image/png";
        break;
      case "tif":
        i = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), i = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + s + '" is not supported.');
        return;
    }
    if (typeof t == "string")
      return "data:" + i + ";base64," + t;
    {
      const r = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([r], { type: i }));
    }
  }
  // Parse nodes in FBXTree.Objects.Texture
  // These contain details such as UV scaling, cropping, rotation etc and are connected
  // to images in FBXTree.Objects.Video
  parseTextures(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Texture" in Ae.Objects) {
      const n = Ae.Objects.Texture;
      for (const s in n) {
        const i = this.parseTexture(n[s], e);
        t.set(parseInt(s), i);
      }
    }
    return t;
  }
  // Parse individual node in FBXTree.Objects.Texture
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    n.ID = e.id, n.name = e.attrName;
    const s = e.WrapModeU, i = e.WrapModeV, r = s !== void 0 ? s.value : 0, a = i !== void 0 ? i.value : 0;
    if (n.wrapS = r === 0 ? RepeatWrapping : ClampToEdgeWrapping, n.wrapT = a === 0 ? RepeatWrapping : ClampToEdgeWrapping, "Scaling" in e) {
      const l = e.Scaling.value;
      n.repeat.x = l[0], n.repeat.y = l[1];
    }
    return n;
  }
  // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
  loadTexture(e, t) {
    let n;
    const s = this.textureLoader.path, i = Xe.get(e.id).children;
    i !== void 0 && i.length > 0 && t[i[0].ID] !== void 0 && (n = t[i[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let r;
    const a = e.FileName.slice(-3).toLowerCase();
    if (a === "tga") {
      const l = this.manager.getHandler(".tga");
      l === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), r = new Texture()) : (l.setPath(this.textureLoader.path), r = l.load(n));
    } else
      a === "psd" ? (console.warn(
        "FBXLoader: PSD textures are not supported, creating placeholder texture for",
        e.RelativeFilename
      ), r = new Texture()) : r = this.textureLoader.load(n);
    return this.textureLoader.setPath(s), r;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in Ae.Objects) {
      const n = Ae.Objects.Material;
      for (const s in n) {
        const i = this.parseMaterial(n[s], e);
        i !== null && t.set(parseInt(s), i);
      }
    }
    return t;
  }
  // Parse single node in FBXTree.Objects.Material
  // Materials are connected to texture maps in FBXTree.Objects.Textures
  // FBX format currently only supports Lambert and Phong shading models
  parseMaterial(e, t) {
    const n = e.id, s = e.attrName;
    let i = e.ShadingModel;
    if (typeof i == "object" && (i = i.value), !Xe.has(n))
      return null;
    const r = this.parseParameters(e, t, n);
    let a;
    switch (i.toLowerCase()) {
      case "phong":
        a = new MeshPhongMaterial();
        break;
      case "lambert":
        a = new MeshLambertMaterial();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', i), a = new MeshPhongMaterial();
        break;
    }
    return a.setValues(r), a.name = s, a;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(e, t, n) {
    const s = {};
    e.BumpFactor && (s.bumpScale = e.BumpFactor.value), e.Diffuse ? s.color = new Color().fromArray(e.Diffuse.value) : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (s.color = new Color().fromArray(e.DiffuseColor.value)), e.DisplacementFactor && (s.displacementScale = e.DisplacementFactor.value), e.Emissive ? s.emissive = new Color().fromArray(e.Emissive.value) : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (s.emissive = new Color().fromArray(e.EmissiveColor.value)), e.EmissiveFactor && (s.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (s.opacity = parseFloat(e.Opacity.value)), s.opacity < 1 && (s.transparent = true), e.ReflectionFactor && (s.reflectivity = e.ReflectionFactor.value), e.Shininess && (s.shininess = e.Shininess.value), e.Specular ? s.specular = new Color().fromArray(e.Specular.value) : e.SpecularColor && e.SpecularColor.type === "Color" && (s.specular = new Color().fromArray(e.SpecularColor.value));
    const i = this;
    return Xe.get(n).children.forEach(function(r) {
      const a = r.relationship;
      switch (a) {
        case "Bump":
          s.bumpMap = i.getTexture(t, r.ID);
          break;
        case "Maya|TEX_ao_map":
          s.aoMap = i.getTexture(t, r.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          s.map = i.getTexture(t, r.ID), s.map !== void 0 && ("colorSpace" in s.map ? s.map.colorSpace = "srgb" : s.map.encoding = 3001);
          break;
        case "DisplacementColor":
          s.displacementMap = i.getTexture(t, r.ID);
          break;
        case "EmissiveColor":
          s.emissiveMap = i.getTexture(t, r.ID), s.emissiveMap !== void 0 && ("colorSpace" in s.emissiveMap ? s.emissiveMap.colorSpace = "srgb" : s.emissiveMap.encoding = 3001);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          s.normalMap = i.getTexture(t, r.ID);
          break;
        case "ReflectionColor":
          s.envMap = i.getTexture(t, r.ID), s.envMap !== void 0 && (s.envMap.mapping = EquirectangularReflectionMapping, "colorSpace" in s.envMap ? s.envMap.colorSpace = "srgb" : s.envMap.encoding = 3001);
          break;
        case "SpecularColor":
          s.specularMap = i.getTexture(t, r.ID), s.specularMap !== void 0 && ("colorSpace" in s.specularMap ? s.specularMap.colorSpace = "srgb" : s.specularMap.encoding = 3001);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          s.alphaMap = i.getTexture(t, r.ID), s.transparent = true;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", a);
          break;
      }
    }), s;
  }
  // get a texture from the textureMap for use by a material.
  getTexture(e, t) {
    return "LayeredTexture" in Ae.Objects && t in Ae.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = Xe.get(t).children[0].ID), e.get(t);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in Ae.Objects) {
      const n = Ae.Objects.Deformer;
      for (const s in n) {
        const i = n[s], r = Xe.get(parseInt(s));
        if (i.attrType === "Skin") {
          const a = this.parseSkeleton(r, n);
          a.ID = s, r.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), a.geometryID = r.parents[0].ID, e[s] = a;
        } else if (i.attrType === "BlendShape") {
          const a = {
            id: s
          };
          a.rawTargets = this.parseMorphTargets(r, n), a.id = s, r.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[s] = a;
        }
      }
    }
    return {
      skeletons: e,
      morphTargets: t
    };
  }
  // Parse single nodes in FBXTree.Objects.Deformer
  // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
  // Each skin node represents a skeleton and each cluster node represents a bone
  parseSkeleton(e, t) {
    const n = [];
    return e.children.forEach(function(s) {
      const i = t[s.ID];
      if (i.attrType !== "Cluster")
        return;
      const r = {
        ID: s.ID,
        indices: [],
        weights: [],
        transformLink: new Matrix4().fromArray(i.TransformLink.a)
        // transform: new Matrix4().fromArray( boneNode.Transform.a ),
        // linkMode: boneNode.Mode,
      };
      "Indexes" in i && (r.indices = i.Indexes.a, r.weights = i.Weights.a), n.push(r);
    }), {
      rawBones: n,
      bones: []
    };
  }
  // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
  parseMorphTargets(e, t) {
    const n = [];
    for (let s = 0; s < e.children.length; s++) {
      const i = e.children[s], r = t[i.ID], a = {
        name: r.attrName,
        initialWeight: r.DeformPercent,
        id: r.id,
        fullWeights: r.FullWeights.a
      };
      if (r.attrType !== "BlendShapeChannel")
        return;
      a.geoID = Xe.get(parseInt(i.ID)).children.filter(function(l) {
        return l.relationship === void 0;
      })[0].ID, n.push(a);
    }
    return n;
  }
  // create the main Group() to be returned by the loader
  parseScene(e, t, n) {
    ut = new Group();
    const s = this.parseModels(e.skeletons, t, n), i = Ae.Objects.Model, r = this;
    s.forEach(function(l) {
      const c = i[l.ID];
      r.setLookAtProperties(l, c), Xe.get(l.ID).parents.forEach(function(h) {
        const m = s.get(h.ID);
        m !== void 0 && m.add(l);
      }), l.parent === null && ut.add(l);
    }), this.bindSkeleton(e.skeletons, t, s), this.createAmbientLight(), ut.traverse(function(l) {
      if (l.userData.transformData) {
        l.parent && (l.userData.transformData.parentMatrix = l.parent.matrix, l.userData.transformData.parentMatrixWorld = l.parent.matrixWorld);
        const c = Sa(l.userData.transformData);
        l.applyMatrix4(c), l.updateWorldMatrix();
      }
    });
    const a = new qu().parse();
    ut.children.length === 1 && ut.children[0].isGroup && (ut.children[0].animations = a, ut = ut.children[0]), ut.animations = a;
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(e, t, n) {
    const s = /* @__PURE__ */ new Map(), i = Ae.Objects.Model;
    for (const r in i) {
      const a = parseInt(r), l = i[r], c = Xe.get(a);
      let u = this.buildSkeleton(c, e, a, l.attrName);
      if (!u) {
        switch (l.attrType) {
          case "Camera":
            u = this.createCamera(c);
            break;
          case "Light":
            u = this.createLight(c);
            break;
          case "Mesh":
            u = this.createMesh(c, t, n);
            break;
          case "NurbsCurve":
            u = this.createCurve(c, t);
            break;
          case "LimbNode":
          case "Root":
            u = new Bone();
            break;
          case "Null":
          default:
            u = new Group();
            break;
        }
        u.name = l.attrName ? PropertyBinding.sanitizeNodeName(l.attrName) : "", u.ID = a;
      }
      this.getTransformData(u, l), s.set(a, u);
    }
    return s;
  }
  buildSkeleton(e, t, n, s) {
    let i = null;
    return e.parents.forEach(function(r) {
      for (const a in t) {
        const l = t[a];
        l.rawBones.forEach(function(c, u) {
          if (c.ID === r.ID) {
            const h = i;
            i = new Bone(), i.matrixWorld.copy(c.transformLink), i.name = s ? PropertyBinding.sanitizeNodeName(s) : "", i.ID = n, l.bones[u] = i, h !== null && i.add(h);
          }
        });
      }
    }), i;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(s) {
      const i = Ae.Objects.NodeAttribute[s.ID];
      i !== void 0 && (n = i);
    }), n === void 0)
      t = new Object3D();
    else {
      let s = 0;
      n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (s = 1);
      let i = 1;
      n.NearPlane !== void 0 && (i = n.NearPlane.value / 1e3);
      let r = 1e3;
      n.FarPlane !== void 0 && (r = n.FarPlane.value / 1e3);
      let a = window.innerWidth, l = window.innerHeight;
      n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (a = n.AspectWidth.value, l = n.AspectHeight.value);
      const c = a / l;
      let u = 45;
      n.FieldOfView !== void 0 && (u = n.FieldOfView.value);
      const h = n.FocalLength ? n.FocalLength.value : null;
      switch (s) {
        case 0:
          t = new PerspectiveCamera(u, c, i, r), h !== null && t.setFocalLength(h);
          break;
        case 1:
          t = new OrthographicCamera(
            -a / 2,
            a / 2,
            l / 2,
            -l / 2,
            i,
            r
          );
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + s + "."), t = new Object3D();
          break;
      }
    }
    return t;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(s) {
      const i = Ae.Objects.NodeAttribute[s.ID];
      i !== void 0 && (n = i);
    }), n === void 0)
      t = new Object3D();
    else {
      let s;
      n.LightType === void 0 ? s = 0 : s = n.LightType.value;
      let i = 16777215;
      n.Color !== void 0 && (i = new Color().fromArray(n.Color.value));
      let r = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (r = 0);
      let a = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? a = 0 : a = n.FarAttenuationEnd.value);
      const l = 1;
      switch (s) {
        case 0:
          t = new PointLight(i, r, a, l);
          break;
        case 1:
          t = new DirectionalLight(i, r);
          break;
        case 2:
          let c = Math.PI / 3;
          n.InnerAngle !== void 0 && (c = MathUtils.degToRad(n.InnerAngle.value));
          let u = 0;
          n.OuterAngle !== void 0 && (u = MathUtils.degToRad(n.OuterAngle.value), u = Math.max(u, 1)), t = new SpotLight(i, r, a, c, u, l);
          break;
        default:
          console.warn(
            "THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."
          ), t = new PointLight(i, r);
          break;
      }
      n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = true);
    }
    return t;
  }
  createMesh(e, t, n) {
    let s, i = null, r = null;
    const a = [];
    return e.children.forEach(function(l) {
      t.has(l.ID) && (i = t.get(l.ID)), n.has(l.ID) && a.push(n.get(l.ID));
    }), a.length > 1 ? r = a : a.length > 0 ? r = a[0] : (r = new MeshPhongMaterial({ color: 13421772 }), a.push(r)), "color" in i.attributes && a.forEach(function(l) {
      l.vertexColors = true;
    }), i.FBX_Deformer ? (s = new SkinnedMesh(i, r), s.normalizeSkinWeights()) : s = new Mesh(i, r), s;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(i, r) {
      return t.has(r.ID) && (i = t.get(r.ID)), i;
    }, null), s = new LineBasicMaterial({ color: 3342591, linewidth: 1 });
    return new Line(n, s);
  }
  // parse the model node for transform data
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = Aa(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && Xe.get(e.ID).children.forEach(function(s) {
      if (s.relationship === "LookAtProperty") {
        const i = Ae.Objects.Model[s.ID];
        if ("Lcl_Translation" in i) {
          const r = i.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(r), ut.add(e.target)) : e.lookAt(new Vector3().fromArray(r));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    const s = this.parsePoseNodes();
    for (const i in e) {
      const r = e[i];
      Xe.get(parseInt(r.ID)).parents.forEach(function(l) {
        if (t.has(l.ID)) {
          const c = l.ID;
          Xe.get(c).parents.forEach(function(h) {
            n.has(h.ID) && n.get(h.ID).bind(new Skeleton(r.bones), s[h.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in Ae.Objects) {
      const t = Ae.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const s = t[n].PoseNode;
          Array.isArray(s) ? s.forEach(function(i) {
            e[i.Node] = new Matrix4().fromArray(i.Matrix.a);
          }) : e[s.Node] = new Matrix4().fromArray(s.Matrix.a);
        }
    }
    return e;
  }
  // Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
  createAmbientLight() {
    if ("GlobalSettings" in Ae && "AmbientColor" in Ae.GlobalSettings) {
      const e = Ae.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], s = e[2];
      if (t !== 0 || n !== 0 || s !== 0) {
        const i = new Color(t, n, s);
        ut.add(new AmbientLight(i, 1));
      }
    }
  }
};
var Ku = class {
  // Parse nodes in FBXTree.Objects.Geometry
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in Ae.Objects) {
      const n = Ae.Objects.Geometry;
      for (const s in n) {
        const i = Xe.get(parseInt(s)), r = this.parseGeometry(i, n[s], e);
        t.set(parseInt(s), r);
      }
    }
    return t;
  }
  // Parse single node in FBXTree.Objects.Geometry
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  // Parse single node mesh geometry in FBXTree.Objects.Geometry
  parseMeshGeometry(e, t, n) {
    const s = n.skeletons, i = [], r = e.parents.map(function(h) {
      return Ae.Objects.Model[h.ID];
    });
    if (r.length === 0)
      return;
    const a = e.children.reduce(function(h, m) {
      return s[m.ID] !== void 0 && (h = s[m.ID]), h;
    }, null);
    e.children.forEach(function(h) {
      n.morphTargets[h.ID] !== void 0 && i.push(n.morphTargets[h.ID]);
    });
    const l = r[0], c = {};
    "RotationOrder" in l && (c.eulerOrder = Aa(l.RotationOrder.value)), "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (c.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
    const u = Sa(c);
    return this.genGeometry(t, a, i, u);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(e, t, n, s) {
    const i = new BufferGeometry();
    e.attrName && (i.name = e.attrName);
    const r = this.parseGeoNode(e, t), a = this.genBuffers(r), l = new Float32BufferAttribute(a.vertex, 3);
    if (l.applyMatrix4(s), i.setAttribute("position", l), a.colors.length > 0 && i.setAttribute("color", new Float32BufferAttribute(a.colors, 3)), t && (i.setAttribute("skinIndex", new Uint16BufferAttribute(a.weightsIndices, 4)), i.setAttribute("skinWeight", new Float32BufferAttribute(a.vertexWeights, 4)), i.FBX_Deformer = t), a.normal.length > 0) {
      const c = new Matrix3().getNormalMatrix(s), u = new Float32BufferAttribute(a.normal, 3);
      u.applyNormalMatrix(c), i.setAttribute("normal", u);
    }
    if (a.uvs.forEach(function(c, u) {
      let h = "uv" + (u + 1).toString();
      u === 0 && (h = "uv"), i.setAttribute(h, new Float32BufferAttribute(a.uvs[u], 2));
    }), r.material && r.material.mappingType !== "AllSame") {
      let c = a.materialIndex[0], u = 0;
      if (a.materialIndex.forEach(function(h, m) {
        h !== c && (i.addGroup(u, m - u, c), c = h, u = m);
      }), i.groups.length > 0) {
        const h = i.groups[i.groups.length - 1], m = h.start + h.count;
        m !== a.materialIndex.length && i.addGroup(m, a.materialIndex.length - m, c);
      }
      i.groups.length === 0 && i.addGroup(0, a.materialIndex.length, a.materialIndex[0]);
    }
    return this.addMorphTargets(i, e, n, s), i;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
      n.uv = [];
      let s = 0;
      for (; e.LayerElementUV[s]; )
        e.LayerElementUV[s].UV && n.uv.push(this.parseUVs(e.LayerElementUV[s])), s++;
    }
    return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(s, i) {
      s.indices.forEach(function(r, a) {
        n.weightTable[r] === void 0 && (n.weightTable[r] = []), n.weightTable[r].push({
          id: i,
          weight: s.weights[a]
        });
      });
    })), n;
  }
  genBuffers(e) {
    const t = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let n = 0, s = 0, i = false, r = [], a = [], l = [], c = [], u = [], h = [];
    const m = this;
    return e.vertexIndices.forEach(function(p, v) {
      let _, y = false;
      p < 0 && (p = p ^ -1, y = true);
      let E = [], R = [];
      if (r.push(p * 3, p * 3 + 1, p * 3 + 2), e.color) {
        const T = Ps(v, n, p, e.color);
        l.push(T[0], T[1], T[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[p] !== void 0 && e.weightTable[p].forEach(function(T) {
          R.push(T.weight), E.push(T.id);
        }), R.length > 4) {
          i || (console.warn(
            "THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."
          ), i = true);
          const T = [0, 0, 0, 0], g = [0, 0, 0, 0];
          R.forEach(function(A2, x) {
            let M = A2, d = E[x];
            g.forEach(function(w, f, P) {
              if (M > w) {
                P[f] = M, M = w;
                const I = T[f];
                T[f] = d, d = I;
              }
            });
          }), E = T, R = g;
        }
        for (; R.length < 4; )
          R.push(0), E.push(0);
        for (let T = 0; T < 4; ++T)
          u.push(R[T]), h.push(E[T]);
      }
      if (e.normal) {
        const T = Ps(v, n, p, e.normal);
        a.push(T[0], T[1], T[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (_ = Ps(v, n, p, e.material)[0]), e.uv && e.uv.forEach(function(T, g) {
        const A2 = Ps(v, n, p, T);
        c[g] === void 0 && (c[g] = []), c[g].push(A2[0]), c[g].push(A2[1]);
      }), s++, y && (m.genFace(
        t,
        e,
        r,
        _,
        a,
        l,
        c,
        u,
        h,
        s
      ), n++, s = 0, r = [], a = [], l = [], c = [], u = [], h = []);
    }), t;
  }
  // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
  genFace(e, t, n, s, i, r, a, l, c, u) {
    for (let h = 2; h < u; h++)
      e.vertex.push(t.vertexPositions[n[0]]), e.vertex.push(t.vertexPositions[n[1]]), e.vertex.push(t.vertexPositions[n[2]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3 + 1]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3 + 2]]), e.vertex.push(t.vertexPositions[n[h * 3]]), e.vertex.push(t.vertexPositions[n[h * 3 + 1]]), e.vertex.push(t.vertexPositions[n[h * 3 + 2]]), t.skeleton && (e.vertexWeights.push(l[0]), e.vertexWeights.push(l[1]), e.vertexWeights.push(l[2]), e.vertexWeights.push(l[3]), e.vertexWeights.push(l[(h - 1) * 4]), e.vertexWeights.push(l[(h - 1) * 4 + 1]), e.vertexWeights.push(l[(h - 1) * 4 + 2]), e.vertexWeights.push(l[(h - 1) * 4 + 3]), e.vertexWeights.push(l[h * 4]), e.vertexWeights.push(l[h * 4 + 1]), e.vertexWeights.push(l[h * 4 + 2]), e.vertexWeights.push(l[h * 4 + 3]), e.weightsIndices.push(c[0]), e.weightsIndices.push(c[1]), e.weightsIndices.push(c[2]), e.weightsIndices.push(c[3]), e.weightsIndices.push(c[(h - 1) * 4]), e.weightsIndices.push(c[(h - 1) * 4 + 1]), e.weightsIndices.push(c[(h - 1) * 4 + 2]), e.weightsIndices.push(c[(h - 1) * 4 + 3]), e.weightsIndices.push(c[h * 4]), e.weightsIndices.push(c[h * 4 + 1]), e.weightsIndices.push(c[h * 4 + 2]), e.weightsIndices.push(c[h * 4 + 3])), t.color && (e.colors.push(r[0]), e.colors.push(r[1]), e.colors.push(r[2]), e.colors.push(r[(h - 1) * 3]), e.colors.push(r[(h - 1) * 3 + 1]), e.colors.push(r[(h - 1) * 3 + 2]), e.colors.push(r[h * 3]), e.colors.push(r[h * 3 + 1]), e.colors.push(r[h * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(s), e.materialIndex.push(s), e.materialIndex.push(s)), t.normal && (e.normal.push(i[0]), e.normal.push(i[1]), e.normal.push(i[2]), e.normal.push(i[(h - 1) * 3]), e.normal.push(i[(h - 1) * 3 + 1]), e.normal.push(i[(h - 1) * 3 + 2]), e.normal.push(i[h * 3]), e.normal.push(i[h * 3 + 1]), e.normal.push(i[h * 3 + 2])), t.uv && t.uv.forEach(function(m, p) {
        e.uvs[p] === void 0 && (e.uvs[p] = []), e.uvs[p].push(a[p][0]), e.uvs[p].push(a[p][1]), e.uvs[p].push(a[p][(h - 1) * 2]), e.uvs[p].push(a[p][(h - 1) * 2 + 1]), e.uvs[p].push(a[p][h * 2]), e.uvs[p].push(a[p][h * 2 + 1]);
      });
  }
  addMorphTargets(e, t, n, s) {
    if (n.length === 0)
      return;
    e.morphTargetsRelative = true, e.morphAttributes.position = [];
    const i = this;
    n.forEach(function(r) {
      r.rawTargets.forEach(function(a) {
        const l = Ae.Objects.Geometry[a.geoID];
        l !== void 0 && i.genMorphGeometry(e, t, l, s, a.name);
      });
    });
  }
  // a morph geometry node is similar to a standard  node, and the node is also contained
  // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
  // and a special attribute Index defining which vertices of the original geometry are affected
  // Normal and position attributes only have data for the vertices that are affected by the morph
  genMorphGeometry(e, t, n, s, i) {
    const r = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], a = n.Vertices !== void 0 ? n.Vertices.a : [], l = n.Indexes !== void 0 ? n.Indexes.a : [], c = e.attributes.position.count * 3, u = new Float32Array(c);
    for (let v = 0; v < l.length; v++) {
      const _ = l[v] * 3;
      u[_] = a[v * 3], u[_ + 1] = a[v * 3 + 1], u[_ + 2] = a[v * 3 + 2];
    }
    const h = {
      vertexIndices: r,
      vertexPositions: u
    }, m = this.genBuffers(h), p = new Float32BufferAttribute(m.vertex, 3);
    p.name = i || n.attrName, p.applyMatrix4(s), e.morphAttributes.position.push(p);
  }
  // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
  parseNormals(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, s = e.Normals.a;
    let i = [];
    return n === "IndexToDirect" && ("NormalIndex" in e ? i = e.NormalIndex.a : "NormalsIndex" in e && (i = e.NormalsIndex.a)), {
      dataSize: 3,
      buffer: s,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
  parseUVs(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, s = e.UV.a;
    let i = [];
    return n === "IndexToDirect" && (i = e.UVIndex.a), {
      dataSize: 2,
      buffer: s,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
  parseVertexColors(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, s = e.Colors.a;
    let i = [];
    return n === "IndexToDirect" && (i = e.ColorIndex.a), {
      dataSize: 4,
      buffer: s,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
  parseMaterialIndices(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType;
    if (t === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n
      };
    const s = e.Materials.a, i = [];
    for (let r = 0; r < s.length; ++r)
      i.push(r);
    return {
      dataSize: 1,
      buffer: s,
      indices: i,
      mappingType: t,
      referenceType: n
    };
  }
  // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
  parseNurbsGeometry(e) {
    if (Yr === void 0)
      return console.error(
        "THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."
      ), new BufferGeometry();
    const t = parseInt(e.Order);
    if (isNaN(t))
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new BufferGeometry();
    const n = t - 1, s = e.KnotVector.a, i = [], r = e.Points.a;
    for (let h = 0, m = r.length; h < m; h += 4)
      i.push(new Vector4().fromArray(r, h));
    let a, l;
    if (e.Form === "Closed")
      i.push(i[0]);
    else if (e.Form === "Periodic") {
      a = n, l = s.length - 1 - a;
      for (let h = 0; h < n; ++h)
        i.push(i[h]);
    }
    const u = new Yr(n, s, i, a, l).getPoints(i.length * 12);
    return new BufferGeometry().setFromPoints(u);
  }
};
var qu = class {
  // take raw animation clips and turn them into three.js animation clips
  parse() {
    const e = [], t = this.parseClips();
    if (t !== void 0)
      for (const n in t) {
        const s = t[n], i = this.addClip(s);
        e.push(i);
      }
    return e;
  }
  parseClips() {
    if (Ae.Objects.AnimationCurve === void 0)
      return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  // parse nodes in FBXTree.Objects.AnimationCurveNode
  // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
  // and is referenced by an AnimationLayer
  parseAnimationCurveNodes() {
    const e = Ae.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
    for (const n in e) {
      const s = e[n];
      if (s.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const i = {
          id: s.id,
          attr: s.attrName,
          curves: {}
        };
        t.set(i.id, i);
      }
    }
    return t;
  }
  // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
  // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
  // axis ( e.g. times and values of x rotation)
  parseAnimationCurves(e) {
    const t = Ae.Objects.AnimationCurve;
    for (const n in t) {
      const s = {
        id: t[n].id,
        times: t[n].KeyTime.a.map(nh),
        values: t[n].KeyValueFloat.a
      }, i = Xe.get(s.id);
      if (i !== void 0) {
        const r = i.parents[0].ID, a = i.parents[0].relationship;
        a.match(/X/) ? e.get(r).curves.x = s : a.match(/Y/) ? e.get(r).curves.y = s : a.match(/Z/) ? e.get(r).curves.z = s : a.match(/d|DeformPercent/) && e.has(r) && (e.get(r).curves.morph = s);
      }
    }
  }
  // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
  // to various AnimationCurveNodes and is referenced by an AnimationStack node
  // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
  parseAnimationLayers(e) {
    const t = Ae.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const s in t) {
      const i = [], r = Xe.get(parseInt(s));
      r !== void 0 && (r.children.forEach(function(l, c) {
        if (e.has(l.ID)) {
          const u = e.get(l.ID);
          if (u.curves.x !== void 0 || u.curves.y !== void 0 || u.curves.z !== void 0) {
            if (i[c] === void 0) {
              const h = Xe.get(l.ID).parents.filter(function(m) {
                return m.relationship !== void 0;
              })[0].ID;
              if (h !== void 0) {
                const m = Ae.Objects.Model[h.toString()];
                if (m === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                  return;
                }
                const p = {
                  modelName: m.attrName ? PropertyBinding.sanitizeNodeName(m.attrName) : "",
                  ID: m.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                ut.traverse(function(v) {
                  v.ID === m.id && (p.transform = v.matrix, v.userData.transformData && (p.eulerOrder = v.userData.transformData.eulerOrder));
                }), p.transform || (p.transform = new Matrix4()), "PreRotation" in m && (p.preRotation = m.PreRotation.value), "PostRotation" in m && (p.postRotation = m.PostRotation.value), i[c] = p;
              }
            }
            i[c] && (i[c][u.attr] = u);
          } else if (u.curves.morph !== void 0) {
            if (i[c] === void 0) {
              const h = Xe.get(l.ID).parents.filter(function(E) {
                return E.relationship !== void 0;
              })[0].ID, m = Xe.get(h).parents[0].ID, p = Xe.get(m).parents[0].ID, v = Xe.get(p).parents[0].ID, _ = Ae.Objects.Model[v], y = {
                modelName: _.attrName ? PropertyBinding.sanitizeNodeName(_.attrName) : "",
                morphName: Ae.Objects.Deformer[h].attrName
              };
              i[c] = y;
            }
            i[c][u.attr] = u;
          }
        }
      }), n.set(parseInt(s), i));
    }
    return n;
  }
  // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
  // hierarchy. Each Stack node will be used to create a AnimationClip
  parseAnimStacks(e) {
    const t = Ae.Objects.AnimationStack, n = {};
    for (const s in t) {
      const i = Xe.get(parseInt(s)).children;
      i.length > 1 && console.warn(
        "THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers."
      );
      const r = e.get(i[0].ID);
      n[s] = {
        name: t[s].attrName,
        layer: r
      };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return e.layer.forEach(function(s) {
      t = t.concat(n.generateTracks(s));
    }), new AnimationClip(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new Vector3(), s = new Quaternion(), i = new Vector3();
    if (e.transform && e.transform.decompose(n, s, i), n = n.toArray(), s = new Euler().setFromQuaternion(s, e.eulerOrder).toArray(), i = i.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
      const r = this.generateVectorTrack(
        e.modelName,
        e.T.curves,
        n,
        "position"
      );
      r !== void 0 && t.push(r);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const r = this.generateRotationTrack(
        e.modelName,
        e.R.curves,
        s,
        e.preRotation,
        e.postRotation,
        e.eulerOrder
      );
      r !== void 0 && t.push(r);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const r = this.generateVectorTrack(e.modelName, e.S.curves, i, "scale");
      r !== void 0 && t.push(r);
    }
    if (e.DeformPercent !== void 0) {
      const r = this.generateMorphTrack(e);
      r !== void 0 && t.push(r);
    }
    return t;
  }
  generateVectorTrack(e, t, n, s) {
    const i = this.getTimesForAllAxes(t), r = this.getKeyframeTrackValues(i, t, n);
    return new VectorKeyframeTrack(e + "." + s, i, r);
  }
  generateRotationTrack(e, t, n, s, i, r) {
    t.x !== void 0 && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(MathUtils.degToRad)), t.y !== void 0 && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(MathUtils.degToRad)), t.z !== void 0 && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(MathUtils.degToRad));
    const a = this.getTimesForAllAxes(t), l = this.getKeyframeTrackValues(a, t, n);
    s !== void 0 && (s = s.map(MathUtils.degToRad), s.push(r), s = new Euler().fromArray(s), s = new Quaternion().setFromEuler(s)), i !== void 0 && (i = i.map(MathUtils.degToRad), i.push(r), i = new Euler().fromArray(i), i = new Quaternion().setFromEuler(i).invert());
    const c = new Quaternion(), u = new Euler(), h = [];
    for (let m = 0; m < l.length; m += 3)
      u.set(l[m], l[m + 1], l[m + 2], r), c.setFromEuler(u), s !== void 0 && c.premultiply(s), i !== void 0 && c.multiply(i), c.toArray(h, m / 3 * 4);
    return new QuaternionKeyframeTrack(e + ".quaternion", a, h);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(i) {
      return i / 100;
    }), s = ut.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new NumberKeyframeTrack(
      e.modelName + ".morphTargetInfluences[" + s + "]",
      t.times,
      n
    );
  }
  // For all animated objects, times are defined separately for each axis
  // Here we'll combine the times into one sorted array without duplicates
  getTimesForAllAxes(e) {
    let t = [];
    if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, s) {
      return n - s;
    }), t.length > 1) {
      let n = 1, s = t[0];
      for (let i = 1; i < t.length; i++) {
        const r = t[i];
        r !== s && (t[n] = r, s = r, n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const s = n, i = [];
    let r = -1, a = -1, l = -1;
    return e.forEach(function(c) {
      if (t.x && (r = t.x.times.indexOf(c)), t.y && (a = t.y.times.indexOf(c)), t.z && (l = t.z.times.indexOf(c)), r !== -1) {
        const u = t.x.values[r];
        i.push(u), s[0] = u;
      } else
        i.push(s[0]);
      if (a !== -1) {
        const u = t.y.values[a];
        i.push(u), s[1] = u;
      } else
        i.push(s[1]);
      if (l !== -1) {
        const u = t.z.values[l];
        i.push(u), s[2] = u;
      } else
        i.push(s[2]);
    }), i;
  }
  // Rotations are defined as Euler angles which can have values  of any size
  // These will be converted to quaternions which don't support values greater than
  // PI, so we'll interpolate large rotations
  interpolateRotations(e) {
    for (let t = 1; t < e.values.length; t++) {
      const n = e.values[t - 1], s = e.values[t] - n, i = Math.abs(s);
      if (i >= 180) {
        const r = i / 180, a = s / r;
        let l = n + a;
        const c = e.times[t - 1], h = (e.times[t] - c) / r;
        let m = c + h;
        const p = [], v = [];
        for (; m < e.times[t]; )
          p.push(m), m += h, v.push(l), l += a;
        e.times = $r2(e.times, t, p), e.values = $r2(e.values, t, v);
      }
    }
  }
};
var Qu = class {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(e, t) {
    this.currentProp = e, this.currentPropName = t;
  }
  parse(e) {
    this.currentIndent = 0, this.allNodes = new Ma(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const t = this, n = e.split(/[\r\n]+/);
    return n.forEach(function(s, i) {
      const r = s.match(/^[\s\t]*;/), a = s.match(/^[\s\t]*$/);
      if (r || a)
        return;
      const l = s.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), c = s.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), u = s.match("^\\t{" + (t.currentIndent - 1) + "}}");
      l ? t.parseNodeBegin(s, l) : c ? t.parseNodeProperty(s, c, n[++i]) : u ? t.popStack() : s.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(s);
    }), this.allNodes;
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""), s = t[2].split(",").map(function(l) {
      return l.trim().replace(/^"/, "").replace(/"$/, "");
    }), i = { name: n }, r = this.parseNodeAttr(s), a = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(n, i) : n in a ? (n === "PoseNode" ? a.PoseNode.push(i) : a[n].id !== void 0 && (a[n] = {}, a[n][a[n].id] = a[n]), r.id !== "" && (a[n][r.id] = i)) : typeof r.id == "number" ? (a[n] = {}, a[n][r.id] = i) : n !== "Properties70" && (n === "PoseNode" ? a[n] = [i] : a[n] = i), typeof r.id == "number" && (i.id = r.id), r.name !== "" && (i.attrName = r.name), r.type !== "" && (i.attrType = r.type), this.pushStack(i);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
    let n = "", s = "";
    return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), s = e[2]), { id: t, name: n, type: s };
  }
  parseNodeProperty(e, t, n) {
    let s = t[1].replace(/^"/, "").replace(/"$/, "").trim(), i = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    s === "Content" && i === "," && (i = n.replace(/"/g, "").replace(/,$/, "").trim());
    const r = this.getCurrentNode();
    if (r.name === "Properties70") {
      this.parseNodeSpecialProperty(e, s, i);
      return;
    }
    if (s === "C") {
      const l = i.split(",").slice(1), c = parseInt(l[0]), u = parseInt(l[1]);
      let h = i.split(",").slice(3);
      h = h.map(function(m) {
        return m.trim().replace(/^"/, "");
      }), s = "connections", i = [c, u], ih(i, h), r[s] === void 0 && (r[s] = []);
    }
    s === "Node" && (r.id = i), s in r && Array.isArray(r[s]) ? r[s].push(i) : s !== "a" ? r[s] = i : r.a = i, this.setCurrentProp(r, s), s === "a" && i.slice(-1) !== "," && (r.a = _i(i));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = _i(t.a));
  }
  // parse "Property70"
  parseNodeSpecialProperty(e, t, n) {
    const s = n.split('",').map(function(u) {
      return u.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), i = s[0], r = s[1], a = s[2], l = s[3];
    let c = s[4];
    switch (r) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        c = parseFloat(c);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        c = _i(c);
        break;
    }
    this.getPrevNode()[i] = {
      type: r,
      type2: a,
      flag: l,
      value: c
    }, this.setCurrentProp(this.getPrevNode(), i);
  }
};
var Ju = class {
  parse(e) {
    const t = new Xr(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const s = new Ma();
    for (; !this.endOfContent(t); ) {
      const i = this.parseNode(t, n);
      i !== null && s.add(i.name, i);
    }
    return s;
  }
  // Check if reader has reached the end of content.
  endOfContent(e) {
    return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
  }
  // recursively parse nodes until the end of the file is reached
  parseNode(e, t) {
    const n = {}, s = t >= 7500 ? e.getUint64() : e.getUint32(), i = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const r = e.getUint8(), a = e.getString(r);
    if (s === 0)
      return null;
    const l = [];
    for (let m = 0; m < i; m++)
      l.push(this.parseProperty(e));
    const c = l.length > 0 ? l[0] : "", u = l.length > 1 ? l[1] : "", h = l.length > 2 ? l[2] : "";
    for (n.singleProperty = i === 1 && e.getOffset() === s; s > e.getOffset(); ) {
      const m = this.parseNode(e, t);
      m !== null && this.parseSubNode(a, n, m);
    }
    return n.propertyList = l, typeof c == "number" && (n.id = c), u !== "" && (n.attrName = u), h !== "" && (n.attrType = h), a !== "" && (n.name = a), n;
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === true) {
      const s = n.propertyList[0];
      Array.isArray(s) ? (t[n.name] = n, n.a = s) : t[n.name] = s;
    } else if (e === "Connections" && n.name === "C") {
      const s = [];
      n.propertyList.forEach(function(i, r) {
        r !== 0 && s.push(i);
      }), t.connections === void 0 && (t.connections = []), t.connections.push(s);
    } else if (n.name === "Properties70")
      Object.keys(n).forEach(function(i) {
        t[i] = n[i];
      });
    else if (e === "Properties70" && n.name === "P") {
      let s = n.propertyList[0], i = n.propertyList[1];
      const r = n.propertyList[2], a = n.propertyList[3];
      let l;
      s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")), i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), i === "Color" || i === "ColorRGB" || i === "Vector" || i === "Vector3D" || i.indexOf("Lcl_") === 0 ? l = [n.propertyList[4], n.propertyList[5], n.propertyList[6]] : l = n.propertyList[4], t[s] = {
        type: i,
        type2: r,
        flag: a,
        value: l
      };
    } else
      t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return n = e.getUint32(), e.getArrayBuffer(n);
      case "S":
        return n = e.getUint32(), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const s = e.getUint32(), i = e.getUint32(), r = e.getUint32();
        if (i === 0)
          switch (t) {
            case "b":
            case "c":
              return e.getBooleanArray(s);
            case "d":
              return e.getFloat64Array(s);
            case "f":
              return e.getFloat32Array(s);
            case "i":
              return e.getInt32Array(s);
            case "l":
              return e.getInt64Array(s);
          }
        const a = Gc(new Uint8Array(e.getArrayBuffer(r))), l = new Xr(a.buffer);
        switch (t) {
          case "b":
          case "c":
            return l.getBooleanArray(s);
          case "d":
            return l.getFloat64Array(s);
          case "f":
            return l.getFloat32Array(s);
          case "i":
            return l.getInt32Array(s);
          case "l":
            return l.getInt64Array(s);
        }
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
};
var Xr = class {
  constructor(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : true;
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  // seems like true/false representation depends on exporter.
  // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return this.offset += 1, e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  // JavaScript doesn't support 64-bit integer so calculate this here
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There's a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt64());
    return t;
  }
  // Note: see getInt64() comment
  getUint64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  getString(e) {
    let t = [];
    for (let s = 0; s < e; s++)
      t[s] = this.getUint8();
    const n = t.indexOf(0);
    return n >= 0 && (t = t.slice(0, n)), LoaderUtils.decodeText(new Uint8Array(t));
  }
};
var Ma = class {
  add(e, t) {
    this[e] = t;
  }
};
function eh(o) {
  const e = "Kaydara FBX Binary  \0";
  return o.byteLength >= e.length && e === Pa(o, 0, e.length);
}
function th(o) {
  const e = [
    "K",
    "a",
    "y",
    "d",
    "a",
    "r",
    "a",
    "\\",
    "F",
    "B",
    "X",
    "\\",
    "B",
    "i",
    "n",
    "a",
    "r",
    "y",
    "\\",
    "\\"
  ];
  let t = 0;
  function n(s) {
    const i = o[s - 1];
    return o = o.slice(t + s), t++, i;
  }
  for (let s = 0; s < e.length; ++s)
    if (n(1) === e[s])
      return false;
  return true;
}
function Wr(o) {
  const e = /FBXVersion: (\d+)/, t = o.match(e);
  if (t)
    return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function nh(o) {
  return o / 46186158e3;
}
var sh = [];
function Ps(o, e, t, n) {
  let s;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      s = o;
      break;
    case "ByPolygon":
      s = e;
      break;
    case "ByVertice":
      s = t;
      break;
    case "AllSame":
      s = n.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
  }
  n.referenceType === "IndexToDirect" && (s = n.indices[s]);
  const i = s * n.dataSize, r = i + n.dataSize;
  return rh(sh, n.buffer, i, r);
}
var vi = new Euler();
var In = new Vector3();
function Sa(o) {
  const e = new Matrix4(), t = new Matrix4(), n = new Matrix4(), s = new Matrix4(), i = new Matrix4(), r = new Matrix4(), a = new Matrix4(), l = new Matrix4(), c = new Matrix4(), u = new Matrix4(), h = new Matrix4(), m = new Matrix4(), p = o.inheritType ? o.inheritType : 0;
  if (o.translation && e.setPosition(In.fromArray(o.translation)), o.preRotation) {
    const f = o.preRotation.map(MathUtils.degToRad);
    f.push(o.eulerOrder), t.makeRotationFromEuler(vi.fromArray(f));
  }
  if (o.rotation) {
    const f = o.rotation.map(MathUtils.degToRad);
    f.push(o.eulerOrder), n.makeRotationFromEuler(vi.fromArray(f));
  }
  if (o.postRotation) {
    const f = o.postRotation.map(MathUtils.degToRad);
    f.push(o.eulerOrder), s.makeRotationFromEuler(vi.fromArray(f)), s.invert();
  }
  o.scale && i.scale(In.fromArray(o.scale)), o.scalingOffset && a.setPosition(In.fromArray(o.scalingOffset)), o.scalingPivot && r.setPosition(In.fromArray(o.scalingPivot)), o.rotationOffset && l.setPosition(In.fromArray(o.rotationOffset)), o.rotationPivot && c.setPosition(In.fromArray(o.rotationPivot)), o.parentMatrixWorld && (h.copy(o.parentMatrix), u.copy(o.parentMatrixWorld));
  const v = t.clone().multiply(n).multiply(s), _ = new Matrix4();
  _.extractRotation(u);
  const y = new Matrix4();
  y.copyPosition(u);
  const E = y.clone().invert().multiply(u), R = _.clone().invert().multiply(E), T = i, g = new Matrix4();
  if (p === 0)
    g.copy(_).multiply(v).multiply(R).multiply(T);
  else if (p === 1)
    g.copy(_).multiply(R).multiply(v).multiply(T);
  else {
    const P = new Matrix4().scale(new Vector3().setFromMatrixScale(h)).clone().invert(), I = R.clone().multiply(P);
    g.copy(_).multiply(v).multiply(I).multiply(T);
  }
  const A2 = c.clone().invert(), x = r.clone().invert();
  let M = e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(A2).multiply(a).multiply(r).multiply(i).multiply(x);
  const d = new Matrix4().copyPosition(M), w = u.clone().multiply(d);
  return m.copyPosition(w), M = m.clone().multiply(g), M.premultiply(u.invert()), M;
}
function Aa(o) {
  o = o || 0;
  const e = [
    "ZYX",
    // -> XYZ extrinsic
    "YZX",
    // -> XZY extrinsic
    "XZY",
    // -> YZX extrinsic
    "ZXY",
    // -> YXZ extrinsic
    "YXZ",
    // -> ZXY extrinsic
    "XYZ"
    // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
  ];
  return o === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[o];
}
function _i(o) {
  return o.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function Pa(o, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = o.byteLength), LoaderUtils.decodeText(new Uint8Array(o, e, t));
}
function ih(o, e) {
  for (let t = 0, n = o.length, s = e.length; t < s; t++, n++)
    o[n] = e[t];
}
function rh(o, e, t, n) {
  for (let s = t, i = 0; s < n; s++, i++)
    o[i] = e[s];
  return o;
}
function $r2(o, e, t) {
  return o.slice(0, e).concat(t).concat(o.slice(e));
}
var oh = Object.defineProperty;
var ah = (o, e, t) => e in o ? oh(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t;
var fr = (o, e, t) => (ah(o, typeof e != "symbol" ? e + "" : e, t), t);
var lh = class extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const i = new FileLoader(this.manager);
    i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (r) => {
        if (typeof r != "string")
          throw new Error("unsupported data type");
        const a = JSON.parse(r), l = this.parse(a);
        t && t(l);
      },
      n,
      s
    );
  }
  loadAsync(e, t) {
    return super.loadAsync(e, t);
  }
  parse(e) {
    return new dr2(e);
  }
};
var dr2 = class {
  constructor(e) {
    fr(this, "data"), this.data = e;
  }
  generateShapes(e, t = 100, n) {
    const s = [], i = { letterSpacing: 0, lineHeight: 1, ...n }, r = ch(e, t, this.data, i);
    for (let a = 0, l = r.length; a < l; a++)
      Array.prototype.push.apply(s, r[a].toShapes(false));
    return s;
  }
};
fr(dr2, "isFont");
fr(dr2, "type");
function ch(o, e, t, n) {
  const s = Array.from(o), i = e / t.resolution, r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, a = [];
  let l = 0, c = 0;
  for (let u = 0; u < s.length; u++) {
    const h = s[u];
    if (h === `
`)
      l = 0, c -= r * n.lineHeight;
    else {
      const m = uh(h, i, l, c, t);
      m && (l += m.offsetX + n.letterSpacing, a.push(m.path));
    }
  }
  return a;
}
function uh(o, e, t, n, s) {
  const i = s.glyphs[o] || s.glyphs["?"];
  if (!i) {
    console.error('THREE.Font: character "' + o + '" does not exists in font family ' + s.familyName + ".");
    return;
  }
  const r = new ShapePath();
  let a, l, c, u, h, m, p, v;
  if (i.o) {
    const _ = i._cachedOutline || (i._cachedOutline = i.o.split(" "));
    for (let y = 0, E = _.length; y < E; )
      switch (_[y++]) {
        case "m":
          a = parseInt(_[y++]) * e + t, l = parseInt(_[y++]) * e + n, r.moveTo(a, l);
          break;
        case "l":
          a = parseInt(_[y++]) * e + t, l = parseInt(_[y++]) * e + n, r.lineTo(a, l);
          break;
        case "q":
          c = parseInt(_[y++]) * e + t, u = parseInt(_[y++]) * e + n, h = parseInt(_[y++]) * e + t, m = parseInt(_[y++]) * e + n, r.quadraticCurveTo(h, m, c, u);
          break;
        case "b":
          c = parseInt(_[y++]) * e + t, u = parseInt(_[y++]) * e + n, h = parseInt(_[y++]) * e + t, m = parseInt(_[y++]) * e + n, p = parseInt(_[y++]) * e + t, v = parseInt(_[y++]) * e + n, r.bezierCurveTo(h, m, p, v, c, u);
          break;
      }
  }
  return { offsetX: i.ha * e, path: r };
}
var Zr = class extends DataTextureLoader {
  constructor(e) {
    super(e), this.type = HalfFloatType;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(e) {
    const a = function(T, g) {
      switch (T) {
        case 1:
          console.error("THREE.RGBELoader Read Error: " + (g || ""));
          break;
        case 2:
          console.error("THREE.RGBELoader Write Error: " + (g || ""));
          break;
        case 3:
          console.error("THREE.RGBELoader Bad File Format: " + (g || ""));
          break;
        default:
        case 4:
          console.error("THREE.RGBELoader: Error: " + (g || ""));
      }
      return -1;
    }, h = `
`, m = function(T, g, A2) {
      g = g || 1024;
      let M = T.pos, d = -1, w = 0, f = "", P = String.fromCharCode.apply(null, new Uint16Array(T.subarray(M, M + 128)));
      for (; 0 > (d = P.indexOf(h)) && w < g && M < T.byteLength; )
        f += P, w += P.length, M += 128, P += String.fromCharCode.apply(null, new Uint16Array(T.subarray(M, M + 128)));
      return -1 < d ? (A2 !== false && (T.pos += w + d + 1), f + P.slice(0, d)) : false;
    }, p = function(T) {
      const g = /^#\?(\S+)/, A2 = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, x = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, M = /^\s*FORMAT=(\S+)\s*$/, d = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, w = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let f, P;
      if (T.pos >= T.byteLength || !(f = m(T)))
        return a(1, "no header found");
      if (!(P = f.match(g)))
        return a(3, "bad initial token");
      for (w.valid |= 1, w.programtype = P[1], w.string += f + `
`; f = m(T), f !== false; ) {
        if (w.string += f + `
`, f.charAt(0) === "#") {
          w.comments += f + `
`;
          continue;
        }
        if ((P = f.match(A2)) && (w.gamma = parseFloat(P[1])), (P = f.match(x)) && (w.exposure = parseFloat(P[1])), (P = f.match(M)) && (w.valid |= 2, w.format = P[1]), (P = f.match(d)) && (w.valid |= 4, w.height = parseInt(P[1], 10), w.width = parseInt(P[2], 10)), w.valid & 2 && w.valid & 4)
          break;
      }
      return w.valid & 2 ? w.valid & 4 ? w : a(3, "missing image size specifier") : a(3, "missing format specifier");
    }, v = function(T, g, A2) {
      const x = g;
      if (
        // run length encoding is not allowed so read flat
        x < 8 || x > 32767 || // this file is not run length encoded
        T[0] !== 2 || T[1] !== 2 || T[2] & 128
      )
        return new Uint8Array(T);
      if (x !== (T[2] << 8 | T[3]))
        return a(3, "wrong scanline width");
      const M = new Uint8Array(4 * g * A2);
      if (!M.length)
        return a(4, "unable to allocate buffer space");
      let d = 0, w = 0;
      const f = 4 * x, P = new Uint8Array(4), I = new Uint8Array(f);
      let K = A2;
      for (; K > 0 && w < T.byteLength; ) {
        if (w + 4 > T.byteLength)
          return a(1);
        if (P[0] = T[w++], P[1] = T[w++], P[2] = T[w++], P[3] = T[w++], P[0] != 2 || P[1] != 2 || (P[2] << 8 | P[3]) != x)
          return a(3, "bad rgbe scanline format");
        let N = 0, Z;
        for (; N < f && w < T.byteLength; ) {
          Z = T[w++];
          const X = Z > 128;
          if (X && (Z -= 128), Z === 0 || N + Z > f)
            return a(3, "bad scanline data");
          if (X) {
            const V = T[w++];
            for (let ne = 0; ne < Z; ne++)
              I[N++] = V;
          } else
            I.set(T.subarray(w, w + Z), N), N += Z, w += Z;
        }
        const W = x;
        for (let X = 0; X < W; X++) {
          let V = 0;
          M[d] = I[X + V], V += x, M[d + 1] = I[X + V], V += x, M[d + 2] = I[X + V], V += x, M[d + 3] = I[X + V], d += 4;
        }
        K--;
      }
      return M;
    }, _ = function(T, g, A2, x) {
      const M = T[g + 3], d = Math.pow(2, M - 128) / 255;
      A2[x + 0] = T[g + 0] * d, A2[x + 1] = T[g + 1] * d, A2[x + 2] = T[g + 2] * d, A2[x + 3] = 1;
    }, y = function(T, g, A2, x) {
      const M = T[g + 3], d = Math.pow(2, M - 128) / 255;
      A2[x + 0] = DataUtils.toHalfFloat(Math.min(T[g + 0] * d, 65504)), A2[x + 1] = DataUtils.toHalfFloat(Math.min(T[g + 1] * d, 65504)), A2[x + 2] = DataUtils.toHalfFloat(Math.min(T[g + 2] * d, 65504)), A2[x + 3] = DataUtils.toHalfFloat(1);
    }, E = new Uint8Array(e);
    E.pos = 0;
    const R = p(E);
    if (R !== -1) {
      const T = R.width, g = R.height, A2 = v(E.subarray(E.pos), T, g);
      if (A2 !== -1) {
        let x, M, d;
        switch (this.type) {
          case FloatType:
            d = A2.length / 4;
            const w = new Float32Array(d * 4);
            for (let P = 0; P < d; P++)
              _(A2, P * 4, w, P * 4);
            x = w, M = FloatType;
            break;
          case HalfFloatType:
            d = A2.length / 4;
            const f = new Uint16Array(d * 4);
            for (let P = 0; P < d; P++)
              y(A2, P * 4, f, P * 4);
            x = f, M = HalfFloatType;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: T,
          height: g,
          data: x,
          header: R.string,
          gamma: R.gamma,
          exposure: R.exposure,
          type: M
        };
      }
    }
    return null;
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, s) {
    function i(r, a) {
      switch (r.type) {
        case FloatType:
        case HalfFloatType:
          "colorSpace" in r ? r.colorSpace = "srgb-linear" : r.encoding = 3e3, r.minFilter = LinearFilter, r.magFilter = LinearFilter, r.generateMipmaps = false, r.flipY = true;
          break;
      }
      t && t(r, a);
    }
    return super.load(e, i, n, s);
  }
};
var is = class _is extends Loader {
  constructor(e) {
    super(e), this.defaultDPI = 90, this.defaultUnit = "px";
  }
  load(e, t, n, s) {
    const i = this, r = new FileLoader(i.manager);
    r.setPath(i.path), r.setRequestHeader(i.requestHeader), r.setWithCredentials(i.withCredentials), r.load(
      e,
      function(a) {
        try {
          t(i.parse(a));
        } catch (l) {
          s ? s(l) : console.error(l), i.manager.itemError(e);
        }
      },
      n,
      s
    );
  }
  parse(e) {
    const t = this;
    function n(H, k) {
      if (H.nodeType !== 1)
        return;
      const b = g(H);
      let U = true, J = null;
      switch (H.nodeName) {
        case "svg":
          break;
        case "style":
          i(H);
          break;
        case "g":
          k = v(H, k);
          break;
        case "path":
          k = v(H, k), H.hasAttribute("d") && (J = s(H));
          break;
        case "rect":
          k = v(H, k), J = l(H);
          break;
        case "polygon":
          k = v(H, k), J = c(H);
          break;
        case "polyline":
          k = v(H, k), J = u(H);
          break;
        case "circle":
          k = v(H, k), J = h(H);
          break;
        case "ellipse":
          k = v(H, k), J = m(H);
          break;
        case "line":
          k = v(H, k), J = p(H);
          break;
        case "defs":
          U = false;
          break;
        case "mask":
          U = false;
          break;
        case "use":
          k = v(H, k);
          const F = H.href.baseVal.substring(1), B = H.viewportElement.getElementById(F);
          B ? n(B, k) : console.warn("SVGLoader: 'use node' references non-existent node id: " + F);
          break;
      }
      if (J && (k.fill !== void 0 && k.fill !== "none" && J.color.setStyle(k.fill), x(J, ne), f.push(J), J.userData = { node: H, style: k }), U) {
        const F = H.childNodes;
        for (let B = 0; B < F.length; B++)
          n(F[B], k);
      }
      b && (I.pop(), I.length > 0 ? ne.copy(I[I.length - 1]) : ne.identity());
    }
    function s(H) {
      const k = new ShapePath(), b = new Vector2(), U = new Vector2(), J = new Vector2();
      let F = true, B = false;
      const C = H.getAttribute("d").match(/[a-df-z][^a-df-z]*/gi);
      for (let D = 0, G = C.length; D < G; D++) {
        const $ = C[D], Y = $.charAt(0), te = $.substr(1).trim();
        F === true && (B = true, F = false);
        let O;
        switch (Y) {
          case "M":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 2)
              b.x = O[L + 0], b.y = O[L + 1], U.x = b.x, U.y = b.y, L === 0 ? k.moveTo(b.x, b.y) : k.lineTo(b.x, b.y), L === 0 && J.copy(b);
            break;
          case "H":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L++)
              b.x = O[L], U.x = b.x, U.y = b.y, k.lineTo(b.x, b.y), L === 0 && B === true && J.copy(b);
            break;
          case "V":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L++)
              b.y = O[L], U.x = b.x, U.y = b.y, k.lineTo(b.x, b.y), L === 0 && B === true && J.copy(b);
            break;
          case "L":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 2)
              b.x = O[L + 0], b.y = O[L + 1], U.x = b.x, U.y = b.y, k.lineTo(b.x, b.y), L === 0 && B === true && J.copy(b);
            break;
          case "C":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 6)
              k.bezierCurveTo(
                O[L + 0],
                O[L + 1],
                O[L + 2],
                O[L + 3],
                O[L + 4],
                O[L + 5]
              ), U.x = O[L + 2], U.y = O[L + 3], b.x = O[L + 4], b.y = O[L + 5], L === 0 && B === true && J.copy(b);
            break;
          case "S":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 4)
              k.bezierCurveTo(
                _(b.x, U.x),
                _(b.y, U.y),
                O[L + 0],
                O[L + 1],
                O[L + 2],
                O[L + 3]
              ), U.x = O[L + 0], U.y = O[L + 1], b.x = O[L + 2], b.y = O[L + 3], L === 0 && B === true && J.copy(b);
            break;
          case "Q":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 4)
              k.quadraticCurveTo(O[L + 0], O[L + 1], O[L + 2], O[L + 3]), U.x = O[L + 0], U.y = O[L + 1], b.x = O[L + 2], b.y = O[L + 3], L === 0 && B === true && J.copy(b);
            break;
          case "T":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 2) {
              const ce = _(b.x, U.x), be = _(b.y, U.y);
              k.quadraticCurveTo(ce, be, O[L + 0], O[L + 1]), U.x = ce, U.y = be, b.x = O[L + 0], b.y = O[L + 1], L === 0 && B === true && J.copy(b);
            }
            break;
          case "A":
            O = y(te, [3, 4], 7);
            for (let L = 0, re2 = O.length; L < re2; L += 7) {
              if (O[L + 5] == b.x && O[L + 6] == b.y)
                continue;
              const ce = b.clone();
              b.x = O[L + 5], b.y = O[L + 6], U.x = b.x, U.y = b.y, r(
                k,
                O[L],
                O[L + 1],
                O[L + 2],
                O[L + 3],
                O[L + 4],
                ce,
                b
              ), L === 0 && B === true && J.copy(b);
            }
            break;
          case "m":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 2)
              b.x += O[L + 0], b.y += O[L + 1], U.x = b.x, U.y = b.y, L === 0 ? k.moveTo(b.x, b.y) : k.lineTo(b.x, b.y), L === 0 && J.copy(b);
            break;
          case "h":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L++)
              b.x += O[L], U.x = b.x, U.y = b.y, k.lineTo(b.x, b.y), L === 0 && B === true && J.copy(b);
            break;
          case "v":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L++)
              b.y += O[L], U.x = b.x, U.y = b.y, k.lineTo(b.x, b.y), L === 0 && B === true && J.copy(b);
            break;
          case "l":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 2)
              b.x += O[L + 0], b.y += O[L + 1], U.x = b.x, U.y = b.y, k.lineTo(b.x, b.y), L === 0 && B === true && J.copy(b);
            break;
          case "c":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 6)
              k.bezierCurveTo(
                b.x + O[L + 0],
                b.y + O[L + 1],
                b.x + O[L + 2],
                b.y + O[L + 3],
                b.x + O[L + 4],
                b.y + O[L + 5]
              ), U.x = b.x + O[L + 2], U.y = b.y + O[L + 3], b.x += O[L + 4], b.y += O[L + 5], L === 0 && B === true && J.copy(b);
            break;
          case "s":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 4)
              k.bezierCurveTo(
                _(b.x, U.x),
                _(b.y, U.y),
                b.x + O[L + 0],
                b.y + O[L + 1],
                b.x + O[L + 2],
                b.y + O[L + 3]
              ), U.x = b.x + O[L + 0], U.y = b.y + O[L + 1], b.x += O[L + 2], b.y += O[L + 3], L === 0 && B === true && J.copy(b);
            break;
          case "q":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 4)
              k.quadraticCurveTo(
                b.x + O[L + 0],
                b.y + O[L + 1],
                b.x + O[L + 2],
                b.y + O[L + 3]
              ), U.x = b.x + O[L + 0], U.y = b.y + O[L + 1], b.x += O[L + 2], b.y += O[L + 3], L === 0 && B === true && J.copy(b);
            break;
          case "t":
            O = y(te);
            for (let L = 0, re2 = O.length; L < re2; L += 2) {
              const ce = _(b.x, U.x), be = _(b.y, U.y);
              k.quadraticCurveTo(ce, be, b.x + O[L + 0], b.y + O[L + 1]), U.x = ce, U.y = be, b.x = b.x + O[L + 0], b.y = b.y + O[L + 1], L === 0 && B === true && J.copy(b);
            }
            break;
          case "a":
            O = y(te, [3, 4], 7);
            for (let L = 0, re2 = O.length; L < re2; L += 7) {
              if (O[L + 5] == 0 && O[L + 6] == 0)
                continue;
              const ce = b.clone();
              b.x += O[L + 5], b.y += O[L + 6], U.x = b.x, U.y = b.y, r(
                k,
                O[L],
                O[L + 1],
                O[L + 2],
                O[L + 3],
                O[L + 4],
                ce,
                b
              ), L === 0 && B === true && J.copy(b);
            }
            break;
          case "Z":
          case "z":
            k.currentPath.autoClose = true, k.currentPath.curves.length > 0 && (b.copy(J), k.currentPath.currentPoint.copy(b), F = true);
            break;
          default:
            console.warn($);
        }
        B = false;
      }
      return k;
    }
    function i(H) {
      if (!(!H.sheet || !H.sheet.cssRules || !H.sheet.cssRules.length))
        for (let k = 0; k < H.sheet.cssRules.length; k++) {
          const b = H.sheet.cssRules[k];
          if (b.type !== 1)
            continue;
          const U = b.selectorText.split(/,/gm).filter(Boolean).map((J) => J.trim());
          for (let J = 0; J < U.length; J++)
            P[U[J]] = Object.assign(P[U[J]] || {}, b.style);
        }
    }
    function r(H, k, b, U, J, F, B, S) {
      if (k == 0 || b == 0) {
        H.lineTo(S.x, S.y);
        return;
      }
      U = U * Math.PI / 180, k = Math.abs(k), b = Math.abs(b);
      const C = (B.x - S.x) / 2, D = (B.y - S.y) / 2, G = Math.cos(U) * C + Math.sin(U) * D, $ = -Math.sin(U) * C + Math.cos(U) * D;
      let Y = k * k, te = b * b;
      const O = G * G, L = $ * $, re2 = O / Y + L / te;
      if (re2 > 1) {
        const An = Math.sqrt(re2);
        k = An * k, b = An * b, Y = k * k, te = b * b;
      }
      const ce = Y * L + te * O, be = (Y * te - ce) / ce;
      let Me = Math.sqrt(Math.max(0, be));
      J === F && (Me = -Me);
      const Se = Me * k * $ / b, qe = -Me * b * G / k, kt = Math.cos(U) * Se - Math.sin(U) * qe + (B.x + S.x) / 2, jn = Math.sin(U) * Se + Math.cos(U) * qe + (B.y + S.y) / 2, Sn = a(1, 0, (G - Se) / k, ($ - qe) / b), gt = a((G - Se) / k, ($ - qe) / b, (-G - Se) / k, (-$ - qe) / b) % (Math.PI * 2);
      H.currentPath.absellipse(kt, jn, k, b, Sn, Sn + gt, F === 0, U);
    }
    function a(H, k, b, U) {
      const J = H * b + k * U, F = Math.sqrt(H * H + k * k) * Math.sqrt(b * b + U * U);
      let B = Math.acos(Math.max(-1, Math.min(1, J / F)));
      return H * U - k * b < 0 && (B = -B), B;
    }
    function l(H) {
      const k = T(H.getAttribute("x") || 0), b = T(H.getAttribute("y") || 0), U = T(H.getAttribute("rx") || H.getAttribute("ry") || 0), J = T(H.getAttribute("ry") || H.getAttribute("rx") || 0), F = T(H.getAttribute("width")), B = T(H.getAttribute("height")), S = 1 - 0.551915024494, C = new ShapePath();
      return C.moveTo(k + U, b), C.lineTo(k + F - U, b), (U !== 0 || J !== 0) && C.bezierCurveTo(k + F - U * S, b, k + F, b + J * S, k + F, b + J), C.lineTo(k + F, b + B - J), (U !== 0 || J !== 0) && C.bezierCurveTo(k + F, b + B - J * S, k + F - U * S, b + B, k + F - U, b + B), C.lineTo(k + U, b + B), (U !== 0 || J !== 0) && C.bezierCurveTo(k + U * S, b + B, k, b + B - J * S, k, b + B - J), C.lineTo(k, b + J), (U !== 0 || J !== 0) && C.bezierCurveTo(k, b + J * S, k + U * S, b, k + U, b), C;
    }
    function c(H) {
      function k(F, B, S) {
        const C = T(B), D = T(S);
        J === 0 ? U.moveTo(C, D) : U.lineTo(C, D), J++;
      }
      const b = /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g, U = new ShapePath();
      let J = 0;
      return H.getAttribute("points").replace(b, k), U.currentPath.autoClose = true, U;
    }
    function u(H) {
      function k(F, B, S) {
        const C = T(B), D = T(S);
        J === 0 ? U.moveTo(C, D) : U.lineTo(C, D), J++;
      }
      const b = /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g, U = new ShapePath();
      let J = 0;
      return H.getAttribute("points").replace(b, k), U.currentPath.autoClose = false, U;
    }
    function h(H) {
      const k = T(H.getAttribute("cx") || 0), b = T(H.getAttribute("cy") || 0), U = T(H.getAttribute("r") || 0), J = new Path();
      J.absarc(k, b, U, 0, Math.PI * 2);
      const F = new ShapePath();
      return F.subPaths.push(J), F;
    }
    function m(H) {
      const k = T(H.getAttribute("cx") || 0), b = T(H.getAttribute("cy") || 0), U = T(H.getAttribute("rx") || 0), J = T(H.getAttribute("ry") || 0), F = new Path();
      F.absellipse(k, b, U, J, 0, Math.PI * 2);
      const B = new ShapePath();
      return B.subPaths.push(F), B;
    }
    function p(H) {
      const k = T(H.getAttribute("x1") || 0), b = T(H.getAttribute("y1") || 0), U = T(H.getAttribute("x2") || 0), J = T(H.getAttribute("y2") || 0), F = new ShapePath();
      return F.moveTo(k, b), F.lineTo(U, J), F.currentPath.autoClose = false, F;
    }
    function v(H, k) {
      k = Object.assign({}, k);
      let b = {};
      if (H.hasAttribute("class")) {
        const B = H.getAttribute("class").split(/\s/).filter(Boolean).map((S) => S.trim());
        for (let S = 0; S < B.length; S++)
          b = Object.assign(b, P["." + B[S]]);
      }
      H.hasAttribute("id") && (b = Object.assign(b, P["#" + H.getAttribute("id")]));
      function U(B, S, C) {
        C === void 0 && (C = function(G) {
          return G.startsWith("url") && console.warn("SVGLoader: url access in attributes is not implemented."), G;
        }), H.hasAttribute(B) && (k[S] = C(H.getAttribute(B))), b[B] && (k[S] = C(b[B])), H.style && H.style[B] !== "" && (k[S] = C(H.style[B]));
      }
      function J(B) {
        return Math.max(0, Math.min(1, T(B)));
      }
      function F(B) {
        return Math.max(0, T(B));
      }
      return U("fill", "fill"), U("fill-opacity", "fillOpacity", J), U("fill-rule", "fillRule"), U("opacity", "opacity", J), U("stroke", "stroke"), U("stroke-opacity", "strokeOpacity", J), U("stroke-width", "strokeWidth", F), U("stroke-linejoin", "strokeLineJoin"), U("stroke-linecap", "strokeLineCap"), U("stroke-miterlimit", "strokeMiterLimit", F), U("visibility", "visibility"), k;
    }
    function _(H, k) {
      return H - (k - H);
    }
    function y(H, k, b) {
      if (typeof H != "string")
        throw new TypeError("Invalid input: " + typeof H);
      const U = {
        SEPARATOR: /[ \t\r\n\,.\-+]/,
        WHITESPACE: /[ \t\r\n]/,
        DIGIT: /[\d]/,
        SIGN: /[-+]/,
        POINT: /\./,
        COMMA: /,/,
        EXP: /e/i,
        FLAGS: /[01]/
      }, J = 0, F = 1, B = 2, S = 3;
      let C = J, D = true, G = "", $ = "";
      const Y = [];
      function te(ce, be, Me) {
        const Se = new SyntaxError('Unexpected character "' + ce + '" at index ' + be + ".");
        throw Se.partial = Me, Se;
      }
      function O() {
        G !== "" && ($ === "" ? Y.push(Number(G)) : Y.push(Number(G) * Math.pow(10, Number($)))), G = "", $ = "";
      }
      let L;
      const re2 = H.length;
      for (let ce = 0; ce < re2; ce++) {
        if (L = H[ce], Array.isArray(k) && k.includes(Y.length % b) && U.FLAGS.test(L)) {
          C = F, G = L, O();
          continue;
        }
        if (C === J) {
          if (U.WHITESPACE.test(L))
            continue;
          if (U.DIGIT.test(L) || U.SIGN.test(L)) {
            C = F, G = L;
            continue;
          }
          if (U.POINT.test(L)) {
            C = B, G = L;
            continue;
          }
          U.COMMA.test(L) && (D && te(L, ce, Y), D = true);
        }
        if (C === F) {
          if (U.DIGIT.test(L)) {
            G += L;
            continue;
          }
          if (U.POINT.test(L)) {
            G += L, C = B;
            continue;
          }
          if (U.EXP.test(L)) {
            C = S;
            continue;
          }
          U.SIGN.test(L) && G.length === 1 && U.SIGN.test(G[0]) && te(L, ce, Y);
        }
        if (C === B) {
          if (U.DIGIT.test(L)) {
            G += L;
            continue;
          }
          if (U.EXP.test(L)) {
            C = S;
            continue;
          }
          U.POINT.test(L) && G[G.length - 1] === "." && te(L, ce, Y);
        }
        if (C === S) {
          if (U.DIGIT.test(L)) {
            $ += L;
            continue;
          }
          if (U.SIGN.test(L)) {
            if ($ === "") {
              $ += L;
              continue;
            }
            $.length === 1 && U.SIGN.test($) && te(L, ce, Y);
          }
        }
        U.WHITESPACE.test(L) ? (O(), C = J, D = false) : U.COMMA.test(L) ? (O(), C = J, D = true) : U.SIGN.test(L) ? (O(), C = F, G = L) : U.POINT.test(L) ? (O(), C = B, G = L) : te(L, ce, Y);
      }
      return O(), Y;
    }
    const E = ["mm", "cm", "in", "pt", "pc", "px"], R = {
      mm: {
        mm: 1,
        cm: 0.1,
        in: 1 / 25.4,
        pt: 72 / 25.4,
        pc: 6 / 25.4,
        px: -1
      },
      cm: {
        mm: 10,
        cm: 1,
        in: 1 / 2.54,
        pt: 72 / 2.54,
        pc: 6 / 2.54,
        px: -1
      },
      in: {
        mm: 25.4,
        cm: 2.54,
        in: 1,
        pt: 72,
        pc: 6,
        px: -1
      },
      pt: {
        mm: 25.4 / 72,
        cm: 2.54 / 72,
        in: 1 / 72,
        pt: 1,
        pc: 6 / 72,
        px: -1
      },
      pc: {
        mm: 25.4 / 6,
        cm: 2.54 / 6,
        in: 1 / 6,
        pt: 72 / 6,
        pc: 1,
        px: -1
      },
      px: {
        px: 1
      }
    };
    function T(H) {
      let k = "px";
      if (typeof H == "string" || H instanceof String)
        for (let U = 0, J = E.length; U < J; U++) {
          const F = E[U];
          if (H.endsWith(F)) {
            k = F, H = H.substring(0, H.length - F.length);
            break;
          }
        }
      let b;
      return k === "px" && t.defaultUnit !== "px" ? b = R.in[t.defaultUnit] / t.defaultDPI : (b = R[k][t.defaultUnit], b < 0 && (b = R[k].in * t.defaultDPI)), b * parseFloat(H);
    }
    function g(H) {
      if (!(H.hasAttribute("transform") || H.nodeName === "use" && (H.hasAttribute("x") || H.hasAttribute("y"))))
        return null;
      const k = A2(H);
      return I.length > 0 && k.premultiply(I[I.length - 1]), ne.copy(k), I.push(k), k;
    }
    function A2(H) {
      const k = new Matrix3(), b = K;
      if (H.nodeName === "use" && (H.hasAttribute("x") || H.hasAttribute("y"))) {
        const U = T(H.getAttribute("x")), J = T(H.getAttribute("y"));
        k.translate(U, J);
      }
      if (H.hasAttribute("transform")) {
        const U = H.getAttribute("transform").split(")");
        for (let J = U.length - 1; J >= 0; J--) {
          const F = U[J].trim();
          if (F === "")
            continue;
          const B = F.indexOf("("), S = F.length;
          if (B > 0 && B < S) {
            const C = F.substr(0, B), D = y(F.substr(B + 1, S - B - 1));
            switch (b.identity(), C) {
              case "translate":
                if (D.length >= 1) {
                  const G = D[0];
                  let $ = G;
                  D.length >= 2 && ($ = D[1]), b.translate(G, $);
                }
                break;
              case "rotate":
                if (D.length >= 1) {
                  let G = 0, $ = 0, Y = 0;
                  G = -D[0] * Math.PI / 180, D.length >= 3 && ($ = D[1], Y = D[2]), N.identity().translate(-$, -Y), Z.identity().rotate(G), W.multiplyMatrices(Z, N), N.identity().translate($, Y), b.multiplyMatrices(N, W);
                }
                break;
              case "scale":
                if (D.length >= 1) {
                  const G = D[0];
                  let $ = G;
                  D.length >= 2 && ($ = D[1]), b.scale(G, $);
                }
                break;
              case "skewX":
                D.length === 1 && b.set(1, Math.tan(D[0] * Math.PI / 180), 0, 0, 1, 0, 0, 0, 1);
                break;
              case "skewY":
                D.length === 1 && b.set(1, 0, 0, Math.tan(D[0] * Math.PI / 180), 1, 0, 0, 0, 1);
                break;
              case "matrix":
                D.length === 6 && b.set(D[0], D[2], D[4], D[1], D[3], D[5], 0, 0, 1);
                break;
            }
          }
          k.premultiply(b);
        }
      }
      return k;
    }
    function x(H, k) {
      function b(F) {
        V.set(F.x, F.y, 1).applyMatrix3(k), F.set(V.x, V.y);
      }
      const U = M(k), J = H.subPaths;
      for (let F = 0, B = J.length; F < B; F++) {
        const C = J[F].curves;
        for (let D = 0; D < C.length; D++) {
          const G = C[D];
          G.isLineCurve ? (b(G.v1), b(G.v2)) : G.isCubicBezierCurve ? (b(G.v0), b(G.v1), b(G.v2), b(G.v3)) : G.isQuadraticBezierCurve ? (b(G.v0), b(G.v1), b(G.v2)) : G.isEllipseCurve && (U && console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."), X.set(G.aX, G.aY), b(X), G.aX = X.x, G.aY = X.y, G.xRadius *= d(k), G.yRadius *= w(k));
        }
      }
    }
    function M(H) {
      return H.elements[1] !== 0 || H.elements[3] !== 0;
    }
    function d(H) {
      const k = H.elements;
      return Math.sqrt(k[0] * k[0] + k[1] * k[1]);
    }
    function w(H) {
      const k = H.elements;
      return Math.sqrt(k[3] * k[3] + k[4] * k[4]);
    }
    const f = [], P = {}, I = [], K = new Matrix3(), N = new Matrix3(), Z = new Matrix3(), W = new Matrix3(), X = new Vector2(), V = new Vector3(), ne = new Matrix3(), se = new DOMParser().parseFromString(e, "image/svg+xml");
    return n(se.documentElement, {
      fill: "#000",
      fillOpacity: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
      strokeLineJoin: "miter",
      strokeLineCap: "butt",
      strokeMiterLimit: 4
    }), { paths: f, xml: se.documentElement };
  }
  static createShapes(e) {
    const n = {
      ORIGIN: 0,
      DESTINATION: 1,
      BETWEEN: 2,
      LEFT: 3,
      RIGHT: 4,
      BEHIND: 5,
      BEYOND: 6
    }, s = {
      loc: n.ORIGIN,
      t: 0
    };
    function i(y, E, R, T) {
      const g = y.x, A2 = E.x, x = R.x, M = T.x, d = y.y, w = E.y, f = R.y, P = T.y, I = (M - x) * (d - f) - (P - f) * (g - x), K = (A2 - g) * (d - f) - (w - d) * (g - x), N = (P - f) * (A2 - g) - (M - x) * (w - d), Z = I / N, W = K / N;
      if (N === 0 && I !== 0 || Z <= 0 || Z >= 1 || W < 0 || W > 1)
        return null;
      if (I === 0 && N === 0) {
        for (let X = 0; X < 2; X++)
          if (r(X === 0 ? R : T, y, E), s.loc == n.ORIGIN) {
            const V = X === 0 ? R : T;
            return { x: V.x, y: V.y, t: s.t };
          } else if (s.loc == n.BETWEEN) {
            const V = +(g + s.t * (A2 - g)).toPrecision(10), ne = +(d + s.t * (w - d)).toPrecision(10);
            return { x: V, y: ne, t: s.t };
          }
        return null;
      } else {
        for (let ne = 0; ne < 2; ne++)
          if (r(ne === 0 ? R : T, y, E), s.loc == n.ORIGIN) {
            const se = ne === 0 ? R : T;
            return { x: se.x, y: se.y, t: s.t };
          }
        const X = +(g + Z * (A2 - g)).toPrecision(10), V = +(d + Z * (w - d)).toPrecision(10);
        return { x: X, y: V, t: Z };
      }
    }
    function r(y, E, R) {
      const T = R.x - E.x, g = R.y - E.y, A2 = y.x - E.x, x = y.y - E.y, M = T * x - A2 * g;
      if (y.x === E.x && y.y === E.y) {
        s.loc = n.ORIGIN, s.t = 0;
        return;
      }
      if (y.x === R.x && y.y === R.y) {
        s.loc = n.DESTINATION, s.t = 1;
        return;
      }
      if (M < -Number.EPSILON) {
        s.loc = n.LEFT;
        return;
      }
      if (M > Number.EPSILON) {
        s.loc = n.RIGHT;
        return;
      }
      if (T * A2 < 0 || g * x < 0) {
        s.loc = n.BEHIND;
        return;
      }
      if (Math.sqrt(T * T + g * g) < Math.sqrt(A2 * A2 + x * x)) {
        s.loc = n.BEYOND;
        return;
      }
      let d;
      T !== 0 ? d = A2 / T : d = x / g, s.loc = n.BETWEEN, s.t = d;
    }
    function a(y, E) {
      const R = [], T = [];
      for (let g = 1; g < y.length; g++) {
        const A2 = y[g - 1], x = y[g];
        for (let M = 1; M < E.length; M++) {
          const d = E[M - 1], w = E[M], f = i(A2, x, d, w);
          f !== null && R.find(
            (P) => P.t <= f.t + Number.EPSILON && P.t >= f.t - Number.EPSILON
          ) === void 0 && (R.push(f), T.push(new Vector2(f.x, f.y)));
        }
      }
      return T;
    }
    function l(y, E, R) {
      const T = new Vector2();
      E.getCenter(T);
      const g = [];
      return R.forEach((A2) => {
        A2.boundingBox.containsPoint(T) && a(y, A2.points).forEach((M) => {
          g.push({ identifier: A2.identifier, isCW: A2.isCW, point: M });
        });
      }), g.sort((A2, x) => A2.point.x - x.point.x), g;
    }
    function c(y, E, R, T, g) {
      (g == null || g === "") && (g = "nonzero");
      const A2 = new Vector2();
      y.boundingBox.getCenter(A2);
      const x = [new Vector2(R, A2.y), new Vector2(T, A2.y)], M = l(x, y.boundingBox, E);
      M.sort((K, N) => K.point.x - N.point.x);
      const d = [], w = [];
      M.forEach((K) => {
        K.identifier === y.identifier ? d.push(K) : w.push(K);
      });
      const f = d[0].point.x, P = [];
      let I = 0;
      for (; I < w.length && w[I].point.x < f; )
        P.length > 0 && P[P.length - 1] === w[I].identifier ? P.pop() : P.push(w[I].identifier), I++;
      if (P.push(y.identifier), g === "evenodd") {
        const K = P.length % 2 === 0, N = P[P.length - 2];
        return { identifier: y.identifier, isHole: K, for: N };
      } else if (g === "nonzero") {
        let K = true, N = null, Z = null;
        for (let W = 0; W < P.length; W++) {
          const X = P[W];
          K ? (Z = E[X].isCW, K = false, N = X) : Z !== E[X].isCW && (Z = E[X].isCW, K = true);
        }
        return { identifier: y.identifier, isHole: K, for: N };
      } else
        console.warn('fill-rule: "' + g + '" is currently not implemented.');
    }
    let u = 0, h = 999999999, m = -999999999, p = e.subPaths.map((y) => {
      const E = y.getPoints();
      let R = -999999999, T = 999999999, g = -999999999, A2 = 999999999;
      for (let x = 0; x < E.length; x++) {
        const M = E[x];
        M.y > R && (R = M.y), M.y < T && (T = M.y), M.x > g && (g = M.x), M.x < A2 && (A2 = M.x);
      }
      return m <= g && (m = g + 1), h >= A2 && (h = A2 - 1), {
        curves: y.curves,
        points: E,
        isCW: ShapeUtils.isClockWise(E),
        identifier: u++,
        boundingBox: new Box2(new Vector2(A2, T), new Vector2(g, R))
      };
    });
    p = p.filter((y) => y.points.length > 1);
    const v = p.map(
      (y) => c(y, p, h, m, e.userData.style.fillRule)
    ), _ = [];
    return p.forEach((y) => {
      if (!v[y.identifier].isHole) {
        const R = new Shape();
        R.curves = y.curves, v.filter((g) => g.isHole && g.for === y.identifier).forEach((g) => {
          const A2 = p[g.identifier], x = new Path();
          x.curves = A2.curves, R.holes.push(x);
        }), _.push(R);
      }
    }), _;
  }
  static getStrokeStyle(e, t, n, s, i) {
    return e = e !== void 0 ? e : 1, t = t !== void 0 ? t : "#000", n = n !== void 0 ? n : "miter", s = s !== void 0 ? s : "butt", i = i !== void 0 ? i : 4, {
      strokeColor: t,
      strokeWidth: e,
      strokeLineJoin: n,
      strokeLineCap: s,
      strokeMiterLimit: i
    };
  }
  static pointsToStroke(e, t, n, s) {
    const i = [], r = [], a = [];
    if (_is.pointsToStrokeWithBuffers(e, t, n, s, i, r, a) === 0)
      return null;
    const l = new BufferGeometry();
    return l.setAttribute("position", new Float32BufferAttribute(i, 3)), l.setAttribute("normal", new Float32BufferAttribute(r, 3)), l.setAttribute("uv", new Float32BufferAttribute(a, 2)), l;
  }
  static pointsToStrokeWithBuffers(e, t, n, s, i, r, a, l) {
    const c = new Vector2(), u = new Vector2(), h = new Vector2(), m = new Vector2(), p = new Vector2(), v = new Vector2(), _ = new Vector2(), y = new Vector2(), E = new Vector2(), R = new Vector2(), T = new Vector2(), g = new Vector2(), A2 = new Vector2(), x = new Vector2(), M = new Vector2(), d = new Vector2(), w = new Vector2();
    n = n !== void 0 ? n : 12, s = s !== void 0 ? s : 1e-3, l = l !== void 0 ? l : 0, e = $(e);
    const f = e.length;
    if (f < 2)
      return 0;
    const P = e[0].equals(e[f - 1]);
    let I, K = e[0], N;
    const Z = t.strokeWidth / 2, W = 1 / (f - 1);
    let X = 0, V, ne, se, he, H = false, k = 0, b = l * 3, U = l * 2;
    J(e[0], e[1], c).multiplyScalar(Z), y.copy(e[0]).sub(c), E.copy(e[0]).add(c), R.copy(y), T.copy(E);
    for (let Y = 1; Y < f; Y++) {
      I = e[Y], Y === f - 1 ? P ? N = e[1] : N = void 0 : N = e[Y + 1];
      const te = c;
      if (J(K, I, te), h.copy(te).multiplyScalar(Z), g.copy(I).sub(h), A2.copy(I).add(h), V = X + W, ne = false, N !== void 0) {
        J(I, N, u), h.copy(u).multiplyScalar(Z), x.copy(I).sub(h), M.copy(I).add(h), se = true, h.subVectors(N, K), te.dot(h) < 0 && (se = false), Y === 1 && (H = se), h.subVectors(N, I), h.normalize();
        const O = Math.abs(te.dot(h));
        if (O !== 0) {
          const L = Z / O;
          h.multiplyScalar(-L), m.subVectors(I, K), p.copy(m).setLength(L).add(h), d.copy(p).negate();
          const re2 = p.length(), ce = m.length();
          m.divideScalar(ce), v.subVectors(N, I);
          const be = v.length();
          switch (v.divideScalar(be), m.dot(d) < ce && v.dot(d) < be && (ne = true), w.copy(p).add(I), d.add(I), he = false, ne ? se ? (M.copy(d), A2.copy(d)) : (x.copy(d), g.copy(d)) : S(), t.strokeLineJoin) {
            case "bevel":
              C(se, ne, V);
              break;
            case "round":
              D(se, ne), se ? B(I, g, x, V, 0) : B(I, M, A2, V, 1);
              break;
            case "miter":
            case "miter-clip":
            default:
              const Me = Z * t.strokeMiterLimit / re2;
              if (Me < 1)
                if (t.strokeLineJoin !== "miter-clip") {
                  C(se, ne, V);
                  break;
                } else
                  D(se, ne), se ? (v.subVectors(w, g).multiplyScalar(Me).add(g), _.subVectors(w, x).multiplyScalar(Me).add(x), F(g, V, 0), F(v, V, 0), F(I, V, 0.5), F(I, V, 0.5), F(v, V, 0), F(_, V, 0), F(I, V, 0.5), F(_, V, 0), F(x, V, 0)) : (v.subVectors(w, A2).multiplyScalar(Me).add(A2), _.subVectors(w, M).multiplyScalar(Me).add(M), F(A2, V, 1), F(v, V, 1), F(I, V, 0.5), F(I, V, 0.5), F(v, V, 1), F(_, V, 1), F(I, V, 0.5), F(_, V, 1), F(M, V, 1));
              else
                ne ? (se ? (F(E, X, 1), F(y, X, 0), F(w, V, 0), F(E, X, 1), F(w, V, 0), F(d, V, 1)) : (F(E, X, 1), F(y, X, 0), F(w, V, 1), F(y, X, 0), F(d, V, 0), F(w, V, 1)), se ? x.copy(w) : M.copy(w)) : se ? (F(g, V, 0), F(w, V, 0), F(I, V, 0.5), F(I, V, 0.5), F(w, V, 0), F(x, V, 0)) : (F(A2, V, 1), F(w, V, 1), F(I, V, 0.5), F(I, V, 0.5), F(w, V, 1), F(M, V, 1)), he = true;
              break;
          }
        } else
          S();
      } else
        S();
      !P && Y === f - 1 && G(e[0], R, T, se, true, X), X = V, K = I, y.copy(x), E.copy(M);
    }
    if (!P)
      G(I, g, A2, se, false, V);
    else if (ne && i) {
      let Y = w, te = d;
      H !== se && (Y = d, te = w), se ? (he || H) && (te.toArray(i, 0 * 3), te.toArray(i, 3 * 3), he && Y.toArray(i, 1 * 3)) : (he || !H) && (te.toArray(i, 1 * 3), te.toArray(i, 3 * 3), he && Y.toArray(i, 0 * 3));
    }
    return k;
    function J(Y, te, O) {
      return O.subVectors(te, Y), O.set(-O.y, O.x).normalize();
    }
    function F(Y, te, O) {
      i && (i[b] = Y.x, i[b + 1] = Y.y, i[b + 2] = 0, r && (r[b] = 0, r[b + 1] = 0, r[b + 2] = 1), b += 3, a && (a[U] = te, a[U + 1] = O, U += 2)), k += 3;
    }
    function B(Y, te, O, L, re2) {
      c.copy(te).sub(Y).normalize(), u.copy(O).sub(Y).normalize();
      let ce = Math.PI;
      const be = c.dot(u);
      Math.abs(be) < 1 && (ce = Math.abs(Math.acos(be))), ce /= n, h.copy(te);
      for (let Me = 0, Se = n - 1; Me < Se; Me++)
        m.copy(h).rotateAround(Y, ce), F(h, L, re2), F(m, L, re2), F(Y, L, 0.5), h.copy(m);
      F(m, L, re2), F(O, L, re2), F(Y, L, 0.5);
    }
    function S() {
      F(E, X, 1), F(y, X, 0), F(g, V, 0), F(E, X, 1), F(g, V, 1), F(A2, V, 0);
    }
    function C(Y, te, O) {
      te ? Y ? (F(E, X, 1), F(y, X, 0), F(g, V, 0), F(E, X, 1), F(g, V, 0), F(d, V, 1), F(g, O, 0), F(x, O, 0), F(d, O, 0.5)) : (F(E, X, 1), F(y, X, 0), F(A2, V, 1), F(y, X, 0), F(d, V, 0), F(A2, V, 1), F(A2, O, 1), F(M, O, 0), F(d, O, 0.5)) : Y ? (F(g, O, 0), F(x, O, 0), F(I, O, 0.5)) : (F(A2, O, 1), F(M, O, 0), F(I, O, 0.5));
    }
    function D(Y, te) {
      te && (Y ? (F(E, X, 1), F(y, X, 0), F(g, V, 0), F(E, X, 1), F(g, V, 0), F(d, V, 1), F(g, X, 0), F(I, V, 0.5), F(d, V, 1), F(I, V, 0.5), F(x, X, 0), F(d, V, 1)) : (F(E, X, 1), F(y, X, 0), F(A2, V, 1), F(y, X, 0), F(d, V, 0), F(A2, V, 1), F(A2, X, 1), F(d, V, 0), F(I, V, 0.5), F(I, V, 0.5), F(d, V, 0), F(M, X, 1)));
    }
    function G(Y, te, O, L, re2, ce) {
      switch (t.strokeLineCap) {
        case "round":
          re2 ? B(Y, O, te, ce, 0.5) : B(Y, te, O, ce, 0.5);
          break;
        case "square":
          if (re2)
            c.subVectors(te, Y), u.set(c.y, -c.x), h.addVectors(c, u).add(Y), m.subVectors(u, c).add(Y), L ? (h.toArray(i, 1 * 3), m.toArray(i, 0 * 3), m.toArray(i, 3 * 3)) : (h.toArray(i, 1 * 3), h.toArray(i, 3 * 3), m.toArray(i, 0 * 3));
          else {
            c.subVectors(O, Y), u.set(c.y, -c.x), h.addVectors(c, u).add(Y), m.subVectors(u, c).add(Y);
            const be = i.length;
            L ? (h.toArray(i, be - 1 * 3), m.toArray(i, be - 2 * 3), m.toArray(i, be - 4 * 3)) : (h.toArray(i, be - 2 * 3), m.toArray(i, be - 1 * 3), m.toArray(i, be - 4 * 3));
          }
          break;
      }
    }
    function $(Y) {
      let te = false;
      for (let L = 1, re2 = Y.length - 1; L < re2; L++)
        if (Y[L].distanceTo(Y[L + 1]) < s) {
          te = true;
          break;
        }
      if (!te)
        return Y;
      const O = [];
      O.push(Y[0]);
      for (let L = 1, re2 = Y.length - 1; L < re2; L++)
        Y[L].distanceTo(Y[L + 1]) >= s && O.push(Y[L]);
      return O.push(Y[Y.length - 1]), O;
    }
  }
};
var xi = /* @__PURE__ */ new WeakMap();
var hh = class extends Loader {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, s) {
    const i = new FileLoader(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (r) => {
        const a = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: false
        };
        this.decodeGeometry(r, a).then(t).catch(s);
      },
      n,
      s
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(e, t, n, s) {
    const i = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: s || this.defaultAttributeTypes,
      useUniqueIDs: !!n
    };
    this.decodeGeometry(e, i).then(t);
  }
  decodeGeometry(e, t) {
    for (const l in t.attributeTypes) {
      const c = t.attributeTypes[l];
      c.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[l] = c.name);
    }
    const n = JSON.stringify(t);
    if (xi.has(e)) {
      const l = xi.get(e);
      if (l.key === n)
        return l.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let s;
    const i = this.workerNextTaskID++, r = e.byteLength, a = this._getWorker(i, r).then((l) => (s = l, new Promise((c, u) => {
      s._callbacks[i] = { resolve: c, reject: u }, s.postMessage({ type: "decode", id: i, taskConfig: t, buffer: e }, [e]);
    }))).then((l) => this._createGeometry(l.geometry));
    return a.catch(() => true).then(() => {
      s && i && this._releaseTask(s, i);
    }), xi.set(e, {
      key: n,
      promise: a
    }), a;
  }
  _createGeometry(e) {
    const t = new BufferGeometry();
    e.index && t.setIndex(new BufferAttribute(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const s = e.attributes[n], i = s.name, r = s.array, a = s.itemSize;
      t.setAttribute(i, new BufferAttribute(r, a));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const n = new FileLoader(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((s, i) => {
      n.load(e, s, void 0, i);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const s = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const i = fh.toString(), r = [
        "/* draco decoder */",
        s,
        "",
        "/* worker */",
        i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const s = new Worker(this.workerSourceURL);
        s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({ type: "init", decoderConfig: this.decoderConfig }), s.onmessage = function(i) {
          const r = i.data;
          switch (r.type) {
            case "decode":
              s._callbacks[r.id].resolve(r);
              break;
            case "error":
              s._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(s);
      } else
        this.workerPool.sort(function(s, i) {
          return s._taskLoad > i._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this;
  }
};
function fh() {
  let o, e;
  onmessage = function(r) {
    const a = r.data;
    switch (a.type) {
      case "init":
        o = a.decoderConfig, e = new Promise(function(u) {
          o.onModuleLoaded = function(h) {
            u({ draco: h });
          }, DracoDecoderModule(o);
        });
        break;
      case "decode":
        const l = a.buffer, c = a.taskConfig;
        e.then((u) => {
          const h = u.draco, m = new h.Decoder(), p = new h.DecoderBuffer();
          p.Init(new Int8Array(l), l.byteLength);
          try {
            const v = t(h, m, p, c), _ = v.attributes.map((y) => y.array.buffer);
            v.index && _.push(v.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: v }, _);
          } catch (v) {
            console.error(v), self.postMessage({ type: "error", id: a.id, error: v.message });
          } finally {
            h.destroy(p), h.destroy(m);
          }
        });
        break;
    }
  };
  function t(r, a, l, c) {
    const u = c.attributeIDs, h = c.attributeTypes;
    let m, p;
    const v = a.GetEncodedGeometryType(l);
    if (v === r.TRIANGULAR_MESH)
      m = new r.Mesh(), p = a.DecodeBufferToMesh(l, m);
    else if (v === r.POINT_CLOUD)
      m = new r.PointCloud(), p = a.DecodeBufferToPointCloud(l, m);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!p.ok() || m.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
    const _ = { index: null, attributes: [] };
    for (const y in u) {
      const E = self[h[y]];
      let R, T;
      if (c.useUniqueIDs)
        T = u[y], R = a.GetAttributeByUniqueId(m, T);
      else {
        if (T = a.GetAttributeId(m, r[u[y]]), T === -1)
          continue;
        R = a.GetAttribute(m, T);
      }
      _.attributes.push(s(r, a, m, y, E, R));
    }
    return v === r.TRIANGULAR_MESH && (_.index = n(r, a, m)), r.destroy(m), _;
  }
  function n(r, a, l) {
    const u = l.num_faces() * 3, h = u * 4, m = r._malloc(h);
    a.GetTrianglesUInt32Array(l, h, m);
    const p = new Uint32Array(r.HEAPF32.buffer, m, u).slice();
    return r._free(m), { array: p, itemSize: 1 };
  }
  function s(r, a, l, c, u, h) {
    const m = h.num_components(), v = l.num_points() * m, _ = v * u.BYTES_PER_ELEMENT, y = i(r, u), E = r._malloc(_);
    a.GetAttributeDataArrayForAllPoints(l, h, y, _, E);
    const R = new u(r.HEAPF32.buffer, E, v).slice();
    return r._free(E), {
      name: c,
      array: R,
      itemSize: m
    };
  }
  function i(r, a) {
    switch (a) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
var Ra = class extends Line {
  constructor(e, t) {
    const n = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], s = new BufferGeometry();
    s.setAttribute("position", new Float32BufferAttribute(n, 3)), s.computeBoundingSphere();
    const i = new LineBasicMaterial({ fog: false });
    super(s, i), this.light = e, this.color = t, this.type = "RectAreaLightHelper";
    const r = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], a = new BufferGeometry();
    a.setAttribute("position", new Float32BufferAttribute(r, 3)), a.computeBoundingSphere(), this.add(new Mesh(a, new MeshBasicMaterial({ side: BackSide, fog: false })));
  }
  updateMatrixWorld() {
    if (this.scale.set(0.5 * this.light.width, 0.5 * this.light.height, 1), this.color !== void 0)
      this.material.color.set(this.color), this.children[0].material.color.set(this.color);
    else {
      this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
      const e = this.material.color, t = Math.max(e.r, e.g, e.b);
      t > 1 && e.multiplyScalar(1 / t), this.children[0].material.color.copy(this.material.color);
    }
    this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld), this.children[0].matrixWorld.copy(this.matrixWorld);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
};
var dh = ["args", "center"];
var Lm = defineComponent({
  __name: "Text3D",
  props: {
    font: {},
    text: {},
    size: { default: 0.5 },
    height: { default: 0.2 },
    curveSegments: { default: 5 },
    bevelEnabled: { type: Boolean, default: true },
    bevelThickness: { default: 0.05 },
    bevelSize: { default: 0.02 },
    bevelOffset: { default: 0 },
    bevelSegments: { default: 4 },
    center: { type: Boolean, default: false },
    needUpdates: { type: Boolean, default: false }
  },
  async setup(o, { expose: e }) {
    let t, n;
    const s = o, {
      center: i,
      font: r,
      text: a,
      needUpdates: l,
      size: c,
      height: u,
      curveSegments: h,
      bevelEnabled: m,
      bevelThickness: p,
      bevelSize: v,
      bevelOffset: _,
      bevelSegments: y
    } = toRefs(s), { extend: E } = dr();
    E({ TextGeometry: Vr });
    const R = new lh(), T = useSlots(), g = computed(() => {
      var d;
      return a != null && a.value ? a.value : T.default ? (d = T.default()[0].children) == null ? void 0 : d.trim() : l.value ? "" : "TresJS";
    }), A2 = shallowRef();
    e({
      value: A2
    });
    const x = ([t, n] = withAsyncContext(() => new Promise((d, w) => {
      try {
        typeof r.value == "string" ? R.load(r.value, (f) => {
          d(f);
        }) : d(r.value);
      } catch (f) {
        w(console.error("cientos", f));
      }
    })), t = await t, n(), t), M = computed(() => ({
      font: x,
      size: toValue(c),
      height: toValue(u),
      curveSegments: toValue(h),
      bevelEnabled: toValue(m),
      bevelThickness: toValue(p),
      bevelSize: toValue(v),
      bevelOffset: toValue(_),
      bevelSegments: toValue(y)
    }));
    return watchEffect(() => {
      A2.value && l.value && (A2.value.geometry.dispose(), A2.value.geometry = new Vr(g.value, M.value), i.value && A2.value.geometry.center());
    }), (d, w) => unref(r) ? (openBlock(), createElementBlock("TresMesh", {
      key: 0,
      ref_key: "text3DRef",
      ref: A2
    }, [
      g.value ? (openBlock(), createElementBlock("TresTextGeometry", {
        key: 0,
        args: [g.value, M.value],
        center: unref(i)
      }, null, 8, dh)) : createCommentVNode("", true),
      renderSlot(d.$slots, "default")
    ], 512)) : createCommentVNode("", true);
  }
});
function Om(o, e) {
  const t = ref(e), n = new AnimationMixer(t.value), s = shallowReactive({});
  o.forEach((r) => {
    const a = n.clipAction(r, t.value);
    s[r.name] = a;
  });
  const { onLoop: i } = re();
  return i(({ delta: r }) => {
    n.update(r);
  }), {
    actions: s,
    mixer: n
  };
}
var Fm = defineComponent({
  __name: "Levioso",
  props: {
    speed: { default: 1 },
    rotationFactor: { default: 1 },
    floatFactor: { default: 1 },
    range: { default: () => [-0.1, 0.1] }
  },
  setup(o, { expose: e }) {
    const t = o, n = shallowRef();
    e({
      value: n
    });
    {
      const l = Math.random() * 1e4, { onLoop: c } = re();
      let u = l;
      c(({ delta: h }) => {
        if (!n.value)
          return;
        u += h * t.speed;
        const m = u * 0.25, p = n.value;
        p.rotation.x = Math.cos(m) * 0.125 * t.rotationFactor, p.rotation.y = Math.sin(m) * 0.125 * t.rotationFactor, p.rotation.z = Math.sin(m) * 0.05 * t.rotationFactor, p.position.y = MathUtils.mapLinear(Math.sin(m), -1, 1, t.range[0], t.range[1]) * t.floatFactor;
      });
    }
    return (s, i) => (openBlock(), createElementBlock("TresGroup", mergeProps(s.$attrs, {
      ref_key: "groupRef",
      ref: n
    }), [
      renderSlot(s.$slots, "default")
    ], 16));
  }
});
var os = class _os extends Mesh {
  constructor(e, t = {}) {
    super(e), this.isReflector = true, this.type = "Reflector", this.camera = new PerspectiveCamera();
    const n = this, s = t.color !== void 0 ? new Color(t.color) : new Color(8355711), i = t.textureWidth || 512, r = t.textureHeight || 512, a = t.clipBias || 0, l = t.shader || _os.ReflectorShader, c = t.multisample !== void 0 ? t.multisample : 4, u = new Plane(), h = new Vector3(), m = new Vector3(), p = new Vector3(), v = new Matrix4(), _ = new Vector3(0, 0, -1), y = new Vector4(), E = new Vector3(), R = new Vector3(), T = new Vector4(), g = new Matrix4(), A2 = this.camera, x = new WebGLRenderTarget(i, r, { samples: c, type: HalfFloatType }), M = new ShaderMaterial({
      name: l.name !== void 0 ? l.name : "unspecified",
      uniforms: UniformsUtils.clone(l.uniforms),
      fragmentShader: l.fragmentShader,
      vertexShader: l.vertexShader
    });
    M.uniforms.tDiffuse.value = x.texture, M.uniforms.color.value = s, M.uniforms.textureMatrix.value = g, this.material = M, this.onBeforeRender = function(d, w, f) {
      if (m.setFromMatrixPosition(n.matrixWorld), p.setFromMatrixPosition(f.matrixWorld), v.extractRotation(n.matrixWorld), h.set(0, 0, 1), h.applyMatrix4(v), E.subVectors(m, p), E.dot(h) > 0)
        return;
      E.reflect(h).negate(), E.add(m), v.extractRotation(f.matrixWorld), _.set(0, 0, -1), _.applyMatrix4(v), _.add(p), R.subVectors(m, _), R.reflect(h).negate(), R.add(m), A2.position.copy(E), A2.up.set(0, 1, 0), A2.up.applyMatrix4(v), A2.up.reflect(h), A2.lookAt(R), A2.far = f.far, A2.updateMatrixWorld(), A2.projectionMatrix.copy(f.projectionMatrix), g.set(
        0.5,
        0,
        0,
        0.5,
        0,
        0.5,
        0,
        0.5,
        0,
        0,
        0.5,
        0.5,
        0,
        0,
        0,
        1
      ), g.multiply(A2.projectionMatrix), g.multiply(A2.matrixWorldInverse), g.multiply(n.matrixWorld), u.setFromNormalAndCoplanarPoint(h, m), u.applyMatrix4(A2.matrixWorldInverse), y.set(u.normal.x, u.normal.y, u.normal.z, u.constant);
      const P = A2.projectionMatrix;
      T.x = (Math.sign(y.x) + P.elements[8]) / P.elements[0], T.y = (Math.sign(y.y) + P.elements[9]) / P.elements[5], T.z = -1, T.w = (1 + P.elements[10]) / P.elements[14], y.multiplyScalar(2 / y.dot(T)), P.elements[2] = y.x, P.elements[6] = y.y, P.elements[10] = y.z + 1 - a, P.elements[14] = y.w, n.visible = false;
      const I = d.getRenderTarget(), K = d.xr.enabled, N = d.shadowMap.autoUpdate;
      d.xr.enabled = false, d.shadowMap.autoUpdate = false, d.setRenderTarget(x), d.state.buffers.depth.setMask(true), d.autoClear === false && d.clear(), d.render(w, A2), d.xr.enabled = K, d.shadowMap.autoUpdate = N, d.setRenderTarget(I);
      const Z = f.viewport;
      Z !== void 0 && d.state.viewport(Z), n.visible = true;
    }, this.getRenderTarget = function() {
      return x;
    }, this.dispose = function() {
      x.dispose(), n.material.dispose();
    };
  }
};
os.ReflectorShader = {
  name: "ReflectorShader",
  uniforms: {
    color: {
      value: null
    },
    tDiffuse: {
      value: null
    },
    textureMatrix: {
      value: null
    }
  },
  vertexShader: (
    /* glsl */
    `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
  )
};
var ph = ["args", "material-uniforms-color-value"];
var mh = createBaseVNode("TresPlaneGeometry", { args: [5, 5] }, null, -1);
var km = defineComponent({
  __name: "Reflector",
  props: {
    color: { default: "#333" },
    textureWidth: { default: 512 },
    textureHeight: { default: 512 },
    clipBias: { default: 0 },
    multisample: { default: 4 },
    shader: { default: os.ReflectorShader }
  },
  setup(o, { expose: e }) {
    const t = o, { extend: n } = dr(), s = shallowRef();
    n({ Reflector: os });
    const { color: i, textureWidth: r, textureHeight: a, clipBias: l, multisample: c, shader: u } = toRefs(t);
    return e({
      reflectorRef: s
    }), (h, m) => (openBlock(), createElementBlock("TresReflector", {
      ref_key: "reflectorRef",
      ref: s,
      args: [void 0, { textureWidth: unref(r), textureHeight: unref(a), clipBias: unref(l), multisample: unref(c), shader: unref(u) }],
      "material-uniforms-color-value": unref(i)
    }, [
      renderSlot(h.$slots, "default", {}, () => [
        mh
      ])
    ], 8, ph));
  }
});
function Ca(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function dt(o) {
  return typeof o == "function" ? o() : unref(o);
}
var gh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var yh = Object.prototype.toString;
var vh = (o) => yh.call(o) === "[object Object]";
var En = () => {
};
function pr(o, e) {
  function t(...n) {
    return new Promise((s, i) => {
      Promise.resolve(o(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(s).catch(i);
    });
  }
  return t;
}
var _h = (o) => o();
function xh(o, e = {}) {
  let t, n, s = En;
  const i = (a) => {
    clearTimeout(a), s(), s = En;
  };
  return (a) => {
    const l = dt(o), c = dt(e.maxWait);
    return t && i(t), l <= 0 || c !== void 0 && c <= 0 ? (n && (i(n), n = null), Promise.resolve(a())) : new Promise((u, h) => {
      s = e.rejectOnCancel ? h : u, c && !n && (n = setTimeout(() => {
        t && i(t), n = null, u(a());
      }, c)), t = setTimeout(() => {
        n && i(n), n = null, u(a());
      }, l);
    });
  };
}
function Ia(o, e = true, t = true, n = false) {
  let s = 0, i, r = true, a = En, l;
  const c = () => {
    i && (clearTimeout(i), i = void 0, a(), a = En);
  };
  return (h) => {
    const m = dt(o), p = Date.now() - s, v = () => l = h();
    return c(), m <= 0 ? (s = Date.now(), v()) : (p > m && (t || !r) ? (s = Date.now(), v()) : e && (l = new Promise((_, y) => {
      a = n ? y : _, i = setTimeout(() => {
        s = Date.now(), r = true, _(v()), c();
      }, Math.max(0, m - p));
    })), !t && !i && (i = setTimeout(() => r = true, m)), r = false, l);
  };
}
function wh(o) {
  return o || getCurrentInstance();
}
function Th(o, e = 200, t = {}) {
  return pr(
    xh(e, t),
    o
  );
}
function bh(o, e = 200, t = false, n = true, s = false) {
  return pr(
    Ia(e, t, n, s),
    o
  );
}
function Eh(o, e, t = {}) {
  const {
    eventFilter: n = _h,
    ...s
  } = t;
  return watch(
    o,
    pr(
      n,
      e
    ),
    s
  );
}
function Da(o, e = true, t) {
  wh() ? onMounted(o, t) : e ? o() : nextTick(o);
}
function Mh(o, e, t = {}) {
  const {
    throttle: n = 0,
    trailing: s = true,
    leading: i = true,
    ...r
  } = t;
  return Eh(
    o,
    e,
    {
      ...r,
      eventFilter: Ia(n, s, i)
    }
  );
}
function Sh(o) {
  var e;
  const t = dt(o);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
var Mn = gh ? window : void 0;
function Ve(...o) {
  let e, t, n, s;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([t, n, s] = o, e = Mn) : [e, t, n, s] = o, !e)
    return En;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const i = [], r = () => {
    i.forEach((u) => u()), i.length = 0;
  }, a = (u, h, m, p) => (u.addEventListener(h, m, p), () => u.removeEventListener(h, m, p)), l = watch(
    () => [Sh(e), dt(s)],
    ([u, h]) => {
      if (r(), !u)
        return;
      const m = vh(h) ? { ...h } : h;
      i.push(
        ...t.flatMap((p) => n.map((v) => a(u, p, v, m)))
      );
    },
    { immediate: true, flush: "post" }
  ), c = () => {
    l(), r();
  };
  return Ca(c), c;
}
function Ah(o) {
  return typeof o == "function" ? o : typeof o == "string" ? (e) => e.key === o : Array.isArray(o) ? (e) => o.includes(e.key) : () => true;
}
function mn(...o) {
  let e, t, n = {};
  o.length === 3 ? (e = o[0], t = o[1], n = o[2]) : o.length === 2 ? typeof o[1] == "object" ? (e = true, t = o[0], n = o[1]) : (e = o[0], t = o[1]) : (e = true, t = o[0]);
  const {
    target: s = Mn,
    eventName: i = "keydown",
    passive: r = false,
    dedupe: a = false
  } = n, l = Ah(e);
  return Ve(s, i, (u) => {
    u.repeat && dt(a) || l(u) && t(u);
  }, r);
}
function Ph() {
  const o = ref(false);
  return getCurrentInstance() && onMounted(() => {
    o.value = true;
  }), o;
}
function Rh(o) {
  const e = Ph();
  return computed(() => (e.value, !!o()));
}
function Ch(o, e = {}) {
  const { window: t = Mn } = e, n = Rh(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let s;
  const i = ref(false), r = (c) => {
    i.value = c.matches;
  }, a = () => {
    s && ("removeEventListener" in s ? s.removeEventListener("change", r) : s.removeListener(r));
  }, l = watchEffect(() => {
    n.value && (a(), s = t.matchMedia(dt(o)), "addEventListener" in s ? s.addEventListener("change", r) : s.addListener(r), i.value = s.matches);
  });
  return Ca(() => {
    l(), a(), s = void 0;
  }), i;
}
var Kr = 1;
function Ih(o, e = {}) {
  const {
    throttle: t = 0,
    idle: n = 200,
    onStop: s = En,
    onScroll: i = En,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: a = {
      capture: false,
      passive: true
    },
    behavior: l = "auto",
    window: c = Mn
  } = e, u = ref(0), h = ref(0), m = computed({
    get() {
      return u.value;
    },
    set(x) {
      v(x, void 0);
    }
  }), p = computed({
    get() {
      return h.value;
    },
    set(x) {
      v(void 0, x);
    }
  });
  function v(x, M) {
    var d, w, f;
    if (!c)
      return;
    const P = dt(o);
    P && ((f = P instanceof Document ? c.document.body : P) == null || f.scrollTo({
      top: (d = dt(M)) != null ? d : p.value,
      left: (w = dt(x)) != null ? w : m.value,
      behavior: dt(l)
    }));
  }
  const _ = ref(false), y = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  }), E = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  }), R = (x) => {
    _.value && (_.value = false, E.left = false, E.right = false, E.top = false, E.bottom = false, s(x));
  }, T = Th(R, t + n), g = (x) => {
    var M;
    if (!c)
      return;
    const d = x.document ? x.document.documentElement : (M = x.documentElement) != null ? M : x, { display: w, flexDirection: f } = getComputedStyle(d), P = d.scrollLeft;
    E.left = P < u.value, E.right = P > u.value;
    const I = Math.abs(P) <= 0 + (r.left || 0), K = Math.abs(P) + d.clientWidth >= d.scrollWidth - (r.right || 0) - Kr;
    w === "flex" && f === "row-reverse" ? (y.left = K, y.right = I) : (y.left = I, y.right = K), u.value = P;
    let N = d.scrollTop;
    x === c.document && !N && (N = c.document.body.scrollTop), E.top = N < h.value, E.bottom = N > h.value;
    const Z = Math.abs(N) <= 0 + (r.top || 0), W = Math.abs(N) + d.clientHeight >= d.scrollHeight - (r.bottom || 0) - Kr;
    w === "flex" && f === "column-reverse" ? (y.top = W, y.bottom = Z) : (y.top = Z, y.bottom = W), h.value = N;
  }, A2 = (x) => {
    var M;
    if (!c)
      return;
    const d = (M = x.target.documentElement) != null ? M : x.target;
    g(d), _.value = true, T(x), i(x);
  };
  return Ve(
    o,
    "scroll",
    t ? bh(A2, t, true, false) : A2,
    a
  ), Da(() => {
    const x = dt(o);
    x && g(x);
  }), Ve(
    o,
    "scrollend",
    R,
    a
  ), {
    x: m,
    y: p,
    isScrolling: _,
    arrivedState: y,
    directions: E,
    measure() {
      const x = dt(o);
      c && x && g(x);
    }
  };
}
var Dh = {
  page: (o) => [o.pageX, o.pageY],
  client: (o) => [o.clientX, o.clientY],
  screen: (o) => [o.screenX, o.screenY],
  movement: (o) => o instanceof Touch ? null : [o.movementX, o.movementY]
};
function Lh(o = {}) {
  const {
    type: e = "page",
    touch: t = true,
    resetOnTouchEnds: n = false,
    initialValue: s = { x: 0, y: 0 },
    window: i = Mn,
    target: r = i,
    scroll: a = true,
    eventFilter: l
  } = o;
  let c = null;
  const u = ref(s.x), h = ref(s.y), m = ref(null), p = typeof e == "function" ? e : Dh[e], v = (A2) => {
    const x = p(A2);
    c = A2, x && ([u.value, h.value] = x, m.value = "mouse");
  }, _ = (A2) => {
    if (A2.touches.length > 0) {
      const x = p(A2.touches[0]);
      x && ([u.value, h.value] = x, m.value = "touch");
    }
  }, y = () => {
    if (!c || !i)
      return;
    const A2 = p(c);
    c instanceof MouseEvent && A2 && (u.value = A2[0] + i.scrollX, h.value = A2[1] + i.scrollY);
  }, E = () => {
    u.value = s.x, h.value = s.y;
  }, R = l ? (A2) => l(() => v(A2), {}) : (A2) => v(A2), T = l ? (A2) => l(() => _(A2), {}) : (A2) => _(A2), g = l ? () => l(() => y(), {}) : () => y();
  if (r) {
    const A2 = { passive: true };
    Ve(r, ["mousemove", "dragover"], R, A2), t && e !== "movement" && (Ve(r, ["touchstart", "touchmove"], T, A2), n && Ve(r, "touchend", E, A2)), a && e === "page" && Ve(i, "scroll", g, { passive: true });
  }
  return {
    x: u,
    y: h,
    sourceType: m
  };
}
function Oh(o = {}) {
  const { window: e = Mn, behavior: t = "auto" } = o;
  if (!e)
    return {
      x: ref(0),
      y: ref(0)
    };
  const n = ref(e.scrollX), s = ref(e.scrollY), i = computed({
    get() {
      return n.value;
    },
    set(a) {
      scrollTo({ left: a, behavior: t });
    }
  }), r = computed({
    get() {
      return s.value;
    },
    set(a) {
      scrollTo({ top: a, behavior: t });
    }
  });
  return Ve(
    e,
    "scroll",
    () => {
      n.value = e.scrollX, s.value = e.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  ), { x: i, y: r };
}
function La(o = {}) {
  const {
    window: e = Mn,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: n = Number.POSITIVE_INFINITY,
    listenOrientation: s = true,
    includeScrollbar: i = true
  } = o, r = ref(t), a = ref(n), l = () => {
    e && (i ? (r.value = e.innerWidth, a.value = e.innerHeight) : (r.value = e.document.documentElement.clientWidth, a.value = e.document.documentElement.clientHeight));
  };
  if (l(), Da(l), Ve("resize", l, { passive: true }), s) {
    const c = Ch("(orientation: portrait)");
    watch(c, () => l());
  }
  return { width: r, height: a };
}
var Um = defineComponent({
  __name: "MouseParallax",
  props: {
    disabled: { type: Boolean, default: false },
    factor: { default: 2.5 },
    ease: { default: 0.1 }
  },
  setup(o) {
    const e = o, { camera: t } = dr(), { disabled: n, factor: s, ease: i } = toRefs(e), { x: r, y: a } = Lh(), { width: l, height: c } = La(), u = ref(), h = computed(() => (r.value / l.value - 0.5) * s.value), m = computed(() => -(a.value / c.value - 0.5) * s.value), { onLoop: p } = re();
    return p(({ delta: v }) => {
      n.value || !u.value || (u.value.position.x += (h.value - u.value.position.x) * i.value * v, u.value.position.y += (m.value - u.value.position.y) * i.value * v);
    }), watch(
      () => u.value,
      (v) => v == null ? void 0 : v.add(t.value)
    ), (v, _) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "cameraGroupRef",
      ref: u
    }, null, 512));
  }
});
var Bm = defineComponent({
  name: "GlobalAudio",
  props: [
    "src",
    "loop",
    "volume",
    "playbackRate",
    "playTrigger",
    "stopTrigger"
  ],
  async setup(o, { expose: e, emit: t }) {
    var h;
    const { camera: n, renderer: s } = dr(), i = new AudioListener();
    (h = n.value) == null || h.add(i);
    const r = new Audio(i), a = new AudioLoader();
    e({ sound: r }), onUnmounted(() => {
      r && r.disconnect();
    }), watch(() => [o.playbackRate], () => r.setPlaybackRate(o.playbackRate ?? 1), { immediate: true }), watch(() => [o.volume], () => r.setVolume(o.volume ?? 0.5), { immediate: true }), watch(() => [o.loop], () => r.setLoop(o.loop ?? false), { immediate: true }), watch(() => [o.src], async () => {
      const m = await a.loadAsync(o.src);
      r.setBuffer(m);
    }, { immediate: true });
    const l = document.getElementById(o.playTrigger ?? ""), c = l || s.value.domElement;
    Ve(c, "click", () => {
      r.isPlaying ? r.pause() : r.play(), t("isPlaying", r.isPlaying);
    });
    const u = document.getElementById(o.stopTrigger ?? "");
    return u && Ve(u, "click", () => {
      r.stop(), t("isPlaying", r.isPlaying);
    }), null;
  }
});
var as = class _as extends Mesh {
  constructor() {
    super(_as.Geometry, new MeshBasicMaterial({ opacity: 0, transparent: true })), this.isLensflare = true, this.type = "Lensflare", this.frustumCulled = false, this.renderOrder = 1 / 0;
    const e = new Vector3(), t = new Vector3(), n = new FramebufferTexture(16, 16), s = new FramebufferTexture(16, 16);
    let i = UnsignedByteType;
    const r = _as.Geometry, a = new RawShaderMaterial({
      uniforms: {
        scale: { value: null },
        screenPosition: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`
      ),
      fragmentShader: (
        /* glsl */
        `

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`
      ),
      depthTest: true,
      depthWrite: false,
      transparent: false
    }), l = new RawShaderMaterial({
      uniforms: {
        map: { value: n },
        scale: { value: null },
        screenPosition: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`
      ),
      fragmentShader: (
        /* glsl */
        `

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`
      ),
      depthTest: false,
      depthWrite: false,
      transparent: false
    }), c = new Mesh(r, a), u = [], h = Oa.Shader, m = new RawShaderMaterial({
      name: h.name,
      uniforms: {
        map: { value: null },
        occlusionMap: { value: s },
        color: { value: new Color(16777215) },
        scale: { value: new Vector2() },
        screenPosition: { value: new Vector3() }
      },
      vertexShader: h.vertexShader,
      fragmentShader: h.fragmentShader,
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false
    }), p = new Mesh(r, m);
    this.addElement = function(R) {
      u.push(R);
    };
    const v = new Vector2(), _ = new Vector2(), y = new Box2(), E = new Vector4();
    this.onBeforeRender = function(R, T, g) {
      R.getCurrentViewport(E);
      const A2 = R.getRenderTarget(), x = A2 !== null ? A2.texture.type : UnsignedByteType;
      i !== x && (n.dispose(), s.dispose(), n.type = s.type = x, i = x);
      const M = E.w / E.z, d = E.z / 2, w = E.w / 2;
      let f = 16 / E.w;
      if (v.set(f * M, f), y.min.set(E.x, E.y), y.max.set(E.x + (E.z - 16), E.y + (E.w - 16)), t.setFromMatrixPosition(this.matrixWorld), t.applyMatrix4(g.matrixWorldInverse), !(t.z > 0) && (e.copy(t).applyMatrix4(g.projectionMatrix), _.x = E.x + e.x * d + d - 8, _.y = E.y + e.y * w + w - 8, y.containsPoint(_))) {
        R.copyFramebufferToTexture(_, n);
        let P = a.uniforms;
        P.scale.value = v, P.screenPosition.value = e, R.renderBufferDirect(g, null, r, a, c, null), R.copyFramebufferToTexture(_, s), P = l.uniforms, P.scale.value = v, P.screenPosition.value = e, R.renderBufferDirect(g, null, r, l, c, null);
        const I = -e.x * 2, K = -e.y * 2;
        for (let N = 0, Z = u.length; N < Z; N++) {
          const W = u[N], X = m.uniforms;
          X.color.value.copy(W.color), X.map.value = W.texture, X.screenPosition.value.x = e.x + I * W.distance, X.screenPosition.value.y = e.y + K * W.distance, f = W.size / E.w;
          const V = E.w / E.z;
          X.scale.value.set(f * V, f), m.uniformsNeedUpdate = true, R.renderBufferDirect(g, null, r, m, p, null);
        }
      }
    }, this.dispose = function() {
      a.dispose(), l.dispose(), m.dispose(), n.dispose(), s.dispose();
      for (let R = 0, T = u.length; R < T; R++)
        u[R].texture.dispose();
    };
  }
};
var Oa = class {
  constructor(e, t = 1, n = 0, s = new Color(16777215)) {
    this.texture = e, this.size = t, this.distance = n, this.color = s;
  }
};
Oa.Shader = {
  name: "LensflareElementShader",
  uniforms: {
    map: { value: null },
    occlusionMap: { value: null },
    color: { value: null },
    scale: { value: null },
    screenPosition: { value: null }
  },
  vertexShader: (
    /* glsl */
    `

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`
  )
};
as.Geometry = function() {
  const o = new BufferGeometry(), e = new Float32Array([
    -1,
    -1,
    0,
    0,
    0,
    1,
    -1,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    -1,
    1,
    0,
    0,
    1
  ]), t = new InterleavedBuffer(e, 5);
  return o.setIndex([0, 1, 2, 0, 2, 3]), o.setAttribute("position", new InterleavedBufferAttribute(t, 3, 0, false)), o.setAttribute("uv", new InterleavedBufferAttribute(t, 2, 3, false)), o;
}();
function Fh(o) {
  return o;
}
function kh(o) {
  return o * o * o;
}
function Uh(o) {
  return o < 0.5 ? 4 * o * o * o : 1 - (-2 * o + 2) ** 3 / 2;
}
function Bh(o) {
  return o * o * o * o;
}
function Nh(o) {
  return o < 1 / 2.75 ? 7.5625 * o * o : o < 2 / 2.75 ? 7.5625 * (o -= 1.5 / 2.75) * o + 0.75 : o < 2.5 / 2.75 ? 7.5625 * (o -= 2.25 / 2.75) * o + 0.9375 : 7.5625 * (o -= 2.625 / 2.75) * o + 0.984375;
}
var qr = MathUtils.clamp;
var Qr = class {
  /**
   * Create a new seeded pseudorandom number generator.
   * @param [seed=0] - the seed for the generator
   * @param [getSeededRandomGenerator=getMulberry32] - a function that returns a pseudorandom number generator
   * @constructor
   */
  constructor(e = 0, t) {
    oe(this, "_getNext");
    oe(this, "_getGenerator");
    this._getGenerator = t ?? this.getMulberry32, this._getNext = this._getGenerator(e);
  }
  /**
   * Reseed the pseudorandom number generator
   */
  seed(e) {
    this._getNext = this._getGenerator(e);
  }
  /**
   * Return the next pseudorandom number in the interval [0, 1]
   */
  rand() {
    return this._getNext();
  }
  /**
   * Random float from <low, high> interval
   * @param low - Low value of the interval
   * @param high - High value of the interval
   */
  float(e, t) {
    return e + this._getNext() * (t - e);
  }
  /**
   * Random float from <-range/2, range/2> interval
   * @param range - Interval range
   */
  floatSpread(e) {
    return this.float(-0.5 * e, 0.5 * e);
  }
  /**
   * Random integer from <low, high> interval
   * @param low Low value of the interval
   * @param high High value of the interval
   */
  int(e, t) {
    return e + Math.floor(this._getNext() * (t - e + 1));
  }
  /**
   * Choose an element from an array.
   * @param array The array to choose from
   * @returns An element from the array or null if the array is empty
   */
  choice(e) {
    return e.length ? e[Math.floor(this._getNext() * e.length)] : null;
  }
  /**
   * Choose an element from an array or return defaultValue if array is empty.
   * @param array The array to choose from
   * @param defaultValue The value to return if the array is empty
   * @returns An element from the array or defaultValue if the array is empty
   */
  defaultChoice(e, t) {
    return e.length ? e[Math.floor(this._getNext() * e.length)] : t;
  }
  /**
   * Return n elements from an array.
   * @param array The array to sample
   * @param sampleSizeMin The minimum sample size
   * @param sampleSizeMax The maximum sample size
   */
  sample(e, t, n) {
    const s = e.length;
    t = qr(t, 0, s - 1), n = qr(n ?? s - 1, 0, s - 1);
    const i = this.int(t, n), r = this.shuffle(e.map((l, c) => c)), a = Math.min(e.length, i);
    return r.slice(0, a).sort().map((l) => e[l]);
  }
  /**
   * Shuffle an array. Not in-place.
   * @param array The array to shuffle
   */
  shuffle(e) {
    return e.map((t) => ({ value: t, sort: this._getNext() })).sort((t, n) => t.sort - n.sort).map(({ value: t }) => t);
  }
  /**
   * The default pseudorandom generator.
   */
  getMulberry32(e = 0) {
    return 0 < e && e < 1 && (e = Math.floor(e * 2 ** 16)), () => {
      e += 1831565813;
      let t = e;
      return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
};
var $t = "https://raw.githubusercontent.com/Tresjs/assets/93976c7d63ac83d4a254a41a10b2362bc17e90c9/textures/lensflare/";
var mr = `${$t}circle.png`;
var ei = `${$t}circleBlur.png`;
var zh = `${$t}circleRainbow.png`;
var Hh = `${$t}line.png`;
var Fa = `${$t}poly6.png`;
var ka = `${$t}polyStroke6.png`;
var Gh = `${$t}rays.png`;
var ti = `${$t}ring.png`;
var jh = `${$t}starThin6.png`;
var Vh = {
  texture: [Hh, ti],
  color: ["white"],
  distance: [0, 0],
  size: [750, 1024],
  length: [0, 2]
};
var Yh = {
  texture: [ei],
  color: ["white"],
  distance: [0, 0],
  size: [180, 512],
  length: [1, 1]
};
var Xh = {
  texture: [Gh],
  color: ["white"],
  distance: [0, 0],
  size: [180, 512],
  length: [1, 1]
};
var Wh = {
  texture: [mr, zh, ti, jh],
  color: ["white"],
  distance: [0, 0],
  size: [180, 512],
  length: [2, 3]
};
var [Ua, Ba] = [3679071, 132442];
var $h = {
  texture: [ei, mr, ti, Fa, ka],
  color: ["dimgray", "gray", "darkgray", Ua, Ba],
  distance: [0.5, 2.5],
  size: [20, 180],
  length: [5, 21]
};
var Zh = {
  texture: [ei, mr, ti, Fa, ka],
  color: ["dimgray", "gray", "darkgray", Ua, Ba],
  distance: [-0.6, -0.1],
  size: [180, 360],
  length: [0, 5]
};
var er = [Vh, Yh, Xh, Wh, $h, Zh];
var $s = {
  color: "white",
  distance: 0,
  size: 512,
  texture: ei
};
var Jr = (o, e, t = void 0, n = void 0, s = $s) => {
  if (o !== void 0 && o.length > 0 && (typeof t == "number" || typeof n < "u")) {
    const a = to(t ?? 0, n ?? er), l = a.length, c = o.length;
    return l >= c ? a.map(
      (u, h) => Object.assign(u, e, h < c ? o[h] : {})
    ) : o.map(
      (u, h) => Object.assign({}, s, h < l ? a[h] : {}, e, u)
    );
  }
  if (o !== void 0 && o.length > 0) {
    const a = Object.assign({}, s, e);
    return o.map((l) => Object.assign({}, a, l));
  }
  const i = n === void 0 || n.length === 0 ? er : n;
  return to(t ?? 0, i).map((a) => Object.assign({}, a, e));
};
var Kh = [
  Fh,
  kh,
  Uh,
  Bh,
  Nh
];
var eo = MathUtils.lerp;
var to = (o = 0, e = er) => {
  const n = new Qr(o).choice(Kh);
  return e.map((s, i) => {
    const r = new Qr(
      o * (i * 7907 + 1) + (typeof s.seed == "number" ? s.seed : 0)
    ), a = r.int(s.length[0], s.length[1]);
    return new Array(a).fill(0).map(() => {
      const l = n(r.rand());
      return {
        texture: r.defaultChoice(
          s.texture,
          $s.texture
        ),
        size: eo(s.size[0], s.size[1], n(1 - l)),
        distance: eo(s.distance[0], s.distance[1], l),
        color: r.defaultChoice(
          s.color,
          $s.color
        )
      };
    });
  }).flat();
};
function qh(o) {
  return Qh(o, (e, t) => t in $s && e !== void 0);
}
function Qh(o, e) {
  const t = {};
  return Object.keys(o).forEach((n) => {
    e(o[n], n) && (t[n] = o[n]);
  }), t;
}
var Nm = defineComponent({
  __name: "component",
  props: {
    scale: { default: 1 },
    elements: { default: void 0 },
    seed: { default: void 0 },
    seedProps: { default: void 0 },
    color: { default: void 0 },
    distance: { default: void 0 },
    size: { default: void 0 },
    texture: { default: void 0 }
  },
  setup(o, { expose: e }) {
    const t = o, n = shallowRef(), s = shallowRef([]), i = shallowRef(qh(t));
    e({
      value: n
    });
    const r = new TextureLoader(), a = new as(), l = [], c = () => {
      var p, v, _;
      for (; l.length; )
        l.pop();
      (p = n.value) == null || p.children.forEach((y) => {
        "dispose" in y && y.dispose();
      }), (v = n.value) == null || v.remove(...n.value.children), (_ = n.value) == null || _.dispose();
    }, u = (p) => {
      if (typeof p.texture == "string") {
        const v = p.texture;
        p.texture = r.load(v), p.texture.name = v;
      }
      return p.color = Ft(p.color), p;
    }, h = () => {
      for (; s.value.length > l.length; ) {
        const v = { ...u(s.value[l.length]) };
        l.push(v), a.addElement(v);
      }
      s.value.forEach((p, v) => {
        const _ = l[v], { texture: y, size: E, distance: R, color: T } = p;
        if (typeof y == "string") {
          if (_.texture.name !== y) {
            _.texture.dispose();
            const g = y;
            _.texture = r.load(g), _.texture.name = g;
          }
        } else
          _.texture !== y && (_.texture.dispose(), _.texture = y);
        _.size = E, _.distance = R, _.color = Ft(T);
      }), m();
    }, m = () => {
      for (let p = s.value.length - 1; p < l.length; p++)
        l[p].size = 0;
      s.value.forEach((p, v) => {
        l[v].size = p.size * t.scale;
      });
    };
    return onUnmounted(() => {
      c();
    }), onMounted(() => {
      var p;
      (p = n.value) == null || p.add(a), s.value = Jr(t.elements, i.value, t.seed, t.seedProps);
    }), watch(() => [t.color, t.distance, t.size, t.texture], () => {
      i.value = {
        color: t.color,
        distance: t.distance,
        size: t.size,
        texture: t.texture
      };
    }), watch(() => [i.value, t.elements, t.seed, t.seedProps], () => {
      s.value = Jr(t.elements, i.value, t.seed, t.seedProps);
    }), watch(() => t.scale, () => {
      m();
    }), watch(() => s.value, () => {
      h();
    }), (p, v) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "lensflareRef",
      ref: n
    }, null, 512));
  }
});
function Jh(o) {
  const e = ref(null), { height: t, width: n, settings: s, depth: i } = isReactive(o) ? toRefs(o) : toRefs(reactive(o)), { onLoop: r } = re(), { camera: a, renderer: l, scene: c, sizes: u } = dr();
  return watchEffect(() => {
    var h;
    (h = e.value) == null || h.dispose(), e.value = new WebGLRenderTarget((n == null ? void 0 : n.value) || u.width.value, (t == null ? void 0 : t.value) || u.height.value, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      type: HalfFloatType,
      ...s == null ? void 0 : s.value
    }), i != null && i.value && (e.value.depthTexture = new DepthTexture(
      (n == null ? void 0 : n.value) || u.width.value,
      (t == null ? void 0 : t.value) || u.height.value,
      FloatType
    ));
  }), r(() => {
    l.value.setRenderTarget(e.value), l.value.clear(), l.value.render(c.value, a.value), l.value.setRenderTarget(null);
  }), onBeforeUnmount(() => {
    var h;
    (h = e.value) == null || h.dispose();
  }), e;
}
var zm = defineComponent({
  __name: "component",
  props: {
    width: {},
    height: {},
    depth: { type: Boolean, default: false },
    settings: { default: void 0 }
  },
  setup(o, { expose: e }) {
    const n = Jh(o);
    return e({
      value: n
    }), () => {
    };
  }
});
var ef = (o, e = 16, t, n, s) => {
  const i = new Float32Array(e * 16), r = ref(new InterleavedBuffer(i, 16));
  return (() => {
    if (!o)
      return;
    const l = new Yc(o);
    n && l.setWeightAttribute(n), l.build();
    const c = new Vector3(), u = new Vector3(), h = new Color(), m = new Object3D();
    o.updateMatrixWorld(true);
    for (let p = 0; p < e; p++)
      l.sample(c, u, h), typeof s == "function" ? s(
        {
          dummy: m,
          sampledMesh: o,
          position: c,
          normal: u,
          color: h
        },
        p
      ) : m.position.copy(c), m.updateMatrix(), t && t.setMatrixAt(p, m.matrix), m.matrix.toArray(r.value.array, p * 16);
    t && (t.instanceMatrix.needsUpdate = true), r.value.needsUpdate = true;
  })(), { buffer: r };
};
var Hm = defineComponent({
  __name: "component",
  props: {
    transform: { type: Function },
    weight: {},
    count: {},
    mesh: {},
    instanceMesh: {}
  },
  setup(o, { expose: e }) {
    const t = o, n = ref(), s = ref(), i = ref();
    return watchEffect(() => {
      var r, a;
      s.value = t.instanceMesh ?? ((r = n.value) == null ? void 0 : r.children.find((l) => l.hasOwnProperty("instanceMatrix"))), i.value = t.mesh ?? ((a = n.value) == null ? void 0 : a.children.find((l) => l.type === "Mesh")), ef(i.value, t.count, s.value, t.weight, t.transform);
    }), e({
      samplerRef: n
    }), (r, a) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "samplerRef",
      ref: n
    }, [
      renderSlot(r.$slots, "default")
    ], 512));
  }
});
var Rs = {
  sunset: "venice/venice_sunset_1k.hdr",
  studio: "studio/poly_haven_studio_1k.hdr",
  city: "city/canary_wharf_1k.hdr",
  umbrellas: "outdoor/outdoor_umbrellas_1k.hdr",
  night: "outdoor/satara_night_1k.hdr",
  forest: "outood/mossy_forest_1k.hdr",
  snow: "outdoor/snowy_forest_path_01_1k.hdr",
  dawn: "kiara/kiara_1_dawn_1k.hdr",
  hangar: "indoor/small_hangar_01_1k.hdr",
  urban: "indoor/abandoned_games_room_02_1k.hdr",
  modern: "city/modern_buildings_2_1k.hdr",
  shangai: "city/shanghai_bund_1k.hdr"
};
var tf = "https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";
async function nf(o) {
  const { scene: e } = dr(), {
    preset: t,
    blur: n,
    files: s = [],
    path: i = "",
    background: r
  } = toRefs(o), a = ref(), l = computed(() => Array.isArray(s.value)), c = computed(() => l.value ? CubeTextureLoader : Zr), u = ref(null);
  return watch(() => [s, i], async ([h, m]) => {
    if (h.value.length > 0 && !t.value) {
      try {
        u.value = await $r(
          unref(c),
          l.value ? [unref(h)] : unref(h),
          (p) => {
            m.value && p.setPath(unref(m));
          }
        );
      } catch (p) {
        throw new Error(`Failed to load environment map: ${p}`);
      }
      u.value && (a.value = l.value ? u.value[0] : u.value, a.value.mapping = l.value ? CubeReflectionMapping : EquirectangularReflectionMapping);
    }
  }, {
    immediate: true
  }), watch(() => a.value, (h) => {
    e.value && (e.value.environment = h);
  }, {
    immediate: true
  }), watch(() => [r.value, a.value], ([h, m]) => {
    e.value && (e.value.background = h ? m : void 0);
  }, {
    immediate: true
  }), watch(() => n == null ? void 0 : n.value, (h) => {
    e.value && (e.value.backgroundBlurriness = h);
  }, {
    immediate: true
  }), watch(t, async (h) => {
    if (h && h in Rs) {
      const m = tf, p = Rs[h];
      try {
        u.value = await $r(
          Zr,
          p,
          (v) => {
            m && v.setPath(m);
          }
        );
      } catch (v) {
        throw new Error(`Failed to load environment map: ${v}`);
      }
      u.value && (a.value = u.value, a.value.mapping = EquirectangularReflectionMapping);
    } else if (h && !(h in Rs))
      throw new Error(`Preset must be one of: ${Object.keys(Rs).join(", ")}`);
  }, {
    immediate: true
  }), { texture: a };
}
var Cs = null;
function sf(o, e) {
  return (t) => {
    e && e(t), o.draco && (Cs || (Cs = new hh()), Cs.setDecoderPath(o.decoderPath || "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"), t.setDRACOLoader(Cs));
  };
}
async function rf(o, e = {
  draco: false
}, t) {
  return await $r(
    ou,
    o,
    sf(e, t)
  );
}
var of = ["object"];
var Gm = defineComponent({
  __name: "component",
  props: {
    path: {},
    draco: { type: Boolean, default: false },
    decoderPath: { default: "https://www.gstatic.com/draco/versioned/decoders/1.4.1/" },
    castShadow: { type: Boolean, default: false },
    receiveShadow: { type: Boolean, default: false }
  },
  async setup(o, { expose: e }) {
    let t, n;
    const s = o, i = ref();
    e({
      value: i
    });
    const { scene: r } = ([t, n] = withAsyncContext(() => rf(s.path, {
      draco: s.draco,
      decoderPath: s.decoderPath
    })), t = await t, n(), t);
    return (s.castShadow || s.receiveShadow) && r.traverse((a) => {
      a.isMesh && (a.castShadow = s.castShadow, a.receiveShadow = s.receiveShadow);
    }), (a, l) => (openBlock(), createElementBlock("primitive", mergeProps({
      ref_key: "modelRef",
      ref: i,
      object: unref(r)
    }, a.$attrs), null, 16, of));
  }
});
async function af(o) {
  return await $r($u, o);
}
var lf = ["object"];
var jm = defineComponent({
  __name: "component",
  props: {
    path: {},
    castShadow: { type: Boolean, default: false },
    receiveShadow: { type: Boolean, default: false }
  },
  async setup(o, { expose: e }) {
    let t, n;
    const s = o, i = ref();
    e({
      value: i
    });
    const r = ([t, n] = withAsyncContext(() => af(s.path)), t = await t, n(), t);
    return (s.castShadow || s.receiveShadow) && r.traverse((a) => {
      a.isMesh && (a.castShadow = s.castShadow, a.receiveShadow = s.receiveShadow);
    }), (a, l) => (openBlock(), createElementBlock("primitive", mergeProps({
      ref_key: "modelRef",
      ref: i,
      object: unref(r)
    }, a.$attrs), null, 16, lf));
  }
});
var cf = ["geometry", "render-order"];
var Vm = defineComponent({
  __name: "component",
  props: {
    src: {},
    skipStrokes: { type: Boolean, default: false },
    skipFills: { type: Boolean, default: false },
    fillMaterial: {},
    strokeMaterial: {},
    fillMeshProps: {},
    strokeMeshProps: {},
    depth: { default: "renderOrder" }
  },
  setup(o, { expose: e }) {
    const t = o, {
      src: n,
      skipStrokes: s,
      skipFills: i,
      fillMaterial: r,
      strokeMaterial: a,
      fillMeshProps: l,
      strokeMeshProps: c,
      depth: u
    } = toRefs(t), h = shallowRef(), m = shallowRef([]), p = shallowRef([]);
    e({ value: h }), watchEffect(async () => v(n.value).then((E) => p.value = E.paths)), watch([i, s, r, a, p], y);
    async function v(E) {
      const R = E.startsWith("<svg") ? encodeURI(`data:image/svg+xml;utf8,${E}`) : E;
      return $r(is, R);
    }
    onUnmounted(_);
    function _() {
      m.value.forEach((E) => E.geometry.dispose());
    }
    function y() {
      var A2, x, M;
      _();
      const E = [], [R, T] = (() => {
        const d = { flat: false, renderOrder: false, offsetZ: true }, w = { flat: 0, renderOrder: 0, offsetZ: 0.025 }, f = u.value;
        return typeof f == "number" ? [true, f] : [d[f], w[f]];
      })();
      let g = 0;
      for (const d of p.value) {
        const w = ((A2 = d.userData) == null ? void 0 : A2.style) ?? {}, f = Object.assign(
          {
            color: w.fill,
            opacity: w.fillOpacity,
            transparent: true,
            side: DoubleSide,
            depthWrite: R
          },
          t.fillMaterial
        );
        if (!i.value && w.fill !== void 0 && w.fill !== "none")
          for (const P of is.createShapes(d)) {
            const I = new ShapeGeometry(P);
            I.scale(1, -1, 1), T && I.translate(0, 0, g++ * T), E.push({
              geometry: I,
              material: f,
              isStroke: false
            });
          }
        if (!s.value && w.stroke !== void 0 && w.stroke !== "none") {
          const P = Object.assign(
            {
              color: (x = d.userData) == null ? void 0 : x.style.stroke,
              opacity: (M = d.userData) == null ? void 0 : M.style.strokeOpacity,
              transparent: true,
              side: DoubleSide,
              depthWrite: R
            },
            t.strokeMaterial
          );
          for (const I of d.subPaths) {
            const K = I.getPoints().map((Z) => new Vector2(Z.x, -Z.y)), N = is.pointsToStroke(K, w || "none");
            T && N.translate(0, 0, g++ * T), E.push({
              geometry: N,
              material: P,
              isStroke: true
            });
          }
        }
      }
      m.value = E;
    }
    return (E, R) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "svgRef",
      ref: h
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, ({ geometry: T, material: g, isStroke: A2 }, x) => (openBlock(), createElementBlock("TresMesh", mergeProps({
        key: `${x}`
      }, A2 ? unref(c) : unref(l), {
        geometry: T,
        "render-order": unref(u) === "renderOrder" ? x : 0
      }), [
        createBaseVNode("TresMeshBasicMaterial", normalizeProps(guardReactiveProps(g)), null, 16)
      ], 16, cf))), 128))
    ], 512));
  }
});
var no = "[TresJS - Cientos ▲ ■ ♥] ";
function gr() {
  function o(n, s) {
    console.error(`${no} ${n}`, s || "");
  }
  function e(n) {
    console.warn(`${no} ${n}`);
  }
  function t(n, s) {
  }
  return {
    logError: o,
    logWarning: e,
    logMessage: t
  };
}
var wi = 0;
function Ym() {
  const o = ref(false), e = ref(0), t = ref([]), { logError: n } = gr();
  return new Promise((s) => {
    DefaultLoadingManager.onStart = () => {
      o.value = false;
    }, DefaultLoadingManager.onLoad = () => {
      o.value = true;
    }, DefaultLoadingManager.onProgress = (i, r, a) => {
      r === a && (wi = a, o.value = true, t.value.push(i)), e.value = Math.round((r - wi) / (a - wi) * 100 || 100, 2);
    }, DefaultLoadingManager.onError = (i) => {
      n("Error loading assets", new Error(i)), o.value = true;
    }, s({
      items: t,
      hasFinishLoading: o,
      progress: e
    });
  });
}
async function Xm(o, e) {
  const { logError: t } = gr();
  if (!o)
    return t("Error no path provided");
  const { unsuspend: n, start: s, crossOrigin: i, muted: r, loop: a, ...l } = {
    unsuspend: "loadedmetadata",
    crossOrigin: "Anonymous",
    muted: true,
    loop: true,
    start: true,
    playsInline: true,
    ...e
  };
  function c() {
    return new Promise((u, h) => {
      const m = Object.assign(document.createElement("video"), {
        src: typeof o == "string" && o || void 0,
        crossOrigin: i,
        loop: a,
        muted: r,
        autoplay: true,
        ...l
      }), p = new VideoTexture(m);
      return m.addEventListener(n, () => u(p)), m.addEventListener("error", () => h()), p;
    });
  }
  try {
    const u = await c();
    return s && u.image && u.image.play(), u;
  } catch {
    t("Error loading resource");
  }
}
var uf = ["target", "auto-rotate", "auto-rotate-speed", "enable-damping", "damping-factor", "enable-pan", "key-pan-speed", "keys", "max-azimuth-angle", "min-azimuth-angle", "max-polar-angle", "min-polar-angle", "min-distance", "max-distance", "min-zoom", "max-zoom", "touches", "enable-zoom", "zoom-speed", "enable-rotate", "rotate-speed", "args"];
var Wm = defineComponent({
  __name: "OrbitControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: {},
    domElement: {},
    target: { default: () => [0, 0, 0] },
    enableDamping: { type: Boolean, default: true },
    dampingFactor: { default: 0.05 },
    autoRotate: { type: Boolean, default: false },
    autoRotateSpeed: { default: 2 },
    enablePan: { type: Boolean, default: true },
    keyPanSpeed: { default: 7 },
    keys: {},
    maxAzimuthAngle: { default: 1 / 0 },
    minAzimuthAngle: { default: -1 / 0 },
    maxPolarAngle: { default: Math.PI },
    minPolarAngle: { default: 0 },
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    minZoom: { default: 0 },
    maxZoom: { default: 1 / 0 },
    touches: { default: () => ({ ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN }) },
    enableZoom: { type: Boolean, default: true },
    zoomSpeed: { default: 1 },
    enableRotate: { type: Boolean, default: true },
    rotateSpeed: { default: 1 }
  },
  emits: ["change", "start", "end"],
  setup(o, { expose: e, emit: t }) {
    const n = o, s = t, {
      makeDefault: i,
      autoRotate: r,
      autoRotateSpeed: a,
      enableDamping: l,
      dampingFactor: c,
      enablePan: u,
      keyPanSpeed: h,
      maxAzimuthAngle: m,
      minAzimuthAngle: p,
      maxPolarAngle: v,
      minPolarAngle: _,
      minDistance: y,
      maxDistance: E,
      minZoom: R,
      maxZoom: T,
      enableZoom: g,
      zoomSpeed: A2,
      enableRotate: x,
      touches: M,
      rotateSpeed: d,
      target: w
    } = toRefs(n), { camera: f, renderer: P, extend: I, controls: K } = dr(), N = ref(null);
    I({ OrbitControls: wa }), watch(N, (X) => {
      Z(), X && i.value ? K.value = X : K.value = null;
    });
    function Z() {
      Ve(N.value, "change", () => s("change", N.value)), Ve(N.value, "start", () => s("start", N.value)), Ve(N.value, "end", () => s("end", N.value));
    }
    const { onLoop: W } = re();
    return W(() => {
      N.value && (l.value || r.value) && N.value.update();
    }), onUnmounted(() => {
      N.value && N.value.dispose();
    }), e({ value: N }), (X, V) => (X.camera || unref(f)) && (X.domElement || unref(P)) ? (openBlock(), createElementBlock("TresOrbitControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: N,
      target: unref(w),
      "auto-rotate": unref(r),
      "auto-rotate-speed": unref(a),
      "enable-damping": unref(l),
      "damping-factor": unref(c),
      "enable-pan": unref(u),
      "key-pan-speed": unref(h),
      keys: X.keys,
      "max-azimuth-angle": unref(m),
      "min-azimuth-angle": unref(p),
      "max-polar-angle": unref(v),
      "min-polar-angle": unref(_),
      "min-distance": unref(y),
      "max-distance": unref(E),
      "min-zoom": unref(R),
      "max-zoom": unref(T),
      touches: unref(M),
      "enable-zoom": unref(g),
      "zoom-speed": unref(A2),
      "enable-rotate": unref(x),
      "rotate-speed": unref(d),
      args: [X.camera || unref(f), X.domElement || unref(P).domElement]
    }, null, 8, uf)) : createCommentVNode("", true);
  }
});
var hf = 5;
var ff = 6;
var df = 0.3;
var $m = defineComponent({
  __name: "KeyboardControls",
  props: {
    forward: { default: () => ["w", "W"] },
    back: { default: () => ["s", "S"] },
    left: { default: () => ["a", "A"] },
    right: { default: () => ["d", "D"] },
    jump: { default: () => [" "] },
    gravity: { default: 9.8 },
    moveSpeed: { default: 0.1 },
    headBobbing: { type: Boolean, default: false },
    is2D: { type: Boolean, default: false }
  },
  setup(o) {
    var f;
    const e = o, { forward: t, back: n, left: s, right: i, jump: r, gravity: a, moveSpeed: l, headBobbing: c, is2D: u } = toRefs(e), { camera: h, controls: m } = dr(), p = ref(0), v = ref(0), _ = ref(false), y = ref(false), E = ref(0), R = shallowRef(), T = u.value ? "y" : "z", g = ((f = h.value.position) == null ? void 0 : f.y) || 0;
    mn(
      t.value,
      () => {
        _.value = true, v.value = l.value;
      },
      { eventName: "keydown" }
    ), mn(
      n.value,
      () => {
        _.value = true, v.value = -l.value;
      },
      { eventName: "keydown" }
    ), mn(
      [...t.value, ...n.value],
      () => {
        _.value = false, v.value = 0;
      },
      { eventName: "keyup" }
    ), mn(
      s.value,
      () => {
        _.value = true, p.value = -l.value;
      },
      { eventName: "keydown" }
    ), mn(
      i.value,
      () => {
        _.value = true, p.value = l.value;
      },
      { eventName: "keydown" }
    ), mn(
      [...s.value, ...i.value],
      () => {
        _.value = false, p.value = 0;
      },
      { eventName: "keyup" }
    ), mn(r.value, () => {
      y.value || (E.value = Date.now()), y.value = true;
    });
    const A2 = (P) => _.value ? Math.sin(P * hf) * df + g : g, x = () => (Date.now() - E.value) / 1e3 * 3, M = (P) => g + ff * P - 0.5 * a.value * P ** 2, d = () => {
      if (y.value) {
        const P = M(x());
        return P <= g && (y.value = false), P;
      }
      return 0;
    }, { onLoop: w } = re();
    return w(({ elapsed: P }) => {
      var I;
      m.value instanceof qi && ((I = m.value) != null && I.isLocked) ? (m.value.moveForward(v.value), m.value.moveRight(p.value), h.value.position && (h.value.position.y = c.value ? A2(P) : g, h.value.position.y += d())) : R.value.children.length > 0 && !(m.value instanceof qi) && (R.value.position.x += p.value, R.value.position[T] += u.value ? v.value : -v.value);
    }), (P, I) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "wrapperRef",
      ref: R
    }, [
      renderSlot(P.$slots, "default")
    ], 512));
  }
});
var pf = ["object", "args", "mode", "enabled", "axis", "translation-snap", "rotation-snap", "scale-snap", "space", "size", "show-x", "show-y", "show-z"];
var Zm = defineComponent({
  __name: "TransformControls",
  props: {
    object: {},
    mode: { default: "translate" },
    enabled: { type: Boolean, default: true },
    axis: { default: "XYZ" },
    translationSnap: {},
    rotationSnap: {},
    scaleSnap: {},
    space: { default: "world" },
    size: { default: 1 },
    showX: { type: Boolean, default: true },
    showY: { type: Boolean, default: true },
    showZ: { type: Boolean, default: true }
  },
  emits: ["dragging", "change", "mouseDown", "mouseUp", "objectChange"],
  setup(o, { emit: e }) {
    const t = o, n = e, { object: s, mode: i, enabled: r, axis: a, translationSnap: l, rotationSnap: c, scaleSnap: u, space: h, size: m, showX: p, showY: v, showZ: _ } = toRefs(t), y = shallowRef(), { controls: E, camera: R, renderer: T, extend: g } = dr();
    g({ TransformControls: $c });
    const A2 = (M) => {
      E.value && (E.value.enabled = !M.value), n("dragging", M.value);
    };
    function x() {
      Ve(y.value, "change", () => n("change")), Ve(y.value, "dragging-changed", A2), Ve(y.value, "mouseDown", () => n("mouseDown")), Ve(y.value, "mouseUp", () => n("mouseUp")), Ve(y.value, "objectChange", () => n("objectChange"));
    }
    return watchEffect(() => {
      y.value && x();
    }), onUnmounted(() => {
      y.value && y.value.dispose();
    }), (M, d) => unref(R) && unref(T) ? (openBlock(), createElementBlock("TresTransformControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: y,
      object: unref(s),
      args: [unref(R), unref(T).domElement],
      mode: unref(i),
      enabled: unref(r),
      axis: unref(a),
      "translation-snap": unref(l),
      "rotation-snap": unref(c),
      "scale-snap": unref(u),
      space: unref(h),
      size: unref(m),
      "show-x": unref(p),
      "show-y": unref(v),
      "show-z": unref(_),
      visible: true
    }, null, 8, pf)) : createCommentVNode("", true);
  }
});
var mf = ["args"];
var Km = defineComponent({
  __name: "PointerLockControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: {},
    domElement: {},
    selector: {}
  },
  emits: ["isLock", "change"],
  setup(o, { expose: e, emit: t }) {
    const n = o, s = t, { camera: i, renderer: r, extend: a, controls: l } = dr(), c = ref(null);
    let u;
    a({ PointerLockControls: qi });
    const h = (m) => {
      s("isLock", m);
    };
    return watch(c, (m) => {
      m && n.makeDefault ? l.value = m : l.value = null;
      const p = document.getElementById(n.selector || "");
      u = p || r.value.domElement, Ve(l.value, "change", () => s("change", l.value)), Ve(u, "click", () => {
        var v, _, y;
        (v = l.value) == null || v.lock(), (_ = l.value) == null || _.addEventListener("lock", () => h(true)), (y = l.value) == null || y.addEventListener("unlock", () => h(false));
      });
    }), onUnmounted(() => {
      var m, p;
      (m = l.value) == null || m.removeEventListener("lock", () => h(true)), (p = l.value) == null || p.removeEventListener("unlock", () => h(false)), c.value && c.value.dispose();
    }), e({
      value: l
    }), (m, p) => (m.camera || unref(i)) && (m.domElement || unref(r)) ? (openBlock(), createElementBlock("TresPointerLockControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: c,
      args: [m.camera || unref(i), m.domElement || unref(r).domElement]
    }, null, 8, mf)) : createCommentVNode("", true);
  }
});
var gf = ["args"];
var qm = defineComponent({
  __name: "MapControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: {},
    domElement: {}
  },
  setup(o) {
    const e = o, { camera: t, renderer: n, extend: s, controls: i } = dr(), r = ref(null);
    return s({ MapControls: ru }), watch(i, (a) => {
      a && e.makeDefault ? i.value = a : i.value = null;
    }), onUnmounted(() => {
      r.value && r.value.dispose();
    }), (a, l) => (a.camera || unref(t)) && (a.domElement || unref(n)) ? (openBlock(), createElementBlock("TresMapControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: r,
      args: [a.camera || unref(t), a.domElement || unref(n).domElement]
    }, null, 8, gf)) : createCommentVNode("", true);
  }
});
var Qm = defineComponent({
  __name: "ScrollControls",
  props: {
    pages: { default: 4 },
    distance: { default: 4 },
    smoothScroll: { default: 0.1 },
    horizontal: { type: Boolean, default: false },
    htmlScroll: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: e }) {
    const t = o, n = e, { logWarning: s } = A();
    t.smoothScroll < 0 && s("SmoothControl must be greater than zero"), t.pages < 0 && s("Pages must be greater than zero");
    const { camera: i, controls: r, renderer: a } = dr(), l = shallowRef(), c = document.createElement("div"), { y: u } = Oh(), { x: h, y: m, isScrolling: p } = Ih(c), { height: v, width: _ } = La();
    let y = 0;
    const E = ref(false), R = ref(0), T = ref(0), g = ref(0), A2 = t.horizontal ? "x" : "y", x = watch(
      i,
      (d) => {
        if (E.value) {
          x();
          return;
        }
        y = t.horizontal ? (d == null ? void 0 : d.position.x) || 0 : (d == null ? void 0 : d.position.y) || 0, E.value = true;
      },
      {
        immediate: true
      }
    );
    watch(
      p,
      (d) => {
        r.value && (r.value.enabled = !d);
      },
      {
        immediate: true
      }
    ), watch(u, (d) => {
      !p.value && !t.htmlScroll || (T.value = d / v.value / (g.value / v.value - 1), R.value = -1 * T.value, n("update:modelValue", T.value));
    }), watch(m, (d) => {
      T.value = d / v.value / (g.value / v.value), R.value = -1 * T.value, n("update:modelValue", T.value);
    }), watch(h, (d) => {
      T.value = d / _.value / (g.value / _.value - 1), R.value = +T.value, n("update:modelValue", T.value);
    }), watch(
      a,
      (d) => {
        var f, P;
        const w = d == null ? void 0 : d.domElement;
        if (t.htmlScroll && (d != null && d.domElement))
          w != null && w.style.width && (w != null && w.style.position) && (w != null && w.style.top) && (w != null && w.style.left) && (w.style.width = "100%", w.style.position = "fixed", w.style.zIndex = " -99999", w.style.top = "0", w.style.left = "0"), g.value = document.body.scrollHeight;
        else {
          const I = document.createElement("div"), K = document.createElement("div");
          c.style[t.horizontal ? "overflowX" : "overflowY"] = "auto", c.style[t.horizontal ? "overflowY" : "overflowX"] = "hidden", c.style.position = "absolute", c.style.width = "100%", c.style.height = " 100%", c.style.top = "0", c.style.left = "0", c.classList.add("scrollContainer"), I.style.position = "sticky", I.style.top = "0px", I.style.left = "0px", I.style.width = "100%", I.style.height = "100%", I.style.overflow = "hidden", c.appendChild(I), K.style.height = t.horizontal ? "100%" : `${v.value * t.pages}px`, K.style.width = t.horizontal ? `${_.value * t.pages}px` : "100vw", K.style.pointerEvents = "none", w.style.position = "fixed", w.style.zIndex = "0", w != null && w.style.width && (w.style.width = "100%"), c.appendChild(K), d.domElement.parentNode.style.position = "relative", (P = (f = d == null ? void 0 : d.domElement) == null ? void 0 : f.parentNode) == null || P.appendChild(c), g.value = t.horizontal ? _.value * t.pages : v.value * t.pages;
        }
      },
      {
        immediate: true
      }
    );
    const { onLoop: M } = re();
    return M(() => {
      var d;
      if ((d = i.value) != null && d.position) {
        const w = (R.value * t.distance - i.value.position[A2] + y) * t.smoothScroll;
        i.value.position[A2] += w, l.value.children.length > 0 && (l.value.position[A2] += w);
      }
    }), (d, w) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "wrapperRef",
      ref: l
    }, [
      renderSlot(d.$slots, "default")
    ], 512));
  }
});
var ye = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4
};
var Q = Object.freeze({
  NONE: 0,
  ROTATE: 1,
  TRUCK: 2,
  OFFSET: 4,
  DOLLY: 8,
  ZOOM: 16,
  TOUCH_ROTATE: 32,
  TOUCH_TRUCK: 64,
  TOUCH_OFFSET: 128,
  TOUCH_DOLLY: 256,
  TOUCH_ZOOM: 512,
  TOUCH_DOLLY_TRUCK: 1024,
  TOUCH_DOLLY_OFFSET: 2048,
  TOUCH_DOLLY_ROTATE: 4096,
  TOUCH_ZOOM_TRUCK: 8192,
  TOUCH_ZOOM_OFFSET: 16384,
  TOUCH_ZOOM_ROTATE: 32768
});
var Dn = {
  NONE: 0,
  IN: 1,
  OUT: -1
};
function gn(o) {
  return o.isPerspectiveCamera;
}
function sn(o) {
  return o.isOrthographicCamera;
}
var Ln = Math.PI * 2;
var so = Math.PI / 2;
var Na = 1e-5;
var $n = Math.PI / 180;
function Et(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function ze(o, e = Na) {
  return Math.abs(o) < e;
}
function ke(o, e, t = Na) {
  return ze(o - e, t);
}
function io(o, e) {
  return Math.round(o / e) * e;
}
function Zn(o) {
  return isFinite(o) ? o : o < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function Kn(o) {
  return Math.abs(o) < Number.MAX_VALUE ? o : o * (1 / 0);
}
function Is(o, e, t, n, s = 1 / 0, i) {
  n = Math.max(1e-4, n);
  const r = 2 / n, a = r * i, l = 1 / (1 + a + 0.48 * a * a + 0.235 * a * a * a);
  let c = o - e;
  const u = e, h = s * n;
  c = Et(c, -h, h), e = o - c;
  const m = (t.value + r * c) * i;
  t.value = (t.value - r * m) * l;
  let p = e + (c + m) * l;
  return u - o > 0 == p > u && (p = u, t.value = (p - u) / i), p;
}
function ro(o, e, t, n, s = 1 / 0, i, r) {
  n = Math.max(1e-4, n);
  const a = 2 / n, l = a * i, c = 1 / (1 + l + 0.48 * l * l + 0.235 * l * l * l);
  let u = e.x, h = e.y, m = e.z, p = o.x - u, v = o.y - h, _ = o.z - m;
  const y = u, E = h, R = m, T = s * n, g = T * T, A2 = p * p + v * v + _ * _;
  if (A2 > g) {
    const Z = Math.sqrt(A2);
    p = p / Z * T, v = v / Z * T, _ = _ / Z * T;
  }
  u = o.x - p, h = o.y - v, m = o.z - _;
  const x = (t.x + a * p) * i, M = (t.y + a * v) * i, d = (t.z + a * _) * i;
  t.x = (t.x - a * x) * c, t.y = (t.y - a * M) * c, t.z = (t.z - a * d) * c, r.x = u + (p + x) * c, r.y = h + (v + M) * c, r.z = m + (_ + d) * c;
  const w = y - o.x, f = E - o.y, P = R - o.z, I = r.x - y, K = r.y - E, N = r.z - R;
  return w * I + f * K + P * N > 0 && (r.x = y, r.y = E, r.z = R, t.x = (r.x - y) / i, t.y = (r.y - E) / i, t.z = (r.z - R) / i), r;
}
function Ti(o, e) {
  e.set(0, 0), o.forEach((t) => {
    e.x += t.clientX, e.y += t.clientY;
  }), e.x /= o.length, e.y /= o.length;
}
function bi(o, e) {
  return sn(o) ? (console.warn(`${e} is not supported in OrthographicCamera`), true) : false;
}
var yf = class {
  constructor() {
    this._listeners = {};
  }
  /**
   * Adds the specified event listener.
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  addEventListener(e, t) {
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Presence of the specified event listener.
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the specified event listener
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  removeEventListener(e, t) {
    const s = this._listeners[e];
    if (s !== void 0) {
      const i = s.indexOf(t);
      i !== -1 && s.splice(i, 1);
    }
  }
  /**
   * Removes all event listeners
   * @param type event name
   * @category Methods
   */
  removeAllEventListeners(e) {
    if (!e) {
      this._listeners = {};
      return;
    }
    Array.isArray(this._listeners[e]) && (this._listeners[e].length = 0);
  }
  /**
   * Fire an event type.
   * @param event DispatcherEvent
   * @category Methods
   */
  dispatchEvent(e) {
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let i = 0, r = s.length; i < r; i++)
        s[i].call(this, e);
    }
  }
};
var vf = "2.7.4";
var Ds = 1 / 8;
var za = typeof window < "u";
var _f = za && /Mac/.test(navigator.platform);
var xf = !(za && "PointerEvent" in window);
var me;
var oo;
var Ls;
var Ei;
var at;
var Ee;
var Le;
var On;
var qn;
var Pt;
var Rt;
var yn;
var ao;
var lo;
var yt;
var Qn;
var Fn;
var co;
var Mi;
var uo;
var Si;
var Ai;
var Os;
var ls = class _ls extends yf {
  /**
       * Injects THREE as the dependency. You can then proceed to use CameraControls.
       *
       * e.g
       * ```javascript
       * CameraControls.install( { THREE: THREE } );
       * ```
       *
       * Note: If you do not wish to use enter three.js to reduce file size(tree-shaking for example), make a subset to install.
       *
       * ```js
       * import {
       * 	Vector2,
       * 	Vector3,
       * 	Vector4,
       * 	Quaternion,
       * 	Matrix4,
       * 	Spherical,
       * 	Box3,
       * 	Sphere,
       * 	Raycaster,
       * 	MathUtils,
       * } from 'three';
       *
       * const subsetOfTHREE = {
       * 	Vector2   : Vector2,
       * 	Vector3   : Vector3,
       * 	Vector4   : Vector4,
       * 	Quaternion: Quaternion,
       * 	Matrix4   : Matrix4,
       * 	Spherical : Spherical,
       * 	Box3      : Box3,
       * 	Sphere    : Sphere,
       * 	Raycaster : Raycaster,
       * };
  
       * CameraControls.install( { THREE: subsetOfTHREE } );
       * ```
       * @category Statics
       */
  static install(e) {
    me = e.THREE, oo = Object.freeze(new me.Vector3(0, 0, 0)), Ls = Object.freeze(new me.Vector3(0, 1, 0)), Ei = Object.freeze(new me.Vector3(0, 0, 1)), at = new me.Vector2(), Ee = new me.Vector3(), Le = new me.Vector3(), On = new me.Vector3(), qn = new me.Vector3(), Pt = new me.Vector3(), Rt = new me.Vector3(), yn = new me.Vector3(), ao = new me.Vector3(), lo = new me.Vector3(), yt = new me.Spherical(), Qn = new me.Spherical(), Fn = new me.Box3(), co = new me.Box3(), Mi = new me.Sphere(), uo = new me.Quaternion(), Si = new me.Quaternion(), Ai = new me.Matrix4(), Os = new me.Raycaster();
  }
  /**
   * list all ACTIONs
   * @category Statics
   */
  static get ACTION() {
    return Q;
  }
  /**
   * Creates a `CameraControls` instance.
   *
   * Note:
   * You **must install** three.js before using camera-controls. see [#install](#install)
   * Not doing so will lead to runtime errors (`undefined` references to THREE).
   *
   * e.g.
   * ```
   * CameraControls.install( { THREE } );
   * const cameraControls = new CameraControls( camera, domElement );
   * ```
   *
   * @param camera A `THREE.PerspectiveCamera` or `THREE.OrthographicCamera` to be controlled.
   * @param domElement A `HTMLElement` for the draggable area, usually `renderer.domElement`.
   * @category Constructor
   */
  constructor(e, t) {
    super(), this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.minDistance = Number.EPSILON, this.maxDistance = 1 / 0, this.infinityDolly = false, this.minZoom = 0.01, this.maxZoom = 1 / 0, this.smoothTime = 0.25, this.draggingSmoothTime = 0.125, this.maxSpeed = 1 / 0, this.azimuthRotateSpeed = 1, this.polarRotateSpeed = 1, this.dollySpeed = 1, this.dollyDragInverted = false, this.truckSpeed = 2, this.dollyToCursor = false, this.dragToOffset = false, this.verticalDragToForward = false, this.boundaryFriction = 0, this.restThreshold = 0.01, this.colliderMeshes = [], this.cancel = () => {
    }, this._enabled = true, this._state = Q.NONE, this._viewport = null, this._changedDolly = 0, this._changedZoom = 0, this._hasRested = true, this._boundaryEnclosesCamera = false, this._needsUpdate = true, this._updatedLastTime = false, this._elementRect = new DOMRect(), this._isDragging = false, this._dragNeedsUpdate = true, this._activePointers = [], this._lockedPointer = null, this._interactiveArea = new DOMRect(0, 0, 1, 1), this._isUserControllingRotate = false, this._isUserControllingDolly = false, this._isUserControllingTruck = false, this._isUserControllingOffset = false, this._isUserControllingZoom = false, this._lastDollyDirection = Dn.NONE, this._thetaVelocity = { value: 0 }, this._phiVelocity = { value: 0 }, this._radiusVelocity = { value: 0 }, this._targetVelocity = new me.Vector3(), this._focalOffsetVelocity = new me.Vector3(), this._zoomVelocity = { value: 0 }, this._truckInternal = (g, A2, x) => {
      let M, d;
      if (gn(this._camera)) {
        const w = Ee.copy(this._camera.position).sub(this._target), f = this._camera.getEffectiveFOV() * $n, P = w.length() * Math.tan(f * 0.5);
        M = this.truckSpeed * g * P / this._elementRect.height, d = this.truckSpeed * A2 * P / this._elementRect.height;
      } else if (sn(this._camera)) {
        const w = this._camera;
        M = g * (w.right - w.left) / w.zoom / this._elementRect.width, d = A2 * (w.top - w.bottom) / w.zoom / this._elementRect.height;
      } else
        return;
      this.verticalDragToForward ? (x ? this.setFocalOffset(this._focalOffsetEnd.x + M, this._focalOffsetEnd.y, this._focalOffsetEnd.z, true) : this.truck(M, 0, true), this.forward(-d, true)) : x ? this.setFocalOffset(this._focalOffsetEnd.x + M, this._focalOffsetEnd.y + d, this._focalOffsetEnd.z, true) : this.truck(M, d, true);
    }, this._rotateInternal = (g, A2) => {
      const x = Ln * this.azimuthRotateSpeed * g / this._elementRect.height, M = Ln * this.polarRotateSpeed * A2 / this._elementRect.height;
      this.rotate(x, M, true);
    }, this._dollyInternal = (g, A2, x) => {
      const M = Math.pow(0.95, -g * this.dollySpeed), d = this._sphericalEnd.radius, w = this._sphericalEnd.radius * M, f = Et(w, this.minDistance, this.maxDistance), P = f - w;
      this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(w, true) : this.infinityDolly && !this.dollyToCursor ? (this.dollyInFixed(P, true), this._dollyToNoClamp(f, true)) : this._dollyToNoClamp(f, true), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? w : f) - d, this._dollyControlCoord.set(A2, x)), this._lastDollyDirection = Math.sign(-g);
    }, this._zoomInternal = (g, A2, x) => {
      const M = Math.pow(0.95, g * this.dollySpeed), d = this._zoom, w = this._zoom * M;
      this.zoomTo(w, true), this.dollyToCursor && (this._changedZoom += w - d, this._dollyControlCoord.set(A2, x));
    }, typeof me > "u" && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = e, this._yAxisUpSpace = new me.Quaternion().setFromUnitVectors(this._camera.up, Ls), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = Q.NONE, this._target = new me.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new me.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new me.Spherical().setFromVector3(Ee.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [
      new me.Vector3(),
      new me.Vector3(),
      new me.Vector3(),
      new me.Vector3()
    ], this._updateNearPlaneCorners(), this._boundary = new me.Box3(new me.Vector3(-1 / 0, -1 / 0, -1 / 0), new me.Vector3(1 / 0, 1 / 0, 1 / 0)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new me.Vector2(), this.mouseButtons = {
      left: Q.ROTATE,
      middle: Q.DOLLY,
      right: Q.TRUCK,
      wheel: gn(this._camera) ? Q.DOLLY : sn(this._camera) ? Q.ZOOM : Q.NONE
    }, this.touches = {
      one: Q.TOUCH_ROTATE,
      two: gn(this._camera) ? Q.TOUCH_DOLLY_TRUCK : sn(this._camera) ? Q.TOUCH_ZOOM_TRUCK : Q.NONE,
      three: Q.TOUCH_TRUCK
    };
    const n = new me.Vector2(), s = new me.Vector2(), i = new me.Vector2(), r = (g) => {
      if (!this._enabled || !this._domElement)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const M = this._domElement.getBoundingClientRect(), d = g.clientX / M.width, w = g.clientY / M.height;
        if (d < this._interactiveArea.left || d > this._interactiveArea.right || w < this._interactiveArea.top || w > this._interactiveArea.bottom)
          return;
      }
      const A2 = g.pointerType !== "mouse" ? null : (g.buttons & ye.LEFT) === ye.LEFT ? ye.LEFT : (g.buttons & ye.MIDDLE) === ye.MIDDLE ? ye.MIDDLE : (g.buttons & ye.RIGHT) === ye.RIGHT ? ye.RIGHT : null;
      if (A2 !== null) {
        const M = this._findPointerByMouseButton(A2);
        M && this._disposePointer(M);
      }
      if ((g.buttons & ye.LEFT) === ye.LEFT && this._lockedPointer)
        return;
      const x = {
        pointerId: g.pointerId,
        clientX: g.clientX,
        clientY: g.clientY,
        deltaX: 0,
        deltaY: 0,
        mouseButton: A2
      };
      this._activePointers.push(x), this._domElement.ownerDocument.removeEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", u), this._domElement.ownerDocument.addEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.addEventListener("pointerup", u), this._isDragging = true, _(g);
    }, a = (g) => {
      if (!this._enabled || !this._domElement || this._lockedPointer)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const M = this._domElement.getBoundingClientRect(), d = g.clientX / M.width, w = g.clientY / M.height;
        if (d < this._interactiveArea.left || d > this._interactiveArea.right || w < this._interactiveArea.top || w > this._interactiveArea.bottom)
          return;
      }
      const A2 = (g.buttons & ye.LEFT) === ye.LEFT ? ye.LEFT : (g.buttons & ye.MIDDLE) === ye.MIDDLE ? ye.MIDDLE : (g.buttons & ye.RIGHT) === ye.RIGHT ? ye.RIGHT : null;
      if (A2 !== null) {
        const M = this._findPointerByMouseButton(A2);
        M && this._disposePointer(M);
      }
      const x = {
        pointerId: 1,
        clientX: g.clientX,
        clientY: g.clientY,
        deltaX: 0,
        deltaY: 0,
        mouseButton: (g.buttons & ye.LEFT) === ye.LEFT ? ye.LEFT : (g.buttons & ye.MIDDLE) === ye.LEFT ? ye.MIDDLE : (g.buttons & ye.RIGHT) === ye.LEFT ? ye.RIGHT : null
      };
      this._activePointers.push(x), this._domElement.ownerDocument.removeEventListener("mousemove", c), this._domElement.ownerDocument.removeEventListener("mouseup", h), this._domElement.ownerDocument.addEventListener("mousemove", c), this._domElement.ownerDocument.addEventListener("mouseup", h), this._isDragging = true, _(g);
    }, l = (g) => {
      g.cancelable && g.preventDefault();
      const A2 = g.pointerId, x = this._lockedPointer || this._findPointerById(A2);
      if (x) {
        if (x.clientX = g.clientX, x.clientY = g.clientY, x.deltaX = g.movementX, x.deltaY = g.movementY, this._state = 0, g.pointerType === "touch")
          switch (this._activePointers.length) {
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        else
          (!this._isDragging && this._lockedPointer || this._isDragging && (g.buttons & ye.LEFT) === ye.LEFT) && (this._state = this._state | this.mouseButtons.left), this._isDragging && (g.buttons & ye.MIDDLE) === ye.MIDDLE && (this._state = this._state | this.mouseButtons.middle), this._isDragging && (g.buttons & ye.RIGHT) === ye.RIGHT && (this._state = this._state | this.mouseButtons.right);
        y();
      }
    }, c = (g) => {
      const A2 = this._lockedPointer || this._findPointerById(1);
      A2 && (A2.clientX = g.clientX, A2.clientY = g.clientY, A2.deltaX = g.movementX, A2.deltaY = g.movementY, this._state = 0, (this._lockedPointer || (g.buttons & ye.LEFT) === ye.LEFT) && (this._state = this._state | this.mouseButtons.left), (g.buttons & ye.MIDDLE) === ye.MIDDLE && (this._state = this._state | this.mouseButtons.middle), (g.buttons & ye.RIGHT) === ye.RIGHT && (this._state = this._state | this.mouseButtons.right), y());
    }, u = (g) => {
      const A2 = this._findPointerById(g.pointerId);
      if (!(A2 && A2 === this._lockedPointer)) {
        if (A2 && this._disposePointer(A2), g.pointerType === "touch")
          switch (this._activePointers.length) {
            case 0:
              this._state = Q.NONE;
              break;
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        else
          this._state = Q.NONE;
        E();
      }
    }, h = () => {
      const g = this._findPointerById(1);
      g && g === this._lockedPointer || (g && this._disposePointer(g), this._state = Q.NONE, E());
    };
    let m = -1;
    const p = (g) => {
      if (!this._domElement || !this._enabled || this.mouseButtons.wheel === Q.NONE)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const w = this._domElement.getBoundingClientRect(), f = g.clientX / w.width, P = g.clientY / w.height;
        if (f < this._interactiveArea.left || f > this._interactiveArea.right || P < this._interactiveArea.top || P > this._interactiveArea.bottom)
          return;
      }
      if (g.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === Q.ROTATE || this.mouseButtons.wheel === Q.TRUCK) {
        const w = performance.now();
        m - w < 1e3 && this._getClientRect(this._elementRect), m = w;
      }
      const A2 = _f ? -1 : -3, x = g.deltaMode === 1 ? g.deltaY / A2 : g.deltaY / (A2 * 10), M = this.dollyToCursor ? (g.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, d = this.dollyToCursor ? (g.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
      switch (this.mouseButtons.wheel) {
        case Q.ROTATE: {
          this._rotateInternal(g.deltaX, g.deltaY), this._isUserControllingRotate = true;
          break;
        }
        case Q.TRUCK: {
          this._truckInternal(g.deltaX, g.deltaY, false), this._isUserControllingTruck = true;
          break;
        }
        case Q.OFFSET: {
          this._truckInternal(g.deltaX, g.deltaY, true), this._isUserControllingOffset = true;
          break;
        }
        case Q.DOLLY: {
          this._dollyInternal(-x, M, d), this._isUserControllingDolly = true;
          break;
        }
        case Q.ZOOM: {
          this._zoomInternal(-x, M, d), this._isUserControllingZoom = true;
          break;
        }
      }
      this.dispatchEvent({ type: "control" });
    }, v = (g) => {
      if (!(!this._domElement || !this._enabled)) {
        if (this.mouseButtons.right === _ls.ACTION.NONE) {
          const A2 = g instanceof PointerEvent ? g.pointerId : (g instanceof MouseEvent, 0), x = this._findPointerById(A2);
          x && this._disposePointer(x), this._domElement.ownerDocument.removeEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", u), this._domElement.ownerDocument.removeEventListener("mousemove", c), this._domElement.ownerDocument.removeEventListener("mouseup", h);
          return;
        }
        g.preventDefault();
      }
    }, _ = (g) => {
      if (!this._enabled)
        return;
      if (Ti(this._activePointers, at), this._getClientRect(this._elementRect), n.copy(at), s.copy(at), this._activePointers.length >= 2) {
        const x = at.x - this._activePointers[1].clientX, M = at.y - this._activePointers[1].clientY, d = Math.sqrt(x * x + M * M);
        i.set(0, d);
        const w = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5, f = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
        s.set(w, f);
      }
      if (this._state = 0, !g)
        this._lockedPointer && (this._state = this._state | this.mouseButtons.left);
      else if ("pointerType" in g && g.pointerType === "touch")
        switch (this._activePointers.length) {
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
      else
        !this._lockedPointer && (g.buttons & ye.LEFT) === ye.LEFT && (this._state = this._state | this.mouseButtons.left), (g.buttons & ye.MIDDLE) === ye.MIDDLE && (this._state = this._state | this.mouseButtons.middle), (g.buttons & ye.RIGHT) === ye.RIGHT && (this._state = this._state | this.mouseButtons.right);
      ((this._state & Q.ROTATE) === Q.ROTATE || (this._state & Q.TOUCH_ROTATE) === Q.TOUCH_ROTATE || (this._state & Q.TOUCH_DOLLY_ROTATE) === Q.TOUCH_DOLLY_ROTATE || (this._state & Q.TOUCH_ZOOM_ROTATE) === Q.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & Q.TRUCK) === Q.TRUCK || (this._state & Q.TOUCH_TRUCK) === Q.TOUCH_TRUCK || (this._state & Q.TOUCH_DOLLY_TRUCK) === Q.TOUCH_DOLLY_TRUCK || (this._state & Q.TOUCH_ZOOM_TRUCK) === Q.TOUCH_ZOOM_TRUCK) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & Q.DOLLY) === Q.DOLLY || (this._state & Q.TOUCH_DOLLY) === Q.TOUCH_DOLLY || (this._state & Q.TOUCH_DOLLY_TRUCK) === Q.TOUCH_DOLLY_TRUCK || (this._state & Q.TOUCH_DOLLY_OFFSET) === Q.TOUCH_DOLLY_OFFSET || (this._state & Q.TOUCH_DOLLY_ROTATE) === Q.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & Q.ZOOM) === Q.ZOOM || (this._state & Q.TOUCH_ZOOM) === Q.TOUCH_ZOOM || (this._state & Q.TOUCH_ZOOM_TRUCK) === Q.TOUCH_ZOOM_TRUCK || (this._state & Q.TOUCH_ZOOM_OFFSET) === Q.TOUCH_ZOOM_OFFSET || (this._state & Q.TOUCH_ZOOM_ROTATE) === Q.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & Q.OFFSET) === Q.OFFSET || (this._state & Q.TOUCH_OFFSET) === Q.TOUCH_OFFSET || (this._state & Q.TOUCH_DOLLY_OFFSET) === Q.TOUCH_DOLLY_OFFSET || (this._state & Q.TOUCH_ZOOM_OFFSET) === Q.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
    }, y = () => {
      if (!this._enabled || !this._dragNeedsUpdate)
        return;
      this._dragNeedsUpdate = false, Ti(this._activePointers, at);
      const A2 = this._domElement && document.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, x = A2 ? -A2.deltaX : s.x - at.x, M = A2 ? -A2.deltaY : s.y - at.y;
      if (s.copy(at), ((this._state & Q.ROTATE) === Q.ROTATE || (this._state & Q.TOUCH_ROTATE) === Q.TOUCH_ROTATE || (this._state & Q.TOUCH_DOLLY_ROTATE) === Q.TOUCH_DOLLY_ROTATE || (this._state & Q.TOUCH_ZOOM_ROTATE) === Q.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(x, M), this._isUserControllingRotate = true), (this._state & Q.DOLLY) === Q.DOLLY || (this._state & Q.ZOOM) === Q.ZOOM) {
        const d = this.dollyToCursor ? (n.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, w = this.dollyToCursor ? (n.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, f = this.dollyDragInverted ? -1 : 1;
        (this._state & Q.DOLLY) === Q.DOLLY ? (this._dollyInternal(f * M * Ds, d, w), this._isUserControllingDolly = true) : (this._zoomInternal(f * M * Ds, d, w), this._isUserControllingZoom = true);
      }
      if ((this._state & Q.TOUCH_DOLLY) === Q.TOUCH_DOLLY || (this._state & Q.TOUCH_ZOOM) === Q.TOUCH_ZOOM || (this._state & Q.TOUCH_DOLLY_TRUCK) === Q.TOUCH_DOLLY_TRUCK || (this._state & Q.TOUCH_ZOOM_TRUCK) === Q.TOUCH_ZOOM_TRUCK || (this._state & Q.TOUCH_DOLLY_OFFSET) === Q.TOUCH_DOLLY_OFFSET || (this._state & Q.TOUCH_ZOOM_OFFSET) === Q.TOUCH_ZOOM_OFFSET || (this._state & Q.TOUCH_DOLLY_ROTATE) === Q.TOUCH_DOLLY_ROTATE || (this._state & Q.TOUCH_ZOOM_ROTATE) === Q.TOUCH_ZOOM_ROTATE) {
        const d = at.x - this._activePointers[1].clientX, w = at.y - this._activePointers[1].clientY, f = Math.sqrt(d * d + w * w), P = i.y - f;
        i.set(0, f);
        const I = this.dollyToCursor ? (s.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, K = this.dollyToCursor ? (s.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        (this._state & Q.TOUCH_DOLLY) === Q.TOUCH_DOLLY || (this._state & Q.TOUCH_DOLLY_ROTATE) === Q.TOUCH_DOLLY_ROTATE || (this._state & Q.TOUCH_DOLLY_TRUCK) === Q.TOUCH_DOLLY_TRUCK || (this._state & Q.TOUCH_DOLLY_OFFSET) === Q.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(P * Ds, I, K), this._isUserControllingDolly = true) : (this._zoomInternal(P * Ds, I, K), this._isUserControllingZoom = true);
      }
      ((this._state & Q.TRUCK) === Q.TRUCK || (this._state & Q.TOUCH_TRUCK) === Q.TOUCH_TRUCK || (this._state & Q.TOUCH_DOLLY_TRUCK) === Q.TOUCH_DOLLY_TRUCK || (this._state & Q.TOUCH_ZOOM_TRUCK) === Q.TOUCH_ZOOM_TRUCK) && (this._truckInternal(x, M, false), this._isUserControllingTruck = true), ((this._state & Q.OFFSET) === Q.OFFSET || (this._state & Q.TOUCH_OFFSET) === Q.TOUCH_OFFSET || (this._state & Q.TOUCH_DOLLY_OFFSET) === Q.TOUCH_DOLLY_OFFSET || (this._state & Q.TOUCH_ZOOM_OFFSET) === Q.TOUCH_ZOOM_OFFSET) && (this._truckInternal(x, M, true), this._isUserControllingOffset = true), this.dispatchEvent({ type: "control" });
    }, E = () => {
      Ti(this._activePointers, at), s.copy(at), this._dragNeedsUpdate = false, (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = false), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.removeEventListener("mousemove", c), this._domElement.ownerDocument.removeEventListener("pointerup", u), this._domElement.ownerDocument.removeEventListener("mouseup", h), this.dispatchEvent({ type: "controlend" }));
    };
    this.lockPointer = () => {
      !this._enabled || !this._domElement || (this.cancel(), this._lockedPointer = {
        pointerId: -1,
        clientX: 0,
        clientY: 0,
        deltaX: 0,
        deltaY: 0,
        mouseButton: null
      }, this._activePointers.push(this._lockedPointer), this._domElement.ownerDocument.removeEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", u), this._domElement.requestPointerLock(), this._domElement.ownerDocument.addEventListener("pointerlockchange", R), this._domElement.ownerDocument.addEventListener("pointerlockerror", T), this._domElement.ownerDocument.addEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.addEventListener("pointerup", u), _());
    }, this.unlockPointer = () => {
      this._lockedPointer !== null && (this._disposePointer(this._lockedPointer), this._lockedPointer = null), document.exitPointerLock(), this.cancel(), this._domElement && (this._domElement.ownerDocument.removeEventListener("pointerlockchange", R), this._domElement.ownerDocument.removeEventListener("pointerlockerror", T));
    };
    const R = () => {
      this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement || this.unlockPointer();
    }, T = () => {
      this.unlockPointer();
    };
    this._addAllEventListeners = (g) => {
      this._domElement = g, this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none", this._domElement.addEventListener("pointerdown", r), xf && this._domElement.addEventListener("mousedown", a), this._domElement.addEventListener("pointercancel", u), this._domElement.addEventListener("wheel", p, { passive: false }), this._domElement.addEventListener("contextmenu", v);
    }, this._removeAllEventListeners = () => {
      this._domElement && (this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = "", this._domElement.removeEventListener("pointerdown", r), this._domElement.removeEventListener("mousedown", a), this._domElement.removeEventListener("pointercancel", u), this._domElement.removeEventListener("wheel", p, { passive: false }), this._domElement.removeEventListener("contextmenu", v), this._domElement.ownerDocument.removeEventListener("pointermove", l, { passive: false }), this._domElement.ownerDocument.removeEventListener("mousemove", c), this._domElement.ownerDocument.removeEventListener("pointerup", u), this._domElement.ownerDocument.removeEventListener("mouseup", h), this._domElement.ownerDocument.removeEventListener("pointerlockchange", R), this._domElement.ownerDocument.removeEventListener("pointerlockerror", T));
    }, this.cancel = () => {
      this._state !== Q.NONE && (this._state = Q.NONE, this._activePointers.length = 0, E());
    }, t && this.connect(t), this.update(0);
  }
  /**
   * The camera to be controlled
   * @category Properties
   */
  get camera() {
    return this._camera;
  }
  set camera(e) {
    this._camera = e, this.updateCameraUp(), this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = true;
  }
  /**
   * Whether or not the controls are enabled.
   * `false` to disable user dragging/touch-move, but all methods works.
   * @category Properties
   */
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._enabled = e, this._domElement && (e ? (this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none") : (this.cancel(), this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = ""));
  }
  /**
   * Returns `true` if the controls are active updating.
   * readonly value.
   * @category Properties
   */
  get active() {
    return !this._hasRested;
  }
  /**
   * Getter for the current `ACTION`.
   * readonly value.
   * @category Properties
   */
  get currentAction() {
    return this._state;
  }
  /**
   * get/set Current distance.
   * @category Properties
   */
  get distance() {
    return this._spherical.radius;
  }
  set distance(e) {
    this._spherical.radius === e && this._sphericalEnd.radius === e || (this._spherical.radius = e, this._sphericalEnd.radius = e, this._needsUpdate = true);
  }
  // horizontal angle
  /**
   * get/set the azimuth angle (horizontal) in radians.
   * Every 360 degrees turn is added to `.azimuthAngle` value, which is accumulative.
   * @category Properties
   */
  get azimuthAngle() {
    return this._spherical.theta;
  }
  set azimuthAngle(e) {
    this._spherical.theta === e && this._sphericalEnd.theta === e || (this._spherical.theta = e, this._sphericalEnd.theta = e, this._needsUpdate = true);
  }
  // vertical angle
  /**
   * get/set the polar angle (vertical) in radians.
   * @category Properties
   */
  get polarAngle() {
    return this._spherical.phi;
  }
  set polarAngle(e) {
    this._spherical.phi === e && this._sphericalEnd.phi === e || (this._spherical.phi = e, this._sphericalEnd.phi = e, this._needsUpdate = true);
  }
  /**
   * Whether camera position should be enclosed in the boundary or not.
   * @category Properties
   */
  get boundaryEnclosesCamera() {
    return this._boundaryEnclosesCamera;
  }
  set boundaryEnclosesCamera(e) {
    this._boundaryEnclosesCamera = e, this._needsUpdate = true;
  }
  /**
   * Set drag-start, touches and wheel enable area in the domElement.
   * each values are between `0` and `1` inclusive, where `0` is left/top and `1` is right/bottom of the screen.
   * e.g. `{ x: 0, y: 0, width: 1, height: 1 }` for entire area.
   * @category Properties
   */
  set interactiveArea(e) {
    this._interactiveArea.width = Et(e.width, 0, 1), this._interactiveArea.height = Et(e.height, 0, 1), this._interactiveArea.x = Et(e.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = Et(e.y, 0, 1 - this._interactiveArea.height);
  }
  /**
   * Adds the specified event listener.
   * Applicable event types (which is `K`) are:
   * | Event name          | Timing |
   * | ------------------- | ------ |
   * | `'controlstart'`    | When the user starts to control the camera via mouse / touches. ¹ |
   * | `'control'`         | When the user controls the camera (dragging). |
   * | `'controlend'`      | When the user ends to control the camera. ¹ |
   * | `'transitionstart'` | When any kind of transition starts, either user control or using a method with `enableTransition = true` |
   * | `'update'`          | When the camera position is updated. |
   * | `'wake'`            | When the camera starts moving. |
   * | `'rest'`            | When the camera movement is below `.restThreshold` ². |
   * | `'sleep'`           | When the camera end moving. |
   *
   * 1. `mouseButtons.wheel` (Mouse wheel control) does not emit `'controlstart'` and `'controlend'`. `mouseButtons.wheel` uses scroll-event internally, and scroll-event happens intermittently. That means "start" and "end" cannot be detected.
   * 2. Due to damping, `sleep` will usually fire a few seconds after the camera _appears_ to have stopped moving. If you want to do something (e.g. enable UI, perform another transition) at the point when the camera has stopped, you probably want the `rest` event. This can be fine tuned using the `.restThreshold` parameter. See the [Rest and Sleep Example](https://yomotsu.github.io/camera-controls/examples/rest-and-sleep.html).
   *
   * e.g.
   * ```
   * cameraControl.addEventListener( 'controlstart', myCallbackFunction );
   * ```
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  addEventListener(e, t) {
    super.addEventListener(e, t);
  }
  /**
   * Removes the specified event listener
   * e.g.
   * ```
   * cameraControl.addEventListener( 'controlstart', myCallbackFunction );
   * ```
   * @param type event name
   * @param listener handler function
   * @category Methods
   */
  removeEventListener(e, t) {
    super.removeEventListener(e, t);
  }
  /**
   * Rotate azimuthal angle(horizontal) and polar angle(vertical).
   * Every value is added to the current value.
   * @param azimuthAngle Azimuth rotate angle. In radian.
   * @param polarAngle Polar rotate angle. In radian.
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  rotate(e, t, n = false) {
    return this.rotateTo(this._sphericalEnd.theta + e, this._sphericalEnd.phi + t, n);
  }
  /**
   * Rotate azimuthal angle(horizontal) to the given angle and keep the same polar angle(vertical) target.
   *
   * e.g.
   * ```
   * cameraControls.rotateAzimuthTo( 30 * THREE.MathUtils.DEG2RAD, true );
   * ```
   * @param azimuthAngle Azimuth rotate angle. In radian.
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  rotateAzimuthTo(e, t = false) {
    return this.rotateTo(e, this._sphericalEnd.phi, t);
  }
  /**
   * Rotate polar angle(vertical) to the given angle and keep the same azimuthal angle(horizontal) target.
   *
   * e.g.
   * ```
   * cameraControls.rotatePolarTo( 30 * THREE.MathUtils.DEG2RAD, true );
   * ```
   * @param polarAngle Polar rotate angle. In radian.
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  rotatePolarTo(e, t = false) {
    return this.rotateTo(this._sphericalEnd.theta, e, t);
  }
  /**
   * Rotate azimuthal angle(horizontal) and polar angle(vertical) to the given angle.
   * Camera view will rotate over the orbit pivot absolutely:
   *
   * azimuthAngle
   * ```
   *       0º
   *         \
   * 90º -----+----- -90º
   *           \
   *           180º
   * ```
   * | direction | angle                  |
   * | --------- | ---------------------- |
   * | front     | 0º                     |
   * | left      | 90º (`Math.PI / 2`)    |
   * | right     | -90º (`- Math.PI / 2`) |
   * | back      | 180º (`Math.PI`)       |
   *
   * polarAngle
   * ```
   *     180º
   *      |
   *      90º
   *      |
   *      0º
   * ```
   * | direction            | angle                  |
   * | -------------------- | ---------------------- |
   * | top/sky              | 180º (`Math.PI`)       |
   * | horizontal from view | 90º (`Math.PI / 2`)    |
   * | bottom/floor         | 0º                     |
   *
   * @param azimuthAngle Azimuth rotate angle to. In radian.
   * @param polarAngle Polar rotate angle to. In radian.
   * @param enableTransition  Whether to move smoothly or immediately
   * @category Methods
   */
  rotateTo(e, t, n = false) {
    this._isUserControllingRotate = false;
    const s = Et(e, this.minAzimuthAngle, this.maxAzimuthAngle), i = Et(t, this.minPolarAngle, this.maxPolarAngle);
    this._sphericalEnd.theta = s, this._sphericalEnd.phi = i, this._sphericalEnd.makeSafe(), this._needsUpdate = true, n || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
    const r = !n || ke(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && ke(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
    return this._createOnRestPromise(r);
  }
  /**
   * Dolly in/out camera position.
   * @param distance Distance of dollyIn. Negative number for dollyOut.
   * @param enableTransition Whether to move smoothly or immediately.
   * @category Methods
   */
  dolly(e, t = false) {
    return this.dollyTo(this._sphericalEnd.radius - e, t);
  }
  /**
   * Dolly in/out camera position to given distance.
   * @param distance Distance of dolly.
   * @param enableTransition Whether to move smoothly or immediately.
   * @category Methods
   */
  dollyTo(e, t = false) {
    return this._isUserControllingDolly = false, this._lastDollyDirection = Dn.NONE, this._changedDolly = 0, this._dollyToNoClamp(Et(e, this.minDistance, this.maxDistance), t);
  }
  _dollyToNoClamp(e, t = false) {
    const n = this._sphericalEnd.radius;
    if (this.colliderMeshes.length >= 1) {
      const r = this._collisionTest(), a = ke(r, this._spherical.radius);
      if (!(n > e) && a)
        return Promise.resolve();
      this._sphericalEnd.radius = Math.min(e, r);
    } else
      this._sphericalEnd.radius = e;
    this._needsUpdate = true, t || (this._spherical.radius = this._sphericalEnd.radius);
    const i = !t || ke(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(i);
  }
  /**
   * Dolly in, but does not change the distance between the target and the camera, and moves the target position instead.
   * Specify a negative value for dolly out.
   * @param distance Distance of dolly.
   * @param enableTransition Whether to move smoothly or immediately.
   * @category Methods
   */
  dollyInFixed(e, t = false) {
    this._targetEnd.add(this._getCameraDirection(qn).multiplyScalar(e)), t || this._target.copy(this._targetEnd);
    const n = !t || ke(this._target.x, this._targetEnd.x, this.restThreshold) && ke(this._target.y, this._targetEnd.y, this.restThreshold) && ke(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(n);
  }
  /**
   * Zoom in/out camera. The value is added to camera zoom.
   * Limits set with `.minZoom` and `.maxZoom`
   * @param zoomStep zoom scale
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  zoom(e, t = false) {
    return this.zoomTo(this._zoomEnd + e, t);
  }
  /**
   * Zoom in/out camera to given scale. The value overwrites camera zoom.
   * Limits set with .minZoom and .maxZoom
   * @param zoom
   * @param enableTransition
   * @category Methods
   */
  zoomTo(e, t = false) {
    this._isUserControllingZoom = false, this._zoomEnd = Et(e, this.minZoom, this.maxZoom), this._needsUpdate = true, t || (this._zoom = this._zoomEnd);
    const n = !t || ke(this._zoom, this._zoomEnd, this.restThreshold);
    return this._changedZoom = 0, this._createOnRestPromise(n);
  }
  /**
   * @deprecated `pan()` has been renamed to `truck()`
   * @category Methods
   */
  pan(e, t, n = false) {
    return console.warn("`pan` has been renamed to `truck`"), this.truck(e, t, n);
  }
  /**
   * Truck and pedestal camera using current azimuthal angle
   * @param x Horizontal translate amount
   * @param y Vertical translate amount
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  truck(e, t, n = false) {
    this._camera.updateMatrix(), Pt.setFromMatrixColumn(this._camera.matrix, 0), Rt.setFromMatrixColumn(this._camera.matrix, 1), Pt.multiplyScalar(e), Rt.multiplyScalar(-t);
    const s = Ee.copy(Pt).add(Rt), i = Le.copy(this._targetEnd).add(s);
    return this.moveTo(i.x, i.y, i.z, n);
  }
  /**
   * Move forward / backward.
   * @param distance Amount to move forward / backward. Negative value to move backward
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  forward(e, t = false) {
    Ee.setFromMatrixColumn(this._camera.matrix, 0), Ee.crossVectors(this._camera.up, Ee), Ee.multiplyScalar(e);
    const n = Le.copy(this._targetEnd).add(Ee);
    return this.moveTo(n.x, n.y, n.z, t);
  }
  /**
   * Move up / down.
   * @param height Amount to move up / down. Negative value to move down
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  elevate(e, t = false) {
    return Ee.copy(this._camera.up).multiplyScalar(e), this.moveTo(this._targetEnd.x + Ee.x, this._targetEnd.y + Ee.y, this._targetEnd.z + Ee.z, t);
  }
  /**
   * Move target position to given point.
   * @param x x coord to move center position
   * @param y y coord to move center position
   * @param z z coord to move center position
   * @param enableTransition Whether to move smoothly or immediately
   * @category Methods
   */
  moveTo(e, t, n, s = false) {
    this._isUserControllingTruck = false;
    const i = Ee.set(e, t, n).sub(this._targetEnd);
    this._encloseToBoundary(this._targetEnd, i, this.boundaryFriction), this._needsUpdate = true, s || this._target.copy(this._targetEnd);
    const r = !s || ke(this._target.x, this._targetEnd.x, this.restThreshold) && ke(this._target.y, this._targetEnd.y, this.restThreshold) && ke(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(r);
  }
  /**
   * Look in the given point direction.
   * @param x point x.
   * @param y point y.
   * @param z point z.
   * @param enableTransition Whether to move smoothly or immediately.
   * @returns Transition end promise
   * @category Methods
   */
  lookInDirectionOf(e, t, n, s = false) {
    const a = Ee.set(e, t, n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);
    return this.setPosition(a.x, a.y, a.z, s);
  }
  /**
   * Fit the viewport to the box or the bounding box of the object, using the nearest axis. paddings are in unit.
   * set `cover: true` to fill enter screen.
   * e.g.
   * ```
   * cameraControls.fitToBox( myMesh );
   * ```
   * @param box3OrObject Axis aligned bounding box to fit the view.
   * @param enableTransition Whether to move smoothly or immediately.
   * @param options | `<object>` { cover: boolean, paddingTop: number, paddingLeft: number, paddingBottom: number, paddingRight: number }
   * @returns Transition end promise
   * @category Methods
   */
  fitToBox(e, t, { cover: n = false, paddingLeft: s = 0, paddingRight: i = 0, paddingBottom: r = 0, paddingTop: a = 0 } = {}) {
    const l = [], c = e.isBox3 ? Fn.copy(e) : Fn.setFromObject(e);
    c.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
    const u = io(this._sphericalEnd.theta, so), h = io(this._sphericalEnd.phi, so);
    l.push(this.rotateTo(u, h, t));
    const m = Ee.setFromSpherical(this._sphericalEnd).normalize(), p = uo.setFromUnitVectors(m, Ei), v = ke(Math.abs(m.y), 1);
    v && p.multiply(Si.setFromAxisAngle(Ls, u)), p.multiply(this._yAxisUpSpaceInverse);
    const _ = co.makeEmpty();
    Le.copy(c.min).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.min).setX(c.max.x).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.min).setY(c.max.y).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.max).setZ(c.min.z).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.min).setZ(c.max.z).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.max).setY(c.min.y).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.max).setX(c.min.x).applyQuaternion(p), _.expandByPoint(Le), Le.copy(c.max).applyQuaternion(p), _.expandByPoint(Le), _.min.x -= s, _.min.y -= r, _.max.x += i, _.max.y += a, p.setFromUnitVectors(Ei, m), v && p.premultiply(Si.invert()), p.premultiply(this._yAxisUpSpace);
    const y = _.getSize(Ee), E = _.getCenter(Le).applyQuaternion(p);
    if (gn(this._camera)) {
      const R = this.getDistanceToFitBox(y.x, y.y, y.z, n);
      l.push(this.moveTo(E.x, E.y, E.z, t)), l.push(this.dollyTo(R, t)), l.push(this.setFocalOffset(0, 0, 0, t));
    } else if (sn(this._camera)) {
      const R = this._camera, T = R.right - R.left, g = R.top - R.bottom, A2 = n ? Math.max(T / y.x, g / y.y) : Math.min(T / y.x, g / y.y);
      l.push(this.moveTo(E.x, E.y, E.z, t)), l.push(this.zoomTo(A2, t)), l.push(this.setFocalOffset(0, 0, 0, t));
    }
    return Promise.all(l);
  }
  /**
   * Fit the viewport to the sphere or the bounding sphere of the object.
   * @param sphereOrMesh
   * @param enableTransition
   * @category Methods
   */
  fitToSphere(e, t) {
    const n = [], i = e instanceof me.Sphere ? Mi.copy(e) : _ls.createBoundingSphere(e, Mi);
    if (n.push(this.moveTo(i.center.x, i.center.y, i.center.z, t)), gn(this._camera)) {
      const r = this.getDistanceToFitSphere(i.radius);
      n.push(this.dollyTo(r, t));
    } else if (sn(this._camera)) {
      const r = this._camera.right - this._camera.left, a = this._camera.top - this._camera.bottom, l = 2 * i.radius, c = Math.min(r / l, a / l);
      n.push(this.zoomTo(c, t));
    }
    return n.push(this.setFocalOffset(0, 0, 0, t)), Promise.all(n);
  }
  /**
   * Look at the `target` from the `position`.
   * @param positionX
   * @param positionY
   * @param positionZ
   * @param targetX
   * @param targetY
   * @param targetZ
   * @param enableTransition
   * @category Methods
   */
  setLookAt(e, t, n, s, i, r, a = false) {
    this._isUserControllingRotate = false, this._isUserControllingDolly = false, this._isUserControllingTruck = false, this._lastDollyDirection = Dn.NONE, this._changedDolly = 0;
    const l = Le.set(s, i, r), c = Ee.set(e, t, n);
    this._targetEnd.copy(l), this._sphericalEnd.setFromVector3(c.sub(l).applyQuaternion(this._yAxisUpSpace)), this.normalizeRotations(), this._needsUpdate = true, a || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    const u = !a || ke(this._target.x, this._targetEnd.x, this.restThreshold) && ke(this._target.y, this._targetEnd.y, this.restThreshold) && ke(this._target.z, this._targetEnd.z, this.restThreshold) && ke(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && ke(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && ke(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(u);
  }
  /**
   * Similar to setLookAt, but it interpolates between two states.
   * @param positionAX
   * @param positionAY
   * @param positionAZ
   * @param targetAX
   * @param targetAY
   * @param targetAZ
   * @param positionBX
   * @param positionBY
   * @param positionBZ
   * @param targetBX
   * @param targetBY
   * @param targetBZ
   * @param t
   * @param enableTransition
   * @category Methods
   */
  lerpLookAt(e, t, n, s, i, r, a, l, c, u, h, m, p, v = false) {
    this._isUserControllingRotate = false, this._isUserControllingDolly = false, this._isUserControllingTruck = false, this._lastDollyDirection = Dn.NONE, this._changedDolly = 0;
    const _ = Ee.set(s, i, r), y = Le.set(e, t, n);
    yt.setFromVector3(y.sub(_).applyQuaternion(this._yAxisUpSpace));
    const E = On.set(u, h, m), R = Le.set(a, l, c);
    Qn.setFromVector3(R.sub(E).applyQuaternion(this._yAxisUpSpace)), this._targetEnd.copy(_.lerp(E, p));
    const T = Qn.theta - yt.theta, g = Qn.phi - yt.phi, A2 = Qn.radius - yt.radius;
    this._sphericalEnd.set(yt.radius + A2 * p, yt.phi + g * p, yt.theta + T * p), this.normalizeRotations(), this._needsUpdate = true, v || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    const x = !v || ke(this._target.x, this._targetEnd.x, this.restThreshold) && ke(this._target.y, this._targetEnd.y, this.restThreshold) && ke(this._target.z, this._targetEnd.z, this.restThreshold) && ke(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && ke(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && ke(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(x);
  }
  /**
   * Set angle and distance by given position.
   * An alias of `setLookAt()`, without target change. Thus keep gazing at the current target
   * @param positionX
   * @param positionY
   * @param positionZ
   * @param enableTransition
   * @category Methods
   */
  setPosition(e, t, n, s = false) {
    return this.setLookAt(e, t, n, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, s);
  }
  /**
   * Set the target position where gaze at.
   * An alias of `setLookAt()`, without position change. Thus keep the same position.
   * @param targetX
   * @param targetY
   * @param targetZ
   * @param enableTransition
   * @category Methods
   */
  setTarget(e, t, n, s = false) {
    const i = this.getPosition(Ee), r = this.setLookAt(i.x, i.y, i.z, e, t, n, s);
    return this._sphericalEnd.phi = Et(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), r;
  }
  /**
   * Set focal offset using the screen parallel coordinates. z doesn't affect in Orthographic as with Dolly.
   * @param x
   * @param y
   * @param z
   * @param enableTransition
   * @category Methods
   */
  setFocalOffset(e, t, n, s = false) {
    this._isUserControllingOffset = false, this._focalOffsetEnd.set(e, t, n), this._needsUpdate = true, s || this._focalOffset.copy(this._focalOffsetEnd);
    const i = !s || ke(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && ke(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && ke(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
    return this._createOnRestPromise(i);
  }
  /**
   * Set orbit point without moving the camera.
   * SHOULD NOT RUN DURING ANIMATIONS. `setOrbitPoint()` will immediately fix the positions.
   * @param targetX
   * @param targetY
   * @param targetZ
   * @category Methods
   */
  setOrbitPoint(e, t, n) {
    this._camera.updateMatrixWorld(), Pt.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), Rt.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), yn.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
    const s = Ee.set(e, t, n), i = s.distanceTo(this._camera.position), r = s.sub(this._camera.position);
    Pt.multiplyScalar(r.x), Rt.multiplyScalar(r.y), yn.multiplyScalar(r.z), Ee.copy(Pt).add(Rt).add(yn), Ee.z = Ee.z + i, this.dollyTo(i, false), this.setFocalOffset(-Ee.x, Ee.y, -Ee.z, false), this.moveTo(e, t, n, false);
  }
  /**
   * Set the boundary box that encloses the target of the camera. box3 is in THREE.Box3
   * @param box3
   * @category Methods
   */
  setBoundary(e) {
    if (!e) {
      this._boundary.min.set(-1 / 0, -1 / 0, -1 / 0), this._boundary.max.set(1 / 0, 1 / 0, 1 / 0), this._needsUpdate = true;
      return;
    }
    this._boundary.copy(e), this._boundary.clampPoint(this._targetEnd, this._targetEnd), this._needsUpdate = true;
  }
  /**
   * Set (or unset) the current viewport.
   * Set this when you want to use renderer viewport and .dollyToCursor feature at the same time.
   * @param viewportOrX
   * @param y
   * @param width
   * @param height
   * @category Methods
   */
  setViewport(e, t, n, s) {
    if (e === null) {
      this._viewport = null;
      return;
    }
    this._viewport = this._viewport || new me.Vector4(), typeof e == "number" ? this._viewport.set(e, t, n, s) : this._viewport.copy(e);
  }
  /**
   * Calculate the distance to fit the box.
   * @param width box width
   * @param height box height
   * @param depth box depth
   * @returns distance
   * @category Methods
   */
  getDistanceToFitBox(e, t, n, s = false) {
    if (bi(this._camera, "getDistanceToFitBox"))
      return this._spherical.radius;
    const i = e / t, r = this._camera.getEffectiveFOV() * $n, a = this._camera.aspect;
    return ((s ? i > a : i < a) ? t : e / a) * 0.5 / Math.tan(r * 0.5) + n * 0.5;
  }
  /**
   * Calculate the distance to fit the sphere.
   * @param radius sphere radius
   * @returns distance
   * @category Methods
   */
  getDistanceToFitSphere(e) {
    if (bi(this._camera, "getDistanceToFitSphere"))
      return this._spherical.radius;
    const t = this._camera.getEffectiveFOV() * $n, n = Math.atan(Math.tan(t * 0.5) * this._camera.aspect) * 2, s = 1 < this._camera.aspect ? t : n;
    return e / Math.sin(s * 0.5);
  }
  /**
   * Returns the orbit center position, where the camera looking at.
   * @param out The receiving Vector3 instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getTarget(e, t = true) {
    return (e && e.isVector3 ? e : new me.Vector3()).copy(t ? this._targetEnd : this._target);
  }
  /**
   * Returns the camera position.
   * @param out The receiving Vector3 instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getPosition(e, t = true) {
    return (e && e.isVector3 ? e : new me.Vector3()).setFromSpherical(t ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t ? this._targetEnd : this._target);
  }
  /**
   * Returns the spherical coordinates of the orbit.
   * @param out The receiving Spherical instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getSpherical(e, t = true) {
    return (e && e instanceof me.Spherical ? e : new me.Spherical()).copy(t ? this._sphericalEnd : this._spherical);
  }
  /**
   * Returns the focal offset, which is how much the camera appears to be translated in screen parallel coordinates.
   * @param out The receiving Vector3 instance to copy the result
   * @param receiveEndValue Whether receive the transition end coords or current. default is `true`
   * @category Methods
   */
  getFocalOffset(e, t = true) {
    return (e && e.isVector3 ? e : new me.Vector3()).copy(t ? this._focalOffsetEnd : this._focalOffset);
  }
  /**
   * Normalize camera azimuth angle rotation between 0 and 360 degrees.
   * @category Methods
   */
  normalizeRotations() {
    this._sphericalEnd.theta = this._sphericalEnd.theta % Ln, this._sphericalEnd.theta < 0 && (this._sphericalEnd.theta += Ln), this._spherical.theta += Ln * Math.round((this._sphericalEnd.theta - this._spherical.theta) / Ln);
  }
  /**
   * Reset all rotation and position to defaults.
   * @param enableTransition
   * @category Methods
   */
  reset(e = false) {
    if (!ke(this._camera.up.x, this._cameraUp0.x) || !ke(this._camera.up.y, this._cameraUp0.y) || !ke(this._camera.up.z, this._cameraUp0.z)) {
      this._camera.up.copy(this._cameraUp0);
      const n = this.getPosition(Ee);
      this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
    }
    const t = [
      this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, e),
      this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, e),
      this.zoomTo(this._zoom0, e)
    ];
    return Promise.all(t);
  }
  /**
   * Set current camera position as the default position.
   * @category Methods
   */
  saveState() {
    this._cameraUp0.copy(this._camera.up), this.getTarget(this._target0), this.getPosition(this._position0), this._zoom0 = this._zoom, this._focalOffset0.copy(this._focalOffset);
  }
  /**
   * Sync camera-up direction.
   * When camera-up vector is changed, `.updateCameraUp()` must be called.
   * @category Methods
   */
  updateCameraUp() {
    this._yAxisUpSpace.setFromUnitVectors(this._camera.up, Ls), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
  }
  /**
   * Apply current camera-up direction to the camera.
   * The orbit system will be re-initialized with the current position.
   * @category Methods
   */
  applyCameraUp() {
    const e = Ee.subVectors(this._target, this._camera.position).normalize(), t = Le.crossVectors(e, this._camera.up);
    this._camera.up.crossVectors(t, e).normalize(), this._camera.updateMatrixWorld();
    const n = this.getPosition(Ee);
    this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
  }
  /**
   * Update camera position and directions.
   * This should be called in your tick loop every time, and returns true if re-rendering is needed.
   * @param delta
   * @returns updated
   * @category Methods
   */
  update(e) {
    const t = this._sphericalEnd.theta - this._spherical.theta, n = this._sphericalEnd.phi - this._spherical.phi, s = this._sphericalEnd.radius - this._spherical.radius, i = ao.subVectors(this._targetEnd, this._target), r = lo.subVectors(this._focalOffsetEnd, this._focalOffset), a = this._zoomEnd - this._zoom;
    if (ze(t))
      this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
    else {
      const h = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.theta = Is(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, h, 1 / 0, e), this._needsUpdate = true;
    }
    if (ze(n))
      this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
    else {
      const h = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.phi = Is(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, h, 1 / 0, e), this._needsUpdate = true;
    }
    if (ze(s))
      this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
    else {
      const h = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.radius = Is(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, h, this.maxSpeed, e), this._needsUpdate = true;
    }
    if (ze(i.x) && ze(i.y) && ze(i.z))
      this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
    else {
      const h = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
      ro(this._target, this._targetEnd, this._targetVelocity, h, this.maxSpeed, e, this._target), this._needsUpdate = true;
    }
    if (ze(r.x) && ze(r.y) && ze(r.z))
      this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
    else {
      const h = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
      ro(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, h, this.maxSpeed, e, this._focalOffset), this._needsUpdate = true;
    }
    if (ze(a))
      this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
    else {
      const h = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
      this._zoom = Is(this._zoom, this._zoomEnd, this._zoomVelocity, h, 1 / 0, e);
    }
    if (this.dollyToCursor) {
      if (gn(this._camera) && this._changedDolly !== 0) {
        const h = this._spherical.radius - this._lastDistance, m = this._camera, p = this._getCameraDirection(qn), v = Ee.copy(p).cross(m.up).normalize();
        v.lengthSq() === 0 && (v.x = 1);
        const _ = Le.crossVectors(v, p), y = this._sphericalEnd.radius * Math.tan(m.getEffectiveFOV() * $n * 0.5), R = (this._sphericalEnd.radius - h - this._sphericalEnd.radius) / this._sphericalEnd.radius, T = On.copy(this._targetEnd).add(v.multiplyScalar(this._dollyControlCoord.x * y * m.aspect)).add(_.multiplyScalar(this._dollyControlCoord.y * y)), g = Ee.copy(this._targetEnd).lerp(T, R), A2 = this._lastDollyDirection === Dn.IN && this._spherical.radius <= this.minDistance, x = this._lastDollyDirection === Dn.OUT && this.maxDistance <= this._spherical.radius;
        if (this.infinityDolly && (A2 || x)) {
          this._sphericalEnd.radius -= h, this._spherical.radius -= h;
          const d = Le.copy(p).multiplyScalar(-h);
          g.add(d);
        }
        this._boundary.clampPoint(g, g);
        const M = Le.subVectors(g, this._targetEnd);
        this._targetEnd.copy(g), this._target.add(M), this._changedDolly -= h, ze(this._changedDolly) && (this._changedDolly = 0);
      } else if (sn(this._camera) && this._changedZoom !== 0) {
        const h = this._zoom - this._lastZoom, m = this._camera, p = Ee.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (m.near + m.far) / (m.near - m.far)).unproject(m), v = Le.set(0, 0, -1).applyQuaternion(m.quaternion), _ = On.copy(p).add(v.multiplyScalar(-p.dot(m.up))), E = -(this._zoom - h - this._zoom) / this._zoom, R = this._getCameraDirection(qn), T = this._targetEnd.dot(R), g = Ee.copy(this._targetEnd).lerp(_, E), A2 = g.dot(R), x = R.multiplyScalar(A2 - T);
        g.sub(x), this._boundary.clampPoint(g, g);
        const M = Le.subVectors(g, this._targetEnd);
        this._targetEnd.copy(g), this._target.add(M), this._changedZoom -= h, ze(this._changedZoom) && (this._changedZoom = 0);
      }
    }
    this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = true), this._dragNeedsUpdate = true;
    const l = this._collisionTest();
    this._spherical.radius = Math.min(this._spherical.radius, l), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!ze(this._focalOffset.x) || !ze(this._focalOffset.y) || !ze(this._focalOffset.z)) && (this._camera.updateMatrixWorld(), Pt.setFromMatrixColumn(this._camera.matrix, 0), Rt.setFromMatrixColumn(this._camera.matrix, 1), yn.setFromMatrixColumn(this._camera.matrix, 2), Pt.multiplyScalar(this._focalOffset.x), Rt.multiplyScalar(-this._focalOffset.y), yn.multiplyScalar(this._focalOffset.z), Ee.copy(Pt).add(Rt).add(yn), this._camera.position.add(Ee)), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), Ee.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
    const u = this._needsUpdate;
    return u && !this._updatedLastTime ? (this._hasRested = false, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : u ? (this.dispatchEvent({ type: "update" }), ze(t, this.restThreshold) && ze(n, this.restThreshold) && ze(s, this.restThreshold) && ze(i.x, this.restThreshold) && ze(i.y, this.restThreshold) && ze(i.z, this.restThreshold) && ze(r.x, this.restThreshold) && ze(r.y, this.restThreshold) && ze(r.z, this.restThreshold) && ze(a, this.restThreshold) && !this._hasRested && (this._hasRested = true, this.dispatchEvent({ type: "rest" }))) : !u && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = u, this._needsUpdate = false, u;
  }
  /**
   * Get all state in JSON string
   * @category Methods
   */
  toJSON() {
    return JSON.stringify({
      enabled: this._enabled,
      minDistance: this.minDistance,
      maxDistance: Zn(this.maxDistance),
      minZoom: this.minZoom,
      maxZoom: Zn(this.maxZoom),
      minPolarAngle: this.minPolarAngle,
      maxPolarAngle: Zn(this.maxPolarAngle),
      minAzimuthAngle: Zn(this.minAzimuthAngle),
      maxAzimuthAngle: Zn(this.maxAzimuthAngle),
      smoothTime: this.smoothTime,
      draggingSmoothTime: this.draggingSmoothTime,
      dollySpeed: this.dollySpeed,
      truckSpeed: this.truckSpeed,
      dollyToCursor: this.dollyToCursor,
      verticalDragToForward: this.verticalDragToForward,
      target: this._targetEnd.toArray(),
      position: Ee.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
      zoom: this._zoomEnd,
      focalOffset: this._focalOffsetEnd.toArray(),
      target0: this._target0.toArray(),
      position0: this._position0.toArray(),
      zoom0: this._zoom0,
      focalOffset0: this._focalOffset0.toArray()
    });
  }
  /**
   * Reproduce the control state with JSON. enableTransition is where anim or not in a boolean.
   * @param json
   * @param enableTransition
   * @category Methods
   */
  fromJSON(e, t = false) {
    const n = JSON.parse(e);
    this.enabled = n.enabled, this.minDistance = n.minDistance, this.maxDistance = Kn(n.maxDistance), this.minZoom = n.minZoom, this.maxZoom = Kn(n.maxZoom), this.minPolarAngle = n.minPolarAngle, this.maxPolarAngle = Kn(n.maxPolarAngle), this.minAzimuthAngle = Kn(n.minAzimuthAngle), this.maxAzimuthAngle = Kn(n.maxAzimuthAngle), this.smoothTime = n.smoothTime, this.draggingSmoothTime = n.draggingSmoothTime, this.dollySpeed = n.dollySpeed, this.truckSpeed = n.truckSpeed, this.dollyToCursor = n.dollyToCursor, this.verticalDragToForward = n.verticalDragToForward, this._target0.fromArray(n.target0), this._position0.fromArray(n.position0), this._zoom0 = n.zoom0, this._focalOffset0.fromArray(n.focalOffset0), this.moveTo(n.target[0], n.target[1], n.target[2], t), yt.setFromVector3(Ee.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(yt.theta, yt.phi, t), this.dollyTo(yt.radius, t), this.zoomTo(n.zoom, t), this.setFocalOffset(n.focalOffset[0], n.focalOffset[1], n.focalOffset[2], t), this._needsUpdate = true;
  }
  /**
   * Attach all internal event handlers to enable drag control.
   * @category Methods
   */
  connect(e) {
    if (this._domElement) {
      console.warn("camera-controls is already connected.");
      return;
    }
    e.setAttribute("data-camera-controls-version", vf), this._addAllEventListeners(e), this._getClientRect(this._elementRect);
  }
  /**
   * Detach all internal event handlers to disable drag control.
   */
  disconnect() {
    this.cancel(), this._removeAllEventListeners(), this._domElement && (this._domElement.removeAttribute("data-camera-controls-version"), this._domElement = void 0);
  }
  /**
   * Dispose the cameraControls instance itself, remove all eventListeners.
   * @category Methods
   */
  dispose() {
    this.removeAllEventListeners(), this.disconnect();
  }
  // it's okay to expose public though
  _getTargetDirection(e) {
    return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse);
  }
  // it's okay to expose public though
  _getCameraDirection(e) {
    return this._getTargetDirection(e).negate();
  }
  _findPointerById(e) {
    return this._activePointers.find((t) => t.pointerId === e);
  }
  _findPointerByMouseButton(e) {
    return this._activePointers.find((t) => t.mouseButton === e);
  }
  _disposePointer(e) {
    this._activePointers.splice(this._activePointers.indexOf(e), 1);
  }
  _encloseToBoundary(e, t, n) {
    const s = t.lengthSq();
    if (s === 0)
      return e;
    const i = Le.copy(t).add(e), a = this._boundary.clampPoint(i, On).sub(i), l = a.lengthSq();
    if (l === 0)
      return e.add(t);
    if (l === s)
      return e;
    if (n === 0)
      return e.add(t).add(a);
    {
      const c = 1 + n * l / t.dot(a);
      return e.add(Le.copy(t).multiplyScalar(c)).add(a.multiplyScalar(1 - n));
    }
  }
  _updateNearPlaneCorners() {
    if (gn(this._camera)) {
      const e = this._camera, t = e.near, n = e.getEffectiveFOV() * $n, s = Math.tan(n * 0.5) * t, i = s * e.aspect;
      this._nearPlaneCorners[0].set(-i, -s, 0), this._nearPlaneCorners[1].set(i, -s, 0), this._nearPlaneCorners[2].set(i, s, 0), this._nearPlaneCorners[3].set(-i, s, 0);
    } else if (sn(this._camera)) {
      const e = this._camera, t = 1 / e.zoom, n = e.left * t, s = e.right * t, i = e.top * t, r = e.bottom * t;
      this._nearPlaneCorners[0].set(n, i, 0), this._nearPlaneCorners[1].set(s, i, 0), this._nearPlaneCorners[2].set(s, r, 0), this._nearPlaneCorners[3].set(n, r, 0);
    }
  }
  // lateUpdate
  _collisionTest() {
    let e = 1 / 0;
    if (!(this.colliderMeshes.length >= 1) || bi(this._camera, "_collisionTest"))
      return e;
    const n = this._getTargetDirection(qn);
    Ai.lookAt(oo, n, this._camera.up);
    for (let s = 0; s < 4; s++) {
      const i = Le.copy(this._nearPlaneCorners[s]);
      i.applyMatrix4(Ai);
      const r = On.addVectors(this._target, i);
      Os.set(r, n), Os.far = this._spherical.radius + 1;
      const a = Os.intersectObjects(this.colliderMeshes);
      a.length !== 0 && a[0].distance < e && (e = a[0].distance);
    }
    return e;
  }
  /**
   * Get its client rect and package into given `DOMRect` .
   */
  _getClientRect(e) {
    if (!this._domElement)
      return;
    const t = this._domElement.getBoundingClientRect();
    return e.x = t.left, e.y = t.top, this._viewport ? (e.x += this._viewport.x, e.y += t.height - this._viewport.w - this._viewport.y, e.width = this._viewport.z, e.height = this._viewport.w) : (e.width = t.width, e.height = t.height), e;
  }
  _createOnRestPromise(e) {
    return e ? Promise.resolve() : (this._hasRested = false, this.dispatchEvent({ type: "transitionstart" }), new Promise((t) => {
      const n = () => {
        this.removeEventListener("rest", n), t();
      };
      this.addEventListener("rest", n);
    }));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _addAllEventListeners(e) {
  }
  _removeAllEventListeners() {
  }
  /**
   * backward compatible
   * @deprecated use smoothTime (in seconds) instead
   * @category Properties
   */
  get dampingFactor() {
    return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."), 0;
  }
  /**
   * backward compatible
   * @deprecated use smoothTime (in seconds) instead
   * @category Properties
   */
  set dampingFactor(e) {
    console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
  }
  /**
   * backward compatible
   * @deprecated use draggingSmoothTime (in seconds) instead
   * @category Properties
   */
  get draggingDampingFactor() {
    return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."), 0;
  }
  /**
   * backward compatible
   * @deprecated use draggingSmoothTime (in seconds) instead
   * @category Properties
   */
  set draggingDampingFactor(e) {
    console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
  }
  static createBoundingSphere(e, t = new me.Sphere()) {
    const n = t, s = n.center;
    Fn.makeEmpty(), e.traverseVisible((r) => {
      r.isMesh && Fn.expandByObject(r);
    }), Fn.getCenter(s);
    let i = 0;
    return e.traverseVisible((r) => {
      if (!r.isMesh)
        return;
      const a = r, l = a.geometry.clone();
      l.applyMatrix4(a.matrixWorld);
      const u = l.attributes.position;
      for (let h = 0, m = u.count; h < m; h++)
        Ee.fromBufferAttribute(u, h), i = Math.max(i, s.distanceToSquared(Ee));
    }), n.radius = Math.sqrt(i), n;
  }
};
var wf = ["min-polar-angle", "max-polar-angle", "min-azimuth-angle", "max-azimuth-angle", "distance", "min-distance", "max-distance", "infinity-dolly", "min-zoom", "max-zoom", "smooth-time", "dragging-smooth-time", "max-speed", "azimuth-rotate-speed", "polar-rotate-speed", "dolly-speed", "dolly-drag-inverted", "truck-speed", "dolly-to-cursor", "drag-to-offset", "vertical-drag-to-forward", "boundary-friction", "rest-threshold", "collider-meshes", "args"];
var Jm = defineComponent({
  __name: "CameraControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: {},
    domElement: {},
    minPolarAngle: { default: 0 },
    maxPolarAngle: { default: Math.PI },
    minAzimuthAngle: { default: -1 / 0 },
    maxAzimuthAngle: { default: 1 / 0 },
    distance: { default: () => dr().camera.value.position.z },
    minDistance: { default: Number.EPSILON },
    maxDistance: { default: 1 / 0 },
    infinityDolly: { type: Boolean, default: false },
    minZoom: { default: 0.01 },
    maxZoom: { default: 1 / 0 },
    smoothTime: { default: 0.25 },
    draggingSmoothTime: { default: 0.125 },
    maxSpeed: { default: 1 / 0 },
    azimuthRotateSpeed: { default: 1 },
    polarRotateSpeed: { default: 1 },
    dollySpeed: { default: 1 },
    dollyDragInverted: { type: Boolean, default: false },
    truckSpeed: { default: 2 },
    dollyToCursor: { type: Boolean, default: false },
    dragToOffset: { type: Boolean, default: false },
    verticalDragToForward: { type: Boolean, default: false },
    boundaryFriction: { default: 0 },
    restThreshold: { default: 0.01 },
    colliderMeshes: { default: () => [] },
    mouseButtons: {},
    touches: {}
  },
  emits: ["change", "start", "end"],
  setup(o, { expose: e, emit: t }) {
    const n = o, s = t, {
      makeDefault: i,
      minPolarAngle: r,
      maxPolarAngle: a,
      minAzimuthAngle: l,
      maxAzimuthAngle: c,
      distance: u,
      minDistance: h,
      maxDistance: m,
      infinityDolly: p,
      minZoom: v,
      maxZoom: _,
      smoothTime: y,
      draggingSmoothTime: E,
      maxSpeed: R,
      azimuthRotateSpeed: T,
      polarRotateSpeed: g,
      dollySpeed: A2,
      dollyDragInverted: x,
      truckSpeed: M,
      dollyToCursor: d,
      dragToOffset: w,
      verticalDragToForward: f,
      boundaryFriction: P,
      restThreshold: I,
      colliderMeshes: K
    } = toRefs(n), N = {
      Box3,
      MathUtils: {
        clamp: MathUtils.clamp
      },
      Matrix4,
      Quaternion,
      Raycaster,
      Sphere,
      Spherical,
      Vector2,
      Vector3,
      Vector4
    };
    ls.install({ THREE: N });
    const { camera: Z, renderer: W, extend: X, controls: V } = dr(), ne = ref(null);
    X({ CameraControls: ls }), watchEffect(() => {
      se(), ne.value && i.value ? V.value = ne.value : V.value = null;
    });
    function se() {
      Ve(ne.value, "update", () => s("change", ne.value)), Ve(ne.value, "controlend", () => s("end", ne.value)), Ve(ne.value, "controlstart", () => s("start", ne.value));
    }
    const { onLoop: he } = re();
    return he(({ delta: H }) => {
      var k, b;
      (k = ne.value) != null && k.enabled && ((b = ne.value) == null || b.update(H));
    }), onUnmounted(() => {
      ne.value && ne.value.disconnect();
    }), e({
      value: ne
    }), (H, k) => (H.camera || unref(Z)) && (H.domElement || unref(W)) ? (openBlock(), createElementBlock("TresCameraControls", {
      key: 0,
      ref_key: "controlsRef",
      ref: ne,
      "min-polar-angle": unref(r),
      "max-polar-angle": unref(a),
      "min-azimuth-angle": unref(l),
      "max-azimuth-angle": unref(c),
      distance: unref(u),
      "min-distance": unref(h),
      "max-distance": unref(m),
      "infinity-dolly": unref(p),
      "min-zoom": unref(v),
      "max-zoom": unref(_),
      "smooth-time": unref(y),
      "dragging-smooth-time": unref(E),
      "max-speed": unref(R),
      "azimuth-rotate-speed": unref(T),
      "polar-rotate-speed": unref(g),
      "dolly-speed": unref(A2),
      "dolly-drag-inverted": unref(x),
      "truck-speed": unref(M),
      "dolly-to-cursor": unref(d),
      "drag-to-offset": unref(w),
      "vertical-drag-to-forward": unref(f),
      "boundary-friction": unref(P),
      "rest-threshold": unref(I),
      "collider-meshes": unref(K),
      args: [H.camera || unref(Z), H.domElement || unref(W).domElement]
    }, null, 8, wf)) : createCommentVNode("", true);
  }
});
var Tf = class extends MeshStandardMaterial {
  constructor(t = {}) {
    super(t);
    oe(this, "_time");
    oe(this, "_factor");
    this.setValues(t), this._time = { value: 0 }, this._factor = { value: 1 };
  }
  onBeforeCompile(t) {
    t.uniforms || (t.uniforms = {}), t.uniforms.time = this._time, t.uniforms.factor = this._factor, t.vertexShader = `
        uniform float time;
        uniform float factor;
        ${t.vertexShader}
      `, t.vertexShader = t.vertexShader.replace(
      "#include <begin_vertex>",
      `float theta = sin( time + position.y ) / 2.0 * factor;
          float c = cos( theta );
          float s = sin( theta );
          mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
          vec3 transformed = vec3( position ) * m;
          vNormal = vNormal * m;`
    );
  }
  get time() {
    return this._time.value;
  }
  set time(t) {
    this._time.value = t;
  }
  get factor() {
    return this._factor.value;
  }
  set factor(t) {
    this._factor.value = t;
  }
};
var bf = ["factor"];
var eg = defineComponent({
  __name: "index",
  props: {
    speed: { default: 1 },
    factor: { default: 1 }
  },
  setup(o) {
    const e = o, t = shallowRef(), { extend: n } = dr();
    n({ MeshWobbleMaterial: Tf });
    const { onLoop: s } = re();
    return s(({ elapsed: i }) => {
      t.value && (t.value.time = i * (e == null ? void 0 : e.speed));
    }), (i, r) => (openBlock(), createElementBlock("TresMeshWobbleMaterial", mergeProps({
      ref_key: "materialRef",
      ref: t,
      factor: i.factor
    }, i.$attrs), null, 16, bf));
  }
});
function cn2(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function Ef(o, e) {
  return (o % e + e) % e;
}
function Mf(o, e, t, n, s) {
  return n + (o - e) * (s - n) / (t - e);
}
function Pi(o, e, t) {
  return (1 - t) * o + t * e;
}
var yr = class _yr {
  constructor(e = 0, t = 0) {
    _yr.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(cn2(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), i = this.x - e.x, r = this.y - e.y;
    return this.x = i * n - r * s + e.x, this.y = i * s + r * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
var Sf = "";
var rn = "srgb";
var vr = "srgb-linear";
var Af = "display-p3";
var Ha = "display-p3-linear";
var tr = "linear";
var ho = "srgb";
var fo = "rec709";
var po = "p3";
var gs = class _gs {
  constructor(e, t, n, s, i, r, a, l, c) {
    _gs.prototype.isMatrix3 = true, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, i, r, a, l, c);
  }
  set(e, t, n, s, i, r, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = s, u[2] = a, u[3] = t, u[4] = i, u[5] = l, u[6] = n, u[7] = r, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, i = this.elements, r = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], m = n[2], p = n[5], v = n[8], _ = s[0], y = s[3], E = s[6], R = s[1], T = s[4], g = s[7], A2 = s[2], x = s[5], M = s[8];
    return i[0] = r * _ + a * R + l * A2, i[3] = r * y + a * T + l * x, i[6] = r * E + a * g + l * M, i[1] = c * _ + u * R + h * A2, i[4] = c * y + u * T + h * x, i[7] = c * E + u * g + h * M, i[2] = m * _ + p * R + v * A2, i[5] = m * y + p * T + v * x, i[8] = m * E + p * g + v * M, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], i = e[3], r = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * r * u - t * a * c - n * i * u + n * a * l + s * i * c - s * r * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], i = e[3], r = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * r - a * c, m = a * l - u * i, p = c * i - r * l, v = t * h + n * m + s * p;
    if (v === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / v;
    return e[0] = h * _, e[1] = (s * c - u * n) * _, e[2] = (a * n - s * r) * _, e[3] = m * _, e[4] = (u * t - s * l) * _, e[5] = (s * i - a * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (r * t - n * i) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, i, r, a) {
    const l = Math.cos(i), c = Math.sin(i);
    return this.set(
      n * l,
      n * c,
      -n * (l * r + c * a) + r + e,
      -s * c,
      s * l,
      -s * (-c * r + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Ri.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Ri.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Ri.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s])
        return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var Ri = new gs();
var mo = new gs().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
);
var go = new gs().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
);
var Fs = {
  [vr]: {
    transfer: tr,
    primaries: fo,
    toReference: (o) => o,
    fromReference: (o) => o
  },
  [rn]: {
    transfer: ho,
    primaries: fo,
    toReference: (o) => o.convertSRGBToLinear(),
    fromReference: (o) => o.convertLinearToSRGB()
  },
  [Ha]: {
    transfer: tr,
    primaries: po,
    toReference: (o) => o.applyMatrix3(go),
    fromReference: (o) => o.applyMatrix3(mo)
  },
  [Af]: {
    transfer: ho,
    primaries: po,
    toReference: (o) => o.convertSRGBToLinear().applyMatrix3(go),
    fromReference: (o) => o.applyMatrix3(mo).convertLinearToSRGB()
  }
};
var Pf = /* @__PURE__ */ new Set([vr, Ha]);
var Tt = {
  enabled: true,
  _workingColorSpace: vr,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(o) {
    if (!Pf.has(o))
      throw new Error(`Unsupported working color space, "${o}".`);
    this._workingColorSpace = o;
  },
  convert: function(o, e, t) {
    if (this.enabled === false || e === t || !e || !t)
      return o;
    const n = Fs[e].toReference, s = Fs[t].fromReference;
    return s(n(o));
  },
  fromWorkingColorSpace: function(o, e) {
    return this.convert(o, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(o, e) {
    return this.convert(o, e, this._workingColorSpace);
  },
  getPrimaries: function(o) {
    return Fs[o].primaries;
  },
  getTransfer: function(o) {
    return o === Sf ? tr : Fs[o].transfer;
  }
};
function Ci(o) {
  return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function Ii(o) {
  return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
var Ga = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
var Jt = { h: 0, s: 0, l: 0 };
var ks = { h: 0, s: 0, l: 0 };
function Di(o, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
}
var Zs = class {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = rn) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Tt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = Tt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Tt.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = Tt.workingColorSpace) {
    if (e = Ef(e, 1), t = cn2(t, 0, 1), n = cn2(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - i;
      this.r = Di(r, i, e + 1 / 3), this.g = Di(r, i, e), this.b = Di(r, i, e - 1 / 3);
    }
    return Tt.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = rn) {
    function n(i) {
      i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let i;
      const r = s[1], a = s[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(i[4]), this.setRGB(
              Math.min(255, parseInt(i[1], 10)) / 255,
              Math.min(255, parseInt(i[2], 10)) / 255,
              Math.min(255, parseInt(i[3], 10)) / 255,
              t
            );
          if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(i[4]), this.setRGB(
              Math.min(100, parseInt(i[1], 10)) / 100,
              Math.min(100, parseInt(i[2], 10)) / 100,
              Math.min(100, parseInt(i[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(i[4]), this.setHSL(
              parseFloat(i[1]) / 360,
              parseFloat(i[2]) / 100,
              parseFloat(i[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const i = s[1], r = i.length;
      if (r === 3)
        return this.setRGB(
          parseInt(i.charAt(0), 16) / 15,
          parseInt(i.charAt(1), 16) / 15,
          parseInt(i.charAt(2), 16) / 15,
          t
        );
      if (r === 6)
        return this.setHex(parseInt(i, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = rn) {
    const n = Ga[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ci(e.r), this.g = Ci(e.g), this.b = Ci(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ii(e.r), this.g = Ii(e.g), this.b = Ii(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = rn) {
    return Tt.fromWorkingColorSpace(st.copy(this), e), Math.round(cn2(st.r * 255, 0, 255)) * 65536 + Math.round(cn2(st.g * 255, 0, 255)) * 256 + Math.round(cn2(st.b * 255, 0, 255));
  }
  getHexString(e = rn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Tt.workingColorSpace) {
    Tt.fromWorkingColorSpace(st.copy(this), t);
    const n = st.r, s = st.g, i = st.b, r = Math.max(n, s, i), a = Math.min(n, s, i);
    let l, c;
    const u = (a + r) / 2;
    if (a === r)
      l = 0, c = 0;
    else {
      const h = r - a;
      switch (c = u <= 0.5 ? h / (r + a) : h / (2 - r - a), r) {
        case n:
          l = (s - i) / h + (s < i ? 6 : 0);
          break;
        case s:
          l = (i - n) / h + 2;
          break;
        case i:
          l = (n - s) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Tt.workingColorSpace) {
    return Tt.fromWorkingColorSpace(st.copy(this), t), e.r = st.r, e.g = st.g, e.b = st.b, e;
  }
  getStyle(e = rn) {
    Tt.fromWorkingColorSpace(st.copy(this), e);
    const t = st.r, n = st.g, s = st.b;
    return e !== rn ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Jt), this.setHSL(Jt.h + e, Jt.s + t, Jt.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Jt), e.getHSL(ks);
    const n = Pi(Jt.h, ks.h, t), s = Pi(Jt.s, ks.s, t), i = Pi(Jt.l, ks.l, t);
    return this.setHSL(n, s, i), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, i = e.elements;
    return this.r = i[0] * t + i[3] * n + i[6] * s, this.g = i[1] * t + i[4] * n + i[7] * s, this.b = i[2] * t + i[5] * n + i[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
var st = new Zs();
Zs.NAMES = Ga;
var Rf = class extends MeshStandardMaterial {
  constructor(t = {}) {
    super();
    oe(this, "isMeshPhysicalMaterial");
    oe(this, "clearcoatMap");
    oe(this, "clearcoatRoughness");
    oe(this, "clearcoatRoughnessMap");
    oe(this, "clearcoatNormalScale");
    oe(this, "clearcoatNormalMap");
    oe(this, "ior");
    oe(this, "transmissionMap");
    oe(this, "thickness");
    oe(this, "thicknessMap");
    oe(this, "attenuationDistance");
    oe(this, "attenuationColor");
    oe(this, "specularIntensity");
    oe(this, "specularIntensityMap");
    oe(this, "specularColor");
    oe(this, "specularColorMap");
    oe(this, "_clearcoat");
    oe(this, "_transmission");
    this.isMeshPhysicalMaterial = true, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new yr(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get() {
        return cn2(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set(n) {
        this.ior = (1 + 0.4 * n) / (1 - 0.4 * n);
      }
    }), this.roughness = 0, this.transmissionMap = null, this.thickness = 0.5, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Zs(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Zs(1, 1, 1), this.specularColorMap = null, this._clearcoat = 0.5, this._transmission = 1, this.setValues(t);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
};
var Cf = Rf;
var tg = defineComponent({
  __name: "index",
  setup(o, { expose: e }) {
    const t = shallowRef(), { extend: n } = dr();
    return n({ MeshGlassMaterial: Cf }), e({ MeshGlassMaterialClass: t }), (s, i) => (openBlock(), createElementBlock("TresMeshGlassMaterial", {
      ref_key: "MeshGlassMaterialClass",
      ref: t
    }, null, 512));
  }
});
var If = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ys(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Us(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ja = { exports: {} };
(function(o, e) {
  (function(t) {
    o.exports = t();
  })(function() {
    return function t(n, s, i) {
      function r(c, u) {
        if (!s[c]) {
          if (!n[c]) {
            var h = typeof Us == "function" && Us;
            if (!u && h)
              return h(c, true);
            if (a)
              return a(c, true);
            throw new Error("Cannot find module '" + c + "'");
          }
          u = s[c] = { exports: {} }, n[c][0].call(u.exports, function(m) {
            var p = n[c][1][m];
            return r(p || m);
          }, u, u.exports, t, n, s, i);
        }
        return s[c].exports;
      }
      for (var a = typeof Us == "function" && Us, l = 0; l < i.length; l++)
        r(i[l]);
      return r;
    }({ 1: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        var v = t("crypto");
        function _(x, M) {
          M = R(x, M);
          var d;
          return (d = M.algorithm !== "passthrough" ? v.createHash(M.algorithm) : new A2()).write === void 0 && (d.write = d.update, d.end = d.update), g(M, d).dispatch(x), d.update || d.end(""), d.digest ? d.digest(M.encoding === "buffer" ? void 0 : M.encoding) : (x = d.read(), M.encoding !== "buffer" ? x.toString(M.encoding) : x);
        }
        (s = n.exports = _).sha1 = function(x) {
          return _(x);
        }, s.keys = function(x) {
          return _(x, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
        }, s.MD5 = function(x) {
          return _(x, { algorithm: "md5", encoding: "hex" });
        }, s.keysMD5 = function(x) {
          return _(x, { algorithm: "md5", encoding: "hex", excludeValues: true });
        };
        var y = v.getHashes ? v.getHashes().slice() : ["sha1", "md5"], E = (y.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
        function R(x, M) {
          var d = {};
          if (d.algorithm = (M = M || {}).algorithm || "sha1", d.encoding = M.encoding || "hex", d.excludeValues = !!M.excludeValues, d.algorithm = d.algorithm.toLowerCase(), d.encoding = d.encoding.toLowerCase(), d.ignoreUnknown = M.ignoreUnknown === true, d.respectType = M.respectType !== false, d.respectFunctionNames = M.respectFunctionNames !== false, d.respectFunctionProperties = M.respectFunctionProperties !== false, d.unorderedArrays = M.unorderedArrays === true, d.unorderedSets = M.unorderedSets !== false, d.unorderedObjects = M.unorderedObjects !== false, d.replacer = M.replacer || void 0, d.excludeKeys = M.excludeKeys || void 0, x === void 0)
            throw new Error("Object argument required.");
          for (var w = 0; w < y.length; ++w)
            y[w].toLowerCase() === d.algorithm.toLowerCase() && (d.algorithm = y[w]);
          if (y.indexOf(d.algorithm) === -1)
            throw new Error('Algorithm "' + d.algorithm + '"  not supported. supported values: ' + y.join(", "));
          if (E.indexOf(d.encoding) === -1 && d.algorithm !== "passthrough")
            throw new Error('Encoding "' + d.encoding + '"  not supported. supported values: ' + E.join(", "));
          return d;
        }
        function T(x) {
          if (typeof x == "function")
            return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(x)) != null;
        }
        function g(x, M, d) {
          d = d || [];
          function w(f) {
            return M.update ? M.update(f, "utf8") : M.write(f, "utf8");
          }
          return { dispatch: function(f) {
            return this["_" + ((f = x.replacer ? x.replacer(f) : f) === null ? "null" : typeof f)](f);
          }, _object: function(f) {
            var P, I = Object.prototype.toString.call(f), K = /\[object (.*)\]/i.exec(I);
            if (K = (K = K ? K[1] : "unknown:[" + I + "]").toLowerCase(), 0 <= (I = d.indexOf(f)))
              return this.dispatch("[CIRCULAR:" + I + "]");
            if (d.push(f), a !== void 0 && a.isBuffer && a.isBuffer(f))
              return w("buffer:"), w(f);
            if (K === "object" || K === "function" || K === "asyncfunction")
              return I = Object.keys(f), x.unorderedObjects && (I = I.sort()), x.respectType === false || T(f) || I.splice(0, 0, "prototype", "__proto__", "constructor"), x.excludeKeys && (I = I.filter(function(N) {
                return !x.excludeKeys(N);
              })), w("object:" + I.length + ":"), P = this, I.forEach(function(N) {
                P.dispatch(N), w(":"), x.excludeValues || P.dispatch(f[N]), w(",");
              });
            if (!this["_" + K]) {
              if (x.ignoreUnknown)
                return w("[" + K + "]");
              throw new Error('Unknown object type "' + K + '"');
            }
            this["_" + K](f);
          }, _array: function(f, N) {
            N = N !== void 0 ? N : x.unorderedArrays !== false;
            var I = this;
            if (w("array:" + f.length + ":"), !N || f.length <= 1)
              return f.forEach(function(Z) {
                return I.dispatch(Z);
              });
            var K = [], N = f.map(function(Z) {
              var W = new A2(), X = d.slice();
              return g(x, W, X).dispatch(Z), K = K.concat(X.slice(d.length)), W.read().toString();
            });
            return d = d.concat(K), N.sort(), this._array(N, false);
          }, _date: function(f) {
            return w("date:" + f.toJSON());
          }, _symbol: function(f) {
            return w("symbol:" + f.toString());
          }, _error: function(f) {
            return w("error:" + f.toString());
          }, _boolean: function(f) {
            return w("bool:" + f.toString());
          }, _string: function(f) {
            w("string:" + f.length + ":"), w(f.toString());
          }, _function: function(f) {
            w("fn:"), T(f) ? this.dispatch("[native]") : this.dispatch(f.toString()), x.respectFunctionNames !== false && this.dispatch("function-name:" + String(f.name)), x.respectFunctionProperties && this._object(f);
          }, _number: function(f) {
            return w("number:" + f.toString());
          }, _xml: function(f) {
            return w("xml:" + f.toString());
          }, _null: function() {
            return w("Null");
          }, _undefined: function() {
            return w("Undefined");
          }, _regexp: function(f) {
            return w("regex:" + f.toString());
          }, _uint8array: function(f) {
            return w("uint8array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _uint8clampedarray: function(f) {
            return w("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(f));
          }, _int8array: function(f) {
            return w("int8array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _uint16array: function(f) {
            return w("uint16array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _int16array: function(f) {
            return w("int16array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _uint32array: function(f) {
            return w("uint32array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _int32array: function(f) {
            return w("int32array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _float32array: function(f) {
            return w("float32array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _float64array: function(f) {
            return w("float64array:"), this.dispatch(Array.prototype.slice.call(f));
          }, _arraybuffer: function(f) {
            return w("arraybuffer:"), this.dispatch(new Uint8Array(f));
          }, _url: function(f) {
            return w("url:" + f.toString());
          }, _map: function(f) {
            return w("map:"), f = Array.from(f), this._array(f, x.unorderedSets !== false);
          }, _set: function(f) {
            return w("set:"), f = Array.from(f), this._array(f, x.unorderedSets !== false);
          }, _file: function(f) {
            return w("file:"), this.dispatch([f.name, f.size, f.type, f.lastModfied]);
          }, _blob: function() {
            if (x.ignoreUnknown)
              return w("[blob]");
            throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
          }, _domwindow: function() {
            return w("domwindow");
          }, _bigint: function(f) {
            return w("bigint:" + f.toString());
          }, _process: function() {
            return w("process");
          }, _timer: function() {
            return w("timer");
          }, _pipe: function() {
            return w("pipe");
          }, _tcp: function() {
            return w("tcp");
          }, _udp: function() {
            return w("udp");
          }, _tty: function() {
            return w("tty");
          }, _statwatcher: function() {
            return w("statwatcher");
          }, _securecontext: function() {
            return w("securecontext");
          }, _connection: function() {
            return w("connection");
          }, _zlib: function() {
            return w("zlib");
          }, _context: function() {
            return w("context");
          }, _nodescript: function() {
            return w("nodescript");
          }, _httpparser: function() {
            return w("httpparser");
          }, _dataview: function() {
            return w("dataview");
          }, _signal: function() {
            return w("signal");
          }, _fsevent: function() {
            return w("fsevent");
          }, _tlswrap: function() {
            return w("tlswrap");
          } };
        }
        function A2() {
          return { buf: "", write: function(x) {
            this.buf += x;
          }, end: function(x) {
            this.buf += x;
          }, read: function() {
            return this.buf;
          } };
        }
        s.writeToStream = function(x, M, d) {
          return d === void 0 && (d = M, M = {}), g(M = R(x, M), d).dispatch(x);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
    }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        (function(v) {
          var _ = typeof Uint8Array < "u" ? Uint8Array : Array, y = 43, E = 47, R = 48, T = 97, g = 65, A2 = 45, x = 95;
          function M(d) {
            return d = d.charCodeAt(0), d === y || d === A2 ? 62 : d === E || d === x ? 63 : d < R ? -1 : d < R + 10 ? d - R + 26 + 26 : d < g + 26 ? d - g : d < T + 26 ? d - T + 26 : void 0;
          }
          v.toByteArray = function(d) {
            var w, f;
            if (0 < d.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var P = d.length, P = d.charAt(P - 2) === "=" ? 2 : d.charAt(P - 1) === "=" ? 1 : 0, I = new _(3 * d.length / 4 - P), K = 0 < P ? d.length - 4 : d.length, N = 0;
            function Z(W) {
              I[N++] = W;
            }
            for (w = 0; w < K; w += 4, 0)
              Z((16711680 & (f = M(d.charAt(w)) << 18 | M(d.charAt(w + 1)) << 12 | M(d.charAt(w + 2)) << 6 | M(d.charAt(w + 3)))) >> 16), Z((65280 & f) >> 8), Z(255 & f);
            return P == 2 ? Z(255 & (f = M(d.charAt(w)) << 2 | M(d.charAt(w + 1)) >> 4)) : P == 1 && (Z((f = M(d.charAt(w)) << 10 | M(d.charAt(w + 1)) << 4 | M(d.charAt(w + 2)) >> 2) >> 8 & 255), Z(255 & f)), I;
          }, v.fromByteArray = function(d) {
            var w, f, P, I, K = d.length % 3, N = "";
            function Z(W) {
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(W);
            }
            for (w = 0, P = d.length - K; w < P; w += 3)
              f = (d[w] << 16) + (d[w + 1] << 8) + d[w + 2], N += Z((I = f) >> 18 & 63) + Z(I >> 12 & 63) + Z(I >> 6 & 63) + Z(63 & I);
            switch (K) {
              case 1:
                N = (N += Z((f = d[d.length - 1]) >> 2)) + Z(f << 4 & 63) + "==";
                break;
              case 2:
                N = (N = (N += Z((f = (d[d.length - 2] << 8) + d[d.length - 1]) >> 10)) + Z(f >> 4 & 63)) + Z(f << 2 & 63) + "=";
            }
            return N;
          };
        })(s === void 0 ? this.base64js = {} : s);
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
    }, { buffer: 3, lYpoI2: 11 }], 3: [function(t, n, s) {
      (function(i, r, y, l, c, u, h, m, p) {
        var v = t("base64-js"), _ = t("ieee754");
        function y(S, C, D) {
          if (!(this instanceof y))
            return new y(S, C, D);
          var G, $, Y, te, O = typeof S;
          if (C === "base64" && O == "string")
            for (S = (te = S).trim ? te.trim() : te.replace(/^\s+|\s+$/g, ""); S.length % 4 != 0; )
              S += "=";
          if (O == "number")
            G = V(S);
          else if (O == "string")
            G = y.byteLength(S, C);
          else {
            if (O != "object")
              throw new Error("First argument needs to be a number, array or string.");
            G = V(S.length);
          }
          if (y._useTypedArrays ? $ = y._augment(new Uint8Array(G)) : (($ = this).length = G, $._isBuffer = true), y._useTypedArrays && typeof S.byteLength == "number")
            $._set(S);
          else if (ne(te = S) || y.isBuffer(te) || te && typeof te == "object" && typeof te.length == "number")
            for (Y = 0; Y < G; Y++)
              y.isBuffer(S) ? $[Y] = S.readUInt8(Y) : $[Y] = S[Y];
          else if (O == "string")
            $.write(S, 0, C);
          else if (O == "number" && !y._useTypedArrays && !D)
            for (Y = 0; Y < G; Y++)
              $[Y] = 0;
          return $;
        }
        function E(S, C, D, G) {
          return y._charsWritten = k(function($) {
            for (var Y = [], te = 0; te < $.length; te++)
              Y.push(255 & $.charCodeAt(te));
            return Y;
          }(C), S, D, G);
        }
        function R(S, C, D, G) {
          return y._charsWritten = k(function($) {
            for (var Y, te, O = [], L = 0; L < $.length; L++)
              te = $.charCodeAt(L), Y = te >> 8, te = te % 256, O.push(te), O.push(Y);
            return O;
          }(C), S, D, G);
        }
        function T(S, C, D) {
          var G = "";
          D = Math.min(S.length, D);
          for (var $ = C; $ < D; $++)
            G += String.fromCharCode(S[$]);
          return G;
        }
        function g(S, C, D, Y) {
          Y || (B(typeof D == "boolean", "missing or invalid endian"), B(C != null, "missing offset"), B(C + 1 < S.length, "Trying to read beyond buffer length"));
          var $, Y = S.length;
          if (!(Y <= C))
            return D ? ($ = S[C], C + 1 < Y && ($ |= S[C + 1] << 8)) : ($ = S[C] << 8, C + 1 < Y && ($ |= S[C + 1])), $;
        }
        function A2(S, C, D, Y) {
          Y || (B(typeof D == "boolean", "missing or invalid endian"), B(C != null, "missing offset"), B(C + 3 < S.length, "Trying to read beyond buffer length"));
          var $, Y = S.length;
          if (!(Y <= C))
            return D ? (C + 2 < Y && ($ = S[C + 2] << 16), C + 1 < Y && ($ |= S[C + 1] << 8), $ |= S[C], C + 3 < Y && ($ += S[C + 3] << 24 >>> 0)) : (C + 1 < Y && ($ = S[C + 1] << 16), C + 2 < Y && ($ |= S[C + 2] << 8), C + 3 < Y && ($ |= S[C + 3]), $ += S[C] << 24 >>> 0), $;
        }
        function x(S, C, D, G) {
          if (G || (B(typeof D == "boolean", "missing or invalid endian"), B(C != null, "missing offset"), B(C + 1 < S.length, "Trying to read beyond buffer length")), !(S.length <= C))
            return G = g(S, C, D, true), 32768 & G ? -1 * (65535 - G + 1) : G;
        }
        function M(S, C, D, G) {
          if (G || (B(typeof D == "boolean", "missing or invalid endian"), B(C != null, "missing offset"), B(C + 3 < S.length, "Trying to read beyond buffer length")), !(S.length <= C))
            return G = A2(S, C, D, true), 2147483648 & G ? -1 * (4294967295 - G + 1) : G;
        }
        function d(S, C, D, G) {
          return G || (B(typeof D == "boolean", "missing or invalid endian"), B(C + 3 < S.length, "Trying to read beyond buffer length")), _.read(S, C, D, 23, 4);
        }
        function w(S, C, D, G) {
          return G || (B(typeof D == "boolean", "missing or invalid endian"), B(C + 7 < S.length, "Trying to read beyond buffer length")), _.read(S, C, D, 52, 8);
        }
        function f(S, C, D, G, $) {
          if ($ || (B(C != null, "missing value"), B(typeof G == "boolean", "missing or invalid endian"), B(D != null, "missing offset"), B(D + 1 < S.length, "trying to write beyond buffer length"), U(C, 65535)), $ = S.length, !($ <= D))
            for (var Y = 0, te = Math.min($ - D, 2); Y < te; Y++)
              S[D + Y] = (C & 255 << 8 * (G ? Y : 1 - Y)) >>> 8 * (G ? Y : 1 - Y);
        }
        function P(S, C, D, G, $) {
          if ($ || (B(C != null, "missing value"), B(typeof G == "boolean", "missing or invalid endian"), B(D != null, "missing offset"), B(D + 3 < S.length, "trying to write beyond buffer length"), U(C, 4294967295)), $ = S.length, !($ <= D))
            for (var Y = 0, te = Math.min($ - D, 4); Y < te; Y++)
              S[D + Y] = C >>> 8 * (G ? Y : 3 - Y) & 255;
        }
        function I(S, C, D, G, $) {
          $ || (B(C != null, "missing value"), B(typeof G == "boolean", "missing or invalid endian"), B(D != null, "missing offset"), B(D + 1 < S.length, "Trying to write beyond buffer length"), J(C, 32767, -32768)), S.length <= D || f(S, 0 <= C ? C : 65535 + C + 1, D, G, $);
        }
        function K(S, C, D, G, $) {
          $ || (B(C != null, "missing value"), B(typeof G == "boolean", "missing or invalid endian"), B(D != null, "missing offset"), B(D + 3 < S.length, "Trying to write beyond buffer length"), J(C, 2147483647, -2147483648)), S.length <= D || P(S, 0 <= C ? C : 4294967295 + C + 1, D, G, $);
        }
        function N(S, C, D, G, $) {
          $ || (B(C != null, "missing value"), B(typeof G == "boolean", "missing or invalid endian"), B(D != null, "missing offset"), B(D + 3 < S.length, "Trying to write beyond buffer length"), F(C, 34028234663852886e22, -34028234663852886e22)), S.length <= D || _.write(S, C, D, G, 23, 4);
        }
        function Z(S, C, D, G, $) {
          $ || (B(C != null, "missing value"), B(typeof G == "boolean", "missing or invalid endian"), B(D != null, "missing offset"), B(D + 7 < S.length, "Trying to write beyond buffer length"), F(C, 17976931348623157e292, -17976931348623157e292)), S.length <= D || _.write(S, C, D, G, 52, 8);
        }
        s.Buffer = y, s.SlowBuffer = y, s.INSPECT_MAX_BYTES = 50, y.poolSize = 8192, y._useTypedArrays = function() {
          try {
            var S = new ArrayBuffer(0), C = new Uint8Array(S);
            return C.foo = function() {
              return 42;
            }, C.foo() === 42 && typeof C.subarray == "function";
          } catch {
            return false;
          }
        }(), y.isEncoding = function(S) {
          switch (String(S).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, y.isBuffer = function(S) {
          return !(S == null || !S._isBuffer);
        }, y.byteLength = function(S, C) {
          var D;
          switch (S += "", C || "utf8") {
            case "hex":
              D = S.length / 2;
              break;
            case "utf8":
            case "utf-8":
              D = he(S).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              D = S.length;
              break;
            case "base64":
              D = H(S).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              D = 2 * S.length;
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return D;
        }, y.concat = function(S, C) {
          if (B(ne(S), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), S.length === 0)
            return new y(0);
          if (S.length === 1)
            return S[0];
          if (typeof C != "number")
            for ($ = C = 0; $ < S.length; $++)
              C += S[$].length;
          for (var D = new y(C), G = 0, $ = 0; $ < S.length; $++) {
            var Y = S[$];
            Y.copy(D, G), G += Y.length;
          }
          return D;
        }, y.prototype.write = function(S, C, D, G) {
          isFinite(C) ? isFinite(D) || (G = D, D = void 0) : (L = G, G = C, C = D, D = L), C = Number(C) || 0;
          var $, Y, te, O, L = this.length - C;
          switch ((!D || L < (D = Number(D))) && (D = L), G = String(G || "utf8").toLowerCase()) {
            case "hex":
              $ = function(re2, ce, be, Me) {
                be = Number(be) || 0;
                var Se = re2.length - be;
                (!Me || Se < (Me = Number(Me))) && (Me = Se), B((Se = ce.length) % 2 == 0, "Invalid hex string"), Se / 2 < Me && (Me = Se / 2);
                for (var qe = 0; qe < Me; qe++) {
                  var kt = parseInt(ce.substr(2 * qe, 2), 16);
                  B(!isNaN(kt), "Invalid hex string"), re2[be + qe] = kt;
                }
                return y._charsWritten = 2 * qe, qe;
              }(this, S, C, D);
              break;
            case "utf8":
            case "utf-8":
              Y = this, te = C, O = D, $ = y._charsWritten = k(he(S), Y, te, O);
              break;
            case "ascii":
            case "binary":
              $ = E(this, S, C, D);
              break;
            case "base64":
              Y = this, te = C, O = D, $ = y._charsWritten = k(H(S), Y, te, O);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              $ = R(this, S, C, D);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return $;
        }, y.prototype.toString = function(S, C, D) {
          var G, $, Y, te, O = this;
          if (S = String(S || "utf8").toLowerCase(), C = Number(C) || 0, (D = D !== void 0 ? Number(D) : O.length) === C)
            return "";
          switch (S) {
            case "hex":
              G = function(L, re2, ce) {
                var be = L.length;
                (!re2 || re2 < 0) && (re2 = 0), (!ce || ce < 0 || be < ce) && (ce = be);
                for (var Me = "", Se = re2; Se < ce; Se++)
                  Me += se(L[Se]);
                return Me;
              }(O, C, D);
              break;
            case "utf8":
            case "utf-8":
              G = function(L, re2, ce) {
                var be = "", Me = "";
                ce = Math.min(L.length, ce);
                for (var Se = re2; Se < ce; Se++)
                  L[Se] <= 127 ? (be += b(Me) + String.fromCharCode(L[Se]), Me = "") : Me += "%" + L[Se].toString(16);
                return be + b(Me);
              }(O, C, D);
              break;
            case "ascii":
            case "binary":
              G = T(O, C, D);
              break;
            case "base64":
              $ = O, te = D, G = (Y = C) === 0 && te === $.length ? v.fromByteArray($) : v.fromByteArray($.slice(Y, te));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              G = function(L, re2, ce) {
                for (var be = L.slice(re2, ce), Me = "", Se = 0; Se < be.length; Se += 2)
                  Me += String.fromCharCode(be[Se] + 256 * be[Se + 1]);
                return Me;
              }(O, C, D);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return G;
        }, y.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }, y.prototype.copy = function(S, C, D, G) {
          if (C = C || 0, (G = G || G === 0 ? G : this.length) !== (D = D || 0) && S.length !== 0 && this.length !== 0) {
            B(D <= G, "sourceEnd < sourceStart"), B(0 <= C && C < S.length, "targetStart out of bounds"), B(0 <= D && D < this.length, "sourceStart out of bounds"), B(0 <= G && G <= this.length, "sourceEnd out of bounds"), G > this.length && (G = this.length);
            var $ = (G = S.length - C < G - D ? S.length - C + D : G) - D;
            if ($ < 100 || !y._useTypedArrays)
              for (var Y = 0; Y < $; Y++)
                S[Y + C] = this[Y + D];
            else
              S._set(this.subarray(D, D + $), C);
          }
        }, y.prototype.slice = function(S, C) {
          var D = this.length;
          if (S = X(S, D, 0), C = X(C, D, D), y._useTypedArrays)
            return y._augment(this.subarray(S, C));
          for (var G = C - S, $ = new y(G, void 0, true), Y = 0; Y < G; Y++)
            $[Y] = this[Y + S];
          return $;
        }, y.prototype.get = function(S) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(S);
        }, y.prototype.set = function(S, C) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(S, C);
        }, y.prototype.readUInt8 = function(S, C) {
          if (C || (B(S != null, "missing offset"), B(S < this.length, "Trying to read beyond buffer length")), !(S >= this.length))
            return this[S];
        }, y.prototype.readUInt16LE = function(S, C) {
          return g(this, S, true, C);
        }, y.prototype.readUInt16BE = function(S, C) {
          return g(this, S, false, C);
        }, y.prototype.readUInt32LE = function(S, C) {
          return A2(this, S, true, C);
        }, y.prototype.readUInt32BE = function(S, C) {
          return A2(this, S, false, C);
        }, y.prototype.readInt8 = function(S, C) {
          if (C || (B(S != null, "missing offset"), B(S < this.length, "Trying to read beyond buffer length")), !(S >= this.length))
            return 128 & this[S] ? -1 * (255 - this[S] + 1) : this[S];
        }, y.prototype.readInt16LE = function(S, C) {
          return x(this, S, true, C);
        }, y.prototype.readInt16BE = function(S, C) {
          return x(this, S, false, C);
        }, y.prototype.readInt32LE = function(S, C) {
          return M(this, S, true, C);
        }, y.prototype.readInt32BE = function(S, C) {
          return M(this, S, false, C);
        }, y.prototype.readFloatLE = function(S, C) {
          return d(this, S, true, C);
        }, y.prototype.readFloatBE = function(S, C) {
          return d(this, S, false, C);
        }, y.prototype.readDoubleLE = function(S, C) {
          return w(this, S, true, C);
        }, y.prototype.readDoubleBE = function(S, C) {
          return w(this, S, false, C);
        }, y.prototype.writeUInt8 = function(S, C, D) {
          D || (B(S != null, "missing value"), B(C != null, "missing offset"), B(C < this.length, "trying to write beyond buffer length"), U(S, 255)), C >= this.length || (this[C] = S);
        }, y.prototype.writeUInt16LE = function(S, C, D) {
          f(this, S, C, true, D);
        }, y.prototype.writeUInt16BE = function(S, C, D) {
          f(this, S, C, false, D);
        }, y.prototype.writeUInt32LE = function(S, C, D) {
          P(this, S, C, true, D);
        }, y.prototype.writeUInt32BE = function(S, C, D) {
          P(this, S, C, false, D);
        }, y.prototype.writeInt8 = function(S, C, D) {
          D || (B(S != null, "missing value"), B(C != null, "missing offset"), B(C < this.length, "Trying to write beyond buffer length"), J(S, 127, -128)), C >= this.length || (0 <= S ? this.writeUInt8(S, C, D) : this.writeUInt8(255 + S + 1, C, D));
        }, y.prototype.writeInt16LE = function(S, C, D) {
          I(this, S, C, true, D);
        }, y.prototype.writeInt16BE = function(S, C, D) {
          I(this, S, C, false, D);
        }, y.prototype.writeInt32LE = function(S, C, D) {
          K(this, S, C, true, D);
        }, y.prototype.writeInt32BE = function(S, C, D) {
          K(this, S, C, false, D);
        }, y.prototype.writeFloatLE = function(S, C, D) {
          N(this, S, C, true, D);
        }, y.prototype.writeFloatBE = function(S, C, D) {
          N(this, S, C, false, D);
        }, y.prototype.writeDoubleLE = function(S, C, D) {
          Z(this, S, C, true, D);
        }, y.prototype.writeDoubleBE = function(S, C, D) {
          Z(this, S, C, false, D);
        }, y.prototype.fill = function(S, C, D) {
          if (C = C || 0, D = D || this.length, B(typeof (S = typeof (S = S || 0) == "string" ? S.charCodeAt(0) : S) == "number" && !isNaN(S), "value is not a number"), B(C <= D, "end < start"), D !== C && this.length !== 0) {
            B(0 <= C && C < this.length, "start out of bounds"), B(0 <= D && D <= this.length, "end out of bounds");
            for (var G = C; G < D; G++)
              this[G] = S;
          }
        }, y.prototype.inspect = function() {
          for (var S = [], C = this.length, D = 0; D < C; D++)
            if (S[D] = se(this[D]), D === s.INSPECT_MAX_BYTES) {
              S[D + 1] = "...";
              break;
            }
          return "<Buffer " + S.join(" ") + ">";
        }, y.prototype.toArrayBuffer = function() {
          if (typeof Uint8Array > "u")
            throw new Error("Buffer.toArrayBuffer not supported in this browser");
          if (y._useTypedArrays)
            return new y(this).buffer;
          for (var S = new Uint8Array(this.length), C = 0, D = S.length; C < D; C += 1)
            S[C] = this[C];
          return S.buffer;
        };
        var W = y.prototype;
        function X(S, C, D) {
          return typeof S != "number" ? D : C <= (S = ~~S) ? C : 0 <= S || 0 <= (S += C) ? S : 0;
        }
        function V(S) {
          return (S = ~~Math.ceil(+S)) < 0 ? 0 : S;
        }
        function ne(S) {
          return (Array.isArray || function(C) {
            return Object.prototype.toString.call(C) === "[object Array]";
          })(S);
        }
        function se(S) {
          return S < 16 ? "0" + S.toString(16) : S.toString(16);
        }
        function he(S) {
          for (var C = [], D = 0; D < S.length; D++) {
            var G = S.charCodeAt(D);
            if (G <= 127)
              C.push(S.charCodeAt(D));
            else
              for (var $ = D, Y = (55296 <= G && G <= 57343 && D++, encodeURIComponent(S.slice($, D + 1)).substr(1).split("%")), te = 0; te < Y.length; te++)
                C.push(parseInt(Y[te], 16));
          }
          return C;
        }
        function H(S) {
          return v.toByteArray(S);
        }
        function k(S, C, D, G) {
          for (var $ = 0; $ < G && !($ + D >= C.length || $ >= S.length); $++)
            C[$ + D] = S[$];
          return $;
        }
        function b(S) {
          try {
            return decodeURIComponent(S);
          } catch {
            return "�";
          }
        }
        function U(S, C) {
          B(typeof S == "number", "cannot write a non-number as a number"), B(0 <= S, "specified a negative value for writing an unsigned value"), B(S <= C, "value is larger than maximum value for type"), B(Math.floor(S) === S, "value has a fractional component");
        }
        function J(S, C, D) {
          B(typeof S == "number", "cannot write a non-number as a number"), B(S <= C, "value larger than maximum allowed value"), B(D <= S, "value smaller than minimum allowed value"), B(Math.floor(S) === S, "value has a fractional component");
        }
        function F(S, C, D) {
          B(typeof S == "number", "cannot write a non-number as a number"), B(S <= C, "value larger than maximum allowed value"), B(D <= S, "value smaller than minimum allowed value");
        }
        function B(S, C) {
          if (!S)
            throw new Error(C || "Failed assertion");
        }
        y._augment = function(S) {
          return S._isBuffer = true, S._get = S.get, S._set = S.set, S.get = W.get, S.set = W.set, S.write = W.write, S.toString = W.toString, S.toLocaleString = W.toString, S.toJSON = W.toJSON, S.copy = W.copy, S.slice = W.slice, S.readUInt8 = W.readUInt8, S.readUInt16LE = W.readUInt16LE, S.readUInt16BE = W.readUInt16BE, S.readUInt32LE = W.readUInt32LE, S.readUInt32BE = W.readUInt32BE, S.readInt8 = W.readInt8, S.readInt16LE = W.readInt16LE, S.readInt16BE = W.readInt16BE, S.readInt32LE = W.readInt32LE, S.readInt32BE = W.readInt32BE, S.readFloatLE = W.readFloatLE, S.readFloatBE = W.readFloatBE, S.readDoubleLE = W.readDoubleLE, S.readDoubleBE = W.readDoubleBE, S.writeUInt8 = W.writeUInt8, S.writeUInt16LE = W.writeUInt16LE, S.writeUInt16BE = W.writeUInt16BE, S.writeUInt32LE = W.writeUInt32LE, S.writeUInt32BE = W.writeUInt32BE, S.writeInt8 = W.writeInt8, S.writeInt16LE = W.writeInt16LE, S.writeInt16BE = W.writeInt16BE, S.writeInt32LE = W.writeInt32LE, S.writeInt32BE = W.writeInt32BE, S.writeFloatLE = W.writeFloatLE, S.writeFloatBE = W.writeFloatBE, S.writeDoubleLE = W.writeDoubleLE, S.writeDoubleBE = W.writeDoubleBE, S.fill = W.fill, S.inspect = W.inspect, S.toArrayBuffer = W.toArrayBuffer, S;
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
    }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(t, n, s) {
      (function(i, r, v, l, c, u, h, m, p) {
        var v = t("buffer").Buffer, _ = 4, y = new v(_);
        y.fill(0), n.exports = { hash: function(E, R, T, g) {
          for (var A2 = R(function(f, P) {
            f.length % _ != 0 && (I = f.length + (_ - f.length % _), f = v.concat([f, y], I));
            for (var I, K = [], N = P ? f.readInt32BE : f.readInt32LE, Z = 0; Z < f.length; Z += _)
              K.push(N.call(f, Z));
            return K;
          }(E = v.isBuffer(E) ? E : new v(E), g), 8 * E.length), R = g, x = new v(T), M = R ? x.writeInt32BE : x.writeInt32LE, d = 0; d < A2.length; d++)
            M.call(x, A2[d], 4 * d, true);
          return x;
        } };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 5: [function(t, n, s) {
      (function(i, r, v, l, c, u, h, m, p) {
        var v = t("buffer").Buffer, _ = t("./sha"), y = t("./sha256"), E = t("./rng"), R = { sha1: _, sha256: y, md5: t("./md5") }, T = 64, g = new v(T);
        function A2(f, P) {
          var I = R[f = f || "sha1"], K = [];
          return I || x("algorithm:", f, "is not yet supported"), { update: function(N) {
            return v.isBuffer(N) || (N = new v(N)), K.push(N), N.length, this;
          }, digest: function(N) {
            var Z = v.concat(K), Z = P ? function(W, X, V) {
              v.isBuffer(X) || (X = new v(X)), v.isBuffer(V) || (V = new v(V)), X.length > T ? X = W(X) : X.length < T && (X = v.concat([X, g], T));
              for (var ne = new v(T), se = new v(T), he = 0; he < T; he++)
                ne[he] = 54 ^ X[he], se[he] = 92 ^ X[he];
              return V = W(v.concat([ne, V])), W(v.concat([se, V]));
            }(I, P, Z) : I(Z);
            return K = null, N ? Z.toString(N) : Z;
          } };
        }
        function x() {
          var f = [].slice.call(arguments).join(" ");
          throw new Error([f, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
        }
        g.fill(0), s.createHash = function(f) {
          return A2(f);
        }, s.createHmac = A2, s.randomBytes = function(f, P) {
          if (!P || !P.call)
            return new v(E(f));
          try {
            P.call(this, void 0, new v(E(f)));
          } catch (I) {
            P(I);
          }
        };
        var M, d = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], w = function(f) {
          s[f] = function() {
            x("sorry,", f, "is not implemented yet");
          };
        };
        for (M in d)
          w(d[M]);
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        var v = t("./helpers");
        function _(x, M) {
          x[M >> 5] |= 128 << M % 32, x[14 + (M + 64 >>> 9 << 4)] = M;
          for (var d = 1732584193, w = -271733879, f = -1732584194, P = 271733878, I = 0; I < x.length; I += 16) {
            var K = d, N = w, Z = f, W = P, d = E(d, w, f, P, x[I + 0], 7, -680876936), P = E(P, d, w, f, x[I + 1], 12, -389564586), f = E(f, P, d, w, x[I + 2], 17, 606105819), w = E(w, f, P, d, x[I + 3], 22, -1044525330);
            d = E(d, w, f, P, x[I + 4], 7, -176418897), P = E(P, d, w, f, x[I + 5], 12, 1200080426), f = E(f, P, d, w, x[I + 6], 17, -1473231341), w = E(w, f, P, d, x[I + 7], 22, -45705983), d = E(d, w, f, P, x[I + 8], 7, 1770035416), P = E(P, d, w, f, x[I + 9], 12, -1958414417), f = E(f, P, d, w, x[I + 10], 17, -42063), w = E(w, f, P, d, x[I + 11], 22, -1990404162), d = E(d, w, f, P, x[I + 12], 7, 1804603682), P = E(P, d, w, f, x[I + 13], 12, -40341101), f = E(f, P, d, w, x[I + 14], 17, -1502002290), d = R(d, w = E(w, f, P, d, x[I + 15], 22, 1236535329), f, P, x[I + 1], 5, -165796510), P = R(P, d, w, f, x[I + 6], 9, -1069501632), f = R(f, P, d, w, x[I + 11], 14, 643717713), w = R(w, f, P, d, x[I + 0], 20, -373897302), d = R(d, w, f, P, x[I + 5], 5, -701558691), P = R(P, d, w, f, x[I + 10], 9, 38016083), f = R(f, P, d, w, x[I + 15], 14, -660478335), w = R(w, f, P, d, x[I + 4], 20, -405537848), d = R(d, w, f, P, x[I + 9], 5, 568446438), P = R(P, d, w, f, x[I + 14], 9, -1019803690), f = R(f, P, d, w, x[I + 3], 14, -187363961), w = R(w, f, P, d, x[I + 8], 20, 1163531501), d = R(d, w, f, P, x[I + 13], 5, -1444681467), P = R(P, d, w, f, x[I + 2], 9, -51403784), f = R(f, P, d, w, x[I + 7], 14, 1735328473), d = T(d, w = R(w, f, P, d, x[I + 12], 20, -1926607734), f, P, x[I + 5], 4, -378558), P = T(P, d, w, f, x[I + 8], 11, -2022574463), f = T(f, P, d, w, x[I + 11], 16, 1839030562), w = T(w, f, P, d, x[I + 14], 23, -35309556), d = T(d, w, f, P, x[I + 1], 4, -1530992060), P = T(P, d, w, f, x[I + 4], 11, 1272893353), f = T(f, P, d, w, x[I + 7], 16, -155497632), w = T(w, f, P, d, x[I + 10], 23, -1094730640), d = T(d, w, f, P, x[I + 13], 4, 681279174), P = T(P, d, w, f, x[I + 0], 11, -358537222), f = T(f, P, d, w, x[I + 3], 16, -722521979), w = T(w, f, P, d, x[I + 6], 23, 76029189), d = T(d, w, f, P, x[I + 9], 4, -640364487), P = T(P, d, w, f, x[I + 12], 11, -421815835), f = T(f, P, d, w, x[I + 15], 16, 530742520), d = g(d, w = T(w, f, P, d, x[I + 2], 23, -995338651), f, P, x[I + 0], 6, -198630844), P = g(P, d, w, f, x[I + 7], 10, 1126891415), f = g(f, P, d, w, x[I + 14], 15, -1416354905), w = g(w, f, P, d, x[I + 5], 21, -57434055), d = g(d, w, f, P, x[I + 12], 6, 1700485571), P = g(P, d, w, f, x[I + 3], 10, -1894986606), f = g(f, P, d, w, x[I + 10], 15, -1051523), w = g(w, f, P, d, x[I + 1], 21, -2054922799), d = g(d, w, f, P, x[I + 8], 6, 1873313359), P = g(P, d, w, f, x[I + 15], 10, -30611744), f = g(f, P, d, w, x[I + 6], 15, -1560198380), w = g(w, f, P, d, x[I + 13], 21, 1309151649), d = g(d, w, f, P, x[I + 4], 6, -145523070), P = g(P, d, w, f, x[I + 11], 10, -1120210379), f = g(f, P, d, w, x[I + 2], 15, 718787259), w = g(w, f, P, d, x[I + 9], 21, -343485551), d = A2(d, K), w = A2(w, N), f = A2(f, Z), P = A2(P, W);
          }
          return Array(d, w, f, P);
        }
        function y(x, M, d, w, f, P) {
          return A2((M = A2(A2(M, x), A2(w, P))) << f | M >>> 32 - f, d);
        }
        function E(x, M, d, w, f, P, I) {
          return y(M & d | ~M & w, x, M, f, P, I);
        }
        function R(x, M, d, w, f, P, I) {
          return y(M & w | d & ~w, x, M, f, P, I);
        }
        function T(x, M, d, w, f, P, I) {
          return y(M ^ d ^ w, x, M, f, P, I);
        }
        function g(x, M, d, w, f, P, I) {
          return y(d ^ (M | ~w), x, M, f, P, I);
        }
        function A2(x, M) {
          var d = (65535 & x) + (65535 & M);
          return (x >> 16) + (M >> 16) + (d >> 16) << 16 | 65535 & d;
        }
        n.exports = function(x) {
          return v.hash(x, _, 16);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        n.exports = function(v) {
          for (var _, y = new Array(v), E = 0; E < v; E++)
            !(3 & E) && (_ = 4294967296 * Math.random()), y[E] = _ >>> ((3 & E) << 3) & 255;
          return y;
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 8: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        var v = t("./helpers");
        function _(R, T) {
          R[T >> 5] |= 128 << 24 - T % 32, R[15 + (T + 64 >> 9 << 4)] = T;
          for (var g, A2, x, M = Array(80), d = 1732584193, w = -271733879, f = -1732584194, P = 271733878, I = -1009589776, K = 0; K < R.length; K += 16) {
            for (var N = d, Z = w, W = f, X = P, V = I, ne = 0; ne < 80; ne++) {
              M[ne] = ne < 16 ? R[K + ne] : E(M[ne - 3] ^ M[ne - 8] ^ M[ne - 14] ^ M[ne - 16], 1);
              var se = y(y(E(d, 5), (se = w, A2 = f, x = P, (g = ne) < 20 ? se & A2 | ~se & x : !(g < 40) && g < 60 ? se & A2 | se & x | A2 & x : se ^ A2 ^ x)), y(y(I, M[ne]), (g = ne) < 20 ? 1518500249 : g < 40 ? 1859775393 : g < 60 ? -1894007588 : -899497514)), I = P, P = f, f = E(w, 30), w = d, d = se;
            }
            d = y(d, N), w = y(w, Z), f = y(f, W), P = y(P, X), I = y(I, V);
          }
          return Array(d, w, f, P, I);
        }
        function y(R, T) {
          var g = (65535 & R) + (65535 & T);
          return (R >> 16) + (T >> 16) + (g >> 16) << 16 | 65535 & g;
        }
        function E(R, T) {
          return R << T | R >>> 32 - T;
        }
        n.exports = function(R) {
          return v.hash(R, _, 20, true);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        function v(T, g) {
          var A2 = (65535 & T) + (65535 & g);
          return (T >> 16) + (g >> 16) + (A2 >> 16) << 16 | 65535 & A2;
        }
        function _(T, g) {
          var A2, x = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), M = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), d = new Array(64);
          T[g >> 5] |= 128 << 24 - g % 32, T[15 + (g + 64 >> 9 << 4)] = g;
          for (var w, f, P = 0; P < T.length; P += 16) {
            for (var I = M[0], K = M[1], N = M[2], Z = M[3], W = M[4], X = M[5], V = M[6], ne = M[7], se = 0; se < 64; se++)
              d[se] = se < 16 ? T[se + P] : v(v(v((f = d[se - 2], E(f, 17) ^ E(f, 19) ^ R(f, 10)), d[se - 7]), (f = d[se - 15], E(f, 7) ^ E(f, 18) ^ R(f, 3))), d[se - 16]), A2 = v(v(v(v(ne, E(f = W, 6) ^ E(f, 11) ^ E(f, 25)), W & X ^ ~W & V), x[se]), d[se]), w = v(E(w = I, 2) ^ E(w, 13) ^ E(w, 22), I & K ^ I & N ^ K & N), ne = V, V = X, X = W, W = v(Z, A2), Z = N, N = K, K = I, I = v(A2, w);
            M[0] = v(I, M[0]), M[1] = v(K, M[1]), M[2] = v(N, M[2]), M[3] = v(Z, M[3]), M[4] = v(W, M[4]), M[5] = v(X, M[5]), M[6] = v(V, M[6]), M[7] = v(ne, M[7]);
          }
          return M;
        }
        var y = t("./helpers"), E = function(T, g) {
          return T >>> g | T << 32 - g;
        }, R = function(T, g) {
          return T >>> g;
        };
        n.exports = function(T) {
          return y.hash(T, _, 32, true);
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        s.read = function(v, _, y, E, P) {
          var T, g, A2 = 8 * P - E - 1, x = (1 << A2) - 1, M = x >> 1, d = -7, w = y ? P - 1 : 0, f = y ? -1 : 1, P = v[_ + w];
          for (w += f, T = P & (1 << -d) - 1, P >>= -d, d += A2; 0 < d; T = 256 * T + v[_ + w], w += f, d -= 8)
            ;
          for (g = T & (1 << -d) - 1, T >>= -d, d += E; 0 < d; g = 256 * g + v[_ + w], w += f, d -= 8)
            ;
          if (T === 0)
            T = 1 - M;
          else {
            if (T === x)
              return g ? NaN : 1 / 0 * (P ? -1 : 1);
            g += Math.pow(2, E), T -= M;
          }
          return (P ? -1 : 1) * g * Math.pow(2, T - E);
        }, s.write = function(v, _, y, E, R, I) {
          var g, A2, x = 8 * I - R - 1, M = (1 << x) - 1, d = M >> 1, w = R === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = E ? 0 : I - 1, P = E ? 1 : -1, I = _ < 0 || _ === 0 && 1 / _ < 0 ? 1 : 0;
          for (_ = Math.abs(_), isNaN(_) || _ === 1 / 0 ? (A2 = isNaN(_) ? 1 : 0, g = M) : (g = Math.floor(Math.log(_) / Math.LN2), _ * (E = Math.pow(2, -g)) < 1 && (g--, E *= 2), 2 <= (_ += 1 <= g + d ? w / E : w * Math.pow(2, 1 - d)) * E && (g++, E /= 2), M <= g + d ? (A2 = 0, g = M) : 1 <= g + d ? (A2 = (_ * E - 1) * Math.pow(2, R), g += d) : (A2 = _ * Math.pow(2, d - 1) * Math.pow(2, R), g = 0)); 8 <= R; v[y + f] = 255 & A2, f += P, A2 /= 256, R -= 8)
            ;
          for (g = g << R | A2, x += R; 0 < x; v[y + f] = 255 & g, f += P, g /= 256, x -= 8)
            ;
          v[y + f - P] |= 128 * I;
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
    }, { buffer: 3, lYpoI2: 11 }], 11: [function(t, n, s) {
      (function(i, r, a, l, c, u, h, m, p) {
        var v, _, y;
        function E() {
        }
        (i = n.exports = {}).nextTick = (_ = typeof window < "u" && window.setImmediate, y = typeof window < "u" && window.postMessage && window.addEventListener, _ ? function(R) {
          return window.setImmediate(R);
        } : y ? (v = [], window.addEventListener("message", function(R) {
          var T = R.source;
          T !== window && T !== null || R.data !== "process-tick" || (R.stopPropagation(), 0 < v.length && v.shift()());
        }, true), function(R) {
          v.push(R), window.postMessage("process-tick", "*");
        }) : function(R) {
          setTimeout(R, 0);
        }), i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.on = E, i.addListener = E, i.once = E, i.off = E, i.removeListener = E, i.removeAllListeners = E, i.emit = E, i.binding = function(R) {
          throw new Error("process.binding is not supported");
        }, i.cwd = function() {
          return "/";
        }, i.chdir = function(R) {
          throw new Error("process.chdir is not supported");
        };
      }).call(this, t("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
    }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
  });
})(ja);
var Df = ja.exports;
var Lf = ys(Df);
var Va = [
  // current
  "precision",
  "highp",
  "mediump",
  "lowp",
  "attribute",
  "const",
  "uniform",
  "varying",
  "break",
  "continue",
  "do",
  "for",
  "while",
  "if",
  "else",
  "in",
  "out",
  "inout",
  "float",
  "int",
  "uint",
  "void",
  "bool",
  "true",
  "false",
  "discard",
  "return",
  "mat2",
  "mat3",
  "mat4",
  "vec2",
  "vec3",
  "vec4",
  "ivec2",
  "ivec3",
  "ivec4",
  "bvec2",
  "bvec3",
  "bvec4",
  "sampler1D",
  "sampler2D",
  "sampler3D",
  "samplerCube",
  "sampler1DShadow",
  "sampler2DShadow",
  "struct",
  "asm",
  "class",
  "union",
  "enum",
  "typedef",
  "template",
  "this",
  "packed",
  "goto",
  "switch",
  "default",
  "inline",
  "noinline",
  "volatile",
  "public",
  "static",
  "extern",
  "external",
  "interface",
  "long",
  "short",
  "double",
  "half",
  "fixed",
  "unsigned",
  "input",
  "output",
  "hvec2",
  "hvec3",
  "hvec4",
  "dvec2",
  "dvec3",
  "dvec4",
  "fvec2",
  "fvec3",
  "fvec4",
  "sampler2DRect",
  "sampler3DRect",
  "sampler2DRectShadow",
  "sizeof",
  "cast",
  "namespace",
  "using"
];
var Of = [
  "<<=",
  ">>=",
  "++",
  "--",
  "<<",
  ">>",
  "<=",
  ">=",
  "==",
  "!=",
  "&&",
  "||",
  "+=",
  "-=",
  "*=",
  "/=",
  "%=",
  "&=",
  "^^",
  "^=",
  "|=",
  "(",
  ")",
  "[",
  "]",
  ".",
  "!",
  "~",
  "*",
  "/",
  "%",
  "+",
  "-",
  "<",
  ">",
  "&",
  "^",
  "|",
  "?",
  ":",
  "=",
  ",",
  ";",
  "{",
  "}"
];
var Ya = [
  // Keep this list sorted
  "abs",
  "acos",
  "all",
  "any",
  "asin",
  "atan",
  "ceil",
  "clamp",
  "cos",
  "cross",
  "dFdx",
  "dFdy",
  "degrees",
  "distance",
  "dot",
  "equal",
  "exp",
  "exp2",
  "faceforward",
  "floor",
  "fract",
  "gl_BackColor",
  "gl_BackLightModelProduct",
  "gl_BackLightProduct",
  "gl_BackMaterial",
  "gl_BackSecondaryColor",
  "gl_ClipPlane",
  "gl_ClipVertex",
  "gl_Color",
  "gl_DepthRange",
  "gl_DepthRangeParameters",
  "gl_EyePlaneQ",
  "gl_EyePlaneR",
  "gl_EyePlaneS",
  "gl_EyePlaneT",
  "gl_Fog",
  "gl_FogCoord",
  "gl_FogFragCoord",
  "gl_FogParameters",
  "gl_FragColor",
  "gl_FragCoord",
  "gl_FragData",
  "gl_FragDepth",
  "gl_FragDepthEXT",
  "gl_FrontColor",
  "gl_FrontFacing",
  "gl_FrontLightModelProduct",
  "gl_FrontLightProduct",
  "gl_FrontMaterial",
  "gl_FrontSecondaryColor",
  "gl_LightModel",
  "gl_LightModelParameters",
  "gl_LightModelProducts",
  "gl_LightProducts",
  "gl_LightSource",
  "gl_LightSourceParameters",
  "gl_MaterialParameters",
  "gl_MaxClipPlanes",
  "gl_MaxCombinedTextureImageUnits",
  "gl_MaxDrawBuffers",
  "gl_MaxFragmentUniformComponents",
  "gl_MaxLights",
  "gl_MaxTextureCoords",
  "gl_MaxTextureImageUnits",
  "gl_MaxTextureUnits",
  "gl_MaxVaryingFloats",
  "gl_MaxVertexAttribs",
  "gl_MaxVertexTextureImageUnits",
  "gl_MaxVertexUniformComponents",
  "gl_ModelViewMatrix",
  "gl_ModelViewMatrixInverse",
  "gl_ModelViewMatrixInverseTranspose",
  "gl_ModelViewMatrixTranspose",
  "gl_ModelViewProjectionMatrix",
  "gl_ModelViewProjectionMatrixInverse",
  "gl_ModelViewProjectionMatrixInverseTranspose",
  "gl_ModelViewProjectionMatrixTranspose",
  "gl_MultiTexCoord0",
  "gl_MultiTexCoord1",
  "gl_MultiTexCoord2",
  "gl_MultiTexCoord3",
  "gl_MultiTexCoord4",
  "gl_MultiTexCoord5",
  "gl_MultiTexCoord6",
  "gl_MultiTexCoord7",
  "gl_Normal",
  "gl_NormalMatrix",
  "gl_NormalScale",
  "gl_ObjectPlaneQ",
  "gl_ObjectPlaneR",
  "gl_ObjectPlaneS",
  "gl_ObjectPlaneT",
  "gl_Point",
  "gl_PointCoord",
  "gl_PointParameters",
  "gl_PointSize",
  "gl_Position",
  "gl_ProjectionMatrix",
  "gl_ProjectionMatrixInverse",
  "gl_ProjectionMatrixInverseTranspose",
  "gl_ProjectionMatrixTranspose",
  "gl_SecondaryColor",
  "gl_TexCoord",
  "gl_TextureEnvColor",
  "gl_TextureMatrix",
  "gl_TextureMatrixInverse",
  "gl_TextureMatrixInverseTranspose",
  "gl_TextureMatrixTranspose",
  "gl_Vertex",
  "greaterThan",
  "greaterThanEqual",
  "inversesqrt",
  "length",
  "lessThan",
  "lessThanEqual",
  "log",
  "log2",
  "matrixCompMult",
  "max",
  "min",
  "mix",
  "mod",
  "normalize",
  "not",
  "notEqual",
  "pow",
  "radians",
  "reflect",
  "refract",
  "sign",
  "sin",
  "smoothstep",
  "sqrt",
  "step",
  "tan",
  "texture2D",
  "texture2DLod",
  "texture2DProj",
  "texture2DProjLod",
  "textureCube",
  "textureCubeLod",
  "texture2DLodEXT",
  "texture2DProjLodEXT",
  "textureCubeLodEXT",
  "texture2DGradEXT",
  "texture2DProjGradEXT",
  "textureCubeGradEXT"
];
var Ff = Va;
var kf = Ff.slice().concat([
  "layout",
  "centroid",
  "smooth",
  "case",
  "mat2x2",
  "mat2x3",
  "mat2x4",
  "mat3x2",
  "mat3x3",
  "mat3x4",
  "mat4x2",
  "mat4x3",
  "mat4x4",
  "uvec2",
  "uvec3",
  "uvec4",
  "samplerCubeShadow",
  "sampler2DArray",
  "sampler2DArrayShadow",
  "isampler2D",
  "isampler3D",
  "isamplerCube",
  "isampler2DArray",
  "usampler2D",
  "usampler3D",
  "usamplerCube",
  "usampler2DArray",
  "coherent",
  "restrict",
  "readonly",
  "writeonly",
  "resource",
  "atomic_uint",
  "noperspective",
  "patch",
  "sample",
  "subroutine",
  "common",
  "partition",
  "active",
  "filter",
  "image1D",
  "image2D",
  "image3D",
  "imageCube",
  "iimage1D",
  "iimage2D",
  "iimage3D",
  "iimageCube",
  "uimage1D",
  "uimage2D",
  "uimage3D",
  "uimageCube",
  "image1DArray",
  "image2DArray",
  "iimage1DArray",
  "iimage2DArray",
  "uimage1DArray",
  "uimage2DArray",
  "image1DShadow",
  "image2DShadow",
  "image1DArrayShadow",
  "image2DArrayShadow",
  "imageBuffer",
  "iimageBuffer",
  "uimageBuffer",
  "sampler1DArray",
  "sampler1DArrayShadow",
  "isampler1D",
  "isampler1DArray",
  "usampler1D",
  "usampler1DArray",
  "isampler2DRect",
  "usampler2DRect",
  "samplerBuffer",
  "isamplerBuffer",
  "usamplerBuffer",
  "sampler2DMS",
  "isampler2DMS",
  "usampler2DMS",
  "sampler2DMSArray",
  "isampler2DMSArray",
  "usampler2DMSArray"
]);
var nr = Ya;
nr = nr.slice().filter(function(o) {
  return !/^(gl\_|texture)/.test(o);
});
var Uf = nr.concat([
  // the updated gl_ constants
  "gl_VertexID",
  "gl_InstanceID",
  "gl_Position",
  "gl_PointSize",
  "gl_FragCoord",
  "gl_FrontFacing",
  "gl_FragDepth",
  "gl_PointCoord",
  "gl_MaxVertexAttribs",
  "gl_MaxVertexUniformVectors",
  "gl_MaxVertexOutputVectors",
  "gl_MaxFragmentInputVectors",
  "gl_MaxVertexTextureImageUnits",
  "gl_MaxCombinedTextureImageUnits",
  "gl_MaxTextureImageUnits",
  "gl_MaxFragmentUniformVectors",
  "gl_MaxDrawBuffers",
  "gl_MinProgramTexelOffset",
  "gl_MaxProgramTexelOffset",
  "gl_DepthRangeParameters",
  "gl_DepthRange",
  "trunc",
  "round",
  "roundEven",
  "isnan",
  "isinf",
  "floatBitsToInt",
  "floatBitsToUint",
  "intBitsToFloat",
  "uintBitsToFloat",
  "packSnorm2x16",
  "unpackSnorm2x16",
  "packUnorm2x16",
  "unpackUnorm2x16",
  "packHalf2x16",
  "unpackHalf2x16",
  "outerProduct",
  "transpose",
  "determinant",
  "inverse",
  "texture",
  "textureSize",
  "textureProj",
  "textureLod",
  "textureOffset",
  "texelFetch",
  "texelFetchOffset",
  "textureProjOffset",
  "textureLodOffset",
  "textureProjLod",
  "textureProjLodOffset",
  "textureGrad",
  "textureGradOffset",
  "textureProjGrad",
  "textureProjGradOffset"
]);
var Bf = $f;
var Nf = Va;
var yo = Of;
var zf = Ya;
var Hf = kf;
var Gf = Uf;
var bt = 999;
var vo = 9999;
var Li = 0;
var Oi = 1;
var _o = 2;
var xo = 3;
var wo = 4;
var Jn = 5;
var jf = 6;
var Vf = 7;
var Yf = 8;
var To = 9;
var Xf = 10;
var bo = 11;
var Wf = [
  "block-comment",
  "line-comment",
  "preprocessor",
  "operator",
  "integer",
  "float",
  "ident",
  "builtin",
  "keyword",
  "whitespace",
  "eof",
  "integer"
];
function $f(o) {
  var e = 0, t = 0, n = bt, s, i, r = [], a = [], l = 1, c = 0, u = 0, h = false, m = false, p = "", v;
  o = o || {};
  var _ = zf, y = Nf;
  o.version === "300 es" && (_ = Gf, y = Hf);
  for (var E = {}, R = {}, e = 0; e < _.length; e++)
    E[_[e]] = true;
  for (var e = 0; e < y.length; e++)
    R[y[e]] = true;
  return function(X) {
    return a = [], X !== null ? g(X) : A2();
  };
  function T(X) {
    X.length && a.push({
      type: Wf[n],
      data: X,
      position: u,
      line: l,
      column: c
    });
  }
  function g(X) {
    e = 0, X.toString && (X = X.toString()), p += X.replace(/\r\n/g, `
`), v = p.length;
    for (var V; s = p[e], e < v; ) {
      switch (V = e, n) {
        case Li:
          e = f();
          break;
        case Oi:
          e = w();
          break;
        case _o:
          e = d();
          break;
        case xo:
          e = P();
          break;
        case wo:
          e = N();
          break;
        case bo:
          e = K();
          break;
        case Jn:
          e = Z();
          break;
        case vo:
          e = W();
          break;
        case To:
          e = M();
          break;
        case bt:
          e = x();
          break;
      }
      if (V !== e)
        switch (p[V]) {
          case `
`:
            c = 0, ++l;
            break;
          default:
            ++c;
            break;
        }
    }
    return t += e, p = p.slice(e), a;
  }
  function A2(X) {
    return r.length && T(r.join("")), n = Xf, T("(eof)"), a;
  }
  function x() {
    return r = r.length ? [] : r, i === "/" && s === "*" ? (u = t + e - 1, n = Li, i = s, e + 1) : i === "/" && s === "/" ? (u = t + e - 1, n = Oi, i = s, e + 1) : s === "#" ? (n = _o, u = t + e, e) : /\s/.test(s) ? (n = To, u = t + e, e) : (h = /\d/.test(s), m = /[^\w_]/.test(s), u = t + e, n = h ? wo : m ? xo : vo, e);
  }
  function M() {
    return /[^\s]/g.test(s) ? (T(r.join("")), n = bt, e) : (r.push(s), i = s, e + 1);
  }
  function d() {
    return (s === "\r" || s === `
`) && i !== "\\" ? (T(r.join("")), n = bt, e) : (r.push(s), i = s, e + 1);
  }
  function w() {
    return d();
  }
  function f() {
    return s === "/" && i === "*" ? (r.push(s), T(r.join("")), n = bt, e + 1) : (r.push(s), i = s, e + 1);
  }
  function P() {
    if (i === "." && /\d/.test(s))
      return n = Jn, e;
    if (i === "/" && s === "*")
      return n = Li, e;
    if (i === "/" && s === "/")
      return n = Oi, e;
    if (s === "." && r.length) {
      for (; I(r); )
        ;
      return n = Jn, e;
    }
    if (s === ";" || s === ")" || s === "(") {
      if (r.length)
        for (; I(r); )
          ;
      return T(s), n = bt, e + 1;
    }
    var X = r.length === 2 && s !== "=";
    if (/[\w_\d\s]/.test(s) || X) {
      for (; I(r); )
        ;
      return n = bt, e;
    }
    return r.push(s), i = s, e + 1;
  }
  function I(X) {
    var V = 0, ne, se;
    do {
      if (ne = yo.indexOf(X.slice(0, X.length + V).join("")), se = yo[ne], ne === -1) {
        if (V-- + X.length > 0)
          continue;
        se = X.slice(0, 1).join("");
      }
      return T(se), u += se.length, r = r.slice(se.length), r.length;
    } while (true);
  }
  function K() {
    return /[^a-fA-F0-9]/.test(s) ? (T(r.join("")), n = bt, e) : (r.push(s), i = s, e + 1);
  }
  function N() {
    return s === "." || /[eE]/.test(s) ? (r.push(s), n = Jn, i = s, e + 1) : s === "x" && r.length === 1 && r[0] === "0" ? (n = bo, r.push(s), i = s, e + 1) : /[^\d]/.test(s) ? (T(r.join("")), n = bt, e) : (r.push(s), i = s, e + 1);
  }
  function Z() {
    return s === "f" && (r.push(s), i = s, e += 1), /[eE]/.test(s) || (s === "-" || s === "+") && /[eE]/.test(i) ? (r.push(s), i = s, e + 1) : /[^\d]/.test(s) ? (T(r.join("")), n = bt, e) : (r.push(s), i = s, e + 1);
  }
  function W() {
    if (/[^\d\w_]/.test(s)) {
      var X = r.join("");
      return R[X] ? n = Yf : E[X] ? n = Vf : n = jf, T(r.join("")), n = bt, e;
    }
    return r.push(s), i = s, e + 1;
  }
}
var Zf = Bf;
var Kf = qf;
function qf(o, e) {
  var t = Zf(e), n = [];
  return n = n.concat(t(o)), n = n.concat(t(null)), n;
}
var Qf = ys(Kf);
var Jf = ed;
function ed(o) {
  for (var e = [], t = 0; t < o.length; t++)
    o[t].type !== "eof" && e.push(o[t].data);
  return e.join("");
}
var Eo = ys(Jf);
var td = nd;
function nd(o) {
  var e = null, t = null, n = 0, s = 0, i = 0, r = 0, a = 0, l = [], c, u, h;
  for (c = 0, u; c < o.length; c++)
    if (h = o[c], h.data === "{") {
      if (n && n++ || (u = p(c, en(")"), en()), u < 0) || (r = u, u = p(u, en("("), en(")")), u < 0) || (a = u, u = p(u, es), u < 0) || o[u].type !== "ident" || (t = o[u].data, u = p(u, es), u < 0))
        continue;
      n = 1, s = c, e = o[u].data, i = u;
      var m = p(u, es);
      switch (o[m] && o[m].data) {
        case "lowp":
        case "highp":
        case "mediump":
          i = m;
      }
    } else if (n && h.data === "}") {
      if (--n)
        continue;
      l.push({
        name: t,
        type: e,
        body: [s + 1, c],
        args: [a, r + 1],
        outer: [i, c + 1]
      });
    }
  for (c = 0; c < o.length; c++)
    if (h = o[c], h.data === ";") {
      if (u = p(c, en(")"), en()), u < 0 || (r = u, u = p(u, en("("), en(")")), u < 0) || (a = u, u = p(u, es), u < 0) || o[u].type !== "ident" || (t = o[u].data, u = p(u, es), u < 0) || o[u].type === "operator" || o[u].data === "return")
        continue;
      e = o[u].data, l.push({
        name: t,
        type: e,
        body: false,
        args: [a, r + 1],
        outer: [u, c + 1]
      });
    }
  return l.sort(function(v, _) {
    return v.outer[0] - _.outer[0];
  });
  function p(v, _, y) {
    for (var E = v - 1; E >= 0; E--) {
      if (_(o[E]))
        return E;
      if (y && y(o[E]))
        return -1;
    }
    return -1;
  }
}
function en(o) {
  return function(e) {
    return e.type === "operator" && (!o || e.data === o);
  };
}
function es(o) {
  return o.type !== "whitespace";
}
var sd = ys(td);
function id(o, e) {
  if (typeof o != "object" || o === null)
    return o;
  var t = o[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(o, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function Xa(o) {
  var e = id(o, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Ue(o, e, t) {
  return e = Xa(e), e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : o[e] = t, o;
}
function Mo(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(o, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function kn(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mo(Object(t), true).forEach(function(n) {
      Ue(o, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : Mo(Object(t)).forEach(function(n) {
      Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return o;
}
function rd(o, e) {
  if (o == null)
    return {};
  var t = {}, n = Object.keys(o), s, i;
  for (i = 0; i < n.length; i++)
    s = n[i], !(e.indexOf(s) >= 0) && (t[s] = o[s]);
  return t;
}
function od(o, e) {
  if (o == null)
    return {};
  var t = rd(o, e), n, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    for (s = 0; s < i.length; s++)
      n = i[s], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(o, n) && (t[n] = o[n]);
  }
  return t;
}
function ad(o, e) {
  if (!(o instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function So(o, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(o, Xa(n.key), n);
  }
}
function ld(o, e, t) {
  return e && So(o.prototype, e), t && So(o, t), Object.defineProperty(o, "prototype", {
    writable: false
  }), o;
}
function Wa(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function sr(o, e) {
  return sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, s) {
    return n.__proto__ = s, n;
  }, sr(o, e);
}
function cd(o, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  o.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: o,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o, "prototype", {
    writable: false
  }), e && sr(o, e);
}
function Ks(o) {
  return Ks = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ks(o);
}
function ud() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function hd(o, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Wa(o);
}
function fd(o) {
  var e = ud();
  return function() {
    var n = Ks(o), s;
    if (e) {
      var i = Ks(this).constructor;
      s = Reflect.construct(n, arguments, i);
    } else
      s = n.apply(this, arguments);
    return hd(this, s);
  };
}
var _e = {
  position: "csm_Position",
  positionRaw: "csm_PositionRaw",
  pointSize: "csm_PointSize",
  fragColor: "csm_FragColor",
  // PBR
  diffuseColor: "csm_DiffuseColor",
  // Color + alpha
  normal: "csm_Normal",
  // Normal
  roughness: "csm_Roughness",
  // Roughness
  metalness: "csm_Metalness",
  // Metalness
  emissive: "csm_Emissive",
  // Emissive
  ao: "csm_AO",
  // AO
  bump: "csm_Bump",
  // Bump
  depthAlpha: "csm_DepthAlpha"
  // Depth
};
var lt;
var Un;
var dd = (lt = {}, Ue(lt, "".concat(_e.normal), {
  "#include <beginnormal_vertex>": `
    vec3 objectNormal = `.concat(_e.normal, `;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)
}), Ue(lt, "".concat(_e.position), {
  "#include <begin_vertex>": `
    vec3 transformed = `.concat(_e.position, `;
  `)
}), Ue(lt, "".concat(_e.positionRaw), {
  "#include <begin_vertex>": `
    vec4 csm_internal_positionUnprojected = `.concat(_e.positionRaw, `;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)
}), Ue(lt, "".concat(_e.pointSize), {
  "gl_PointSize = size;": `
    gl_PointSize = `.concat(_e.pointSize, `;
    `)
}), Ue(lt, "".concat(_e.diffuseColor), {
  "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = `.concat(_e.diffuseColor, `;
  `)
}), Ue(lt, "".concat(_e.fragColor), {
  "#include <dithering_fragment>": `
    #include <dithering_fragment>
    gl_FragColor  = `.concat(_e.fragColor, `;
  `)
}), Ue(lt, "".concat(_e.emissive), {
  "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = `.concat(_e.emissive, `;
    `)
}), Ue(lt, "".concat(_e.roughness), {
  "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(_e.roughness, `;
    `)
}), Ue(lt, "".concat(_e.metalness), {
  "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(_e.metalness, `;
    `)
}), Ue(lt, "".concat(_e.ao), {
  "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(_e.ao, `;
    `)
}), Ue(lt, "".concat(_e.bump), {
  "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(_e.bump, " - (dot(").concat(_e.bump, `, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)
}), Ue(lt, "".concat(_e.depthAlpha), {
  "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(_e.depthAlpha, ` );
    `),
  "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(_e.depthAlpha, `;
    `)
}), lt);
var pd = (Un = {}, Ue(Un, "".concat(_e.position), {
  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(_e.position, `, 1.0 );
  `)
}), Ue(Un, "".concat(_e.positionRaw), {
  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );": `
    gl_Position = `.concat(_e.position, `;
  `)
}), Ue(Un, "".concat(_e.diffuseColor), {
  "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(_e.diffuseColor, `;
  `)
}), Ue(Un, "".concat(_e.fragColor), {
  "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(_e.fragColor, `;
  `)
}), Un);
var md = (
  /* glsl */
  `

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`
);
var gd = (
  /* glsl */
  `
    varying mat4 csm_internal_vModelViewMatrix;
`
);
var yd = (
  /* glsl */
  `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`
);
var vd = (
  /* glsl */
  `
    varying mat4 csm_internal_vModelViewMatrix;
`
);
var _d = (
  /* glsl */
  `
    
`
);
var ct;
var xd = (ct = {}, Ue(ct, "".concat(_e.position), "*"), Ue(ct, "".concat(_e.positionRaw), "*"), Ue(ct, "".concat(_e.normal), "*"), Ue(ct, "".concat(_e.pointSize), ["PointsMaterial"]), Ue(ct, "".concat(_e.diffuseColor), "*"), Ue(ct, "".concat(_e.fragColor), "*"), Ue(ct, "".concat(_e.emissive), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ue(ct, "".concat(_e.roughness), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ue(ct, "".concat(_e.metalness), ["MeshStandardMaterial", "MeshPhysicalMaterial"]), Ue(ct, "".concat(_e.ao), ["MeshStandardMaterial", "MeshPhysicalMaterial", "MeshBasicMaterial", "MeshLambertMaterial", "MeshPhongMaterial", "MeshToonMaterial"]), Ue(ct, "".concat(_e.bump), ["MeshLambertMaterial", "MeshMatcapMaterial", "MeshNormalMaterial", "MeshPhongMaterial", "MeshPhysicalMaterial", "MeshStandardMaterial", "MeshToonMaterial", "ShadowMaterial"]), Ue(ct, "".concat(_e.depthAlpha), "*"), ct);
var wd = ["baseMaterial", "fragmentShader", "vertexShader", "uniforms", "patchMap", "cacheKey", "silent"];
var Td = function(e, t, n) {
  return e.split(t).join(n);
};
var bd = function(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};
var Ed = function(e, t) {
  return new RegExp("\\b".concat(bd(t), "\\b")).test(e);
};
function Md(o) {
  try {
    new o();
  } catch (e) {
    if (e.message.indexOf("is not a constructor") >= 0)
      return false;
  }
  return true;
}
function Sd(o, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  Object.assign(o, e);
  var n = Object.getPrototypeOf(e);
  Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(s) {
    var i = typeof s[1].get == "function", r = typeof s[1].set == "function", a = typeof s[1].value == "function", l = s[0] === "constructor";
    return (i || r || a) && !l;
  }).forEach(function(s) {
    if (typeof o[s[0]] == "function") {
      t || console.warn("Function ".concat(s[0], " already exists on CSM, renaming to base_").concat(s[0]));
      var i = "base_".concat(s[0]);
      o[i] = s[1].value.bind(o);
      return;
    }
    Object.defineProperty(o, s[0], s[1]);
  });
}
function Ad(o) {
  var e = o.toString().trim(), t = e.substring(e.indexOf("{") + 1, e.lastIndexOf("}"));
  return t.trim().length === 0;
}
function Ao(o) {
  return o.replace(/\s/g, "");
}
function Pd(o, e, t) {
  var n = o.lastIndexOf(e);
  return n === -1 ? o : o.substring(0, n) + t + o.substring(n + e.length);
}
var Rd = function(o) {
  cd(t, o);
  var e = fd(t);
  function t(n) {
    var s, i = n.baseMaterial, r = n.fragmentShader, a = n.vertexShader, l = n.uniforms, c = n.patchMap, u = n.cacheKey, h = n.silent, m = od(n, wd);
    ad(this, t);
    var p;
    if (Md(i) ? p = new i(m) : (p = i, Object.assign(p, m)), p.type === "RawShaderMaterial")
      throw new Error("CustomShaderMaterial does not support RawShaderMaterial");
    s = e.call(this), Sd(Wa(s), p, h), s.__csm = {
      patchMap: c || {},
      fragmentShader: r || "",
      vertexShader: a || "",
      cacheKey: u,
      baseMaterial: i,
      instanceID: MathUtils.generateUUID(),
      type: p.type,
      isAlreadyExtended: !Ad(p.onBeforeCompile),
      cacheHash: "",
      silent: h
    }, s.uniforms = kn(kn({}, s.uniforms || {}), l || {});
    {
      var v = s.__csm, _ = v.fragmentShader, y = v.vertexShader, E = s.uniforms;
      s.__csm.cacheHash = s.getCacheHash(), s.generateMaterial(_, y, E);
    }
    return s;
  }
  return ld(t, [{
    key: "update",
    value: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.uniforms = s.uniforms || this.uniforms, Object.assign(this.__csm, s);
      var i = this.__csm, r = i.fragmentShader, a = i.vertexShader, l = this.uniforms, c = this.getCacheHash();
      this.__csm.cacheHash = c, this.generateMaterial(r, a, l);
    }
    /**
     * Returns a new instance of this material with the same options.
     *
     * @returns A clone of this material.
     */
  }, {
    key: "clone",
    value: function() {
      var s = {
        baseMaterial: this.__csm.baseMaterial,
        fragmentShader: this.__csm.fragmentShader,
        vertexShader: this.__csm.vertexShader,
        uniforms: this.uniforms,
        silent: this.__csm.silent,
        patchMap: this.__csm.patchMap,
        cacheKey: this.__csm.cacheKey
      }, i = new this.constructor(s);
      return Object.assign(this, i), i;
    }
    /**
     * Internally calculates the cache key for this instance of CSM.
     * If no specific CSM inputs are provided, the cache key is the same as the default
     * cache key, i.e. `baseMaterial.onBeforeCompile.toString()`. Not meant to be called directly.
     *
     * This method is quite expensive owing to the hashing function and string manip.
     *
     * TODO:
     * - Optimize string manip.
     * - Find faster hash function
     *
     * @returns {string} A cache key for this instance of CSM.
     */
  }, {
    key: "getCacheHash",
    value: function() {
      var s = this.__csm, i = s.fragmentShader, r = s.vertexShader, a = this.uniforms, l = Object.values(a).reduce(function(u, h) {
        var m = h.value;
        return u + JSON.stringify(m);
      }, ""), c = Ao(i) + Ao(r) + l;
      return c.trim().length > 0 ? Lf(c) : this.customProgramCacheKey();
    }
    /**
     * Does the internal shader generation. Not meant to be called directly.
     *
     * @param fragmentShader
     * @param vertexShader
     * @param uniforms
     */
  }, {
    key: "generateMaterial",
    value: function(s, i, r) {
      var a = this, l = this.parseShader(s), c = this.parseShader(i);
      this.uniforms = r || {}, this.customProgramCacheKey = function() {
        return a.__csm.cacheHash;
      };
      var u = function(p) {
        try {
          if (l) {
            var v = a.patchShader(l, p.fragmentShader, true);
            p.fragmentShader = a.getMaterialDefine() + v;
          }
          if (c) {
            var _ = a.patchShader(c, p.vertexShader);
            p.vertexShader = `#define IS_VERTEX;
` + _, p.vertexShader = a.getMaterialDefine() + p.vertexShader;
          }
          p.uniforms = kn(kn({}, p.uniforms), a.uniforms), a.uniforms = p.uniforms;
        } catch (y) {
          console.error(y);
        }
      };
      if (this.__csm.isAlreadyExtended) {
        var h = this.onBeforeCompile;
        this.onBeforeCompile = function(m, p) {
          h(m, p), u(m);
        };
      } else
        this.onBeforeCompile = u;
      this.needsUpdate = true;
    }
    /**
     * Patches input shader with custom shader. Not meant to be called directly.
     * @param customShader
     * @param shader
     * @param isFrag
     * @returns
     */
  }, {
    key: "patchShader",
    value: function(s, i, r) {
      var a = this, l = i, c = kn(kn({}, this.getPatchMapForMaterial()), this.__csm.patchMap);
      Object.keys(c).forEach(function(m) {
        Object.keys(c[m]).forEach(function(p) {
          var v = xd[m], _ = a.__csm.type;
          if (m === "*" || Ed(s.main, m))
            if (!v || Array.isArray(v) && v.includes(_) || v === "*")
              l = Td(l, p, c[m][p]);
            else
              throw new Error("CSM: ".concat(m, " is not available in ").concat(_, ". Shader cannot compile."));
        });
      }), l = l.replace("void main() {", `
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(r ? vd : gd, `
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(s.header, `
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(md, `
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(r ? _d : yd, `
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));
      var u = this.__csm.isAlreadyExtended, h = l.includes("// CSM_END");
      return u && h ? l = Pd(l, "// CSM_END", `
          // CSM_END
          `.concat(s.main, `
          // CSM_END
        `)) : l = l.replace("// CSM_START", `
        // CSM_START
        `.concat(s.main, `
        // CSM_END
          `)), l = s.defines + l, l;
    }
    /**
     * This method is expensive owing to the tokenization and parsing of the shader.
     *
     * TODO:
     * - Replace tokenization with regex
     *
     * @param shader
     * @returns
     */
  }, {
    key: "parseShader",
    value: function(s) {
      if (s) {
        var i = s.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm, ""), r = Qf(i), a = sd(r), l = a.map(function(h) {
          return h.name;
        }).indexOf("main"), c = Eo(r.slice(0, l >= 0 ? a[l].outer[0] : void 0)), u = l >= 0 ? this.getShaderFromIndex(r, a[l].body) : "";
        return {
          defines: "",
          header: c,
          main: u
        };
      }
    }
    /**
     * Gets the material type as a string. Not meant to be called directly.
     * @returns
     */
  }, {
    key: "getMaterialDefine",
    value: function() {
      var s = this.__csm.type;
      return s ? "#define IS_".concat(s.toUpperCase(), `;
`) : `#define IS_UNKNOWN;
`;
    }
    /**
     * Gets the right patch map for the material. Not meant to be called directly.
     * @returns
     */
  }, {
    key: "getPatchMapForMaterial",
    value: function() {
      switch (this.__csm.type) {
        case "ShaderMaterial":
          return pd;
        default:
          return dd;
      }
    }
    /**
     * Gets the shader from the tokens. Not meant to be called directly.
     * @param tokens
     * @param index
     * @returns
     */
  }, {
    key: "getShaderFromIndex",
    value: function(s, i) {
      return Eo(s.slice(i[0], i[1]));
    }
  }]), t;
}(Material);
var Cd = ["args"];
var ng = defineComponent({
  __name: "index",
  props: {
    baseMaterial: { type: Function },
    vertexShader: {},
    fragmentShader: {},
    silent: { type: Boolean },
    uniforms: {}
  },
  setup(o, { expose: e }) {
    const t = o, n = shallowRef(null), { extend: s } = dr();
    return s({ CustomShaderMaterial: Rd }), e({ value: n }), (i, r) => (openBlock(), createElementBlock("TresCustomShaderMaterial", {
      ref_key: "customShaderMaterialClass",
      ref: n,
      args: [t]
    }, null, 8, Cd));
  }
});
var Id = () => parseInt(REVISION.replace(/\D+/g, ""));
var Dd = Id();
var Ld = class extends ShaderMaterial {
  constructor(t = new Vector2()) {
    super({
      uniforms: {
        inputBuffer: new Uniform(null),
        depthBuffer: new Uniform(null),
        resolution: new Uniform(new Vector2()),
        texelSize: new Uniform(new Vector2()),
        halfTexelSize: new Uniform(new Vector2()),
        kernel: new Uniform(0),
        scale: new Uniform(1),
        cameraNear: new Uniform(0),
        cameraFar: new Uniform(1),
        minDepthThreshold: new Uniform(0),
        maxDepthThreshold: new Uniform(1),
        depthScale: new Uniform(0),
        depthToBlurRatioBias: new Uniform(0.25)
      },
      fragmentShader: `#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${Dd >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }`,
      vertexShader: `uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,
      blending: NoBlending,
      depthWrite: false,
      depthTest: false
    });
    oe(this, "kernel");
    this.toneMapped = false, this.setTexelSize(t.x, t.y), this.kernel = new Float32Array([0, 1, 2, 2, 3]);
  }
  setTexelSize(t, n) {
    this.uniforms.texelSize.value.set(t, n), this.uniforms.halfTexelSize.value.set(t, n).multiplyScalar(0.5);
  }
  setResolution(t) {
    this.uniforms.resolution.value.copy(t);
  }
};
var Od = class {
  constructor({
    resolution: e,
    width: t = 500,
    height: n = 500,
    minDepthThreshold: s = 0,
    maxDepthThreshold: i = 1,
    depthScale: r = 0,
    depthToBlurRatioBias: a = 0.25
  }) {
    oe(this, "renderTargetA");
    oe(this, "renderTargetB");
    oe(this, "convolutionMaterial");
    oe(this, "scene");
    oe(this, "camera");
    oe(this, "screen");
    oe(this, "renderToScreen", false);
    this.renderTargetA = new WebGLRenderTarget(e, e, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      stencilBuffer: false,
      depthBuffer: false,
      type: HalfFloatType
    }), this.renderTargetB = this.renderTargetA.clone(), this.convolutionMaterial = new Ld(), this.convolutionMaterial.setTexelSize(1 / t, 1 / n), this.convolutionMaterial.setResolution(new Vector2(t, n)), this.scene = new Scene(), this.camera = new Camera(), this.convolutionMaterial.uniforms.minDepthThreshold.value = s, this.convolutionMaterial.uniforms.maxDepthThreshold.value = i, this.convolutionMaterial.uniforms.depthScale.value = r, this.convolutionMaterial.uniforms.depthToBlurRatioBias.value = a, this.convolutionMaterial.defines.USE_DEPTH = r > 0;
    const l = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), c = new Float32Array([0, 0, 2, 0, 0, 2]), u = new BufferGeometry();
    u.setAttribute("position", new BufferAttribute(l, 3)), u.setAttribute("uv", new BufferAttribute(c, 2)), this.screen = new Mesh(u, this.convolutionMaterial), this.screen.frustumCulled = false, this.scene.add(this.screen);
  }
  render(e, t, n) {
    const s = this.scene, i = this.camera, r = this.renderTargetA, a = this.renderTargetB, l = this.convolutionMaterial, c = l.uniforms;
    c.depthBuffer.value = t.depthTexture;
    const u = l.kernel;
    let h = t, m, p, v;
    for (p = 0, v = u.length - 1; p < v; ++p)
      m = p & 1 ? a : r, c.kernel.value = u[p], c.inputBuffer.value = h.texture, e.setRenderTarget(m), e.render(s, i), h = m;
    c.kernel.value = u[p], c.inputBuffer.value = h.texture, e.setRenderTarget(this.renderToScreen ? null : n), e.render(s, i);
  }
};
var Fd = class extends MeshStandardMaterial {
  constructor(t = {}) {
    super(t);
    oe(this, "_tDepth", { value: null });
    oe(this, "_distortionMap", { value: null });
    oe(this, "_tDiffuse", { value: null });
    oe(this, "_tDiffuseBlur", { value: null });
    oe(this, "_textureMatrix", { value: null });
    oe(this, "_hasBlur", { value: false });
    oe(this, "_mirror", { value: 0 });
    oe(this, "_mixBlur", { value: 0 });
    oe(this, "_blurStrength", { value: 0.5 });
    oe(this, "_minDepthThreshold", { value: 0.9 });
    oe(this, "_maxDepthThreshold", { value: 1 });
    oe(this, "_depthScale", { value: 0 });
    oe(this, "_depthToBlurRatioBias", { value: 0.25 });
    oe(this, "_distortion", { value: 1 });
    oe(this, "_mixContrast", { value: 1 });
    this.setValues(t);
  }
  onBeforeCompile(t) {
    var n;
    (n = t.defines) != null && n.USE_UV || (t.defines.USE_UV = ""), t.uniforms.hasBlur = this._hasBlur, t.uniforms.tDiffuse = this._tDiffuse, t.uniforms.tDepth = this._tDepth, t.uniforms.distortionMap = this._distortionMap, t.uniforms.tDiffuseBlur = this._tDiffuseBlur, t.uniforms.textureMatrix = this._textureMatrix, t.uniforms.mirror = this._mirror, t.uniforms.mixBlur = this._mixBlur, t.uniforms.mixStrength = this._blurStrength, t.uniforms.minDepthThreshold = this._minDepthThreshold, t.uniforms.maxDepthThreshold = this._maxDepthThreshold, t.uniforms.depthScale = this._depthScale, t.uniforms.depthToBlurRatioBias = this._depthToBlurRatioBias, t.uniforms.distortion = this._distortion, t.uniforms.mixContrast = this._mixContrast, t.vertexShader = `
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${t.vertexShader}`, t.vertexShader = t.vertexShader.replace(
      "#include <project_vertex>",
      `#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`
    ), t.fragmentShader = `
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${t.fragmentShader}`, t.fragmentShader = t.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `
    );
  }
  get tDiffuse() {
    return this._tDiffuse.value;
  }
  set tDiffuse(t) {
    this._tDiffuse.value = t;
  }
  get tDepth() {
    return this._tDepth.value;
  }
  set tDepth(t) {
    this._tDepth.value = t;
  }
  get distortionMap() {
    return this._distortionMap.value;
  }
  set distortionMap(t) {
    this._distortionMap.value = t;
  }
  get tDiffuseBlur() {
    return this._tDiffuseBlur.value;
  }
  set tDiffuseBlur(t) {
    this._tDiffuseBlur.value = t;
  }
  get textureMatrix() {
    return this._textureMatrix.value;
  }
  set textureMatrix(t) {
    this._textureMatrix.value = t;
  }
  get hasBlur() {
    return this._hasBlur.value;
  }
  set hasBlur(t) {
    this._hasBlur.value = t;
  }
  get mirror() {
    return this._mirror.value;
  }
  set mirror(t) {
    this._mirror.value = t;
  }
  get mixBlur() {
    return this._mixBlur.value;
  }
  set mixBlur(t) {
    this._mixBlur.value = t;
  }
  get mixStrength() {
    return this._blurStrength.value;
  }
  set mixStrength(t) {
    this._blurStrength.value = t;
  }
  get minDepthThreshold() {
    return this._minDepthThreshold.value;
  }
  set minDepthThreshold(t) {
    this._minDepthThreshold.value = t;
  }
  get maxDepthThreshold() {
    return this._maxDepthThreshold.value;
  }
  set maxDepthThreshold(t) {
    this._maxDepthThreshold.value = t;
  }
  get depthScale() {
    return this._depthScale.value;
  }
  set depthScale(t) {
    this._depthScale.value = t;
  }
  get depthToBlurRatioBias() {
    return this._depthToBlurRatioBias.value;
  }
  set depthToBlurRatioBias(t) {
    this._depthToBlurRatioBias.value = t;
  }
  get distortion() {
    return this._distortion.value;
  }
  set distortion(t) {
    this._distortion.value = t;
  }
  get mixContrast() {
    return this._mixContrast.value;
  }
  set mixContrast(t) {
    this._mixContrast.value = t;
  }
};
var kd = ["texture-matrix", "mirror", "t-diffuse", "t-depth", "t-diffuse-blur", "has-blur", "mix-strength", "min-depth-threshold", "max-depth-threshold", "depth-scale", "depth-to-blur-ratio-bias", "distortion", "distortionMap", "mix-contrast", "defines-USE_BLUR", "defines-USE_DEPTH", "defines-USE_DISTORTION"];
var sg = defineComponent({
  __name: "index",
  props: {
    resolution: { default: 256 },
    mixBlur: { default: 0 },
    mixStrength: { default: 1 },
    blur: { default: () => [0, 0] },
    mirror: { default: 0 },
    minDepthThreshold: { default: 0.9 },
    maxDepthThreshold: { default: 1 },
    depthScale: { default: 0 },
    depthToBlurRatioBias: { default: 0.25 },
    distortionMap: {},
    distortion: { default: 1 },
    mixContrast: { default: 1 },
    reflectorOffset: { default: 0 }
  },
  setup(o) {
    const e = o;
    function t(Z, W) {
      let X;
      return Z.traverse((V) => {
        V.isMesh && V.material && V.material.uuid === W && (X = V);
      }), X;
    }
    function n(Z) {
      var X, V;
      if (f.reflectorWorldPosition.setFromMatrixPosition(Z.matrixWorld), f.cameraWorldPosition.setFromMatrixPosition((X = y.value) == null ? void 0 : X.matrixWorld), f.rotationMatrix.extractRotation(Z.matrixWorld), f.normal.set(0, 0, 1), f.normal.applyMatrix4(f.rotationMatrix), f.reflectorWorldPosition.addScaledVector(f.normal, e.reflectorOffset), f.view.subVectors(f.reflectorWorldPosition, f.cameraWorldPosition), f.view.dot(f.normal) > 0)
        return;
      f.view.reflect(f.normal).negate(), f.view.add(f.reflectorWorldPosition), f.rotationMatrix.extractRotation((V = y.value) == null ? void 0 : V.matrixWorld), f.lookAtPosition.set(0, 0, -1), f.lookAtPosition.applyMatrix4(f.rotationMatrix), f.lookAtPosition.add(f.cameraWorldPosition), f.target.subVectors(f.reflectorWorldPosition, f.lookAtPosition), f.target.reflect(f.normal).negate(), f.target.add(f.reflectorWorldPosition), f.virtualCamera.position.copy(f.view), f.virtualCamera.up.set(0, 1, 0), f.virtualCamera.up.applyMatrix4(f.rotationMatrix), f.virtualCamera.up.reflect(f.normal), f.virtualCamera.lookAt(f.target), f.virtualCamera.far = (y == null ? void 0 : y.value).far, f.virtualCamera.updateMatrixWorld(), f.virtualCamera.projectionMatrix.copy((y == null ? void 0 : y.value).projectionMatrix), f.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), f.textureMatrix.multiply(f.virtualCamera.projectionMatrix), f.textureMatrix.multiply(f.virtualCamera.matrixWorldInverse), f.textureMatrix.multiply(Z.matrixWorld), f.reflectorPlane.setFromNormalAndCoplanarPoint(f.normal, f.reflectorWorldPosition), f.reflectorPlane.applyMatrix4(f.virtualCamera.matrixWorldInverse), f.clipPlane.set(
        f.reflectorPlane.normal.x,
        f.reflectorPlane.normal.y,
        f.reflectorPlane.normal.z,
        f.reflectorPlane.constant
      );
      const W = f.virtualCamera.projectionMatrix;
      f.q.x = (Math.sign(f.clipPlane.x) + W.elements[8]) / W.elements[0], f.q.y = (Math.sign(f.clipPlane.y) + W.elements[9]) / W.elements[5], f.q.z = -1, f.q.w = (1 + W.elements[10]) / W.elements[14], f.clipPlane.multiplyScalar(2 / f.clipPlane.dot(f.q)), W.elements[2] = f.clipPlane.x, W.elements[6] = f.clipPlane.y, W.elements[10] = f.clipPlane.z + 1, W.elements[14] = f.clipPlane.w;
    }
    const {
      resolution: s,
      minDepthThreshold: i,
      maxDepthThreshold: r,
      depthScale: a,
      depthToBlurRatioBias: l,
      blur: c,
      mirror: u,
      mixBlur: h,
      mixStrength: m,
      distortion: p,
      distortionMap: v,
      mixContrast: _
    } = toRefs(e), { camera: y, scene: E, renderer: R, extend: T } = dr();
    T({ MeshReflectorMaterial: Fd });
    const g = shallowRef(), A2 = shallowRef(), x = shallowRef(), M = shallowRef(), d = computed(() => typeof c.value == "number" ? [c.value, c.value] : c.value), w = computed(() => d.value[0] > 0 || d.value[1] > 0), f = {
      reflectorPlane: new Plane(),
      normal: new Vector3(),
      reflectorWorldPosition: new Vector3(),
      cameraWorldPosition: new Vector3(),
      rotationMatrix: new Matrix4(),
      lookAtPosition: new Vector3(0, 0, -1),
      clipPlane: new Vector4(),
      view: new Vector3(),
      target: new Vector3(),
      q: new Vector4(),
      virtualCamera: new PerspectiveCamera(),
      textureMatrix: new Matrix4()
    };
    watchEffect(() => {
      var W;
      (W = g.value) == null || W.texture.dispose();
      const Z = {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        type: HalfFloatType
      };
      g.value = new WebGLRenderTarget(
        s.value,
        s.value,
        {
          ...Z,
          depthBuffer: true,
          depthTexture: new DepthTexture(
            s.value,
            s.value,
            DepthFormat,
            UnsignedShortType
          )
        }
      ), A2.value = new WebGLRenderTarget(
        s.value,
        s.value,
        Z
      ), x.value = new Od({
        resolution: s.value,
        width: d.value[0],
        height: d.value[1],
        minDepthThreshold: i.value,
        maxDepthThreshold: r.value,
        depthScale: a.value,
        depthToBlurRatioBias: l.value
      }), M.value = {
        mirror: u,
        textureMatrix: f.textureMatrix,
        mixBlur: h,
        tDiffuse: g.value.texture,
        tDepth: g.value.depthTexture,
        tDiffuseBlur: g.value.texture,
        hasBlur: w,
        mixStrength: m,
        minDepthThreshold: i,
        maxDepthThreshold: r,
        depthScale: a,
        depthToBlurRatioBias: l,
        distortion: p,
        distortionMap: v.value,
        mixContrast: _,
        "defines-USE_BLUR": w.value ? "" : void 0,
        "defines-USE_DEPTH": a.value > 0 ? "" : void 0,
        "defines-USE_DISTORTION": v.value ? "" : void 0
      };
    });
    const P = shallowRef(), { onLoop: I } = re();
    I(() => {
      var V;
      if (!P.value || !R.value || !g.value || !y.value)
        return;
      const Z = t(E.value, P.value.uuid);
      if (!Z)
        return;
      Z.visible = false;
      const W = R.value.xr.enabled, X = R.value.shadowMap.autoUpdate;
      n(Z), R.value.shadowMap.autoUpdate = false, R.value.setRenderTarget(g.value), R.value.autoClear || R.value.clear(), R.value.render(E.value, f.virtualCamera), (V = x == null ? void 0 : x.value) == null || V.render(R.value, g.value, A2.value), R.value.xr.enabled = W, R.value.shadowMap.autoUpdate = X, Z.visible = true, R.value.setRenderTarget(null);
    });
    const K = useAttrs(), N = computed(() => {
      const Z = {};
      return Object.assign(Z, e), Object.assign(Z, K.value), Z;
    });
    return onBeforeUnmount(() => {
      var Z, W;
      (Z = g == null ? void 0 : g.value) == null || Z.dispose(), (W = A2 == null ? void 0 : A2.value) == null || W.dispose();
    }), (Z, W) => {
      var X, V, ne;
      return openBlock(), createElementBlock("TresMeshReflectorMaterial", mergeProps({
        key: `key${M.value["defines-USE_BLUR"]}${M.value["defines-USE_DEPTH"]}${M.value["defines-USE_DISTORTION"]}`,
        ref_key: "materialRef",
        ref: P
      }, N.value, {
        "texture-matrix": f.textureMatrix,
        mirror: unref(u),
        "t-diffuse": (X = g.value) == null ? void 0 : X.texture,
        "t-depth": (V = g.value) == null ? void 0 : V.depthTexture,
        "t-diffuse-blur": (ne = A2.value) == null ? void 0 : ne.texture,
        "has-blur": w.value,
        "mix-strength": unref(m),
        "min-depth-threshold": unref(i),
        "max-depth-threshold": unref(r),
        "depth-scale": unref(a),
        "depth-to-blur-ratio-bias": unref(l),
        distortion: unref(p),
        distortionMap: unref(v),
        "mix-contrast": unref(_),
        "defines-USE_BLUR": w.value ? "" : void 0,
        "defines-USE_DEPTH": unref(a) > 0 ? "" : void 0,
        "defines-USE_DISTORTION": unref(v) ? "" : void 0
      }), null, 16, kd);
    };
  }
});
var Ud = ["args"];
var Bd = ["color"];
var ig = defineComponent({
  __name: "Box",
  props: {
    args: { default: () => [1, 1, 1] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "boxRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresBoxGeometry", { args: unref(n) }, null, 8, Ud),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, Bd)
      ])
    ], 16));
  }
});
var Po = new Box3();
var Bs = new Vector3();
var $a = class extends InstancedBufferGeometry {
  constructor() {
    super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new Float32BufferAttribute(e, 3)), this.setAttribute("uv", new Float32BufferAttribute(t, 2));
  }
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new InstancedInterleavedBuffer(t, 6, 1);
    return this.setAttribute("instanceStart", new InterleavedBufferAttribute(n, 3, 0)), this.setAttribute("instanceEnd", new InterleavedBufferAttribute(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new InstancedInterleavedBuffer(t, 6, 1);
    return this.setAttribute("instanceColorStart", new InterleavedBufferAttribute(n, 3, 0)), this.setAttribute("instanceColorEnd", new InterleavedBufferAttribute(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new WireframeGeometry(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Box3());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), Po.setFromBufferAttribute(t), this.boundingBox.union(Po));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Sphere()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let s = 0;
      for (let i = 0, r = e.count; i < r; i++)
        Bs.fromBufferAttribute(e, i), s = Math.max(s, n.distanceToSquared(Bs)), Bs.fromBufferAttribute(t, i), s = Math.max(s, n.distanceToSquared(Bs));
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(e) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e);
  }
};
UniformsLib.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new Vector2(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
ShaderLib.line = {
  uniforms: UniformsUtils.merge([
    UniformsLib.common,
    UniformsLib.fog,
    UniformsLib.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
var _r = class extends ShaderMaterial {
  constructor(e) {
    super({
      type: "LineMaterial",
      uniforms: UniformsUtils.clone(ShaderLib.line.uniforms),
      vertexShader: ShaderLib.line.vertexShader,
      fragmentShader: ShaderLib.line.fragmentShader,
      clipping: true
      // required for clipping support
    }), this.isLineMaterial = true, this.setValues(e);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === true !== this.dashed && (this.needsUpdate = true), e === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === true !== this.alphaToCoverage && (this.needsUpdate = true), e === true ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = true) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = false));
  }
};
var Ro = new Vector3();
var Co = new Vector3();
var et = new Vector4();
var tt = new Vector4();
var Ct = new Vector4();
var Fi = new Vector3();
var ki = new Matrix4();
var nt = new Line3();
var Io = new Vector3();
var Ns = new Box3();
var zs = new Sphere();
var It = new Vector4();
var Ot;
var xn;
function Do(o, e, t) {
  return It.set(0, 0, -e, 1).applyMatrix4(o.projectionMatrix), It.multiplyScalar(1 / It.w), It.x = xn / t.width, It.y = xn / t.height, It.applyMatrix4(o.projectionMatrixInverse), It.multiplyScalar(1 / It.w), Math.abs(Math.max(It.x, It.y));
}
function Nd(o, e) {
  const t = o.matrixWorld, n = o.geometry, s = n.attributes.instanceStart, i = n.attributes.instanceEnd, r = Math.min(n.instanceCount, s.count);
  for (let a = 0, l = r; a < l; a++) {
    nt.start.fromBufferAttribute(s, a), nt.end.fromBufferAttribute(i, a), nt.applyMatrix4(t);
    const c = new Vector3(), u = new Vector3();
    Ot.distanceSqToSegment(nt.start, nt.end, u, c), u.distanceTo(c) < xn * 0.5 && e.push({
      point: u,
      pointOnLine: c,
      distance: Ot.origin.distanceTo(u),
      object: o,
      face: null,
      faceIndex: a,
      uv: null,
      uv1: null
    });
  }
}
function zd(o, e, t) {
  const n = e.projectionMatrix, i = o.material.resolution, r = o.matrixWorld, a = o.geometry, l = a.attributes.instanceStart, c = a.attributes.instanceEnd, u = Math.min(a.instanceCount, l.count), h = -e.near;
  Ot.at(1, Ct), Ct.w = 1, Ct.applyMatrix4(e.matrixWorldInverse), Ct.applyMatrix4(n), Ct.multiplyScalar(1 / Ct.w), Ct.x *= i.x / 2, Ct.y *= i.y / 2, Ct.z = 0, Fi.copy(Ct), ki.multiplyMatrices(e.matrixWorldInverse, r);
  for (let m = 0, p = u; m < p; m++) {
    if (et.fromBufferAttribute(l, m), tt.fromBufferAttribute(c, m), et.w = 1, tt.w = 1, et.applyMatrix4(ki), tt.applyMatrix4(ki), et.z > h && tt.z > h)
      continue;
    if (et.z > h) {
      const T = et.z - tt.z, g = (et.z - h) / T;
      et.lerp(tt, g);
    } else if (tt.z > h) {
      const T = tt.z - et.z, g = (tt.z - h) / T;
      tt.lerp(et, g);
    }
    et.applyMatrix4(n), tt.applyMatrix4(n), et.multiplyScalar(1 / et.w), tt.multiplyScalar(1 / tt.w), et.x *= i.x / 2, et.y *= i.y / 2, tt.x *= i.x / 2, tt.y *= i.y / 2, nt.start.copy(et), nt.start.z = 0, nt.end.copy(tt), nt.end.z = 0;
    const _ = nt.closestPointToPointParameter(Fi, true);
    nt.at(_, Io);
    const y = MathUtils.lerp(et.z, tt.z, _), E = y >= -1 && y <= 1, R = Fi.distanceTo(Io) < xn * 0.5;
    if (E && R) {
      nt.start.fromBufferAttribute(l, m), nt.end.fromBufferAttribute(c, m), nt.start.applyMatrix4(r), nt.end.applyMatrix4(r);
      const T = new Vector3(), g = new Vector3();
      Ot.distanceSqToSegment(nt.start, nt.end, g, T), t.push({
        point: g,
        pointOnLine: T,
        distance: Ot.origin.distanceTo(g),
        object: o,
        face: null,
        faceIndex: m,
        uv: null,
        uv1: null
      });
    }
  }
}
var Hd = class extends Mesh {
  constructor(e = new $a(), t = new _r({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = true, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, s = new Float32Array(2 * t.count);
    for (let r = 0, a = 0, l = t.count; r < l; r++, a += 2)
      Ro.fromBufferAttribute(t, r), Co.fromBufferAttribute(n, r), s[a] = a === 0 ? 0 : s[a - 1], s[a + 1] = s[a] + Ro.distanceTo(Co);
    const i = new InstancedInterleavedBuffer(s, 2, 1);
    return e.setAttribute("instanceDistanceStart", new InterleavedBufferAttribute(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new InterleavedBufferAttribute(i, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, s = e.camera;
    s === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const i = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    Ot = e.ray;
    const r = this.matrixWorld, a = this.geometry, l = this.material;
    xn = l.linewidth + i, a.boundingSphere === null && a.computeBoundingSphere(), zs.copy(a.boundingSphere).applyMatrix4(r);
    let c;
    if (n)
      c = xn * 0.5;
    else {
      const h = Math.max(s.near, zs.distanceToPoint(Ot.origin));
      c = Do(s, h, l.resolution);
    }
    if (zs.radius += c, Ot.intersectsSphere(zs) === false)
      return;
    a.boundingBox === null && a.computeBoundingBox(), Ns.copy(a.boundingBox).applyMatrix4(r);
    let u;
    if (n)
      u = xn * 0.5;
    else {
      const h = Math.max(s.near, Ns.distanceToPoint(Ot.origin));
      u = Do(s, h, l.resolution);
    }
    Ns.expandByScalar(u), Ot.intersectsBox(Ns) !== false && (n ? Nd(this, t) : zd(this, s, t));
  }
};
var Za = class extends $a {
  constructor() {
    super(), this.isLineGeometry = true, this.type = "LineGeometry";
  }
  setPositions(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let s = 0; s < t; s += 3)
      n[2 * s] = e[s], n[2 * s + 1] = e[s + 1], n[2 * s + 2] = e[s + 2], n[2 * s + 3] = e[s + 3], n[2 * s + 4] = e[s + 4], n[2 * s + 5] = e[s + 5];
    return super.setPositions(n), this;
  }
  setColors(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let s = 0; s < t; s += 3)
      n[2 * s] = e[s], n[2 * s + 1] = e[s + 1], n[2 * s + 2] = e[s + 2], n[2 * s + 3] = e[s + 3], n[2 * s + 4] = e[s + 4], n[2 * s + 5] = e[s + 5];
    return super.setColors(n), this;
  }
  fromLine(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
};
var Gd = class extends Hd {
  constructor(e = new Za(), t = new _r({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLine2 = true, this.type = "Line2";
  }
};
var jd = ["object"];
var Vd = defineComponent({
  __name: "Line2",
  props: {
    points: {},
    vertexColors: { default: null },
    color: { default: "white" },
    lineWidth: { default: 1 },
    worldUnits: { type: Boolean, default: false },
    alphaToCoverage: { type: Boolean, default: false },
    dashed: { type: Boolean, default: false },
    dashSize: { default: 1 },
    gapSize: { default: 1 },
    dashScale: { default: 1 },
    dashOffset: { default: 0 }
  },
  setup(o) {
    const e = o;
    function t(u, h) {
      if (!u || u.length === 0)
        return new Array(h).fill(Ft(e.color));
      if (u.length === 1)
        return new Array(h).fill(Ft(u[0]));
      if (u.length === h)
        return u.map(Ft);
      const m = h - 1, p = u.map(Ft);
      closed && p.push(p[0].clone());
      const v = [p[0]], _ = m / (p.length - 1);
      for (let y = 1; y < m; y++) {
        const E = y % _ / _, R = Math.floor(y / _);
        v.push(p[R].clone().lerp(p[R + 1], E));
      }
      return v.push(p[p.length - 1]), v;
    }
    function n(u, h, m) {
      const p = h.map((_) => _ instanceof Vector3 ? [_.x, _.y, _.z] : _ instanceof Vector2 ? [_.x, _.y, 0] : Array.isArray(_) && _.length === 2 ? [_[0], _[1], 0] : _).flat();
      u.setPositions(p.flat());
      const v = t(m, h.length).map((_) => _.toArray()).flat();
      u.setColors(v), a.computeLineDistances();
    }
    function s(u, h) {
      u.color = Ft(h.color), u.linewidth = h.lineWidth, u.alphaToCoverage = h.alphaToCoverage, u.worldUnits = h.worldUnits, u.vertexColors = Array.isArray(h.vertexColors), u.dashed = h.dashed, u.dashScale = h.dashScale, u.dashSize = h.dashSize, u.dashOffset = h.dashOffset, u.gapSize = h.gapSize, u.needsUpdate = true;
    }
    const i = new _r(), r = new Za(), a = new Gd(r, i), l = dr().sizes, c = computed(() => Array.isArray(e.vertexColors));
    return s(i, e), n(r, e.points, e.vertexColors), a.computeLineDistances(), watch(() => [
      e.color,
      e.lineWidth,
      e.alphaToCoverage,
      e.worldUnits,
      c,
      e.dashed,
      e.dashScale,
      e.dashSize,
      e.dashOffset
    ], () => s(i, e)), watch([e.points, e.vertexColors], () => n(r, e.points, e.vertexColors)), watch(() => e.vertexColors, () => n(r, e.points, e.vertexColors)), watch(() => e.points, () => n(r, e.points, e.vertexColors)), watch([l.height, l.width], () => i.resolution = new Vector2(l.width.value, l.height.value)), onUnmounted(() => {
      r.dispose(), i.dispose();
    }), (u, h) => (openBlock(), createElementBlock("primitive", { object: unref(a) }, null, 8, jd));
  }
});
var rg = defineComponent({
  __name: "CatmullRomCurve3",
  props: {
    segments: { default: 20 },
    closed: { type: Boolean, default: false },
    curveType: { default: "centripetal" },
    tension: { default: 0.5 },
    points: {},
    vertexColors: {},
    color: {},
    lineWidth: {},
    alphaToCoverage: { type: Boolean },
    dashed: { type: Boolean },
    dashSize: {},
    dashScale: {},
    dashOffset: {},
    gapSize: {},
    worldUnits: { type: Boolean }
  },
  setup(o) {
    const e = o;
    function t(r, a, l, c) {
      const u = r.map(
        (h) => h instanceof Vector3 ? h : new Vector3(...h)
      );
      return new CatmullRomCurve3(u, a, l, c);
    }
    function n(r, a) {
      return r.getPoints(a);
    }
    const s = computed(() => t(e.points, e.closed, e.curveType, e.tension)), i = computed(() => n(s.value, e.segments));
    return (r, a) => (openBlock(), createBlock(Vd, {
      points: i.value,
      "vertex-colors": e.vertexColors,
      color: e.color,
      lineWidth: e.lineWidth,
      alphaToCoverage: e.alphaToCoverage,
      dashed: e.dashed,
      dashSize: e.dashSize,
      dashScale: e.dashScale,
      dashOffset: e.dashOffset,
      gapSize: e.gapSize,
      worldUnits: e.worldUnits
    }, null, 8, ["points", "vertex-colors", "color", "lineWidth", "alphaToCoverage", "dashed", "dashSize", "dashScale", "dashOffset", "gapSize", "worldUnits"]));
  }
});
var Yd = ["args"];
var Xd = ["color"];
var og = defineComponent({
  __name: "Circle",
  props: {
    args: { default: () => [1, 32, 0, Math.PI * 2] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "circleRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresCircleGeometry", { args: unref(n) }, null, 8, Yd),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, Xd)
      ])
    ], 16));
  }
});
var Wd = ["args"];
var $d = ["color"];
var ag = defineComponent({
  __name: "Cone",
  props: {
    args: { default: () => [1, 1, 12, 12, false, 0, Math.PI * 2] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "coneRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresConeGeometry", { args: unref(n) }, null, 8, Wd),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, $d)
      ])
    ], 16));
  }
});
var Zd = ["args"];
var Kd = ["color"];
var lg = defineComponent({
  __name: "Dodecahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "dodecahedronRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresDodecahedronGeometry", { args: unref(n) }, null, 8, Zd),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, Kd)
      ])
    ], 16));
  }
});
var qd = ["args"];
var Qd = ["color"];
var cg = defineComponent({
  __name: "Icosahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "icosahedronRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresIcosahedronGeometry", { args: unref(n) }, null, 8, qd),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, Qd)
      ])
    ], 16));
  }
});
var Jd = ["args"];
var ep = ["color"];
var ug = defineComponent({
  __name: "Octahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "octahedronRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresOctahedronGeometry", { args: unref(n) }, null, 8, Jd),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, ep)
      ])
    ], 16));
  }
});
var tp = ["rotation"];
var np = ["args"];
var sp = ["color"];
var hg = defineComponent({
  __name: "Plane",
  props: {
    args: { default: () => [1, 1] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "planeRef",
      ref: i,
      rotation: [-Math.PI / 2, 0, 0]
    }, r.$attrs), [
      createBaseVNode("TresPlaneGeometry", { args: unref(n) }, null, 8, np),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, sp)
      ])
    ], 16, tp));
  }
});
var ip = ["args"];
var rp = ["color"];
var fg = defineComponent({
  __name: "Ring",
  props: {
    args: { default: () => [0.5, 1, 32] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "ringRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresRingGeometry", { args: unref(n) }, null, 8, ip),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, rp)
      ])
    ], 16));
  }
});
var op = ["args"];
var ap = ["color"];
var dg = defineComponent({
  __name: "Sphere",
  props: {
    args: { default: () => [2, 32, 16] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "sphereRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresSphereGeometry", { args: unref(n) }, null, 8, op),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, ap)
      ])
    ], 16));
  }
});
var lp = ["geometry"];
var cp = ["color"];
var pg = defineComponent({
  __name: "Superformula",
  props: {
    widthSegments: { default: 32 },
    heightSegments: { default: 32 },
    numArmsA: { default: 4 },
    expA: { default: () => [40, 1.3, 0.9] },
    numArmsB: { default: 4 },
    expB: { default: () => [40, 1.3, 0.9] },
    color: { default: "white" }
  },
  setup(o, { expose: e }) {
    const t = o, { cos: n, sin: s, abs: i } = Math, r = shallowRef(), a = shallowRef(t.color);
    function l(m, p) {
      const v = new BufferGeometry(), _ = m * p, y = new Float32Array(new Array(3 * _).fill(0)), E = new Float32Array(new Array(3 * _).fill(0)), R = [];
      for (let T = 0; T < p - 1; T++) {
        for (let d = 0; d < m - 1; d++) {
          const w = T * m + d, f = w + 1, P = w + m, I = f + m;
          R.push(w, P, f), R.push(P, I, f);
        }
        const g = T * m + m - 1, A2 = T * m, x = g + m, M = A2 + m;
        R.push(g, x, A2), R.push(x, M, A2);
      }
      return v.setIndex(R), v.setAttribute("position", new BufferAttribute(y, 3)), v.setAttribute("normal", new BufferAttribute(E, 3)), v;
    }
    function c(m, p, v, _, y) {
      return (i(n(p * m * 0.25)) ** _ + i(s(p * m * 0.25)) ** y) ** (-1 / v);
    }
    function u(m, p, v, _, y, E, R, T, g, A2, x) {
      const M = 2 * Math.PI / A2, d = -Math.PI, w = Math.PI / (x - 1), f = -0.5 * Math.PI, P = m.getAttribute("position");
      let I = 0, K = 0, N = f;
      for (let Z = 0; Z < x; Z++) {
        K = d;
        for (let W = 0; W < A2; W++) {
          const X = c(K, p, v, _, y), V = c(N, E, R, T, g);
          P.setXYZ(
            I,
            X * n(K) * V * n(N),
            V * s(N),
            X * s(K) * V * n(N)
          ), I++, K += M;
        }
        N += w;
      }
      P.needsUpdate = true, m.computeVertexNormals();
    }
    watch(() => t.color, () => a.value = t.color), watch(() => [t.widthSegments, t.heightSegments], () => {
      r.value && r.value.dispose(), r.value = l(t.widthSegments, t.heightSegments);
    }, { immediate: true }), watch(
      () => [
        t.numArmsA,
        t.expA[0],
        t.expA[1],
        t.expA[2],
        t.numArmsB,
        t.expB[0],
        t.expB[1],
        t.expB[2]
      ],
      () => u(
        r.value,
        t.numArmsA,
        t.expA[0],
        t.expA[1],
        t.expA[2],
        t.numArmsB,
        t.expB[0],
        t.expB[1],
        t.expB[2],
        t.widthSegments,
        t.heightSegments
      ),
      { immediate: true }
    ), onUnmounted(() => {
      r.value && r.value.dispose();
    });
    const h = shallowRef();
    return e({
      value: h
    }), (m, p) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "superformulaRef",
      ref: h
    }, m.$attrs, { geometry: r.value }), [
      renderSlot(m.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: a.value }, null, 8, cp)
      ])
    ], 16, lp));
  }
});
var up = ["rotation"];
var hp = ["args"];
var fp = ["color"];
var mg = defineComponent({
  __name: "Tetrahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "tetrahedronRef",
      ref: i,
      rotation: [-Math.PI / 2, 0, 0]
    }, r.$attrs), [
      createBaseVNode("TresTetrahedronGeometry", { args: unref(n) }, null, 8, hp),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, fp)
      ])
    ], 16, up));
  }
});
var dp = ["args"];
var pp = ["color"];
var gg = defineComponent({
  __name: "Torus",
  props: {
    args: { default: () => [1, 1, 16, 80] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "torusRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresTorusGeometry", { args: unref(n) }, null, 8, dp),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, pp)
      ])
    ], 16));
  }
});
var mp = ["args"];
var gp = ["color"];
var yg = defineComponent({
  __name: "TorusKnot",
  props: {
    args: { default: () => [1, 0.4, 64, 8] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "torusKnotRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresTorusKnotGeometry", { args: unref(n) }, null, 8, mp),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, gp)
      ])
    ], 16));
  }
});
var yp = ["args"];
var vp = ["color"];
var vg = defineComponent({
  __name: "Tube",
  props: {
    args: { default: () => [
      new QuadraticBezierCurve3(new Vector3(-1, 0, 0), new Vector3(0, 1, 0), new Vector3(1, 0, 0)),
      20,
      0.2,
      8,
      false
    ] },
    color: { default: "#ffffff" }
  },
  setup(o, { expose: e }) {
    const t = o, { args: n, color: s } = toRefs(t), i = shallowRef();
    return e({
      value: i
    }), (r, a) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "tubeRef",
      ref: i
    }, r.$attrs), [
      createBaseVNode("TresTubeGeometry", { args: unref(n) }, null, 8, yp),
      renderSlot(r.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: unref(s) }, null, 8, vp)
      ])
    ], 16));
  }
});
var _g = defineComponent({
  __name: "component",
  props: {
    background: { type: [Boolean, String], default: false },
    blur: { default: 0 },
    files: { default: [] },
    path: { default: "" },
    preset: { default: void 0 }
  },
  async setup(o, { expose: e }) {
    let t, n;
    const s = o, i = ref(null);
    return e(i), i.value = ([t, n] = withAsyncContext(() => nf(s).texture), t = await t, n(), t), () => {
    };
  }
});
var _p = ["receive-shadow", "rotation"];
var xp = ["args"];
var wp = createBaseVNode("TresMeshStandardMaterial", {
  color: 8421504,
  side: 2
}, null, -1);
var xg = defineComponent({
  __name: "Backdrop",
  props: {
    floor: { default: 0.25 },
    segments: { default: 20 },
    receiveShadow: { type: Boolean, default: false }
  },
  setup(o) {
    const e = o, t = (a) => a === 0 ? 0 : 2 ** (10 * a - 10), { floor: n, segments: s, receiveShadow: i } = toRefs(e), r = ref(null);
    return watch(
      () => [s.value, n.value, r.value],
      ([a, l, c]) => {
        if (!c || a === null)
          return;
        let u = 0;
        const h = a / a / 2, m = c.attributes.position;
        for (let p = 0; p < a + 1; p++)
          for (let v = 0; v < a + 1; v++)
            m.setXYZ(
              u++,
              p / a - h + (p === 0 ? -l : 0),
              v / a - h,
              t(p / a)
            );
        m.needsUpdate = true, c.computeVertexNormals();
      }
    ), (a, l) => (openBlock(), createElementBlock("TresGroup", normalizeProps(guardReactiveProps(a.$attrs)), [
      createBaseVNode("TresMesh", {
        "receive-shadow": unref(i),
        rotation: [-Math.PI / 2, 0, Math.PI / 2]
      }, [
        createBaseVNode("TresPlaneGeometry", {
          ref_key: "planeRef",
          ref: r,
          args: [1, 1, unref(s), unref(s)]
        }, null, 8, xp),
        renderSlot(a.$slots, "default", {}, () => [
          wp
        ])
      ], 8, _p)
    ], 16));
  }
});
var Tp = ["geometry"];
var bp = ["map", "opacity", "depth-write"];
var Ep = ["object"];
var Mp = ["args"];
var Sp = ["rotation", "args"];
var wg = defineComponent({
  __name: "ContactShadows",
  props: {
    opacity: { default: 1 },
    width: { default: 1 },
    height: { default: 1 },
    blur: { default: 1 },
    far: { default: 10 },
    smooth: { type: Boolean, default: true },
    resolution: { default: 512 },
    frames: { default: 1 / 0 },
    scale: { default: 10 },
    color: { default: "#000000" },
    depthWrite: { type: Boolean, default: false },
    helper: { type: Boolean, default: false }
  },
  setup(o, { expose: e }) {
    const t = o, n = shallowRef(), s = shallowRef();
    e(n);
    let i, r, a, l, c;
    const { renderer: u, scene: h } = dr(), m = computed(() => t.width * (Array.isArray(t.scale) ? t.scale[0] : t.scale || 1)), p = computed(() => t.height * (Array.isArray(t.scale) ? t.scale[1] : t.scale || 1));
    watchEffect(() => {
      i && i.dispose(), r && r.dispose(), a && a.dispose(), l && l.geometry.dispose(), i = new WebGLRenderTarget(t.resolution, t.resolution), r = new WebGLRenderTarget(t.resolution, t.resolution), r.texture.generateMipmaps = i.texture.generateMipmaps = false, s.value = new OrthographicCamera(
        -m.value / 2,
        m.value / 2,
        p.value / 2,
        -p.value / 2,
        0,
        t.far
      ), a = new PlaneGeometry(m.value, p.value).rotateX(Math.PI / 2), l = new Mesh(a), l.visible = false;
    }), watchEffect(() => {
      t.color && (c && c.dispose(), c = new MeshDepthMaterial(), c.depthTest = c.depthWrite = false, c.onBeforeCompile = (A2) => {
        A2.uniforms = {
          ...A2.uniforms,
          ucolor: { value: t.color ? new Color(t.color) : new Color() }
        }, A2.fragmentShader = A2.fragmentShader.replace(
          "void main() {",
          //
          `uniform vec3 ucolor;
             void main() {
            `
        ), A2.fragmentShader = A2.fragmentShader.replace(
          "vec4( vec3( 1.0 - fragCoordZ ), opacity );",
          // Colorize the shadow, multiply by the falloff so that the center can remain darker
          "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );"
        );
      });
    });
    const v = new ShaderMaterial(Nu), _ = new ShaderMaterial(zu);
    _.depthTest = v.depthTest = false;
    function y(A2) {
      !u.value || !s.value || (l.visible = true, l.material = v, v.uniforms.tDiffuse.value = i.texture, v.uniforms.h.value = A2 / 256, u.value.setRenderTarget(r), u.value.render(l, s.value), l.material = _, _.uniforms.tDiffuse.value = r.texture, _.uniforms.v.value = A2 / 256, u.value.setRenderTarget(i), u.value.render(l, s.value), l.visible = false);
    }
    const { onLoop: E } = re();
    let R = 0, T, g;
    return E(() => {
      !s.value || h.value === void 0 || u.value === void 0 || (t.frames === 1 / 0 || R < t.frames) && (R++, T = h.value.background, g = h.value.overrideMaterial, n.value.visible = false, h.value.background = null, h.value.overrideMaterial = c, u.value.setRenderTarget(i), u.value.render(h.value, s.value), y(t.blur), t.smooth && y(t.blur * 0.4), u.value.setRenderTarget(null), n.value.visible = true, h.value.background = T, h.value.overrideMaterial = g);
    }), (A2, x) => (openBlock(), createElementBlock("TresGroup", mergeProps({
      ref_key: "groupRef",
      ref: n
    }, A2.$attrs), [
      createBaseVNode("TresMesh", {
        scale: [1, -1, 1],
        geometry: unref(a)
      }, [
        createBaseVNode("TresMeshBasicMaterial", {
          map: unref(i).texture,
          opacity: A2.opacity,
          "depth-write": A2.depthWrite,
          transparent: true
        }, null, 8, bp)
      ], 8, Tp),
      createBaseVNode("primitive", { object: unref(l) }, null, 8, Ep),
      s.value && A2.helper ? (openBlock(), createElementBlock("TresCameraHelper", {
        key: 0,
        args: [s.value]
      }, null, 8, Mp)) : createCommentVNode("", true),
      createBaseVNode("TresOrthographicCamera", {
        ref_key: "shadowCamera",
        ref: s,
        position: [0, 0, 0],
        rotation: [Math.PI / 2, 0, 0],
        args: [-m.value / 2, m.value / 2, p.value / 2, -p.value / 2, 0, A2.far]
      }, null, 8, Sp)
    ], 16));
  }
});
var Ap = ["size", "color", "alpha-map", "map", "opacity", "alpha-test", "depth-write", "transparent", "size-attenuation"];
var Pp = ["position", "velocity"];
var Tg = defineComponent({
  __name: "Precipitation",
  props: {
    size: { default: 0.1 },
    area: { default: () => [10, 10, 20] },
    color: { default: 16777215 },
    map: {},
    alphaMap: {},
    alphaTest: { default: 0.01 },
    opacity: { default: 0.8 },
    count: { default: 5e3 },
    speed: { default: 0.1 },
    randomness: { default: 0.5 },
    depthWrite: { type: Boolean, default: false },
    transparent: { type: Boolean, default: true },
    sizeAttenuation: { type: Boolean, default: true }
  },
  setup(o) {
    const e = o, {
      size: t,
      area: n,
      color: s,
      alphaMap: i,
      map: r,
      opacity: a,
      alphaTest: l,
      depthWrite: c,
      transparent: u,
      sizeAttenuation: h,
      count: m,
      speed: p,
      randomness: v
    } = toRefs(e), _ = shallowRef();
    let y = [], E = [];
    const R = () => {
      y = new Float32Array(m.value * 3);
      for (let A2 = 0; A2 < m.value; A2++) {
        const x = A2 * 3;
        y[x] = (Math.random() - 0.5) * n.value[0], y[x + 1] = (Math.random() - 0.5) * n.value[1], y[x + 2] = (Math.random() - 0.5) * n.value[2];
      }
    }, T = () => {
      E = new Float32Array(m.value * 2);
      for (let A2 = 0; A2 < m.value * 2; A2 += 2)
        E[A2] = (Math.random() - 0.5) / 5 * p.value * v.value, E[A2 + 1] = Math.random() / 5 * p.value + 0.01;
    };
    T(), R(), watchEffect(() => {
      T(), R();
    });
    const { onLoop: g } = re();
    return g(() => {
      var A2, x;
      if ((A2 = _.value) != null && A2.attributes.position.array && ((x = _.value) != null && x.attributes.position.count)) {
        const M = _.value.attributes.position.array;
        for (let d = 0; d < _.value.attributes.position.count; d++) {
          const w = E[d * 2], f = E[d * 2 + 1];
          M[d * 3] += w, M[d * 3 + 1] -= f, (M[d * 3] <= -n.value[0] / 2 || M[d * 3] >= n.value[0] / 2) && (M[d * 3] = M[d * 3] * -1), (M[d * 3 + 1] <= -n.value[1] / 2 || M[d * 3 + 1] >= n.value[1] / 2) && (M[d * 3 + 1] = M[d * 3 + 1] * -1);
        }
        _.value.attributes.position.needsUpdate = true;
      }
    }), (A2, x) => (openBlock(), createElementBlock("TresPoints", null, [
      createBaseVNode("TresPointsMaterial", {
        size: unref(t),
        color: unref(s),
        "alpha-map": unref(i),
        map: unref(r),
        opacity: unref(a),
        "alpha-test": unref(l),
        "depth-write": unref(c),
        transparent: unref(u),
        "size-attenuation": unref(h)
      }, null, 8, Ap),
      createBaseVNode("TresBufferGeometry", {
        ref_key: "geometryRef",
        ref: _,
        position: [unref(y), 3],
        velocity: [unref(E)]
      }, null, 8, Pp)
    ]));
  }
});
var ni = class _ni extends Mesh {
  constructor() {
    const e = _ni.SkyShader, t = new ShaderMaterial({
      name: e.name,
      uniforms: UniformsUtils.clone(e.uniforms),
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader,
      side: BackSide,
      depthWrite: false
    });
    super(new BoxGeometry(1, 1, 1), t), this.isSky = true;
  }
};
ni.SkyShader = {
  name: "SkyShader",
  uniforms: {
    turbidity: { value: 2 },
    rayleigh: { value: 1 },
    mieCoefficient: { value: 5e-3 },
    mieDirectionalG: { value: 0.8 },
    sunPosition: { value: new Vector3() },
    up: { value: new Vector3(0, 1, 0) }
  },
  vertexShader: (
    /* glsl */
    `
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
  )
};
var Rp = ["object", "material-uniforms-turbidity-value", "material-uniforms-rayleigh-value", "material-uniforms-mieCoefficient-value", "material-uniforms-mieDirectionalG-value", "material-uniforms-sunPosition-value", "scale"];
var bg = defineComponent({
  __name: "Sky",
  props: {
    turbidity: { default: 3.4 },
    rayleigh: { default: 3 },
    mieCoefficient: { default: 5e-3 },
    mieDirectionalG: { default: 0.7 },
    elevation: { default: 0.6 },
    azimuth: { default: 180 },
    distance: { default: 45e4 }
  },
  setup(o) {
    const e = o, t = new ni(), n = computed(
      () => s(e.azimuth, e.elevation)
    );
    function s(i, r) {
      const a = MathUtils.degToRad(90 - r), l = MathUtils.degToRad(i);
      return new Vector3().setFromSphericalCoords(1, a, l);
    }
    return (i, r) => (openBlock(), createElementBlock("primitive", {
      object: unref(t),
      "material-uniforms-turbidity-value": e.turbidity,
      "material-uniforms-rayleigh-value": e.rayleigh,
      "material-uniforms-mieCoefficient-value": e.mieCoefficient,
      "material-uniforms-mieDirectionalG-value": e.mieDirectionalG,
      "material-uniforms-sunPosition-value": n.value,
      scale: e.distance
    }, null, 8, Rp));
  }
});
var Cp = ["position"];
var Ip = ["position"];
var Dp = ["scale"];
var Lp = ["map", "depth-test", "color-space", "color", "opacity"];
var Eg = defineComponent({
  __name: "Smoke",
  props: {
    color: { default: "#ffffff" },
    opacity: { default: 0.5 },
    speed: { default: 0.4 },
    width: { default: 10 },
    depth: { default: 1.5 },
    segments: { default: 20 },
    texture: { default: "https://raw.githubusercontent.com/Tresjs/assets/main/textures/clouds/defaultCloud.png" },
    depthTest: { type: Boolean, default: true }
  },
  async setup(o, { expose: e }) {
    let t, n;
    const s = o, { width: i, depth: r, segments: a, texture: l, color: c, depthTest: u, opacity: h, speed: m } = toRefs(s), p = shallowRef(), v = shallowRef();
    e({
      value: p
    });
    const _ = [...new Array(a)].map((x, M) => ({
      x: i.value / 2 - Math.random() * i.value,
      y: i.value / 2 - Math.random() * i.value,
      scale: 0.4 + Math.sin((M + 1) / a.value * Math.PI) * ((0.2 + Math.random()) * 10),
      density: Math.max(0.2, Math.random()),
      rotation: Math.max(2e-3, 5e-3 * Math.random()) * m.value
    })), y = (x, M) => x / 6 * M * h.value, { map: E } = ([t, n] = withAsyncContext(() => Nr({ map: l.value })), t = await t, n(), t), { renderer: R, camera: T } = dr(), g = computed(() => {
      var x;
      return (x = R.value) == null ? void 0 : x.outputColorSpace;
    }), { onLoop: A2 } = re();
    return A2(() => {
      var x, M;
      p.value && T.value && v.value && ((x = v.value) == null || x.children.forEach((d, w) => {
        d.rotation.z += _[w].rotation;
      }), p.value.lookAt((M = T.value) == null ? void 0 : M.position));
    }), (x, M) => (openBlock(), createElementBlock("TresGroup", mergeProps({
      ref_key: "smokeRef",
      ref: p
    }, x.$attrs), [
      createBaseVNode("TresGroup", {
        ref_key: "groupRef",
        ref: v,
        position: [0, 0, unref(a) / 2 * unref(r)]
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(_), ({ scale: d, x: w, y: f, density: P }, I) => (openBlock(), createElementBlock("TresMesh", {
          key: `${I}`,
          position: [w, f, -I * unref(r)]
        }, [
          createBaseVNode("TresPlaneGeometry", {
            scale: [d, d, d],
            rotation: [0, 0, 0]
          }, null, 8, Dp),
          createBaseVNode("TresMeshStandardMaterial", {
            map: unref(E),
            "depth-test": unref(u),
            "color-space": g.value,
            color: unref(c),
            "depth-write": false,
            transparent: "",
            opacity: y(d, P)
          }, null, 8, Lp)
        ], 8, Ip))), 128))
      ], 8, Cp)
    ], 16));
  }
});
function Op(o) {
  return xr(o, {
    normalizeValue: (e) => Ft(e),
    getDefaultValue: () => new Color(0, 0, 0),
    isSingleValue: (e) => !Array.isArray(e),
    isMultipleValues: (e) => Array.isArray(e) && (e.length === 0 || !Array.isArray(e[0])),
    isMultipleValuesWithStops: (e) => Array.isArray(e) && e.length > 0 && Array.isArray(e[0]),
    isEmpty: (e) => Array.isArray(e) && e.length === 0
  });
}
function Ui(o) {
  return "isVector3" in o || Array.isArray(o) && o.length > 0 && o.every((e) => typeof e == "number");
}
function Fp(o) {
  return xr(o, {
    normalizeValue: (e) => Ir(e),
    getDefaultValue: () => [0, 0, 0],
    isSingleValue: (e) => Ui(e),
    isMultipleValues: (e) => Array.isArray(e) && e.length > 0 && Ui(e[0]),
    isMultipleValuesWithStops: (e) => Array.isArray(e) && e.length > 0 && Array.isArray(e[0]) && e[0].length === 2 && Ui(e[0][1]),
    isEmpty: (e) => Array.isArray(e) && e.length === 0
  });
}
function kp(o) {
  return xr(o, {
    normalizeValue: (e) => e,
    getDefaultValue: () => 1,
    isSingleValue: (e) => !Array.isArray(e) && typeof e < "u",
    isMultipleValues: (e) => Array.isArray(e) && (e.length === 0 || !Array.isArray(e[0])),
    isMultipleValuesWithStops: (e) => Array.isArray(e) && e.length > 0 && Array.isArray(e[0]),
    isEmpty: (e) => Array.isArray(e) && e.length === 0
  });
}
function xr(o, e) {
  const { normalizeValue: t, getDefaultValue: n, isEmpty: s } = e, i = (l) => e.isSingleValue(l), r = (l) => e.isMultipleValues(l), a = (l) => e.isMultipleValuesWithStops(l);
  if (s(o))
    return [[0, n()]];
  if (i(o))
    return [[0, t(o)]];
  if (r(o)) {
    const l = o.length > 1 ? 1 / (o.length - 1) : 1;
    return o.map((c, u) => [l * u, t(c)]);
  } else if (a(o))
    return o.map(([l, c], u) => [l, t(c)]);
  return [[0, n()]];
}
var Up = class {
  constructor(e, t) {
    oe(this, "entries");
    oe(this, "resolution");
    this.entries = e, this.resolution = t;
  }
  useTexture() {
    return new zp(this.entries, this.resolution).use();
  }
};
var wr = class {
  constructor(e, t, n, s, i, r) {
    oe(this, "data");
    oe(this, "ref");
    oe(this, "name");
    oe(this, "valueMin");
    oe(this, "valueMax");
    oe(this, "suffix");
    oe(this, "renderToCanvasGradient");
    this.data = isRef(e) ? e.value : e, this.ref = isRef(e) ? e : null, this.name = t, this.valueMin = n, this.valueMax = s, this.suffix = i, this.renderToCanvasGradient = r;
  }
};
var Bp = class extends wr {
  constructor(e, t = "color", n = 0, s = 1, i = "rgba", r = Hp) {
    super(e, t, n, s, i, r);
  }
};
var Lo = class extends wr {
  constructor(e, t = "scalar", n = 0, s = 1, i = "x", r = Gp) {
    super(e, t, n, s, i, r);
  }
};
var Np = class extends wr {
  constructor(e, t = "scalar3", n = 0, s = 1, i = "xyz", r = jp) {
    super(e, t, n, s, i, r);
  }
};
var zp = class {
  constructor(e, t) {
    oe(this, "entries");
    oe(this, "size");
    oe(this, "dirty", shallowRef(0));
    oe(this, "context");
    this.entries = e, this.size = Math.max(t, e.length);
    const n = document.createElement("canvas");
    n.height = this.size, n.width = this.size, this.context = n.getContext("2d");
  }
  use() {
    const e = this.build(), t = shallowRef(e);
    for (const n of this.entries)
      n.ref && watch(n.ref, () => {
        var s;
        n.data = (s = n.ref) == null ? void 0 : s.value, triggerRef(this.dirty);
      });
    return Mh(
      this.dirty,
      () => {
        this.build(e), t.value = e;
      },
      { throttle: 1e3 / 60 }
    ), {
      texture: t,
      dispose: () => e.dispose(),
      yFor: this.entries.reduce((n, s, i) => (n[s.name] = (i + 0.5) / this.size, n), {})
    };
  }
  build(e) {
    this.entries.forEach((n, s) => {
      const i = this.context.createLinearGradient(0, s, this.size, s);
      n.renderToCanvasGradient(i, n), this.context.fillStyle = i, this.context.fillRect(0, s, this.size, 1);
    }), e && (e.source.data = this.context.getImageData(
      0,
      0,
      this.size,
      this.size
    ));
    const t = e ?? new DataTexture(
      this.context.getImageData(0, 0, this.size, this.size).data,
      this.size,
      this.size,
      RGBAFormat,
      UnsignedByteType,
      UVMapping,
      ClampToEdgeWrapping,
      ClampToEdgeWrapping
    );
    return t.needsUpdate = true, t;
  }
};
function Ka(o, e, t, n, s) {
  return Mf(cn2(o, e, t), e, t, n, s);
}
function Hp(o, e) {
  return Op(e.data).forEach(
    ([t, n]) => o.addColorStop(
      t,
      `rgb(${n.r * 255}, ${n.g * 255}, ${n.b * 255})`
    )
  );
}
function Gp(o, e) {
  return kp(e.data).forEach(([t, n]) => {
    o.addColorStop(
      t,
      `rgb(${Ka(
        n,
        e.valueMin,
        e.valueMax,
        0,
        255
      )}, 0, 0)`
    );
  });
}
function jp(o, e) {
  return Fp(e.data).forEach(
    ([t, n]) => o.addColorStop(
      t,
      `rgb(${n.map(
        (s) => Ka(s, e.valueMin, e.valueMax, 0, 255)
      )})`
    )
  );
}
var Vp = class {
  constructor(e = 256) {
    oe(this, "entries");
    oe(this, "resolution");
    this.resolution = e, this.entries = [];
  }
  withResolution(e) {
    return this.resolution = e, this;
  }
  get add() {
    return new Xp(
      (e) => this.onAdd(e)
    );
  }
  build() {
    return new Up(this.entries, this.resolution);
  }
  onAdd(e) {
    return this.entries.push(e), new Yp(e, this);
  }
};
var Yp = class {
  constructor(e, t) {
    oe(this, "entry");
    oe(this, "parent");
    this.entry = e, this.parent = t;
  }
  id(e) {
    return this.entry.name = e, this;
  }
  range(e, t) {
    return this.entry.valueMin = e, this.entry.valueMax = t, this;
  }
  suffix(e) {
    return this.entry.suffix = e, this;
  }
  canvasGradientRenderer(e) {
    return this.entry.renderToCanvasGradient = e, this;
  }
  /**
   * Add another entry to the ShaderDataBuilder
   */
  get add() {
    return this.parent.add;
  }
  /**
   * Finalize the ShaderDataBuilder
   * @returns ShaderData
   */
  build() {
    return this.parent.build();
  }
};
var Xp = class {
  constructor(e) {
    oe(this, "onAdd");
    this.onAdd = e;
  }
  GradientTresColor(e) {
    return this.onAdd(new Bp(e));
  }
  Gradient01(e) {
    return this.onAdd(new Lo(e, "zeroOne", 0, 1));
  }
  GradientScalar(e, t, n) {
    return this.onAdd(
      new Lo(e, "scalar", t, n)
    );
  }
  GradientXyz(e, t, n) {
    return this.onAdd(
      new Np(e, "position", t, n)
    );
  }
};
var Bi = null;
function Wp() {
  return Bi === null && (Bi = new DataTexture(new Uint8Array([0, 0, 0, 0]), 1, 1)), Bi;
}
var $p = ["object"];
var Mg = defineComponent({
  __name: "component",
  props: {
    map: { default: "https://raw.githubusercontent.com/Tresjs/assets/e41a93c56ec7cb5ac2d241f309e23582a5fe1fc6/textures/sparkles/particle.png" },
    geometry: { default: void 0 },
    directionalLight: { default: void 0 },
    lifetimeSec: { default: 0.4 },
    cooldownSec: { default: 2 },
    normalThreshold: { default: 0.7 },
    noiseScale: { default: 3 },
    scaleNoise: { default: 1 },
    offsetNoise: { default: 0.1 },
    lifetimeNoise: { default: 0 },
    size: { default: 1 },
    alpha: { default: 1 },
    offset: { default: 1 },
    surfaceDistance: { default: 1 },
    sequenceColor: { default: () => [[0.7, "#82dbc5"], [0.8, "#fbb03b"]] },
    sequenceAlpha: { default: () => [[0, 0], [0.1, 1], [0.5, 1], [0.9, 0]] },
    sequenceOffset: { default: () => [0, 0, 0] },
    sequenceNoise: { default: () => [0.1, 0.1, 0.1] },
    sequenceSize: { default: () => [0, 1] },
    sequenceSurfaceDistance: { default: () => [0.05, 0.08, 0.1] },
    mixColor: { default: 0.5 },
    mixAlpha: { default: 1 },
    mixOffset: { default: 1 },
    mixSize: { default: 0 },
    mixSurfaceDistance: { default: 1 },
    mixNoise: { default: 1 },
    blending: { default: AdditiveBlending },
    transparent: { type: Boolean, default: true },
    depthWrite: { type: Boolean, default: false }
  },
  setup(o) {
    const e = o, t = parseInt(REVISION.replace(/\D+/g, "")), n = toRefs(e), s = typeof e.map == "string" ? Wp() : e.map, { texture: i, yFor: r } = new Vp(256).add.GradientTresColor(n.sequenceColor).id("sequenceColor").add.Gradient01(n.sequenceAlpha).id("sequenceAlpha").add.Gradient01(n.sequenceSurfaceDistance).id("sequenceSurfaceDistance").add.Gradient01(n.sequenceSize).id("sequenceSize").add.GradientXyz(n.sequenceOffset, -1, 1).id("sequenceOffset").add.GradientXyz(n.sequenceNoise, 0, 1).id("sequenceNoise").build().useTexture(), a = {
      blending: e.blending,
      transparent: e.transparent,
      depthWrite: e.depthWrite,
      uniforms: {
        uMap: new Uniform(s),
        uPixelRatio: new Uniform(1),
        uNormal: new Uniform(Object3D.DEFAULT_UP),
        uNormalThreshold: new Uniform(e.normalThreshold),
        uTime: new Uniform(0),
        uCooldownRatio: new Uniform(1),
        uSize: new Uniform(e.size),
        uAlpha: new Uniform(e.alpha),
        uOffset: new Uniform(e.offset),
        uSurfaceDistance: new Uniform(e.surfaceDistance),
        uNoiseScale: new Uniform(e.noiseScale),
        uScaleNoise: new Uniform(e.scaleNoise),
        uOffsetNoise: new Uniform(e.offsetNoise),
        uLifetimeNoise: new Uniform(e.lifetimeNoise),
        uMixColor: new Uniform(e.mixColor),
        uMixAlpha: new Uniform(e.mixAlpha),
        uMixOffset: new Uniform(e.mixOffset),
        uMixSize: new Uniform(e.mixSize),
        uMixSurfaceDistance: new Uniform(e.mixSurfaceDistance),
        uMixNoise: new Uniform(e.mixNoise),
        uInfoTexture: new Uniform(i.value)
      },
      vertexShader: `
    uniform float uPixelRatio;
    uniform vec3 uNormal;
    uniform float uNormalThreshold;
    uniform float uTime;
    uniform float uCooldownRatio;
    uniform float uSize;
    uniform float uAlpha;
    uniform float uOffset;
    uniform float uSurfaceDistance;
    uniform float uNoiseScale;
    uniform float uScaleNoise;
    uniform float uOffsetNoise;
    uniform float uLifetimeNoise;
    uniform float uMixColor;
    uniform float uMixAlpha;
    uniform float uMixOffset;
    uniform float uMixSize;
    uniform float uMixSurfaceDistance;
    uniform float uMixNoise;
    uniform sampler2D uInfoTexture;

    varying vec4 vColor;

    void main() {
      float dotNormal = dot(normal, uNormal) * 0.5 + 0.5;
      float normalP = smoothstep(uNormalThreshold, 1., dotNormal);
      float lifetimeNoise = uLifetimeNoise * mix(normalP, 1.0, uMixNoise);

      float t = uTime + position.x * 1. * uNoiseScale + position.y * 10. * uNoiseScale + 
      position.z * 7.3 * uNoiseScale + sin(lifetimeNoise * (position.x + 13. * position.y)) * lifetimeNoise;

      float lifetimeP = max(-0.0001, mix(-uCooldownRatio, 1. + cos(t) * lifetimeNoise, fract(t)));
      float surfaceDistance = texture2D(uInfoTexture, vec2(
        mix(normalP, lifetimeP, uMixSurfaceDistance),
        ${r.sequenceSurfaceDistance})).x * uSurfaceDistance;

      vec4 modelPosition = modelMatrix * (vec4(position, 1.0) + vec4(normal * surfaceDistance, 0.0));
      vec3 noise = texture2D(uInfoTexture, vec2(
        mix(normalP, lifetimeP, uMixNoise),
        ${r.sequenceNoise})).xyz;
      vec3 offset = uOffset * (texture2D(uInfoTexture, vec2(
        mix(normalP, lifetimeP, uMixOffset),
        ${r.sequenceOffset})).xyz * 2.0 - vec3(1.0, 1.0, 1.0));
      modelPosition.x += cos(t * uNoiseScale * 10.0) * 0.2 * uOffsetNoise * noise.x + offset.x;
      modelPosition.y += sin(t * uNoiseScale * 10.0) * 0.2 * uOffsetNoise * noise.y + offset.y;
      modelPosition.z += cos(t * uNoiseScale * 10.0) * 0.2 * uOffsetNoise * noise.z + offset.z;

      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPostion = projectionMatrix * viewPosition;
      gl_Position = projectionPostion;

      gl_PointSize = 2.
      * texture2D(uInfoTexture, vec2(mix(normalP, lifetimeP, uMixSize), ${r.sequenceSize})).x
      * mix(1., abs(sin(t * uNoiseScale + position.x * 13.9 + position.y * 73.1)), uScaleNoise)
      * uSize * (100.0 / -viewPosition.z) * uPixelRatio;

      if (gl_PointSize < 0.6 || lifetimeP < 0.0) { gl_Position = vec4(2, 2, 2, 1); }

      vColor = texture2D(uInfoTexture, vec2(mix(normalP, lifetimeP, uMixColor), ${r.sequenceColor}))
      * texture2D(uInfoTexture, vec2(mix(normalP, lifetimeP, uMixAlpha), ${r.sequenceAlpha})).x * uAlpha;
    }`,
      fragmentShader: `
    varying vec4 vColor;

    uniform sampler2D uMap;
    uniform sampler2D uInfoTexture;

    void main() {
      gl_FragColor = vColor * texture2D(uMap, gl_PointCoord);
      #include <tonemapping_fragment>
      #include <${t >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
    }`
    }, l = new ShaderMaterial(a), c = new Points(void 0, l), u = l.uniforms, h = { immediate: true };
    [
      [u.uPixelRatio, dr().sizes.aspectRatio],
      [u.uSize, n.size],
      [u.uNormalThreshold, n.normalThreshold],
      [u.uAlpha, n.alpha],
      [u.uOffset, n.offset],
      [u.uOffsetNoise, n.offsetNoise],
      [u.uMixColor, n.mixColor],
      [u.uMixAlpha, n.mixAlpha],
      [u.uMixOffset, n.mixOffset],
      [u.uMixSize, n.mixSize],
      [u.uMixSurfaceDistance, n.mixSurfaceDistance],
      [u.uMixNoise, n.mixNoise],
      [u.uInfoTexture, i]
    ].forEach(
      ([R, T]) => watch(
        T,
        () => {
          R.value = T.value;
        },
        h
      )
    ), watch(
      [n.noiseScale, n.lifetimeSec],
      () => {
        u.uNoiseScale.value = n.noiseScale.value * n.lifetimeSec.value;
      },
      h
    ), watch(
      [n.lifetimeSec, n.cooldownSec],
      () => {
        u.uCooldownRatio.value = n.cooldownSec.value / n.lifetimeSec.value;
      },
      h
    ), watch(n.map, () => {
      typeof n.map.value == "string" ? Nr([n.map.value]).then((R) => l.uniforms.uMap.value = R) : l.uniforms.uMap.value = n.map.value;
    });
    const p = new Quaternion(), v = new Vector3();
    re().onLoop(({ elapsed: R }) => {
      c.getWorldQuaternion(p), v.copy(e.directionalLight ? e.directionalLight.position : Object3D.DEFAULT_UP).normalize(), v.applyQuaternion(p.invert()), l.uniforms.uNormal.value = v, l.uniforms.uTime.value = R / (e.cooldownSec + e.lifetimeSec);
    });
    function _(R) {
      return R && "isObject3D" in R;
    }
    function y(R) {
      return R && "isBufferGeometry" in R;
    }
    onMounted(() => {
      e.geometry ? y(e.geometry) ? c.geometry.copy(e.geometry) : _(e.geometry) && "geometry" in e.geometry && y(e.geometry.geometry) && c.geometry.copy(e.geometry.geometry) : _(c.parent) && "geometry" in c.parent && y(c.parent.geometry) ? c.geometry.copy(c.parent.geometry) : c.geometry = new IcosahedronGeometry(1, 16), typeof e.map == "string" && Nr([e.map]).then((R) => l.uniforms.uMap.value = R);
    }), onUnmounted(() => {
      var R;
      (R = l.uniforms.uMap.value) == null || R.dispose(), i.value.dispose(), l.dispose();
    });
    const E = shallowRef();
    return (R, T) => (openBlock(), createElementBlock("primitive", {
      ref_key: "sparkleRef",
      ref: E,
      object: unref(c)
    }, null, 8, $p));
  }
});
var Zp = ["position", "a-scale"];
var Kp = ["size", "size-attenuation", "transparent", "alpha-test", "alpha-map"];
var Sg = defineComponent({
  __name: "Stars",
  props: {
    size: { default: 0.1 },
    sizeAttenuation: { type: Boolean, default: true },
    transparent: { type: Boolean, default: true },
    alphaTest: { default: 0.01 },
    count: { default: 5e3 },
    depth: { default: 50 },
    radius: { default: 100 },
    alphaMap: { default: null }
  },
  setup(o, { expose: e }) {
    const t = o, n = ref(), s = ref(), { radius: i, depth: r, count: a, size: l, sizeAttenuation: c, transparent: u, alphaMap: h, alphaTest: m } = toRefs(t), p = () => {
      let _ = i.value + r.value;
      const y = computed(() => r.value / a.value), E = [], R = Array.from(
        { length: a.value },
        () => (0.5 + 0.5 * Math.random()) * 4
      ), T = (g) => new Vector3().setFromSpherical(new Spherical(g, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)).toArray();
      for (let g = 0; g < a.value; g++)
        _ -= y.value * Math.random(), E.push(...T(_));
      n.value = new Float32Array(E), s.value = new Float32Array(R);
    };
    watchEffect(() => {
      p();
    });
    const v = shallowRef();
    return e({
      value: v
    }), (_, y) => (openBlock(), createElementBlock("TresPoints", {
      ref_key: "starsRef",
      ref: v
    }, [
      createBaseVNode("TresBufferGeometry", {
        position: [n.value, 3],
        "a-scale": [s.value, 1]
      }, null, 8, Zp),
      createBaseVNode("TresPointsMaterial", {
        size: unref(l),
        "size-attenuation": unref(c),
        transparent: unref(u),
        "alpha-test": unref(m),
        "alpha-map": unref(h)
      }, null, 8, Kp)
    ], 512));
  }
});
var zt;
var Ag = (o = "body") => {
  zt || (zt = new Pane({
    container: document.querySelector(o)
  }), zt.element.style.position = "absolute", zt.element.style.top = "1rem", zt.element.style.right = "1rem", zt.element.style.zIndex = "9999");
  const { logWarning: e } = gr();
  e("useTweakPane is deprecated as of Cientos v3.7.0 and will no longer be part of this package. Please migrate to @tresjs/leches package https://github.com/Tresjs/leches or v-tweakpane https://github.com/vinayakkulkarni/v-tweakpane instead.");
  function t() {
    zt && zt.dispose();
  }
  return onMounted(() => {
    const { resume: n } = re();
    n();
  }), onUnmounted(() => {
    t();
  }), { pane: zt, disposeTweakPane: t };
};
var qa = { exports: {} };
(function(o, e) {
  (function(t, n) {
    o.exports = n();
  })(If, function() {
    var t = function() {
      function n(p) {
        return r.appendChild(p.dom), p;
      }
      function s(p) {
        for (var v = 0; v < r.children.length; v++)
          r.children[v].style.display = v === p ? "block" : "none";
        i = p;
      }
      var i = 0, r = document.createElement("div");
      r.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", r.addEventListener("click", function(p) {
        p.preventDefault(), s(++i % r.children.length);
      }, false);
      var a = (performance || Date).now(), l = a, c = 0, u = n(new t.Panel("FPS", "#0ff", "#002")), h = n(new t.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var m = n(new t.Panel("MB", "#f08", "#201"));
      return s(0), { REVISION: 16, dom: r, addPanel: n, showPanel: s, begin: function() {
        a = (performance || Date).now();
      }, end: function() {
        c++;
        var p = (performance || Date).now();
        if (h.update(p - a, 200), p > l + 1e3 && (u.update(1e3 * c / (p - l), 100), l = p, c = 0, m)) {
          var v = performance.memory;
          m.update(v.usedJSHeapSize / 1048576, v.jsHeapSizeLimit / 1048576);
        }
        return p;
      }, update: function() {
        a = this.end();
      }, domElement: r, setMode: s };
    };
    return t.Panel = function(n, s, i) {
      var r = 1 / 0, a = 0, l = Math.round, c = l(window.devicePixelRatio || 1), u = 80 * c, h = 48 * c, m = 3 * c, p = 2 * c, v = 3 * c, _ = 15 * c, y = 74 * c, E = 30 * c, R = document.createElement("canvas");
      R.width = u, R.height = h, R.style.cssText = "width:80px;height:48px";
      var T = R.getContext("2d");
      return T.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif", T.textBaseline = "top", T.fillStyle = i, T.fillRect(0, 0, u, h), T.fillStyle = s, T.fillText(n, m, p), T.fillRect(v, _, y, E), T.fillStyle = i, T.globalAlpha = 0.9, T.fillRect(v, _, y, E), { dom: R, update: function(g, A2) {
        r = Math.min(r, g), a = Math.max(a, g), T.fillStyle = i, T.globalAlpha = 1, T.fillRect(0, 0, u, _), T.fillStyle = s, T.fillText(l(g) + " " + n + " (" + l(r) + "-" + l(a) + ")", m, p), T.drawImage(R, v + c, _, y - c, E, v, _, y - c, E), T.fillRect(v + y - c, _, c, E), T.fillStyle = i, T.globalAlpha = 0.9, T.fillRect(v + y - c, _, c, l((1 - g / A2) * E));
      } };
    }, t;
  });
})(qa);
var qp = qa.exports;
var Qp = ys(qp);
var Pg = defineComponent({
  name: "Stats",
  props: {
    showPanel: {
      type: Number,
      default: 0
    }
  },
  setup(o, { expose: e }) {
    const t = new Qp();
    e({ stats: t });
    const n = document.body;
    t.showPanel(o.showPanel || 0), n == null || n.appendChild(t.dom);
    const { onBeforeLoop: s, onAfterLoop: i, resume: r } = re();
    r(), s(() => t.begin()), i(() => t.end()), onUnmounted(() => {
      n == null || n.removeChild(t.dom);
    });
  }
});
var Jp = class {
  constructor(e, t, n) {
    this.name = e, this.fg = t, this.bg = n, this.PR = Math.round(window.devicePixelRatio || 1), this.WIDTH = 90 * this.PR, this.HEIGHT = 48 * this.PR, this.TEXT_X = 3 * this.PR, this.TEXT_Y = 2 * this.PR, this.GRAPH_X = 3 * this.PR, this.GRAPH_Y = 15 * this.PR, this.GRAPH_WIDTH = 84 * this.PR, this.GRAPH_HEIGHT = 30 * this.PR, this.canvas = document.createElement("canvas"), this.canvas.width = 90 * this.PR, this.canvas.height = 48 * this.PR, this.canvas.style.width = "90px", this.canvas.style.position = "absolute", this.canvas.style.height = "48px", this.canvas.style.cssText = "width:90px;height:48px", this.context = this.canvas.getContext("2d"), this.context && (this.context.font = "bold " + 9 * this.PR + "px Helvetica,Arial,sans-serif", this.context.textBaseline = "top", this.context.fillStyle = this.bg, this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT), this.context.fillStyle = this.fg, this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y), this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT), this.context.fillStyle = this.bg, this.context.globalAlpha = 0.9, this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT));
  }
  update(e, t, n, s, i = 0) {
    let r = 1 / 0, a = 0;
    this.context && (r = Math.min(r, e), a = Math.max(n, e), s = Math.max(s, t), this.context.fillStyle = this.bg, this.context.globalAlpha = 1, this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y), this.context.fillStyle = this.fg, this.context.fillText(e.toFixed(i) + " " + this.name + " (" + r.toFixed(i) + "-" + parseFloat(a.toFixed(i)) + ")", this.TEXT_X, this.TEXT_Y), this.context.drawImage(this.canvas, this.GRAPH_X + this.PR, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT, this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH - this.PR, this.GRAPH_HEIGHT), this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT), this.context.fillStyle = this.bg, this.context.globalAlpha = 0.9, this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, (1 - t / s) * this.GRAPH_HEIGHT));
  }
};
var Qa = class Ys {
  constructor({ logsPerSecond: e = 20, samplesLog: t = 100, samplesGraph: n = 10, precision: s = 2, minimal: i = false, horizontal: r = true, mode: a = 0 } = {}) {
    this.totalCpuDuration = 0, this.totalGpuDuration = 0, this.totalFps = 0, this.activeQuery = null, this.gpuQueries = [], this.renderCount = 0, this.mode = a, this.horizontal = r, this.dom = document.createElement("div"), this.dom.style.cssText = "position:fixed;top:0;left:0;opacity:0.9;z-index:10000;", i && (this.dom.style.cssText += "cursor:pointer"), this.gl = null, this.query = null, this.isRunningCPUProfiling = false, this.minimal = i, this.beginTime = (performance || Date).now(), this.prevTime = this.beginTime, this.prevCpuTime = this.beginTime, this.frames = 0, this.renderCount = 0, this.threeRendererPatched = false, this.averageCpu = {
      logs: [],
      graph: []
    }, this.averageGpu = {
      logs: [],
      graph: []
    }, this.queryCreated = false, this.fpsPanel = this.addPanel(new Ys.Panel("FPS", "#0ff", "#002"), 0), this.msPanel = this.addPanel(new Ys.Panel("CPU", "#0f0", "#020"), 1), this.gpuPanel = null, this.samplesLog = t, this.samplesGraph = n, this.precision = s, this.logsPerSecond = e, this.minimal ? (this.dom.addEventListener("click", (l) => {
      l.preventDefault(), this.showPanel(++this.mode % this.dom.children.length);
    }, false), this.mode = a, this.showPanel(this.mode)) : window.addEventListener("resize", () => {
      this.resizePanel(this.fpsPanel, 0), this.resizePanel(this.msPanel, 1), this.gpuPanel && this.resizePanel(this.gpuPanel, 2);
    });
  }
  patchThreeRenderer(e) {
    const t = e.render, n = this;
    e.render = function(s, i) {
      n.begin(), t.call(this, s, i), n.end();
    }, this.threeRendererPatched = true;
  }
  resizePanel(e, t) {
    e.canvas.style.position = "absolute", this.minimal ? e.canvas.style.display = "none" : (e.canvas.style.display = "block", this.horizontal ? (e.canvas.style.top = "0px", e.canvas.style.left = t * e.WIDTH / e.PR + "px") : (e.canvas.style.left = "0px", e.canvas.style.top = t * e.HEIGHT / e.PR + "px"));
  }
  addPanel(e, t) {
    return e.canvas && (this.dom.appendChild(e.canvas), this.resizePanel(e, t)), e;
  }
  showPanel(e) {
    for (let t = 0; t < this.dom.children.length; t++) {
      const n = this.dom.children[t];
      n.style.display = t === e ? "block" : "none";
    }
    this.mode = e;
  }
  init(e) {
    if (!e) {
      console.error('Stats: The "canvas" parameter is undefined.');
      return;
    }
    if (e.isWebGLRenderer && !this.threeRendererPatched) {
      const t = e;
      this.patchThreeRenderer(t), this.gl = t.getContext();
    }
    if (!this.gl && e instanceof WebGL2RenderingContext)
      this.gl = e;
    else if (!this.gl && e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas) {
      if (this.gl = e.getContext("webgl2"), !this.gl) {
        console.error("Stats: Unable to obtain WebGL2 context.");
        return;
      }
    } else if (!this.gl) {
      console.error("Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas.");
      return;
    }
    this.ext = this.gl.getExtension("EXT_disjoint_timer_query_webgl2"), this.ext && (this.gpuPanel = this.addPanel(new Ys.Panel("GPU", "#ff0", "#220"), 2));
  }
  begin() {
    this.isRunningCPUProfiling || this.beginProfiling("cpu-started"), !(!this.gl || !this.ext) && this.gl && this.ext && (this.activeQuery && this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.activeQuery = this.gl.createQuery(), this.activeQuery !== null && this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.activeQuery));
  }
  end() {
    this.renderCount++, this.gl && this.ext && this.activeQuery && (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.gpuQueries.push({ query: this.activeQuery }), this.activeQuery = null);
  }
  processGpuQueries() {
    !this.gl || !this.ext || (this.totalGpuDuration = 0, this.gpuQueries.forEach((e, t) => {
      if (this.gl) {
        const n = this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT_AVAILABLE), s = this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);
        if (n && !s) {
          const r = this.gl.getQueryParameter(e.query, this.gl.QUERY_RESULT) * 1e-6;
          this.totalGpuDuration += r, this.gl.deleteQuery(e.query), this.gpuQueries.splice(t, 1);
        }
      }
    }));
  }
  update() {
    this.processGpuQueries(), this.endProfiling("cpu-started", "cpu-finished", "cpu-duration"), this.addToAverage(this.totalCpuDuration, this.averageCpu), this.addToAverage(this.totalGpuDuration, this.averageGpu), this.renderCount = 0, this.totalCpuDuration = 0, this.totalGpuDuration = 0, this.totalFps = 0, this.beginTime = this.endInternal();
  }
  endInternal() {
    this.frames++;
    const e = (performance || Date).now();
    if (e >= this.prevCpuTime + 1e3 / this.logsPerSecond && (this.updatePanel(this.msPanel, this.averageCpu), this.updatePanel(this.gpuPanel, this.averageGpu), this.prevCpuTime = e), e >= this.prevTime + 1e3) {
      const t = this.frames * 1e3 / (e - this.prevTime);
      this.fpsPanel.update(t, t, 100, 100, 0), this.prevTime = e, this.frames = 0;
    }
    return e;
  }
  addToAverage(e, t) {
    t.logs.push(e), t.logs.length > this.samplesLog && t.logs.shift(), t.graph.push(e), t.graph.length > this.samplesGraph && t.graph.shift();
  }
  beginProfiling(e) {
    window.performance && (window.performance.mark(e), this.isRunningCPUProfiling = true);
  }
  endProfiling(e, t, n) {
    if (window.performance && t && this.isRunningCPUProfiling) {
      window.performance.mark(t);
      const s = performance.measure(n, e, t);
      this.totalCpuDuration += s.duration, this.isRunningCPUProfiling = false;
    }
  }
  updatePanel(e, t) {
    if (t.logs.length > 0) {
      let n = 0, s = 0.01;
      for (let a = 0; a < t.logs.length; a++)
        n += t.logs[a], t.logs[a] > s && (s = t.logs[a]);
      let i = 0, r = 0.01;
      for (let a = 0; a < t.graph.length; a++)
        i += t.graph[a], t.graph[a] > r && (r = t.graph[a]);
      e && e.update(n / Math.min(t.logs.length, this.samplesLog), i / Math.min(t.graph.length, this.samplesGraph), s, r, this.precision);
    }
  }
  get domElement() {
    return this.dom;
  }
  get container() {
    return console.warn("Stats: Deprecated! this.container as been replaced to this.dom "), this.dom;
  }
};
Qa.Panel = Jp;
var em = Qa;
var Rg = defineComponent({
  name: "StatsGl",
  props: [
    "logsPerSecond",
    "samplesLog",
    "samplesGraph",
    "precision",
    "horizontal",
    "minimal",
    "mode"
  ],
  async setup(o, { expose: e }) {
    const t = new em({
      logsPerSecond: o.logsPerSecond,
      samplesLog: o.samplesLog,
      samplesGraph: o.samplesGraph,
      precision: o.precision,
      horizontal: o.horizontal,
      minimal: o.minimal,
      mode: o.mode
    });
    e({ statsGl: t });
    const n = document.body, s = t.dom || t.container;
    n == null || n.appendChild(s);
    const { renderer: i } = dr(), { onAfterLoop: r, resume: a } = re();
    t.init(i.value), a(), r(() => {
      t.update();
    }), onUnmounted(() => {
      n == null || n.removeChild(s);
    });
  }
});
var Cg = defineComponent({
  name: "BakeShadows",
  setup() {
    const { renderer: o } = dr();
    watchEffect(() => {
      o.value.shadowMap.autoUpdate = false, o.value.shadowMap.needsUpdate = true;
    });
  }
});
var tm = `#include <common>

void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;

  
  
  float size = 0.03;

  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;

  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;

  gl_Position = projectionMatrix * mvPosition;
}`;
var nm = `void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}`;
var vs = new Vector3(0, 0, 0);
var Tr = new Vector3(0, 0, 0);
var sm = new Vector3(0, 0, 0);
function Oo(o, e, t) {
  const n = vs.setFromMatrixPosition(o.matrixWorld);
  n.project(e);
  const s = t.width / 2, i = t.height / 2;
  return [
    (Number.isNaN(n.x) ? 0 : n.x) * s + s,
    -(n.y * i) + i
  ];
}
function im(o, e) {
  const t = vs.setFromMatrixPosition(o.matrixWorld), n = Tr.setFromMatrixPosition(e.matrixWorld), s = t.sub(n), i = e.getWorldDirection(sm);
  return s.angleTo(i) > Math.PI / 2;
}
function rm(o, e, t, n) {
  const s = vs.setFromMatrixPosition(o.matrixWorld), i = s.clone();
  i.project(e), t.setFromCamera(new Vector2(i.x, i.y), e);
  const r = t.intersectObjects(n, true);
  if (r.length > 0) {
    const a = r[0].distance;
    return s.distanceTo(t.ray.origin) < a;
  }
  return true;
}
function om(o, e) {
  if (e instanceof OrthographicCamera)
    return e.zoom;
  if (e instanceof PerspectiveCamera) {
    const t = vs.setFromMatrixPosition(o.matrixWorld), n = Tr.setFromMatrixPosition(e.matrixWorld), s = e.fov * Math.PI / 180, i = t.distanceTo(n);
    return 1 / (2 * Math.tan(s / 2) * i);
  } else
    return 1;
}
function am(o, e, t) {
  if (e instanceof PerspectiveCamera || e instanceof OrthographicCamera) {
    const n = vs.setFromMatrixPosition(o.matrixWorld), s = Tr.setFromMatrixPosition(e.matrixWorld), i = n.distanceTo(s), r = (t[1] - t[0]) / (e.far - e.near), a = t[1] - r * e.far;
    return Math.round(r * i + a);
  }
}
var ir = (o) => Math.abs(o) < 1e-10 ? 0 : o;
function Ja(o, e, t = "") {
  let n = "matrix3d(";
  for (let s = 0; s !== 16; s++)
    n += ir(e[s] * o.elements[s]) + (s !== 15 ? "," : ")");
  return t + n;
}
var lm = /* @__PURE__ */ ((o) => (e) => Ja(e, o))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);
var cm = /* @__PURE__ */ ((o) => (e, t) => Ja(e, o(t), "translate(-50%,-50%)"))((o) => [1 / o, 1 / o, 1 / o, 1, -1 / o, -1 / o, -1 / o, -1, 1 / o, 1 / o, 1 / o, 1, 1, 1, 1, 1]);
var um = ["geometry", "material"];
var Ig = defineComponent({
  __name: "HTML",
  props: {
    geometry: { default: new PlaneGeometry() },
    material: {},
    as: { default: "div" },
    transform: { type: Boolean, default: false },
    portal: {},
    wrapperClass: {},
    eps: { default: 1e-4 },
    distanceFactor: {},
    fullscreen: { type: Boolean },
    center: { type: Boolean },
    pointerEvents: { default: "auto" },
    sprite: { type: Boolean, default: false },
    zIndexRange: { default: () => [16777271, 0] },
    occlude: { type: [Array, Boolean, String] }
  },
  emits: ["onOcclude"],
  setup(o, { emit: e }) {
    const t = o, n = e, s = useAttrs(), i = useSlots(), r = ref(), a = ref(), {
      geometry: l,
      material: c,
      as: u,
      transform: h,
      portal: m,
      wrapperClass: p,
      eps: v,
      distanceFactor: _,
      fullscreen: y,
      center: E,
      pointerEvents: R,
      sprite: T,
      occlude: g,
      zIndexRange: A2
    } = toRefs(t), { renderer: x, scene: M, camera: d, raycaster: w, sizes: f } = dr(), P = computed(() => document.createElement(u.value)), I = ref([0, 0]), K = ref(0), N = ref(), Z = computed(() => h.value ? {
      position: "absolute",
      top: 0,
      left: 0,
      width: `${f.width.value}px`,
      height: `${f.height.value}px`,
      transformStyle: "preserve-3d",
      pointerEvents: "none",
      zIndex: 2,
      willChange: "transform"
    } : {
      position: "absolute",
      transform: E.value ? "translate3d(-50%,-50%,0)" : "none",
      ...y.value && {
        top: -f.height.value / 2,
        left: -f.width.value / 2,
        width: `${f.width.value}px`,
        height: `${f.height.value}px`
      },
      zIndex: 2,
      ...s.style,
      willChange: "transform"
    }), W = computed(() => ({
      position: "absolute",
      pointerEvents: R.value
    })), X = ref(null), V = ref(false), ne = computed(
      () => (g == null ? void 0 : g.value) && (g == null ? void 0 : g.value) !== "blending" || Array.isArray(g == null ? void 0 : g.value) && (g == null ? void 0 : g.value.length) && isRef(g.value[0])
    );
    watch(
      () => g,
      (b) => {
        b && b === "blending" ? (P.value.style.zIndex = `${Math.floor(A2.value[0] / 2)}`, P.value.style.position = "absolute", P.value.style.pointerEvents = "none") : (P.value.style.zIndex = null, P.value.style.position = null, P.value.style.pointerEvents = null);
      }
    ), watch(
      () => {
        var b;
        return [r.value, x.value, f.width.value, f.height.value, (b = i.default) == null ? void 0 : b.call(i)];
      },
      ([b, U]) => {
        var J, F, B, S, C, D;
        if (b && U) {
          const G = (m == null ? void 0 : m.value) || U.domElement;
          if ((J = M.value) == null || J.updateMatrixWorld(), h.value)
            P.value.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
          else {
            const $ = Oo(b, d.value, {
              width: f.width.value,
              height: f.height.value
            });
            P.value.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${$[0]}px,${$[1]}px,0);transform-origin:0 0;`;
          }
          G && !P.value.parentNode && ((F = G.parentNode) == null || F.appendChild(P.value)), h.value ? N.value = createVNode("div", { id: "outer", style: Z.value }, [
            createVNode("div", { id: "inner", style: W.value }, [
              createVNode("div", {
                key: (B = a.value) == null ? void 0 : B.uuid,
                id: M == null ? void 0 : M.value.uuid,
                class: s.class,
                style: s.style
              }, (S = i.default) == null ? void 0 : S.call(i))
            ])
          ]) : N.value = createVNode(
            "div",
            {
              key: (C = a.value) == null ? void 0 : C.uuid,
              id: M == null ? void 0 : M.value.uuid,
              style: Z.value
            },
            (D = i.default) == null ? void 0 : D.call(i)
          ), render(N.value, P.value);
        }
      }
    ), watchEffect(() => {
      p != null && p.value && (P.value.className = p.value);
    });
    const se = ref(true), { onLoop: he } = re();
    he(() => {
      var b, U, J, F, B, S, C;
      if (r.value && d.value && x.value) {
        (b = d.value) == null || b.updateMatrixWorld(), r.value.updateWorldMatrix(true, false);
        const D = h.value ? I.value : Oo(r.value, d.value, {
          width: f.width.value || 0,
          height: f.height.value || 0
        });
        if (h.value || Math.abs(K.value - d.value.zoom) > v.value || Math.abs(I.value[0] - D[0]) > v.value || Math.abs(I.value[1] - D[1]) > v.value) {
          const G = im(r.value, d.value);
          let $ = false;
          ne.value && (Array.isArray(g == null ? void 0 : g.value) ? $ = g == null ? void 0 : g.value : (g == null ? void 0 : g.value) !== "blending" && ($ = [M.value]));
          const Y = se.value;
          if ($) {
            const L = rm(
              r.value,
              d.value,
              w.value,
              $
            );
            se.value = L && !G;
          } else
            se.value = !G;
          Y !== se.value && (n("onOcclude", !se.value), P.value.style.display = se.value ? "block" : "none");
          const te = Math.floor(A2.value[0] / 2), O = g != null && g.value ? ne.value ? [A2.value[0], te] : [te - 1, 0] : A2.value;
          if (P.value.style.zIndex = `${am(r.value, d.value, O)}`, P.value.style.willChange = "transform", h.value) {
            const [L, re2] = [
              f.width.value / 2,
              f.height.value / 2
            ], ce = d.value.projectionMatrix.elements[5] * re2, { isOrthographicCamera: be, top: Me, left: Se, bottom: qe, right: kt } = d.value, jn = lm(d.value.matrixWorldInverse), Sn = be ? `scale(${ce})translate(${ir(-(kt + Se) / 2)}px,${ir((Me + qe) / 2)}px)` : `translateZ(${ce}px)`;
            let gt = r.value.matrixWorld;
            T.value && (gt = d.value.matrixWorldInverse.clone().transpose().copyPosition(gt).scale(r.value.scale), gt.elements[3] = gt.elements[7] = gt.elements[11] = 0, gt.elements[15] = 1), P.value.style.width = `${f.width.value}px`, P.value.style.height = `${f.height.value}px`, P.value.style.perspective = be ? "" : `${ce}px`, (U = N.value) != null && U.el && ((J = N.value) != null && J.children) && (N.value.el.style.willChange = "transform", N.value.el.style.transform = `${Sn}${jn}translate(${L}px,${re2}px)`, N.value.children[0].willChange = "transform", N.value.children[0].el.style.transform = cm(
              gt,
              1 / (((_ == null ? void 0 : _.value) || 10) / 400)
            ));
          } else {
            const L = (_ == null ? void 0 : _.value) === void 0 ? 1 : om(r.value, d.value) * (_ == null ? void 0 : _.value);
            P.value.style.transform = `translate3d(${D[0]}px,${D[1]}px,0) scale(${L})`;
          }
        }
        I.value = D, K.value = d.value.zoom;
      }
      if (!ne.value && a.value && !V.value)
        if (h.value) {
          if ((F = N.value) != null && F.el && ((B = N.value) != null && B.children)) {
            const D = (S = N.value) == null ? void 0 : S.children[0];
            if (D != null && D.clientWidth && (D != null && D.clientHeight)) {
              const { isOrthographicCamera: G } = d.value;
              if (G || l)
                s.scale && (Array.isArray(s.scale) ? s.scale instanceof Vector3 ? a.value.scale.copy(s.scale.clone().divideScalar(1)) : a.value.scale.set(1 / s.scale[0], 1 / s.scale[1], 1 / s.scale[2]) : a.value.scale.setScalar(1 / s.scale));
              else {
                const $ = ((_ == null ? void 0 : _.value) || 10) / 400, Y = D.clientWidth * $, te = D.clientHeight * $;
                a.value.scale.set(Y, te, 1);
              }
              V.value = true;
            }
          }
        } else {
          const D = P.value.children[0];
          if (D != null && D.clientWidth && (D != null && D.clientHeight)) {
            const $ = D.clientWidth * 1, Y = D.clientHeight * 1;
            a.value.scale.set($, Y, 1), V.value = true;
          }
          X.value.lookAt((C = d.value) == null ? void 0 : C.position);
        }
    });
    const H = computed(() => ({
      vertexShader: h.value ? void 0 : tm,
      fragmentShader: nm
    })), k = computed(() => {
      const b = H.value;
      return c.value || new ShaderMaterial({
        vertexShader: b.vertexShader,
        fragmentShader: b.fragmentShader,
        side: DoubleSide
      });
    });
    return onUnmounted(() => {
      k.value && k.value.dispose(), P.value.remove();
    }), (b, U) => (openBlock(), createElementBlock("TresGroup", {
      ref_key: "groupRef",
      ref: r
    }, [
      unref(g) && !ne.value ? (openBlock(), createElementBlock("TresMesh", {
        key: 0,
        ref_key: "meshRef",
        ref: a,
        geometry: unref(l),
        material: k.value
      }, null, 8, um)) : createCommentVNode("", true)
    ], 512));
  }
});
var { logError: hm } = A();
async function Dg(o, e) {
  const t = new hr(), n = (e == null ? void 0 : e.fileName) || "scene";
  t.parse(
    o,
    (s) => {
      if (s instanceof ArrayBuffer)
        dm(s, `${n}.glb`);
      else {
        const i = JSON.stringify(s, null, 2);
        fm(i, `${n}.gltf`);
      }
    },
    (s) => {
      hm("An error happened while exporting the GLTF", s);
    },
    e
  );
}
function fm(o, e) {
  el(new Blob([o], { type: "text/plain" }), e);
}
function dm(o, e) {
  el(new Blob([o], { type: "application/octet-stream" }), e);
}
function el(o, e) {
  const t = document.createElement("a");
  t.style.display = "none", document.body.appendChild(t), t.href = URL.createObjectURL(o), t.download = e, t.click(), t.remove();
}
var Lg = {
  mounted: (o, e) => {
    if (e.arg) {
      console.log(`v-log:${e.arg}`, o[e.arg]);
      return;
    }
    console.log("v-log", o);
  }
};
var { logWarning: Fo } = A();
var Og = {
  mounted: (o) => {
    if (!o.isLight) {
      Fo(`${o.type} is not a light`);
      return;
    }
    Hs = pm[o.type], o.parent.add(new Hs(o));
  },
  updated: (o) => {
    Bn = o.parent.children.find((e) => e instanceof Hs), !(Bn instanceof Ra) && Bn.update();
  },
  unmounted: (o) => {
    if (!o.isLight) {
      Fo(`${o.type} is not a light`);
      return;
    }
    Bn = o.parent.children.find((e) => e instanceof Hs), Bn.dispose(), o.parent.remove(Bn);
  }
};
var Hs;
var Bn;
var pm = {
  DirectionalLight: DirectionalLightHelper,
  PointLight: PointLightHelper,
  SpotLight: SpotLightHelper,
  HemisphereLight: HemisphereLightHelper,
  RectAreaLight: Ra
};
function Fg(o, e) {
  const t = {};
  for (const n of e)
    Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
  return t;
}
function kg(o, e) {
  const t = `set${e[0].toUpperCase()}${e.slice(1)}`;
  return o[t] !== void 0;
}
function tl(o) {
  var t, n;
  let e = o.value;
  return o.value && ((n = (t = o.value) == null ? void 0 : t.value) != null && n.isMesh) && (e = o.value.value.position), Array.isArray(o.value) && (e = new Vector3(...e)), e;
}
var { logWarning: mm } = A();
var Ug = {
  updated: (o, e) => {
    const t = tl(e);
    if (!t) {
      mm(`v-always-look-at: problem with binding value: ${e.value}`);
      return;
    }
    const { onLoop: n } = re();
    n(() => {
      o.lookAt(t);
    });
  }
};
var { logWarning: gm } = A();
var Bg = {
  updated: (o, e) => {
    var s;
    const t = tl(e);
    if (!t) {
      gm(`v-distance-to: problem with binding value: ${e.value}`);
      return;
    }
    Ht && (Ht.dispose(), o.parent.remove(Ht));
    const n = t.clone().sub(o.position);
    n.normalize(), Ht = new ArrowHelper(n, o.position, o.position.distanceTo(t) / 1.5, 16776960), o.parent.add(Ht), console.table(
      [
        ["Distance:", o.position.distanceTo(t)],
        [`origin: ${o.name || o.type}`, `x:${o.position.x}, y:${o.position.y}, z:${(s = o.position) == null ? void 0 : s.z}`],
        [`Destiny: ${o.name || o.type}`, `x:${t.x}, y:${t.y}, z:${t == null ? void 0 : t.z}`]
      ]
    );
  },
  unmounted: (o) => {
    Ht == null || Ht.dispose(), o.parent.remove(Ht);
  }
};
var Ht = null;
export {
  xg as Backdrop,
  Cg as BakeShadows,
  ig as Box,
  Jm as CameraControls,
  rg as CatmullRomCurve3,
  og as Circle,
  ag as Cone,
  wg as ContactShadows,
  ng as CustomShaderMaterial,
  lg as Dodecahedron,
  _g as Environment,
  jm as FBXModel,
  zm as Fbo,
  Gm as GLTFModel,
  Bm as GlobalAudio,
  Ig as Html,
  cg as Icosahedron,
  $m as KeyboardControls,
  Nm as Lensflare,
  Fm as Levioso,
  Vd as Line2,
  qm as MapControls,
  tg as MeshGlassMaterial,
  sg as MeshReflectionMaterial,
  eg as MeshWobbleMaterial,
  Um as MouseParallax,
  ug as Octahedron,
  Wm as OrbitControls,
  hg as Plane,
  Km as PointerLockControls,
  Tg as Precipitation,
  km as Reflector,
  fg as Ring,
  Vm as SVG,
  Hm as Sampler,
  Qm as ScrollControls,
  bg as Sky,
  Eg as Smoke,
  Mg as Sparkles,
  dg as Sphere,
  Sg as Stars,
  Pg as Stats,
  Rg as StatsGl,
  pg as Superformula,
  mg as Tetrahedron,
  Lm as Text3D,
  gg as Torus,
  yg as TorusKnot,
  Zm as TransformControls,
  vg as Tube,
  tl as extractBindingPosition,
  kg as hasSetter,
  Fg as pick,
  Om as useAnimations,
  nf as useEnvironment,
  Jh as useFBO,
  af as useFBX,
  rf as useGLTF,
  Dg as useGLTFExporter,
  Ym as useProgress,
  ef as useSurfaceSampler,
  Ag as useTweakPane,
  Xm as useVideoTexture,
  Ug as vAlwaysLookAt,
  Bg as vDistanceTo,
  Og as vLightHelper,
  Lg as vLog
};
/*! Bundled license information:

tweakpane/dist/tweakpane.js:
  (*! Tweakpane 4.0.3 (c) 2016 cocopon, licensed under the MIT license. *)

@tresjs/cientos/dist/trescientos.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=@tresjs_cientos.js.map
