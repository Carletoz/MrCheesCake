import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum AppointmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: Date;

  @Column()
  time!: string;

  @Column()
  userId!: number;

  @Column({ default: AppointmentStatus.ACTIVE})
  status!: AppointmentStatus;

  @Column()
  description!: string;

  @ManyToOne(() => User, (user) => user.appointments)
  user!: User;
}
