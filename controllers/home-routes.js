const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Business } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',

            // 'post_url',

            'title',
            'post_text',
            'safety_measures',
            'created_at',
        ],
        include: [
            {
                model: Business,
                attributes: ['name',
                    'business_url',
                    'user_id',
                    'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            // pass a single post object into the homepage template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        //redirect to the homepage if a session exists
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',

            // 'post_url',

            'title',
            'post_text',
            'safety_measures',
            'created_at',
        ],
        include: [
            {
                model: Business,
                attributes: [
                    'name',
                    'Business_url',
                    'safety_measures'
                ],
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            // serialize the data
            const post = dbPostData.get({ plain: true });
            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;