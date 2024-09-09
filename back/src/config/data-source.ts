import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointments";
import { Credential } from "../entities/Credentials";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  dropSchema:false,
  logging: false ,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});
