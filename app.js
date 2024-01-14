let btn = document.querySelector('button');
let section=document.querySelector('section');


btn.addEventListener('click', function () {
    let h2 = document.querySelector('h2');
    let randomcolor = getRandomColor();
    h2.innerText = randomcolor;
    let div=document.querySelector('div');
    div.style.backgroundColor=randomcolor;
    btn.style.color=randomcolor;
    // let span=document.querySelector('span');
    // span.style.color=randomcolor;
    section.style.borderColor=randomcolor;

})

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r},${g},${b})`;
    return color;
}
