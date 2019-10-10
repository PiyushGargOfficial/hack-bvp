window.addEventListener('load', init);

function init() {
    bindEvents();
}

function bindEvents() {
    document.getElementById('resSubmit').addEventListener('click', registerCall);
}

function registerCall(e) {

    e.preventDefault();

    var name = document.getElementById('resName').value;
    var email = document.getElementById('resEmail').value;
    var password = document.getElementById('resPassword').value;

    var newUser = {
        name,
        email,
        password
    }
    console.log(newUser);

    var pr = fetch('https://localhost:1234/api/auth/register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newUser)
    });
    pr.then(response =>
            response.text().then(data => {
                console.log('Data is ', data);
                document.querySelector('#regError').innerText = data;
            }).catch(err => console.log(err))
        )
        .catch(e => console.log(e));


}