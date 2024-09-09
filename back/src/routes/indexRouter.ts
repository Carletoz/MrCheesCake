import { Router } from "express"
import userRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";

const indexRouter = Router();

indexRouter.use("/users", userRouter)
indexRouter.use("/appointments", appointmentsRouter)

export default indexRouter;