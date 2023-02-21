const mongoose = require("mongoose");

const toDoAppSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name required"],
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  isShowUpdatedField: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", toDoAppSchema);

module.exports = Task;
