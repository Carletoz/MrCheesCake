import { Request, Response } from "express";
import ICreateAppointmentDto from "../interfaces/ICreateAppointmentDto";
import {
  cancelAppointmentService,
  createAppointmentService,
  getAllAppointmentsService,
  getAppointmentByIdService,
} from "../services/appointmentsService";
import { Appointment } from "../entities/Appointments";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    res.status(200).json({
      message: `User details`,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  try {
    const createAppointmentDto: ICreateAppointmentDto = req.body;
    const newAppointment:Appointment = await createAppointmentService(createAppointmentDto);
    res.status(201).json({
      message: "Appointment created",
      data: newAppointment,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const cancel = async (req: Request<{TurnId: string}>, res: Response) => {
  try {
    const { TurnId } = req.params;
    const cancelledAppointment = await cancelAppointmentService(Number(TurnId));
    res.status(200).json({
      message: "Appointment cancelled",
      data: cancelledAppointment,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message }); 
  }
};
