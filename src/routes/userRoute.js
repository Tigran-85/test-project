const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { validations } = require('../validators/usersValidators');

router
  .route('/')
  .get(getAllUsers)
  .post(validations(), createUser);

router
  .route('/:id')
  .get(getUser)
  .patch(validations(), updateUser)
  .delete(deleteUser);

module.exports = router;
