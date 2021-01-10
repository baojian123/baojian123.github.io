var formName = document.querySelector("#form__content--name>input");
formName.oninput = formName.onblur = function(event) {
  let content = this.value;
  if(!content){
    this.classList.add("error");
    return false;
  }else{
    this.classList.remove("error");
    return true;
  }
}
var formEmail = document.querySelector("#form__content--email>input");
formEmail.oninput = formEmail.onblur = function(event) {
  let content = this.value;
  let reg = /([\w0-9.-])+@[\w.]+\.([a-zA-z]{2,5})/gi;
  if(!content.match(reg)){
    this.classList.add("error");
    return false;
  }else{
    this.classList.remove("error");
    return true;
  }
}
var formMsg = document.querySelector("#form__content--message>textarea");
formMsg.oninput = formMsg.onblur = function(event) {
  let content = this.value;
  if(!content){
    this.classList.add("error");
    return false;
  }else{
    this.classList.remove("error");
    return true;
  }
}

function verifyForm(e) {
  e.preventDefault()
  var recaptchaRes = grecaptcha.getResponse()
  if(!recaptchaRes){
    //google recaptcha verification failed, return a error
    document.querySelector(".g-recaptcha").classList.add("error");
    //set 0.1s to let the error msg displayed in the window.
    setTimeout(function(){
      alert("Please pass the recaptcha first.")
    },100)
  }else{
    document.querySelector(".g-recaptcha").classList.remove("error");
    setTimeout(function(){
      let flag = 1
      if(!formName.oninput()&&flag){
        alert("Name could not be empty, plz try again!");
        flag=0;
      }if(!formEmail.oninput()&&flag){
        alert("Email format error, plz enter a valid email!");
        flag=0;
      }if(!formMsg.oninput()&&flag){
        alert("Message could not be empty. Don't send junk mail. \nPlz try again!");
        flag=0;
      }if(flag){
        var url = "https://vxyxrena6l.execute-api.us-east-1.amazonaws.com/default/sesMailServer?from="+formEmail.value+"&name="+formName.value+"&msg="+formMsg.value;
        var req = new XMLHttpRequest();
        req.addEventListener("load",function(){
          alert(this.responseText)
        })
        req.open("GET",url);
        req.send()
        // alert("Message Sent Successfully!")
      }
    },100)
  }
}

var form = document.querySelector("#contact__form>form");
form.onsubmit = verifyForm
