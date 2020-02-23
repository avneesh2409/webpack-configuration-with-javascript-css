// import { sidebar } from './components/sidebar'
// sidebar();
// var outer = document.createElement('div');
// outer.id = "outerP";
// document.body.appendChild(outer);
import $ from 'jquery';
import "../jquery.mCustomScrollbar.concat.min.js";

var example = document.createElement('div');
example.id = "example";
var content = document.createElement('div');
content.className = "content";
content.id = "content-1";
var btn = document.createElement('button');
btn.className = "button";
btn.innerHTML = "click";
var input = document.createElement('input');
input.type = 'text';
input.id = "url";
input.className = "input";
input.placeholder = "Enter the Url";
input.size = 15;
example.appendChild(content);
example.appendChild(input);
example.appendChild(btn);
document.body.appendChild(example);
btn.addEventListener('click', function (e) {
    $(`#mCSB_1_container`).append(`<p>${e.target.previousSibling.value}</p>`);
    $(`#url`).val('');
});



$(window).on("load", function () {

    $("#content-1").mCustomScrollbar({
        theme: "minimal"
    });

});