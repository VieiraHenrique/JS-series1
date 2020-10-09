function getRequest(ressource, callback) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // PARSE JSON INTO JS ARRAY OF OBJECTS
            const data = JSON.parse(request.responseText)
            // SUCCESS CALLBACK
            callback(undefined, data)
        } else if (request.readyState === 4) {
            // ERROR CALLBACK
            callback('Could not fetch data', undefined)
        }
    })

    // OPENS A REQUEST
    request.open('get', ressource); // URL OF THE API
    // SEND THE REQUEST
    request.send()
}

// CALLBACK FUNCTION
function callback(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

getRequest('https://jsonplaceholder.typicode.com/todos', callback)