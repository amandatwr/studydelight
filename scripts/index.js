// DOM elements
const taskList = document.querySelector('.tasks');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    // account info
    const html = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup tasks
const setupTasks = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const task = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${task.title} </div>
          <div class="collapsible-body white"> ${task.content} </div>
        </li>
      `;
      html += li;
    });
    taskList.innerHTML = html
  } else {
    taskList.innerHTML = '<h5 class="center-align">Login to start</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});