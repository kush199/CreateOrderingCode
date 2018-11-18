
function TypeChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", val)
	pattern = pattern.replace("#2","_")
	pattern = pattern.replace("#3", "_")
	pattern = pattern.replace("#4", "_")
	pattern = pattern.replace("#5", "_")
	pattern = pattern.replace("#6", "_")
	pattern = pattern.replace("#7", "_")
	document.getElementById("OrderingCodeId").value = pattern;
}
function FinnedWidthChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2", val)
	pattern = pattern.replace("#3", "_")
	pattern = pattern.replace("#4", "_")
	pattern = pattern.replace("#5", "_")
	pattern = pattern.replace("#6", "_")
	pattern = pattern.replace("#7", "_")
	document.getElementById("OrderingCodeId").value = pattern;
}
function FinnedHeightChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2", document.getElementById("FinnedWidth").value)
	pattern = pattern.replace("#3", val)
	pattern = pattern.replace("#4", "_")
	pattern = pattern.replace("#5", "_")
	pattern = pattern.replace("#6", "_")
	pattern = pattern.replace("#7", "_")
	document.getElementById("OrderingCodeId").value = pattern;
}
function NoTubeChangeChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2", document.getElementById("FinnedWidth").value)
	pattern = pattern.replace("#3", document.getElementById("FinnedHeight").value)
	pattern = pattern.replace("#4", val)
	pattern = pattern.replace("#5", "_")
	pattern = pattern.replace("#6", "_")
	pattern = pattern.replace("#7", "_")
	document.getElementById("OrderingCodeId").value = pattern;
}
function FinPitchChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2", document.getElementById("FinnedWidth").value)
	pattern = pattern.replace("#3", document.getElementById("FinnedHeight").value)
	pattern = pattern.replace("#4", document.getElementById("TubeRows").value)
	pattern = pattern.replace("#5", val)
	pattern = pattern.replace("#6", "_")
	pattern = pattern.replace("#7", "_")
	document.getElementById("OrderingCodeId").value = pattern;
}
function NoOfWaterPassesChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2", document.getElementById("FinnedWidth").value)
	pattern = pattern.replace("#3", document.getElementById("FinnedHeight").value)
	pattern = pattern.replace("#4", document.getElementById("TubeRows").value)
	pattern = pattern.replace("#5", document.getElementById("FinPitch").value)
	pattern = pattern.replace("#6", val)
	pattern = pattern.replace("#7", "_")
	document.getElementById("OrderingCodeId").value = pattern;
}

function ConnectionSideChange(val) {
	var pattern = "#1-#2-#3-#4-#5-#6-#7";
	pattern = pattern.replace("#1", document.getElementById("Type").value)
	pattern = pattern.replace("#2", document.getElementById("FinnedWidth").value)
	pattern = pattern.replace("#3", document.getElementById("FinnedHeight").value)
	pattern = pattern.replace("#4", document.getElementById("TubeRows").value)
	pattern = pattern.replace("#5", document.getElementById("FinPitch").value)
	pattern = pattern.replace("#6", document.getElementById("WaterPasses").value)
	pattern = pattern.replace("#7", val)
	document.getElementById("OrderingCodeId").value = pattern;
}