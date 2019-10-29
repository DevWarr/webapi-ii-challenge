const db = require("../data/db");
const router = require("express").Router();

// endpoint: /
router.get("/", (req, res) => {
    db.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({error: "We couldn't get the posts for you. Internal error x_x"}))
});

router.post("/", (req, res) => {

    if (!req.body.title || !req.body.contents) {
        res.status(400).json({errorMessage:"Oops! You need both a 'title' and 'contents' for a new post!"});
        return;
    } 

    const newPost = {
        title: req.body.title,
        contents: req.body.contents
    };

    db.insert(newPost)
        .then(idObj => {
            db.findById(idObj.id)
                .then(post => res.status(201).json(post));
        })
        .catch(err => res.status(500).json({error: "We couldn't add the posts into the database. Internal error x_x"}))
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