
//creates grid with set amount of elements per side, requires dimensions
const createObjects = (elementsPerSide, dimensions) => {
    let arrOfObjects = []
    const x = dimensions[0]
    const y = dimensions[1]
    const multiplier = Math.sqrt(elementsPerSide)
    let distanceX = x / elementsPerSide
    let distanceY = y / elementsPerSide
    let counter = 1
    for (let i = 1; i <= elementsPerSide; i++) {
        for (let j = 1; j <= elementsPerSide; j++) {
            let obj = {}
            //for large numbers drop -1
            obj.y = -distanceY/multiplier*Math.sqrt(multiplier) + (distanceY * i)

            obj.x = -distanceX/multiplier*Math.sqrt(multiplier) + (distanceX * j)
            
            obj.id = counter
            arrOfObjects.push(obj)
            counter++
        }
    }
    console.log(arrOfObjects)
    return arrOfObjects
}

module.exports = createObjects