function sendEmail() {
    const serviceID = "service_9yhkk08";
    const templateID = "template_3j2yurl";
  
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      Message: document.getElementById("Message").value,
    };
  
    emailjs
      .send(serviceID, templateID, params)
      .then((response) => {
        alert("Email sent successfully!");
        console.log("SUCCESS:", response.status, response.text);
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
        console.error("FAILED:", error);
      });
  }
  