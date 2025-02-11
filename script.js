const apiKey = '6c93d2d970msh13d78832d8a81cdp14fa96jsn6f391f43aa2f';
const form = document.getElementById('download-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const videoUrl = document.getElementById('video-url').value;

  if (!videoUrl) {
    responseMessage.textContent = 'Please enter a video URL.';
    return;
  }

  try {
    const response = await fetch(`https://api.example.com/download?url=${encodeURIComponent(videoUrl)}&api_key=${apiKey}`);
    const result = await response.json();

    if (result.success) {
      responseMessage.innerHTML = `<a href="${result.download_link}" target="_blank">Click here to download your video</a>`;
    } else {
      responseMessage.textContent = 'Failed to fetch the video. Please try again.';
    }
  } catch (error) {
    responseMessage.textContent = 'Error fetching the video. Please check your URL or try again later.';
  }
});
