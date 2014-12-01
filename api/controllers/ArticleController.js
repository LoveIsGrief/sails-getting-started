/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create: function (req, res) {
        Article.create(req.allParams(), function (error,created) {
            if (error) {
                return res.serverError(err.toString())
            }else{
                return res.redirect('/article/' + created.id)
            }
        })
    }
};

