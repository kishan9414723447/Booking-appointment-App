var submit = document.getElementById('submit');



submit.addEventListener('click', (e) => {
    e.preventDefault();
    var userName = document.getElementById('name').value;
    var userPassword = document.getElementById('password').value;
    localStorage.setItem('Name of User',userName);
    localStorage.setItem('Password of User',userPassword);   

})
