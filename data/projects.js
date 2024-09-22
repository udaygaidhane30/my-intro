import {
  nestjs,
  react,
  typescript,
  js,
  mongo,
  python,
  firebase
} from './tools';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    logo: null,
    title: 'Portfolio',
    description:
      'This site! Building the first iteration of my personal portfolio.',
    tools: [react, typescript],
    live: null,
    proto: null,
    repo: 'https://github.com/udaygaidhane30/my-intro',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'Only IIITN',
    description:
      'An annonomous social media platform for IIITN to share their thoughts and ideas without any fear of judgement.',
    tools: [react, firebase, nestjs, mongo],
    live: null,
    proto: null,
    repo: 'https://github.com/udaygaidhane30/only-iiitN',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'Reddy Wala',
    description:
      'The first iteration of a one stop food delivery platform for any college campus.',
    tools: [js, react, firebase, mongo],
    live: null,
    prototype: null,
    repo: 'https://github.com/BIGppDEVS/ReddyWala',
    id: uuidv4(),
    feature: false
  },
  {
    logo: null,
    title: 'Job Seeker',
    description:
      'A python command line tool that helped me reach out to various job opportunnies and easied the process of applying to them.',
    tools: [python],
    live: null,
    proto: null,
    repo: 'https://github.com/udaygaidhane30/Job-Seeker',
    id: uuidv4(),
    feature: false
  }
];
