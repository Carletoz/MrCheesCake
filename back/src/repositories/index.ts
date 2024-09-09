import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointments";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";

export const credentialModel = AppDataSource.getRepository(Credential)
export const userModel = AppDataSource.getRepository(User)
export const appointmentModel = AppDataSource.getRepository(Appointment)