export class SettingObject {
    constructor(name, value) {
        this.name = name;
        this.value = value;

        this.random();
    }
    random() {

        if (this.updateUI) {
            this.updateUI(this.name, this.value);
        }
        if (this.render) {
            this.render();
        }
    }

}
