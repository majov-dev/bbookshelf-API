import { IUser } from "../models/User";
import { Request } from 'express';

declare global {
    namespace Express {
        export interface Request {
            user: Partial<IUser>;
        }
    }
}
