const express = require('express');
const bodyParser = require('body-parser');
const mess = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', mess.getAll);
app.post('/api/messages', mess.create);
app.delete('/api/messages/:id', mess.delete);
app.put('/api/messages/:id', mess.update);


app.listen(3001, () => {
    console.log('3001 listening')
})