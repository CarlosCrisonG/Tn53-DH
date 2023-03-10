const controller = {
    index: (req, res) => {
        res.render('index', { user: req.session.user });
    },
    login: (req, res) => {
        const user = {
            name: req.body.name,
            color: req.body.color,
            email: req.body.email,
            age: req.body.age
        };
        req.session.user = user;
        res.render('index', { user });
    }
};

module.exports = controller;