const canvasSketch = require('canvas-sketch');
const utils = require('canvas-sketch-util')

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  let dimensions = settings.dimensions
  let rows = 3
  let columns = 4


  console.log(dimensions)
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
