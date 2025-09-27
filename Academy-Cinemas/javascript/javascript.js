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

