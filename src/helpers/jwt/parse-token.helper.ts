import { HttpStatusCode } from '@rocket/abstractions/global/http-status-code.enum';
import { HandlerError } from '@rocket/exceptions/handler-error.class';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string || 'chat_Room_Key_Secret';


export const parseToken = (token: string) => {
    try {
        console.log(secret)
        const decoded: any = jwt.verify(token, secret);
        return decoded.username;
    } catch (error) {
        throw new HandlerError("your session was expired! please login again.", HttpStatusCode.UNAUTHORIZED);
    }
};

export const parseMerchantToken = (token: string) => {
    try {
        const decoded: any = jwt.verify(token, secret);
        return decoded.merchant;
    } catch (error) {
        throw new HandlerError("your session was expired! please login again.", HttpStatusCode.UNAUTHORIZED);
    }
};