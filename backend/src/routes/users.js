const { Router } = require('express');
const router = Router();

const usersController = require('../controllers/usersController');

router.route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser)

router.route('/:id')
    .delete(usersController.deleteUser)
    
module.exports = router;