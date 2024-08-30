// let btnOn = document.querySelector('.bulb-on');
// let btnOff = document.querySelector('.bulb-off');
let btn = document.querySelector('#bulb_btn');

btn.addEventListener('click', ()=>{
    document.querySelector('.bulb-on').style.display = 'block';
    document.querySelector('.bulb-off').style.display = 'none';

});
