import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentById, scheduleAppointment } from "../controllers/appointmentsController";

const appointmentsRouter = Router();



appointmentsRouter.get("/", getAllAppointments)
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", scheduleAppointment)
appointmentsRouter.put("/cancel/:TurnId", cancel);

export default appointmentsRouter;