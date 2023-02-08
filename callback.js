function delayed(func) {
    setTimeout(func, 1500);
}

delayed(function() {
    console.log("waited");
});
