var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementsByTagName('body')[0];
var css = document.getElementById('text-gradient')

function colors() {
    body.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value})`
    css.textContent = `${body.style.background};`
}

color1.addEventListener('input', colors)
color2.addEventListener('input', colors)


colors()