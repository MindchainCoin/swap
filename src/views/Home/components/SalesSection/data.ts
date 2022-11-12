import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Decentralized Exchange For Everybody.'),
  bodyText: t('Connect your wallet and start trading crypto with excellent offer that MindchainSwap offers!'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://mindchain.info/blog/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'MIND', alt: t('MIND token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn From Referral Staking!'),
  bodyText: t('MindchainSwap has offered so exciting features to earn passive from Mindchain.'),
  reverse: true,
  primaryButton: {
    to: 'https://defi.mindchain.info',
    text: t('Join Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://mindchain.info/blog/',
    text: t('Explore'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('MIND is building Decentralized Economy.'),
  bodyText: t(
    'DeFi on Mindchain is much faster, cheaper, and more reliable and secure than its predecessors.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x258Ea33a949D8562A2683e1C54D4bAeAd2949F9E&chainId=56',
    text: t('Buy MIND'),
    external: false,
  },
  secondaryButton: {
    to: 'https://mindchain.info/blog/',
    text: t('Explore'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('MIND token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
