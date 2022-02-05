const form = document.querySelector('.form__wrapper');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', e => {

    const email = form.email.value;
    const error = document.querySelector('.error');

    if(!emailPattern.test(email)) {
        e.preventDefault();
        form.setAttribute('error', 'Oops! Please check your email');
    } else {
        return true;
    };
});

form.email.addEventListener('keyup', e => {

    let email = form.email;

    if(emailPattern.test(e.target.value)) {
        email.style.outline = '1px solid rgb(84,230,175)';
    } else {
        email.style.outline = '1px solid red';

    };
});