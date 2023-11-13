#!/usr/bin/env -S node

import { Command } from 'commander';
import chalk from 'chalk';
import { ConverterService } from './services/ConverterService.js';

(() => {
  console.log(chalk.green.bold('JSON to XLIFF'));
  console.log(chalk.green('converts a JSON to XLIFF or a XLIFF to JSON\n'));
  const program = new Command();

  program.name('json-to-xliff').usage('command [options]');

  program
    .command('toXliff')
    .option('-f, --file <string>', 'input JSON file')
    .option('-o, --out <string>', 'output XLIFF file')
    .option('-l, --lang <string>', 'source language')
    .option('-t, --target <string>', 'target language')
    .action((input) => {
      const options = {
        ...input,
      };

      if (!options.file) {
        console.error(chalk.yellow.bold('\nMissing options: input file\n'));
        program.help();
      }
      console.log(chalk.cyan(`input file: ${options.file}`));

      if (!options.out) {
        console.error(chalk.yellow.bold('\nMissing options: output file\n'));
        program.help();
      }
      console.log(chalk.cyan(`output file: ${options.out}`));

      if (!options.lang) {
        console.error(chalk.yellow.bold('\nMissing options: language\n'));
        program.help();
      }
      console.log(chalk.cyan(`language: ${options.lang}`));

      ConverterService.toXliff(
        options.file,
        options.out,
        options.lang,
        options.target,
      );
    });

  program
    .command('toJson')
    .option('-f, --file <string>', 'input XLIFF file')
    .option('-o, --out <string>', 'output JSON file')
    .action((input) => {
      const options = {
        ...input,
      };

      if (!options.file) {
        console.error(chalk.yellow.bold('\nMissing options: input file\n'));
        program.help();
      }
      console.log(chalk.cyan(`input file: ${options.file}`));

      if (!options.out) {
        console.error(chalk.yellow.bold('\nMissing options: output file\n'));
        program.help();
      }
      console.log(chalk.cyan(`output file: ${options.out}`));

      ConverterService.toJson(options.file, options.out);
    });

  program.command('help', { isDefault: true }).action(() => {
    program.help();
  });

  program.parse(process.argv);
})();
