"use_strict";

const submit = document.getElementById("submit-btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // Get form input values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const nationality = document.getElementById("nationality").value;
  const query = document.getElementById("query").value;
  const consentCheckbox = document.getElementById("consent");
  const privacyCheckbox = document.getElementById("privacy");

  // Validate inputs
  if (
    !firstName ||
    !lastName ||
    !gender ||
    !email ||
    !phone ||
    !nationality ||
    !query ||
    !consentCheckbox.checked ||
    !privacyCheckbox.checked
  ) {
    alert(
      "Please fill in all required fields and agree to the terms and privacy policy."
    );
    return;
  }

  // Confirmation
  const confirmStr = `Please check your credentials:
  First Name: ${firstName}
  Last Name: ${lastName}
  Gender: ${gender.value}
  Email: ${email}
  Phone: ${phone}
  Nationality: ${nationality}
  Comment / Message / General Inquiry: ${query}`;
  const response = confirm(confirmStr);

  if (response) {
    // Bundle into a payload
    const formData = {
      firstName,
      lastName,
      gender: gender.value,
      email,
      phone,
      nationality,
      query,
    };

    // Send payload to database

    // Open up mail
    const subject = `Email from ${firstName} ${lastName}`;
    const body = `Greetings. ${query}. Please reach out to me via email (${email}) or call me (${phone})`;

    window.open(
      `mailto:contact@geeksworld.com?subject=${subject}&body=${body}`
    );

    // Reset the form
    document.getElementById("contact-form").reset();
  }
});
