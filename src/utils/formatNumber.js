export default (number) => {
  const formatNumbering = new Intl.NumberFormat("en-US");
  return formatNumbering.format(number);
};
