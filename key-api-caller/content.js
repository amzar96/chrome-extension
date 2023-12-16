document.addEventListener('submit', function (event) {
    const form = event.target;
    if (form) {
        const email = form.querySelector('input[name="email"]').value;

        chrome.runtime.sendMessage({
            action: 'submitForm',
            email: email,
        });
    }
});
