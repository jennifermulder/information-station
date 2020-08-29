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


