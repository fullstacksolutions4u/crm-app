import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRouter from "./routes/leadRoute.js";

dotenv.config({ quiet: true });

const app = express();


app.use(express.json())

app.get("/api/health",(req,res)=>{
  res.send("API is working")
})

app.use("/api",leadRouter);


const serverStart = async () => {
  try {

    await connectDB()
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
  } catch (error) {
    console.error(error)
  }
};

serverStart();
