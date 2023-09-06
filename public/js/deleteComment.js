const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete post');
    }
  }
};

document.addEventListener('DOMContentLoaded', (event) => {
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', delButtonHandler);
  });
});
