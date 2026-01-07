import{j as e}from"./jsx-runtime-BgZXjikH.js";import{useMDXComponents as r}from"./index-wIJN22E_.js";import{M as s,C as a,a as h}from"./blocks-hPe4haHs.js";import{C as d,A as o}from"./ResponsiveContainer.stories-CJx2PVpI.js";import"./iframe-VZdOSrkq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BmO0aGXh.js";import"./Page-DPte-9pC.js";import"./arrayEqualityCheck-Ba8aNuDT.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./PolarUtils-CC6VYEjV.js";import"./AreaChart-ZYfhIyYk.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./zIndexSlice-C3gfI6wW.js";import"./CartesianChart-BoW6sGG3.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./CartesianGrid-DMjcwRE-.js";import"./CartesianAxis-dyxsJwQR.js";import"./Layer-BsibGM2g.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./Label-wuhIVgaJ.js";import"./ZIndexLayer-G2n4L0mz.js";import"./types-pQqJf-MX.js";import"./XAxis-CUPjg_0f.js";import"./YAxis-BxbT09X2.js";import"./Area-CpRcp14M.js";import"./Curve-Drsk9B8o.js";import"./ReactUtils-CxvXJs5p.js";import"./ActivePoints-DULV1Jjf.js";import"./Dot-DlPbxCPd.js";import"./RegisterGraphicalItemId-CqL-lSFz.js";import"./GraphicalItemClipPath-BKYgv61x.js";import"./SetGraphicalItem-B3ZhK10N.js";import"./useAnimationId-DK5gOqc4.js";import"./getRadiusAndStrokeWidthFromDot--5FFHNy4.js";import"./graphicalItemSelectors-Bfxoe3GI.js";import"./Tooltip-CfI2yqob.js";import"./useElementOffset-B4L3s4Wg.js";import"./iteratee-CZcmoo0F.js";import"./Cross-BNY_DbJn.js";import"./Rectangle-CC7CQlR8.js";import"./Sector-BFy_SoTX.js";import"./RechartsHookInspector-MoE0nLDg.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./OffsetShower-kLJdjlLh.js";import"./PlotAreaShower-zycKA3rU.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"responsivecontainer",children:"ResponsiveContainer"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(a,{of:o,layout:"padded"}),`
`,e.jsxs(n.p,{children:[`This is a component that can be used to render charts that will be responsive to its parent.
When you render a chart you have to specify its `,e.jsx(n.strong,{children:"width"})," and ",e.jsx(n.strong,{children:"height"}),` for the chart to be
created correctly and show up when rendered. If you want to render a chart that one or both
of the dimensions is not a hard-coded number, instead it can fill the container, or be half
of its parent, then ResponsiveContainer is the right tool for you.`]}),`
`,e.jsxs(n.p,{children:["ResponsiveContainer required to have either ",e.jsx(n.strong,{children:"width"})," or ",e.jsx(n.strong,{children:"height"}),` or both be a percentage, like
`,e.jsx(n.code,{children:"75%"}),`, if you're trying to specify both width and height to be just a number, then its highly
likely that you don't need ResponsiveContainer and you can render the chart as is.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ResponsiveContainer width="100%" height={400}>
  <LineChart {...args}>
    <Line dataKey="uv" />
  </LineChart>
</ResponsiveContainer>
`})}),`
`,e.jsxs(n.p,{children:[`Its worth noting that by default, ResponsiveContainer does not render when you're rendering on
the server (SSR) or if JavaScript is disabled. This is because it depends on browser APIs
like `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",rel:"nofollow",children:"ResizeObserver"}),` to
first calculate what the percentage equals to in terms of its parent element. For example
if you specify `,e.jsx(n.code,{children:'width="80%"'}),`, ResponsiveContainer should first calculate the width of the
parent, say its `,e.jsx(n.code,{children:"720px"}),", now it has to calculate 80 percent of that 720 which will be ",e.jsx(n.strong,{children:"576px"}),`
and only then, renders the child Chart and passes the calculated width to it. So when you're
rendering a Chart inside ResponsiveContainer, you can omit its width and height and specify
those on the ResponsiveContainer.`]}),`
`,e.jsxs(n.p,{children:[`If you're using ResponsiveContainer and you're rendering on the server (SSR), then initially on
the Browser, the chart will not be shown until after hydration.
As mentioned, this is because while rendering on server, the dimensions cannot be calculated,
but if you need to have the chart rendered before hydration, you can pass `,e.jsx(n.code,{children:"initialDimension"}),`
prop, which is an object like `,e.jsx(n.code,{children:"{ width: 500, height: 500 }"}),`, when passed, the chart will
be rendered as a 500x500, when hydrated the actual width and height will be re-calculated
and the chart will change to its new dimensions.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<ResponsiveContainer width="100%" height={400} initialDimension={{ width: 520, height: 400 }}>
  <LineChart {...args}>
    <Line dataKey="uv" />
  </LineChart>
</ResponsiveContainer>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Note: Try to pass initial dimensions with accurate numbers, otherwise you might add some
`,e.jsx(n.a,{href:"https://web.dev/cls",rel:"nofollow",children:"content layout shift"})," which could be annoying for your users."]}),`
`]}),`
`,e.jsx(n.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(n.p,{children:"It can be used anywhere you would render another React component."}),`
`,e.jsx(n.h2,{id:"child-component",children:"Child component"}),`
`,e.jsx(n.p,{children:`The ResponsiveContainer can be used to render recharts charts as
well as any child that needs to know the dimensions of its parent container.`}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n.p,{children:"Properties in the groups Other and Internal are not recommended to be used."}),`
`,e.jsx(h,{of:o})]})}function se(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{se as default};
