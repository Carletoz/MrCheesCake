import { Router } from "express";
import userRouter from "./usersRouter";
import productRouter from "./productsRouter";
import orderRouter from "./ordersRouter";

const indexRouter = Router();

indexRouter.get("/", (req, res)=>{
    res.send("Welcome");
});
indexRouter.use("/users", userRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/orders", orderRouter);

export default indexRouter;