const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend,

} = require('../../controller/userController');

// /api/users
router
.route('/')
.get(getUsers)
.post(createUser);

router
.route('/:userId')
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;