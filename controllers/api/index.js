
//allowing API to be scalable
const router = require('express').Router();
//collecting packaged group of API endpoints
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const businessRoutes= require('./business-routes')
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/businesses', businessRoutes)
// router.use('/comments', commentRoutes);

module.exports = router;

//prefixes w/ /users; /posts
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


//packaged up routes to be used in Server.Js
module.exports = router;