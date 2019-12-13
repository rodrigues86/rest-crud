const User = require('./User');

// CREATES A NEW USER
const create = (req, res) => {
    User.create({
            name : req.body.name,
            lastName : req.body.lastName,
            phones : req.body.phones
        }, (err, user) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
};
exports.create = create;

// RETURNS ALL THE USERS IN THE DATABASE
const findAll = (req, res) => {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
};
exports.findAll = findAll;

// GETS A SINGLE USER FROM THE DATABASE
const findById = (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
};
exports.findById = findById;

// DELETES A USER FROM THE DATABASE
const deleteById = (req, res) => {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
};
exports.deleteById = deleteById;

// UPDATES A SINGLE USER IN THE DATABASE
const update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
};
exports.update = update;