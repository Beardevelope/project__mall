import mongoose from 'mongoose';
const goodschema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        default: 'FOR SALE',
    },
    content: {
        type: String,
        required: true,
    },
});

export default mongoose.model('product', goodschema);
