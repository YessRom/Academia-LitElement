import { LitElement, html, css } from 'lit';

class MenuSide extends LitElement {
    
    createRenderRoot(){
      return this;
    }

    render() {
        return html`
        <!--Side nav--> 
        <ul id="side-menu" class="sidenav side-menu">
          <li><a class="subheader">FOODNINJA</a></li>
          <li><a href="/" class="waves-effect">Home</a></li>
          <li><a href="/pages/about.html" class="waves-effect">About</a></li>
          <li><div class="divider"></div></li>
          <li><a href="/pages/contact.html" class="waves-effect">
          <i class="material-icons">mail_outline</i>Contact</a>
          </li>
        </ul> `;
    }
}
customElements.define('menu-side', MenuSide);
