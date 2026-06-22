import mongoose, { Schema, Document } from 'mongoose';

export interface IPayPalPaymentOption extends Document {
    accountName: string;
    email: string;
    paypalLink?: string;
    instructions?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const PayPalPaymentOptionSchema: Schema = new Schema(
    {
        accountName: { type: String, required: true },
        email: { type: String, required: true },
        paypalLink: { type: String },
        instructions: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const PayPalPaymentOption =
    mongoose.models.PayPalPaymentOption ||
    mongoose.model<IPayPalPaymentOption>('PayPalPaymentOption', PayPalPaymentOptionSchema);

export default PayPalPaymentOption;
