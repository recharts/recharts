import{j as e}from"./jsx-runtime-CGrw2_80.js";import{useMDXComponents as r}from"./index-B6HImlvj.js";import{M as s,C as a,a as h}from"./blocks-CZe6niEg.js";import{C as d,A as o}from"./ResponsiveContainer.stories-BziS25M7.js";import"./iframe-tCRQIxYB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkWn_0P6.js";import"./Page-DPte-9pC.js";import"./arrayEqualityCheck-DFgE1twh.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./PolarUtils-BLxmkcH1.js";import"./AreaChart-CDhCSEJV.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./zIndexSlice-IJ_zl8YN.js";import"./CartesianChart-Dy39hE-Z.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./CartesianGrid-W-T5FlPk.js";import"./CartesianAxis-ipmvl_eK.js";import"./Layer-Okfcyfin.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./Label-JD75mQPI.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./types-CbdV4-dc.js";import"./XAxis-o_gppMSb.js";import"./YAxis-C5YEwPYl.js";import"./Area-Dbx8V4B5.js";import"./Curve-NiEgXiq2.js";import"./ReactUtils-CF2khIYu.js";import"./ActivePoints-BVkf9rZJ.js";import"./Dot-DRKOPpIx.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./GraphicalItemClipPath-D1JoWQAT.js";import"./SetGraphicalItem-DozJQrmf.js";import"./useAnimationId-D2oVQKnr.js";import"./getRadiusAndStrokeWidthFromDot-BKo_PtlD.js";import"./graphicalItemSelectors-kD6BeSeA.js";import"./Tooltip-CFzd-RiE.js";import"./useElementOffset-D0-uD3Uj.js";import"./iteratee-QAA3_HSJ.js";import"./Cross-B215_L-1.js";import"./Rectangle-BUsvopn3.js";import"./Sector-DQ482-FH.js";import"./RechartsHookInspector-bM2S9Z_N.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./OffsetShower-B78P8GFz.js";import"./PlotAreaShower-R2kW5Azb.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"responsivecontainer",children:"ResponsiveContainer"}),`
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
