

let eye = document.getElementById("togglePassword")

let input = document.getElementById("password")

eye.addEventListener('click',function(e) {
    const type = input.getAttribute("type")==="password"?"text":"password";
    input.setAttribute("type",type)
    
  this.classList.toggle('fa-eye-slash')
})