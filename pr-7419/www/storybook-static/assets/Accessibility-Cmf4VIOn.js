import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{G as t,K as n}from"./zIndexSlice-B0Kxc9j6.js";import{n as r,t as i}from"./Tooltip-1joug3q7.js";import{n as a,t as o}from"./Brush-CwCQ7MWG.js";import{n as s,t as c}from"./Line-CGcNDODy.js";import{n as l,t as u}from"./XAxis-DaKmDvZB.js";import{n as d,t as f}from"./YAxis-DFF_vhTk.js";import{n as p,t as m}from"./LineChart-TpeFf1Zc.js";import{i as h,r as g,t as _}from"./jsx-runtime-5HYsnxpu.js";import{r as v,t as y}from"./Page-DUsfWi7y.js";function b(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...h(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.h1,{id:`keyboard-accessibility`,children:`Keyboard Accessibility`}),`
`,(0,S.jsxs)(n.p,{children:[`Anything that a user can do with a mouse, a user should also be able to do using only the keyboard. This is a fundamental requirement for anyone looking to make their software accessibility, and is expanded on in the `,(0,S.jsx)(n.a,{href:`https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html`,rel:`nofollow`,children:`W3C's WCAG 2.1.1 success criteria`}),`.`]}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.strong,{children:`Starting with Recharts 3.0, accessibility support is enabled by default`}),` for all charts. The `,(0,S.jsx)(n.code,{children:`accessibilityLayer`}),` prop is set to `,(0,S.jsx)(n.code,{children:`true`}),` by default, which means keyboard navigation and screen reader support are automatically available without any additional configuration.`]}),`
`,(0,S.jsx)(n.p,{children:`To see how this works, try the following chart. You can press the TAB key until you reach the chart. When you see a black border appear around the chart, the chart is "in focus". Once in focus, you can press the left or right arrow key to navigate between individual points. As you navigate, the tooltip will appear at each point, providing access to underlying data.`}),`
`,(0,S.jsx)(t,{width:`100%`,height:400,children:(0,S.jsxs)(m,{data:v,title:`Line chart showing UV values for pages`,children:[(0,S.jsx)(c,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}),(0,S.jsx)(u,{dataKey:`name`}),(0,S.jsx)(f,{}),(0,S.jsx)(i,{}),(0,S.jsx)(o,{})]})}),`
`,(0,S.jsx)(n.p,{children:`This chart also contains a "brush", a range slider that lets you control what appears on the X-axis. You can tab to the "travellers" on the brush, and use the left/right arrow keys to adjust them.`}),`
`,(0,S.jsx)(n.p,{children:`The code to generate this example is:`}),`
`,(0,S.jsx)(n.pre,{children:(0,S.jsx)(n.code,{className:`language-jsx`,children:`<ResponsiveContainer width="100%" height={400}>
  <LineChart data={pageData} title="Line chart showing UV values for pages">
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
</ResponsiveContainer>
`})}),`
`,(0,S.jsxs)(n.p,{children:[`Note that we no longer need to explicitly set `,(0,S.jsx)(n.code,{children:`accessibilityLayer`}),` since it's enabled by default in Recharts 3.0. If you need to disable accessibility features, you can set `,(0,S.jsx)(n.code,{children:`accessibilityLayer={false}`}),`.`]}),`
`,(0,S.jsx)(n.h2,{id:`supported-charts`,children:`Supported Charts`}),`
`,(0,S.jsx)(n.p,{children:`Accessibility support is available for all chart types in Recharts, including:`}),`
`,(0,S.jsxs)(n.ul,{children:[`
`,(0,S.jsxs)(n.li,{children:[(0,S.jsx)(n.strong,{children:`Cartesian Charts`}),`: AreaChart, BarChart, LineChart, ComposedChart, ScatterChart`]}),`
`,(0,S.jsxs)(n.li,{children:[(0,S.jsx)(n.strong,{children:`Polar Charts`}),`: PieChart, RadarChart, RadialBarChart`]}),`
`,(0,S.jsxs)(n.li,{children:[(0,S.jsx)(n.strong,{children:`Other Charts`}),`: FunnelChart, Treemap, Sankey, SunburstChart`]}),`
`]}),`
`,(0,S.jsxs)(n.p,{children:[`All charts support keyboard navigation and screen reader accessibility when `,(0,S.jsx)(n.code,{children:`accessibilityLayer`}),` is enabled (which it is by default).`]}),`
`,(0,S.jsx)(n.h2,{id:`screen-reader-support`,children:`Screen reader support`}),`
`,(0,S.jsx)(n.p,{children:`The accessibility layer works with the tooltip to provide feedback to screen reader users.`}),`
`,(0,S.jsx)(n.p,{children:`When using the default tooltip, it automatically works with screen reader users. The default tooltip becomes a "live region", which means that screen readers will read the contents as they update. This gives blind users access to the underlying data in a chart.`}),`
`,(0,S.jsxs)(n.p,{children:[`If you are building a custom tooltip, you can turn it into a live region by using the attributes `,(0,S.jsx)(n.code,{children:`role="status" aria-live="assertive"`}),`. Keep in mind that the full content of the tooltip will be read for every data point that the user interacts with, so it's best practice to keep the content concise.`]}),`
`,(0,S.jsx)(n.h2,{id:`technical-notes`,children:`Technical notes`}),`
`,(0,S.jsxs)(n.p,{children:[`When `,(0,S.jsx)(n.code,{children:`accessibilityLayer`}),` is enabled (which it is by default), it will:`]}),`
`,(0,S.jsxs)(n.ol,{children:[`
`,(0,S.jsxs)(n.li,{children:[`Set `,(0,S.jsx)(n.code,{children:`role="application"`}),` on the chart. This can be overridden by passing your own `,(0,S.jsx)(n.code,{children:`role`}),` prop.`]}),`
`,(0,S.jsxs)(n.li,{children:[`Set `,(0,S.jsx)(n.code,{children:`tabIndex={0}`}),` to add the chart to the tab order. This can be overridden by passing your own `,(0,S.jsx)(n.code,{children:`tabIndex`}),` prop.`]}),`
`]}),`
`,(0,S.jsxs)(n.p,{children:[`The accessibility layer adds keyboard event handlers to listen for `,(0,S.jsx)(n.code,{children:`ArrowLeft`}),` and `,(0,S.jsx)(n.code,{children:`ArrowRight`}),` keys. These keystrokes are used to navigate between data points and update the tooltip accordingly. The implementation no longer spoofs mouse movements as it did in earlier versions.`]})]})}function x(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=_(),g(),a(),s(),p(),n(),r(),l(),d(),y()})))()}C();export{x as default};