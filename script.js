const canvasSketch = require('canvas-sketch');
const applyNoise = require('./utils/applyNoise')
const createObjects = require('./utils/createObjects')


const settings = {
	dimensions: [2048, 2048]
};

const sketch = () => {
	let dimensions = settings.dimensions
	let numOfObjects = 15

return ({ context, width, height }) => {
	//background
	context.fillStyle = 'white'
	context.fillRect(0, 0, width, height)
	//grid array creation
	let objects_to_render = applyNoise(createObjects(numOfObjects, dimensions), 0)
	for (let obj of objects_to_render) {
		const { x, y } = obj
		context.fillStyle = 'black';
		context.fillRect(x, y, 15, 15);
	}
};
};

canvasSketch(sketch, settings);
