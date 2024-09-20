let bulb = document.querySelector("#bulb");
let btn = document.querySelector("#btn");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    bulb.innerHTML = "BULB is ON";
    btn.innerText = 'OFF';
    bulb.style.color = 'black';
    bulb.style.border = '2px solid black';
    document.body.style.backgroundColor = 'azure';
    
    flag = 1;
  }else if(flag == 1){
    bulb.style.backgroundColor = 'transparent';
    bulb.innerHTML = 'BULB is OFF';
    bulb.style.color = 'white';
    bulb.style.border = '2px solid white';
    btn.innerText = 'ON';
    document.body.style.backgroundColor = 'black';

    flag = 0;
  };
});
