import { createLogger } from 'winston';
import loggerConfig from '@framework/config/loggerConfig';

const logger = createLogger(loggerConfig);

/**
 * Utility class for logging
 */
class LogUtils {
    /**
     * Log info message
     * 
     * @param message - Message for logging
     */
    static info(message: string) {
        logger.info(message);
    }

    /**
     * Log warning message
     * 
     * @param message - Message for logging
     */
    static warn(message: string) {
        logger.warn(message);
    }

    /**
     * Log error message
     * 
     * @param message - Message for logging
     */
    static error(message: string) {
        logger.error(message);
    }
}

export default LogUtils;
