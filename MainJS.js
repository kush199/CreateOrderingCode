
var type;
var FinnedWidth;
var FinnedHeight;
var NoOfTubeChange;
var FinPitch;
var WaterPasses;
var ConnectionSide;
var pattern = type + "-" + FinnedWidth + "-" + FinnedHeight + "-" + NoOfTubeChange + "-" + FinPitch + "-" + WaterPasses + "-" + ConnectionSide;
function TypeChange(val) {

	document.getElementById("FinnedHeight").value = "";
	document.getElementById("TubeRows").value = "";
	document.getElementById("FinnedWidth").value = "";
	document.getElementById("FinPitch").value = "";
	document.getElementById("WaterPasses").value = "";
	document.getElementById("ConnectionSide").value = "";
	
	type = val;
	FinnedWidth = "_";
	FinnedHeight = "_";
	NoOfTubeChange = "_";
	FinPitch = "_";
	WaterPasses = "_";
	ConnectionSide = "_";
	pattern = type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;

	document.getElementById("OrderingCodeId").value = pattern;
}
function FinnedWidthChange(val) {
	FinnedWidth = val;
	pattern = this.type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;
	document.getElementById("OrderingCodeId").value = pattern;
}
function FinnedHeightChange(val) {
	FinnedHeight = val;
	pattern = this.type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;
	document.getElementById("OrderingCodeId").value = pattern;
}
function NoTubeChangeChange(val) {
	NoOfTubeChange = val;
	pattern = this.type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;
	document.getElementById("OrderingCodeId").value = pattern;
}
function FinPitchChange(val) {
	FinPitch = val;
	pattern = this.type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;
	document.getElementById("OrderingCodeId").value = pattern;
}
function NoOfWaterPassesChange(val) {
	WaterPasses = val;
	pattern = this.type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;
	document.getElementById("OrderingCodeId").value = pattern;
}

function ConnectionSideChange(val) {
	ConnectionSide = val;
	pattern = this.type + "-" + this.FinnedWidth + "-" + this.FinnedHeight + "-" + this.NoOfTubeChange + "-" + this.FinPitch + "-" + this.WaterPasses + "-" + this.ConnectionSide;
	document.getElementById("OrderingCodeId").value = pattern;
}