const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('input');

function play(){
    video[video.paused ? 'play' : 'pause']()

}
function toogleButton(){
    toggle.textContent = video.paused ? '▶' : '⏸';
}
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
    

}
function updateRange(){
  video[this.name] = this.value;
  
}
function updateProgress(){
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}
function scrub(e){
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}
let isMouseDown = false;
video.addEventListener('click',play);
video.addEventListener('play', toogleButton);
video.addEventListener('pause', toogleButton);
video.addEventListener('timeupdate', updateProgress);


toggle.addEventListener('click',play);
skipButtons.forEach(button =>  button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change',updateRange))
ranges.forEach(range => range.addEventListener('mousemove',updateRange))
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mousedown',() => isMouseDown = true);
progress.addEventListener('mouseup',() => isMouseDown = false);
window.addEventListener('keydown', (e) => {if(e.key === ' ') play()}) 

