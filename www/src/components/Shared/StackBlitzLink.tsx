import { ReactNode } from 'react';
import stackblitzSdk, { ProjectDependencies } from '@stackblitz/sdk';

import cssVars from '../../styles/_variables.css?raw';
import { sendEvent } from '../analytics.ts';
import { ColorMode } from '../color-mode';

type StackBlitzLinkProps = Readonly<{
  /**
   * The code to be included in the StackBlitz project.
   */
  code: string;
  /**
   * The title of the StackBlitz project.
   * This will be displayed in the StackBlitz UI and can help users understand what the project is about.
   */
  title: string;
  /**
   * The children to be rendered inside the link.
   */
  children: ReactNode;
}>;

// React 18+ boilerplate
// language=tsx
const indexTsxCode = (title: string) =>
  `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RechartsDevtoolsContext, RechartsDevtoolsPortal } from '@recharts/devtools';

import './index.css';
import Example from './Example';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}
const root = createRoot(container);

const AppWithDevtools = () => {
  return <RechartsDevtoolsContext>
    <h1>${title}</h1>
    <Example />
    <h2>Recharts Devtools</h2>
    <RechartsDevtoolsPortal />
  </RechartsDevtoolsContext>
}

root.render(<AppWithDevtools />);
`.trim();

// language=HTML
const indexHtmlCode = (args: { title: string; mode: ColorMode }) => `
  <!doctype html>
  <html lang="en" data-mode="${args.mode}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${args.title}</title>
  </head>
  <body>
  <div id="root" style="width: 100vw; height: 100vh;"></div>
  <script type="module" src="./src/index.tsx"></script>
  </body>
  </html>
`;

// tsconfig.json
const tsconfigJsonCode = `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}`;

const reactVersion = '^19.0.0';

const dependencies: ProjectDependencies = {
  react: reactVersion,
  'react-is': reactVersion,
  'react-dom': reactVersion,
  recharts: 'latest',
};

const devDependencies: ProjectDependencies = {
  '@types/react': reactVersion,
  '@types/react-dom': reactVersion,
  typescript: '^5.0.0',
  vite: '^7.0.0',
  '@recharts/devtools': 'latest',
  '@vitejs/plugin-react': '^5.0.2',
};

const packageJson = {
  name: 'recharts-stackblitz-example',
  version: '0.0.1',
  main: 'index.js',
  scripts: {
    dev: 'vite',
  },
  dependencies,
  devDependencies,
};

const viteConfigTs = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
`;

/*
 * This creates a button that creates a new StackBlitz project
 * with the provided code and opens it in a new tab.
 * This assumes that the code is a Recharts example component which exports the React component as the default export.
 * This uses TypeScript with full type checking enabled.
 */
export function StackBlitzLink({ code, title, children }: StackBlitzLinkProps) {
  return (
    <button
      type="button"
      className="codemirror-toolbar-item"
      onClick={e => {
        e.preventDefault();
        sendEvent({
          category: 'StackBlitz',
          action: 'Open Project',
          label: title,
        });
        /*
         * https://developer.stackblitz.com/guides/integration/create-with-sdk#creating-a-new-project
         */
        stackblitzSdk.openProject(
          /*
           * https://developer.stackblitz.com/platform/api/javascript-sdk-options
           */
          {
            template: 'node',
            title,
            files: {
              'index.html': indexHtmlCode({ title, mode: 'light' }),
              'src/index.css': cssVars,
              /*
               * This file has tsx in it, and create-react-app supports TypeScript out of the box.
               */
              'src/index.tsx': indexTsxCode(title),
              'src/Example.tsx': code,
              'tsconfig.json': tsconfigJsonCode,
              'package.json': JSON.stringify(packageJson, null, 2),
              'vite.config.ts': viteConfigTs,
            },
          },
          {
            newWindow: true,
            openFile: 'src/Example.tsx',
            /*
             * In this simple case, there is really only one interesting file to look at,
             * so let's hide the sidebar by default.
             * People interested in browsing package.json or other files can always open the sidebar with a click.
             */
            showSidebar: false,
            theme: 'light',
            /*
             * The only interesting message in the terminal is "Vite dev server running at..."
             * so it doesn't need to be very tall.
             */
            terminalHeight: 10,
          },
        );
      }}
    >
      {children}
    </button>
  );
}
