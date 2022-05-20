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
    this.charts.onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // update the ui
          callback(change.doc.data());
        }
      });
    });
  }
}

const chartroom = new Chartroom("music", "abel");
chartroom.getCharts((data) => console.log(data));
