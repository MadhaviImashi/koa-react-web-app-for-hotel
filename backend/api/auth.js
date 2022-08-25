const bcrypt = require('bcryptjs');
const User = require('../models/user');

const signup = async (ctx) => {
    const newUser = ctx.request.body;
    const name = newUser.name;
    const email = newUser.email;
    const password = newUser.password;
    const type = newUser.type;
    try {
        const hashedPw = await bcrypt.hash(password, 12); //encrypt pwd
        const user = new User({
            email,
            password: hashedPw,
            name,
            type
        });
        const result = await user.save();
        ctx.status = 201;
        return ctx.body = {
            message: "user created",
            userId: result._id.toString() ,
        };
    } catch (err) {
        ctx.status = err.status || 500;
        return ctx.body = {
            message: "Registration failed"
        }
    }
};

const login = async (ctx) => {
    try {
        console.log('reqq', ctx.request.body);
        const loginData = ctx.request.body;
        console.log("lll", loginData);
        const email = loginData.email;
        const password = loginData.password;

        const user = await User.findOne({ email: email });
        console.log('userr', user);
        if (user) {
            const isEqual = await bcrypt.compare(password, user.password);
            if (isEqual) {
                //send the response
                ctx.status = 200;
                return ctx.body = {
                    userId: user._id.toString() ,
                    type: user.type,
                    email:user.email,
                    name:user.name
                };
            }
        }
    } catch (err) {
        ctx.status = err.status || 500;
        return ctx.body = {
            message: "authentication failed"
        }
    }
};

module.exports = {
    signup,
    login
}