import express from "express";

const app: express.Express = express();
const port: number = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Start on port ${port}`);
});
