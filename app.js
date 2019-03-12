class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (typeof value !== 'number') {
            throw new Error('"height" must be a number.');
        }
        if (value < 0) {
          throw new Error('Enter only positive value');
        }
        this._height = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (typeof value !== 'number') {
            throw new Error('"width" must be a number.');
        }
        if (value < 0) {
          throw new Error('Enter only positive value');
        }
        this._width = value;
    }

    get area() {
        return this.width * this.height;
    }
}

module.exports = Rectangle;
