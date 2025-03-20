class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `


<!-- <footer>some footer content</footer> -->

            `;
    }
  }
  
  customElements.define('footer-component', Footer);