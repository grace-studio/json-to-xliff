import * as xml2js from 'xml2js';

const convertValueToTransUnit =
  (id: string, sourceLang: string) =>
  (value: any): any => {
    if (typeof value === 'string') {
      return {
        $: { id, resname: id },
        source: value,
        target: '',
      };
    }

    if (typeof value === 'object') {
      return Object.entries(value).flatMap(([key, nestedValue]) =>
        convertValueToTransUnit(`${id}.${key}`, sourceLang)(nestedValue),
      );
    }

    return null;
  };

export const jsonToXLIFF = (
  json: string,
  sourceLanguage: string,
  targetLanguage: string,
): string => {
  const jsonObj = JSON.parse(json || '{}');
  const transUnits = Object.entries(jsonObj).flatMap(([key, value]) =>
    convertValueToTransUnit(key, sourceLanguage)(value),
  );

  const xliffObject = {
    xliff: {
      $: {
        version: '1.2',
        xmlns: 'urn:oasis:names:tc:xliff:document:1.2',
      },
      file: {
        $: {
          'source-language': sourceLanguage,
          'target-language': targetLanguage,
          datatype: 'plaintext',
        },
        header: {},
        body: {
          'trans-unit': transUnits,
        },
      },
    },
  };

  return new xml2js.Builder().buildObject(xliffObject);
};
