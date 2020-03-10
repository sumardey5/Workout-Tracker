const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    // workOuts: [workoutSchema],
    googleId: String
}, {
   timestamps: true 
});