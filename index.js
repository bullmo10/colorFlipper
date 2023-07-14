const colorss = ['#1A5D1A','#4A55A2', '#862B0D', '#3F2305', '#FF8989','#E7B10A',
    '#FFD0D0', '#CBFFA9', '#9BABB8','#F9F5F6', '#5C8984', '#8294C4', '#867070', 
    '#804674','#EA8FEA', '#F31559','#331D2C'];
    
const button= document.getElementById('btn');
const color = document.querySelector('.color');
button.addEventListener('click', () => {
    const randomNumbers = getRandomNumber()
    document.body.style.backgroundColor = colorss[randomNumbers];
    document.body.style.color = colorss[randomNumbers]
    color.textContent = colorss[randomNumbers]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colorss.length)
}