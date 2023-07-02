"use_strict";

const submit = document.getElementById("submit-btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Get form input values
  const fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const query = document.getElementById("query").value;

  const subject = `Inquiry by ${fname} ${lname}`;
  const body = `Greetings. ${query}. Please reach out to me via email (${email}) or call me (${phone})`;

  window.open(`mailto:techgenius@email.com?subject=${subject}&body=${body}`);
});
