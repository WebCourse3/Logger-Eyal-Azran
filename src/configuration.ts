import { Level } from './level';

export class Configuration {
    get fileName(): string {
        return this._fileName;
    }

    set fileName(value: string) {
        this._fileName = value;
    }

    // Data Members
    private _console: boolean;
    private _file: boolean;
    private _fileName: string;
    private _colors: boolean;
    private _defaultLogLevel: Level;

    // set defaults to true, defaultLogLevel is set to INFO
    constructor(console: boolean = true, file: boolean = true, filename: string = "log.txt" ,colors: boolean = true, level: Level = Level.INFO) {
        this._console = console;
        this._file = file;
        this._fileName = filename;
        this._colors = colors;
        this._defaultLogLevel = level;
    }

    get console(): boolean {
        return this._console;
    }

    set console(value: boolean) {
        this._console = value;
    }


    get file(): boolean {
        return this._file;
    }

    set file(value: boolean) {
        this._file = value;
    }

    get colors(): boolean {
        return this._colors;
    }

    set colors(value: boolean) {
        this._colors = value;
    }

    get defaultLogLevel(): Level {
        return this._defaultLogLevel;
    }

    set defaultLogLevel(value: Level) {
        this._defaultLogLevel = value;
    }
}