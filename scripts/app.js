const players = [
  {
    id: 1,
    url: 'https://dt6bp6jtza230.cloudfront.net/3ea5d6f5-d870-46af-8870-52ed1b08f265/AppleHLS1/Cam1.m3u8',
  },
  {
    id: 2,
    url: 'https://dt6bp6jtza230.cloudfront.net/952ead4d-c612-46fc-b6ea-1b48c6dfcaf2/AppleHLS1/Cam2.m3u8',
  },
  {
    id: 3,
    url: 'https://dt6bp6jtza230.cloudfront.net/3e9ddf49-58d7-4f06-a3f4-905711dedbb9/AppleHLS1/Cam3.m3u8',
  },
  {
    id: 4,
    url: 'https://dt6bp6jtza230.cloudfront.net/fba2c744-1e62-40f5-ad8a-095c34eb5ab7/AppleHLS1/Cam4.m3u8',
  },
  {
    id: 5,
    url: 'https://dt6bp6jtza230.cloudfront.net/fba2c744-1e62-40f5-ad8a-095c34eb5ab7/AppleHLS1/Cam4.m3u8',
  },
  {
    id: 6,
    url: 'https://dt6bp6jtza230.cloudfront.net/9db633cd-de9c-4b55-b76f-14c29a3401d8/AppleHLS1/Cam6.m3u8',
  },
  {
    id: 7,
    url: 'https://dt6bp6jtza230.cloudfront.net/d9fc6ae6-3227-4a20-8335-2f43435d516c/AppleHLS1/Cam7.m3u8',
  },
  {
    id: 8,
    url: 'https://dt6bp6jtza230.cloudfront.net/0cfe77b6-ef5e-445e-8177-b4e65405a48b/AppleHLS1/Cam8.m3u8',
  },
  {
    id: 9,
    url: 'https://dt6bp6jtza230.cloudfront.net/5256eeec-d676-429e-ae7c-3a2f924cf6d9/AppleHLS1/Cam9.m3u8',
  },
];

const wrapper = document.querySelector('.video-players');
let currentVideoId = 1;
let nextVideoId = 2;
let previousVideoId = 9;

players.map((item) => {
  return (wrapper.innerHTML += `
    <div class="video-item-wrapper ${item.id === 1 ? 'wrapper-visible' : ''}" id="video-wrapper-${item.id}">
      <div class="loading-screen">Loading...</div>
      <video id="my-player${item.id}" data-id="${item.id}" class="video-js" playsinline loop muted controls width="${
    item.id === 1 ? 1020 : 0
  }" height="${item.id === 1 ? 574 : 0}" data-setup='{}' preload>
        <source src="${item.url}" type="application/x-mpegURL">
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
    </div>
    `);
});

let _videos = [];
players.forEach(function (el, i) {
  _videos.push(videojs(`my-player${el.id}`));
});

// Hide the old fullscreen button
// document.querySelector('.vjs-fullscreen-control').style.display = 'none';

// Add button to the controlBar
var myButton_1 = _videos[0].controlBar.addChild('button');
var myButton_2 = _videos[1].controlBar.addChild('button');
var myButton_3 = _videos[2].controlBar.addChild('button');
var myButton_4 = _videos[3].controlBar.addChild('button');
var myButton_5 = _videos[4].controlBar.addChild('button');
var myButton_6 = _videos[5].controlBar.addChild('button');
var myButton_7 = _videos[6].controlBar.addChild('button');
var myButton_8 = _videos[7].controlBar.addChild('button');
var myButton_9 = _videos[8].controlBar.addChild('button');

// Getting html DOM
var myButtonDom_1 = myButton_1.el();
var myButtonDom_2 = myButton_2.el();
var myButtonDom_3 = myButton_3.el();
var myButtonDom_4 = myButton_4.el();
var myButtonDom_5 = myButton_5.el();
var myButtonDom_6 = myButton_6.el();
var myButtonDom_7 = myButton_7.el();
var myButtonDom_8 = myButton_8.el();
var myButtonDom_9 = myButton_9.el();

// Render the button html
const fsButton = `<div class="fake-fullscreen vjs-fullscreen-control"><span aria-hidden="true" class="vjs-icon-placeholder"></span></div>`;
myButtonDom_1.innerHTML = fsButton;
myButtonDom_2.innerHTML = fsButton;
myButtonDom_3.innerHTML = fsButton;
myButtonDom_4.innerHTML = fsButton;
myButtonDom_5.innerHTML = fsButton;
myButtonDom_6.innerHTML = fsButton;
myButtonDom_7.innerHTML = fsButton;
myButtonDom_8.innerHTML = fsButton;
myButtonDom_9.innerHTML = fsButton;

// add click events
myButtonDom_1.onclick = function () {
  toggleFullScreen();
};
myButtonDom_2.onclick = function () {
  toggleFullScreen();
};
myButtonDom_3.onclick = function () {
  toggleFullScreen();
};
myButtonDom_4.onclick = function () {
  toggleFullScreen();
};
myButtonDom_5.onclick = function () {
  toggleFullScreen();
};
myButtonDom_6.onclick = function () {
  toggleFullScreen();
};
myButtonDom_7.onclick = function () {
  toggleFullScreen();
};
myButtonDom_8.onclick = function () {
  toggleFullScreen();
};
myButtonDom_9.onclick = function () {
  toggleFullScreen();
};

