const config = require('./config')
const routes = require('./routes/eventsRoute')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://white-moss-0c270380f.3.azurestaticapps.net'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


routes(app);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});


    
