/* =================================================
================ Latest Query First =================
================================================= */
export default (savedQueries = []) => {
  let modifiedArray = [];
  savedQueries.map((item) => {
    modifiedArray.unshift(item);
  });
  return modifiedArray;
};
