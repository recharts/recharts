import{j as e}from"./jsx-runtime-CXKP7_O_.js";import{useMDXComponents as r}from"./index-DUF1H_Ky.js";import{M as s,C as a,a as h}from"./blocks-jap-fXfk.js";import{C as d,A as o}from"./ResponsiveContainer.stories-BmFZmvJT.js";import"./iframe-DFbc2wnk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DEbDUIbN.js";import"./Page-DPte-9pC.js";import"./arrayEqualityCheck-DNx-7st0.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./PolarUtils-BDvNNmDF.js";import"./AreaChart-CdWmc5Hh.js";import"./RechartsWrapper-PvLVQTSN.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./zIndexSlice-DhoG6ae-.js";import"./CartesianChart-DAIV8Ndc.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./CartesianGrid-yYQlEY0W.js";import"./CartesianAxis-C9Id4cvu.js";import"./Layer-qN8dyvlM.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./Label-CS9yD1bY.js";import"./ZIndexLayer-DxPlI_9c.js";import"./types-CdWStgLs.js";import"./XAxis-DGAvxfHG.js";import"./YAxis-BmkMcK7A.js";import"./Area-z3Wjru0t.js";import"./Curve-CTbZZW_i.js";import"./ReactUtils-BJsLkXPe.js";import"./ActivePoints-BIgMZJDi.js";import"./Dot-DRgklH7x.js";import"./RegisterGraphicalItemId-BFMXufyl.js";import"./GraphicalItemClipPath-Dc38YvNS.js";import"./SetGraphicalItem-DlUa5gp3.js";import"./useAnimationId-B9C_B4hh.js";import"./getRadiusAndStrokeWidthFromDot-oEQcqU2-.js";import"./graphicalItemSelectors-BIbkXNjh.js";import"./Tooltip-BsfavUvO.js";import"./useElementOffset-Cu5T14iC.js";import"./iteratee-BaGaNSrO.js";import"./Cross-BZG6xoAa.js";import"./Rectangle-tz9WvN-g.js";import"./Sector-BE1YiTfv.js";import"./RechartsHookInspector-BArVV55G.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"responsivecontainer",children:"ResponsiveContainer"}),`
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
