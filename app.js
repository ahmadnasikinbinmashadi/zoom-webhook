const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config');
const path = require('path');

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send("AYo Power your app with Webhooks!");
});

// Set up a webhook listener for your Webhook Event - in this case we are listening to Webinar Ended event but you can add any events of your choice.
app.post('/', bodyParser.raw({ type: 'application/json' }), (req, res) => {

    let event;

    try {
        event = JSON.parse(req.body);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Check to see if you received the event or not.
    if (req.headers.authorization === config.VERIFICATION_TOKEN) {
        res.status(200);

        console.log("Meeting Ended Webhook Recieved.") 

        res.send();

    } else {
        res.status(403).end('Access forbidden');
        console.log("Invalid Post Request.")
    }
});



app.listen(3000, () => {
    console.log('Server is up and running on port 3000.')
})
