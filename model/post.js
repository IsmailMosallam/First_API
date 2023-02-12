const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    titile: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: [true, 'Must be write discription']
    },
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('Post', postSchema)