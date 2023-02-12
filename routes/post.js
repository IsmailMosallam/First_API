const express = require('express')
const router = express.Router();
const Post = require('../model/post')


router.get('/', async(req, res) => {
    const _ = await Post.find().limit(3)
    try {
        res.json(_)
    } catch (err) {
        res.status(404).send(`ERROR :${err}`)
    }

})

router.post('/', async(req, res) => {

        const post = await Post.create({
            titile: req.body.titile,
            discription: req.body.discription
        })
        try {
            res.json(post)

        } catch (err) {
            res.status(404).send(`ERROR : err`)
        }


    })
    // spesific
router.get('/:postID', async(req, res) => {
        try {
            const post = await Post.findById(req.params.postID)
            res.json(post);
        } catch (err) {
            res.json({ ERROR: err })
        }
    })
    // Delet router
router.delete('/:postID', async(req, res) => {
        try {
            const remove = await Post.remove({ _id: req.params.postID })
            res.json(remove)
        } catch (err) {
            res.json({ ERROR: err })
        }
    })
    // updet rout
router.patch('/:postID', async(req, res) => {
    try {

        const updat = await Post.updateOne({ _id: req.params.postID }, { $set: { titile: req.body.titile } })
        res.json(updat)
    } catch (err) {
        res.json({ ERROR: err })
    }
})
module.exports = router;