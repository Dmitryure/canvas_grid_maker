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
		let dimensionValue = Math.ceil(multiplier)
		const x = dimensions[0]
		const y = dimensions[1]
		let distanceX = x / multiplier
		let distanceY = y / multiplier
		let counter = 1
		for (let i = 1; i <= dimensionValue; i++) {
			console.log(i)
			for (let j = 1; j <= dimensionValue; j++) {
				console.log(j)
				let obj = {}
				obj.y = y - distanceY * i
				obj.x = x - distanceX * j
				obj.id = counter
				arrOfObjects.push(obj)
				counter++
			}
		}
		return arrOfObjects
	}

	console.log(createObjects(10))

	return ({context, width, height}) => {
		let objects_to_render = createObjects(10)
		for (let obj of objects_to_render) {
			const {x, y, id} = obj
			context.fillStyle = 'black';
			margin = 1
			context.fillRect(x * margin, y * margin, 100, 100);
		}
	};
};

canvasSketch(sketch, settings);
