import { UserRole } from "@rocket/enum/user-role.enum";
import { AuthenticationError } from "@rocket/exceptions/authentication-error.class";
import { extractHeader } from "@rocket/helpers/jwt/extract-header.helper";
import { parseToken } from "@rocket/helpers/jwt/parse-token.helper";
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

const hasRole = (roles: UserRole | UserRole[]) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type, token } = extractHeader(req.headers.authorization);
            if (type === 'Bearer' && token) {
                const decoded = parseToken(token);
                const user = await User.findOne({ username: decoded });
                if (!user) {
                    throw new AuthenticationError('user not found.');
                }
                const isRole = Array.isArray(roles) ? roles.some(role => role === user.role) : roles === user.role;
                if (!isRole) {
                    throw new AuthenticationError('user dosen\'t role.');
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


const JWT = { Login, hasRole };

export default JWT;