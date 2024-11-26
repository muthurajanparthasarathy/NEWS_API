import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';



const port = 3000;
const app = express();


const API_URL = "http://api.mediastack.com/v1/news"
const apikey = 'd4ca817bf21a718239c33c577012aa22';

app.get("/", async (req, res) => {

    const response = await axios.get(API_URL, {
        params: {
            access_key: apikey
        }
    });


    var arr = response.data.data;
    // console.log(arr);
    // console.log(Math.floor(Math.random() * arr.length));

    // arr[Math.floor(Math.random() * arr.length)]

    res.render("index.ejs", { content: JSON.stringify(arr[Math.floor(Math.random() * arr.length)]) })

})
app.listen(port, () => {

    console.log(`The server is listening on ${port}`)

})