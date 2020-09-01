const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const businessRoutes= require('/business-routes')
// const commentRoutes = require('./comment-routes'); ******NO COMMENTS AT THIS TIME*****
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

