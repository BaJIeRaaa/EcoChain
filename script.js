document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        document.getElementById('subscription-message').textContent = 'Спасибо за подписку!';
        document.getElementById('subscription-message').style.color = 'green';
    } else {
        document.getElementById('subscription-message').textContent = 'Пожалуйста, введите правильный email.';
        document.getElementById('subscription-message').style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
