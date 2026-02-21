import{j as r}from"./jsx-runtime-BulylNbF.js";import{useMDXComponents as n}from"./index-Cgu-W_h3.js";import{M as p,C as s,a}from"./blocks-CJTN14Yp.js";import{C as m,A as i}from"./ErrorBar.stories-B797Zish.js";import"./iframe-BI_pAXBB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4zEKe7v.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CZwYckOt.js";import"./Layer-BbCwBMrP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfThY2qm.js";import"./ErrorBarContext-wf0IFZx-.js";import"./RechartsWrapper-DROe6fuT.js";import"./arrayEqualityCheck-BKrbAl8r.js";import"./immer-DS7uv6B4.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BzE7Pa11.js";import"./hooks-B_MXrk3m.js";import"./axisSelectors-CXWTfjJ6.js";import"./d3-scale-CUPcwIhM.js";import"./zIndexSlice-Blq0MPxS.js";import"./renderedTicksSlice-CafZfga-.js";import"./RegisterGraphicalItemId-DUukUl_8.js";import"./CSSTransitionAnimate-DX4BsTiP.js";import"./useAnimationId-CIydZ5LQ.js";import"./ZIndexLayer-BIA7rzZS.js";import"./ScatterChart-CxERyjJd.js";import"./CartesianChart-KFRCLVOt.js";import"./chartDataContext-VgXSPlUI.js";import"./CategoricalChart-NTGK7QHa.js";import"./CartesianGrid-w7B05F1z.js";import"./CartesianAxis-D76QbbPe.js";import"./Text-DDIiPn9R.js";import"./DOMUtils-Clx04LAZ.js";import"./Label-BRAbHYpb.js";import"./types-CyZr-7-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CGb1kgb2.js";import"./YAxis-BlCMhds7.js";import"./Scatter-CMn-3nvg.js";import"./ReactUtils-C8LT_WKY.js";import"./Curve-C08bjkMC.js";import"./step-aPk3qf3o.js";import"./tooltipContext-ufA_qosq.js";import"./Symbols-D26WGzjl.js";import"./symbol-DK6vMZu2.js";import"./ActiveShapeUtils-BVb3C7rS.js";import"./isPlainObject-D710pF_7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlZgVPa6.js";import"./Trapezoid-NjnAs4CK.js";import"./Sector-CeaItBuI.js";import"./GraphicalItemClipPath-Bfi93Jqz.js";import"./SetGraphicalItem-d6KR3BLJ.js";import"./RechartsHookInspector-BVifdKxh.js";import"./ChartSizeDimensions-B1IFVDHL.js";import"./OffsetShower-PutuTgHL.js";import"./PlotAreaShower-CbV6UHYA.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
