class Display {
    #display = null
    constructor() {
        this.#display = document.querySelector(".calc-display")
    }
    clearDisplay() {
        this.#display.textContent = '';
    }

}
