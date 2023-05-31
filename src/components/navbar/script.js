// уменьшение Logo при прокрутке

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "120px";
  } else {
    document.getElementById("logo").style.width = "191px";
  }
}
