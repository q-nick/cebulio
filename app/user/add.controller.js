import UserService from "./model.service";

class AddController {
    constructor() {
        this.user = new UserService('a', 'b', 'c');
    }
}

export default AddController;