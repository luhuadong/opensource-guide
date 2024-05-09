var request = function (type, url, senddata, success, fail) {
  if (window.XMLHttpRequest) {
    var oAjax = new XMLHttpRequest();
  } else {
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }
  if (arguments[0] == 'get') {
    url += '?' + senddata;
    oAjax.open(type, url, true);
    oAjax.send();
  } else if (arguments[0] == 'post') {
    oAjax.open(type, url, true);
    oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    oAjax.send(senddata);
  }
  oAjax.onreadystatechange = function () {
    if (oAjax.readyState == 4) {
      if (oAjax.status == 200) {
        success(oAjax.responseText);
      } else {
        fail && fail(oAjax.status);
        console.log('失败了:' + oAjax.status);
      }
    }
  };
};
export default request;
