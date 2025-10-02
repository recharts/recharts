const map = {
  index: {
    loading: 'Loading',
    success: 'Success',
    error: 'Error',
    empty: 'Empty',
  },
  home: {
    slogan: 'A composable charting library built on React components',
    install: 'Install',
    composable: 'Composable',
    composableContent: 'Quickly build your charts with decoupled, reusable React components.',
    reliable: 'Reliable',
    reliableContent: 'Built on top of SVG elements with a lightweight dependency on D3 submodules.',
    powerful: 'Powerful',
    powerfulContent: 'Customize your chart by tweaking component props and passing in custom components.',
    like: 'Recharts makes it easy to integrate charts into your React application',
    'get-started': 'Get Started',
    whoUse: "Who's using recharts ?",
    feature: 'features',
    logoDesc: 'Logos are submitted by company and project representatives.',
    addUser: 'To add your company or project to this page, please',
    edit: 'edit the wiki!',
    logoSize: 'For your logo, please submit a 300x100 (3:1) img.',
  },
  examples: {
    placeholder: 'Search',
  },
  blog: {
    placeholder: 'Please choose...',
  },
  frame: {
    guide: 'Guide',
    api: 'API',
    examples: 'Examples',
    blog: 'Blog',
    storybook: 'Storybook',
    contract: 'Contact us by',
  },
  guide: {
    guide: 'Guide',
    installation: 'Installation',
    'getting-started': 'Getting Started',
    customize: 'Customize',
    activeIndex: 'Active Index',
  },
  installation: {
    installation: 'Installation',
    'npm-desc': `NPM is the easiest and fastest way to get started using Recharts.
      It is also the recommended installation method when building single-page applications (SPAs).
      It pairs nicely with a CommonJS module bundler such as `,
    'umd-desc': 'The UMD build is also available on unpkg.com ',
    'umd-use': 'You can find the library on ',
    'dev-build': 'Dev Build',
    dot: '.',
  },
  'getting-started': {
    'getting-started': 'Getting Started',
    'step-1-title': '1. Choose the type of chart you need',
    'step-1-desc': 'Create a simple chart by using plain javascript data: an array of objects.',
    'step-2-title': '2. Add more components',
    'step-2-desc': 'LineChart can have XAxis, YAxis, Legend, CartesianGrid and more.',
    'step-3-title': '3. Adjust the props of your components',
    'step-3-desc': `Modify colors, sizes, and other properties of your components to fit your design.`,
    'step-4-title': '4. Add interactions',
    'step-4-desc': 'Add a Tooltip component to display information when hovering over your chart.',
    'step-5-title': '5. Customize your components',
    'step-5-desc': `For example, you can edit your x-axis label very easily by passing in a custom axis
     tick render function. You can do similar things with other graphs as well, such as custom shapes for bar
     charts and much more!`,
  },
  customize: {
    customize: 'Customize',
    'step-1-title': '1. Labels of line, area, bar, axis can be customized',
    'step-1-desc': 'For example, we can create a bar with customized label and customized axis tick.',
    'step-2-title': '2. The shape of bar can be customized',
    'step-2-desc':
      'The props shape of <Bar /> can be set to be a function or a react element to render customized shape.',
    'step-3-title': '3. The content of tooltip can be customized',
    'step-3-desc': 'Sometime we may want tooltip to display much more information.',
    'step-4-title': '4. The style of each chart element can be customized',
    'step-4-desc': `Except tooltip and legend, all the element in a chart is drawn by svg element.
      So you can change the attributes of each chart element conveniently.`,
    'step-5-title': '5. The style of tooltip, legend can be customized',
    'step-5-desc': `Though tooltip, legend are drawn by svg elements, you may change the style of tooltip,
      legend by the apis we offer. Of course, you can change the style in css too.`,
  },
  api: {
    charts: 'Charts',
    'general-components': 'General Components',
    'cartesian-components': 'Cartesian Components',
    'polar-components': 'Polar Components',
    shapes: 'Shapes',
    default: 'DEFAULT: ',
    format: 'FORMAT: ',
    examples: 'Examples: ',
    parent: 'Parent Components',
    children: 'Child Components',
    placeholder: 'Search',
    showData: 'Show data format',
    hideData: 'Hide data format',
  },
  'design-disciplines': {
    'design-disciplines': 'Design Disciplines',
  },
  label: {
    'cartesian-title': 'The "position" in view box of Cartesian Coordinates',
    'polar-title': 'The "position" in view box of PieChart',
    'radialbar-title': 'The "position" in view box of RadialBarChart',
  },
};

export default map;
