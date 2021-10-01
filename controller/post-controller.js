const post = require('../models/posts');

const createPost = async(req,res) => {
    console.log(req.body);
    try {
        const posts = await new post(req.body);
        posts.save();
        res.status(200).send("Blog saved successfully.");
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = createPost;