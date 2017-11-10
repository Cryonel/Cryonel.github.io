let jiadian = document.querySelectorAll(".wenzi3");
let jiadian2 = document.querySelectorAll(".jiadian-under-you");
jiadian.forEach(function(ele,index){
	ele.onmouseover = function(){
		for(let i = 0;i < jiadian.length;i++){
			jiadian[i].classList.remove("active");
			jiadian2[i].style.display = "none";
		}
		ele.classList.remove("active");
		jiadian2[index].style.display = "block";
	}
})




