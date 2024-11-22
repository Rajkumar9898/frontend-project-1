document.addEventListener("DOMContentLoaded", function() {
    const eyeIcon = document.querySelector('.eye-icon');

    eyeIcon.addEventListener('mousedown', function(event) {
        event.preventDefault(); // Prevent focus shift
    });

    eyeIcon.addEventListener('click', function() {
        const password = document.getElementById('password');
        const eyeIcon = document.getElementById('eyeIcon');
        if (password.type === 'password') {
            password.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            password.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
        // Set cursor to the end of the input field
        setTimeout(() => {
            const length = password.value.length;
            password.setSelectionRange(length, length);
            password.focus();
        }, 0);
    });
});
