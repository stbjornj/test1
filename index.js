import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb',
    {useNewUrlParser: true});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express is now running on ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on ${PORT}`)
);


