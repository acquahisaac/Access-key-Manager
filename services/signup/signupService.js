const logger = require('../../logger/logger'); // Import the logger
const sequelize = require('../../database');
const User = require('../../models/user'); // path to your User model
const bcrypt = require('bcrypt');


const saveUser = async (email, password , firstName ,lastName ) => {
  try {
   
   
    const user = await User.create({ firstName: firstName 
      , lastName: lastName,email:email,
      email_verified_at:email_verified_at
     });;
    if (user != null) {
       
    } else {

      return false;
    }


  } catch (error) {
    logger.error(error);
  }


}

module.exports = {
  authWithEmailAndPassword,
}