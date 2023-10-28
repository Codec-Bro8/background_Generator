var textbox = document.getElementById('text');
var ul = document.querySelector('ul');
var button = document.getElementById('enter')


function inputLength(){
    return textbox.value.length;
}

function createListElement (){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(textbox.value));
    ul.appendChild(li);
    textbox.value = ''
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    } 
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    } 
}

button.addEventListener('click', addListAfterClick)

textbox.addEventListener('keypress', addListAfterKeypress)

