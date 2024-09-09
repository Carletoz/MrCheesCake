
import { Credential } from "../entities/Credentials";
import { credentialModel } from "../repositories";
import IValidateCredentialDto from "../interfaces/IValidateCredentialDto";
import ICreateCredentialDto from "../interfaces/ICreateCredentialDto";


export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
): Promise<Credential> => {
  //*Verificar que no exista el email...
  // Crear credencial
  const newCredential: Credential = await credentialModel.create(
    createCredentialDto
  );
  //* guardar en BBDD
  await credentialModel.save(newCredential);
  return newCredential;
};

export const validateCredentials = async (
  validateCredential: IValidateCredentialDto
): Promise<Credential> => {
  const { username, password } = validateCredential;
  const foundCredential: Credential | null = await credentialModel.findOneBy({
    username: username
  });
  if (!foundCredential) throw Error("Credenciales incorrectas");
  if (password !== foundCredential.password)
    throw Error("Credenciales incorrectas");
  return foundCredential;
    };

// const createCredentialService = async(createCredentialDto: ICreateUserDto)
