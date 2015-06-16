var React = require("react");
var CommentList = require("./components/CommentList");
var CommentForm = require("./components/CommentForm");
var BlogPost = require("./components/BlogPost")
var CommentCollection = require("./collections/CommentCollection");
var BlogCollection = require("./collections/BlogCollection");
var blogCategories = ["Serious", "Important", "Mildly Important", "Not Important"];
var blogPTest = new BlogCollection([{title: "Super fun time", body: "LOL", category: "important", createdAt: new Date("2015-06-16T10:04:00")}, {title: "Super fun time X 2", body: "LOL X 2", category: "important", createdAt: new Date("2015-06-15T10:04:00")}])
var comments = new CommentCollection([{text: "hello", createdAt: new Date()}, {text: "something", createdAt: new Date()}])
var RecentPosts = require("./components/RecentPosts");

React.render(
	<div>
		<RecentPosts posts ={blogPTest} number={5} / >
		<BlogPost blogPTest={blogPTest} blogCategories={blogCategories} />
		<CommentList comments={comments} />
		<CommentForm />
	</div>,
	document.getElementById("container")
);