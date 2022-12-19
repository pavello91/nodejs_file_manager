export const getName = () => {
  const nameArgv = process.argv.find(
    (el) => el.substring(0, 11) === '--username='
  );
  if (nameArgv) {
    return nameArgv.substring(11).trim();
  } else {
    return 'Default';
  }
};
