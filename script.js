
// //---------------------------------------------------------
// // Function to show the corresponding form based on the button clicked
// function showForm(formType) {
//     const signupForm = document.getElementById('signup-form');
//     const signinForm = document.getElementById('signin-form');

//     if (formType === 'signup') {
//         signupForm.classList.add('active');
//         signinForm.classList.remove('active');
//     } else if (formType === 'signin') {
//         signinForm.classList.add('active');
//         signupForm.classList.remove('active');
//     }
// }

// // Attach event listeners to the buttons
// document.getElementById('signup-button').addEventListener('click', function() {
//     showForm('signup');
// });

// document.getElementById('signin-button').addEventListener('click', function() {
//     showForm('signin');
// });

// // Function to validate password and confirm password on Sign Up form
// function validateSignup(event) {
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (password !== confirmPassword) {
//         event.preventDefault(); // Prevent form submission
//         alert('Passwords do not match.');
//     } 
//     // If passwords match, form submission will proceed to handleSignup function
// }

// // Function to handle Sign Up form submission
// function handleSignup(event) {
//     event.preventDefault(); // Prevent default form submission
//     // Redirect to the home page
//     window.location.href = 'home.html';
// }

// // Function to handle Sign In form submission
// function handleSignin(event) {
//     event.preventDefault(); // Prevent default form submission
//     // Redirect to the home page
//     window.location.href = 'home.html';
// }

// // Attach event listener to the sign-up form submit button
// document.getElementById('signup-form').addEventListener('submit', function(event) {
//     validateSignup(event); // Validate before submission
//     if (!event.defaultPrevented) {
//         handleSignup(event); // Handle submission if no validation error
//     }
// });

// // Attach event listener to the sign-in form submit button
// document.getElementById('signin-form').addEventListener('submit', handleSignin);

// // Default form to display on page load
// showForm('signup');


//---------------------------------------------------------
// Function to show the corresponding form based on the button clicked
function showForm(formType) {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    if (formType === 'signup') {
        signupForm.classList.add('active');
        signinForm.classList.remove('active');
    } else if (formType === 'signin') {
        signinForm.classList.add('active');
        signupForm.classList.remove('active');
    }
}

// Attach event listeners to the buttons
document.getElementById('signup-button').addEventListener('click', function() {
    showForm('signup');
});

document.getElementById('signin-button').addEventListener('click', function() {
    showForm('signin');
});

// Function to validate password and confirm password on Sign Up form
function validateSignup(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        alert('Passwords do not match.');
    }
}

// Function to handle Sign Up form submission
function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;

    // Get the registered users from localStorage or initialize an empty array
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if the email is already in localStorage
    if (registeredUsers.includes(email)) {
        alert('Email already registered. Please sign in.');
    } else {
        // Add the email to the registered users array
        registeredUsers.push(email);
        // Save the updated array to localStorage
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert('Sign Up successful! Please Sign In.');
        // Redirect to the home page
        window.location.href = 'home.html';
    }
}

// Function to handle Sign In form submission
function handleSignin(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email-signin').value;

    // Get the registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if the email exists in localStorage
    if (registeredUsers.includes(email)) {
        alert('Sign In successful!');
        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        alert('Email not found. Please sign up first.');
    }
}

// Attach event listener to the sign-up form submit button
document.getElementById('signup-form').addEventListener('submit', function(event) {
    validateSignup(event); // Validate before submission
    if (!event.defaultPrevented) {
        handleSignup(event); // Handle submission if no validation error
    }
});

// Attach event listener to the sign-in form submit button
document.getElementById('signin-form').addEventListener('submit', handleSignin);

// Show the Sign Up form by default
showForm('signup');
