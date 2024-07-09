const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector(".fruits");
const fruitInput = document.querySelector('.inputFruit') ;
const addFruitButton =document.querySelector('.addFruitButton')

theMessageButton.addEventListener('click', function() {
    setTimeout(function() {
        myMessage.innerText = 'This is a message in a dome!';
    }, 3000); 
});

clearMessageButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

theMessageButton.addEventListener('click', function() {
     if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
 });

 myMessage.addEventListener('click', function() {
     myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
for(let i=0;i<fruits.length;i++){
     // get fruits from the list
     const fruit = fruits[i];

// create a new li element
const li = document.createElement('li');
li.innerText = fruit;
fruitList.appendChild(li);
}     

addFruitButton.addEventListener('click', function() {
     const fruitName = fruitInput.value;
     if (fruitName) {
         const li = document.createElement('li');
         li.innerText = fruitName;
         fruitList.appendChild(li);
         fruitInput.value = ''; // Clear the input after adding
     } else {
         alert("Please enter a fruit name.");
     }
 });
