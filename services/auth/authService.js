const logger = require('../../logger/logger'); // Import the logger


const authWithEmailAndPassword = (email,password) => {
    try {
       isAuthenticated = false;

 //use email n password to check from db,if true 
 //isAuthenticated = false;

  if (isAuthenticated) {
    return  true; 
  } else {
    return false 
  }                                                                        
    } catch (error) {
    logger.error(error);                                                                    
    }

                                                                            
}

module.exports={
    authWithEmailAndPassword,                                                                         
}