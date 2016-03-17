import Handlebars from "handlebars";

class BaseController {
    constructor() {
        this.name = 'base';
        this.template = "<p>{{name}}</p>";
    }

    draw() {
        var template = Handlebars.compile(this.template);
        document.querySelector('body').innerHTML = template(this);
    }
}

export default BaseController;