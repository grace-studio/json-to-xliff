# @grace-studio/json-to-xliff

[![npm version](https://badge.fury.io/js/@grace-studio%2Fjson-to-xliff.svg)](https://www.npmjs.com/package/@grace-studio/json-to-xliff)

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
--file <input-json-file> \
--out <output-xliff-file> \
--lang <language-code> \
```

**To convert a XLIFF file to JSON:**

```bash
json-to-xliff toJson \
--file <input-xliff-file> \
--out <output-json-file>
```
