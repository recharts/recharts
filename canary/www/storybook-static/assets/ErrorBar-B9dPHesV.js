import{j as r}from"./jsx-runtime-DG2PKjR7.js";import{useMDXComponents as n}from"./index-BC8AGuF2.js";import{M as s,C as a,a as p}from"./blocks--B7I7gbw.js";import{C as l,A as i}from"./ErrorBar.stories-CaF8rUeI.js";import"./iframe-BVH8UecD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C-t36GsJ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-8n5ruXi6.js";import"./Layer-CdphaBoS.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./ErrorBarContext-B2FM21nb.js";import"./RechartsWrapper-BZaLp-vS.js";import"./arrayEqualityCheck-vgKGXjJg.js";import"./PolarUtils-D3PpCgED.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./zIndexSlice-BoigZ-y7.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./CSSTransitionAnimate-BT_yIxnL.js";import"./useAnimationId-B1orywOS.js";import"./ZIndexLayer-Qipy46x2.js";import"./ScatterChart-bOE1UgAI.js";import"./CartesianChart-nAdRozku.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./CartesianGrid-VinvqS6A.js";import"./CartesianAxis-DndSeeNX.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./Label-DbioSpEE.js";import"./types-iQF7hC2M.js";import"./XAxis-DOmXqRCS.js";import"./YAxis-Bmsarh4g.js";import"./Scatter-R1q8YadH.js";import"./ReactUtils-CPhzqwNY.js";import"./Curve-5Yzr7IBn.js";import"./tooltipContext-BBDmyfFl.js";import"./Symbols-Bx3sDerM.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Sector-DWTAjqin.js";import"./GraphicalItemClipPath-Ds_tmloi.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./RechartsHookInspector-Dq3yykk5.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./OffsetShower-CgbwF9et.js";import"./PlotAreaShower-HC6koTfx.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
