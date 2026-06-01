const form = document.querySelector('#form'),
username = document.querySelector('#username'),
content = document.querySelector('#content'),
send = document.querySelector('#send');
form.addEventListener('submit', async () => {
    send.disabled = true;
    username.disabled = true;
    content.disabled = true;
    let res = await fetch('https://penis.catboy.sex/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({name: username.value, content: content.value,}),
    })
    .then((e) => e.text())
    .then((e) => [true, e])
    .catch((e) => [false, e]);
    send.disabled = false;
    username.disabled = false;
    content.disabled = false;
    if (res[0]) content.value = '';
    alert(res[1]);
  });