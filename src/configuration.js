"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var level_1 = require("./level");
var Configuration = /** @class */ (function () {
    // set defaults to true, defaultLogLevel is set to INFO
    function Configuration(console, file, filename, colors, level) {
        if (console === void 0) { console = true; }
        if (file === void 0) { file = true; }
        if (filename === void 0) { filename = "log.txt"; }
        if (colors === void 0) { colors = true; }
        if (level === void 0) { level = level_1.Level.INFO; }
        this._console = console;
        this._file = file;
        this._fileName = filename;
        this._colors = colors;
        this._defaultLogLevel = level;
    }
    Object.defineProperty(Configuration.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        set: function (value) {
            this._fileName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "console", {
        get: function () {
            return this._console;
        },
        set: function (value) {
            this._console = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        set: function (value) {
            this._colors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "defaultLogLevel", {
        get: function () {
            return this._defaultLogLevel;
        },
        set: function (value) {
            this._defaultLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    return Configuration;
}());
exports.Configuration = Configuration;
