function sendEmail() {
  const serviceID = "service_9yhkk08";
  const adminTemplateID = "template_3j2yurl";
  const userTemplateID = "template_nqvvdoo";

  // Get values from the form inputs
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    Message: document.getElementById("Message").value,
  };

  // Validate inputs
  if (!params.name || !params.email || !params.phone || !params.Message) {
    alert("Please fill in all the fields.");
    return; // Stop the function execution if any field is empty
  }

  // Function to send emails
  const sendEmailTo = (templateID, recipient) => {
    return emailjs
      .send(serviceID, templateID, params)
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

  // Send emails to admin and user
  Promise.all([
    sendEmailTo(adminTemplateID, "Admin"),
    sendEmailTo(userTemplateID, "User"),
  ])
    .then(() => {
      alert("Emails sent successfully!");
    })
    .catch((error) => {
      alert(error.message);
    });
}
