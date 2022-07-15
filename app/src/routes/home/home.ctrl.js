"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["1", "2", "3"],
    passwd: ["4", "5", "6"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            passwd = req.body.passwd;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.passwd[idx] === passwd) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "login flase",
        });
    },
};

module.exports = {
    output,
    process,
};

