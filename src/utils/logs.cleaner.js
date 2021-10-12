import { emptyDirSync, removeSync, ensureDirSync } from 'fs-extra';
import { join } from 'path';
import { logger } from '../configs';

// Delete allure-report directory
const allureReportDirPath = join(__dirname, '..', '..', 'allure-report');
logger.debug(`Removing the allure-report directory -> ${allureReportDirPath}`);
emptyDirSync(allureReportDirPath);
logger.debug('Allure report directory removed');

// Delete allure-results directory
const allureResultsDirPath = join(__dirname, '..', '..', 'allure-results');
logger.debug(`Removing the allure-results directory -> ${allureResultsDirPath}`);
emptyDirSync(allureResultsDirPath);
logger.debug('Allure results directory removed');

// Delete combined.log file
const combinedLogFilePath = join(__dirname, '..', '..', 'logs', 'combined.log');
logger.debug(`Removing the combined.log file -> ${combinedLogFilePath}`);
removeSync(combinedLogFilePath);
logger.debug('File combined.log removed');

// Create logs directory
const logsDirPath = join(__dirname, '..', '..', 'logs');
logger.debug(`Creating the logs directory -> ${logsDirPath}`);

ensureDirSync(logsDirPath);
logger.debug('Logs directory created');
