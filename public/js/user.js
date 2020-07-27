/* eslint-disable linebreak-style */
const userName = document.querySelector(".userName");
// used handlebars to route user directly.  none of this is needed from usingreq.body.email and req.body.password. used and action form in login.handlebars.


// Get current User and display email information.
// Here you can display any User information coming from the server.
// fetch("/auth/user")
//   .then(response => response.json())
//   .then(data => {
//     userName.textContent = data.email;
//   })
//   .catch(err => console.log(err));