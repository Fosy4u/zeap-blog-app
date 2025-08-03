//make first letter of string uppercase
export const capitalizeFirstLetter = (string: string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};
export const checkIfHtml = (text: string) => {
  const htmlRegex = /<[^>]+>/;
  return htmlRegex.test(text);
};

export const correctULTagFromQuill = (str: string) => {
  if (str) {
    let re = /(<ol><li data-list="bullet">)(.*?)(<\/ol>)/;
    let strArr = str.split(re);

    while (
      strArr.findIndex((ele) => ele === '<ol><li data-list="bullet">') !== -1
    ) {
      let indx = strArr.findIndex(
        (ele) => ele === '<ol><li data-list="bullet">',
      );
      if (indx) {
        strArr[indx] = '<ul><li data-list="bullet">';
        let endTagIndex = strArr.findIndex((ele) => ele === '</ol>');
        strArr[endTagIndex] = '</ul>';
      }
    }
    return strArr.join('');
  }
  return str;
};