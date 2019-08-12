const canvasSketch = require('canvas-sketch');
const utils = require('canvas-sketch-util')

const settings = {
	dimensions: [2048, 2048]
};

const sketch = () => {
	let dimensions = settings.dimensions

	const createObjects = (numberOfObjects) => {
		let arrOfObjects = []
		let multiplier = Math.sqrt(numberOfObjects)
		const x = dimensions[0]
		const y = dimensions[1]
		let distanceX = x / multiplier
		let distanceY = y / multiplier
		for (let i = 1; i < numberOfObjects; i++) {
			for (let j = 1; j < Math.ceil(multiplier); j++) {
				let obj = {}
				console.log(dimensions[1] / multiplier * i)
				console.log(multiplier)
				obj.y = y - distanceY * j
				obj.x = x - distanceX * j
				arrOfObjects.push(obj)
			}
			return arrOfObjects
		}
	}

	console.log(createObjects(10))


	return ({context, width, height}) => {
	  let objects_to_render = createObjects(10)
	  for (let obj of objects_to_render) {
	    const {x , y} = obj
        context.fillStyle = 'black';
        context.fillRect(x, y, 100, 100);
      }
	};
};

canvasSketch(sketch, settings);
