export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const mapStateToValues = (obj, property) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key][property];
    return acc;
  }, {});
};

export const mapToAddError = (obj, sObj, property) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = {
      ...obj[key],
      [property]: sObj[key],
    };
    return acc;
  }, {});
};
