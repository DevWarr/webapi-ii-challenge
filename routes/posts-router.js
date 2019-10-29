const db = require("../data/db");
const router = require("express").Router();

// endpoint: /
router.get("/", (req, res) => {
    db.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({error: "We couldn't get the posts for you. Internal error x_x"}))
});

router.post("/", (req, res) => {
    db.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({error: "We couldn't get the posts for you. Internal error x_x"}))
});


// endpoint: /:id
router.get("/:id", (req, res) => {
    
})

router.put("/:id", (req, res) => {
    
})

router.delete("/:id", (req, res) => {
    
})


// endpoint: /:id/comments
router.get("/:id/comments", (req, res) => {

})

router.post("/:id/comments", (req, res) => {

})

module.exports = router;