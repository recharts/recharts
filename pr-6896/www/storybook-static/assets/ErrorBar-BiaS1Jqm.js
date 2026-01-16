import{j as r}from"./jsx-runtime-DQ1XPA4G.js";import{useMDXComponents as n}from"./index-BkJ5QlN_.js";import{M as s,C as a,a as p}from"./blocks-BJa4tH9M.js";import{C as l,A as i}from"./ErrorBar.stories-Ckz1XoUi.js";import"./iframe-C-3BuwuQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DWdef0jv.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DUFkncz1.js";import"./Layer-BtreNavR.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./ErrorBarContext--fqfYIAi.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./arrayEqualityCheck-FeQgOIOo.js";import"./PolarUtils-C0kEye-G.js";import"./hooks-DEo8Vj_c.js";import"./axisSelectors-TDNCuVG_.js";import"./zIndexSlice-CFeEDpl4.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./CSSTransitionAnimate-PNsYWohM.js";import"./useAnimationId-0OWcJ5q4.js";import"./ZIndexLayer-cK31z4E4.js";import"./ScatterChart-Bb53wgl7.js";import"./CartesianChart-DDw6NmdK.js";import"./chartDataContext-CCRblB7F.js";import"./CategoricalChart-E0yZOneU.js";import"./CartesianGrid-BjcHRlcY.js";import"./CartesianAxis-CtyApd07.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./Label-C_nqqcnR.js";import"./types-CX-GD2h3.js";import"./XAxis-C5T_Hme-.js";import"./YAxis-BdnZ6VvH.js";import"./Scatter-DOo-n8Lg.js";import"./ReactUtils-DhVfiJt6.js";import"./Curve-DOZfooTf.js";import"./tooltipContext-f-uNjk8y.js";import"./Symbols-mlCUJH03.js";import"./ActiveShapeUtils-BI8SVP5k.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYl-A-mY.js";import"./Trapezoid-DRLGjDBA.js";import"./Sector-Dgl5Ps14.js";import"./GraphicalItemClipPath-4wjIziT0.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./RechartsHookInspector-_jP1ustk.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
