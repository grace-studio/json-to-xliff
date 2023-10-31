# @grace-studio/json-to-xliff

[![npm version](https://badge.fury.io/js/@grace-studio%2Fjson-to-xliff.svg)](https://badge.fury.io/js/@grace-studio%2Fjson-to-xliff)

The JSON to XLIFF converter tool currently supports XLIFF version 1.2.

## Installation

To install the JSON to XLIFF converter tool for global access, you can use either npm or yarn:

```bash
npm i -g @grace-studio/json-to-xliff

# or

yarn global add @grace-studio/json-to-xliff
```

## Usage

**To convert a JSON file to XLIFF:**

```bash
json-to-xliff toXliff \
--file <input-file> \
--out <output-file> \
--lang <language> \
```

**To convert a XLIFF file to JSON:**

```bash
json-to-xliff toJson \
--file <input-file> \
--out <output-file> \
--lang <language> \
```

Replace `<input-file>`, `<output-file>`, and `<language>` with your specific file and language preferences.
