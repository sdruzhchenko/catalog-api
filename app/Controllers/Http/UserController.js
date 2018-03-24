'use strict'

class UserController {

    async login({request, response})
    {
        var dd = console.log;

        const { email, password } = request.post();

        const User = use('App/Models/User')

        const user = new User({username: 'xxx', email: email, password: password});

        await user.save();




        return '#LOGIN!#';
    }

    xxx()
    {
        return 'xxx';
    }

}

module.exports = UserController
