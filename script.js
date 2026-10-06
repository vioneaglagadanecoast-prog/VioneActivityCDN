function updateTimestamp() {
  const now = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
  };

  document.getElementById("timestamp").textContent =
    "Website timestamp: " + now.toLocaleString("en-US", options);
}

updateTimestamp();
setInterval(updateTimestamp, 1000);
