(()=>{"use strict";const e=document.querySelector("h3"),t=new Date,n=new Date("01.01.2024"),o=t.getFullYear(),l=document.querySelectorAll("#day span"),r=document.querySelectorAll("#hour span"),c=document.querySelectorAll("#minute span"),u=document.querySelectorAll("#second span");function a(){const e=new Date,t=n-e,o=Math.floor(t/1e3/60/60/24),a=Math.floor(t/1e3/60/60),s=Math.floor(t/1e3/60),d=Math.floor(t/1e3);l[0].textContent=o,r[0].textContent=a-24*o,c[0].textContent=s-60*a,u[0].textContent=d-60*s}e.textContent=`Осталось до ${o+1} года:`,a(),setInterval(a,1e3)})();