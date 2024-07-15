import { transports, format } from 'winston';

const loggerConfig = {
    level: 'info',
    format: format.combine(
        format.align(),
        format.timestamp({
            format: 'YYYY-MM-DD hh:mm:ss',
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console()
    ]
};

export default loggerConfig;
