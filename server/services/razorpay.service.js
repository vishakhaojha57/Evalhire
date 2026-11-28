import dotenv from "dotenv"
dotenv.config()
import Razorpay from "razorpay"

// Lazy init — only throws if payment routes are actually called (keys not needed at startup)
const getRazorpay = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys not configured. Payment is disabled.")
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })
}

export default getRazorpay