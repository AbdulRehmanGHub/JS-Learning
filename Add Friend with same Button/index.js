// with different buttons

let addFriend = document.querySelector('#addFr');
let removeFriend = document.querySelector('#removeFr');

let username = document.querySelector('#username').innerHTML;
let textToChange = document.querySelector('#changeText');


addFriend.addEventListener('click', ()=>{
    textToChange.innerHTML = `You're now friends`;
    textToChange.style.color = 'yellow';
});

removeFriend.addEventListener('click', ()=>{
    textToChange.innerHTML = `${username} is not your friend`;
    textToChange.style.color = 'white';
});

// with same button
let username2 = document.querySelector('#username2').innerHTML;
let textToChange2 = document.querySelector('#changeText2');

let friendBtn = document.querySelector('#friendBtn');

let flag = 0;
friendBtn.addEventListener('click', ()=>{
    if(flag == 0){
        textToChange2.innerHTML = `You're not friend of ${username2}`;
        friendBtn.innerHTML = 'Send Request'
        textToChange2.style.color = 'white'
        flag = 1;
    }else{
        textToChange2.innerHTML = `You've sent request to ${username2}`;
        friendBtn.innerHTML = 'Remove Request'
        textToChange2.style.color = 'yellow';
        flag = 0;
    }
});

