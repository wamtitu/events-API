const config = require('./config')
const routes = require('./routes/eventsRoute')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


routes(app);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});


    
