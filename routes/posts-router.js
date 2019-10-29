const db = require("../data/db");
const router = require("express").Router();

router.get("/", (req, res) => {
    db.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({error: "We couldn't get the posts for you. Internal error x_x"}))
})

module.exports = router;