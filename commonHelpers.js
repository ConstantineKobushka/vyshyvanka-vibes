(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();new Swiper(".hero-swiper",{loop:!0,mousewheel:!0,grabCursor:!0,effect:"cube",cubeEffect:{shadow:!1,slideShadows:!0,shadowOffset:20,shadowScale:.94},autoplay:{delay:2500,disableOnInteraction:!0}});new Swiper(".about-us-swiper",{loop:!0,mousewheel:!0,grabCursor:!0,effect:"cube",cubeEffect:{shadow:!1,slideShadows:!0,shadowOffset:20,shadowScale:.94},autoplay:{delay:2500,disableOnInteraction:!0}});new Swiper(".swiper-collecion",{spaceBetween:20,slidesPerView:3,autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,speed:1e3});const a={type:"carousel",gap:26,perView:3,breakpoints:{1280:{perView:3},1279:{perView:2},767:{perView:1}}};new Glide(".glide",a).mount().apply({HTMLCollection});document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("open-menu"),n=document.getElementById("menu-backdrop"),l=document.getElementById("close-menu"),c=document.getElementById("menu-backdrop"),e=document.body;let t=0,o=!0;function d(){o&&(o=!1,setTimeout(()=>{o=!0},500),r.classList.add("is-open"),n.classList.add("is-open"),t=window.pageYOffset,e.style.position="fixed",e.style.top=`-${t}px`,e.style.left=0,e.style.right=0)}function i(){o&&(o=!1,setTimeout(()=>{o=!0},500),document.documentElement.style.scrollBehavior="auto",r.classList.remove("is-open"),n.classList.remove("is-open"),e.style.position="",e.style.top="",e.style.left="",e.style.right="",window.scrollTo(0,t),setTimeout(()=>{document.documentElement.style.scrollBehavior="smooth"},500))}function u(s){s.target.classList.contains("menu-nav-link"),i()}r.addEventListener("click",d),l.addEventListener("click",i),c.addEventListener("click",i),document.querySelectorAll(".menu-nav-link").forEach(function(s){s.addEventListener("click",u),s.addEventListener("touchstart",u)}),document.addEventListener("click",function(s){!n.contains(s.target)&&s.target!==r&&i()})});
//# sourceMappingURL=commonHelpers.js.map
