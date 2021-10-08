import fs from 'fs-extra';
import path from 'path';
import { logger } from '../configs';

// Delete allure-report directory
const allureReportDirPath = path.join(__dirname, '..', '..', 'allure-report');
logger.debug(`Removing the allure-report directory -> ${allureReportDirPath}`);
fs.emptyDirSync(allureReportDirPath);
logger.debug('Allure report directory removed');

// Delete allure-results directory
const allureResultsDirPath = path.join(__dirname, '..', '..', 'allure-results');
logger.debug(`Removing the allure-results directory -> ${allureResultsDirPath}`);
fs.emptyDirSync(allureResultsDirPath);
logger.debug('Allure results directory removed');

// Delete combined.log file
const combinedLogFilePath = path.join(__dirname, '..', '..', 'logs', 'combined.log');
logger.debug(`Removing the combined.log file -> ${combinedLogFilePath}`);
fs.removeSync(combinedLogFilePath);
logger.debug('File combined.log removed');

// Create logs directory
const logsDirPath = path.join(__dirname, '..', '..', 'logs');
logger.debug(`Creating the logs directory -> ${logsDirPath}`);

fs.ensureDirSync(logsDirPath);
logger.debug('Logs directory created');
