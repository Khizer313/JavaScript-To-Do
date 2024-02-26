var btn = document.querySelector("#btn");
var items = document.querySelector("#items");

btn.addEventListener("click", function () {
  var input_no = document.querySelector("#input_no").value;
  var input_text = document.querySelector("#input_text").value;

  var newItem = document.createElement("span");
  newItem.classList.add("spn");
  newItem.innerHTML = `<b>${input_no}</b> <cite> ${input_text}</cite> <a class="item_icon"><i class='bx bx-minus-circle'></i></a>`;
  items.appendChild(newItem);
  newItem.querySelector(".item_icon").addEventListener("click", function () {
    newItem.remove();
  });
});
