let lists = document.getElementsByClassName("dragga");
let rightBox = document.getElementById("section2");
let leftBox = document.getElementById("section1");
for(list of lists){
	list.addEventListener("dragstart",function(e){
		let selected = e.target;
		rightBox.addEventListener("dragover",function(e){
			e.preventDefault();
			selected.className+= " make-pop";
		});
		rightBox.addEventListener("drop",function(e){
			rightBox.appendChild(selected);
			selected.className= "dragga";
			selcted= null;
		});
		
		
	})
		
};