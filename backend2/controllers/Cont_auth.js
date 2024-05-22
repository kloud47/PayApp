const zod = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { User, Account } = require('../db');
const bcrypt = require('bcryptjs')

// const SignUpSchema = zod.object({
//     username: zod.string().email(),
//     firstName: zod.string(),
//     lastName: zod.string(),
//     password: zod.string(),
//     phoneNo: zod.number().max(10)
// });

// const SignInSchema = zod.object({
//     username: zod.string().email(),
//     password: zod.string().min(6)
// });

exports.postSignin = async (req, res) => {
    // const { success } = SignInSchema.safeParse(req.body);
    
    // if (!success) {
    //     return res.status(411).json({
    //         msg: "Email incorrect or already taken"
    //     });
    // }
    
    const user = await User.findOne({ username: req.body.username });
    
    if (!user) {
        return res.json({
            msg: "Wrong username"
        })
    }
    return bcrypt.compare(req.body.password, user.password)
    .then(match => {
        if (match) {
            const token = jwt.sign({
                userID: user._id
            }, JWT_SECRET);
            
            res.json({
                token: token
            });
        };
    })
    .catch(() => {
        res.json({
            msg: "wrong password"
        })
    })
};


exports.postSignup = async (req, res) => {
    // const { success } = SignUpSchema.safeParse(req.body);

    // if (!success) {
    //     return res.status(411).json({
    //         msg: "incorrect Data"
    //     })
    // }

    const existingUser = await User.findOne({
        username: req.body.username
    });
    if (existingUser) {
        return res.status(411).json({
            msg: "User already exists"
        })
    };

    try {
        const hashedPass = await bcrypt.hash(req.body.password, 12)
        const user = User.create({
            username: req.body.username,
            password: hashedPass,
            phoneNo: req.body.phoneNo,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        const userID = (await user)._id;

        await Account.create({
            userID,
            balance: 1 + Math.random() * 10000
        })

        const token = jwt.sign({
            userID
        }, JWT_SECRET);
    
        return await res.json({
            msg: "User created successfully",
            token: token
        });
    } catch (e) {
        return await res.status(404).json({
            msg: "Somthing went wrong."
        })
    }
};

const updateSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6),
})

exports.updateUser = async (req, res) => {
    const { success } = updateSchema.safeParse(req.body);

    if (!success) {
        return res.json({
            msg: "wrong input"
        })
    } else {
        await User.updateOne({ _id: req.userID }, req.body);
        return res.json({
            msg: "Updated successfully"
        });
    }
};

exports.getUser = async (req, res) => {
    const search = req.query.filter || "";

    const users = await User.find({
        $or: [
            { firstName: { $regex: filter} },
            {lastName: { $regex: filter }}
        ]
    });

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
}