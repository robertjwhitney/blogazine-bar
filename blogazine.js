/*
Blogazine Nav Bar
Copyright 2010 Robert J Whitney
Free use under the MIT License
*/

(function(){

window.BlogazineBar = {

  styling: 
    "#zineNav {background: #000; color: #fff; padding: 8px 20px 26px;}" +
    "#zineNav a {color: #666; font-size: 14px; text-decoration: none;}" +
    "#zineNav a:hover {text-decoration: underline;}" +
    "#zineNav #prev {height: 0;}" +
    "#zineNav #title { color: #444;  font-size: 14px; height: 0; text-align: center; width: 100%;}" +
    "#zineNav #next {float:right; height: 0;}",

  blog_title: "My Blogazine"

};

//no need to configure below here

if ( document.addEventListener ) {
  document.addEventListener("DOMContentLoaded", loaded, false);
} else if ( window.attachEvent ) {
  window.attachEvent("onload", loaded);
}

function loaded(){
  if ( BlogazineBar.styling ) {
    var style = document.createElement("style");

    style.type = "text/css";

    try {
      style.appendChild( document.createTextNode( BlogazineBar.styling ) );
    } catch (e) {
      if ( style.styleSheet ) {
        style.styleSheet.cssText = BlogazineBar.styling;
      }
    }
    var head = document.getElementsByTagName("head")[0];
    if( head == null ) {
      document.body.appendChild( style );
    } else {
      head.appendChild( style );
    }
  } 

  var linkElements = document.getElementsByTagName("link");
  var i = 0;
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
  
  function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
  }
  
  var bar = create(
    "<div id='zineNav'>" +
      "<div id='prev'>" +
        "<a href='" + prevHref + "'>&#8592;&nbsp;" + prevTitle + "</a>" +
      "</div>" +
      "<div id='title'>" +
        BlogazineBar.blog_title +
      "</div>" +
      "<div id='next'>" +
        "<a href='" + nextHref + "'>" + nextTitle + "&nbsp;&#8594;</a>" +
      "</div>" +
    "</div>"
  );
  
  document.body.insertBefore(bar, document.body.childNodes[0]);
  
}
})();