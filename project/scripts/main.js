let menuList = document.querySelector("#menu-list")
let menuBtn = document.querySelector("#menu-toggle")
const emptyState = document.getElementById("empty-state");
const libraryView = document.getElementById("library-view");
const libraryList = document.getElementById("library");

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("is-active")
})


function displayLibrary() {
    const libraryData = JSON.parse(localStorage.getItem("memo_library")) || [];

    if (libraryData.length > 0) {

        emptyState.style.display = "none";
        libraryView.style.display = "flex";


        libraryList.innerHTML = "";

        libraryData.forEach((memo) => {
            const cardHTML = `
                <li>
                    <div class="card-top">
                        <h2>${memo.name}</h2>
                        <button class="delete-btn" data-id="${memo.id}">
                            <img src="images/trash.svg" alt="Trash">
                        </button>
                    </div>
                    <p>${memo.summary}</p>
                    <div class="card-bottom">
                        <span class="question-count">0 questions</span>
                        <span class="module-code">${memo.code}</span>
                    </div>
                </li>
            `;
            
            libraryList.innerHTML += cardHTML;
        });
    } else {

        emptyState.style.display = "contents";
        libraryView.style.display = "none";
    }
}

document.getElementById("library").addEventListener("click", (e) => {
    let clickedElement = e.target;
    const deleteButton = clickedElement.closest('.delete-btn');

    if (deleteButton) {
        let dataID = Number.parseInt(deleteButton.getAttribute("data-id"))

        const memoLibrary = JSON.parse(localStorage.getItem("memo_library"))

        const updatedList = memoLibrary.filter(item => item.id !== dataID);

        localStorage.setItem("memo_library", JSON.stringify(updatedList));
        displayLibrary();
    }
})

displayLibrary()