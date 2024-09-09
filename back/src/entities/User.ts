import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credentials";
import { Appointment } from "./Appointments";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({unique:true})
  email!: string;

  @Column()
  birthdate!: string;

  @Column({unique:true})
  nDni!: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credential!: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}

//* User   1:1 Credential
//* Credential 1:1  User

//* User 1:M Appointment
//* Appointment M:1  User
