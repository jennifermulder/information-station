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


