/**
 * WelcomeController
 *
 * @description :: Server-side logic for managing welcomes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `WelcomeController.index()`
   */
  index: function (req, res) {
    return res.view("welcome/index");
  }
};

