"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jet_validators_1 = require("jet-validators");
const utils_1 = require("jet-validators/utils");
const validators_1 = require("@src/common/util/validators");
const DEFAULT_USER_VALS = {
    id: 0,
    name: '',
    created: new Date(),
    email: '',
};
const parseUser = (0, utils_1.parseObject)({
    id: jet_validators_1.isUnsignedInteger,
    name: jet_validators_1.isString,
    email: jet_validators_1.isString,
    created: validators_1.transformIsDate,
});
function __new__(user) {
    const defaults = { ...DEFAULT_USER_VALS };
    defaults.created = new Date();
    return parseUser({ ...defaults, ...user }, errors => {
        throw new Error('Setup new user failed ' + JSON.stringify(errors, null, 2));
    });
}
function test(arg, errCb) {
    return !!parseUser(arg, errCb);
}
exports.default = {
    new: __new__,
    test,
};
