function changeHref(){
  let path = "/testSite/src/templates/";
  document.getElementById("main").href       =        "/testSite/";
  document.getElementById("perception").href = path + "perception/";
  document.getElementById("singing").href    = path + "singing/";
  document.getElementById("musicActiv").href = path + "musicActiv/";
  document.getElementById("gamesDMI").href   = path + "gamesDMI/";
  document.getElementById("gamesActiv").href = path + "gamesActiv/";
  document.getElementById("quest").href      = "";
  document.getElementById("archive").href    = path + "archive/";
  document.getElementById("contact").href    = "";

}

function openMenuList(mainPage = 0) {
  let path = "../../../src/pict/";
  if(mainPage) {
    path = "/testSite/src/pict/";
  }
  document.querySelector('.menuList').style.display = 'block';
  if(document.querySelector('#menuCheckBox').checked == true) {
    document.querySelector('#menuCheckBox').checked = false;
    document.querySelector('#imgMenu').src = path + "menu.png";
    document.querySelector('.menuList').style.display = "none";
  } else {
    document.querySelector('#menuCheckBox').checked = true;
    document.querySelector('#imgMenu').src = path + "close.png";
    document.querySelector('.menuList').style.display = "block";
  
  }
  console.log(document.querySelector('#menuCheckBox').checked);
}