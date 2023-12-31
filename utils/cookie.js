import jwt from "jsonwebtoken"

export const sendCookie = (user, res, message, statusCode = 200) => {
    const jwttoken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)

    res.status(statusCode).cookie("token", jwttoken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite:process.env.NODE_ENV==="Development" ? "lax":"none", 
        secure:process.env.NODE_ENV==="Development" ? false:true,
    }).json({
        success: true,
        message,
    })
}