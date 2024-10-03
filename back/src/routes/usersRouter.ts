import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controllers/usersController";
import auth from "../middlewares/auth";


const userRouter = Router();

userRouter.get("/",auth, getUsers);
userRouter.post('/create', createUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
