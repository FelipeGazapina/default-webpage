import { NextRequest, NextResponse } from "next/server";
import UserController from "@/controllers/users/UserController";

export async function POST(req: NextRequest, res: NextResponse) {
  const user = await req.json();
  let userController = new UserController(user);
  const id = await userController.create();
  return NextResponse.json("SEND");
}
