let menuList = document.querySelector("#menu-list")
let menuBtn = document.querySelector("#menu-toggle")
const emptyState = document.getElementById("empty-state");
const libraryView = document.getElementById("library-view");
const libraryList = document.getElementById("library");

function timeAgo(date) {

    if (!date) return "Recently";
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return interval + "y ago";
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + "mo ago";
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + "d ago";
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + "h ago";
    
    if (seconds < 60) return "Just now";
    
    return Math.floor(seconds / 60) + "m ago";
}


const themes = [
    {
        bg: "hsl(246, 100%, 44%)",
        shadow: "hsla(246, 100%, 44%, 0.30)",
        accent: "hsl(246, 100%, 48%)",
        text: "var(--light)",
        spanText: "var(--accent)"
    },
    {
        bg: "hsl(48, 100%, 44%)",
        shadow: "rgba(212, 172, 13, 0.2)",
        accent: "hsl(48, 100%, 48%)",
        text: "#1a1a1a",
        spanText: "#1a1a1a"
    },
    {
        bg: "hsl(272, 63%, 46%)",
        shadow: "rgba(123, 44, 191, 0.3)",
        accent: "hsl(272, 60%, 52%)",
        text: "var(--light)",
        spanText: "hsl(272, 63%, 46%)"
    },
    {
        bg: "hsl(3, 86%, 64%)",
        shadow: "rgba(242, 92, 84, 0.3)",
        accent: "hsl(3, 86%, 68%)",
        text: "var(--light)",
        spanText: "#f25c54"
    },
    {
        bg: "hsl(141, 73%, 42%)", 
        shadow: "rgba(29, 185, 84, 0.3)", 
        accent: "hsl(141, 60%, 48%)",
        text: "var(--light)",
        spanText: "#1db954" 
    }
];

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("is-active")
})


function displayLibrary() {
    const libraryData = JSON.parse(localStorage.getItem("memo_library")) || [];

    if (libraryData.length > 0) {

        emptyState.style.display = "none";
        libraryView.style.display = "flex";


        libraryList.innerHTML = "";

        libraryData.forEach((memo, index) => {
            const dateLabel = timeAgo(memo.dateCreated)
            const theme = themes[index % themes.length];
            const cardHTML = `
                <li style="--card-color: ${theme.bg}; --card-shadow: ${theme.shadow}; --card-accent: ${theme.accent}; color: ${theme.text}">
                    <div class="card-top">
                        <h2>${memo.name}</h2>
                        <button class="delete-btn" data-id="${memo.id}">
                            <img src="images/trash.svg" alt="Trash">
                        </button>
                    </div>
                    <p>${memo.summary}</p>
                    <div class="card-bottom">
                        <span style="color: ${theme.spanText}">${dateLabel}</span>
                        <span>${memo.code}</span>
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