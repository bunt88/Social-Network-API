const thoughtRouter = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

thoughtRouter
    .route('/')
    .get(getAllThoughts);

    thoughtRouter
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

    thoughtRouter  
    .route('/:userId')
    .post(createThought);

    thoughtRouter  
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = thoughtRouter;