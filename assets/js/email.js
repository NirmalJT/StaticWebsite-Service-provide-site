function sendEmail(event) {
  event.preventDefault();
  const serviceID = "service_9yhkk08";
  const adminTemplateID = "template_3j2yurl";
  const userTemplateID = "template_nqvvdoo";

  // Get values from the form inputs
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // Validate inputs
  if (!params.name || !params.email || !params.phone || !params.message) {
    alert("Please fill in all the fields.");
    return;
  }

  // Show the loading indicator
  const loadingIndicator = document.getElementById("loadingIndicator");
  const submitBTN = document.getElementById("submitBTN");
  loadingIndicator.style.display = "block";
  submitBTN.style.display = "none"; // Disable the button to prevent multiple submissions

  // Function to send emails
  const sendEmailTo = (templateID, specificParams, recipient) => {
    return emailjs
      .send(serviceID, templateID, specificParams)
      .then((response) => {
        console.log(`SUCCESS (${recipient}):`, response.status, response.text);
      })
      .catch((error) => {
        console.error(`FAILED (${recipient}):`, error);
        throw new Error(
          `Failed to send email to ${recipient}. Please try again.`
        );
      });
  };

  // Create specific params for admin and user emails
  const adminParams = { ...params }; // Admin gets all the data
  const userParams = {
    name: params.name,
    email: params.email,
    phone: params.phone,
    message: params.message, // Include the user's submitted message
  };

  // Send emails to admin and user
  Promise.all([
    sendEmailTo(adminTemplateID, adminParams, "Admin"),
    sendEmailTo(userTemplateID, userParams, "User"),
  ])
    .then(() => {
      alert("Emails sent successfully!");
      document.getElementById("contactForm").reset(); // Clear the form
    })
    .catch((error) => {
      alert(error.message);
    })
    .finally(() => {
      // Hide the loading indicator and re-enable the button
      loadingIndicator.style.display = "none";
      submitBTN.style.display = "block";
    });
}
