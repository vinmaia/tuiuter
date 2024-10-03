import { generateToken } from "../services/jwt-service.js";
import User from "../models/user-model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email, 
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
