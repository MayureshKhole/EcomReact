//https://chatgpt.com/c/e67cf613-b4f4-4eb7-affb-b96ea26e47de

const jwt = require("jsonwebtoken");
async function authToken(req, res) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(200).json({
        message: "Please Login...!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(err);
      console.log("decoded", decoded);

      if (err) {
        console.log("error auth", err);
      }

      req.userId = decoded?._id

      next()

    });

  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      data: [],
      success: false,
      error: true,
    });
  }
}
module.exports = authToken;
