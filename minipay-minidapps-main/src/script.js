document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulate login process - replace with actual authentication logic
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate successful login
  if (username === 'admin' && password === 'admin') {
    // Simulate payment with a hypothetical service upon successful login
    // makePayment(username);
    alert('Login successful! .');  


  } else {
    alert('Invalid credentials. Please try again.');
  }
});

function makePayment(username) {
  // Simulate payment with a hypothetical payment service (Minipay equivalent)
  // Replace this with actual payment integration logic with Minipay or any other service
  console.log(`Payment made for user: ${username}`);
  // Example: Call Minipay API or perform payment-related actions
}
