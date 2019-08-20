const random = require('canvas-sketch-util/random')

const applyNoise = (arrOfObjects, on = 0) => {
    if (on === 1) {
        console.log('aa')
        let points = arrOfObjects.filter(() => {
            return Math.random() > random.gaussian(0.5, 1)
        })
        return points
    } else {
        return arrOfObjects
    }
}

module.exports = applyNoise