const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workouts');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/new', workoutCtrl.new);
router.post('/', workoutCtrl.create);
router.get('/', workoutCtrl.index);


module.exports = router;
