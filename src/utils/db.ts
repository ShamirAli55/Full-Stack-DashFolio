import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO!);
  } catch {
    throw new Error("Connection failed!");
  }
};

export default connect;
