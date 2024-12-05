document.getElementById('downloadBtn').addEventListener('click', function() {
    const videoLink = document.getElementById('videoLink').value;
    const messageDiv = document.getElementById('message');

    if (videoLink) {
        // Simulate a download process (replace with actual download logic)
        messageDiv.textContent = 'Downloading video from: ' + videoLink;
        messageDiv.classList.remove('hidden');

        // Here you would typically call your backend API to handle the download
        // For example: fetch('/download?url=' + encodeURIComponent(videoLink))
    } else {
        messageDiv.textContent = 'Please enter a valid Instagram video link.';
        messageDiv.classList.remove('hidden');
    }
});
