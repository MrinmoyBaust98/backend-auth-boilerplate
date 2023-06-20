import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function boilerplateServer() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database Connected Successfully");
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`); //port Comes From (.env)
    });
  } catch (error) {
    console.log("Failed to Connect Database", error);
  }
}

boilerplateServer();
