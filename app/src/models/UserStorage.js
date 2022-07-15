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
}



module.exports = UserStroage;