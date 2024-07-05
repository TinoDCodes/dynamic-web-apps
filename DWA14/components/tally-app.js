import { LitElement, html, css } from "../libs/lit-html.js";

/** @typedef {"MinimumReached" | "Normal" | "MaximumReached"} Phase */

const TALLY_MIN_VALUE = -7;
const TALLY_MAX_VALUE = 15;

class App extends LitElement {
  /** @type {Phase} */
  _phase = "Normal";

  static properties = {
    count: { type: Number },
    resetMsg: { type: String },
  };

  static styles = css`
    .title {
      font-size: 4rem;
      color: #ce7d2d;
      text-align: center;
    }

    .message {
      color: #007c49;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
    }

    .tally_count {
      background-color: #09222a83;
      border-radius: 0.5rem;
    }

    .count_display {
      background-color: transparent;
      border: none;
      color: #007c49;
      text-align: center;
      height: 20rem;
      width: 35rem;
      font-size: 8rem;
      font-weight: 700;
    }

    .controls {
      display: flex;
      width: 100%;
    }

    .button_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #aaaaaa5f;
      border-bottom-radius: 0.5rem;
      width: 30%;
    }

    .control_btn {
      background-color: transparent;
      height: 7rem;
      width: 100%;
      border: none;
      font-size: 4rem;
      font-weight: 400;
      color: #cccc;
    }

    .reset_btn {
      background-color: transparent;
      height: 7rem;
      width: 100%;
      border: none;
      font-size: 2rem;
      font-weight: 400;
      color: #cccc;
    }

    .left_control_btn {
      border-bottom-left-radius: 0.5rem;
    }

    .right_control_btn {
      border-bottom-right-radius: 0.5rem;
    }

    .reset_button_wrapper {
      align-items: center;
      justify-content: center;
      text-align: center;
      border: 1px solid #aaaaaa5f;
      width: 40%;
    }

    .control_btn:hover {
      color: #ccc;
      scale: 0.95;
    }
  `;

  constructor() {
    super();
    this.count = 0;
    this.resetMsg = "";
  }

  handleAdd() {
    if (this._phase === "MaximumReached") return;

    this.count++;
    if (this.count === TALLY_MAX_VALUE) {
      this._phase = "MaximumReached";
    } else {
      this._phase = "Normal";
    }
  }

  handleSubtract() {
    if (this._phase === "MinimumReached") return;

    this.count--;
    if (this.count === TALLY_MIN_VALUE) {
      this._phase = "MinimumReached";
    } else {
      this._phase = "Normal";
    }
  }

  handleReset() {
    if (this.count === 0) return;

    this.count = 0;
    this._phase = "Normal";
    this.resetMsg = "Count has been reset!";

    setTimeout(() => {
      this.resetMsg = "";
    }, 2000);
  }

  /** @returns {any} */
  render() {
    return html`<div>
      <h1 class="title">Tally Count</h1>

      <p class="message" data-message>${this.resetMsg}</p>
      

      <section class="tally_count">
        <input type="number" readonly class="count_display" value=${this.count}></input>

        <div class="controls">
          <div class="button_wrapper left_control_btn">
            <button class="control_btn" @click=${this.handleAdd}>+</button>
          </div>

          <div class="button_wrapper">
            <button class="control_btn" @click=${this.handleSubtract}>-</button>
          </div>

          <div class="reset_button_wrapper right_control_btn">
            <button class="reset_btn" @click=${this.handleReset}>RESET</button>
          </div>
        </div>
      </section>
    </div>`;
  }
}

customElements.define("tally-app", App);
