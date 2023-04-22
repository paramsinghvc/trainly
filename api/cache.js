"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkKeyIfNotSetIt = exports.cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
exports.cache = new node_cache_1.default({ stdTTL: 10 }); // TTL to unlimited
const SIXTY_DAYS = 60 * 24 * 60 * 60;
function checkKeyIfNotSetIt(key, value, ttl) {
    if (exports.cache.has(key))
        return exports.cache.get(key);
    exports.cache.set(key, value, ttl !== null && ttl !== void 0 ? ttl : SIXTY_DAYS);
    return value;
}
exports.checkKeyIfNotSetIt = checkKeyIfNotSetIt;
