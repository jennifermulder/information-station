const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes'); ******NO COMMENTS AT THIS TIME*****

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;


