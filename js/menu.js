window.onload=function (){
    var logo_menu = document.getElementById('logo_menu');
    var pcn = document.getElementById('pcn');
	var site_header = document.getElementById('site_header');
	var site_top = document.getElementById('site_top');
	var ydmenu = document.getElementById('ydmenu');
	var ydcolse = document.getElementById('ydcolse');
	var pccolse = document.getElementById('pccolse');
	var pcss = document.getElementById('pcss');
	var logo_search = document.getElementById('logo_search');
	var logo_i = document.getElementById('logo_i');
	site_top.style.background="none";
	var w = window.screen.width;
	if(w>850){
		site_header.onmouseover=function(){
			site_top.style.background="";
		}
		site_top.onmouseout=function(){
			site_top.style.background="none";
		}
	
		logo_menu.onclick=function(){
			if(pcn.style.display=='none'){
				pcn.style.display='block';
			}
			else{
				pcn.style.display='none';
			}
		}
		
		logo_search.onclick=function(){
			pcss.style.display='block';
		}
		pccolse.onclick=function(){
			pcss.style.display='none';
		}
		logo_i.onclick=function(){
			ydmenu.style.display='block';
		}
		
		ydcolse.onclick=function(){
			ydmenu.style.display='none';
		}
	}
	
	var w = window.screen.width;
	if(w<=850){
		logo_menu.onclick=function(){
			ydmenu.style.display='block';
		}
		
		ydcolse.onclick=function(){
			ydmenu.style.display='none';
		}
	}
}



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}