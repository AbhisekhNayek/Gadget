export const generateCodename = () => {
  const codenames = ['The Kraken', 'The Nightingale', 'The Phantom', 'The Goliath'];
  return codenames[Math.floor(Math.random() * codenames.length)];
};
