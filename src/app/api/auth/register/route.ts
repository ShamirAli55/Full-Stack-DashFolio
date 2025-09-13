import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    await connect();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User has been created" }),
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Registration Error:", err);

    return new NextResponse(
      JSON.stringify({
        error: "Database Error",
        details: err instanceof Error ? err.message : String(err),
      }),
      { status: 500 }
    );
  }
};
