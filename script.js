// Handle login and authentication

const loginForm = document.querySelector('.login-form');

const loginUsernameInput = document.querySelector('#login-username');

const loginPasswordInput = document.querySelector('#login-password');

const loginErrorMessage = document.querySelector('#login-error-message');



const signupForm = document.querySelector('.signup-form');

const signupUsernameInput = document.querySelector('#signup-username');

const signupPasswordInput = document.querySelector('#signup-password');

const signupErrorMessage = document.querySelector('#signup-error-message');



// Function to clear form fields

const clearFormFields = () => {

    loginUsernameInput.value = '';

    loginPasswordInput.value = '';

    signupUsernameInput.value = '';

    signupPasswordInput.value = '';

    loginErrorMessage.textContent = '';

    signupErrorMessage.textContent = '';

};



// Login button click event

document.querySelector('#login-button').addEventListener('click', () => {

    const loginUsername = loginUsernameInput.value;

    const loginPassword = loginPasswordInput.value;



    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {

        // Successful login, redirect to the homepage

        window.location.href = 'index.html';

    } else {

        loginErrorMessage.textContent = 'Invalid username or password.';

    }

    clearFormFields();

});



// Signup button click event

document.querySelector('#signup-button').addEventListener('click', () => {

    const signupUsername = signupUsernameInput.value;

    const signupPassword = signupPasswordInput.value;



    // Simulated user registration - Add your actual registration logic here

    const isUsernameTaken = users.some(u => u.username === signupUsername);



    if (isUsernameTaken) {

        signupErrorMessage.textContent = 'Username already taken.';

    } else {

        // User registration successful - You can add code to create a new user here

        users.push({ username: signupUsername, password: signupPassword });

        signupErrorMessage.textContent = 'Registration successful!';

    }

    clearFormFields();

});

