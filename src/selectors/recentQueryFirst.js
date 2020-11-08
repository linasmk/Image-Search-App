/* =================================================
================ Recent Query First =================
================================================= */
export default (savedQueries = [], compareProps = []) => {
  let modifiedArray = [];
  if (compareProps.length === 0 && savedQueries.length > 0)
    compareProps.unshift(...Object.keys(savedQueries[0]));
  savedQueries.map((item) => {
    if (
      !modifiedArray.some((item2) =>
        compareProps.every((eachProps) => item2[eachProps] === item[eachProps])
      )
    )
      modifiedArray.unshift(item);
  });
  return modifiedArray;
};
