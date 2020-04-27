const express = require('express');

const Guides = require('../models/guides-model');

const router = express.Router();

// Global GET

router.get('/', (req, res) => {
    Guides.find()
    .then(guides => {
        res.json(guides);
    })
    .catch(err => {
        res.status(500),json({ message: 'failed to get guides', err });
    });
});

// GET by ID

router.get('/:id', (req, res) => {
    Guides.findById(req.params.id)
    .then(guide => {
        if (guide) {
            res.json(guide);
        } else {
            res.status(404).json({ message: "Could not find a guide by that ID" });
        }
    })
    .catch(err => {
        res.status(500),json({ message: 'failed to get guides', err });
    });
});

// POST

router.post('/', (req, res) => {
    guideData = req.body;

    Guides.add(guideData)
    .then(guide => {
        res.status(201).json(guide);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new Guide', err });
    });
});

// PUT by ID

router.put('/:id', (req, res) => {
    Guides.update(req.params.id, req.body)
    .then(update => {
        res.status(201).json({ message: "Guide Updated!" });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update Guide', err });
    });
});

// DELETE by ID

router.delete('/:id', (req, res) => {
    Guides.remove(req.params.id)
    .then(deleted => {
        res.status(200).json({ message: 'Guide Deleted' })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete Guide', err });
    });
});

module.exports = router;