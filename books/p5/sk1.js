let sketch = p => {
  let x = 100;
  let y = 100;
  
  // () are required, if there is no parameters
  p.setup = () => {
    p.createCanvas(800, 610);
    p.stroke(200); // Set line drawing color to white
    p.frameRate(10);
  };
  
  // Each statement is executed in sequence and after the last line is read, 
  // the first line is executed again.
  p.draw = () => {
    p.background(64);
    y = y - 1;
    if (y < 0) {
      y = height;
    }
    p.line(0, y, width, y);
  };
};

let p5a = new p5(sketch, 'c1');
