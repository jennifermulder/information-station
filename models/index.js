const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const businessRoutes= require('/business-routes')
// const commentRoutes = require('./comment-routes'); ******NO COMMENTS AT THIS TIME*****
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);
router.use('/businesses', businessRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);
module.exports = router;






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


//exporting object with user model as a property
module.exports = { User, Post, Business };
