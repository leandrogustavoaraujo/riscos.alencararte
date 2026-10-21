/* Alencar Arte: pixel do proprietário e parâmetros de campanha. */
(function(){
 'use strict';
 if(window.__alencarTrackingInstalled)return;
 window.__alencarTrackingInstalled=true;
 !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=true;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
 var PIXEL='1439578454934187';
 window.fbq('init',PIXEL);
 window.fbq('trackSingle',PIXEL,'PageView');
 window.fbq('trackSingle',PIXEL,'ViewContent',{content_name:'Coleção 100 Riscos Católicos',content_ids:['100-riscos-catolicos'],content_type:'product',value:27,currency:'BRL'});
 var plans={
  '/6ad7b3fe23173d72243932bf':{name:'100 Riscos Católicos - Pacote Padrão',id:'100-riscos-padrao',value:27},
  '/6ad7b4b016f0f5e301fe12f0':{name:'100 Riscos Católicos + Curso - Pacote Completo',id:'100-riscos-completo',value:97}
 };
 function checkout(a){try{var u=new URL(a.href,window.location.href);return u.hostname==='pay.wiapy.com'&&plans[u.pathname]?{url:u,plan:plans[u.pathname]}:null;}catch(e){return null;}}
 var key='alencar_campaign_v1',saved={},params=new URLSearchParams(window.location.search);
 var allowed=function(k){return /^utm_[a-z0-9_]+$/i.test(k)||['fbclid','gclid','gbraid','wbraid','ttclid','msclkid','src','sck','xcod'].indexOf(k)!==-1;};
 try{saved=JSON.parse(sessionStorage.getItem(key)||'{}');}catch(e){}
 var fresh={};params.forEach(function(v,k){if(allowed(k)&&v)fresh[k]=v;});
 if(Object.keys(fresh).length){saved=fresh;try{sessionStorage.setItem(key,JSON.stringify(saved));}catch(e){}}
 function decorate(a){var p=checkout(a);if(!p)return;Object.keys(saved).forEach(function(k){if(allowed(k)&&saved[k]&&!p.url.searchParams.has(k))p.url.searchParams.set(k,saved[k]);});a.href=p.url.toString();}
 document.querySelectorAll('a[data-plano]').forEach(decorate);
 document.addEventListener('click',function(e){
  var a=e.target&&e.target.closest?e.target.closest('a[data-plano]'):null;if(!a)return;
  var p=checkout(a);if(!p)return;decorate(a);
  window.fbq('trackSingle',PIXEL,'InitiateCheckout',{content_name:p.plan.name,content_ids:[p.plan.id],content_type:'product',value:p.plan.value,currency:'BRL',num_items:1});
 },true);
})();
