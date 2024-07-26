import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.acess_token;
  console.log(token);
  if (!token) {
    return next(errorHandler(401, "UnAuthorized:no token provided"));
  }
  jwt.verify(token, process.env.JWT_secret, (err, user) => {
    if (err) {
      return next(errorHandler(401, "UnAuthorized"));
    }
    req.user = user;
    next();
  });
};
