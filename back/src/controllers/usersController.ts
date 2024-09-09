import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import {
  createUserService,
  findUserByCredentialId,
  getAllUsersSerive,
  getUserByIdService,
} from "../services/usersService";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import ICredentialDto from "../interfaces/ICreateCredentialDto";
import ICredential from "../interfaces/ICredential";
import { validateCredentials } from "../services/credentialsService";
import { User } from "../entities/User";
import { userModel } from "../repositories";
import { Credential } from "../entities/Credentials";
import { log } from "console";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUsersSerive();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (
  req: Request<{ id: string }, {}, {}>, //params, query y body
  res: Response
) => {
  try {
    const { id } = req.params;
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (
  req: Request<{}, {}, ICreateUserDto>,
  res: Response
) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
      });
    res.status(200).json({message: "Usuario creado con exito"});
  } catch (error: any) {
    res.status(404).json({ message: error.message });
    
  }
};

export const login = async (
  req: Request<{}, {}, ICredentialDto>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const credential: Credential = await validateCredentials({
      username,
      password,
    });
    const user: User = await findUserByCredentialId(credential.id);
    res.status(200).json({ loggin: true, user });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
