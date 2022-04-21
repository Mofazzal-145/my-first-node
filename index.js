const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world with mofu');
})

const users = [
    {id:1, name:'sabana', email:'sabana@gmail.com', phone:'01788456543'},
    {id:2, name:'sabnoor', email:'sabnoor@gmail.com', phone:'01788456543'},
    {id:3, name:'sadia', email:'sadia@gmail.com', phone:'01788456543'},
    {id:4, name:'salma', email:'salma@gmail.com', phone:'01788456543'},
    {id:5, name:'sasur', email:'sasur@gmail.com', phone:'01788456543'},
    {id:6, name:'suchorita', email:'suchorita@gmail.com', phone:'01788456543'},
    {id:7, name:'sabina', email:'sabina@gmail.com', phone:'01788456543'},
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    console.log('query',req.query);
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})



app.get('/fruits', (req, res) => {
    res.send('mango', 'apples', 'oranges');
})

app.get('/fruits/mango/valo', (req, res) => {
    res.send('sour sour mango flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})

