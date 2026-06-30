// minify for fast load

function doSearch() {
    const query = document.querySelector(".search-box").value.trim();
    if (!query) return;

    window.open(
        "http://backroomsneverend.wikidot.com/search:site/q/" +
        encodeURIComponent(query),
        "_blank"
    );
}

document.getElementById("searchBtn").onclick = doSearch;

document.getElementById("searchBox").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        doSearch();
    }
});
