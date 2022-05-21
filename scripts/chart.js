class Chartroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.charts = db.collection("charts");
    this.unsub;
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
    this.unsub = this.charts
      .where("room", "==", this.room)
      .orderBy("created_at", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // update the ui
            callback(change.doc.data());
          }
        });
      });
  }
  // update username
  updateName(username) {
    this.username = username;
    localStorage.setItem("username", this.username);
  }
  // update the chart room
  updateRoom(room) {
    this.room = room;
    // unsubscribing from changes
    if (this.unsub) {
      this.unsub();
    }
  }
}
