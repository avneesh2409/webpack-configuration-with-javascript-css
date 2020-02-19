import { SettingObject } from './services/settings';


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