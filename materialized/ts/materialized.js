// Usage
// Add 'ripple-ink' class to affect element with ripple-ink effect
// Add 'data-rc="#fff"' to change ripple ink color
// Known issues: display flex (clientY/clientX falls a bit)
window.onload = function () {
    initInputs();
    initButtons();
};
function ripple(e) {
    // Getting the div that the effect is relative to
    var box = this.lastElementChild, 
    // Creating the effect's div
    create = document.createElement('div'), 
    // Getting the button's size, distance to top and left
    boxWidth = box.offsetWidth, boxHeight = box.offsetHeight, boxY = box.getBoundingClientRect().top, boxX = box.getBoundingClientRect().left, 
    // Getting the mouse position
    mouseX = e.clientX, mouseY = e.clientY, 
    // Mouse position relative to the box
    rippleX = mouseX - boxX, rippleY = mouseY - boxY, 
    // Calculate which is the farthest corner
    rippleWidth = boxWidth / 2 < rippleX
        ? rippleX
        : boxWidth - rippleX, rippleHeight = boxHeight / 2 < rippleY
        ? rippleY
        : boxHeight - rippleY, 
    // Distance to the farest corner
    boxSize = Math.sqrt(Math.pow(rippleWidth, 2) +
        Math.pow(rippleHeight, 2)), 
    // Getting the custom background value
    color = this.getAttribute('data-rc'), 
    // Getting the custom Z-Index value
    zIndex = this.getAttribute('data-rzi'), 
    // Getting the button computed style
    thisStyle = window.getComputedStyle(this);
    // Creating and moving the effect div inside the button
    box.appendChild(create);
    // Ripple style (size, position, color and border-radius)
    create.setAttribute('data-re', 'e');
    create.style.height = 2 * boxSize + 'px';
    create.style.width = 2 * boxSize + 'px';
    create.style.top = mouseY - boxY - boxSize + 'px';
    create.style.left = mouseX - boxX - boxSize + 'px';
    create.style.backgroundColor = color;
    box.style.borderTopLeftRadius =
        thisStyle.getPropertyValue('border-top-left-radius');
    box.style.borderTopRightRadius =
        thisStyle.getPropertyValue('border-top-right-radius');
    box.style.borderBottomLeftRadius =
        thisStyle.getPropertyValue('border-bottom-left-radius');
    box.style.borderBottomRightRadius =
        thisStyle.getPropertyValue('border-bottom-right-radius');
    box.style.zIndex = zIndex;
    // Delete  div after animation finished
    setTimeout(function () {
        box.removeChild(create);
    }, 800);
}
function initButtons() {
    var rippleEls = document.getElementsByClassName("ripple-ink");
    for (var i = 0; i < rippleEls.length; i++) {
        var div = document.createElement('div');
        rippleEls[i].addEventListener('mousedown', ripple);
        rippleEls[i].appendChild(div);
        div.setAttribute('data-re', 'b');
    }
}
function initInputs() {
    var materializedInputs = document.getElementsByClassName("md-input-container");
    var _loop_1 = function (i) {
        var input = materializedInputs[i].querySelector("input");
        if (input.value !== "")
            materializedInputs[i].classList.add("focused");
        input.addEventListener("focus", function () {
            materializedInputs[i].classList.add("focused");
        });
        input.addEventListener("focusout", function () {
            if (input.value === "")
                materializedInputs[i].classList.remove("focused");
        });
    };
    for (var i = 0; i < materializedInputs.length; i++) {
        _loop_1(i);
    }
}
//# sourceMappingURL=materialized.js.map