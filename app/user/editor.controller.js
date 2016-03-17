import UserService from "./model.service";
import BaseController from "../base.controller";
import * as UserConstants from "./user.constants";

class EditorController extends BaseController {
    constructor() {
        super();
        this.user = new UserService();
        this.name = 'edit' + UserConstants.name;
    }
}

export default EditorController;