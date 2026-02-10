import{j as r}from"./jsx-runtime-BD5qL-TL.js";import{useMDXComponents as n}from"./index-BNCRsJRS.js";import{M as s,C as a,a as p}from"./blocks-CElDe8nk.js";import{C as l,A as i}from"./ErrorBar.stories-CYvdLoAl.js";import"./iframe-Bg6hY-Lh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C3KvIg2I.js";import"./utils-ePvtT4un.js";import"./ErrorBar-5Pdgj48c.js";import"./Layer-CbLnIqdO.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./ErrorBarContext-BJIGtpIX.js";import"./RechartsWrapper-DkqFGzuB.js";import"./arrayEqualityCheck-BDis9FaH.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DM-gzZjo.js";import"./axisSelectors-GHndRTSk.js";import"./zIndexSlice-DBH2YRr7.js";import"./RegisterGraphicalItemId-DQWcO4Xr.js";import"./CSSTransitionAnimate-Dxqj6Z2C.js";import"./useAnimationId-9L0wWVYf.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./ScatterChart-CvTgLGzl.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./CartesianGrid-CjQk98d1.js";import"./CartesianAxis-vJmkqZaZ.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./Label-XrRQ-MXs.js";import"./types-CCzU0McW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CuwyE-Aw.js";import"./YAxis-D_u72_vn.js";import"./Scatter-x5lWlhIS.js";import"./ReactUtils-CFjZLDuN.js";import"./Curve-J_xBTbd1.js";import"./tooltipContext-BBinbNZ7.js";import"./Symbols-CxwFL1-B.js";import"./ActiveShapeUtils-YlmjpsSF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cIsPACi8.js";import"./Trapezoid-BJ7F2nGX.js";import"./Sector-CEFw5FZM.js";import"./GraphicalItemClipPath-CQF6nnWi.js";import"./SetGraphicalItem-B1--8enS.js";import"./RechartsHookInspector-C0SDsqLX.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
