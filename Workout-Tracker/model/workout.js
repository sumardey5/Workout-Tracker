const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise: {type: String, required: true},
    exerciseType: {type: String, enum: ['Arms', 'Legs', 'Back', 'Abdominals', 'Chest', 'Shoulders']},
    sets: {type: Number},
    repetitions: {type: Number},
    startingWeight: {type: Number}
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);