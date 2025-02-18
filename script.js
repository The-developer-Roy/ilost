function calculateElapsedTime() {
    const startDate = new Date("2025-02-14T00:00:00");
    const currentDate = new Date();
    
    let timeDifference = Math.floor((currentDate - startDate) / 1000);
    let years = Math.floor(timeDifference / (365 * 24 * 60 * 60));
    timeDifference %= (365 * 24 * 60 * 60);
    let weeks = Math.floor(timeDifference / (7 * 24 * 60 * 60));
    timeDifference %= (7 * 24 * 60 * 60);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    timeDifference %= (24 * 60 * 60);
    let hours = Math.floor(timeDifference / (60 * 60));
    timeDifference %= (60 * 60);
    let minutes = Math.floor(timeDifference / 60);
    
    document.getElementById('result').innerText = 
        `${years} year${years !== 1 ? 's' : ''}, ${weeks} week${weeks !== 1 ? 's' : ''}, ` +
        `${days} day${days !== 1 ? 's' : ''}, ${hours} hour${hours !== 1 ? 's' : ''}, ` +
        `${minutes} minute${minutes !== 1 ? 's' : ''} has passed.`;
}

calculateElapsedTime();
setInterval(calculateElapsedTime, 1000); // Update every second