function togglePassword(passwordId, eyeIconId) {
    const passwordInput = document.getElementById(passwordId);
    const eyeIcon = document.getElementById(eyeIconId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  // Show password
        eyeIcon.classList.remove('fa-eye');     // Change eye icon to open eye
        eyeIcon.classList.add('fa-eye-slash');  
    } else {
        passwordInput.type = 'password';  // Hide password
        eyeIcon.classList.remove('fa-eye-slash');  
        eyeIcon.classList.add('fa-eye');   // Change eye icon to closed eye
    }

    // Set cursor to the end of the input field after toggling visibility
    setTimeout(() => {
        const length = passwordInput.value.length;
        passwordInput.setSelectionRange(length, length);  // Set cursor at the end
        passwordInput.focus();  // Focus on the password input
    }, 0);
}
