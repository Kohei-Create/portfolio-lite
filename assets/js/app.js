window.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('body');
    target.classList.add('is-active')
});

const options = {
    threshold: .2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        } else {
            entry.target.classList.remove('is-active');
        }
    });
},  options);

const target = document.querySelector('#footer');

if(target) {
    observer.observe(target);
}