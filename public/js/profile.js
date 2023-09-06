const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogPost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
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
