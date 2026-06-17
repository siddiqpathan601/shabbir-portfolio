import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import handler from "./api/consultation.js";

// Load local environment variables from .env or .env.example fallback
const envPath = fs.existsSync(path.resolve(process.cwd(), ".env"))
  ? path.resolve(process.cwd(), ".env")
  : fs.existsSync(path.resolve(process.cwd(), ".env.example"))
    ? path.resolve(process.cwd(), ".env.example")
    : null;

if (envPath) {
  dotenv.config({ path: envPath });
} else {
  dotenv.config();
}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route matching Vercel's serverless path
app.post("/api/consultation", async (req, res) => {
  // Wrap Express response object to match Vercel handler's expected interface
  const vercelRes = {
    status: (statusCode) => {
      res.status(statusCode);
      return vercelRes;
    },
    json: (data) => {
      res.json(data);
      return vercelRes;
    },
    setHeader: (name, value) => {
      res.setHeader(name, value);
      return vercelRes;
    },
    end: () => {
      res.end();
      return vercelRes;
    }
  };

  try {
    await handler(req, vercelRes);
  } catch (error) {
    console.error("Local dev server error running handler:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fallback GET check
app.get("/api/consultation", (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
});

app.listen(port, () => {
  console.log(`[Local Backend] Express dev server listening on http://localhost:${port}`);
});
