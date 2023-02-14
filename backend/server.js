const express = require("express");
const axios = require("axios"); //https://axios-http.com/docs/instance
const path = require("path"); //for file directory paths https://nodejs.org/api/path.html
const dotenv = require("dotenv"); //api key en https://www.npmjs.com/package/dotenv
const cors = require("cors");
//import mongoose from 'mongoose'; //for database connection
const mongoose = require('mongoose');
const app = express();
const LRU = require('lru-cache');

const port = process.env.PORT || 8000;
dotenv.config();
//to connect database
// mongoose.connect(process.env.MONGO_URI,{userNewUrlParser: true, useUnifiedTopology: true})
// .then(()=> console.log('DB Connected'))//show successful connection
// .catch(err => console.error('DB Error ' + err));

const cache = new LRU({
  ttl: 1000,
})
// TTL = timer by Second

// To connect database using async await server
const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
        newUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('DB Connected')
    console.log('hostname: ${connect.connection.host}');

    }
    catch(err){
        console.log(err);
    }

}
module.exports= connectDB;



app.use(express.json({ limit: "50mb" })); //limit request body, avoid HTTP error
app.use(cors());

//create a virtual path for the static directory https://expressjs.com/en/starter/static-files.html
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

app.get("/api/restaurants/:name/:lat/:long", async (req, res, next) => {
  const { name, lat, long } = req.params;
  const size_ = req.query.size_;

  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    };

    const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}&term=${name}&sort_by=best_match&limit=20`;

    const { data } = await axios.get(url, options);
    console.log(cache);
    cache[size_] = data;
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//module.exports = app;

// Start the server on the defined port.

// app.listen(port, () => {
//   console.log('Server started at port:', port);
// })

const init = async () => {
  try {
    const server = app.listen(port, () =>
      console.log(`listening on port ${port}`)
    );
  } catch (ex) {
    console.log(ex);
  }
};

init();
