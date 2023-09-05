document.addEventListener('DOMContentLoaded', function () {
  // Create a new bootstrap Modal instance
  const editModal = new bootstrap.Modal(document.getElementById('editModal'));

  // Open the edit modal
  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      const postId = event.target.getAttribute('data-id');
      const title = event.target.getAttribute('data-title');
      const description = event.target.getAttribute('data-description');

      document.getElementById('edit-title').value = title;
      document.getElementById('edit-content').value = description;
      document.getElementById('edit-form').setAttribute('data-id', postId);

      editModal.show();
    });
  });

  // Save changes
  const saveButton = document.getElementById('edit-modal');
  saveButton.addEventListener('submit', async function () {
    const editForm = document.getElementById('edit-form');
    const postId = editForm.getAttribute('data-id');
    const newTitle = document.getElementById('edit-title').value;
    const newContent = document.getElementById('edit-content').value;
    // Make a PUT request to update the post
    try {
      const response = await fetch(`/api/blogPost/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      if (response.ok) {
        // Successfully updated the post
        location.reload(); // Reload the page to see the updated post
      } else {
        alert('Failed to update post');
      }
    } catch (err) {
      console.error('Error:', err);
    }
    editModal.hide();
  });
});
