const Register = require('../models/register');

class AuthCtrl{
    async add(data){
        const { email, password } = data;
        const register = new Register({
            email, password
        });
        return register.save();
    }
}

module.exports = new AuthCtrl();