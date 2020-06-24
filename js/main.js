var vz = {
	init : function () {
            vz.showLastModified();
            // "global" function defined in js/tmp.js
            visitCounter();
	},
	showLastModified : function () {
		document.querySelector("footer span").innerHTML = document.lastModified;		
	},
};

window.onload = vz.init;
