import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // IF DB CONNECTED DONT RECONNECT
  if (connected) {
    console.log("ALREADY CONNECTED");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MONGODB CONNECTED");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
