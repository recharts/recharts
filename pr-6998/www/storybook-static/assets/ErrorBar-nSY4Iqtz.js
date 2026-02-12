import{j as r}from"./jsx-runtime-55ejvgaS.js";import{useMDXComponents as n}from"./index-BKFSYocz.js";import{M as s,C as a,a as p}from"./blocks-DWC9t4z6.js";import{C as l,A as i}from"./ErrorBar.stories-xC5DT2PU.js";import"./iframe-faEGnlhT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ek5vanJI.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Du6YqH62.js";import"./Layer-BVbadyP2.js";import"./resolveDefaultProps-E1K0A3LW.js";import"./ErrorBarContext-BZkVSpWJ.js";import"./RechartsWrapper-C18N7NWG.js";import"./arrayEqualityCheck-C0DmTAi-.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BCFTrc9K.js";import"./axisSelectors-B-QEn76s.js";import"./zIndexSlice-B9CGjDBz.js";import"./RegisterGraphicalItemId-D75CZCwF.js";import"./CSSTransitionAnimate-ubbddYOk.js";import"./useAnimationId-KEEDc5eO.js";import"./ZIndexLayer-Dp_sNRVX.js";import"./ScatterChart-MXF3-eS1.js";import"./CartesianChart-BcS0gbJv.js";import"./chartDataContext--QJQie47.js";import"./CategoricalChart-DS6-A_Eu.js";import"./CartesianGrid-CiqXWwez.js";import"./CartesianAxis-D4ASWqc1.js";import"./Text-TFqO-ApL.js";import"./DOMUtils-z-S8PuYj.js";import"./Label-DHVy6qmW.js";import"./types-Bw-NWEAT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CFbqEzYE.js";import"./YAxis-CcVX3Fvc.js";import"./Scatter-yQ8fX7e3.js";import"./ReactUtils-DIvlatZp.js";import"./Curve-Digajzg7.js";import"./tooltipContext-DUN4cnoq.js";import"./Symbols-C64BIrkw.js";import"./ActiveShapeUtils-DBh9LMnt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DX06SiF4.js";import"./Trapezoid-BUZP6yXx.js";import"./Sector-VklTrsUw.js";import"./GraphicalItemClipPath-Cxy9t3jj.js";import"./SetGraphicalItem-Dla_HDr3.js";import"./RechartsHookInspector-DorgIABE.js";import"./ChartSizeDimensions-BIBiiHxa.js";import"./OffsetShower-syvld0TV.js";import"./PlotAreaShower-LZVAobRV.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
