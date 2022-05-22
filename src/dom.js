console.log("dom file");

const body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "peachpuff";
};

const addTitle = (text) => {
  const titlle = document.createElement("h1");
  titlle.textContent = text;
  body.appendChild(titlle);
};

const contact = "ngarukiyimanasostene@gmail.com";

export { styleBody, addTitle, contact };
