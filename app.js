let myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
  let newSpan = document.createElement("SPAN");
  let x = document.createTextNode("\u00D7");
  newSpan.className = "close";
  newSpan.appendChild(x);
  myList[i].appendChild(newSpan);
}

let hapus = document.getElementsByClassName("close");
for (let i = 0; i < hapus.length; i++) {
  hapus[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

function newList() {
  let list = document.createElement("li");
  let todoValue = document.getElementById("toDoInput").value;
  let text = document.createTextNode(todoValue);
  list.appendChild(text);

  if (todoValue === "") {
    alert("Tambahkan list pekerjaanmu hari ini");
  } else {
    document.getElementById("listTodo").appendChild(list);
  }
  document.getElementById("toDoInput").value = "";

  let newSpan = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  newSpan.className = "close";
  newSpan.appendChild(txt);
  list.appendChild(newSpan);

  for (let i = 0; i < hapus.length; i++) {
    hapus[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var span = document.getElementById("clock");

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m;
}

setInterval(time, 1000);
