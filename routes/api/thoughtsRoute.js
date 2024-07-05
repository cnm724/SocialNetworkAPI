const router = require('express').Router();

const{
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controller/thoughtController.js')

router
.route('/')
.get(getThoughts)
.post(createThought);

router
.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought);

module.exports = router;