const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    console.log('Delete route hit');
    console.log('req.params.id:', req.params.id);
    console.log('req.session.user_id:', req.session.user_id);
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Attempt to update the blog post with the given ID
    const updatedBlogPost = await BlogPost.update(
      {
        title: req.body.title,
        description: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          userId: req.session.user_id,
        },
      }
    );

    // Check if a record was updated
    if (updatedBlogPost[0] === 0) {
      return res
        .status(404)
        .json({ message: 'No post found with this id or unauthorized' });
    }

    res.status(200).json(updatedBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
