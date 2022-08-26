const Subject = require('../models/subject');

const createSubject = async (ctx) => {
    const newSubject = new Subject(ctx.request.body);
    console.log('new subject', newSubject);
    //save new subject to db
    try {
        await newSubject.save();
        //send response
        ctx.status = 201;
        ctx.body = {
            message: 'subject created',
            newSubject
        }
    }
    catch (err) {
        ctx.status = err.status || 500;
        ctx.body = 'subject was not created';
    }
}
module.exports = createSubject;