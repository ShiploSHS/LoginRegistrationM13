function showForm(type) {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');

    if (type === 'register') {
        document.getElementById('registerForm').classList.remove('d-none');
    } else if (type === 'login') {
        document.getElementById('loginForm').classList.remove('d-none');
    }
}

function register() {
    const fullname = document.getElementById('regFullname').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!fullname || !email || !password) {
        alert('Please fill all the fields');
        return;
    }

    const user = { fullname, email, password }

    localStorage.setItem(email, JSON.stringify(user));

    alert('Registered successfully!');

    document.getElementById('regFullname').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';

    showForm('login');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please fill all the fields');
        return;
    }

    const user = localStorage.getItem(email);

    if (!user) {
        alert('User not found');
        return;
    }

    const parsedUser = JSON.parse(user);

    if (parsedUser.password !== password) {
        alert('Invalid password');
        return;
    }

    alert('Logged in successfully! Welcome ' + parsedUser.fullname);

    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}
