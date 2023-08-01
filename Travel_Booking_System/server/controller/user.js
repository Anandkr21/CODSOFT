const { User } = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.allUser = async (req, res) => {
    const user = await User.find()
    res.status(200).send({
        status: true,
        msg: 'List of all user!',
        data: user
    })
}

exports.userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).send({
                status: true,
                msg: "User already registerd, please login!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 8)
        await User.insertMany([{ name, email, password: hashedPassword }]);

        res.status(201).send({
            status: true,
            msg: "You are Registered!"
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: false,
            msg: "Internal server error",
            error: error.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).send({
                status: false,
                msg: "User not found!"
            })
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: user.id }, process.env.secret_Key, {
                    expiresIn: '1d'
                })

                res.status(200).send({
                    status: true,
                    msg: "Login Successfully",
                    data: user,
                    Token: token
                })
            } else {
                res.status(400).send({
                    status: false,
                    msg: "Wrong Password!"
                });
            }
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            error: 'Internal server error.',
            msg: error.message
        });
    }
}

exports.passwordReset = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).send({
                status: false,
                msg: "Wrong email or user not found!"
            })
        } else {
            const hashedPassword = bcrypt.hashSync(password, 5);
            await User.updateOne({ email: email }, { $set: { password: hashedPassword } });
            res.status(200).send({
                status: true,
                msg: 'Password has been updated'
            });
        }

    } catch (error) {
        res.status(404).send({
            status: false,
            msg: 'Error while updating the password.'
        });
    }
}
