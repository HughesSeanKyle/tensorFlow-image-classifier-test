const { loadImagesFromFolder } = require('./utils/image_utils');

/*
    Notes: refactor later
*/

async function loadTrainingImageData() {
	const trainCats = await loadImagesFromFolder('../data/train/cats');
	const trainDogs = await loadImagesFromFolder('../data/train/dogs');

	console.log(trainCats);

	return {
		trainCats,
		trainDogs,
	};
}

async function loadValidationImageData() {
	const validationCats = await loadImagesFromFolder('../data/validation/cats');
	const validationDogs = await loadImagesFromFolder('../data/validation/dogs');

	return {
		validationCats,
		validationDogs,
	};
}

async function loadTestImageData() {
	const testCats = await loadImagesFromFolder('../data/test/cats');
	const testDogs = await loadImagesFromFolder('../data/test/dogs');

	return {
		testCats,
		testDogs,
	};
}

console.log(loadTrainingImageData());

module.exports = {
	loadTrainingImageData,
	loadValidationImageData,
	loadTestImageData,
};
