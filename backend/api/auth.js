const bcrypt = require('bcryptjs');
const User = require('../models/user');

const signup = async (ctx) => {
    const newUser = ctx.request.body;
    // ctx.set('Content-Type', 'application/json');
    let userData = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        type: newUser.type
    };
    try {
        const hashedPw = await bcrypt.hash(userData.password, 12); //encrypt pwd
        userData.password = hashedPw;
        const user = new User(userData);
        //save user to DB
        const result = await user.save();
        ctx.status = 201;
        return ctx.body = {
            message: "user created",
            userId: result._id.toString() ,
        };
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = {
            message: "Registration failed"
        }
    }
};

const login = async (ctx) => {
    try {
        const loginData = ctx.request.body;
        // ctx.set('Content-Type', 'application/json');

        const email = loginData.email;
        const password = loginData.password;

        const user = await User.findOne({ email: email });
        if (user) {
            const isEqual = await bcrypt.compare(password, user.password);
            if (isEqual) {
                //send the response
                ctx.status = 200;
                return ctx.body = {
                    message: "login successful",
                    data: {
                        userId: user._id.toString() ,
                        type: user.type || 'student',
                        email:user.email,
                        name:user.name
                    }
                };
            }
        }
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = {
            message: "authentication failed"
        }
    }
};

module.exports = {
    signup,
    login
}