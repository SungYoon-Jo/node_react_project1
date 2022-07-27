"use strict";

const fs = require("fs").promises;

class UserStroage {
    
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, filed) => {
            if (users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);

    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.passwd.push(userInfo.passwd);
        return { success: true };
    }
}



module.exports = UserStroage;