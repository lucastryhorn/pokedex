const capitalizeFirstLetter = (value: string) => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return '';
};

export default capitalizeFirstLetter;
