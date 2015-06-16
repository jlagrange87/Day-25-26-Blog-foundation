var React = require("react");
var BlogPostModel = require("../models/BlogPostModel.js");

module.exports = React.createClass({
	render: function(){
		var categories = this.props.blogCategories.map(function(category){
			return(<option>{category}</option>)
		})
		return (
			<div>
				<form onSubmit={this.submitPost}>
					<input ref="titleB" type="text" placeholder="Title"/><br/>
					<textarea ref="bodyB"placeholder="Post...."></textarea><br/>
					<select ref="categoryB">{categories}</select><br/>
					<button>Submit</button>
				</form>
			</div>
		);
	},
	submitPost: function(e){
		e.preventDefault();
		var blogPost = new BlogModel({
			title: this.refs.titleB.getDOMNode().value,
			text: this.refs.bodyB.getDOMNode().value,
			category: this.refs.categoryB.getDOMNode().value,
			username: null,
			createdAt: new Date()
		});
		if(!blogPost.isValid()) {
			console.log(blogPost.validationError);
		}
		else {
			console.log(blogPost);
		}
	}
});