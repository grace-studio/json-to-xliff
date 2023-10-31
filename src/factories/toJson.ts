import * as xml2js from 'xml2js';
import {
  InputObject,
  buildObjectFromArray,
} from '../utils/buildObjectFromArray.js';
import { sortByProperty } from '../utils/sortByProperty.js';

export const xliffToJson = async (xliffXml: string) => {
  const parser = new xml2js.Parser();
  const jsonObj = await parser.parseStringPromise(xliffXml);

  const transUnits: {
    $: { id?: string; resname?: string };
    target: string[] | { _: string }[];
  }[] = jsonObj?.xliff?.file[0]?.body[0]['trans-unit'];

  const items = transUnits
    .map(({ $: { id, resname }, target }) => ({
      key: resname || id,
      value: typeof target[0] === 'string' ? target[0] : target[0]._,
    }))
    .filter((item) => Boolean(item.key))
    .sort(sortByProperty('key', 'asc')) as InputObject[];

  const obj = buildObjectFromArray(items) ?? {};

  return JSON.stringify(obj);
};
