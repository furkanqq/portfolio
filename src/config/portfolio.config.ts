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
    visit: false,
  },
  {
    title: 'Art Museum',
    desc: 'Not finished, Framer motion, Tailwind Css, NextJS, TypeScript, Responsive Design, Cloudinary',
    img: Images.ART,
    link: 'https://art-gallery-five-blond.vercel.app/',
    visit: true,
  },
  {
    title: 'Blind Lover',
    desc: 'NextJS, TailwindCSS, TypeScript, Responsive Design, Jotai',
    img: Images.Blind,
    link: 'https://blindlover.com',
    visit: false,
  },
  {
    title: 'Customer Tracking System',
    desc: 'NextJS, TailwindCSS, TypeScript, Responsive Design, NetGSM, Mail, QR Code Scanner, Railway',
    img: Images.FHTS,
    link: 'It cannot be shared because it is an admin panel.',
    visit: false,
  },
  {
    title: 'NPM Packages',
    desc: 'NodeJS, JS, Npm Package Manager',
    img: Images.NPM,
    link: 'https://www.npmjs.com/~murki',
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
    title: 'Mage Vet',
    desc: 'Responsive Design, Html, Css',
    img: Images.MV,
    link: 'https://magevet.com.tr/demo/',
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
    title: 'Meme Coin Page',
    desc: 'NextJS, TailwindCSS, TypeScript, Responsive Design, Jotai',
    img: Images.Momey,
    link: 'https://www.momeycoin.com/',
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
