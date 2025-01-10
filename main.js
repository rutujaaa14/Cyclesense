document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.splash-screen').style.display = 'none';
        document.getElementById('form-wrapper').style.display = 'block';
    }, 5000); // Show the signup form after 2 seconds (2000 milliseconds)
});
