const authorize = (...roles) => {
  return (req, res, next) => {
    const role = req.headers.role;

    if (!role || !roles.includes(role)) {
      return res.status(403).json({
        success: false,
        message: "Access Denied"
      });
    }

    next();
  };
};

module.exports = authorize;