const Workout = require('../model/workout');

module.exports = {
    new: newWorkout
}

function newWorkout (req, res) {
    res.render('workouts/new');
}