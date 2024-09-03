

document.addEventListener('DOMContentLoaded', () => {
    const bookNow = document.querySelector('#booknow');
    const form = document.querySelector('form');
    const show = document.querySelector('.after-book');
    const cross = document.querySelector('.fa-solid');

    bookNow.addEventListener('click', (event) => {
        // Check if the form is valid
        if (form.checkValidity()) {
            event.preventDefault(); // Prevent the default form submission behavior
            
            // Hide the form and display the "Thank You" message
            form.style.display = 'none';
            show.style.display = 'block';
        }
    });

    // Optional: Handle the cross button functionality to close the form
    cross.addEventListener('click', (event) => {
        form.style.display = 'block';
        show.style.display = 'none';
    });
});




