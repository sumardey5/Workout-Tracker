const User = require('../model/user');

module.exports = {
    index
}

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.sort ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, user) {
        if (err) return next (err);
        res.render('users/index', {
            users, //using users and user twice, check here for errors
            user: req.user,
            name: req.query.name,
            sortKey
        });
    });
}