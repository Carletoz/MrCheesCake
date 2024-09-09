import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";
import ICreateUserDto from "../interfaces/ICreateUserDto";

import { userModel } from "../repositories";
import { createCredential } from "./credentialsService";

export const getAllUsersSerive = async (): Promise<User[]> => {
  const allUsers: User[] = await userModel.find({
    relations: { appointments: true },
  });
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user: User | null = await userModel.findOne({
    where: { id },
    relations: ["appointments"], /////////////////OJO
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

export const createUserService = async (createUSerDto: ICreateUserDto) => {
  //Crear usuario
  const newUser: User = await userModel.create(createUSerDto);
  await userModel.save(newUser);

  //creamos credencial
  const newCredential: Credential = await createCredential({
    username: createUSerDto.username,
    password: createUSerDto.password,
  });

  //Asociar newUser con newCredential
  newUser.credential = newCredential;
  await userModel.save(newUser);

  return newUser;
};

export const findUserByCredentialId = async (credentialId: number) => {
  const user: User | null = await userModel.findOneBy({
    credential: { id: credentialId },
  });
  // verificar si no existe usuario
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
