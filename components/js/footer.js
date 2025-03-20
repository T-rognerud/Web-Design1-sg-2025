class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `


<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Minecraft Builds</a>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fa-brands fa-youtube"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
      </li>
    </ul>
    <span class="navbar-text">
      Builds created by Taylor! 
    </span>
  </div>
</nav>

          `;
  }
}

customElements.define('footer-component', Footer);