var React = require("react");
var CommentCollection = require("../scripts/collections/CommentCollection.js");
var recentComments = new CommentCollection();

module.exports = React.createClass({
	getComments: function(){
		return (
			recentComments.length
			);
	},
	render: function(){
		if(recentComments.length > 0){
			return (
				<div>
					{this.state};
				</div>
			);
		}
		else {
			return (
				<div>
					"There are no blog posts yet.";
				</div>
			);
		}
	}
});