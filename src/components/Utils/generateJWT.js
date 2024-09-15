import { SignJWT } from "jose";

export const generateJWT = async (email, password) => {
    const secretKey = new TextEncoder().encode("secret_key");
    const jwt = await new SignJWT({ userData: { email, password } })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secretKey);

    return jwt;
  };