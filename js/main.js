var vz = {
	init : function () {
            vz.showLastModified();
//            vz.showTest();
	},
	showLastModified : function () {
		document.querySelector("footer span").innerHTML = document.lastModified;		
	},
	showTest : function () {
		document.querySelector("aside").innerHTML = "index.js: init() calling showTest()...";
	}	
};

// Hm... Not working. Why?
//window.onload = vz.init;
window.onload = visitCounter();
