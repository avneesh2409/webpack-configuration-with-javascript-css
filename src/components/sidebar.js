import { sidebarElement } from './sidebarElement'
import inputelement from './inputelement';
import { outerparagraph } from './outerparagraph';
export function sidebar() {
    var div = document.createElement('div');
    div.id = "outerDiv";
    div.innerHTML = "<h5>SIDEBAR HERE</h5>";
    document.body.appendChild(div);
    sidebarElement();
    var input = document.createElement('input');
    var button = document.createElement('button');
    input.type = "text";
    input.id = 'inputfield';
    input.size = 22;
    button.innerHTML = "Add Todo";
    button.addEventListener('click', function (e) {
        var x = document.getElementById('inputfield');
        inputelement(x.value);
        outerparagraph(x.value);
        x.value = '';
        // var allp = document.querySelectorAll('p');
        // allp.forEach(element => {
        //     element.addEventListener('click', function (e) {

        //     })
        // });
        // allp[0].addEventListener('click', function (e) {
        //     console.log(e)
        // })


    })
    div.appendChild(input);
    div.appendChild(button);

}
