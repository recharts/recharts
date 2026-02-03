import{j as r}from"./jsx-runtime-E4_XykR5.js";import{useMDXComponents as n}from"./index-HVxPd9Aq.js";import{M as s,C as a,a as p}from"./blocks-Dcb9CW65.js";import{C as l,A as i}from"./ErrorBar.stories-Cg6x8RTP.js";import"./iframe-DPPC5LCd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vC2xkEJs.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BESEeBre.js";import"./Layer-l1Ju_rpU.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./ErrorBarContext-DOTmmgqX.js";import"./RechartsWrapper-PEDxF674.js";import"./arrayEqualityCheck-Dvk8KT0D.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./zIndexSlice-Cyke5ZAj.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./CSSTransitionAnimate-aJWf-WcY.js";import"./useAnimationId-BL1JszpL.js";import"./ZIndexLayer-BYs5zm3k.js";import"./ScatterChart-1-VKOsCu.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./CartesianGrid-CvB-qYbV.js";import"./CartesianAxis-CbeAAhwj.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./Label-CyOEca1T.js";import"./types-BtZeuRvc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BG2Y_xwU.js";import"./YAxis-BkVN0NTj.js";import"./Scatter-D-ARXo6H.js";import"./ReactUtils-Dpo3QY29.js";import"./Curve-Bys-PvMV.js";import"./tooltipContext-DRPH6AnF.js";import"./Symbols-BVjVO6PI.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdGsT6u6.js";import"./Trapezoid-BQbcDxOL.js";import"./Sector-6q_tG2Nj.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./RechartsHookInspector-Blp8PL-4.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
