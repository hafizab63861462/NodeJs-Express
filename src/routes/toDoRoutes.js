const express = require("express");
const toDoController = require("./../controller/toDoController");

const router = express.Router();
// router.use(express.json());
// app.get("/api/v1/tasks", getAllTours);
// app.post("/api/v1/tasks", createNewTour);
// app.get("/api/v1/tasks/:id", getSpecificTour);
// app.patch("/api/v1/tasks/:id", updateSpecificTour);
// app.delete("/api/v1/tasks/:id", deleteSpecificTour);

router
  .route("/api/v1/tasks")
  .get(toDoController.getAllTask)
  .post(toDoController.createNewTask);
router
  .route("/api/v1/tasks/:id")
  .get(toDoController.getSpecificTask)
  .patch(toDoController.updateSpecificTask)
  .delete(toDoController.deleteSpecificTask);

module.exports = router;
