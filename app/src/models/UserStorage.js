"use strict";

class UserStroage {
    static #users = {
        id: ["1", "2", "3"],
        passwd: ["4", "5", "6"],
        name: ["one","two","three"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, filed) => {
            if (users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);

        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}



module.exports = UserStroage;