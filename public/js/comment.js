document.addEventListener('DOMContentLoaded', function () {
  // Get form and attach submit event
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const id = commentForm.getAttribute('data-blogPostId');
      const commentTextarea = document.getElementById('comment-textarea');
      const commentText = commentTextarea.value.trim();

      if (commentText) {
        fetch('/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            blogPostId: id, // Use the variable obtained by one of the methods above
            comment: commentText,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Refresh the page to see the new comment or directly add it to the DOM
            location.reload();
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    });
  }

  // Attach click event for delete buttons
});
