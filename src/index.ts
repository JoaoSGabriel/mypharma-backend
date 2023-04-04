import cors from "cors";
import express, { json } from "express";
import { productRouter } from "./routes/product.route";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/api/status", (req, res) => res.send("Oh. hey there, I'm OK!"))
  .use("/api/product", productRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running in port: ${port}`));
