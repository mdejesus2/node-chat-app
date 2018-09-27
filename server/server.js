const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});




module.exports = {app}