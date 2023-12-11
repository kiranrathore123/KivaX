//login form
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}
//registration form
let registrationForm = document.querySelector('.registration-form-container');
document.querySelector('#registration-btn').onclick = () => {
  registrationForm.classList.toggle('active');
}
document.querySelector('#close-registration-btn').onclick = () => {
  registrationForm.classList.remove('active');
}
// fire base code start 
const firebaseConfig = {
  apiKey: "AIzaSyCngmlr_8LOg5uSsFQ5JjyqIPLB49eQZHs",
  authDomain: "database-f8238.firebaseapp.com",
  databaseURL: "https://database-f8238-default-rtdb.firebaseio.com",
  projectId: "database-f8238",
  storageBucket: "database-f8238.appspot.com",
  messagingSenderId: "864795363220",
  appId: "1:864795363220:web:c415e5825789e2e16bb181",
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function login(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error)=>{
      const errorMessage = error.message;
      
      
  })
}

function signUp(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error) => {
      
      const errorMessage = error.message;
    alert("Error : " , errorMessage);
         
  });
  var messagesRef = firebase.database().ref('messages');
  saveMessage( email,password);
  function getInputVal(id){
    return document.getElementById(id).value;
    
}
function saveMessage( email, pwd){
var newMessageRef = messagesRef.push();
newMessageRef.set({
  email:email,
  password:password
});
}
  
}

function forgotPass(){
  const email = document.getElementById("email").value
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
      alert("Reset link sent to your email id")
  })
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}

// ends here firebase...


firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var pwd = getInputVal('pwd');

  // Save message
  saveMessage(email, pwd);

  // Hide alert after 3 seconds


  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, pwd) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    pwd: pwd
  });
}
//
function searchImg() {

  document.getElementById('imgContainer').innerHTML = "";

  var bookName = document.getElementById('bookName').value;

  fetchImages(bookName);
}


function fetchImages(bookName) {
  var folderPath = 'images/';

  var imgUrl = folderPath + bookName + '.jpg';

  var image = document.createElement('img');

  image.alt = bookName + 'Image';

  image.onerror = function () {
    document.getElementById('imgContainer').ineerText = 'BOOK NOT FOUND';
  }
  image.src = imgUrl;


  image.height = 300;
  image.width = 200;

  document.getElementById('imgContainer').appendChild(image);
}

/*

function searchImg() {

  document.getElementById('imgContainer').innerHTML = "";

  var bookName = document.getElementById('bookName').value;

  fetchImages(bookName);
}



function fetchImages(bookName) {
  var folderPath = 'auther/'
  
  var imgUrl = folderPath + bookName + '.jpg';

  var image = document.createElement('img');

  image.alt = bookName + 'Image';

  image.onerror = function () {
    document.getElementById('imgContainer').ineerText = 'BOOK NOT FOUND';
  }
  image.src = imgUrl;


  image.height = 300;
  image.width = 200;

  document.getElementById('imgContainer').appendChild(image);
}
*/