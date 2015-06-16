var Backbone = require("backbone");
Backbone.$ = require("jquery");
var CommentModel = require("../models/CommentModel");

module.exports = Backbone.Collection.extend({
	model: CommentModel

})