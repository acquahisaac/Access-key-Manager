
const logger = require('../../logger/logger'); // Import the logger

const authService = require('../../services/auth/authService');

const login = (req, res) => {
res.render('auth/login');
}

const authenticateUser = (req , res)=>{
 const email = req.body.email;
 const password = req.body.password;

 try{
 const isAuthenticated = authService.authWithEmailAndPassword(email,password);
  
 if (isAuthenticated) {
    return res.json([
      { user: 'user' },
      { status: 200 }
    ]);
  } else {
    return res.status(401).json([
      { message: 'Unauthorized' },
      { status: 401 }
    ]);
  }
} catch (error) {
   logger.error(error);                                                                   
 }
}

module.exports={
login,
authenticateUser,                                                                
}