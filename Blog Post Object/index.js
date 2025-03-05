// In original exercise the instructor instructs us to use a object literal to initialize the blogpost object
// but we will use the constructor function to better understand how objects works in constructor

function BlogPostObject(title, body, author, views, comments, islive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.islive = islive;
}
function Comments(commentAuthor, commentBody) {
  this.commentAuthor = commentAuthor;
  this.commentBody = commentBody;
}

let comments = new Comments("Khaizer", "Cool");
let newPost = new BlogPostObject(
  "Javascript Exercise",
  "BlogPostObject",
  "Steven Agang",
  2000,
  comments,
  true
);

console.log(newPost);
