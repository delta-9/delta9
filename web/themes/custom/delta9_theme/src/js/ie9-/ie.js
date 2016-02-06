
// Source : https://gist.githubusercontent.com/paulirish/357741/raw/7693126cf78bdea2a0d8353785e98c06d4a619aa/detect%2520IE%2520and%2520version%2520number%2520through%2520injected%2520conditional%2520comments.js
function isIE(version, comparison) {
  var cc      = 'IE',
      b       = document.createElement('B'),
      docElem = document.documentElement,
      isIE;
      
  if(version){
    cc += ' ' + version;
    if(comparison){ cc = comparison + ' ' + cc; }
  }
  
  b.innerHTML = '<!--[if '+ cc +']><b id="iecctest"></b><![endif]-->';
  docElem.appendChild(b);
  isIE = !!document.getElementById('iecctest');
  docElem.removeChild(b);
  return isIE;
}

if(isIE())
{
  var html = document.getElementsByTagName("html")[0];

  if(isIE(9))
  {
    html.className+= ' IE IE9';
  }
  else if(isIE(8))
  {
    html.className+= ' IE IE8';
  }
  else if(isIE(7))
  {
    html.className+= ' IE IE7';
  }
  else if(isIE(6))
  {
    html.className+= ' IE IE6';
  }
}