// Scroll to Section on Navigation Link Click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Offset for sticky header
                behavior: 'smooth' // Smooth scroll animation
            });
        }
    });
});


// Button Click Alert
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        alert('Thank you for your interest! This feature is coming soon.');
    });
});

// Dynamic Greeting in the Header
function setDynamicGreeting() {
    const headerElement = document.querySelector('header p'); // Assuming the greeting is in <header><p>
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning! Welcome to our Korean Restaurant.';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon! Experience authentic Korean flavors.';
    } else {
        greeting = 'Good Evening! Enjoy your dinner with us.';
    }

    if (headerElement) {
        headerElement.textContent = greeting; // Set dynamic greeting text
    }
}


// Call the function on page load
setDynamicGreeting();
