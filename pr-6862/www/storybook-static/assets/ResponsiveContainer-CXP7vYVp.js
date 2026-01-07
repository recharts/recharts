import{j as e}from"./jsx-runtime-jphB8dfm.js";import{useMDXComponents as r}from"./index-CetXs4zw.js";import{M as s,C as a,a as h}from"./blocks-zOrayGkG.js";import{C as d,A as o}from"./ResponsiveContainer.stories-Cr-m8KHP.js";import"./iframe-CjnSqbHY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BmN97iZD.js";import"./Page-DPte-9pC.js";import"./arrayEqualityCheck-Cu3uzYRG.js";import"./resolveDefaultProps-B-Bnboba.js";import"./PolarUtils-Dtm6FADD.js";import"./AreaChart-Dfk8nAe1.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./zIndexSlice-B31h325U.js";import"./CartesianChart-QvBm8Fl6.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./CartesianGrid-OW63ZEb5.js";import"./CartesianAxis-D2VxaDmK.js";import"./Layer-BPLY51e7.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./Label-DvPPISHS.js";import"./ZIndexLayer-6i7cawcn.js";import"./types-BYGLnYta.js";import"./XAxis-BjLd7C2C.js";import"./YAxis-CfoOURqB.js";import"./Area-bApm-z2W.js";import"./Curve-5ylBOp_W.js";import"./ReactUtils-Bdj2Y15E.js";import"./ActivePoints-Djyh2ioT.js";import"./Dot-BiSTmROa.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./GraphicalItemClipPath-BH8EdR6E.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./useAnimationId-BIU6gnQ_.js";import"./getRadiusAndStrokeWidthFromDot-DJkck7K5.js";import"./graphicalItemSelectors-CBa9ilJj.js";import"./Tooltip-CCoxC8s7.js";import"./useElementOffset-CJI6xldx.js";import"./iteratee-DiI7B68t.js";import"./Cross-BEO3jmNv.js";import"./Rectangle-DRbwIDD9.js";import"./Sector-CCKEyOJh.js";import"./RechartsHookInspector-Df5OjUd3.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"responsivecontainer",children:"ResponsiveContainer"}),`
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
