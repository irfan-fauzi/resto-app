import './menu-list.js';
const data = require('../../DATA.json');

//console.log(data)

const loadData = () => {
  const listMenu = document.querySelector('list-menu');
  window.addEventListener("DOMContentLoaded", function(){
    listMenu.dataMenu = data;
  })
}

export default loadData;