const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'Why MVC is so important',
    description:
      'MVC allows developers tgo maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    userId: 1,
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
