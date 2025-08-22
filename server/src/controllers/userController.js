import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";

export const RegisterUser = async (req, res, next) => {
  try {
    // console.log(" inside controller");
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      console.log("all feilds are required");
      const error = new Error("All Feilds must be Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("user already exists");
      error.statusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "registration Successfull" });
  } catch (error) {
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Feilds must be Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("user dosen't exists");
      error.statusCode = 401;
      return next(error);
    }
    const isVerified = await bcrypt.compare(password, existingUser.password);

    if (!isVerified) {
      const error = new Error("Invalid Username or password");
      error.statusCode = 401;
      return next(error);
    }

    const token = genAuthToken(existingUser);

    res
      .status(200)
      .cookie("IDCard", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "none",
        strict: false,
      })
      .json({
        message: `welcome back ${existingUser.fullName}`,
        data: existingUser,
      });
  } catch (error) {
    next(error);
  }
};
