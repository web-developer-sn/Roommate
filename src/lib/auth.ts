import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
  email: string;
}

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;

    return decoded;
  } catch {
    throw new Error("Invalid Token");
  }
}