import{j as r}from"./jsx-runtime-D43LfG8S.js";import{useMDXComponents as n}from"./index-DPtKuDaU.js";import{M as p,C as s,a}from"./blocks-BrK7k-c6.js";import{C as m,A as i}from"./ErrorBar.stories-Dg4tZbcu.js";import"./iframe-B82KKzsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDwCI-pI.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DXrpdLbG.js";import"./Layer-ug_gWv5Y.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./ErrorBarContext-DSt7HMag.js";import"./RechartsWrapper-Dy52E8zA.js";import"./arrayEqualityCheck-Cg0idRhp.js";import"./immer-Cjr4YINx.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BPhr2cwx.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./zIndexSlice-DoZOUHwV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./CSSTransitionAnimate-CICAZV3U.js";import"./useAnimationId-BjMwuZHe.js";import"./ZIndexLayer-CCx46f1u.js";import"./ScatterChart-CnSvHxUN.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./CartesianGrid-T89mQ-w-.js";import"./CartesianAxis-DURtsiuN.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./Label-CoPQcGVn.js";import"./types-DaFthwO7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-EvgP7bI2.js";import"./YAxis-B1evlESR.js";import"./Scatter-B4eSI_vn.js";import"./ReactUtils-CyWe8bPC.js";import"./Curve-BsV_hxX6.js";import"./step-D_vNME6r.js";import"./tooltipContext-BEEFraiB.js";import"./Symbols-dztR1yZz.js";import"./symbol-Djdr0qU4.js";import"./ActiveShapeUtils-CrpulZpz.js";import"./isPlainObject-6AK1zo7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-qAHqHP.js";import"./Trapezoid-CL1eg36a.js";import"./Sector-SPbT55o6.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./RechartsHookInspector-Dn_N91Ha.js";import"./ChartSizeDimensions-DGlceztD.js";import"./OffsetShower-BguOTWfQ.js";import"./PlotAreaShower-CC5s-Y7u.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
