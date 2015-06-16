var Backbone = require("backbone");
Backbone.$ = require("jquery");
var BlogPostModel = require("../models/CommentModel.js");

module.exports = Backbone.Collection.extend({
	model: BlogPostModel

})