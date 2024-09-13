const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const connectDb = require('./config/db');
const departmentRouter = require('./routes/department');
const employeeRouter = require('./routes/employee');
const databaseSeeder = require('./seeders/databaseSeeder');

const app = express();

app.use(cors());

connectDb(process.env.DB_URL);
const port = process.env.NODE_LOCAL_PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', departmentRouter);
app.use('/api/employees', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  databaseSeeder();
});