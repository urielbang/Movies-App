(()=>{var e,t,r=-140;function l(){clearInterval(t),document.querySelector("#slider").style="translate: ".concat(r,"px;"),-2300==--r&&clearInterval(e)}function n(){document.querySelector("#slider").style="translate: ".concat(r,"px;"),0==++r&&clearInterval(t)}document.querySelector("#slider").style="translate: -140px;",document.querySelector("#rightArrow").addEventListener("click",(function(){clearInterval(t),clearInterval(e),e=setInterval(l,10)})),document.querySelector("#leftArrow").addEventListener("click",(function(){clearInterval(e),clearInterval(t),t=setInterval(n,10)}))})();