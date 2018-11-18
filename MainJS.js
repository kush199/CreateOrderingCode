var pattern = "#1-#2-#3-#4-#5-#6-#7";
function TypeChange() {
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2","")
	pattern = pattern.replace("#3", "")
	pattern = pattern.replace("#4", "")
	pattern = pattern.replace("#5", "")
	pattern = pattern.replace("#6", "")
	pattern = pattern.replace("#7", "")
	document.getElementById("OrderingCodeId").value = pattern;
}