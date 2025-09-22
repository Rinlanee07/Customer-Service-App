import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Mock user: email = admin, password = 123456
  if (email === "admin" && password === "123456") {
    // สร้าง token mock
    const token = jwt.sign(
      { email, role: "admin", exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      "secret"
    );
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
}