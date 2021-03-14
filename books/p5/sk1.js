let sketch = p => {
  let x = 100;
  let y = 400;
  
  // () are required, if there is no parameters
  p.setup = () => {
    p.createCanvas(600, 400);
    p.stroke(200);
    p.frameRate(10);
  };

  p.draw = () => {
    p.background(64);
    y = y - 2;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  };
};

let p5a = new p5(sketch, 'c1');
