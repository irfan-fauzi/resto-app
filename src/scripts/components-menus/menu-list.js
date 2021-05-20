import './menu-item.js';

class MenusList extends HTMLElement{

  constructor(){
    super();
    this.shadowRoot = this.attachShadow({
      mode: "open"
    })
  }

  set dataMenu(data){
    this._dataMenu = data;
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = `
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      :host{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
      }
    </style>
    
    `;
    this._dataMenu.restaurants.forEach((data, index) => {
      const menuItem = document.createElement("menu-item");
      menuItem.setAttribute("class", `menu-${index}`)
      menuItem.dataItem = data;
      this.shadowRoot.appendChild(menuItem)
    })
  }
}

customElements.define('list-menu', MenusList);