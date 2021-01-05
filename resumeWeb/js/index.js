const navigationList = [{
  id:"home",
  title:"Home"
},{
  id:"resume",
  title:"Resume",
},{
  id:"contact",
  title:"Contact",
},{
  id:"about",
  title:"About",
}]

function NavItem(navObj){
  let navigationItem = document.createElement("li");
  navigationItem.classList.add("navigation__item");
  link = document.createElement("a");
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
  navigationList.forEach((item,key)=>{
    let sect = document.createElement("section");
    sect.id = item.id;
    sect.classList.add("page");
    sect.textContent=item.title;
    pageLoader.append(sect)
    navigationItem = NavItem(item);
    navigation.append(navigationItem);
  })
  //due to the for loop, we need to push the action setting homepage into setTimeout
  // setTimeout(function(){
  //   let pageList = document.querySelectorAll(".page");
  //   pageList[0].className= "page current"
  // },0)
  routeSwitch()
  main()
}

var flag = 0
var console = document.querySelector(".console")
var collapse = document.querySelector(".collapse")
function footer(){
  if(flag){
    console.style.height="0px";
    collapse.classList.remove("show");
  }else{
    console.style.height="100px";
    collapse.classList.add("show");
  }
  flag^=1
}


window.onload = initRoute
window.onhashchange = routeSwitch
