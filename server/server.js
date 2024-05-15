const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
console.log(process.env);

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
