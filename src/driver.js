"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const crc_32_1 = require("crc-32");
const crypto_1 = require("crypto");
const Either_1 = require("fp-ts/lib/Either");
const io_ts_reporters_1 = require("io-ts-reporters");
const exceptions_1 = require("./exceptions");
const payment_info_1 = require("./payment-info");
class Driver {
    constructor(config, configCodec) {
        this.configCodec = configCodec;
        this.linkStrategy = 'default';
        this.makeRequestInfo = (referenceId, method, url, params = {}) => new payment_info_1.PaymentInfo(referenceId, method, url, params);
        this.getParsedData = (rawData, codec) => {
            const result = codec.decode(rawData);
            if ((0, Either_1.isLeft)(result)) {
                throw new exceptions_1.BadConfigException(io_ts_reporters_1.default.report(result));
            }
            return result.right;
        };
        this.config = this.getParsedData(config, configCodec);
    }
    setConfig(config) {
        this.config = this.getParsedData(config, this.configCodec);
    }
    setLinkStrategy(strategy) {
        this.linkStrategy = strategy;
    }
    getLinks() {
        return this.links[this.linkStrategy];
    }
    generateUuid() {
        return (0, crypto_1.randomUUID)();
    }
    generateId() {
        return (0, crc_32_1.str)(this.generateUuid());
    }
}
exports.Driver = Driver;
//# sourceMappingURL=driver.js.map