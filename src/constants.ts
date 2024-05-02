export const MY_NAME = 'Maksym Markush';

export const NAVIGATION = [
  { name: 'About', href: '', current: true },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Contact', href: 'contact', current: false },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Rely.io',
    href: 'http://rely.io/',
    description:
      `
        eact: React, React Router, React context
        langs: JS, Typescript
        for css: Styled components, CSS
        api: React-query, axios
        charts: Highcharts
        dates: dayJS
        translations: reacti18n
        code formatters: eslint/prettier
        tests: JEST, react-testing-library
      `,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Frontend', href: '#' },
  },
  {
    id: 2,
    title: 'Outschool.com',
    href: 'https://www.outschool.com/',
    description:
      `
        Built with React, Next, GraphQL and Material-UI, includes features like course discovery, scheduling.
        -Designed engaging interfaces with React and Material-UI for all users.
        -Built a dynamic scheduling system with Next.js and Material-UI for easy class enrollment.
        -Used React to develop personalized course recommendations.
        -Added live class interactions like polls and chat with WebSockets for instant communication.
      `,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Frontend', href: '#' },
  },
  {
    id: 3,
    title: 'kraken.com',
    href: 'https://www.kraken.com/',
    description:
      `
        This is a cryptocurrency exchange platform that provides users with the ability to trade a wide range of cryptocurrencies.
      `,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Fullstack', href: '#' },
  },
  {
    id: 4,
    title: 'interiordefine.com',
    href: 'https://www.interiordefine.com/',
    description:
      `
        This is an e-commerce platform that specializes in customizable sofas and furniture.
      `,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Fullstack', href: '#' },
  },
]
