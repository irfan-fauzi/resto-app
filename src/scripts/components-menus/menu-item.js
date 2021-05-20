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
      .title{
        margin: 0.3rem 0;
        font-size: 1.2rem;
      }
      
      city{
        color:#6d7070;
        font-weight: 600;
        font-size: 1rem;
      }
      .rating{
        color: #e87109;
        font-weight: 600;
        font-size: 1rem;
      }
      @media only screen and (max-width: 868px){
        .title{
          font-size: 1rem;
        }
        .city{
          font-size: 0.8rem;
        }
        .rating{
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
        <h2 class="title">${dataItem.name}</h2>
        <div class="flex">
          <h3 class="city">${dataItem.city}</h3>
          <h4 class="rating">${dataItem.rating}</h4>
        </div>
        <p class="desc">${dataItem.description.substring(0,200)}</p>
      </div>
    </article>
    `
  }
}

customElements.define('menu-item', MenuItems);