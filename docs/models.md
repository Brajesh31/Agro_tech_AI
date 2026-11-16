# 🧠 Machine-Learning Models and Data

AgroTech AI contains several independent model services and serialized artifacts. This page defines the documentation and validation standard for those artifacts.

## Model families present

The repository tree includes artifacts for:
- Plant disease recognition using TensorFlow Lite and Keras/HDF5.
- Crop recommendation and crop rotation using pickle/joblib.
- Soil quality and fertilizer prediction.
- Irrigation prediction.
- Seed quality classification.
- Mushroom edibility classification.
- Paddy and sugarcane disease recognition.

The same model may be copied into more than one service directory. Treat copies as separate deployed artifacts unless checksums and provenance establish that they are identical and maintained together.

## Required model record

Every maintained model should document:

| Field | Required detail |
|---|---|
| Model name and version | Stable identifier and artifact version |
| Purpose | Intended task and excluded use cases |
| Dataset provenance | Source, collection date, license, and permissions |
| Input schema | Features, units, image dimensions, file formats |
| Preprocessing | Scaling, encoding, normalization, resizing |
| Output schema | Labels, units, confidence interpretation |
| Evaluation | Dataset split, methodology, metrics |
| Limitations | Known bias, unsupported crops, geography, seasons |
| Runtime | Python and library versions |
| Artifact integrity | SHA-256 checksum and release location |

## Serialized artifact safety

Pickle and joblib files can execute arbitrary code when loaded. Load only artifacts produced by trusted project workflows. Verify hashes and provenance before loading a downloaded artifact.

## Evaluation requirements

- Keep training and evaluation data separate.
- Avoid data leakage between train and test splits.
- Report per-class precision, recall, and F1 where classification is used.
- Include confusion matrices for multi-class disease models.
- Evaluate representative geographic and seasonal conditions.
- Test unsupported images and out-of-distribution inputs.
- Record model uncertainty and failure modes.

## Agricultural safety

Model output is decision support, not a guaranteed diagnosis or official agronomic instruction. For disease treatment, pesticide, fertilizer, irrigation, and other consequential decisions, validate results with qualified local experts and current local guidance.

## Food safety

The mushroom classifier must never be used to determine whether a wild mushroom is safe to eat. A model prediction is not a food-safety test.
