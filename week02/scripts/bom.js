const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

function addChapter() {
    if ((input.value.trim() == '')) {
        input.focus();
    }
    else {
        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", function () {
			list.removeChild(li);
			input.focus();
		});

        li.append(deleteBtn)
        list.append(li)

        input.value = '';
        input.focus();
    }
}

button.addEventListener("click", addChapter);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addChapter();
    }
});