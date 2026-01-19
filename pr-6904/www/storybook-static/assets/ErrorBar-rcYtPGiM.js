import{j as r}from"./jsx-runtime-DASmcGMl.js";import{useMDXComponents as n}from"./index-CmYZbzT_.js";import{M as s,C as a,a as p}from"./blocks-BuJY6uh1.js";import{C as l,A as i}from"./ErrorBar.stories-BiFEq6xO.js";import"./iframe-CpNu1JlZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjecE5DL.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Y5V68rOm.js";import"./Layer-CgGUTlVA.js";import"./resolveDefaultProps-W5bbcHB0.js";import"./ErrorBarContext-CPEIMkdr.js";import"./RechartsWrapper-0hOTWq_R.js";import"./arrayEqualityCheck-BJH8Jf6v.js";import"./PolarUtils-D3v-RsLH.js";import"./hooks-C6Ia6Lfs.js";import"./axisSelectors-BBvb1V6K.js";import"./zIndexSlice-DY-K2-IQ.js";import"./RegisterGraphicalItemId-D7Qen5Xd.js";import"./CSSTransitionAnimate-C6qvhNx4.js";import"./useAnimationId-B5QsM2o0.js";import"./ZIndexLayer-BhjXIlXu.js";import"./ScatterChart-DbXxBW7m.js";import"./CartesianChart-DJav-J6T.js";import"./chartDataContext-D9xDPkuR.js";import"./CategoricalChart-BHgD9gAO.js";import"./CartesianGrid-I2wQTv9V.js";import"./CartesianAxis-DHgD0c-6.js";import"./Text-CcMcwnEY.js";import"./DOMUtils-Bq1JWBRd.js";import"./Label-BZ3pAw6v.js";import"./types-DLbIt3jn.js";import"./XAxis-4Sxw4UkR.js";import"./YAxis-B8FElgTt.js";import"./Scatter-CKuwzHlT.js";import"./ReactUtils-DkvyTuz_.js";import"./Curve-BgSSBByK.js";import"./tooltipContext-DyzLbsS_.js";import"./Symbols-BLQ2T1a8.js";import"./ActiveShapeUtils-DXbdTG-x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpK3ty__.js";import"./Trapezoid-DLjeAkOF.js";import"./Sector-CFrzjDGx.js";import"./GraphicalItemClipPath-CxPnAcc7.js";import"./SetGraphicalItem-B-5mlAj6.js";import"./RechartsHookInspector-BmpKM6Nz.js";import"./ChartSizeDimensions-Q_MjQJbH.js";import"./OffsetShower-CV2zUXL0.js";import"./PlotAreaShower-Bf09ZPlm.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
