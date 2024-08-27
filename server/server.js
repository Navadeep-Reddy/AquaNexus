const express = require('express');
const app = express();
const cors = require('cors') ;

app.get('/api', (req, res) => {
    res.json({fruits : ["apple", "orange", "banana"]});
})

app.listen(3000, () => console.log("Server started on port 3000 "))