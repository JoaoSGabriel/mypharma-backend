import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import prisma from "./configs/prisma";
import { productRouter } from "./routes/product.route";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/api/status", (req, res) => res.send("Oh. hey there, I'm OK!"))
  .get("/api/test", async (req, res) => {
    try {
      await prisma.$connect();
      res.send("DB is up and running");
    } catch (error) {
      res.sendStatus(500);
    }
  })
  .use("/api/product", productRouter);

const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(chalk.bold.blue(`Server running in port: ${port}`))
);
