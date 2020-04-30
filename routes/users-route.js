const router = require('express').Router();

const Users = require('../models/users-model');

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
        console.log(users)
    })
    .catch(err => {
        res.send(err)
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).json({ message: "User with that ID cannont be found" });
    } else {
        Users.findById(id) 
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({ message: "User infomation could not be retrived", err });
        });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).json({ message: "User with that ID cannont be found" });
    } else {
        Users.remove(id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({ message: "User could not be removed", err });
        });
    }
});

router.get("/:id/guides", (req, res) => {
    const { id } = req.params;

    Users.findGuides(id)
    .then(guides => {
        if (guides.length) {
            res.json(guides);
        } else { 
            res.status(404).json({ message: "Guides could not be found" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get Guides", err });
    });
});

module.exports = router; 