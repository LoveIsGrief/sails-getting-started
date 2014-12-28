/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create: function (req, res) {
        Article.create(req.allParams(), function (error,created) {
            // Error object doc: https://github.com/balderdashy/waterline/blob/master/lib/waterline/error/WLError.js
            if (error) {
                res.view( 'article/new', {
                    'error': error
                })
            }else{
                res.redirect('/article/' + created.id)
            }
        })
    },

    show: function (req, res) {
        id = req.param('id')
        Article.findOne({ "id": id}).populateAll().exec(function(error, article){
            // Model.find doesn't consider attempting to find a non-existent object
            // a problem and simply returns no error and undefined
            if (error || article == undefined) {
                res.notFound('Article with id: ' + id)
            } else{
                res.view('article/show', {
                    "article": article
                })
            }
        })
    },

    index: function (req, res) {
        Article.find({}, function (error, articles) {
            if (error) {
                res.serverError(error.toString())
                return
            }
            res.view( 'article/index', {
                'articles': articles
            })
        })
    },

    edit: function (req, res) {
        id = req.param('id')
        Article.findOne({ "id": id}, function(error, article){
            // Model.find doesn't consider attempting to find a non-existent object
            // a problem and simply returns no error and undefined
            if (error || article == undefined) {
                res.notFound('Article with id: ' + id)
            } else{
                res.view('article/edit', {
                    "article": article
                })
            }
        })
    },

    update: function (req, res) {
        id = req.param('id')
        params = req.allParams()
        Article.update(
            id, // Article to update
            params , // Update attributes
            function (error,articles) {
                // Error object doc: https://github.com/balderdashy/waterline/blob/master/lib/waterline/error/WLError.js
                if (error) {
                    res.view( 'article/edit/', {
                        'error': error,
                        'article': params
                    })
                }else{
                    article = articles[0]
                    res.redirect('/article/' + article.id)
                }
            }
        )
    },

    destroy: function (req, res) {
        id = req.param('id')
        params = req.allParams()
        Article.destroy(
            id, // Article to destroy
            function (error,articles) {
                res.redirect('/articles/')
            }
        )
    }
};

