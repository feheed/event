const res = require("express/lib/response");
const Event = require("../../db/model/Event");

exports.fetchEvent = async (req, res, next) => {
  try {
    const event = await Event.find();
    res.json(event);
  } catch (error) {
    next(error);
  }
};

exports.createEvent = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundEvent = await Event.findByIdAndDelete({ _id: id });
    if (foundEvent) res.status(204).end();
    else next({ status: 400, message: "Product not found" });
  } catch (error) {
    next(error);
  }
};

exports.updateEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateEvent = await Event.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (updateEvent) res.json(updateEvent);
    else res.status(404).end();
  } catch (error) {
    next(error);
  }
};

exports.fetchOneEvent = async (req, res, next) => {
  try {
    const event = await Event.findById();
    res.json(event);
  } catch (error) {
    next(error);
  }
};
