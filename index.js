/* eslint-disable no-console */

require("dotenv").config();

const app = require("./src/app");

const { PORT } = process.env;

app.listen(PORT, () => console.log(`server is on ${PORT}`));
