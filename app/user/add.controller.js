import UserService from "./model.service";
import BaseController from "../base.controller";
import * as UserConstants from "./user.constants";

class AddController extends BaseController {
    constructor() {
        super();
        this.user = new UserService('a', 'b', 'c');
        this.name = 'add' + UserConstants.name;
    }
}

export default AddController;