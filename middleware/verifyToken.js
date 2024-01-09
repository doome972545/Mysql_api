const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).send("token is invalid");
            req.user = user;
            next();
        })
    } else {
        return res.status(500).send("No token provided")
    }
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!req.user) {
            return res.send("is not authenticated")
        }else if(req.user.isAdmin){
            next();
        } else {
            return res.status(403).json("You are not Admin");
        }
    });
};
module.exports = {verifyToken,verifyTokenAndAdmin};