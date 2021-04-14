class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Gomez Martinez Carlos Alberto`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
