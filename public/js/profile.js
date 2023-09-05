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

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogPost/${id}`, {
      method: 'PUT',
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#update-btn')
  .addEventListener('click', updateButtonHandler);
