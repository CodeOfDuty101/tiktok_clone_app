import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiGuitar, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad, FaGuitar } from 'react-icons/fa';
import { MdMusicNote } from 'react-icons/md';

export const topics = [
  {
    name: 'coding',
    icon: <BsCode />,
  },
  {
    name: 'comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'dance',
    icon: <GiGalaxy />,
  },
  {
    name: 'beauty',
    icon: <GiLipstick />,
  },
  {
    name: 'music',
    icon: <FaGuitar />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <FaMedal />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]