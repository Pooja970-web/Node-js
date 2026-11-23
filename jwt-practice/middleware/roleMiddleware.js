const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {

        // authMiddleware ने req.user में role रखा था
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied: you do not have permission"
            });
        }

        next();
    };
};

module.exports = roleMiddleware;