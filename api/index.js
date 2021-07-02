const express = require("express");
const app = express();
const port = 4000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoriesRoute = require("./routes/categories")

dotenv.config();
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoriesRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
