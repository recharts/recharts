import{j as e}from"./jsx-runtime-GRChs32V.js";import{useMDXComponents as s}from"./index-D7tlvmFD.js";import{R as a}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{L as n}from"./LineChart-BB3BmZfG.js";import{p as o}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-DQI5jB5X.js";import{X as l}from"./XAxis-BI5mxokc.js";import{Y as c}from"./YAxis-D42CMzIK.js";import{T as d}from"./Tooltip-DmR6kuQ8.js";import{B as p}from"./Brush-9ClcbV13.js";import"./iframe-ByhUx3i5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CIwNTWTh.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./Layer-C6tXeN-I.js";import"./ReactUtils-BmZRR5An.js";import"./Label-CEJ3y0id.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./ZIndexLayer-ktHWf7_5.js";import"./ActivePoints-D515SR-u.js";import"./Dot-COBzijtS.js";import"./types-CJt6eGgj.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./ErrorBarContext-Coaa-8b_.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./useAnimationId-aMq0pZgy.js";import"./getRadiusAndStrokeWidthFromDot-ph1c7d2p.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./Symbols-C3LGHQVt.js";import"./Curve-CS0P1hcX.js";import"./CartesianAxis-Dz61qQ6A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CNw39Ncf.js";import"./iteratee-k1Sg484z.js";import"./Cross-Bba_iUMz.js";function r(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"keyboard-accessibility",children:"Keyboard Accessibility"}),`
`,e.jsxs(t.p,{children:["Anything that a user can do with a mouse, a user should also be able to do using only the keyboard. This is a fundamental requirement for anyone looking to make their software accessibility, and is expanded on in the ",e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",rel:"nofollow",children:"W3C's WCAG 2.1.1 success criteria"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Starting with Recharts 3.0, accessibility support is enabled by default"})," for all charts. The ",e.jsx(t.code,{children:"accessibilityLayer"})," prop is set to ",e.jsx(t.code,{children:"true"})," by default, which means keyboard navigation and screen reader support are automatically available without any additional configuration."]}),`
`,e.jsx(t.p,{children:'To see how this works, try the following chart. You can press the TAB key until you reach the chart. When you see a black border appear around the chart, the chart is "in focus". Once in focus, you can press the left or right arrow key to navigate between individual points. As you navigate, the tooltip will appear at each point, providing access to underlying data.'}),`
`,e.jsx(a,{width:"100%",height:400,children:e.jsxs(n,{data:o,title:"Line chart showing UV values for pages",children:[e.jsx(h,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.jsx(l,{dataKey:"name"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(p,{})]})}),`
`,e.jsx(t.p,{children:'This chart also contains a "brush", a range slider that lets you control what appears on the X-axis. You can tab to the "travellers" on the brush, and use the left/right arrow keys to adjust them.'}),`
`,e.jsx(t.p,{children:"The code to generate this example is:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<ResponsiveContainer width="100%" height={400}>
  <LineChart data={pageData} title="Line chart showing UV values for pages">
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
</ResponsiveContainer>
`})}),`
`,e.jsxs(t.p,{children:["Note that we no longer need to explicitly set ",e.jsx(t.code,{children:"accessibilityLayer"})," since it's enabled by default in Recharts 3.0. If you need to disable accessibility features, you can set ",e.jsx(t.code,{children:"accessibilityLayer={false}"}),"."]}),`
`,e.jsx(t.h2,{id:"supported-charts",children:"Supported Charts"}),`
`,e.jsx(t.p,{children:"Accessibility support is available for all chart types in Recharts, including:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Cartesian Charts"}),": AreaChart, BarChart, LineChart, ComposedChart, ScatterChart"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Polar Charts"}),": PieChart, RadarChart, RadialBarChart"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Other Charts"}),": FunnelChart, Treemap, Sankey, SunburstChart"]}),`
`]}),`
`,e.jsxs(t.p,{children:["All charts support keyboard navigation and screen reader accessibility when ",e.jsx(t.code,{children:"accessibilityLayer"})," is enabled (which it is by default)."]}),`
`,e.jsx(t.h2,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsx(t.p,{children:"The accessibility layer works with the tooltip to provide feedback to screen reader users."}),`
`,e.jsx(t.p,{children:'When using the default tooltip, it automatically works with screen reader users. The default tooltip becomes a "live region", which means that screen readers will read the contents as they update. This gives blind users access to the underlying data in a chart.'}),`
`,e.jsxs(t.p,{children:["If you are building a custom tooltip, you can turn it into a live region by using the attributes ",e.jsx(t.code,{children:'role="status" aria-live="assertive"'}),". Keep in mind that the full content of the tooltip will be read for every data point that the user interacts with, so it's best practice to keep the content concise."]}),`
`,e.jsx(t.h2,{id:"technical-notes",children:"Technical notes"}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.code,{children:"accessibilityLayer"})," is enabled (which it is by default), it will:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Set ",e.jsx(t.code,{children:'role="application"'})," on the chart. This can be overridden by passing your own ",e.jsx(t.code,{children:"role"})," prop."]}),`
`,e.jsxs(t.li,{children:["Set ",e.jsx(t.code,{children:"tabIndex={0}"})," to add the chart to the tab order. This can be overridden by passing your own ",e.jsx(t.code,{children:"tabIndex"})," prop."]}),`
`]}),`
`,e.jsxs(t.p,{children:["The accessibility layer adds keyboard event handlers to listen for ",e.jsx(t.code,{children:"ArrowLeft"})," and ",e.jsx(t.code,{children:"ArrowRight"})," keys. These keystrokes are used to navigate between data points and update the tooltip accordingly. The implementation no longer spoofs mouse movements as it did in earlier versions."]})]})}function oe(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{oe as default};
