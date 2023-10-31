#!/usr/bin/env -S node

import { Command } from 'commander';
import chalk from 'chalk';
import { ConverterService } from './services/ConverterService.js';

(() => {
  console.log(chalk.green.bold('JSON to XLIFF\n'));
  const program = new Command();

  program
    .command('toXliff')
    .option('-f, --file <string>', 'input file')
    .option('-o, --out <string>', 'output file')
    .option('-l, --lang <string>', 'language')
    .action((input) => {
      const options = {
        ...input,
      };

      if (!options.out) {
        return console.error('missing output file');
      }
      if (!options.file) {
        return console.error('missing input file');
      }
      if (!options.lang) {
        return console.error('missing language');
      }

      ConverterService.toXliff(options.file, options.out, options.lang);
    });

  program
    .command('toJson')
    .option('-f, --file <string>', 'input file')
    .option('-o, --out <string>', 'output file')
    .option('-l, --lang <string>', 'language')
    .action((input) => {
      const options = {
        ...input,
      };

      if (!options.out) {
        return console.error('missing output file');
      }
      if (!options.file) {
        return console.error('missing input file');
      }
      if (!options.lang) {
        return console.error('missing language');
      }

      ConverterService.toJson(options.file, options.out, options.lang);
    });

  program.command('help', { isDefault: true }).action(() => {
    program.help();
  });

  program.parse(process.argv);
})();
