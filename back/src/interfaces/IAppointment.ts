export enum AppointmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

interface IAppointment {
  id: number;
  date: string;
  time: number;
  userId: number;
  status: AppointmentStatus;
}

export default IAppointment