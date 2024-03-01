const express = require('express');
const cors = require('cors');

const app = express();

const mainRouter = require('./routes/index');

app.use(cors());
app.use(express.json());


app.use("/api/v1", mainRouter);

const Mongodb_URI = "mongodb://localhost:27017/Paytm";
mongoose
    .connect(
        Mongodb_URI,
        // {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(result => {
        app.listen(3001, () => {
            console.log("connected");
        });
    })
    .catch(err => {
        console.log(err);
    })