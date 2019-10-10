window.addEventListener('load', init2);

function init2() {
    bindEvents2();
}

function bindEvents2() {
    document.getElementById('logSubmit').addEventListener('click', loginCall);
}

function loginCall(e) {

    e.preventDefault();

    var email = document.getElementById('logEmail').value;
    var password = document.getElementById('logPassword').value;

    var User = {
        email,
        password
    }
    console.log(User);

    var pr = fetch('https://localhost:1234/api/auth/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(User)
    });
    pr.then(response =>
        response.text().then(data => {
            console.log('Data is ', data);
            document.querySelector('#logError').innerText = data;
        }).catch(err => console.log(err))
    ).catch(e => console.log(e));
}