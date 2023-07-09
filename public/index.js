var firebaseConfig = FIREBASE_CONFIG;
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const avg_ref = db.ref('Average/avg');
// avg_ref.on('value',(snap)=>{
//   document.getElementById('rating').innerHTML = snap.val().toFixed(1) + '/5.0 ★';
// });
avg_ref.on('value', (snap) => {
  const ratingValue = snap.val();
  if (ratingValue !== null) {
    document.getElementById('rating').innerHTML = ratingValue.toFixed(1) + '/5.0 ★';
  } else {
    // Handle the case when the value is null
    document.getElementById('rating').innerHTML = 'No rating available';
  }
});

function redirectToCreateRoom(){
  window.location += "create";
}

function joinRoom(){
  var url = document.getElementById("room-link").value;
  if (!validURL(url)){
    alert("Please enter a valid link.");
  }

  else {
    var roomLink = document.getElementById("room-link").value;
    window.location = roomLink;
  }
}

function joinChat(){
  var url = document.getElementById("room-link").value;
  if (!validURL(url)){
    alert("Please enter a valid link.");
  }

  else {
    var roomLink = document.getElementById("room-link").value;
    window.location = roomLink + "/chatroom";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//for hosting

// const validURL = (str) => {
//   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//   return !! pattern.test(str);
// }
const validURL = (str) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '(localhost|(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})' + // domain name (including localhost)
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
  );
  return !!pattern.test(str);
};
