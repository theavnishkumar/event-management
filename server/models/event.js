import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    attendees: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            enum: ['confirmed', 'pending'],
            default: 'pending'
        }
    }],
    isFull: {
        type: Boolean,
        default: false
    },
    remindersSent: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

eventSchema.methods.checkCapacity = function () {
    if (this.attendees.length >= this.capacity) {
        this.isFull = true;
    } else {
        this.isFull = false;
    }
};

const Event = mongoose.model('Event', eventSchema);

export default Event;