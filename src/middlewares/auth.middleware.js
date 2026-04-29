const jwt = require("jsonwebtoken");

function authArtist(req, res, next) {
  const token = req.cookies.token || 
                req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({ message: "You don't have access" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
}

function authUser(req, res, next) {
  const token = req.cookies.token|| 
    req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "user" && decoded.role !=="artist") {
      return res.status(403).json({ message: "You don't have access" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
}

module.exports = { authArtist, authUser }; 