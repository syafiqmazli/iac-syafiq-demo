const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        const joke = response.data.value;

        res.send(`
            <html>
                <head>
                    <title>Chuck Norris Joke</title>
                </head>
                <body>
                    <h1>Chuck Norris Joke</h1>
                    <p>${joke}</p>
                </body>
            </html>
        `);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});