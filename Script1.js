// JavaScript source code
function openTab(index) {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[index].style.display = "flex";
}
