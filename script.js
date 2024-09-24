document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;

    alert(`Thank you for your message, ${name}! I will get back to you soon.`);
    
    // Here, you can add code to send form data to your server or email.
    this.reset(); // Reset the form fields after submission
});
