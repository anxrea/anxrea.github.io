// Turns the heart icon red upon clicking
function fav() {
    if (document.getElementById("heart-red").classList.contains('fa-heart-o')) {
    document.getElementById("heart-red").classList.remove("fa-heart-o");
    document.getElementById("heart-red").classList.add("fa-heart");
    } else {
    document.getElementById("heart-red").classList.remove("fa-heart");
    document.getElementById("heart-red").classList.add("fa-heart-o");
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
    
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Controls the Sidepanel at Product Page
function openNav() {
  document.getElementById("mySidepanel").classList.remove("sidepanel-close");
  document.getElementById("mySidepanel").classList.add("sidepanel-show");
}
function closeNav() {
  document.getElementById("mySidepanel").classList.remove("sidepanel-show");
  document.getElementById("mySidepanel").classList.add("sidepanel-close");
}

// Controls the checkout process
// Hides the page until user clicks the button
function shipping() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById('shipping').style.display = "flex";
}

// Checkout Process
// Displays the pages when clicked, otherwise hidden
function payment() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById('payment').style.display = "flex";
}
function done() {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById('done').style.display = "block";
}
function back() {
  window.location="index.html";
}
shipping();
