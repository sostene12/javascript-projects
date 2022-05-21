class ChartUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
    Array.from(this.list.children);
    console.log(Array.from(this.list.children));
  }
  render(data) {
    const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;
    this.list.innerHTML += html;
  }
}
