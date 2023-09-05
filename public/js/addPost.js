document.addEventListener('DOMContentLoaded', () => {
  const createPostButton = document.getElementById('create-post-btn');

  createPostButton.addEventListener('click', newFormHandler);
});

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogPost`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};
