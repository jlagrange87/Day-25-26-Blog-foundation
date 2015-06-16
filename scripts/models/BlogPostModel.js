var Backbone = require("backbone");
Backbone.$ = require("jquery");

module.exports = Backbone.Model.extend({
	defaults: {
		title: null,
		body: null,
		category: null,
		username:null,
		createdAt:null
	},

	validate: function(attr) {
		if(!attr.title) {
			return "Enter a post title."
		}
		else if(!attr.body) {
			return "Enter a post body."
		}
		else if(!attr.category) {
			return "Enter a post category."
		}
		else if(!attr.username) {
			return "That username / password combination doesn't exist."
		}
		return false;
	}
});