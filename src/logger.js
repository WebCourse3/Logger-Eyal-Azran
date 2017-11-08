"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var level_1 = require("./level");
var level_2 = require("./level");
var level_3 = require("./level");
var fs = require('fs');
var Logger = /** @class */ (function () {
    function Logger(name, configuration) {
        this._name = name;
        this._configuration = configuration;
    }
    Object.defineProperty(Logger.prototype, "getConfiguration", {
        // Getters and Setters
        get: function () {
            return this._configuration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "setConfiguration", {
        set: function (value) {
            this._configuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "setName", {
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Logger.prototype.info = function (strings) {
        this.log(level_1.Level.INFO, strings);
    };
    Logger.prototype.warning = function (strings) {
        this.log(level_1.Level.WARN, strings);
    };
    Logger.prototype.debug = function (strings) {
        this.log(level_1.Level.DEBUG, strings);
    };
    Logger.prototype.error = function (strings) {
        this.log(level_1.Level.ERROR, strings);
    };
    // allow multiple strings to be sent.
    Logger.prototype.log = function (level, strings) {
        var _this = this;
        if (level === void 0) { level = this._configuration.defaultLogLevel; }
        var color = level_2.getColor(level);
        strings.forEach(function (logString) {
            if (_this._configuration.console) {
                if (_this._configuration.colors) {
                    console.log('\x1b[' + color + 'm%s\x1b[0m', logString);
                }
                else {
                    console.log(logString);
                }
            }
            if (_this._configuration.file) {
                fs.appendFileSync(_this._configuration.fileName, level_3.getName(level) + ": " + logString + "\r\n");
            }
        });
    };
    return Logger;
}());
exports.Logger = Logger;
