import { ErrorRequestHandler, RequestHandler } from "express"

/**

 * @type {ErrorRequestHandler} 
 */
export var err_process = function ( /** @type {Error} */ err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}

/**
 * @type {RequestHandler}
 */
export var not_found = function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

export default { not_found, err_process }