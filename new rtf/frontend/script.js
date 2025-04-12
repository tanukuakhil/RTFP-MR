const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

function showLogin() {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
}

function showSignup() {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
}
document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();
    alert(data.message);
  
    if (data.token) {
      localStorage.setItem('token', data.token);
      // Redirect to dashboard or protected area
    }
  });
  

document.querySelector("#signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
  
    const data = await res.json();
    alert(data.message);
  });
  
showLogin();
