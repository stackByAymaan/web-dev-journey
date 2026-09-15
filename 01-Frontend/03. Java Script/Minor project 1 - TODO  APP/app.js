let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function () {
     let item = document.createElement("li");
      item.innerText = inp.value;

     let delBtn = document.createElement("button");
     delBtn.innerText = "delete";
     delBtn.classList.add("delete");

     item.appendChild(delBtn);

      ul.appendChild(item);
    //   console.log(inp.value);
      inp.value = "";
});


// let delBtns = document.querySelectorAll(".delete");

// for (let delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//         // console.log("element deleted");
//     });
// }
