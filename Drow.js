class Drow {
    constructor() {


        let _colors = this.drowColors();
        this.getColors = () => _colors
    }
    drowColors() {
        const options = ["red", "blue", "green"];
        let colors = [];
        options.forEach((color, i) => {
            colors[i] = (options[Math.floor(Math.random() * options.length)]);
        });
        return colors;
    }
}
const drow = new Drow()