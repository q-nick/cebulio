import moment from "moment";

class UserService {
    constructor(name, age, gender) {
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
