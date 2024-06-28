const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'Too few eggs'],
            max: [280, 'Too many eggs'],
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }

        ],
        reactions: [reactionSchema],

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

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


const User = model('user', userSchema);

module.exports = User;