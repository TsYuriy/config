
class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
            div.textContent = 'Введите текст';
            
        document.body.appendChild(div);        
        div.style.cssText = `height: ${this.height}px; 
        					width: ${this.width}px; 
                            background: ${this.bg}; 
                            font-size: ${this.fontSize}px; 
                            text-align: ${this.textAlign}`;
        }
}

let options = new Options('100', '300', 'red', '24', 'center');
options.createDiv();

let block = new Options('50', '200', 'green', '12', 'right');
block.createDiv();