import express from 'express';
import jwt from 'jsonwebtoken';

// Middleware khusus untuk mencegah akses route jika pengguna sudah terautentikasi
export const PreventAuthenticatedAccess = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const secret = process.env.JWT_ACCESS_SECRET;

        if (!secret) {
            res.status(500).json({ message: 'JWT secret not found', status: 500 });
            return;
        }

        jwt.verify(token, secret, (err, _user) => {
            if (err) {
                next();
            }
            res.status(403).json({ message: "You are already authenticated", status: 403 });
        });
    } else {
        next();
    }
};
