

// document.addEventListener('DOMContentLoaded', () => {
//     const bookNow = document.querySelector('#booknow');
//     const form = document.querySelector('form');
//     const show = document.querySelector('.after-book');
//     const cross = document.querySelector('.fa-solid');

//     bookNow.addEventListener('click', (event) => {
//         // Check if the form is valid
//         if (form.checkValidity()) {
//             event.preventDefault(); // Prevent the default form submission behavior
            
//             // Hide the form and display the "Thank You" message
//             form.style.display = 'none';
//             show.style.display = 'block';
//         }
//     });

//     // Optional: Handle the cross button functionality to close the form
//     cross.addEventListener('click', (event) => {
//         form.style.display = 'block';
//         show.style.display = 'none';
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const afterBook = document.querySelector('.after-book');

    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID');  // Replace with your EmailJS user ID

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Prepare email parameters
        const templateParams = {
            user_name: name,
            user_email: email,
            booking_date: date,
            booking_time: time
        };

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show the thank you message
                form.style.display = 'none';
                afterBook.style.display = 'block';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
});


