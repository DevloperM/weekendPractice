let myTextbox = document.querySelector("input");
myTextbox.addEventListener("keydown", handleInputBoxEnterKey);

let myButton = document.querySelector("button");
myButton.addEventListener("click", handleJokeButton);

function addMsg() {
  let c = document.querySelector("#chatbox");

  //Create Message div block
  let m = document.createElement("div");
  m.className = "message";
  m.id = c.childElementCount + 1;

  /**************************************** */
  let tim = document.createElement("span");
  tim.innerHTML = getCurrentTime();
  m.appendChild(tim);

  /**************************************** */
  let nam = document.createElement("span");
  nam.className = "sender";
  nam.innerHTML = getRandomName();
  m.appendChild(nam);
  /**************************************** */
  let msg = document.createElement("span");
  let x = document.querySelector("input");
  msg.innerHTML = x.value; //todo: replace with text
  m.appendChild(msg);
  /**************************************** */
  let del = document.createElement("span");
  del.className = "delete";
  del.innerHTML = "❌"; //todo: add event
  del.addEventListener("click", deleteMsg);
  m.appendChild(del);

  /**************************************** */
  c.appendChild(m); //add to chatbox
}

function deleteMsg() {
  let c = document.querySelector("#chatbox");
  c.removeChild(event.path[1]);
}

function handleJokeButton() {
  //console.log("add jokes");

  fetch("https://api.icndb.com/jokes/random")
    .then((r) => r.json())
    .then((data) => {
      let joke = data.value.joke;

      let c = document.querySelector("#chatbox");

      //Create Message div block
      let m = document.createElement("div");
      m.className = "message";
      m.id = c.childElementCount + 1;

      /**************************************** */
      let tim = document.createElement("span");
      tim.innerHTML = getCurrentTime();
      m.appendChild(tim);
      /**************************************** */
      let nam = document.createElement("span");
      nam.className = "sender";
      nam.innerHTML = "Fact";
      m.appendChild(nam);
      /**************************************** */
      let msg = document.createElement("span");
      msg.innerHTML = joke; //todo: replace with text
      m.appendChild(msg);
      /**************************************** */
      let del = document.createElement("span");
      del.className = "delete";
      del.innerHTML = "❌"; //todo: add event
      del.addEventListener("click", deleteMsg);
      m.appendChild(del);

      /**************************************** */

      c.appendChild(m); //add to chatbox
    });
}

function handleInputBoxEnterKey() {
  if (event.key == "Enter") {
    event.preventDefault();
    addMsg();
    let x = document.querySelector("input");
    x.value = "";
  }
}

function getRandomName() {
  //return Me, Myself or I
  let names = ["I", "Me", "Myself"];
  let i = Math.floor(Math.random() * 3);
  let ans = names[i];
  return ans;
}

function getCurrentTime() {
  let dt = new Date();
  let h = dt.getHours();
  let m = dt.getMinutes();

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  let ans = h + ":" + m;
  return ans;
}
