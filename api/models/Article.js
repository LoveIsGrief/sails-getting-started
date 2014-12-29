/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {

		title : {
				type: 'string',
				required: true,
				minLength: 5,
				maxLength: 100
		},

		text : { type: 'text' },

		comments: {
				collection: 'comment',
				via: 'commentedArticle'
		}
	},

	afterDestroy: function (destroyedRecords, callback) {
		destroyedRecords.forEach(function (record) {
			Comment.destroy({ commentedArticle: record.id}, function (error, destroyedComments) {
				console.log("destroyedComments:", destroyedComments)
			})
		})
		callback()
	}

};

