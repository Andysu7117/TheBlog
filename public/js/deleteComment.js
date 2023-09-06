const delButtonHandler = async (event) => {
  console.log('Clicked');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.delete-btn')
  .addEventListener('click', delButtonHandler);
