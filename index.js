import TinyGesture from './TinyGesture.js';


document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('maskImage');
  const gesture = new TinyGesture(target);
  let bgColor = null;

  gesture.on('panmove', () => {
    if (gesture.animationFrame) {
      return;
    }
    gesture.animationFrame = window.requestAnimationFrame(() => {
      if (!gesture.swipingDirection.startsWith('pre-')) {
        // target.style.backgroundColor = '#00AA00';
      } else {
        // target.style.backgroundColor = bgColor;
      }
      // const zDistance = -(Math.sqrt(Math.pow(gesture.touchMoveX, 2) + Math.pow(gesture.touchMoveY, 2)))+'px';
      // target.style.transition = 'background-color ease .3s';
      target.style.transform = 'perspective(1000px) translate3d('+gesture.touchMoveX+'px, '+gesture.touchMoveY+'px, 0)';
      window.requestAnimationFrame(() => {
        target.style.transition = null;
      });
      gesture.animationFrame = null;
    });
  });

  gesture.on('panend', () => {
    window.cancelAnimationFrame(gesture.animationFrame);
    gesture.animationFrame = null;
    target.style.transition = null;
    target.style.transform = null;
    bgColor = null;
    target.style.backgroundColor = bgColor;
  });
  /*
  gesture.on('swiperight', () => {
    target.style.transform = 'perspective(1000px) translate3d(2000px, 0, 0)';
    setTimeout(() => target.style.transform = null, 1000);
    console.log('swiperight');
  });
  gesture.on('swipeleft', () => {
    target.style.transform = 'perspective(1000px) translate3d(-2000px, 0, 0)';
    setTimeout(() => target.style.transform = null, 1000);
    console.log('swipeleft');
  });
  */

  gesture.on('swipeup', () => {
    target.style.transform = 'perspective(1000px) translate3d(0, -2000px, 0)';
    setTimeout(() => target.style.transform = null, 1000);
    console.log('swipeup');
  //  console.log("swipe up superspreadcounter is" + superSpreadCounter);
//    if (superSpreadCounter < 2) {
  if (document.getElementById("profileName").innerHTML == "Dave") {
    console.log("that works!");
    meetingRick();
  } else {
    swipeUp();
  }

  //  } else {
      // rickMatchProfile();
  //    console.log("rickMatchProfile();");
    //  meetingRick();
    });

    // showNextProfile();

  gesture.on('swipedown', () => {
    target.style.transform = 'perspective(1000px) translate3d(0, 2000px, 0)';
    setTimeout(() => target.style.transform = null, 1000);
    console.log('swipedown');
  //  console.log("swipe down superspreadcounter is" + superSpreadCounter);
  //  if (superSpreadCounter < 2) {
      swipeDown();
//    }
//    else {
      // rickMatchProfile();
  //    console.log("rickMatchProfile();");
  //    console.log("you're not allowed to choose this");
      // meetingRick();
    });

    // showNextProfile();
  //});
  /*
  let tapTimeout;
  gesture.on('tap', () => {
    target.style.transform = 'perspective(1000px) translate3d(0, 0, 100px)';
    tapTimeout = setTimeout(() => target.style.transform = null, 300);
  });
  gesture.on('doubletap', () => {
    target.style.transform = 'perspective(1000px) translate3d(0, 0, 400px)';
    clearTimeout(tapTimeout);
    setTimeout(() => target.style.transform = null, 300);
  });
  gesture.on('longpress', () => {
    bgColor = '#666688';
    target.style.backgroundColor = bgColor;
  });
  */
});
