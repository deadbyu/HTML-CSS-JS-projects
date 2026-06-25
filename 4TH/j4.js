const calenderEl = document.getElementById("Calender-con");
const dateEl = document.getElementById("Date");
const dayEl = document.getElementById("Day");
const monthEl = document.getElementById("Month");
const yearEl = document.getElementById("Year");

const date = new Date();
dateEl.textContent = date.getDate();
dayEl.textContent = date.toLocaleString("en-US", { weekday: "long" });
monthEl.textContent = date.toLocaleString("en-US", { month: "long" });
yearEl.textContent = date.getFullYear();