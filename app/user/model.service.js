import moment from "moment";

class UserService {
    constructor(name = 'No name', age = -1, gender = "unknown") {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.birth = moment();
    }

    incrementAge() {
        this.age += 1;
    }
}

export default UserService;
