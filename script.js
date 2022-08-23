const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", (event) => {
    const spanEl = document.createElement("span");
    bodyEl.appendChild(spanEl);

    const positionX = event.pageX // mouse position on X axis
    const positionY = event.pageY; // mouse position on Y axis

    spanEl.style.left = positionX + "px";
    spanEl.style.top = positionY + "px";

    const sizeLeaf = Math.random() * 100;
    spanEl.style.width = sizeLeaf + "px";
    spanEl.style.height = sizeLeaf + "px";

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});