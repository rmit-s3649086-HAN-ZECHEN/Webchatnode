const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({'hello': 'Han'});
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://${host}:${port}');
});