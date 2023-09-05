module.exports = {
  userPost: (blogid, userId) => {
    if (blogid === userId) {
      return true;
    } else {
      return false;
    }
  },
};
