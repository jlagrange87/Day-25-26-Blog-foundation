var React = require("react");
var _ = require("backbone/node_modules/underscore")

module.exports = React.createClass({
	render: function(){
		var sortedModels = this.props.posts.sortBy(function(postModel){
			return -1*postModel.get("createdAt").getTime();

		});
		var topNModels = _.first(sortedModels, this.props.number);

		var topNElements = topNModels.map(function(postModel){
			return (
				<div key={postModel.cid}>
					<h2>{postModel.get("title")}</h2>
					<p>{postModel.get("body")}</p><br/>
				</div>
			);
		});

		console.log(topNElements);

		var strongEls = React.createElement("strong", {}, "This is bold")
		return (
			<div>
				blog posts go here
				{topNElements}
			</div>
			)
	}
});