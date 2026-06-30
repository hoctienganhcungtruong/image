// minify for fast load

function doSearch() {
    const query = document.getElementById("searchBox").value.trim();
    if (!query) return;

    window.location.href =
        "http://backroomsneverend.wikidot.com/search:site/q/" +
        encodeURIComponent(query);
}

document.getElementById("searchBtn").onclick = doSearch;

document.getElementById("searchBox").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        doSearch();
    }
});
