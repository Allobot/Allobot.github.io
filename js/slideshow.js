/* 
*	2015 Allobot LLC. 
*	author: Holland Herbert
*
*  the following tutorial was of great help
*  http://css3.bradshawenterprises.com/cfimg/
*/
var timeout;

function swap_specific_image(k){
	var img_list = document.getElementsByClassName('slideshow-img');
	var text_list = document.getElementsByClassName('slideshow-text');
	var tag_list = document.getElementsByClassName('tag');
	for (var i=0 ; i<img_list.length; i++) {
		if( img_list[i].className == 'opaque slideshow-img'){
			img_list[i].className = 'slideshow-img';
			text_list[i].className = 'slideshow-text';
			tag_list[i].className = 'notselected tag';
			break			
		}
	}
	tag_list[k].className =  "selected tag";
	img_list[k].className="opaque slideshow-img";
	text_list[k].className="opaque slideshow-text";
	clearTimeout(timeout);
	timeout = setTimeout("swap_image()", 7000);
}

function swap_image() {
	var img_list = document.getElementsByClassName('slideshow-img');
	var text_list = document.getElementsByClassName('slideshow-text');
	var tag_list = document.getElementsByClassName('tag');
	for (var i=0 ; i<img_list.length; i++) {
		if( img_list[i].className == 'opaque slideshow-img'){
			img_list[i].className = 'slideshow-img';
			text_list[i].className = 'slideshow-text';
			tag_list[i].className = 'notselected tag';
			if ( (i+1) < img_list.length ) {
				k=i+1;
			}
			else {
				k=0;				
			}		
			img_list[k].className="opaque slideshow-img";
			text_list[k].className="opaque slideshow-text";
			tag_list[k].className="selected tag";
			break			
		}
	}
	clearTimeout(timeout);
	timeout = setTimeout("swap_image()", 5000);
}
swap_image();