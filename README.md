# tensorFlow-image-classifier-test

## Errors

### Tensorflow error

When using `@tensorflow/tfjs` as opposed to `@tensorflow/tfjs-node` TensorFlow seems to work. However, the Node js implementation seems to produce the folloing error:

node:internal/modules/cjs/loader:1310
return process.dlopen(module, path.toNamespacedPath(filename));

Error: A dynamic link library (DLL) initialization routine failed.

### TensorFlow solution

Pending...

## Notes regarding image sample size

- 1. Sample size of 1000 images per feature/input
- 2. Sample sizes split as follows per feature/input
  - Training: 70% of feature/input
  - Validation: 15% of feature/input
  - Testing: 15% of feature/input
- 3. Sample images collectively to large to push to Github and has been excluded from remote push
- 4. Sample images dataset can be located [`here`](https://www.tensorflow.org/datasets/catalog/cats_vs_dogs)
- 5. Data directory structure excluded from push is as follows:

![Folder_Structure](/assets/images/Image_classifier_Folder_Structure.png)
