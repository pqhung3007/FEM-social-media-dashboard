const switchBtn = document.getElementById('switch')

switchBtn.addEventListener("change", () => {
    if (switchBtn.checked) {
        switchBackground();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        switchBackground();
        document.documentElement.setAttribute("data-theme", "light");
    }
});

const switchBackground = () => {
    console.log(document.documentElement);
    document.documentElement.classList.add("transition");
    // window.setTimeout(() => {
    //     document.documentElement.classList.remove("transition");
    // }, 1000);
};