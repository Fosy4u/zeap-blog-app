//make first letter of string uppercase
export const capitalizeFirstLetter = (string: string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};
export const checkIfHtml = (text: string) => {
  const htmlRegex = /<[^>]+>/;
  return htmlRegex.test(text);
};
