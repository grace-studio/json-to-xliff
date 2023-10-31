export type InputObject = {
  key: string;
  value: string;
};

export const buildObjectFromArray = (inputArray: InputObject[]) =>
  inputArray.reduce<any>((result, item) => {
    item.key.split('.').reduce((resultObject, current, index, array) => {
      const isLastKey = index === array.length - 1;

      resultObject[current] = isLastKey
        ? item.value
        : resultObject[current] ?? {};

      return resultObject[current];
    }, result);

    return result;
  }, {});
