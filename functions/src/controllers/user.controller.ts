import { Response, Request } from 'express';
import {
    createUser,
    readAllUsers,
    readOneUser,
    updateUser,
    deleteUser,
} from '../repositories/users.repository';
import { generateID } from '../utils/functions';

export const processCreateUser = async (req: Request, res: Response) => {
    const { email, name, age } = req.body;
    try {
        const newUser = await createUser({
            id: generateID(),
            email,
            name,
            age,
        });
        res.status(201).json({ user: newUser });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const processReadAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await readAllUsers();

        res.json({ users });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const processReadOneUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await readOneUser(id);
        if (user) {
            res.json({ user });
        } else {
            res.status(404).json({ error: 'Undefined ID' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const processUpdateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, name, age } = req.body;
    try {
        const userToUpdate = await readOneUser(id);
        if (userToUpdate) {
            const userUpdated = await updateUser(id, { id, email, name, age });
            res.json(userUpdated);
        } else {
            res.status(404).json({ error: 'Undefined ID' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

export const processDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userToDelete = await readOneUser(id);
        if (userToDelete) {
            await deleteUser(id);
            res.status(204).send('User deleted');
        } else {
            res.status(404).json({ error: 'Undefined ID' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
