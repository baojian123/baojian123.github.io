function unfold(obj){
  tips = obj.parentNode.getElementsByClassName("tips")[0]
  tips.style.display="block"
  tips.style.opacity=1
}
function collapse(obj){
  tips = obj.parentNode.getElementsByClassName("tips")[0]
  tips.style.display="none"
  tips.style.opacity=0
}
