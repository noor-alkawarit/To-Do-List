const ulElement = document.getElementById("list");
const body = document.getElementsByTagName("body").item(0); //<body>append</body>
const input = document.getElementById("listInput")

//Press button => runs this function
function addItem () {

  //get input value
  const data = input.value.trim();

  //check if input value == ""
  if(data == ""){
    //input value is empty, exit function
    return;
  }

  const li = document.createElement("li")
  // li.className = "cssClass"
  const text = document.createElement("p")
  text.innerText = data
  const button = document.createElement("button")
  button.addEventListener ("click", (e) => deleteItem(e))
  button.innerText = "delete"

  //append text to li
  li.appendChild(text)
  //append button to li
  li.appendChild(button)

  ulElement.appendChild(li)
  // reset input field
  input.value = ""
}

function deleteItem(event){
  //runs when we press delete button on Li  
  //which li to delete?
  const li = event.target.closest("li");
  const ul = li.closest("ul");
  const ulChildren = Array.from(ul.children);
  const index = ulChildren.indexOf(li);
  ul.removeChild(ul.children[index])
}