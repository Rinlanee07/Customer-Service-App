// lib/cookie.ts
import cookie from 'cookiejs';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const decodeJwtToken = (): JwtPayload | null => {
    const token = cookie.get('token');
    if (token) {
        const decoded = jwt.decode(token as string);
        if (typeof decoded === 'object' && decoded !== null) {
            return decoded as JwtPayload;
        }
    }
    return null;
};
