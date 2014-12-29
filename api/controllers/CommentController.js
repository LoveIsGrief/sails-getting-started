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
	},

	destroy: function (req, res) {
		id = req.param('id')
		params = req.allParams()
		Comment.destroy(
			id, // Article to destroy
			function (error,comments) {
				if (comments.length > 0) {
					articleId = comments[0].commentedArticle
					res.redirect('/article/'+articleId)
				}
		})
	}
};

