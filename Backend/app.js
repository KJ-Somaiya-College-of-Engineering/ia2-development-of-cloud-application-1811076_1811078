const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

const db = require("./models");

const dbConfig = {
  USER:process.env.NOC_DB_USER,
  PASSWORD:process.env.NOC_DB_PASSWORD,
  HOST: process.env.NOC_DB_HOST,
  PORT: process.env.NOC_DB_PORT,
  DBNAME: process.env_NOC_DB_DB,
  OPTIONS: process.env.NOC_DB_OPTIONS
};

db.mongoose
  .connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DBNAME}?${dbConfig.OPTIONS}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch(err => {
    console.error("MongoDB Connection error", err);
    process.exit();
  });

//Routes
require('./routes/auth.routes')(app);
require('./routes/note.routes')(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Notes on cloud!!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});