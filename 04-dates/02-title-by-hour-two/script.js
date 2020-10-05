// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const text = document.getElementById('target');
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();

    if (hour < 17 || (hour === 17 && minute < 30)) {
        text.innerHTML = 'Hello !';
    } else {
        text.innerHTML = 'Good evening !';
    }

})();