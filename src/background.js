chrome.browserAction.onClicked.addListener(function(){
  var idname = localStorage['idname'] ? localStorage['idname'] : 'user_email';
  var defaultEmail = localStorage['defaultEmail'] ? localStorage['defaultEmail'] : document.getElementById(idname).value;
  var strArr = defaultEmail.split("@");
  var datetime = new Date().getTime();
  var plusEmail = strArr[0] + "+" + datetime + "@" + strArr[1];
  chrome.tabs.executeScript(null, {
    "code": "document.getElementById('"+idname+"').value = '"+plusEmail+"'"
  });
});