/**
 * CommentController
 *
 * @description :: Server-side logic for managing Comments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function (req, res) {
    inputComment = req.allParams()
    Comment.create(inputComment, function (error, created) {
        res.redirect('/article/' + inputComment.commentedArticle)
    })
  }
};

