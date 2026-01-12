import{j as n}from"./jsx-runtime-C8Off1Wo.js";import{useMDXComponents as r}from"./index-D548ORSe.js";import"./iframe-BlK4-FEU.js";import"./preload-helper-Dp1pzeXC.js";function e(s){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(t.h3,{id:"npm",children:"NPM"}),`
`,n.jsx(t.p,{children:"NPM is the easiest and fastest way to get started using Recharts. It is also the recommended installation method when building single-page applications (SPAs). It pairs nicely with a CommonJS module bundler such as Webpack."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-bash",children:`#latest stable
npm install recharts
`})}),`
`,n.jsx(t.h3,{id:"umd",children:"UMD"}),`
`,n.jsx(t.p,{children:"The UMD build is also available on unpkg.com ( unpkg ):"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<script src="https://unpkg.com/react/umd/react.production.min.js"><\/script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"><\/script>
<script src="https://unpkg.com/prop-types/prop-types.min.js"><\/script>
<script src="https://unpkg.com/recharts/umd/Recharts.js"><\/script>
`})}),`
`,n.jsx(t.p,{children:"You can find the library on window.Recharts"}),`
`,n.jsx(t.h3,{id:"dev-build",children:"Dev Build"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-bash",children:`git clone https://github.com/recharts/recharts.git
cd recharts
npm install
npm run build
`})})]})}function p(s={}){const{wrapper:t}={...r(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(e,{...s})}):e(s)}export{p as default};
