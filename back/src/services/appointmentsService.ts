import { Appointment } from "../entities/Appointments";
import { User } from "../entities/User";
import IAppointment, { AppointmentStatus } from "../interfaces/IAppointment";
import ICreateAppointmentDto from "../interfaces/ICreateAppointmentDto";
import { appointmentModel, userModel } from "../repositories";

let appointments: IAppointment[] = [];
let appointmentId: number = 1;

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[] = await appointmentModel.find();
  return allAppointments;
};

export const getAppointmentByIdService = async (idTurn: number): Promise<Appointment> => 
  {
  const appointment: Appointment | null = await appointmentModel.findOneBy({
    id: idTurn,
  });
  return appointment
    ? appointment
    : (() => {
        throw new Error("Turno inexistente");
      })();
};

export const createAppointmentService = async (createAppointmentDto: ICreateAppointmentDto): Promise<Appointment> =>
   {
  const user: User | null = await userModel.findOneBy({id: createAppointmentDto.userId});
  if (!user) throw Error("Usuario no encontrado");
  const newAppointment: Appointment = appointmentModel.create(createAppointmentDto);
  await appointmentModel.save(newAppointment);
  newAppointment.user = user;
  await appointmentModel.save(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (
  TurnId: number
): Promise<void> => {
  const appointment:Appointment | null = await
  appointmentModel.findOneBy({
    id: TurnId,
  });
  if(!appointment) throw Error("Could not get an appointment")
    appointment.status = AppointmentStatus.CANCELLED
  await appointmentModel.save(appointment)
};
