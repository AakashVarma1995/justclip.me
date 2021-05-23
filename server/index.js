const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let data = []

// app.get('/', (req,res)=>{
// })
app.use(express.static("build"));



app.post('/api/clip', (req, res) => {
    data.push({
        clipboard:req.body.clipboard,
        data:req.body.data
    })
    res.sendStatus(200);
});

app.get('/api/clip', (req, res) => {
    var result = data.find(obj => {
        return obj.clipboard == req.query.id
    })
    data = data.filter((element)=>{ 
        return element.clipboard != req.query.id; 
    });
    res.send(result)
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
   });



app.listen(8080, () => console.log(`Started server at http://localhost:8080!`)); 