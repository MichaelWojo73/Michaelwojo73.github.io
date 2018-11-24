function jsDropDown(newimg) {
    document.getElementById(imgid).scr="/images/" + newimg + ".gif";
}

let headerButton = document.getElementById('Projects');
headerButton.addEventListener('change', (event) => {
    jsDropDown(event.currentTarget.value);
});