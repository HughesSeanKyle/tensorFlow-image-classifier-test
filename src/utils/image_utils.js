const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

// Helpers
/*
    Helps to convert all images to tensors 
*/
async function loadImage(filePath) {
	const buffer = await fs.readFileSync(filePath);
	const pixels = await tf.node.decodeImage(buffer);
	return pixels;
}

/*
    Gets images from given folder path, converts to tensors, and returns as array 
*/
async function loadImagesFromFolder(folderPath) {
	const fileNames = fs.readdirSync(folderPath);
	const images = [];
	for (let i = 0; i < fileNames.length; i++) {
		const fileName = fileNames[i];
		const filePath = path.join(folderPath, fileName);
		const image = await loadImage(filePath);
		images.push(image);
	}
	return images;
}

function rename_files() {
	const folderPath = '../../data';

	const folders = ['train', 'validation', 'test'];
	const subfolders = ['cats', 'dogs'];

	for (let i = 0; i < folders.length; i++) {
		const folder = folders[i];
		for (let j = 0; j < subfolders.length; j++) {
			const subfolder = subfolders[j];
			const dirPath = path.join(folderPath, folder, subfolder);
			fs.readdir(dirPath, function (err, files) {
				if (err) {
					console.error('Error while reading directory', err);
					return;
				}
				files.forEach((file, index) => {
					const oldPath = path.join(dirPath, file);
					const ext = path.extname(file);
					const newName = `${subfolder}_${index}${ext}`;
					const newPath = path.join(dirPath, newName);
					fs.renameSync(oldPath, newPath);
					console.log(`${oldPath} renamed to ${newPath}`);
				});
			});
		}
	}
}

module.exports = { loadImagesFromFolder };
