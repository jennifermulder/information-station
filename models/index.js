//collecting from the user model and exporting user data
const User = require("./User");
const Post = require("./Post");
// const Vote = require('./Vote');
const Comment = require('./Comment');
// const Category = require('./Category');
const Business = require('./Business');

// create associations
//user can have many models associated to it
User.hasMany(Post, {
  foreignKey: "user_id",
});

// //to see total number of votes on a post
// Vote.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

// ******CURRENTLY NO COMMENTS********

//a comment can only have one user
// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// //a comment can only have one post
// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id'
// });

//Post only belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//BUSINESS
//user can have many models associated to it
User.hasMany(Business, {
  foreignKey: "user_id",
});

//business can have many posts associated to it
Business.hasMany(Post, {
  foreignKey: "business_id",
});

//Post only belongs to user
Post.belongsTo(Business, {
  foreignKey: "business_id",
  onDelete: "cascade",
});

// //CATEGORY
// //user can have many models associated to it
// Category.hasMany(Business, {
//   foreignKey: "category_id",
// });

Comment.belongsTo(User,{
  foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment,{
  foreignKey: "user_id"
});

Post.hasMany(Comment,{
  foreignKey: "post_id"
})

//exporting object with user model as a property
module.exports = { User, Post, Business, Comment};
