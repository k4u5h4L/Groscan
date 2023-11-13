import winston from "winston";

const logger = winston.createLogger({
    level: "debug",
    transports: [],
});

// Console Transport
logger.add(
    new winston.transports.Console({
        format: winston.format.combine(
            // winston.format.align(),
            winston.format.colorize(),
            winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            // winston.format.logstash(),
            winston.format.prettyPrint(),
            winston.format.printf(
                (info) => `${info.timestamp} ${info.level}: ${info.message}`
            )
        ),
    })
);

// // File Transport
// logger.add(new winston.transports.File({ filename: 'error.log' }));

export default logger;
