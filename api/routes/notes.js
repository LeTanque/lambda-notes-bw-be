const express = require("express");
const db = require("../data/connection");
const errorObject = require("../middleware/errorHandling");
const errorBackup = require("../middleware/errorHandling");
const router = express.Router();

router.get("/all", async (req, res) => {
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

router.get("/:id", async (req, res) => {
    if (!req.params.id) return res.status(400).json({ message: "Please include an id of note" })

    try {
        const specificNote = await db('notes').where("id", req.params.id);

        if (specificNote.length === 0) {
            return res.status(200).json({ message: "No notes found" });
        }
        res.status(200).json(specificNote);
    } 
    catch (error) {
        res.status(500).json({ message: "No notes could be retrieved.", error });
    }
})

router.post("/create", async (req, res) => {
    if (!req.body.title || !req.body.textBody) return res.status(400).json({ message: "Please include a title and body" })

    try {
        const post = await db("notes").insert(req.body);

        return res.status(200).json({ message: "Post created", post }); 
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
})

router.put("/edit/:id", async (req, res) => {
    if (!req.body.title || !req.body.textBody || !req.params.id) return res.status(400).json({ message: "Please include a title and body" })

    try {
        const update = await db("notes").where("id", req.params.id)
        .update({
            title: req.body.title,
            textBody: req.body.textBody
        });

        return res.status(200).json({ message: "Note updated!", update }); 
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
})


router.delete("/delete/:id", async (req, res) => {
    if (!req.params.id) return res.status(400).json({ message: "Please include an id of note to delete" })

    try {
        const deleted = await db("notes").where("id", req.params.id).del();
        // .returning([ "id" ])
        
        return res.status(200).json({ message: "Note deleted!", deleted }); 
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
})


module.exports = router;
