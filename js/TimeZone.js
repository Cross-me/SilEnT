function GetTime() {
	var dt = new Date();
	var def = dt.getTimezoneOffset() / 60;
	var gmt = (dt.getHours() + def);
	document.clock.local.value = (IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds()));
	var ending = ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds());
	var rome = check24(((gmt + 1) > 24) ? ((gmt + 1) - 24) : (gmt + 1));
	document.clock.rome.value = (IfZero(rome) + ending);
	var isr = check24(((gmt + 2) > 24) ? ((gmt + 2) - 24) : (gmt + 2));
	document.clock.Israel.value = (IfZero(isr) + ending);
	var msw = check24(((gmt + 3) > 24) ? ((gmt + 3) - 24) : (gmt + 3));
	document.clock.msw.value = (IfZero(msw) + ending);
	var baku = check24(((gmt + 4) > 24) ? ((gmt + 4) - 24) : (gmt + 4));
	document.clock.baku.value = (IfZero(baku) + ending);
	var del = check24(((gmt + 5) > 24) ? ((gmt + 5) - 24) : (gmt + 5));
	document.clock.del.value = (IfZero(del) + ending);
	var dh = check24(((gmt + 6) > 24) ? ((gmt + 6) - 24) : (gmt + 6));
	document.clock.dh.value = (IfZero(dh) + ending);
	var kok = check24(((gmt + 7) > 24) ? ((gmt + 7) - 24) : (gmt + 7));
	document.clock.kok.value = (IfZero(kok) + ending);
	var ho = check24(((gmt + 8) > 24) ? ((gmt + 8) - 24) : (gmt + 8));
	document.clock.ho.value = (IfZero(ho) + ending);
	var tky = check24(((gmt + 9) > 24) ? ((gmt + 9) - 24) : (gmt + 9));
	document.clock.tky.value = (IfZero(tky) + ending);
	var sdn = check24(((gmt + 10) > 24) ? ((gmt + 10) - 24) : (gmt + 10));
	document.clock.sdn.value = (IfZero(sdn) + ending);
	var mag = check24(((gmt + 11) > 24) ? ((gmt + 11) - 24) : (gmt + 11));
	document.clock.mag.value = (IfZero(mag) + ending);
	var wll = check24(((gmt + 12) > 24) ? ((gmt + 12) - 24) : (gmt + 12));
	document.clock.wll.value = (IfZero(wll) + ending);
	var _GMT = check24(((gmt) > 24) ? ((gmt) - 24) : (gmt));
	document.clock._GMT.value = (IfZero(_GMT) + ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds()));
	var eniw = check24(((gmt + (24 - 12)) > 24) ? ((gmt + (24 - 12)) - 24) : (gmt + (24 - 12)));
	document.clock.eniw.value = (IfZero(eniw) + ending);
	var sam = check24(((gmt + (24 - 11)) > 24) ? ((gmt + (24 - 11)) - 24) : (gmt + (24 - 11)));
	document.clock.sam.value = (IfZero(sam) + ending);
	var haw = check24(((gmt + (24 - 10)) > 24) ? ((gmt + (24 - 10)) - 24) : (gmt + (24 - 10)));
	document.clock.Hawaii.value = (IfZero(haw) + ending);
	var ala = check24(((gmt + (24 - 9)) > 24) ? ((gmt + (24 - 9)) - 24) : (gmt + (24 - 9)));
	document.clock.alaska.value = (IfZero(ala) + ending);
	var pacif = check24(((gmt + (24 - 8)) >= 24) ? ((gmt + (24 - 8)) - 24) : (gmt + (24 - 8)));
	document.clock.pacif.value = (IfZero(pacif) + ending);
	var mount = check24(((gmt + (24 - 7)) > 24) ? ((gmt + (24 - 7)) - 24) : (gmt + (24 - 7)));
	document.clock.mount.value = (IfZero(mount) + ending);
	var center = check24(((gmt + (24 - 6)) > 24) ? ((gmt + (24 - 6)) - 24) : (gmt + (24 - 6)));
	document.clock.center.value = (IfZero(center) + ending);
	var east = check24(((gmt + (24 - 5)) > 24) ? ((gmt + (24 - 5)) - 24) : (gmt + (24 - 5)));
	document.clock.east.value = (IfZero(east) + ending);
	var atl = check24(((gmt + (24 - 4)) > 24) ? ((gmt + (24 - 4)) - 24) : (gmt + (24 - 4)));
	document.clock.atl.value = (IfZero(atl) + ending);
	var bra = check24(((gmt + (24 - 3)) > 24) ? ((gmt + (24 - 3)) - 24) : (gmt + (24 - 3)));
	bra = (bra >= 24) ? bra - 24 : bra;
	document.clock.bra.value = (IfZero(bra) + ending);
	var mid = check24(((gmt + (24 - 2)) > 24) ? ((gmt + (24 - 2)) - 24) : (gmt + (24 - 2)));
	mid = (mid >= 24) ? mid - 24 : mid;
	document.clock.mid.value = (IfZero(mid) + ending);
	var azo = check24(((gmt + (24 - 1)) > 24) ? ((gmt + (24 - 1)) - 24) : (gmt + (24 - 1)));
	azo = (azo >= 24) ? azo - 24 : azo;
	document.clock.azo.value = (IfZero(azo) + ending);
	setTimeout("GetTime()", 1000);
}

function IfZero(num) {
	return ((num <= 9) ? ("0" + num) : num);
}

function check24(hour) {
	return (hour >= 24) ? hour - 24 : hour;
}
// End -->
