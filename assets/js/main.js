function inputSearch() {
    var input, filter, listBox, category, a, i, txtValue;
    input = document.getElementById("categorySearch");
    filter = input.value.toUpperCase();
    listBox = document.getElementById("listBox");
    category = listBox.getElementsByClassName("col-lg-4");
    for (i = 0; i < category.length; i++) {
        a = category[i].getElementsByTagName("strong")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            category[i].style.display = "";
        } else {
            category[i].style.display = "none";
        }
    }
}
function selectChange() {
    var select, filter, listBox, category, a, i, txtValue;
    select = document.getElementById("categorySelect");
    filter = select.value.toUpperCase();
    listBox = document.getElementById("listBox");
    category = listBox.getElementsByClassName("col-lg-4");
    for (i = 0; i < category.length; i++) {
        a = category[i].getElementsByTagName("strong")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            category[i].style.display = "";
        } else {
            category[i].style.display = "none";
        }
    }
}