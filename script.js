const canvasSketch = require('canvas-sketch');
const utils = require('canvas-sketch-util')

const settings = {
	dimensions: [2048, 2048]
};

const sketch = () => {
	let dimensions = settings.dimensions

	const createObjects = (elementsPerSide) => {
		let arrOfObjects = []
		let multiplier = Math.sqrt(elementsPerSide)
		let dimensionValue = Math.ceil(multiplier)
		const x = dimensions[0]
		const y = dimensions[1]
		let distanceX = x / multiplier
		let distanceY = y / multiplier
		let counter = 1
		for (let i = 1; i <= elementsPerSide; i++) {
			for (let j = 1; j <= elementsPerSide; j++) {
				let obj = {}
				//for large numbers drop -1
				obj.y = y - distanceY * i / (Math.sqrt(elementsPerSide) -1)
				obj.x = x - distanceX * j / (Math.sqrt(elementsPerSide) -1)
				obj.id = counter
				arrOfObjects.push(obj)
				counter++
			}
		}
		return arrOfObjects
	}

	let numOfObjects = 42

	return ({context, width, height}) => {
		console.log(createObjects(numOfObjects))
		let objects_to_render = createObjects(numOfObjects)
		for (let obj of objects_to_render) {
			const {x, y, id} = obj
			context.fillStyle = 'black';
			margin = 1
			context.fillRect(x * margin, y * margin, 15, 15);
		}
	};
};

canvasSketch(sketch, settings);
