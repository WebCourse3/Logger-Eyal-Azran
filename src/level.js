"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
var Level;
(function (Level) {
    Level[Level["INFO"] = 0] = "INFO";
    Level[Level["WARN"] = 1] = "WARN";
    Level[Level["DEBUG"] = 2] = "DEBUG";
    Level[Level["ERROR"] = 3] = "ERROR";
})(Level = exports.Level || (exports.Level = {}));
function getColor(level) {
    if (level == Level.INFO)
        return colors_1.Colors.Green;
    if (level == Level.ERROR)
        return colors_1.Colors.Red;
    if (level == Level.DEBUG)
        return colors_1.Colors.Blue;
    if (level == Level.WARN)
        return colors_1.Colors.Yellow;
    return colors_1.Colors.Green;
}
exports.getColor = getColor;
function getName(level) {
    if (level == Level.INFO)
        return "INFO";
    if (level == Level.ERROR)
        return "ERROR";
    if (level == Level.DEBUG)
        return "DEBUG";
    if (level == Level.WARN)
        return "WARN";
    return "INFO";
}
exports.getName = getName;
