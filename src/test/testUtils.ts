/**
 * Returns node(s) with the given data-test attribute
 * @param {ShalloWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 */
export const findByTestAttr = (wrapper, val): any => {
  return wrapper.find(`[data-test='${val}']`);
}

