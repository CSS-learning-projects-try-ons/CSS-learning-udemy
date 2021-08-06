var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

document.querySelectorAll('.plan .button').forEach(element => {
    element.addEventListener('click', () => {
        backdrop.style.display = 'block'
        modal.style.display = 'block'
    })
})


document.querySelector('.modal__action--negative').addEventListener('click', closeModalAndBackdrop)

backdrop.addEventListener('click', closeModalAndBackdrop)

function closeModalAndBackdrop() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}