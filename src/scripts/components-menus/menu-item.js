class MenuItems extends HTMLElement{

  set dataItem(data){
    this._dataItem = data;
    this.render();
  }

  render(){
    const dataItem = this._dataItem;
    this.innerHTML = `
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      article{
        width: 100%;
      }
      img{
        width: 100%;
      }
    </style>
    <article>
      <img src=${dataItem.pictureId} alt="image desc">
      <div class="content">
        <h1 class="title">${dataItem.name}</h1>
        <h2>${dataItem.city}</h2>
        <h3>${dataItem.rating}</h3>
        <p class="desc">${dataItem.description.substring(0,200)}</p>
      </div>
    </article>
    `
  }
}

customElements.define('menu-item', MenuItems);