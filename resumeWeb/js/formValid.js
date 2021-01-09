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
    if(!formName.oninput()){
      alert("Name could not be empty, plz try again!")
    }else if(!formEmail.oninput()){
      alert("Email format error, plz enter a valid email!")
    }else if(!formMsg.oninput()){
      alert("Message could not be empty. Don't send junk mail. \nPlz try again!")
    }else{
      alert("Message Sent Successfully!")
    }
  }
}

var form = document.querySelector("#contact__form>form");
form.onsubmit = verifyForm
