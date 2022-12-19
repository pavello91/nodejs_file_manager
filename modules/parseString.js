export const parseString = (value) => {
  const firstQwery = [];
  const secondQwery = [];
  let flagFirstDone = false;
  value.split(' ').forEach((el) => {
    if (!flagFirstDone) {
      firstQwery.push(el);
    } else {
      secondQwery.push(el);
    }
    if (el.includes('.')) {
      flagFirstDone = true;
    }
  });
  return [firstQwery.join(' '), secondQwery.join(' ')];
};
