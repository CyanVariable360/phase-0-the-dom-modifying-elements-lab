const body = document.getElementsByTagName("body")[0];
const secondChild = body.querySelector("main:nth-child(1)");
body.removeChild(secondChild);

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory")
newHeader.textContent = ("Brighton Smith is the champion").toString();
document.body.append(newHeader);