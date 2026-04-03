const BASE_URL = "http://localhost:3000";

async function addRecord() {
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;

  const res = await fetch(`${BASE_URL}/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "role": "admin"
    },
    body: JSON.stringify({ amount: Number(amount), type, category })
  });

  const data = await res.json();
  alert("Record Added!");
}

async function getRecords() {
  const res = await fetch(`${BASE_URL}/records`, {
    headers: {
      "role": "viewer"
    }
  });

  const data = await res.json();

  const list = document.getElementById("recordsList");
  list.innerHTML = "";

  data.data.forEach(r => {
    const li = document.createElement("li");
    li.innerText = `${r.type} - ₹${r.amount} (${r.category})`;
    list.appendChild(li);
  });
}

async function getDashboard() {
  const res = await fetch(`${BASE_URL}/dashboard/summary`, {
    headers: {
      "role": "analyst"
    }
  });

  const data = await res.json();

  document.getElementById("summary").innerText =
    `Income: ₹${data.data.totalIncome}, Expense: ₹${data.data.totalExpense}, Balance: ₹${data.data.netBalance}`;
}