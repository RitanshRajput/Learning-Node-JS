const express = require('express');

// importing the http route handler functions in here
const userController = require('../controllers/userController');

// USER ROUTER
const router = express.Router();

// USER ROUTE
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// export the tourRouter and them we will import it wherever we want to use it
module.exports = router;
