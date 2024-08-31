let btnOn = document.querySelector('.bulb-on');
let btnOff = document.querySelector('.bulb-off');
let btn = document.querySelector('#bulb_btn');

btn.addEventListener('click', () => {
    btnOn.classList.toggle('bulb-on');
    btnOn.classList.toggle('bulb-off');
    btnOff.classList.toggle('bulb-on');
    btnOff.classList.toggle('bulb-off');
});