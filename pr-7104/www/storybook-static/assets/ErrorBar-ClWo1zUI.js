import{j as r}from"./jsx-runtime-hxSDis3-.js";import{useMDXComponents as n}from"./index-BS7W5S7Q.js";import{M as p,C as s,a}from"./blocks-bHUELNRH.js";import{C as m,A as i}from"./ErrorBar.stories-BpabHjR4.js";import"./iframe-B_nHVd2r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D4ywjx6k.js";import"./utils-ePvtT4un.js";import"./ErrorBar-kXC5BRIN.js";import"./Layer-CuJ2fFlM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./ErrorBarContext-D0DhrZWs.js";import"./RechartsWrapper-DzqzeMkT.js";import"./arrayEqualityCheck-DY9D726-.js";import"./immer-BI8B3IAj.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Ccd-ueyn.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./d3-scale-B9XrMCDb.js";import"./zIndexSlice-CcXit2BS.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./CSSTransitionAnimate-kxJ_O66C.js";import"./useAnimationId-DeeI7Yuu.js";import"./ZIndexLayer-BUYIYBsc.js";import"./ScatterChart-DYx7didb.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./CartesianGrid-DxD1gzBq.js";import"./CartesianAxis-CcM516-L.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./Label-Dso9Y4kd.js";import"./types-BNmhs72m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CW60u556.js";import"./YAxis-CHeSJRY3.js";import"./Scatter-PO86YGax.js";import"./ReactUtils-DvQ3Bihg.js";import"./Curve-RQsVLKEt.js";import"./step-DYOoDPDf.js";import"./tooltipContext-B7h_-5_Q.js";import"./Symbols-DkF8brZX.js";import"./symbol-DVZ8Ov9_.js";import"./ActiveShapeUtils-Bm79eQGO.js";import"./isPlainObject-Bku77CDs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsvkISRN.js";import"./Trapezoid-Bt86oLyu.js";import"./Sector-BoI-sHTN.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./RechartsHookInspector-fNULTbt1.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./OffsetShower-8fEwfkJg.js";import"./PlotAreaShower-DdlKlbvs.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
