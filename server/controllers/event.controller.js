import Event from '../models/event.js';

export const handleCreateEvent = async (req, res) => {
    try {
        const { eventName, description, date, time, venue, capacity } = req.body;
        // const creator = req.user.id;
        const existingEvent = await Event.findOne({ eventName: eventName });
        if (existingEvent) {
            return res.status(400).json({ msg: 'Event already exists' });
        }
        await Event.create({
            eventName,
            description,
            date,
            time,
            venue,
            capacity,
        });
        return res.status(200).json({ msg: 'Event created successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}