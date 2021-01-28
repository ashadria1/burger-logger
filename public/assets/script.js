const burgerForm = document.querySelector('#burgerForm');
const uneatenList = document.querySelector('#uneaten-list');

// Show submit form to add new burgers...

burgerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const burgerInput = burgerForm.querySelector('#burgerInput');
  const burgerName = burgerInput.value;
  console.log(burgerName);
  fetch('/api/burgers', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ burgerName }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      location.href = '/';
    });
});

// Display uneaten list...

uneatenList.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    fetch(`/api/burgers/${id}`, {
      method: 'PUT'
    }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      location.href = '/';
    });
  }
});