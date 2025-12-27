import { AuthenticationError } from "@rocket/exceptions/authentication-error.class";
import { extractHeader } from "@rocket/helpers/jwt/extract-header.helper";
import { parseToken } from "@rocket/helpers/jwt/parse-token.helper";
import { IUser } from "@rocket/interfaces/user/user.interface";
import User from "@rocket/models/user.model";
import { NextFunction, Request, Response } from "express";

const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { type, token } = extractHeader(req.headers.authorization);
        if (type === 'Bearer' && token) {
            const decoded = parseToken(token);
            const user = await User.findOne({ username: decoded });
            if (!user) {
                throw new AuthenticationError('user not found.');
            }
            req.currentUser = user;
            next();
        } else {
            throw new AuthenticationError('Error');
        }
    } catch (err) {
        next(err);
    }
};


const JWT = { Login };

export default JWT;