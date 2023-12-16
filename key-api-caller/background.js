// Listen for messages from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'submitForm') {
        const email = request.email;

        fetch('http://127.0.0.1:8000/health', {
            method: 'GET',
            // body: JSON.stringify({ id: email, password: 'password' }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const request_id = response.headers.get('x-api-request-id');
                chrome.storage.local.set({ 'requestID': request_id }, function () {
                    console.log('New Request ID stored:', request_id);
                });
            })
            .catch(error => {
                console.error(error)
            });
    }

});
