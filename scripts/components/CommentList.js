var React = require("react");
var CommentForm = require("./CommentForm");
var CommentModel = require("../models/CommentModel.js");

module.exports = React.createClass({
	render: function(){
		var commentElements = this.props.comments.map(function(commentModel){
			return (<div key={commentModel.cid}>{commentModel.get("text")}</div>)
		})
		console.log(commentElements);
		return (
			<div>
			{commentElements}
			</div>
		);
	}
});