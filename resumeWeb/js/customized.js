
function styleBinding(id,style){
  document.querySelector(id).style[style] = this.value
  return function(e){
    document.querySelector(id).style[style] = e.target.value
  }
}

function contentBinding(id){
  document.querySelector(id).textContent = this.value
  return function(e){
    document.querySelector(id).textContent = e.target.value
  }
}
function propertyBinding(id,property){
  document.querySelector(id).style.setProperty(property,this.value)
  return function(e){
    document.querySelector(id).style.setProperty(property,e.target.value)
  }
}
function attributeBinding(obj,attr){
  obj[attr] = this.value
  return function(e){
    obj[attr] = e.target.value
    console.log(obj[attr])
  }
}

function bindMVVM(){
  var bgColor = document.querySelector("#bg-color");
  bgColor.oninput = styleBinding.bind(bgColor)("#background","backgroundColor");
  // var name = document.querySelector("#name");
  // name.oninput = contentBinding.bind(name)("#home")
  var themeColor = document.querySelector("#theme-color");
  themeColor.value = "#7861da";
  // themeColor.value = "#add8e6";
  themeColor.oninput = propertyBinding.bind(themeColor)(":root","--themeColor");
  var avatar = document.querySelector("#avatar-upload")
  avatar.onchange = function(event){document.querySelector("#resume__avatar>img").src = URL.createObjectURL(event.target.files[0]);}
}
