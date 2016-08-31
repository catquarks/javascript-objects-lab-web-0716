var recipes = {catfood: ["fish", "chicken"], dogfood: ["lamb", "rice"]}

function updateObjectWithKeyAndValue(object, key, value){
	var newObject = Object.assign({}, object, {})
	newObject[key] = value 
	return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	debugger;
	object[key] = value
	return object
	}


function deleteFromObjectByKey(object, key) {
	return Object.assign({}, delete(object.key))
}

function destructivelyDeleteFromObjectByKey(object, key){
	delete object[key]
	return object
}

