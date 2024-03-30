import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const animatePositionX = (
  selector,
  trigger,
  x,
  duration,
  opacity = 1,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      markers: markers,
      scrub: scrub,
    },
    x: x,
    opacity: opacity,
    duration: duration,
    delay: delay,
    ease: ease,
  });
};

export const animatePositionY = (
  selector,
  trigger,
  y,
  duration,
  opacity = 1,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      markers: markers,
      scrub: scrub,
    },
    y: y,
    opacity: opacity,
    duration: duration,
    delay: delay,
    ease: ease,
  });
};

export const animateTextRemove = (
  selector,
  trigger,
  duration,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.to(selector, {
    duration: duration,
    text: "",
    padding: 0,
    delay: delay,
    ease: ease,
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      markers: markers,
      scrub: scrub,
    },
  });
};

export const animateText = (
  selector,
  text,
  trigger,
  duration,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.to(selector, {
    duration: duration,
    text: text,
    delay: delay,
    ease: ease,
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      markers: markers,
      scrub: scrub,
    },
  });
};

export const animateBgChangeColor = (
  selector,
  color,
  trigger,
  duration,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      scrub: scrub,
      markers: markers,
    },
    duration: duration,
    delay: delay,
    ease: ease,
    backgroundColor: color,
  });
};

export const animateChangeColor = (
  selector,
  color,
  trigger,
  duration,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      scrub: scrub,
      markers: markers,
    },
    duration: duration,
    delay: delay,
    ease: ease,
    color: color,
  });
};

export const animateOpacityChange = (
  selector,
  trigger,
  duration,
  fromOpacity = 0,
  toOpacity = 1,
  ease = "power1.inOut",
  start = "top center",
  end = "bottom center",
  toggleActions = "play none none reverse",
  scrub = false,
  markers = false
) => {
  gsap.fromTo(
    selector,
    { opacity: fromOpacity },
    {
      opacity: toOpacity,
      ease: ease,
      duration: duration,
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        toggleActions: toggleActions,
        scrub: scrub,
        markers: markers,
      },
    }
  );
};

export const animateScale = (
  selector,
  scale,
  trigger,
  duration,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      scrub: scrub,
      markers: markers,
    },
    duration: duration,
    delay: delay,
    ease: ease,
    scale: scale,
  });
};

export const animateRotate = (
  selector,
  rotation,
  trigger,
  duration,
  delay = 0,
  ease = "power1.inOut",
  start = "top center",
  end = "top center",
  toggleActions = "play none none reverse",
  markers = false,
  scrub = false
) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      toggleActions: toggleActions,
      scrub: scrub,
      markers: markers,
    },
    duration: duration,
    delay: delay,
    ease: ease,
    rotation: rotation,
  });
};

export const animateSVGStrokeToFillAll = (
  selector,
  trigger,
  duration,
  durationOC,
  fill = "none",
  delay = 0,
  start = "top center",
  end = "bottom center",
  ease = "power1.inOut",
  easeOC = "power1.inOut",
  scrub = false,
  markers = false
) => {
  const paths = document.querySelectorAll(selector);

  paths.forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(path, {
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
      },
      delay: delay,
      strokeDashoffset: 0,
      duration: duration,
      ease: ease,
      onComplete: function () {
        gsap.to(path, {
          fill: fill,
          duration: durationOC,
          ease: easeOC,
        });
      },
    });
  });
};

export const animateSVGStrokeToFillStagger = (
  selector,
  trigger,
  duration,
  durationOC,
  fill = "none",
  delay = 0,
  start = "top center",
  end = "bottom center",
  ease = "power1.inOut",
  easeOC = "power1.inOut",
  scrub = false,
  markers = false
) => {
  const paths = document.querySelectorAll(selector);

  paths.forEach((path, index) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(path, {
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
      },
      delay: delay + index * duration,
      strokeDashoffset: 0,
      duration: duration,
      ease: ease,
      onComplete: function () {
        gsap.to(path, {
          fill: fill,
          duration: durationOC,
          ease: easeOC,
        });
      },
    });
  });
};

export const animatePin = (
  selector,
  trigger,
  start = "center center",
  end = "center center",
  markers = false,
  scrub = false,
  toggleActions = "play none none none",
  endTrigger = trigger
) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: trigger,
      endTrigger: endTrigger,
      start: start,
      end: end,
      pin: selector,
      scrub: scrub,
      markers: markers,
      toggleActions: toggleActions,
    },
  });
};
