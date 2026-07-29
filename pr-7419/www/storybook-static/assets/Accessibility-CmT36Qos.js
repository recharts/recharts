import{i as e}from"./preload-helper-BdFrVu1K.js";import{A as t,B as n,R as r,Rt as i,Vn as a,X as o,ct as s,t as c}from"./iframe-BqVvK_R4.js";import{a as l,t as u}from"./jsx-runtime-BenY-SQ9.js";import{t as d}from"./mdx-react-shim-6gHMkx1M.js";import{t as f}from"./data-J2vpPkF6.js";import{r as p}from"./Page-C0w_0_Yr.js";function m(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.h1,{id:`keyboard-accessibility`,children:`Keyboard Accessibility`}),`
`,(0,g.jsxs)(c.p,{children:[`Anything that a user can do with a mouse, a user should also be able to do using only the keyboard. This is a fundamental requirement for anyone looking to make their software accessibility, and is expanded on in the `,(0,g.jsx)(c.a,{href:`https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html`,rel:`nofollow`,children:`W3C's WCAG 2.1.1 success criteria`}),`.`]}),`
`,(0,g.jsxs)(c.p,{children:[(0,g.jsx)(c.strong,{children:`Starting with Recharts 3.0, accessibility support is enabled by default`}),` for all charts. The `,(0,g.jsx)(c.code,{children:`accessibilityLayer`}),` prop is set to `,(0,g.jsx)(c.code,{children:`true`}),` by default, which means keyboard navigation and screen reader support are automatically available without any additional configuration.`]}),`
`,(0,g.jsx)(c.p,{children:`To see how this works, try the following chart. You can press the TAB key until you reach the chart. When you see a black border appear around the chart, the chart is "in focus". Once in focus, you can press the left or right arrow key to navigate between individual points. As you navigate, the tooltip will appear at each point, providing access to underlying data.`}),`
`,(0,g.jsx)(a,{width:`100%`,height:400,children:(0,g.jsxs)(t,{data:p,title:`Line chart showing UV values for pages`,children:[(0,g.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}),(0,g.jsx)(n,{dataKey:`name`}),(0,g.jsx)(r,{}),(0,g.jsx)(i,{}),(0,g.jsx)(s,{})]})}),`
`,(0,g.jsx)(c.p,{children:`This chart also contains a "brush", a range slider that lets you control what appears on the X-axis. You can tab to the "travellers" on the brush, and use the left/right arrow keys to adjust them.`}),`
`,(0,g.jsx)(c.p,{children:`The code to generate this example is:`}),`
`,(0,g.jsx)(c.pre,{children:(0,g.jsx)(c.code,{className:`language-jsx`,children:`<ResponsiveContainer width="100%" height={400}>
  <LineChart data={pageData} title="Line chart showing UV values for pages">
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
</ResponsiveContainer>
`})}),`
`,(0,g.jsxs)(c.p,{children:[`Note that we no longer need to explicitly set `,(0,g.jsx)(c.code,{children:`accessibilityLayer`}),` since it's enabled by default in Recharts 3.0. If you need to disable accessibility features, you can set `,(0,g.jsx)(c.code,{children:`accessibilityLayer={false}`}),`.`]}),`
`,(0,g.jsx)(c.h2,{id:`supported-charts`,children:`Supported Charts`}),`
`,(0,g.jsx)(c.p,{children:`Accessibility support is available for all chart types in Recharts, including:`}),`
`,(0,g.jsxs)(c.ul,{children:[`
`,(0,g.jsxs)(c.li,{children:[(0,g.jsx)(c.strong,{children:`Cartesian Charts`}),`: AreaChart, BarChart, LineChart, ComposedChart, ScatterChart`]}),`
`,(0,g.jsxs)(c.li,{children:[(0,g.jsx)(c.strong,{children:`Polar Charts`}),`: PieChart, RadarChart, RadialBarChart`]}),`
`,(0,g.jsxs)(c.li,{children:[(0,g.jsx)(c.strong,{children:`Other Charts`}),`: FunnelChart, Treemap, Sankey, SunburstChart`]}),`
`]}),`
`,(0,g.jsxs)(c.p,{children:[`All charts support keyboard navigation and screen reader accessibility when `,(0,g.jsx)(c.code,{children:`accessibilityLayer`}),` is enabled (which it is by default).`]}),`
`,(0,g.jsx)(c.h2,{id:`screen-reader-support`,children:`Screen reader support`}),`
`,(0,g.jsx)(c.p,{children:`The accessibility layer works with the tooltip to provide feedback to screen reader users.`}),`
`,(0,g.jsx)(c.p,{children:`When using the default tooltip, it automatically works with screen reader users. The default tooltip becomes a "live region", which means that screen readers will read the contents as they update. This gives blind users access to the underlying data in a chart.`}),`
`,(0,g.jsxs)(c.p,{children:[`If you are building a custom tooltip, you can turn it into a live region by using the attributes `,(0,g.jsx)(c.code,{children:`role="status" aria-live="assertive"`}),`. Keep in mind that the full content of the tooltip will be read for every data point that the user interacts with, so it's best practice to keep the content concise.`]}),`
`,(0,g.jsx)(c.h2,{id:`technical-notes`,children:`Technical notes`}),`
`,(0,g.jsxs)(c.p,{children:[`When `,(0,g.jsx)(c.code,{children:`accessibilityLayer`}),` is enabled (which it is by default), it will:`]}),`
`,(0,g.jsxs)(c.ol,{children:[`
`,(0,g.jsxs)(c.li,{children:[`Set `,(0,g.jsx)(c.code,{children:`role="application"`}),` on the chart. This can be overridden by passing your own `,(0,g.jsx)(c.code,{children:`role`}),` prop.`]}),`
`,(0,g.jsxs)(c.li,{children:[`Set `,(0,g.jsx)(c.code,{children:`tabIndex={0}`}),` to add the chart to the tab order. This can be overridden by passing your own `,(0,g.jsx)(c.code,{children:`tabIndex`}),` prop.`]}),`
`]}),`
`,(0,g.jsxs)(c.p,{children:[`The accessibility layer adds keyboard event handlers to listen for `,(0,g.jsx)(c.code,{children:`ArrowLeft`}),` and `,(0,g.jsx)(c.code,{children:`ArrowRight`}),` keys. These keystrokes are used to navigate between data points and update the tooltip accordingly. The implementation no longer spoofs mouse movements as it did in earlier versions.`]})]})}function h(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=u(),d(),c(),f()}))();export{h as default};