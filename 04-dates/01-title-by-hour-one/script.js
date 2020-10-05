// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const text = document.getElementById('target');
    let time = new Date().getHours();

    console.log(time)

    if (time < 18) {
        text.innerHTML = 'Hello !'
    } else {
        text.innerHTML = 'Good evening !'
    }



})();