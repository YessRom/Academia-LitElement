import { LitElement, html, css } from 'lit';

class MenuRecipes extends LitElement {

    createRenderRoot(){
        return this;
    }

    render() {
        return html`
        <div class="recipes container grey-text text-darken-1">
        <div class="card-panel recipe white row">
          <img src="/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
        <div class="card-panel recipe white row">
          <img src="/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
        <div class="card-panel recipe white row">
          <img src="/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
        <div class="card-panel recipe white row">
          <img src="/img/dish.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">Edame Noodles</div>
            <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
          </div>
          <div class="recipe-delete">
            <i class="material-icons">delete_outline</i>
          </div>
        </div>
      </div>

    <div class="center">
    <a @click = ${this.addRec} class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form"> 
      <i class="material-icons" >add</i>
    </a>
  </div> 
        `        
        ;
    }


 addRec(){
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
}

}
customElements.define('menu-recipes', MenuRecipes);
