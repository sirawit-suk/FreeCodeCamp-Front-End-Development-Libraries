import { Navigations } from '../interfaces';

export const NAVIGATIONS: Navigations = {
  randomQuoteMachine: {
    name: 'Random Quote Machine',
    path: '/random-quote-machine',
  },
  markdownPreviewer: {
    name: 'Markdown Previewer',
    path: '/markdown-previewer',
  },
  drumMachine: {
    name: 'Drum Machiner',
    path: '/drum-machine',
  },
  javaScriptCalculator: {
    name: 'JavaScript Calculator',
    path: '/javascript-calculator',
  },
  clock: {
    name: '25 + 5 Clock',
    path: '/25-5-clock',
  },
};

export const NAVIGATION_EXTENDS: Navigations = {
  home: {
    name: 'HomePage',
    path: '/',
  },
  notFound: {
    name: 'Not found',
    path: '*',
  },
  ...NAVIGATIONS,
};
