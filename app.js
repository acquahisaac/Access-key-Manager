const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const users = [
    {
       email: 'john@example.com',
       password :  '$2b$10$7u0Bw6QcUg0lH3kU8jvZVeyKX4FvH7sPqIyQ6ZmE9eYF7dLmVc1sO'// hashed password for 'password123'                                                                   
    }
];

// serve the login form
app.get('/login', (req, res) => {
    res.render('login'+ '/login.html');
});

app.post('/login', (req, res)=>{
     const { email , password } = req.body;
     
     const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).send({ message: 'User not found' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
          if(result){
             return res.send({message: 'Login successful'});                                                               
          } else{
              return res.status(401).send({message: 'invalid password'});                                                             
          }
    });
});

app.listen(3000, ()=>{
     console.log('Server is running on port 3000');
});