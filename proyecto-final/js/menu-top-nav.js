import { LitElement, html} from 'lit-element';


class MenuTopNav  extends LitElement {
 
  createRenderRoot(){
    return this;
  }
  
  render() {
    return html`
    <!--Top nav-->
    <nav class="z-depth-0">
    <div class="nav-wrapper container">
      <a href="/">Food<span>Ninja</span></a>
      <span @click = ${this.showRt} class="right grey-text text-darken-1">
        <i class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
      </span>
    </div>
  </nav>
    `;
  }
  
  showRt(){
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});
  }

}

customElements.define('menu-top-nav', MenuTopNav);