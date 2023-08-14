function addList() {
    const input = document.getElementById("inputText");
    const inputValue = input.value.trim();
    
    if (inputValue !== "") {
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        
        const taskText = document.createTextNode(inputValue);
        li.appendChild(taskText);
        
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-times";
        deleteIcon.style.cursor = "pointer";
        deleteIcon.addEventListener("click", function() {
            ul.removeChild(li);
        });
        
        li.appendChild(deleteIcon);
        ul.appendChild(li);
        input.value = "";
    }
}