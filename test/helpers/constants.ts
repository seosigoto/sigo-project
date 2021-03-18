import BigNumber from 'bignumber.js';
export const oneEther = new BigNumber(Math.pow(10, 18));

export const APPROVAL_AMOUNT_LENDING_POOL = '1000000000000000000000000000';

export const MOCK_CHAINLINK_AGGREGATORS_PRICES = {
    // Update to USD-based price feeds
    AAVE: oneEther.multipliedBy('0.003620948469').toFixed(),
    BAT: oneEther.multipliedBy('0.00137893825230').toFixed(),
    BUSD: oneEther.multipliedBy('0.00736484').toFixed(),
    DAI: oneEther.multipliedBy('0.00369068412860').toFixed(),
    ENJ: oneEther.multipliedBy('0.00029560').toFixed(),
    KNC: oneEther.multipliedBy('0.001072').toFixed(),
    LINK: oneEther.multipliedBy('0.009955').toFixed(),
    MANA: oneEther.multipliedBy('0.000158').toFixed(),
    MKR: oneEther.multipliedBy('2.508581').toFixed(),
    REN: oneEther.multipliedBy('0.00065133').toFixed(),
    SNX: oneEther.multipliedBy('0.00442616').toFixed(),
    SUSD: oneEther.multipliedBy('0.00364714136416').toFixed(),
    TUSD: oneEther.multipliedBy('0.00364714136416').toFixed(),
    UNI: oneEther.multipliedBy('0.00536479').toFixed(),
    USDC: oneEther.multipliedBy('0.00367714136416').toFixed(),
    USDT: oneEther.multipliedBy('0.00369068412860').toFixed(),
    WETH: oneEther.toFixed(),
    WBTC: oneEther.multipliedBy('47.332685').toFixed(),
    YFI: oneEther.multipliedBy('22.407436').toFixed(),
    ZRX: oneEther.multipliedBy('0.001151').toFixed(),
    UniDAIWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniWBTCWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniAAVEWETH: oneEther.multipliedBy('0.003620948469').toFixed(),
    UniBATWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniDAIUSDC: oneEther.multipliedBy('22.407436').toFixed(),
    UniCRVWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniLINKWETH: oneEther.multipliedBy('0.009955').toFixed(),
    UniMKRWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniRENWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniSNXWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniUNIWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniUSDCWETH: oneEther.multipliedBy('22.407436').toFixed(),
    UniWBTCUSDC: oneEther.multipliedBy('22.407436').toFixed(),
    UniYFIWETH: oneEther.multipliedBy('22.407436').toFixed(),
    BptWBTCWETH: oneEther.multipliedBy('22.407436').toFixed(),
    BptBALWETH: oneEther.multipliedBy('22.407436').toFixed(),
    WMATIC: oneEther.multipliedBy('0.003620948469').toFixed(),
    STAKE: oneEther.multipliedBy('0.003620948469').toFixed(),
    xSUSHI: oneEther.multipliedBy('0.00913428586').toFixed(),
    WAVAX: oneEther.multipliedBy('0.006051936629').toFixed(),
    USD: '5848466240000000',
};

export const PROTOCOL_GLOBAL_PARAMS = {
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
}