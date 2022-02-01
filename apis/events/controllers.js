const res = require("express/lib/response");
const Event = require("../../db/model/Event");

exports.fetchEvent = async (req, res) => {
  try {
    const event = await Event.find();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const foundEvent = await Event.findByIdAndDelete({ _id: id });
    if (foundEvent) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const updateEvent = await Event.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (updateEvent) res.json(updateEvent);
    else res.status(404).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fetchOneEvent = async (req, res) => {
  try {
    const event = await Event.findById();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
