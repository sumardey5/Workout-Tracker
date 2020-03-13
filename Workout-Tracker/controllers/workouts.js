const Workout = require('../model/workout');

module.exports = {
    new: newWorkout,
    create,
    index
}

function index (req, res) {
    Workout.find({}, function(err, workouts) {
        if (err) {
            console.log(err);
        } else {
            res.redner("workouts/index", {exercise: "Exercise", workouts});
        }
    })
}

function newWorkout (req, res) {
    res.render("workouts/new");
}

function create (req, res) {
    const workout = new Workout(req.body);
    workout.save(function(err) {
        if (err) return res.render("workouts/new");
        console.log("Added workout to database: " + workouts);
        res.redirect("/workouts");
    });
}