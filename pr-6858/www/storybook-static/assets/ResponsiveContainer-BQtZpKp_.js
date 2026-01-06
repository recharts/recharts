import{j as e}from"./jsx-runtime-CHgIia86.js";import{useMDXComponents as r}from"./index-Uw3SpPuJ.js";import{M as s,C as a,a as h}from"./blocks-DKGmVktE.js";import{C as d,A as o}from"./ResponsiveContainer.stories-SqmbM8xt.js";import"./iframe-DP2mOMln.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMQ1Twes.js";import"./Page-Cj8EiXz7.js";import"./arrayEqualityCheck-5iTHPuD6.js";import"./resolveDefaultProps-_qLwNxhH.js";import"./PolarUtils-DkgNb_vz.js";import"./AreaChart-BxxBqNwh.js";import"./RechartsWrapper-T4ODBC4p.js";import"./hooks-zeoTqeYF.js";import"./axisSelectors-1ZBBcU4q.js";import"./zIndexSlice-Cik2D4vv.js";import"./CartesianChart-DpJZ7Wkf.js";import"./chartDataContext-B_bP7OxR.js";import"./CategoricalChart-DEV1B1BC.js";import"./CartesianGrid-CwGJdEIL.js";import"./CartesianAxis-CF6IOTSN.js";import"./Layer-BZqUSVid.js";import"./Text-C5XiBNyf.js";import"./DOMUtils-DWLh1SLI.js";import"./Label-DnLJWwCk.js";import"./ZIndexLayer-BOwqkVYS.js";import"./types-DdS-Ezdx.js";import"./XAxis-B_VQg86f.js";import"./YAxis-WXcImUvg.js";import"./Area-CvyIrXLV.js";import"./Curve-DYGBu986.js";import"./ReactUtils-DJEcSmKG.js";import"./ActivePoints-CZ6tlVSr.js";import"./Dot-qyySS_n7.js";import"./RegisterGraphicalItemId-30jUMiK8.js";import"./GraphicalItemClipPath-C-hXbMEZ.js";import"./SetGraphicalItem-ZmYa4ptY.js";import"./useAnimationId-BuyyHYgP.js";import"./getRadiusAndStrokeWidthFromDot-ChYaQN1P.js";import"./graphicalItemSelectors-DRBcp9i0.js";import"./Tooltip-CtUAS5no.js";import"./useElementOffset-Bme7kzJ-.js";import"./iteratee-VohP_WFB.js";import"./Cross-CBOoYy9A.js";import"./Rectangle-DcVYjSDm.js";import"./Sector-CAH7EP92.js";import"./RechartsHookInspector-DVpbP7qM.js";import"./ChartSizeDimensions-fmpk3s6Q.js";import"./OffsetShower-B4eNU7sm.js";import"./PlotAreaShower-CPDnvxOK.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"responsivecontainer",children:"ResponsiveContainer"}),`
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
