const getSummary = (records) => {
  let income = 0;
  let expense = 0;

  records.forEach(r => {
    if (r.type === 'income') income += r.amount;
    else expense += r.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  };
};

const getCategoryWise = (records) => {
  const result = {};

  records.forEach(r => {
    if (!result[r.category]) {
      result[r.category] = 0;
    }
    result[r.category] += r.amount;
  });

  return result;
};

module.exports = { getSummary, getCategoryWise };