export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML()

        this.el = {
            minutes: root.querySelector(".timer-part-minutes"),
            seconds: root.querySelector(".timer-part-seconds"),
            start: root.querySelector(".timer-btn-start"),
            reset: root.querySelector(".timer-btn-reset")
        }

        this.interval = null
        this.remainingSeconds = 90

        this.el.start.addEventListener("click", () => {
            if (this.interval === null) {
                this.start()
            }
            else {
                this.stop()
            }
        })

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes")

            if (inputMinutes < 60) {
                this.stop()
                this.remainingSeconds = inputMinutes * 60
                this.updateInterfaceTime()
            }
        })
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60)
        const seconds = this.remainingSeconds % 60

        this.el.minutes.textContent = minutes.toString().padStart(2, "0")
        this.el.seconds.textContent = seconds.toString().padStart(2, "0")
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.start.innerHTML = `<i class="fa-solid fa-play"></i>`
            this.el.start.classList.add("timer-btn-start")
            this.el.start.classList.remove("timer-btn-stop")
        }
        else {
            this.el.start.innerHTML = `<i class="fa-solid fa-pause"></i>`
            this.el.start.classList.add("timer-btn-stop")
            this.el.start.classList.remove("timer-btn-start")
        }
    }

    start() {
        if (this.remainingSeconds === 0) return

        this.interval = setInterval(() => {
            this.remainingSeconds--
            this.updateInterfaceTime()

            if (this.remainingSeconds === 0) {
                this.stop()
            }
        }, 1000)

        this.updateInterfaceControls()
    }

    stop() {
        clearInterval(this.interval)

        this.interval = null

        this.updateInterfaceControls()
    }

    static getHTML() {
        return `
        <span class="timer_part timer-part-minutes">00</span>
        <span class="timer_part">:</span>
        <span class="timer_part timer-part-seconds">00</span>
        <button type="button" class="timer_btn timer-btn-start"><i class="fa-solid fa-play"></i></button>
        <button type="button" class="timer_btn  timer-btn-reset"><i class="fa-regular fa-clock"></i></button>
        `
    }
}

