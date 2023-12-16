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


chrome.storage.local.get('requestID', function (result) {
    const storedRequestID = result.requestID;
    if (storedRequestID) {
        const requestIDPlaceholder = document.getElementById('request-id');
        requestIDPlaceholder.innerText = storedRequestID;
    }
});