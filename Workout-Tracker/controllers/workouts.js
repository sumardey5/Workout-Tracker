const Workout = require('../model/workout');

module.exports = {
    new: newWorkout,
    create,
    index,
    show,
    delete: deleteThis,
    showUpdate,
    update
}

function newWorkout (req, res) {
    res.render("workouts/new");
}

function create (req, res) {
    const workout = new Workout(req.body);
    workout.save(function(err) {
        if (err) {console.log(err);return res.render("workouts/new");}
        console.log("Added workout to database: " + workout);
        res.redirect("/workouts");
    });
}

function index (req, res) {
    Workout.find({}, function(err, workout) {
        if (err) {
            console.log(err);
        } else {
            res.render("workouts/index", {workout});
        }
    });
}

function show (req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        if (err) {
            console.log(err);
        } else {
            res.render("workouts/show", {workout});
        }
    });
}

function deleteThis (req, res) {
    Workout.findByIdAndDelete(req.params.id, function(err, workout) {
        if (err) {
            console.log(err);
        } else {
            console.log('deleting: ' + workout);
        }
        res.redirect('/workouts');
    })
}

function showUpdate (req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        if (err) {
            console.log(err);
        } else {
            res.render('workouts/update', {title: 'Update Workout', workout});
        }
    });
}

function update (req, res) {
    Workout.findByIdAndUpdate(req.params.id,
        {
            exercise: req.body.exercise,
            exerciseType: req.body.exerciseType,
            sets: req.body.sets,
            repetitions: req.body.repetitions,
            startingWeight: req.body.startingWeight,
            targetWeight: req.body.targetWeight
        },
        {new: true},
        function (err, response) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/workouts/');
            }
        });
}