import Event from '../models/event.js';

export const handleCreateEvent = async (req, res) => {
    console.log(req.body);
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
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

export const handleShowEvent = async (req, res) => {
    try {
        const events = await Event.find({}, { eventName: 1, date: 1, time: 1, venue: 1, capacity: 1 });
        return res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

export const handleShowEventById = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }
        return res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}