class Chartroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.charts = db.collection("charts");
  }
  async addChart(message) {
    // format a chart object
    const now = new Date();
    const chart = {
      created_at: firebase.firestore.Timestamp.fromDate(now),
      message: message,
      room: this.room,
      username: this.username,
    };

    // save the chart document
    const response = await this.charts.add(chart);
    return response;
  }
  //   listening to everychange
  getCharts(callback) {
    this.charts
      .where("room", "==", this.room)
      .orderBy("created_at", "desc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // update the ui
            callback(change.doc.data());
          }
        });
      });
  }
}

const chartroom = new Chartroom("general", "kalisa");
// chartroom.addChart("a very warming aplaouses");
chartroom.getCharts((data) => console.log(data));
