import React from "react";
import { useState } from "react";
import { useContext } from "react";

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([])
  const [expenses, setExpenses] = useState([])
  

  function getBudgetExpenses(budgetId) {}

  function addExpense() {}
  function addBudget() {}
  function deleteBudget() {}
  function deleteExpense() {}

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
