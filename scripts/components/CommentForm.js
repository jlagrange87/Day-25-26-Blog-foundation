var React = require("react");
var CommentModel = require("../models/CommentModel.js")

module.exports = React.createClass({
	render: function(){
		return (
			<form onSubmit={this.commentSubmission}>
				<input ref="commentText" type="text" placeholder="Comment..."/>
				<button>Submit Comment</button>
			</form>
		);
	},
	commentSubmission: function(e){
		e.preventDefault();
		var comment = new CommentModel({
			text: this.refs.commentText.getDOMNode().value,
			createdAt: new Date()
		});
		this.refs.commentText.getDOMNode().value =  "";
		console.log(comment.get("text"));
	}
});