var colorArr=['pink','red','cyan','yellow','green','purple']
; // Define colors in the order you want to use them
var currentIndex = 0;
var body = document.getElementsByTagName("body")[0]; // Select the element whose background color will change

function changeColor() {
	body.style.backgroundColor = colorArr[currentIndex]; // Set the background color to the current color in the array
	currentIndex = (currentIndex + 1) % colorArr.length; // Increment the index and wrap around to 0 when it exceeds the length of the array
}
