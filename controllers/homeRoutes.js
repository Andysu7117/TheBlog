const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogPosts = blogPostData.map((project) =>
      project.get({ plain: true })
    );
    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogPost/:id', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment', 'userId'],
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        },
      ],
    });

    const blogPost = blogPostData.get({ plain: true });

    // Add 'isOwnComment' field to each comment
    if (blogPost.comments) {
      for (const comment of blogPost.comments) {
        comment.isOwnComment = req.session.user_id === comment.userId;
      }
    }

    res.render('blogPost', {
      ...blogPost,
      logged_in: req.session.logged_in, // Changed 'logged_in' to 'loggedIn' to match Handlebars
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  try {
    // Fetch posts only from the logged-in user
    const blogPostData = await BlogPost.findAll({
      where: {
        userId: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogPosts = blogPostData.map((post) => post.get({ plain: true }));

    // Fetch the User data for the logged-in user
    const userData = await User.findByPk(req.session.user_id);
    const user = userData.get({ plain: true });
    console.log(blogPosts);
    // Render the profile page
    res.render('profile', {
      blogPosts,
      name: user.name, // Pass the name attribute
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
