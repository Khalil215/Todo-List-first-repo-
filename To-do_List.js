let input = document.getElementById("list")
let indList = document.getElementById("indList")
let btn = document.getElementById("btn")
let clearBtn = document.getElementById("clearbtn")


function addActivityToList() {

  if (input.value.length > 0) {
    create() // to make sure an empty list isnt added
  }

  function create() {
    let li = document.createElement("p");

    let rembtn = document.createElement("button");
    rembtn.append("Remove");

    li.append(document.createTextNode(input.value), rembtn);//Add the li and rembtn
    indList.appendChild(li);

    input.value = ""; // reset input

    //Highlighting the completed task
    function highlight() {
      li.style.backgroundColor = "#51DF70"
      li.style.color = "#00891E"
    }

    li.addEventListener("click", highlight)

    //Removing the item from list
    rembtn.addEventListener("click", () => {
      li.remove()
    })

    //Clear all items
    clearBtn.addEventListener("click", () => { li.remove() })
  }

}

function pressEnter() {
  if (event.which === 13) { //this now looks to see if you hit "enter"/"return"
    addActivityToList();
  }
}




input.addEventListener("keypress", pressEnter);
btn.addEventListener("click", addActivityToList)



