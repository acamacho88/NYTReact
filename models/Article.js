var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }/* ,
    Note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    } */
})

var Article = mongoose.model("Article", ArticleSchema)

module.exports = Article;