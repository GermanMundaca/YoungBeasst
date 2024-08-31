document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('miVideo');
    const muteButton = document.getElementById('muted');

    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteButton.setAttribute('src', 'img/volume.png');
            
        } else {
            video.muted = true;
            muteButton.setAttribute('src', 'img/mute.png');
        }
    });
});