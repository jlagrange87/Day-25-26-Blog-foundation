var Backbone = require("backbone");
Backbone.$ = require("jquery");

module.exports = Backbone.Model.extend({
	defaults: {
		email:null,
		password:null,
		userId: null,
		createdAt:null
	}
});