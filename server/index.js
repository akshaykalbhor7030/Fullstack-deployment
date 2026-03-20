import express from "express";
import cors from "cors";
const app = express();

const PORT = 4000;

// app.use() is the buildIn middleware of the express
app.use(express.json());
app.use(
  cors({
    // following below is the list of allowed domains that the backend accepts.
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://187.127.133.1:5173"
    ],
    credentials: true, // this tell the backend that allow the cookies also
  }),
);

// following are the api routes
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from shravan's server",
  });
});


// Following the "0.0.0.0" is used for docker binding.
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is running at port ${PORT}`),
);
