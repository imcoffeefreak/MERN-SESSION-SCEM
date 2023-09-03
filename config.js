// bVtc51DDFa383Zf2
// mongodb+srv://subramanyarao4:<password>@recipecluster.e4goe7u.mongodb.net/

const mongoose = require("mongoose");

const connect = mongoose
  .connect(
    "mongodb+srv://subramanyarao4:U8xuzx2PnphtkDMI@recipecluster.e4goe7u.mongodb.net/recipe_database"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = connect;