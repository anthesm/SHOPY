const mongoose = require("mongoose");

// MongoDB Atlas connection URI
const MONGODB_URI =
  "mongodb+srv://akganthesm:Veetel992@commentdatabase.usjxbwa.mongodb.net/?retryWrites=true&w=majority&appName=CommentDatabase";

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection status
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});
