// DOM queries
const chartList = document.querySelector(".chart-list");
const newChartForm = document.querySelector(".new-chart");
const newNameForm = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chart-rooms");

// add a new chart
newChartForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChartForm.message.value.trim();
  chartroom
    .addChart(message)
    .then(() => newChartForm.reset())
    .catch((error) => console.log(error));
});

// update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   update the name via the chartroom
  const newName = newNameForm.name.value.trim();
  chartroom.updateName(newName);
  //   reset the form
  newNameForm.reset();
  //   show then hide the update message
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => (updateMssg.innerText = ""), 3000);
});

// update chart room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const value = e.target.textContent.slice(1);
    e.target.classList.add("bg-primary");
    chartUI.clear();
    chartroom.updateRoom(e.target.getAttribute("id"));
    chartroom.getCharts((chart) => chartUI.render(chart));
  }
  //   const value = e.target.textContent.slice(1);
  //   chartroom.updateRoom(value);
});

// check localstorage for a name
const username = localStorage.username ? localStorage.username : "anon";

// class instances
const chartUI = new ChartUI(chartList);
const chartroom = new Chartroom("general", username);

// get the charts and render
chartroom.getCharts((data) => chartUI.render(data));
