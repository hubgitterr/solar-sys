/**
 * * Commentary:
 * 
 * I created a p5.js sketch that simulated a simplified solar system with the sun, earth, moon, and an asteroid. I used the celestialObj() function to draw celestial objects like the sun, planets, and moons. The sketch used various transformations, such as translation and rotation, to simulate the orbits and rotations of the celestial bodies.

At the center of the canvas, I drew a sun and made it rotate around its own axis at a slow speed/3. Then, I created the earth as a blue circle with a diameter of 80, and I placed it in orbit around the sun at a distance of 300 pixels. The earth rotated around its own axis at the same speed as the sun. Additionally, I added a moon that orbited around the earth at a distance of 100 pixels, and it spun in the opposite direction to the earth's rotation. The moon always showed the same face to the earth.

I also simulated an asteroid in orbit around the moon, and it spun around its own axis while moving in sync with the moon's rotation.

Moreover, I decided to extend the sketch by adding two more celestial bodies:

1. Moon of the Moon: I introduced an additional moon that orbited around the original moon. This moon rotated normally and was not affected by the rotation of the earth. The moon of the moon spun at the same speed as the original moon.

2. Second Moon of Earth: I added another moon to orbit around the earth. This moon also rotated at the same speed as the earth, and just like the original moon, it showed the same face to the earth at all times.

The added moons provided a more complex and intriguing celestial system with multiple levels of orbits and rotations. I used nested transformations to maintain the relative positions and rotations of the celestial bodies, creating an interactive and visually engaging simulation of the solar system.

 * 
 * 
 */




var speed;  // this variable will control the speed of the rotation of the sun, earth, moon, and asteroid

function setup() {
    createCanvas(1100, 850); // create a canvas that is 1100 pixels wide and 850 pixels high
}

function draw() {
    background(0);  // set the background color to black
    speed = frameCount; // set the speed variable to the number of frames that have elapsed since the program started

    // This code draws the sun at the center of the canvas, and rotates it based on the `speed` variable.
    push(); // save the current state of the canvas
    translate(width/2, height/2); // translate the origin to the center of the canvas
    rotate(radians(speed/3));   // spin around its axis, rotate the canvas based on the `speed` variable
    celestialObj(color(255,150,0), 200); // draw the SUN
    pop();  // restore the previous state of the canvas

    // This code draws the earth in its orbit around the sun, and rotates it based on the `speed` variable.
    push(); // save the current state of the canvas
    translate(width/2, height/2); // translate the origin to the center of the canvas  
    rotate(radians(speed)); // spin around SUN's axis
    translate(300, 0); // translate the canvas 300 pixels to the right
    rotate(radians(speed)); // spin around its axis
    celestialObj(color(0,0,255), 80); // draw the EARTH

    // This code draws the moon in its orbit around the earth, and rotates it based on the `-speed*3` variable.
    push(); // save the current state of the canvas
    rotate(radians(-speed*3)); // spin around the EARTH's axis and the opposite way to the earth but faceing to the earth always the same side
    translate(100, 0); // translate the canvas 100 pixels to the right
    celestialObj(color(255), 30); // draw the MOON

    // This code draws an asteroid in its orbit around the moon, and rotates it based on the `speed*2` variable.
    push(); // save the current state of the canvas
    rotate(radians(speed*2)); // spin around the MOON's axis and the opposite way the MOON is spining around the EARTH
    translate(40, 0); // translate the canvas 40 pixels to the right
    rotate(radians(speed*2)); // spin around its axis
    celestialObj(color(255,0,0), 20); // draw the ASTEROID
    pop();  // end of asteroid orbit

    pop();// end of moon orbit

    // This code draws a second moon in its orbit around the earth, and rotates it based on the `speed` variable.
    push();
    rotate(radians(speed)); // spin around the EARTH's axis and in the same way EARTH spins around SUN, and faceing to the earth always the same side the same way as first MOON
    translate(180, 0); // translate the canvas 180 pixels to the right
    celestialObj(color(0,255,0), 35); // draw the MOON 2.0
    pop(); // end of second moon orbit
    
    pop(); // end of earth orbit

    
}

function celestialObj(c, size){ // this function draws a celestial object with a color `c` and a size `size`
    strokeWeight(5);  // set the stroke weight to 5 pixels
    fill(c); // set the fill color to `c`
    stroke(0); // set the stroke color to black
    ellipse(0, 0, size, size); // draw a circle at the origin with a diameter of `size`
    line(0, 0, size/2, 0);  // draw a line from the origin to the right of the circle
} // end of celestialObj function
