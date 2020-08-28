const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const businessRoutes = require('./business-routes.js');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes)

module.exports = router;