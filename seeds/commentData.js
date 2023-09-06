const Comment = require('../models/Comment');

const commentData = [
  {
    comment: 'Great Post!',
    userId: 1,
    blogPostId: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
