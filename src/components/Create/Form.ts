import { dispatch } from "../../store/index";
import { saveProduct } from "../../store/action";
import { Recipe } from "../../types/products";
import styles from "./Form.css"

 const userInput: Recipe ={
    name:"",
    ingredients:"",
    instructions:"",
 }
 
 class Form extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lName = this.ownerDocument.createElement("label")
        lName.textContent ="Name";
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change",(s: any)=>{
            console.log (s.target.value);
            userInput.name = s.target.value;
        }) 
        const lIngredients = this.ownerDocument.createElement("label")
        lIngredients.textContent ="Name";
        const ingredients = this.ownerDocument.createElement('input');
        ingredients.addEventListener("change",(s: any)=>{
        console.log (s.target.value);
        userInput.ingredients = s.target.value;
        }) 
        const lInstructions = this.ownerDocument.createElement("label")
        lName.textContent ="Name";
        const instructions = this.ownerDocument.createElement('input');
        lInstructions.textContent ="Ingredients"
        instructions.addEventListener("change",(s: any)=>{
            userInput.instructions = s.target.value;
        }) 
        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Publish"
        btn.addEventListener("click", async () => {
            console.log(userInput)
            dispatch(await saveProduct(userInput))
        });


        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lIngredients);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(lInstructions);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(btn);

        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
    }
}

customElements.define('app-form', Form)

export default Form;