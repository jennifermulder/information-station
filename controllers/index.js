
const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js'); ****NO DASHBOARD ROUTES CURRENTLY

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes); ****NO DASHBOARD ROUTES CURRENTLY

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;