const bodyParser = require("body-parser");
const express = require("express");
const db = require("../data/connection");

const router = express.Router();

router.use(bodyParser.json());

router.get("/api/notes", async (req, res) => {
    try {
        const allnotes = await db('notes');

        if (allnotes.length === 0) {
            return res.status(200).json({ message:"No notes found" });
        }
        res.status(200).json(allnotes);
    } 
    catch (error) {
        res.status(500).json({ message: "No notes could be retrieved.", error });
    }
})


module.exports = router;
