import{j as r}from"./jsx-runtime-CqEOw5Dg.js";import{useMDXComponents as n}from"./index-B0Vwifk6.js";import{M as s,C as a,a as p}from"./blocks-DuUbaJVr.js";import{C as l,A as i}from"./ErrorBar.stories-BdVqY1hR.js";import"./iframe-Bsm65lpu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CU5fePgk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DTfY3g_7.js";import"./Layer-wMrNll4f.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./ErrorBarContext-ypCLG3pm.js";import"./RechartsWrapper-De8mSPBF.js";import"./arrayEqualityCheck-pVpwfhw9.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./zIndexSlice-CyooY4AF.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./CSSTransitionAnimate-Czxw7uiz.js";import"./useAnimationId-dI2bK3sU.js";import"./ZIndexLayer-B9ntexjH.js";import"./ScatterChart-BBPZ1vgD.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./CartesianGrid-B77oMTii.js";import"./CartesianAxis-BtMXIbHW.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./Label-BJg3D3z3.js";import"./types-DNFwz7vs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-TRGWr1gg.js";import"./YAxis-B-wKWhdg.js";import"./Scatter-KKp3nctA.js";import"./ReactUtils-Dg23rHrH.js";import"./Curve-Dwdi27bs.js";import"./tooltipContext-CW6cq-3Y.js";import"./Symbols-lC3l514a.js";import"./ActiveShapeUtils-D74FXmj1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CqOp_VNA.js";import"./Trapezoid-DD-HamH_.js";import"./Sector-BjJSeVtU.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./RechartsHookInspector-Clmx80vb.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
