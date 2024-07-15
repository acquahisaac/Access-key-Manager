
const logger = require('../../logger/logger'); // Import the logger
const authService = require('../../services/auth/authService');

const login = (req, res) => {

  const action = req.body.id;
  logger.info(`Form submitted with id: ${action}`);

  res.render('auth/login');
}

const authenticateUser = async (req, res) => {
  try {
    const action = req.body.action;
    const { name, email, password } = req.body;
  
    logger.info(`Form submitted with email: ${req.body.email}`);

    if (action === 'signup') {
      logger.info(`Sign Up: Name=${name}, Email=${email}`);
      // Handle signup logic here
      res.send('Signed Up Successfully');
    } else if (action === 'login') {
    
      const isAuthenticated = authService.authWithEmailAndPassword(email, password);
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
    } else {
      res.status(400).send('Invalid action'+action);
    }


  } catch (error) {
    logger.error(error);
  }
}

module.exports = {
  login,
  authenticateUser,
}