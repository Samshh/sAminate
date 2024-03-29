
# sAminations v1.0.1
GSAP Animation Library by samshh, it primarily uses the ScrollTrigger and TextPlugin from GSAP. Please refer to the GSAP Docs for more in-depth explanation

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

-   `selector`: A CSS selector string that identifies the HTML element to be animated.
    
-   `trigger`: A CSS selector string that identifies the HTML element that triggers the animation when it's scrolled into view.
    
-   `duration`: The duration of the animation, in seconds.
    
-   `delay`  (default  `0`): The amount of time, in seconds, to wait before starting the animation.
    
-   `ease`  (default  `"power1.inOut"`): The easing function to use for the animation. Easing functions determine the rate of change of the animation.
    
-   `start`  (default  `"top center"`): The position of the scroll where the animation should start. It's a string with two values: one for the position of the scroll and one for the position of the trigger.
    
-   `end`  (default  `"top center"`): The position of the scroll where the animation should end.
    
-   `toggleActions`  (default  `"play none none reverse"`): A string with four values that determine what happens when the scroll enters and leaves the start and end points of the trigger.
    
-   `markers`  (default  `false`): If  `true`, GSAP will show markers at the start and end points of the trigger.
    
-   `scrub`  (default  `false`): If  `true`, the animation will scrub (i.e., progress at the same rate as the scroll).

**Here are the unique parameters used in some functions:**

-   `opacity`: The starting opacity of the element. The element will animate from this opacity to its current opacity.
    
-   `x`: The starting x-coordinate of the element. The element will animate from this position to its current position.
    
-   `y`: The starting y-coordinate of the element. The element will animate from this position to its current position.
    
-   `text`: The text to animate to.
    
-   `color`: The color to animate to.
    
-   `fromOpacity`: The starting opacity for the  `animateOpacityChange`  function.
    
-   `toOpacity`: The ending opacity for the  `animateOpacityChange`  function.
    
-   `scale`: The scale to animate to.
    
-   `rotate`: The rotation angle to animate to.
    
-   `fill`: The fill color to animate to in the SVG animation functions.
    
-   `durationOC`: The duration of the fill color animation in the SVG animation functions.
    
-   `easeOC`: The easing function for the fill color animation in the SVG animation functions.
    
-   `endTrigger`: An optional CSS selector string that identifies the HTML element that ends the pinning animation when it's scrolled into view.
### animatePositionX ();
*copy the code below and change each parameters*
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
*copy the code below and change each parameters*
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
*copy the code below and change each parameters*
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
*copy the code below and change each parameters*
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
*copy the code below and change each parameters*
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
*copy the code below and change each parameters*
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
*copy the code below and change each parameters*
```bash
animateOpacityChange(
selector,
fromOpacity,
toOpacity,
trigger,
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
*copy the code below and change each parameters*
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
markers ,
scrub
);
```
animate the element of your HTML to change its scale.
### animateScale();
*copy the code below and change each parameters*
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
markers ,
scrub
);
```
animate the element of your HTML to change its scale.
### animateRotate();
*copy the code below and change each parameters*
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
### animateSVGStrokeToFillAll();
*copy the code below and change each parameters*
```bash
animateSVGStrokeToFillAll(
selector, // sample ".svg path"
trigger,
start,
end,
scrub,
markers,
delay,
duration,
ease,
fill,
durationOC,
easeOC
);
```
animate path of an SVG to have a drawing effect on a single path SVG or in multiple SVG it will animate all the paths simultaneously.
### animateSVGStrokeToFillStagger();
*copy the code below and change each parameters*
```bash
animateSVGStrokeToFillStagger(
selector, // sample ".svg path"
trigger,
start,
end,
scrub,
markers,
delay,
duration,
ease,
fill,
durationOC,
easeOC
);
```
animate path of an SVG to have a drawing effect on a single path SVG or in multiple SVG it will animate the paths each at a time.

**THANK YOU!**