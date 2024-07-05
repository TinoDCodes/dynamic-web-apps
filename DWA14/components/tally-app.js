import { LitElement, html, css } from "../libs/lit-html.js";

class App extends LitElement {
  static properties = {
    count: { type: String },
  };

  static styles = css`
    .title {
      font-size: 4rem;
      color: #ce7d2d;
    }

    .message {
      display: none;
      color: #007c49;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .tally_count {
      background-color: #09222a83;
      border-radius: 0.5rem;
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
      width: 30%;
    }

    .reset_button_wrapper {
      align-items: center;
      justify-content: center;
      text-align: center;
      border: 1px solid #aaaaaa5f;
      width: 40%;
    }

    sl-input::part(base) {
      background-color: transparent;
      border: none;
      height: fit-content;
      width: fit-content;
    }

    sl-input::part(input) {
      color: #007c49;
      text-align: center;
      height: 20rem;
      width: 35rem;
      font-size: 8rem;
      font-weight: 700;
    }

    sl-button.tally_button::part(base) {
      --sl-input-height-medium: 7rem;

      border: none;
      font-size: 2.5rem;
      font-weight: 400;
      color: #cccc;

      background-color: transparent;
    }

    sl-button.tally_button::part(base):hover {
      color: #ccc;
      scale: 0.95;
    }
  `;

  constructor() {
    super();
    this.count = "0";
  }

  handleAdd() {
    this.count++;
    console.log(this.count);
  }

  /** @returns {any} */
  render() {
    return html`<div>
      <h1 class="title">Tally Count</h1>

      <p class="message" data-message>Count has been reset!</p>

      <sl-input
        type="number"
        part="count_display"
        readonly
        noSpinButtons
        value=${this.count}
        data-count
      ></sl-input>
      <section class="tally_count">
        <div class="controls">
          <div class="button_wrapper">
            <sl-button class="tally_button" variant="default" data-subtract>
              <sl-icon name="dash-lg" label="Settings"></sl-icon>
            </sl-button>
          </div>

          <div class="button_wrapper">
            <sl-button class="tally_button" variant="default">
              <sl-icon name="plus-lg" label="Settings"></sl-icon>
            </sl-button>
          </div>

          <div class="reset_button_wrapper">
            <sl-button class="tally_button" variant="default" data-reset>
              RESET
            </sl-button>
          </div>
        </div>
      </section>
    </div>`;
  }
}

customElements.define("tally-app", App);
