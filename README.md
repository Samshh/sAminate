# sAminations v1.0.8

GSAP Animation Library by [samshh](https://samshh.netlify.app/), it primarily uses the ScrollTrigger and TextPlugin from GSAP. Please refer to the [GSAP Docs](https://gsap.com/docs/v3/) for more in-depth explanation

**Animations:**

- SVG Path and Fill animation (recommended)
- Text Animations
- Position Animations
- Opacity Animations
- Scale Animations
- Rotate Animations
- Background Color and Color Animations
- Pin Element Animations

**Pros:**

- Use the source code as boilerplate for your project :>
- fully customizable parameters

**Cons:**

- uhmm?

This is an early version, and I still have more ways to learn... if issues or bugs are seen, I would be glad if you report it to me, and I'll try to fix it ASAP

## Installation

Install via npm in your directory:

```bash
cd your/project/root/directory

npm install gsap
npm install saminations
```

## Usage

Import:

```bash
import { gsap } from  "gsap";
import { ScrollTrigger } from  "gsap/ScrollTrigger";
import { TextPlugin } from  "gsap/TextPlugin";
import { functionName, anotherFunctionName } from 'saminations';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
```

## Functions

**Parameter Breakdown:**

- `selector`: A CSS selector string that identifies the HTML element to be animated.
- `trigger`: A CSS selector string that identifies the HTML element that triggers the animation when it's scrolled into view.
- `duration`: The duration of the animation, in seconds.
- `delay` (default `0`): The amount of time, in seconds, to wait before starting the animation.
- `ease` (default `"power1.inOut"`): The easing function to use for the animation. Easing functions determine the rate of change of the animation.
- `start` (default `"top center"`): The position of the scroll where the animation should start. It's a string with two values: one for the position of the scroll and one for the position of the trigger.
- `end` (default `"top center"`): The position of the scroll where the animation should end.
- `toggleActions` (default `"play none none reverse"`): A string with four values that determine what happens when the scroll enters and leaves the start and end points of the trigger.
- `markers` (default `false`): If `true`, GSAP will show markers at the start and end points of the trigger.
- `scrub` (default `false`): If `true`, the animation will scrub (i.e., progress at the same rate as the scroll).

**Here are the unique parameters used in some functions:**

- `opacity`: The starting opacity of the element. The element will animate from this opacity to its current opacity.
- `x`: The starting x-coordinate of the element. The element will animate from this position to its current position.
- `y`: The starting y-coordinate of the element. The element will animate from this position to its current position.
- `text`: The text to animate to.
- `color`: The color to animate to.
- `fromOpacity`: The starting opacity for the `animateOpacityChange` function.
- `toOpacity`: The ending opacity for the `animateOpacityChange` function.
- `scale`: The scale to animate to.
- `rotate`: The rotation angle to animate to.
- `fill`: The fill color to animate to in the SVG animation functions.
- `durationOC`: The duration of the fill color animation in the SVG animation functions.
- `easeOC`: The easing function for the fill color animation in the SVG animation functions.
- `endTrigger`: An optional CSS selector string that identifies the HTML element that ends the pinning animation when it's scrolled into view.

### animatePositionX ();

_copy the code below and change each parameters_

```bash
animatePositionX(
  selector,
  trigger,
  x,
  duration,
  opacity,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate an HTML element along the x-axis

### animatePositionY ();

_copy the code below and change each parameters_

```bash
animatePositionX(
  selector,
  trigger,
  y,
  duration,
  opacity,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate an HTML element along the y-axis

### animateTextRemove ();

_copy the code below and change each parameters_

```bash
animateTextRemove(
  selector,
  trigger,
  duration,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate an HTML element to remove its text content.

### animateText ();

_copy the code below and change each parameters_

```bash
animateText(
  selector,
  text,
  trigger,
  duration,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate the text content of an HTML element.

### animateBgChangeColor();

_copy the code below and change each parameters_

```bash
animateBgChangeColor(
  selector,
  color,
  trigger,
  duration,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate the background element of your HTML to change its background-color.

### animateChangeColor();

_copy the code below and change each parameters_

```bash
animateChangeColor(
  selector,
  color,
  trigger,
  duration,
  delay,
  ease, 
  start,
  end,
  toggleActions,
  markers,
  scrub 
);
```

animate the element of your HTML to change its color.

### animateOpacityChange();

_copy the code below and change each parameters_

```bash
animateOpacityChange(
  selector,
  trigger,
  duration,
  fromOpacity,
  toOpacity,
  ease,
  start,
  end,
  toggleActions,
  scrub,
  markers
);
```

animate the element of your HTML to change its opacity.

### animateScale();

_copy the code below and change each parameters_

```bash
animateScale(
  selector,
  scale,
  trigger,
  duration,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate the element of your HTML to change its scale.

### animateRotate();

_copy the code below and change each parameters_

```bash
animateRotate(
  selector,
  rotate,
  trigger,
  duration,
  delay,
  ease,
  start,
  end,
  toggleActions,
  markers,
  scrub
);
```

animate the element of your HTML to change its rotation.

### animateSVGStroke();

_copy the code below and change each parameters_

```bash
animateSVGStroke(
  selector, // sample ".svg path"
  trigger,
  duration,
  fill,
  delay,
  start,
  end,
  toggleActions
  ease,
  scrub,
  markers
);
```

animate paths of an SVG to have a drawing effect on a single path or in multiple paths it will animate all the paths simultaneously.

### animateSVGStrokeStagger();

_copy the code below and change each parameters_

```bash
animateSVGStrokeStagger(
  selector, // sample ".svg path"
  trigger,
  duration,
  fill,
  delay,
  start,
  end,
  toggleActions // unique default "play reset play reset"
  ease,
  scrub,
  markers
);
```

animate path of an SVG to have a drawing effect on a single path or in multiple paths it will animate the paths each at a time.

### animatePin();

_copy the code below and change each parameters_

```bash
animatePin(
  selector,
  trigger,
  start, // unique default "center center"
  end, // unique default "center center"  
  markers,
  scrub,
  toggleActions,
  endTrigger // unique default as trigger
);
```

pin an element to stay in viewport while scrolling.

**THANK YOU!**
