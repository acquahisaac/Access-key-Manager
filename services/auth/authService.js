const logger = require('../../Logger/logger'); // Import the logger
const sequelize = require('../../database');
const User = require('../../models/user'); // path to your User model
const bcrypt = require('bcrypt');


const authWithEmailAndPassword = async (email, password) => {
  try {

    const user = await User.findOne({ where: { email: email } });
    if (user != null) {
      bcrypt.compare(password, user.password, function (err, result) {

        if (result) {
          return true
        } else {
          return false
        }
      });
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