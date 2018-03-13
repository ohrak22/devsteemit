function testing() {
    console.log("testing");
}
setInterval(testing, 5000);

function testing2(arg) {
    console.log(arg);
    setTimeout(testing2, 5000, 'testing2');
}
setTimeout(testing2, 5000, 'testing2');
