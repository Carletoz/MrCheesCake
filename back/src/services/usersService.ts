import ICreateUserDto from "../dto/createUserDto";
import IUser from "../interfaces/IUsers";

let users: IUser[] = [];

let id = 1;

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const createUserService = async (
  user: ICreateUserDto
): Promise<IUser> => {
  const newUser = {
    id,
    name: user.name,
    email: user.email,
    password: user.password,
    phone: user.phone,
    address: user.address,
    image: user.image,
  };

  users.push(newUser);
  id++;
  return newUser;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user) => user.id !== id);
};
