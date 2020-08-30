//collecting from the user model and exporting user data
const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');
const Business = require('./Business');

// create associations
//user can have many models associated to it
User.hasMany(Post, {
  foreignKey: "user_id",
});

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
