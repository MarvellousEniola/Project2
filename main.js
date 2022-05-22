document.getElementById('show-alert').addEventListener('click', showAlert);

function showAlert(){
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const message='Email: '+email+'\nPassword: '+password;

    alert(message);
}
