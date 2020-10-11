

const run = document.querySelector('button');
const output = document.querySelector('#output');
const url = 'http://127.0.0.1:3000/heroes';
const fetchMethod = {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(
        {
            name: 'Aladin',
            occupation: 'Thief'
        }
    )
}

run.addEventListener('click', postData);

function postData() {
    
    fetch(url, fetchMethod)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .then(
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        
    )    
}

function updateDOM(data) {
    console.log(data)
    output.innerHTML = data[0].name;
}



