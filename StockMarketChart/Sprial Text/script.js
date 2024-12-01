// const words = "Ubaid is super cool"; //add more words
const words = "ubaid is super cool"
const ANIMATION_DURATION = 4000;

//seprate each charater into it's own div
const charater = words.split("").forEach((char, i) => {
    function createElement(offset) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.innerText = char
        div.classList.add("charater")

        // negative animation delay prevents waiting to start the animation
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`
        return div
    }

    document.getElementById("spiral").appendChild(createElement(0))
    document.getElementById("spiral2").appendChild(createElement(-1 * (ANIMATION_DURATION / 2)))
});
