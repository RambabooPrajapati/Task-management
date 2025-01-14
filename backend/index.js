const app = require("./app.js")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbConnection = require("./src/config/db.connect.js");
const PORT = process.env.PORT || 5000;
dotenv.config();

// MongoDB Connection
dbConnection()
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
