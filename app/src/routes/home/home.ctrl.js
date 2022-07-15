"use strict";

const UserStroage = require("../../models/UserStorage")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};


const process = {
    login: (req, res) => {
        const id = req.body.id,
            passwd = req.body.passwd;

        const users = UserStroage.getUsers("id", "passwd");
        
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.passwd[idx] === passwd) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "login flase";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

