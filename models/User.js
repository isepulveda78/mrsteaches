import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        image: { type: String, required: false },
        stripe_customer_id: { type: String, required: false},
        subscriptions: { type: String, required: false},
        subscription_status: { type: Boolean, required: false},
        isAdmin: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true
    }
)

const User = mongoose.models?.User || mongoose.model('User', userSchema)
export default User