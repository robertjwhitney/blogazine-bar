/*
Blogazine Nav Bar
Copyright 2010 Robert J Whitney
Free use under the MIT License
*/

styles = 
  "#zineNav {background: #000; color: #fff; padding: 8px 20px 26px;}" +
  "#zineNav a {color: #666; font-size: 14px; text-decoration: none;}" +
  "#zineNav a:hover {text-decoration: underline;}" +
  "#zineNav #prev {height: 0;}" +
  "#zineNav #title { color: #444;  font-size: 14px; height: 0; text-align: center; width: 100%;}" +
  "#zineNav #next {float:right; height: 0;}";
  
title = "My Blogazine";

//no need to configure below here

function appendStyle(styles) {
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
};

function buildBar() {
  linkElements = document.getElementsByTagName("link");
  for (i = 0; i < linkElements.length; i++) {
    if (linkElements[i].hasAttribute("rel") && linkElements[i].rel == 'next') {
      var nextHref = linkElements[i].getAttribute("href");
      var nextTitle = linkElements[i].getAttribute("title");
    }
    else if (linkElements[i].hasAttribute("rel") && linkElements[i].rel == 'prev') {
      var prevHref = linkElements[i].getAttribute("href");
      var prevTitle = linkElements[i].getAttribute("title");
    }
  }
  var newdiv = document.createElement('div');
  var divIdName = 'zineNav';
  newdiv.setAttribute('id',divIdName);
  newdiv.innerHTML = 
    "<div id='prev'>" +
      "<a href='" + prevHref + "'>&#8592;&nbsp;" + prevTitle + "</a>" +
    "</div>" +
    "<div id='title'>" +
      title +
    "</div>" +
    "<div id='next'>" +
      "<a href='" + nextHref + "'>" + nextTitle + "&nbsp;&#8594;</a>" +
    "</div>";
  document.body.insertBefore(newdiv, document.body.firstChild);
};

if ( document.addEventListener ) {
  document.addEventListener("DOMContentLoaded", loaded, false);
} else if ( window.attachEvent ) {
  window.attachEvent("onload", loaded);
}

function loaded(){
  appendStyle(styles); 
  buildBar();
}