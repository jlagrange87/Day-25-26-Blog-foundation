var React = require("react");
var _ = require("backbone/node_modules/underscore")

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.posts.on("add", this.postAdded)
	},
	getInitialState: function(){
		return {
			number: this.props.number
		};
	},
	render: function(){
		var sortedModels = this.props.posts.sortBy(function(postModel){
			return -1*postModel.get("createdAt").getTime();

		});
		var topNModels = _.first(sortedModels, this.state.number);

		var topNElements = topNModels.map(function(postModel){
			return (
				<div key={postModel.cid}>
					<h2>{postModel.get("title")}</h2>
					<p>{postModel.get("body")}</p><br/>
				</div>
			);
		});
		return (
			<div>
				{topNElements}
 				<input type="text" ref="number" onChange={this.numberChanged} />
			</div>
		)
	},
	postAdded: function(postModel){
		this.forceUpdate();
	},

	numberChanged: function(e){
		console.log("number was changed");
		var newNumber = this.refs.number.getDOMNode().value
		newNumber = parseInt(newNumber);
		this.setState({
			number: newNumber
		})
		console.log(newNumber);
	}
});