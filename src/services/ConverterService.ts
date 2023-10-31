import chalk from 'chalk';
import { ConverterFactory } from '../factories/ConverterFactory.js';
import { FileUtil } from '../utils/FileUtil.js';

const convert = async (
  inputFile: string,
  outputFile: string,
  lang: string,
  to: 'xliff' | 'json',
) => {
  const file = FileUtil.readFile(inputFile);

  if (!file) {
    return console.error('invalid input file');
  }

  const outputPath = outputFile.split('/').slice(0, -1).join('/');
  const outputFileName = outputFile.split('/').at(-1);

  if (!outputFileName) {
    return console.error('invalid output file');
  }

  const content = await ConverterFactory[to](file, lang);

  FileUtil.writeFile(outputPath, outputFileName, content);

  console.log(chalk.green(`\nSuccess! Converted file to ${to.toUpperCase()}.`));
};

export const ConverterService = {
  toXliff: (inputFile: string, outputFile: string, lang: string) =>
    convert(inputFile, outputFile, lang, 'xliff'),
  toJson: (inputFile: string, outputFile: string, lang: string) =>
    convert(inputFile, outputFile, lang, 'json'),
};
