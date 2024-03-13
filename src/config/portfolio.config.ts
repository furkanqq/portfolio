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
    desc: 'NextJS, JS, CSS, Context, Redux, Directus, Rest API, ESLint, Prettier, Responsive Design',
    img: Images.Landing,
    link: 'https://www.balancenetwork.io/',
  },
  {
    title: 'Crypto Exchange',
    desc: 'ReactJS, TypeScript, JS, CSS, Redux, Web Socket, Rest API, ESLint, Prettier, Responsive Design',
    img: Images.Kripto,
    link: 'https://exchange-balancenetwork.io/',
  },
  {
    title: 'NFT Marketplace',
    desc: 'NextJS, TypeScript, Tailwind, Redux, Web3, Wagmi, ESLint, Prettier, Responsive Design',
    img: Images.NFT,
    link: 'https://nft-balancenetwork.io/',
  },
  {
    title: 'NPM Packages',
    desc: 'NodeJS, JS, Npm Package Manager',
    img: Images.NPM,
    link: 'https://www.npmjs.com/settings/murki/packages',
  },
  {
    title: 'IDO Launchpad',
    desc: 'ReactJS, NextJS, Ethers, Web3, Wagmi, Viem, Smart Contract, Solidity, ABI, NestJS,',
    img: Images.IDO,
    link: 'https://ido-balancenetwork.io/',
  },
  {
    title: 'Balance Solution',
    desc: 'NextJS, SCSS, Rest API, Redux, TypeScript, Responsive Design',
    img: Images.Solution,
    link: 'https://balance.software/',
  },
  {
    title: 'Binance Clone',
    desc: 'React, SCSS, Typescript, Responsive Design',
    img: Images.Binance,
    link: 'https://binance-pi.vercel.app/',
  },
  {
    title: 'Denizcilik Tahkim',
    desc: 'Responsive Design',
    img: Images.DTK,
    link: 'https://denizciliktahkim.org/',
  },
  {
    title: 'Blog',
    desc: 'NextJS, SCSS, TypeScript, Responsive Design',
    img: Images.Blog,
    link: 'https://github.com/ilhanfurkan/blog',
  },
];

export default portfolio;
