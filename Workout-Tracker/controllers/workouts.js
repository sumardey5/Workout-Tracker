const Workout = require('../model/workout');

module.exports = {
    new: newWorkout,
    create,
    index,
    show
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

function index (req, res) {
    Workout.find({}, function(err, workouts) {
        if (err) {
            console.log(err);
        } else {
            res.render("workouts/index", {title: "Exercise", workouts});
        }
    })
}

function show (req, res) {
    Workout.findById(req.params.id, function(err, workouts) {
        if (err) {
            console.log(err);
        } else {
            res.render("workouts/index", {title: "Workout Details", workouts});
        }
    });
}