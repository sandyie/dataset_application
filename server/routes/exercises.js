import express from 'express';
import Exercise from '../models/exercise.js';

const exercisesRouter = express.Router();


exercisesRouter.route('/').get((req, res) => {
    Exercise.find().limit(300)
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
});


export default exercisesRouter;