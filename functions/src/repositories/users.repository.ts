import { database } from '../database/firebase';
import IUser from '../models/user.interface';

const dbRef = database.ref('users');

export const createUser = async (object: IUser): Promise<IUser> => {
    await dbRef.child(object.id).set(object);
    return readOneUser(object.id);
};

export const readOneUser = async (id: string): Promise<IUser> => {
    return (await dbRef.child(id).get()).val();
};

export const readAllUsers = async (): Promise<IUser[]> => {
    return (await dbRef.get()).val();
};

export const updateUser = async (id: string, object: IUser): Promise<IUser> => {
    await dbRef.child(id).update(object);
    return readOneUser(id);
};

export const deleteUser = async (id: string): Promise<void> => {
    return await dbRef.child(id).set(null);
};

