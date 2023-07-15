import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

function saveCurrentTime(currentTime) {
  localStorage.setItem(STORAGE_KEY, currentTime);
}

player.on('timeupdate', throttle(function (event) {
  const currentTime = event.seconds;
  saveCurrentTime(currentTime);
}, 1000));

const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}