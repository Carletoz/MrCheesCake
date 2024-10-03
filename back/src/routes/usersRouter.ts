import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controllers/usersController";


const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post('/create', createUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
