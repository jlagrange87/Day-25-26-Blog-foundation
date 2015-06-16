var React = require("react");
var CommentList = require("./components/CommentList");
var CommentForm = require("./components/CommentForm");
var BlogPost = require("./components/BlogPost")
var CommentCollection = require("./collections/CommentCollection");
var BlogCollection = require("./collections/BlogCollection");
var blogPTest = new BlogCollection([{title: "Super fun time", body: "LOL", category: "important", createdAt: new Date("2015-06-16T10:04:00")}, {title: "Super fun time X 2", body: "LOL X 2", category: "important", createdAt: new Date("2015-06-15T10:04:00")}])
var comments = new CommentCollection([{text: "hello", createdAt: new Date()}, {text: "something", createdAt: new Date()}])
var RecentPosts = require("./components/RecentPosts");

var blogCategories = ["React", "JavaScript", "HTML", "CSS"];
function newPost(postModel){
	blogPTest.add(postModel);
}
function newComment(commentModel){
	comments.add(commentModel);
}

React.render(
	<div>
		<RecentPosts posts={blogPTest} number={5} />
		<BlogPost blogCategories={blogCategories} newPost={newPost} />
		<CommentList comments={comments} />
		<CommentForm newComment={newComment}/>
	</div>,
	document.getElementById("container")
);