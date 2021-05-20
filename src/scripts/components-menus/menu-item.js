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
        box-sizing: border-box;
      }
      article{
        width: 100%;
      }
      img{
        width: 100%;
      }
      .flex{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;
        background: #e4f5f2;
        border-bottom: #b3bdbb solid 1px;
        padding: 10px;
      }
      h1{
        margin: 0.3rem 0;
        font-size: 1.2rem;
      }
      h2, h3{
        font-size: 1rem;
      }
      h2{
        color:#6d7070;
        font-weight: 600;
      }
      h3{
        color: #e87109;
        font-weight: 600;
      }
      @media only screen and (max-width: 868px){
        h1{
          font-size: 1rem;
        }
        h2{
          font-size: 0.8rem;
        }
        h3{
          font-size: 0.8rem;
          
        }
        p{
          font-size: 0.9rem;
        }
      }
    </style>
    <article>
      <img src=${dataItem.pictureId} alt="image desc">
      <div class="content">
        <h1 class="title">${dataItem.name}</h1>
        <div class="flex">
          <h2>${dataItem.city}</h2>
          <h3>${dataItem.rating}</h3>
        </div>
        <p class="desc">${dataItem.description.substring(0,200)}</p>
      </div>
    </article>
    `
  }
}

customElements.define('menu-item', MenuItems);