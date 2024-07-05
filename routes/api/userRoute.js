const router = require('express').Router();

const { updateThought } = require('../../controller/thoughtController');
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    // updateUser,

} = require('../../controller/userController');

// /api/user

router
.route('/')
.get(getUsers)
.post(createUser);

router
.route('/:userId')
.get(getOneUser)
// .put(updateUser);

module.exports = router;