const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: String,
  userId: {
    type: Schema.Types.ObjectId,
     ref: 'User'
    }

})
const PostSchema = new Schema({
  title: String,
  content: String,
  zipcode: Number,
  comments: [CommentSchema],
  userId: {
    type: Schema.Types.ObjectId,
     ref: 'User'
    }
});
module.exports = mongoose.model("Post", PostSchema);
