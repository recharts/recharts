import React, { ReactNode } from 'react';
import stackblitzSdk, { ProjectDependencies } from '@stackblitz/sdk';
import { TargetBlankLink } from './TargetBlankLink';

type StackBlitzLinkProps = {
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
};

// React 18+ boilerplate
// language=tsx
const indexTsxCode = `
import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from './Example';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Example />);
`.trim();

// language=HTML
const indexHtmlCode = `<div id="root" style="width: 100vw; height: 100vh;" />`;

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

const dependencies: ProjectDependencies = {
  react: '^19.0.0',
  'react-is': '^19.0.0',
  'react-dom': '^19.0.0',
  recharts: '^3.1.0',
  '@types/react': '^19.0.0',
  '@types/react-dom': '^19.0.0',
  typescript: '^5.0.0',
};

/*
 * This creates a link that creates a new StackBlitz project
 * with the provided code and opens it in a new tab.
 * This assumes that the code is a Recharts example component which exports the React component as the default export.
 * This uses TypeScript with full type checking enabled.
 */
export function StackBlitzLink({ code, title, children }: StackBlitzLinkProps) {
  return (
    <TargetBlankLink
      href="#stackblitz-open-project"
      onClick={e => {
        e.preventDefault();
        /*
         * https://developer.stackblitz.com/guides/integration/create-with-sdk#creating-a-new-project
         */
        stackblitzSdk.openProject(
          /*
           * https://developer.stackblitz.com/platform/api/javascript-sdk-options
           */
          {
            template: 'create-react-app',
            title,
            files: {
              'public/index.html': indexHtmlCode,
              'src/index.tsx': indexTsxCode,
              'src/Example.tsx': code,
              'tsconfig.json': tsconfigJsonCode,
            },
            dependencies,
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
          },
        );
      }}
    >
      {children}
    </TargetBlankLink>
  );
}
