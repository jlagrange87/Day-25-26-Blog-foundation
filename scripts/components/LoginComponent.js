var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div>

				<form onSubmit={this.login}>
					Username: <input ref="email"type="text" placeholder="Email" /><br/>
					Password: <input ref="password" type="password" placeholder="Password" /><br/>
					<button>Log In</button>
				</form>
			</div>
		);
	},
	login: function(e){
		e.preventDefault();
		if(!this.refs.email.getDOMNode().value){
			return "Enter an email address";
		} 
		else if(!this.refs.password.getDOMNode().value){
			return "Enter a password.";
		}
		else if(this.refs.email.getDOMNode().value.indexOf("@") == -1){
			return "Enter a valid email address";
		}
		else {
			console.log("worked")
		}
	}
});