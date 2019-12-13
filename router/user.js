const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const userController = require('../controller/user');

// CREATES A NEW USER
router.post('/', userController.create)

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', userController.findAll)

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', userController.findById)

// DELETES A USER FROM THE DATABASE
router.deleteById('/:id', userController.deleteById)

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', userController.update)

module.exports = router;