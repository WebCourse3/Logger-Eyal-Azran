import { Configuration } from './Configuration';
import { Level } from './level';
import { getColor } from './level';
import { getName } from './level';
const fs = require('fs');

export class Logger{

    // Data Members
    private _configuration: Configuration;
    private _name: string;

    constructor(name: string, configuration: Configuration){
        this._name = name;
        this._configuration = configuration;
    }

    // Getters and Setters
    get getConfiguration(): Configuration {
        return this._configuration;
    }

    set setConfiguration(value: Configuration) {
        this._configuration = value;
    }

    get getName(): string {
        return this._name;
    }

    set setName(value: string) {
        this._name = value;
    }

    info(strings: string[]): void{
        this.log(Level.INFO, strings);
    }

    warning(strings: string[]): void{
        this.log(Level.WARN, strings);
    }

    debug(strings: string[]): void{
        this.log(Level.DEBUG, strings);
    }

    error(strings: string[]): void{
        this.log(Level.ERROR, strings);
    }

    // allow multiple strings to be sent.
    log(level: Level = this._configuration.defaultLogLevel, strings: string[]): void {

        let color = getColor(level);

        strings.forEach( logString => {
            if (this._configuration.console) {
                if (this._configuration.colors) {
                    console.log('\x1b[' + color + 'm%s\x1b[0m', logString);
                }
                else {
                    console.log(logString);
                }

            }
            if (this._configuration.file) {
                fs.appendFileSync(this._configuration.fileName, getName(level) + ": " + logString + "\r\n");
            }
        })
    }
}