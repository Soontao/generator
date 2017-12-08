import { Router, RequestHandler } from "express"

var router = Router();

/**
 * @type {RequestHandler}
 */
var getUser = function (req, res, next) {
  res.send('respond with a resource');
}

router.get('/', getUser);

export default router;