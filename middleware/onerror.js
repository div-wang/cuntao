const logger = require('../utils/logger');
module.exports = async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            ctx.body = { status: 404 };
        }
    } catch (err) {
        const errCode = err instanceof Error ? err.stack : err
        logger.error('Promise error: ' + errCode);
        ctx.body = { status: 500, errCode };
    }
};
