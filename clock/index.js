class Clock extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <section class="clock container">
            <div class="clock__container grid">
                <div class="clock__content grid">
                    <div class="clock__circle">
                        <span class="clock__twelve"></span>
                        <span class="clock__three"></span>
                        <span class="clock__six"></span>
                        <span class="clock__nine"></span>
                        <div class="clock__rounder"></div>
                        <div class="clock__hour" id="clock-hour"></div>
                        <div class="clock__minutes" id="clock-minutes"></div>
                        <div class="clock__seconds" id="clock-seconds"></div>
                        <!-- Dark/light button -->
                        <div class="clock__theme">
                            <i class='bx bxs-moon' id="theme-button"></i>
                        </div>
                    </div>
                    <div>
                        <div class="clock__text">
                            <div class="clock__text-hour" id="text-hour"></div>
                            <div class="clock__text-minutes" id="text-minutes"></div>
                            <div class="clock__text-ampm" id="text-ampm"></div>
                        </div>
                        <div class="clock__date">
                            <!-- <span id="date-day-week"></span> -->
                            <span id="date-day"></span>
                            <span id="date-month"></span>
                            <span id="date-year"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define("my-clock", Clock);
