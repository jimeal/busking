document.addEventListener('DOMContentLoaded', () => {
const returnBtn = document.querySelector('header .return-btn');
const menuBtn = document.querySelector('header .menu-btn');
const closeBtn = document.querySelector(".drawer-close img");

const targetLink = document.querySelectorAll('.tab-menu a');
const tabContent = document.querySelectorAll('#tab-content > .tabs');

if(returnBtn) {
	returnBtn.addEventListener("click", function (){
		window.history.back();
	})
}

if(menuBtn) {
	menuBtn.addEventListener("click", function() {
		document.querySelector('.drawer-bg').style.display = `block`;
		document.querySelector('.drawer').style.transform = `translateX(0)`;
	})
}

if(closeBtn) {
	closeBtn.addEventListener("click", function () {
		document.querySelector(".drawer").style.transform = `translateX(-100%)`;
		document.querySelector(".drawer-bg").style.display = "none";
	})
}


	
	for(let i = 0; i < targetLink.length; i++ ){
		
		targetLink[i].addEventListener('click',function(e){
			e.preventDefault();
			const orgTarget = e.target.getAttribute('href');
			const tabTarget = orgTarget.replace('#','');
			
			for(let x = 0; x < tabContent.length ; x++){
				tabContent[x].style.display = 'none';		
			}
			
			document.getElementById(tabTarget).style.display = 'block';	
			
			for(let j = 0; j<targetLink.length; j++){
				targetLink[j].classList.remove('active');
				e.target.classList.add('active');
			}
			
		}); //메뉴를 클릭하면 할일	
	}
	document.getElementById('tabs-1').style.display = 'block';

})


