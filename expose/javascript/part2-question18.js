
function currentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    return time;
}
setInterval(currentTime, 1000);
