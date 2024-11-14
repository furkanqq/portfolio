import Images from '../assets/image';

export interface PortfolioType {
  title: string;
  desc: string;
  img: string;
  link: string;
  visit?: boolean;
}

const portfolio: PortfolioType[] = [
  {
    title: 'Görmek Lazım E-Commerce',
    desc: 'NextJS, TypeScript, SCSS, Rest API, Responsive Design, Jotai, ',
    img: Images.GL,
    link: 'https://www.gormeklazim.com/',
    visit: true,
  },
  {
    title: 'Balance Solution',
    desc: 'NextJS, SCSS, Rest API, Redux, TypeScript, Responsive Design',
    img: Images.Solution,
    link: 'https://balance.software/',
    visit: true,
  },
  {
    title: 'Art Museum',
    desc: 'Not finished, Framer motion, Tailwind Css, NextJS, TypeScript, Responsive Design(will be made)',
    img: Images.ART,
    link: 'https://art-gallery-three-pi.vercel.app/',
    visit: true,
  },
  {
    title: 'NPM Packages',
    desc: 'NodeJS, JS, Npm Package Manager',
    img: Images.NPM,
    link: 'https://www.npmjs.com/~murki',
    visit: true,
  },
  {
    title: 'Mage Vet',
    desc: 'Responsive Design, Html, Css',
    img: Images.MV,
    link: 'https://magevet.com.tr/demo/',
    visit: true,
  },
  {
    title: 'Denizcilik Tahkim',
    desc: 'Responsive Design, Html, Css',
    img: Images.DTK,
    link: 'https://denizciliktahkim.org/',
    visit: true,
  },
  {
    title: 'Binance Clone',
    desc: 'React, SCSS, Typescript, Responsive Design',
    img: Images.Binance,
    link: 'https://binance-pi.vercel.app/',
    visit: true,
  },
  {
    title: 'Blog',
    desc: 'NextJS, SCSS, TypeScript, Responsive Design',
    img: Images.Blog,
    link: 'https://blog-delta-eight-11.vercel.app/',
    visit: true,
  },
  {
    title: 'Balance Landing',
    desc: 'NextJS, JS, CSS, Context, Redux, Directus, Rest API, ESLint, Prettier, Responsive Design',
    img: Images.BLN,
    link: 'https://www.balancenetwork.io/',
    visit: false,
  },
  {
    title: 'Crypto Exchange',
    desc: 'ReactJS, TypeScript, JS, CSS, Redux, Web Socket, Rest API, ESLint, Prettier, Responsive Design',
    img: Images.BLN,
    link: 'https://exchange-balancenetwork.io/',
    visit: false,
  },
  {
    title: 'NFT Marketplace',
    desc: 'NextJS, TypeScript, Tailwind, Redux, Web3, Wagmi, ESLint, Prettier, Responsive Design',
    img: Images.BLN,
    link: 'https://nft.balancenetwork.io/',
    visit: false,
  },
  {
    title: 'IDO Launchpad',
    desc: 'ReactJS, NextJS, Ethers, Web3, Wagmi, Viem, Smart Contract, Solidity, ABI, NestJS,',
    img: Images.BLN,
    link: 'https://ido.balancenetwork.io/',
    visit: false,
  },
];

export default portfolio;
