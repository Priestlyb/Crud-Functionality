const express = require ("express");
const app = express();
const dotenv = require ("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const categoryRoute = require("./routes/categories.js");
const multer = require("multer");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err => console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen ("5000", () => {
    console.log("backend is running")
})
