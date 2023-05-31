export const selectUnique = (array1, array2) => {
  const mergedArray = [...array1, ...array2];
  const uniqueObjects = [];

  mergedArray.forEach((obj) => {
    const existingObj = uniqueObjects.find((item) => item.id === obj.id);
    if (!existingObj) {
      uniqueObjects.push(obj);
    }
  });

  return uniqueObjects;
};
