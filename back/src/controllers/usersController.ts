import { Request, Response } from "express";
import {
  getUsersService,
  createUserService,
  deleteUserService,
} from "../services/usersService";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersService();
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, phone, address, image } = req.body;
  const newUser = await createUserService({
    name,
    email,
    password,
    phone,
    address,
    image,
  });
  res.status(201).json(newUser);
};

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params
    const userId = parseInt(id, 10);  
    await deleteUserService(userId);
    res.status(201).json({message:"El usuario ha sido eliminado correctamente"})
};
