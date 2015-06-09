var idname = document.getElementsByName('idname')[0];
var defaultEmail = document.getElementsByName('defaultEmail')[0];

document.getElementById('save').onclick = function(){
  localStorage['idname'] = idname.value;
  localStorage['defaultEmail'] = defaultEmail.value;
  alert(idname.value + ";" + defaultEmail.value);
}

document.body.onload = function(){
  if(localStorage['idname']){
    idname.value = localStorage['idname'];
  }
  if(localStorage['defaultEmail']){
    defaultEmail.value = localStorage['defaultEmail'];
  }
}