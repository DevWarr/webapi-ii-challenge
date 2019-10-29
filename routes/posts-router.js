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
    if (!Number(req.params.id)) {
        res.status(400).json({errorMessage:"Looks like you didn't give a number!", details:"Where you see ':id' -> That should be a number, like '/23'."});
        return;
    }

    db.findById(req.params.id)
        .then(post => {
            if (!post) {
                req.status(404).json({errorMessage:"We couldn't find a post with that id. Sorry! >.>"});
                return;
            }
            res.status(200).json(post);
        })
        .catch(err => res.status(500).json({error: "We couldn't add the posts into the database. Internal error x_x"}))
});

router.put("/:id", (req, res) => {
    if (!Number(req.params.id)) {
        res.status(400).json({errorMessage:"Looks like you didn't give a number!", details:"Where you see ':id' -> That should be a number, like '/23'."});
        return;
    }
    if (!req.body.title && !req.body.contents) {
        res.status(400).json({errorMessage:"Oops! You need at least a 'title' or 'contents' when you update a post!"});
        return;
    } 

    const changes = {};
    if (req.body.title) {
        changes.title = req.body.title;
    }
    if (req.body.contents) {
        changes.contents = req.body.contents;
    }

    db.update(req.params.id, changes)
        .then(count => {
            if(!count) {
                res.status(404).json({errorMessage:"We couldn't find a post with that id o.o"});
                return;
            }
            db.findById(req.params.id)
                .then(post => res.status(200).json(post));
        })
        .catch(err => res.status(500).json({error: "We couldn't add the posts into the database. Internal error x_x"}))

})

router.delete("/:id", (req, res) => {
    
})


// endpoint: /:id/comments
router.get("/:id/comments", (req, res) => {

})

router.post("/:id/comments", (req, res) => {

})

module.exports = router;