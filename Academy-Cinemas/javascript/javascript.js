// Initialize all popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// Initialize Toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, { delay: 5000 });
});
// Function to handle Buy Tickets button click
function buyTickets() {
    var movieSelect = document.getElementById("movieSelect");
    var timeSelect = document.getElementById("timeSelect");
    var movie = movieSelect.options[movieSelect.selectedIndex].text;
    var time = timeSelect.options[timeSelect.selectedIndex].text;
    var toastBody = document.getElementById("toastBody");
    if (movie === "Select movie" || time === "Select time") {
        toastBody.innerHTML = "Please select both a movie and a show time.";
    } else {
        toastBody.innerHTML = "You have selected " + movie + " at " + time + ".";
    }
    var toast = new bootstrap.Toast(document.getElementById("toastDisplay"));
    toast.show();
}
// Event listener for Buy Tickets button
document.querySelector(".yellow-btn").addEventListener("click", buyTickets);

// JQUERY

//Shrinks header size when the document is scrolled down by 50 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 50px this if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirement has been met add the nav-shrink class selector to the same HTML element that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the navbar collapse menu to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or is back at the top the nav-shrink class selector is removed from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now returned to its original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //On click when an element contains jus the nav-link class and not the dropdown-toggle and then also close when an element with the class .dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
        //Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});