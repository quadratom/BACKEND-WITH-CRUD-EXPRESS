const express = require('express');
const mongoose = require('mongoose');
const url =  'mongodb://localhost/Tuition';
mongoose.set('strictQuery', true);
const app = express();

// mongoose.connection.on('error', err => {
//     logError(err);
//   });

  //  MONGOOSE PRESETS...
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', function(){
    console.log('connected...');
});

app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/').
//   catch(error => handleError(error));


const aRouter = require('./routes/a');
app.use('/a',aRouter )

app.listen(9000, () => {
    console.log("server started");
})