
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

function bindMVVM(){
  var bgColor = document.querySelector("#bg-color");
  bgColor.oninput = styleBinding.bind(bgColor)("#background","backgroundColor")
  // var name = document.querySelector("#name");
  // name.oninput = contentBinding.bind(name)("#home")
}
