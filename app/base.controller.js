class BaseController {
    constructor() {
        this.name = 'base';
    }

    draw() {
        console.log('drawing:', this.name);
    }
}

export default BaseController;