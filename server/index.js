import express from "express";
import cors from "cors";
const app = express();

const PORT = 4000;

// app.use() is the buildIn middleware of the express
app.use(express.json());
app.use(cors());

// following are the api routes
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from shravan's server",
  });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
