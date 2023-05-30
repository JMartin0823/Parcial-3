import { addObserver, appState } from "../../store/index";
import styles from "./Recipe.css"

class Recipe extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML="";

        appState.products.forEach((c)=> {
        const pContainer = this.ownerDocument.createElement('section');
        const pTitle = this.ownerDocument.createElement('h3');
        pTitle.textContent = c.name; 

        const pingredients = this.ownerDocument.createElement('h3');
        pingredients.textContent = c.ingredients; 

        const pinstructions = this.ownerDocument.createElement('h3');
        pinstructions.textContent = c.instructions; 

        pContainer?.appendChild(pTitle);
        pContainer?.appendChild(pingredients);
        pContainer?.appendChild(pinstructions);
        this.shadowRoot?.appendChild(pContainer);

        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
      
        })
    
    }
}

customElements.define('Recipe-list', Recipe)
export default Recipe;