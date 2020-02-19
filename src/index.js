import { SettingObject } from './services/settings';

var x = document.createElement('p');
x.innerHTML = "My Name is Avneesh dwivedi";
x.className = 'divClass';
var y = document.createElement('span');
y.innerHTML = "this is span";
document.body.appendChild(x);
document.body.appendChild(y);

var b = document.createElement('button');
b.innerHTML = "Click Me";
b.className = "btn";
b.addEventListener('click', function (e) {
	console.log(this.parentNode.remove(this));
})
document.body.appendChild(b);

class Test extends SettingObject {
	constructor(name, value) {
		super(name, value);
		this.obj = "this is it";
	}
	render() {
		console.log("called from index.js file");
	}
	updateUI(name, value) {
		console.log("updateUI from index.js", name, value);
	}
}
var x = new Test("Avneesh", "Dwivedi");
// console.log(x.random());