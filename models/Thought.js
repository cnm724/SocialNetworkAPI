const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'not enough characters'],
            max: [280, 'Too many characters'],
        },
        username: [
            {
                type: String,
                ref: 'User',
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
            getters: true
        },
        id: false,
    }
)

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;