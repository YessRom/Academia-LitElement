import { LitElement, html, css } from 'lit';

class MenuContact extends LitElement {

    createRenderRoot(){
        return this;
    }

    render() {
        return html`
        <div class="container grey-text">
            <h5 class="center">Contact Us</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
        <div class="divider"></div>
            <h6>Find us at:</h6>
                <ul>
                <li>123 Spicy Noodle Road</li>
                <li>Manchester, UK</li>
                </ul>
        </div>

        `;
    }
}
customElements.define('menu-contact', MenuContact);
