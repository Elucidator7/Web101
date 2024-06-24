const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../Controller/expense");
const {
  addIncome,
  getIncomes,
  deleteIncomes,
} = require("../Controller/income");
const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncomes)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("delete-expense/:id", deleteExpense);
module.exports = router;
