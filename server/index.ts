import express, { Express, Request, Response } from "express";
import {Schema, model, connect} from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port: any = process.env.PORT;
const uri: any = process.env.URI;

connect(uri)

// TODO configure mongodb  
// TODO configure routing
// TODO configure kubernetes

interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
})

const User = model<IUser>('User', userSchema)

async function run() {
  await connect(uri)

  const user = new User({
    name: 'Bill Mer',
    email: 'billmer@gmail.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png',

  })

  await user.save()

  console.log(user.email)
}

// run().catch(err => console.log(err))



app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port} or is it`);
});

