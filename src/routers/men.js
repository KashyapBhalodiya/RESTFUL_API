// how to create a router there is basically three condition is there:
// 1. create a router object
// 2. export the router for used in other application
// 3. we need to register the router in other application

const express = require('express');

const router = new express.Router(); // 1.

const MensRanking = require('../models/mens');

// we will handling the post request
router.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

// all the documents we see
router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({});
        res.status(201).send(getMens);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

// only for one document we see
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        res.status(201).send(getMen);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

// update the documents
router.put("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            // we can see the mew updated data
            new: true
        });
        res.status(201).send(getMen);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

// delete the documents
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(getMen);
    }
    catch(e) {
        res.status(400).send(e);
    }
})

module.exports = router;