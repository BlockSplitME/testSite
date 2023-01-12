function createMenu() {

}
function changeHref(){
  let path = "/testSite/src/templates/";
  document.getElementById("main").href       =        "/testSite/";
  document.getElementById("perception").href = path + "perception/";
  document.getElementById("singing").href    = path + "singing/";
  document.getElementById("musicActiv").href = path + "musicActiv/";
  document.getElementById("gamesDMI").href   = path + "gamesDMI/";
  document.getElementById("gamesActiv").href = path + "gamesActiv/";
  document.getElementById("quest").href      = path + "questioning/";
  document.getElementById("archive").href    = path + "archive/";
  document.getElementById("contact").href    = path + "contact/";
}