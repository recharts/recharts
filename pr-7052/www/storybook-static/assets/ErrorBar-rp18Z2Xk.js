import{j as r}from"./jsx-runtime-Bt4J4Tqm.js";import{useMDXComponents as n}from"./index-DcSVxthh.js";import{M as p,C as s,a}from"./blocks-B9hUOmmt.js";import{C as m,A as i}from"./ErrorBar.stories-D7Cc3o2o.js";import"./iframe-BlrnuDjf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cy5kt_9j.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DLYK2Jqk.js";import"./Layer-XHhRDzId.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1DdFNclr.js";import"./ErrorBarContext-BsqB8Oyr.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./arrayEqualityCheck-BTXXQX4n.js";import"./immer-BI9UFPL2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CKL3N-6v.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./zIndexSlice-CqZHWfc6.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./RegisterGraphicalItemId-Bh07AqU-.js";import"./CSSTransitionAnimate-8bw2WZFy.js";import"./useAnimationId-DbkCLx7t.js";import"./ZIndexLayer-7Hmap2eH.js";import"./ScatterChart-Bzfhta_b.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./CartesianGrid-BsN6v_bv.js";import"./CartesianAxis-edOWbwOR.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./Label-D_q5FUVB.js";import"./types-DB_0tejV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BYp_HR9V.js";import"./YAxis-BWVYo6DZ.js";import"./Scatter-CVlxcW_T.js";import"./ReactUtils-BjQ30mBr.js";import"./Curve-BlGAAnP8.js";import"./step-oX00aiZd.js";import"./tooltipContext-BFnVZoxN.js";import"./Symbols-DUfoVivI.js";import"./symbol-C5z5ai8y.js";import"./ActiveShapeUtils-Dv40rWK2.js";import"./isPlainObject-BwE05GU9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXu9YO7w.js";import"./Trapezoid-DnTBSn7u.js";import"./Sector-Dv5PvvRm.js";import"./GraphicalItemClipPath-EkcAQ3H7.js";import"./SetGraphicalItem-B1RMw4_v.js";import"./RechartsHookInspector-BAQjFSl6.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
