import { xliffToJson } from './toJson.js';
import { jsonToXLIFF } from './toXliff.js';

export const ConverterFactory = {
  xliff: jsonToXLIFF,
  json: xliffToJson,
};
