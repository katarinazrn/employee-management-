const express = require("express");
const {
  getAllEmployees,
  getEmployee,
  saveEmployee,
  deleteEmployee,
  updateEmployee
} = require("../controller/employeController");
 
const router = express.Router();
 
router.get("/employees", getAllEmployees);
 
router.get("/employee/:id", getEmployee);

router.post("/employee", saveEmployee);

router.put("/employee/:id", updateEmployee);
 
router.delete("/employee/:id", deleteEmployee);
 
module.exports = {
  routes: router
};