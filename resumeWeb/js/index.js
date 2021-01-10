const navigationList = [{
  id:"resume",
  title:"Resume",
},{
  id:"about",
  title:"About"
},{
  id:"contact",
  title:"Contact",
},{
  id:"blog",
  title:"Blog",
}]
var navShowed = 0
function showNavigation(){
  let sideNav = document.querySelector(".navigation__list");
  if(navShowed){
    sideNav.classList.remove("show");
  }else{
    sideNav.classList.add("show");
  }
  navShowed^=1;
}

var option = document.querySelector(".navigation__option");
option.onclick = showNavigation;
function initMap() {
  // The location of my address
  const myAddress = { id:"306",lat: -33.800384, lng: 151.176985 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myAddress,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: myAddress,
    map: map,
  });
}

function NavItem(navObj){
  let navigationItem = document.createElement("li");
  navigationItem.classList.add("navigation__item");
  let link = document.createElement("a");
  link.href = "#"+navObj["id"];
  link.textContent = navObj["title"]
  navigationItem.append(link)
  return navigationItem
}

function routeSwitch(){
  //getting current page
  let currentPage = document.querySelector(".current");
  let targetPage;
  //if hash is not null, locate target page via getting hash value
  if(location.hash){
     targetPage = document.querySelector(location.hash);
  }else{
    let defaultPage = document.querySelectorAll(".page")[0];
    defaultPage.classList.add("current");
    let defaultActive = document.querySelectorAll(".navigation__item")[0];
    setTimeout(function(){
      defaultActive.querySelector("a").classList.add("active");
    },0)
  }
  // if target has been already current page, we don't need to reload.
  // we only reload different page
  if(currentPage!=targetPage){
    //firstly, we remove the previous current page
    if(currentPage){
      currentPage.classList.remove("current");
      let activeItem = document.querySelector(".active");
      activeItem.classList.remove("active");
    }
    //and check whether the hash value is null
    if(targetPage){
      targetPage.classList.add("current");
      document.querySelector("[href='"+location.hash+"']").classList.add("active");
    }else{
      //exception hash value, should be 404 not Found Page
      // document.querySelector(".page").classList.add("current");
    }
  }
}

function initRoute(){
  let pageLoader = document.querySelector("#page-loader");
  let navigation = document.querySelector(".navigation__list");
  let sections = document.querySelectorAll("section");
  navigationList.forEach((item,key)=>{
    // let sect = sections[key]
    // sect.id = item.id;
    // sect.classList.add("page");
    let navigationItem = NavItem(item);
    navigation.append(navigationItem);
  })
  //due to the for loop, we need to push the action setting homepage into setTimeout
  // setTimeout(function(){
  //   let pageList = document.querySelectorAll(".page");
  //   pageList[0].className= "page current"
  // },0)
  document.body.onscroll = function(){
    let scroll;
    let navigation = document.querySelector(".navigation")
    if(window.pageYOffset){
      scroll = window.pageYOffset
    }else if(document.body.scrollTop){
      scroll = document.body.scrollTop
    }
    if(!scroll){
      navigation.classList.add("top")
    }else{
      navigation.classList.remove("top")
    }
  }
  routeSwitch()
  initMap()
  bindMVVM()
}

var flag = 0
var footer = document.querySelector(".console")
var collapse = document.querySelector(".collapse")
function footerShow(){
  if(flag){
    footer.style.height="0px";
    collapse.classList.remove("show");
  }else{
    footer.style.height="100px";
    collapse.classList.add("show");
  }
  flag^=1
}

initRoute()
window.onhashchange = routeSwitch
