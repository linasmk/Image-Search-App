/* =================================================
================ Latest Query First =================
================================================= */
export default (savedQueries = []) => {
  const modifiedArray = [];
  savedQueries.map((item) => modifiedArray.unshift(item));
  return modifiedArray;
};
