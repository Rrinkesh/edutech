// Mock User List
const users = [
  {
    id: 1,
    name: "Rohan Sharma",
    email: "rohan@gmail.com",
    role: "Frontend Developer"
  },

  {
    id: 2,
    name: "Priya Verma",
    email: "priya@gmail.com",
    role: "UI/UX Designer"
  },

  {
    id: 3,
    name: "Aman Singh",
    email: "aman@gmail.com",
    role: "Backend Developer"
  },

  {
    id: 4,
    name: "Neha Gupta",
    email: "neha@gmail.com",
    role: "Full Stack Developer"
  }
];

// DOM Elements
const loadBtn = document.getElementById("loadBtn");

const userContainer =
  document.getElementById("userContainer");

// Click Event
loadBtn.addEventListener("click", () => {

  // clear previous data
  userContainer.innerHTML = "";

  // loop through users
  users.forEach((user) => {

    // create div
    const card = document.createElement("div");

    card.classList.add("user-card");

    // dynamic HTML
    card.innerHTML = `
      <h3>${user.name}</h3>

      <p>
        <strong>Email:</strong>
        ${user.email}
      </p>

      <p>
        <strong>Role:</strong>
        ${user.role}
      </p>
    `;

    // append to container
    userContainer.appendChild(card);
  });

});