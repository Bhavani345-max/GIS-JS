// Function to calculate distance between two GPS coordinates
function distance(lat1, lon1, lat2, lon2) {
    const R = 6371;

    let dLat = (lat2 - lat1) * Math.PI / 180;
    let dLon = (lon2 - lon1) * Math.PI / 180;

    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

// Example coordinates
let d = distance(17.3850, 78.4867, 28.7041, 77.1025);

console.log("Distance Hyderabad → Delhi:", d.toFixed(2), "km");