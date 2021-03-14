let sketch = p => {
  let x = 100;
  let y = 100;
  
  // () are required, if there is no parameters
  p.setup = () => {
    p.createCanvas(800, 610);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

let p5a = new p5(sketch, 'c1');
