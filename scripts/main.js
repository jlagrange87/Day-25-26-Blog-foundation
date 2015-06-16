var React = require("react");
var CommentList = require("./components/CommentList");
var CommentForm = require("./components/CommentForm");
var BlogPost = require("./components/BlogPost")
var CommentCollection = require("./collections/CommentCollection");
var BlogCollection = require("./collections/BlogCollection");
var blogCategories = ["Serious", "Important", "Mildly Important", "Not Important"];
var blogPTest = new BlogCollection([{title: "Super fun time", body: "LOL", category: "important"}, {title: "Super fun time X 2", body: "LOL X 2", category: "important"}])
var comments = new CommentCollection([{text: "hello", createdAt: new Date()}, {text: "something", createdAt: new Date()}])
React.render(
	<div>
		<BlogPost blogPTest={blogPTest} blogCategories={blogCategories} />
		<CommentList comments={comments} />
		<CommentForm />
	</div>,
	document.getElementById("container")
);