let bar = document.getElementById("bar");
	let nav = document.getElementById("openNav");
	let closeBar = document.getElementById("closeBar");
    let cnav1 = document.getElementById("nav1");
    let cnav2 = document.getElementById("nav2");
    let cnav3 = document.getElementById("nav3");
    let cnav4 = document.getElementById("nav4");
    let cnav5 = document.getElementById("nav5");
	bar.onclick = function () {
		nav.style.right = "0";
	}
	closeBar.onclick = function () {
		nav.style.right = "-100%";
	}
	cnav1.onclick = function () {
		nav.style.right = "-100%";
	}
	cnav2.onclick = function () {
		nav.style.right = "-100%";
	}
	cnav3.onclick = function () {
		nav.style.right = "-100%";
	}
	cnav4.onclick = function () {
		nav.style.right = "-100%";
	}
	cnav5.onclick = function () {
		nav.style.right = "-100%";
	}
	function reveal() {
		var reveals = document.querySelectorAll(".reveal");
	  
		for (var i = 0; i < reveals.length; i++) {
		  var windowHeight = window.innerHeight;
		  var elementTop = reveals[i].getBoundingClientRect().top;
		  var elementVisible = 150;
	  
		  if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		  } else {
			reveals[i].classList.remove("active");
		  }
		}
	  }
	  
	  window.addEventListener("scroll", reveal);