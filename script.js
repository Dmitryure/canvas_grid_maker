const canvasSketch = require('canvas-sketch');
const utils = require('canvas-sketch-util')
const random = require('canvas-sketch-util/random');
const palettes = require('nice-color-palettes/1000.json')
let palette = random.pick(palettes);
const applyNoise = require('./utils/applyNoise')


const settings = {
	dimensions: [2048, 2048]
};

const background = palette.shift()

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
		for (let i = 1; i < elementsPerSide; i++) {
			for (let j = 1; j < elementsPerSide; j++) {
				let obj = {}
				//for large numbers drop -1
				obj.y = distanceY + y - distanceY * i / (Math.sqrt(elementsPerSide) - 1)
				obj.x = distanceX + x - distanceX * j / (Math.sqrt(elementsPerSide) - 1)
				obj.color = random.pick(palette)
				obj.id = counter
				arrOfObjects.push(obj)
				counter++
			}
		}
		return arrOfObjects
	}


let numOfObjects = 42
let textArr = ['엄', '엄', '한']

return ({ context, width, height }) => {
	console.log(createObjects(numOfObjects))
	context.fillStyle = background
	context.font = '75px Arial'
	context.fillRect(0, 0, width, height)
	let objects_to_render = applyNoise(createObjects(numOfObjects))
	for (let obj of objects_to_render) {
		const { x, y, color, id } = obj
		context.rotate(20* Math.PI / 180)
		context.fillText(random.pick(textArr), x, y)
		context.fillStyle = color;
	}
	console.log(context)
};
};

canvasSketch(sketch, settings);
