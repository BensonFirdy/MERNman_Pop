const mongoose = require("mongoose");
const db_name = "author_db";

mongoose
  .connect(
    `mongodb+srv://root:root@clustermay.4gty8.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
