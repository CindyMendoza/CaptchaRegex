var mensajeError = document.getElementById('mensajeError');
var txtCaptchaSpan = document.getElementById("txtCaptchaSpan");
var txtInput = document.getElementById('txtInput');

// Remove the spaces from the entered and generated code
function removeSpaces(string){
  return string.split(' ').join('');//Separa con split por espacio y convierte en string con join
}

//Generates the captcha function
function generarCaptcha(){
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

  var a = Math.ceil(Math.random() * 9)+ '';
  var b = Math.ceil(Math.random() * 9)+ '';
  var c = Math.ceil(Math.random() * 9)+ '';
  var d = Math.ceil(Math.random() * 9)+ '';
  var e = Math.ceil(Math.random() * 9)+ '';

  var f = alpha[Math.floor(Math.random() * alpha.length)];
  var g = alpha[Math.floor(Math.random() * alpha.length)];
  var h = alpha[Math.floor(Math.random() * alpha.length)];
  var i = alpha[Math.floor(Math.random() * alpha.length)];
  var j = alpha[Math.floor(Math.random() * alpha.length)];

  var code = a + f + b + g + c + h + d + i + e + j;

  txtCaptchaSpan.innerHTML = code;

}

// Validate the Entered input aganist the generated security code function
removeSpaces(txtCaptchaSpan.innerHTML);
removeSpaces(txtInput.value);

// validacion

function checkform(){
  if (ValidCaptcha()!=true){
    mensajeError.innerHTML="Error de captcha";
  }else {
    mensajeError.innerHTML="Captcha correcto";
  }
}

function ValidCaptcha(){
          var string1 = removeSpaces(txtCaptchaSpan.innerHTML);
          var string2 = removeSpaces(txtInput.value);
          if (string1 == string2){
            return true;
          }
          else{
            return false;
          }
}
