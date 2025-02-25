function sendWhatsAppMessage() {
    // Get user input from the form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if the user has entered all required details
    if (!name || !email || !message) {
        alert("Please fill in all fields before sending a message.");
        return;
    }

    // Construct the WhatsApp message
    let whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I have the following inquiry: ${message}`;

    // Encode the message for the URL
    let encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number
    let whatsappNumber = "2348106839313"; // Change to your WhatsApp number

    // Open WhatsApp chat link
    let whatsappURL = `https://wa.me/${2348106839313}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

}