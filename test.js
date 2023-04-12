const tf = require('@tensorflow/tfjs-node');

async function main() {
	// Create a simple model that adds two numbers
	const model = tf.sequential();
	model.add(tf.layers.dense({ units: 1, inputShape: [2] }));
	model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

	// Train the model on some dummy data
	const xs = tf.tensor2d([
		[1, 1],
		[2, 2],
		[3, 3],
		[4, 4],
	]);
	const ys = tf.tensor2d([[2], [4], [6], [8]]);
	await model.fit(xs, ys, { epochs: 10 });

	// Use the model to make predictions on new data
	const predictions = model.predict(
		tf.tensor2d([
			[5, 5],
			[6, 6],
		])
	);
	predictions.print();
}

main();
