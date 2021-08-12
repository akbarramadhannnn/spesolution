export const convertNumberToIdr = (number) => {
  const format = number.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  return 'IDR ' + convert.join('.').split('').reverse().join('');
};
