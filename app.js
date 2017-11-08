let Configuration = require('./src/configuration');
let Logger = require('./src/logger');

let config = new Configuration.Configuration(true, true, "log.txt", true, undefined);
let logger = new Logger.Logger("myLogger", config);

logger.info(["info"]);
logger.warning(["warning"]);
logger.error(["Error"]);
logger.debug(["Debug"]);
logger.log(undefined, ["log"]);