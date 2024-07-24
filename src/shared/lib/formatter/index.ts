const formatter = Intl.NumberFormat('en', {
  notation: 'compact'
});

const formatNumberWithCommas = (number: number | string | null) => {
  if (number === null) {
    return 0;
  }

  if (typeof number === 'number') {
    return Math.floor(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const formatBalance = (rawBalance: string) =>
  (parseInt(rawBalance) / 1e18).toFixed(2);

const formatChainAsNum = (chainIdHex: string) => parseInt(chainIdHex);

const formatAddress = (addr: string) =>
  `${addr.slice(0, 5)}...${addr.slice(-4)}`;

export {
  formatAddress,
  formatBalance,
  formatChainAsNum,
  formatNumberWithCommas,
  formatter
};
