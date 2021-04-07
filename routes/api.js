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

router.put("/api/workouts/:id", ({ body, params }, res ) => {
    workout.findByIdAndUpdate(
        params.id, { $push: { exercises: body } }, { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    workout.find({})
    .sort ({
        _id: -1
    })

    .limit (7)

    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
    workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;