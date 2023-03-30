import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import prisma from "./configs/prisma";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/status", (req, res) => res.send("Oh. hey there, I'm OK!"))
  .get("/test", async (req, res) => {
    try {
      await prisma.product.create({
        data: {
          name: "Banana",
          price: 13.0,
        },
      });

      res.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  });

const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(chalk.bold.blue(`Server running in port: ${port}`))
);
