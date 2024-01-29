import Images from '../assets/image';

export interface PortfolioType {
  title: string;
  desc: string;
  img: string;
  link: string;
}

const portfolio: PortfolioType[] = [
  {
    title: 'Balance Landing',
    desc: 'React, Redux vs vs',
    img: Images.Landing,
    link: 'https://www.balancenetwork.io/',
  },
  {
    title: 'Crypto Exchange',
    desc: 'React, Redux vs vs',
    img: Images.Kripto,
    link: 'https://exchange-balancenetwork.io/',
  },
  {
    title: 'NFT Marketplace',
    desc: 'React, Redux vs vs',
    img: Images.NFT,
    link: 'https://nft-balancenetwork.io/',
  },
  {
    title: 'NPM Packages',
    desc: 'React, Redux vs vs',
    img: Images.NPM,
    link: 'https://www.npmjs.com/settings/murki/packages',
  },
  {
    title: 'Balance Solution',
    desc: 'React, Redux vs vs',
    img: Images.Solution,
    link: 'https://balance.software/',
  },
  {
    title: 'Binance Clone',
    desc: 'React, Redux vs vs',
    img: Images.Binance,
    link: 'https://binance-pi.vercel.app/',
  },
  {
    title: 'Denizcilik Tahkim',
    desc: 'React, Redux vs vs',
    img: Images.DTK,
    link: 'https://denizciliktahkim.org/',
  },
  {
    title: 'Blog',
    desc: 'React, Redux vs vs',
    img: Images.Blog,
    link: 'https://github.com/ilhanfurkan/blog',
  },
];

export default portfolio;
