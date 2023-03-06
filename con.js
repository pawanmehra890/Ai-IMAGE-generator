
const mongoose = require("mongoose");

const db =
  "mongodb+srv://pawanmhr890:nature123@cluster0.j0ddn4z.mongodb.net/loginform?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((ee) => {
    console.log(ee);
  });


module.exports=db