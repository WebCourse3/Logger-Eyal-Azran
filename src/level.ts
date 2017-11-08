import { Colors } from './colors';

export enum Level {
    INFO,
    WARN,
    DEBUG,
    ERROR
}

export function getColor (level: Level) {

    if (level == Level.INFO) return Colors.Green;
    if (level == Level.ERROR) return Colors.Red;
    if (level == Level.DEBUG) return Colors.Blue;
    if (level == Level.WARN) return Colors.Yellow;

    return Colors.Green;
}

export function getName (level: Level) {

    if (level == Level.INFO) return "INFO";
    if (level == Level.ERROR) return "ERROR";
    if (level == Level.DEBUG) return "DEBUG";
    if (level == Level.WARN) return "WARN";

    return "INFO";
}
