document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const sessionType = document.getElementById("session-type").value;
    const date = document.getElementById("date").value;
    const requests = document.getElementById("requests").value;

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push({ sessionType, date, requests });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Your booking has been saved locally!");
});