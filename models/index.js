const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'Cascade',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogPostId',
  onDelete: 'CASCADE',
});

Comment.hasMany(BlogPost, {
  foreignKey: 'blogPostId',
});

module.exports = { User, BlogPost, Comment };
