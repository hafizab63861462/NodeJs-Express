const Task = require("./../models/toDoModel");

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: "success",
      result: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSpecificTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewTask = async (req, res) => {
  try {
    // const newTask = new Task({});
    // newTask.save();

    const newTask = await Task.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateSpecificTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        message: "update successfully",
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteSpecificTask = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