function toggleFullScreen() {
  const elem = document.querySelector('.video-players');
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    document.querySelector('body').classList.remove('fullscreen');
    exitFullScreen(elem);
  } else {
    document.querySelector('body').classList.add('fullscreen');
    goFullScreen(elem);
  }
}

function goFullScreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function exitFullScreen(elem) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

_videos[0].on('ready', function () {
  simulateBuffering();
});
_videos[1].on('ready', function () {
  simulateBuffering();
});
_videos[2].on('ready', function () {
  simulateBuffering();
});
_videos[3].on('ready', function () {
  simulateBuffering();
});
_videos[4].on('ready', function () {
  simulateBuffering();
});
_videos[5].on('ready', function () {
  simulateBuffering();
});
_videos[6].on('ready', function () {
  simulateBuffering();
});
_videos[7].on('ready', function () {
  simulateBuffering();
});
_videos[8].on('ready', function () {
  simulateBuffering();
});

_videos[0].on('seeked', function () {
  simulateBuffering();
});
_videos[1].on('seeked', function () {
  simulateBuffering();
});
_videos[2].on('seeked', function () {
  simulateBuffering();
});
_videos[3].on('seeked', function () {
  simulateBuffering();
});
_videos[4].on('seeked', function () {
  simulateBuffering();
});
_videos[5].on('seeked', function () {
  simulateBuffering();
});
_videos[6].on('seeked', function () {
  simulateBuffering();
});
_videos[7].on('seeked', function () {
  simulateBuffering();
});
_videos[8].on('seeked', function () {
  simulateBuffering();
});

function simulateBuffering(wrapperId) {
  playAllVideos();
  setTimeout(() => {
    pauseAllVideos();
  }, 100);

  // show loading box
  document.querySelector('.wrapper-visible').classList.add('buffering');

  // set timeout for 5 seconds
  setTimeout(() => {
    document.querySelector('.wrapper-visible').classList.remove('buffering');
    playAllVideos();
  }, 5000);
}

function playAllVideos() {
  _videos[0].play();
  _videos[1].play();
  _videos[2].play();
  _videos[3].play();
  _videos[4].play();
  _videos[5].play();
  _videos[6].play();
  _videos[7].play();
  _videos[8].play();
}

function pauseAllVideos() {
  _videos[0].pause();
  _videos[1].pause();
  _videos[2].pause();
  _videos[3].pause();
  _videos[4].pause();
  _videos[5].pause();
  _videos[6].pause();
  _videos[7].pause();
  _videos[8].pause();
}

function changeTime(seconds) {
  _videos[0].currentTime(seconds);
  _videos[1].currentTime(seconds);
  _videos[2].currentTime(seconds);
  _videos[3].currentTime(seconds);
  _videos[4].currentTime(seconds);
  _videos[5].currentTime(seconds);
  _videos[6].currentTime(seconds);
  _videos[7].currentTime(seconds);
  _videos[8].currentTime(seconds);
}

function muteVideos(except) {
  _videos[0].muted(0 !== except);
  _videos[1].muted(1 !== except);
  _videos[2].muted(2 !== except);
  _videos[3].muted(3 !== except);
  _videos[4].muted(4 !== except);
  _videos[5].muted(5 !== except);
  _videos[6].muted(6 !== except);
  _videos[7].muted(7 !== except);
  _videos[8].muted(8 !== except);
}

function hideVideos(except) {
  if (1 !== except) _videos[0].dimensions(0, 0);
  if (2 !== except) _videos[1].dimensions(0, 0);
  if (3 !== except) _videos[2].dimensions(0, 0);
  if (4 !== except) _videos[3].dimensions(0, 0);
  if (5 !== except) _videos[4].dimensions(0, 0);
  if (6 !== except) _videos[5].dimensions(0, 0);
  if (7 !== except) _videos[6].dimensions(0, 0);
  if (8 !== except) _videos[7].dimensions(0, 0);
  if (9 !== except) _videos[8].dimensions(0, 0);
}

function changeVideo(direction) {
  direction = !direction ? 'next' : 'prev';
  let isPrev = 'prev' === direction;
  let oldVideo = currentVideoId;
  let maxVideo = isPrev ? 1 : players.length;
  if (currentVideoId === maxVideo) {
    currentVideoId = isPrev ? 9 : 1;
  } else {
    currentVideoId = isPrev ? currentVideoId - 1 : currentVideoId + 1;
  }
  // Start at the same time, before changing
  let _ov = videojs.getPlayer(`my-player${oldVideo}`);
  let _ot = _ov.currentTime();
  changeTime(_ot);
  // Mute other video
  muteVideos(oldVideo);
  // Hide the videos
  hideVideos(currentVideoId);
  players.map((player) => {
    if (currentVideoId !== player.id) {
      document.querySelector(`#video-wrapper-${player.id}`).classList.remove('wrapper-visible');
    }
  });
  // Show Active Video
  document.querySelector(`#video-wrapper-${currentVideoId}`).classList.add('wrapper-visible');
  let _p = videojs.getPlayer(`my-player${currentVideoId}`);
  _p.dimensions(1020, 574);
}
