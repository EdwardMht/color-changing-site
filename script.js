const body = document.body;
const colors = ['#3498db', '#e74c3c', '#27ae60', '#f39c12', '#9b59b6'];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

document.addEventListener('click', changeBackgroundColor);
