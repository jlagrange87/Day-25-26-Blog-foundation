var React = require("react");

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.comments.on("add", this.commentAdded)
	},
	getInitialState: function(){
		return {
			number: this.props.number
		};
	},
	render: function(){
		var commentElements = this.props.comments.map(function(commentModel){
			return (
				<div key={commentModel.cid}>
					{commentModel.get("text")}
				</div>
			);
		});
		return (
			<div>
			{commentElements}
			</div>
		);
	},
	commentAdded: function(commentModel){
		this.forceUpdate();
	}
});