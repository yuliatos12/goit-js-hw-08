import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

function saveCurrentTime(currentTime) {
  localStorage.setItem(STORAGE_KEY, currentTime);
}


function handleTimeUpdate(e) {
  const currentTime = e.seconds;
  saveCurrentTime(currentTime);
}

const throttledHandleTimeUpdate = throttle(handleTimeUpdate, 1000);

player.on('timeupdate', throttledHandleTimeUpdate);

const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}