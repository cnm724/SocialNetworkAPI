const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            min: [1, 'Too few characters'],
            max: [280, 'Too many characters'],
        },
        username: {
            type: String,
            required: true,
        },        
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    // Use a getter method to format the timestamp on query??
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)


module.exports = reactionSchema;