import{j as r}from"./jsx-runtime-Bmfm601D.js";import{useMDXComponents as n}from"./index-DFU-zcTx.js";import{M as p,C as s,a}from"./blocks-Ckvg0cvU.js";import{C as m,A as i}from"./ErrorBar.stories-DYHOGo8l.js";import"./iframe-Bhf_6EYG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BqdYNfEr.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BgYQGEAy.js";import"./Layer-XFtQT-yw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CltYoVM3.js";import"./ErrorBarContext-CFfHMS1a.js";import"./RechartsWrapper-BjPXyIC1.js";import"./arrayEqualityCheck-B5hYgnzz.js";import"./immer-DsnYViPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-qC7M-hg-.js";import"./hooks-B-MoHLBQ.js";import"./axisSelectors-Dt9F6ywj.js";import"./d3-scale-BxqYPjsE.js";import"./zIndexSlice-C8FzPb5S.js";import"./renderedTicksSlice-DaDN5hFR.js";import"./RegisterGraphicalItemId-ama1TJ-6.js";import"./CSSTransitionAnimate-_VUIeHL7.js";import"./useAnimationId-5DionbmP.js";import"./ZIndexLayer-B0zk77US.js";import"./ScatterChart-kOJxiwTB.js";import"./CartesianChart-CpaNhZA2.js";import"./chartDataContext-D5Z43mUX.js";import"./CategoricalChart-DSURhBZI.js";import"./CartesianGrid-BQ3WoBS_.js";import"./CartesianAxis-CR_T_Fxw.js";import"./Text-D28roL_s.js";import"./DOMUtils-ribD7pvn.js";import"./Label-CzjtkYX8.js";import"./types-B1Me3-i2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BWizQgTN.js";import"./YAxis-DsqV4VJF.js";import"./Scatter-iltJSVZd.js";import"./ReactUtils-BVVOmEmS.js";import"./Curve-CcL59NDu.js";import"./step-B0zDApE1.js";import"./tooltipContext-DrWjvVZn.js";import"./Symbols-BWIj5ibB.js";import"./symbol-DrDNfTYd.js";import"./ActiveShapeUtils-RLHirw82.js";import"./isPlainObject-DTAcdHTW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGAQXYtP.js";import"./Trapezoid-DB4UfnHe.js";import"./Sector-DbXwqOky.js";import"./GraphicalItemClipPath-kNsFQRgF.js";import"./SetGraphicalItem-Ck1k9tQT.js";import"./RechartsHookInspector-oY9r6aPa.js";import"./ChartSizeDimensions-BOmMsXET.js";import"./OffsetShower-syHcU848.js";import"./PlotAreaShower-BiEJY1Iw.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
