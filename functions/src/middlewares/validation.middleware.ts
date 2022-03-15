import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

interface IUserErrorsFields {
    email?: string | null,
    name?: string | null,
    age?: string | null,
}
export const validateUserFields = (req: Request, res: Response, next: NextFunction) => {
    const { email, name, age } = req.body;
    const errors: IUserErrorsFields = {
        email: !email ? 'email is required' : null,
        name: !name ? 'name is required' : null,
    };
    if (!errors.email && !errors.name) {
        if (!validator.isEmail(email)) {
            errors.email = 'incorrect email';
        }
        if (typeof name !== 'string') {
            errors.name = 'incorrect name';
        }
        if (typeof age !== 'number') {
            errors.age = 'invalide age';
        }
        if (!errors.email && !errors.name && !errors.age) {
            next();
        } else {
            res.status(422).json(errors);
        }
    } else {
        res.status(422).json(errors);
    }
};
