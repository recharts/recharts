import{j as e}from"./jsx-runtime-Cl9X46qc.js";import{useMDXComponents as r}from"./index-D7ZLyEZA.js";import{M as s,C as a,a as h}from"./blocks-C3R8AcfA.js";import{C as d,A as o}from"./ResponsiveContainer.stories-BR_hQp0f.js";import"./iframe-CKmpfOpL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-moZvkop3.js";import"./Page-Cj8EiXz7.js";import"./arrayEqualityCheck-CGTamc7H.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./PolarUtils-BmD-XZwK.js";import"./AreaChart-pNZAdHed.js";import"./RechartsWrapper-D1NbH_UG.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./zIndexSlice-CQqF6s7B.js";import"./CartesianChart-B2JPCr5o.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./CartesianGrid-Cq5KhU9R.js";import"./CartesianAxis-DmTSqBS2.js";import"./Layer-DhYkCEVl.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./Label-DnuO6Rjq.js";import"./ZIndexLayer-B_sQwTbu.js";import"./types-BLY5tRwt.js";import"./XAxis-BBRqfJxe.js";import"./YAxis-ho-us9Q5.js";import"./Area-Dx1m5aTo.js";import"./Curve-Bys97J5V.js";import"./ReactUtils-BXryAzdD.js";import"./ActivePoints-ClWX87Gp.js";import"./Dot-CHqdM_F0.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./GraphicalItemClipPath-78XXJvtR.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./useAnimationId-DzZ8q-8e.js";import"./getRadiusAndStrokeWidthFromDot-DvxIC_MO.js";import"./graphicalItemSelectors-Cs-wLzyO.js";import"./Tooltip-DcsIazWj.js";import"./useElementOffset-BBYrqTei.js";import"./iteratee-DYyig2D7.js";import"./Cross-BEdInfga.js";import"./Rectangle-D_zs00yx.js";import"./Sector-DbmZtSEy.js";import"./RechartsHookInspector-DZtkbE0Z.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"responsivecontainer",children:"ResponsiveContainer"}),`
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
