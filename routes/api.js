const router = require("express").Router();
const { db } = require("../models/workout.js");
const workout = require("../models/workout.js");


router.post("/api/workouts", (req, res) => {
    workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;