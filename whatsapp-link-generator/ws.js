const form = document.querySelector('.create-url');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);

    let name = data['phoneNo'];
    let msg = data['textMsg'];

    chrome.tabs.create({
        url: 'https://wa.me/' + name + '?text=' + msg
    });
});