const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    if (!token) {
      return res.status(401).json({
        message: 'NO token found',
      });
    }

    try {
      const decoded = jwt.verify(token, 'this_is_secret');
      console.log(decoded);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Not authorized',
      });
    }
  } catch (error) {}
};

module.exports = authenticateToken;
