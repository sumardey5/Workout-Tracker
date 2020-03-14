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
router.get('/:id', workoutCtrl.show);
router.delete('/:id', workoutCtrl.delete);
router.put('/update/:id', workoutCtrl.showUpdate);

module.exports = router;
