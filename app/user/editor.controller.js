import UserService from "./model.service";

class EditorController {
    constructor() {
        this.user = new UserService();
    }
}

export default EditorController;