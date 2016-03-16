import UserService from "./model.service";

class EditorController {
    constructor() {
        this.user = new UserService('a', 'b', 'c');
    }
}

export default EditorController;