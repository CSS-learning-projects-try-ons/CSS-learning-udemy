var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

document.querySelectorAll('.plan .button').forEach(element => {
    element.addEventListener('click', () => {
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
})


document.querySelector('.modal__action--negative').addEventListener('click', closeModalAndBackdrop)

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    // mobileNav.style.display = 'none';
    closeModalAndBackdrop();
});

toggleButton.addEventListener('click', () => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
    // backdrop.style.display = 'block';
    // mobileNav.style.display = 'block';
});

function closeModalAndBackdrop() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
}
