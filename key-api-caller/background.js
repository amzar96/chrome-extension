// Listen for messages from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'submitForm') {
        const email = request.email;

        console.log(email)

        fetch('http://127.0.0.1:8000/health', {
            method: 'GET',
            // body: JSON.stringify({ id: email, password: 'password' }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.status)
            })
            .catch(error => {
                console.error(response)
            });
    }
});