window.onscroll = function() {scrollFunction()};
var middle = document.getElementById('middle_i');
function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("middle_i").style.display = "block";
    } else {
        document.getElementById("middle_i").style.display = "none";
    }
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
	    document.getElementById("middle_ii").style.display = "block";
	} else {
	    document.getElementById("middle_ii").style.display = "none";
	}
	if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
	    document.getElementById("middle_iii").style.display = "block";
	} else {
	    document.getElementById("middle_iii").style.display = "none";
	}
}