const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {
        // Header से token निकालो
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token not provided"
            });
        }

        // "Bearer abc123" से सिर्फ़ "abc123" लो
        const token = authHeader.split(" ")[1];

        // Token जाँचो
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // User की जानकारी request में रखो
        req.user = decoded;

        // अगले step पर जाओ
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;