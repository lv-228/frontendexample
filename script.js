var modal    = document.getElementById('myModal');
var mContent = document.getElementById('mContent');

function showModal(content) {
	console.log(content.childNodes[7].innerHTML);
	var newImg = document.createElement('img');
	newImg.setAttribute('src' , content.childNodes[1].getAttribute('src'));
	mContent.appendChild(newImg);
	var newH       = document.createElement('h4');
	newH.innerHTML = content.childNodes[3].innerHTML;
	mContent.appendChild(newH);
	var newP       = document.createElement('p');
	newP.innerHTML = content.childNodes[5].innerHTML;
	newP.setAttribute('class','about');
	mContent.appendChild(newP);
	var newPrice       = document.createElement('p');
	newPrice.innerHTML = content.childNodes[7].innerHTML;
	newPrice.setAttribute('class','price');
	mContent.appendChild(newPrice);
	modal.style.display = 'flex';
}

function clearChilds(parent) {
	for (var i = parent.childNodes.length - 1; i >= 0; i--) {
    	parent.removeChild(parent.childNodes[i]);
    }
}

 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    clearChilds(mContent);
  }
}

document.getElementById('mClose').onclick = function(){
	modal.style.display = "none";
	clearChilds(mContent);
}