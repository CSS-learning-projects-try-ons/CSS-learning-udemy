var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

document.querySelectorAll('.plan .button').forEach(element => {
    element.addEventListener('click', () => {
        backdrop.classList.add('open');
        if(modal)
            modal.classList.add('open');
    })
})

if(document.querySelector('.modal__action--negative'))
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
    if(modal)
        modal.classList.remove('open');
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
}
