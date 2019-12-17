var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel")

function showPanel(panelIndex, colorcode){
	tabButtons.forEach(function(node){
		node.style.backgroundColor="";
		node.style.color="";
	});
	tabButtons[panelIndex].style.backgroundColor=colorcode;
	tabButtons[panelIndex].style.color="white";
	tabPanels.forEach(function(node){
		node.style.display="none";
	});
	tabPanels[panelIndex].style.display="block";
	tabPanels[panelIndex].style.backgroundColor=colorcode;
}