function tema() {
    const perfilLight = document.querySelector(".layout-light");
    const perfilDark = document.querySelector(".layout-dark");

    if(perfilLight.style.display === "none"){
        perfilLight.style.display = "flex";
        perfilDark.style.display = "none";
    } else {
        perfilLight.style.display = "none";
        perfilDark.style.display = "flex";
    }
}