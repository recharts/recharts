import{j as r}from"./jsx-runtime-DRsYrtUF.js";import{useMDXComponents as n}from"./index-DiEo7uLo.js";import{M as s,C as a,a as p}from"./blocks-DvrwNnfH.js";import{C as m,A as i}from"./ErrorBar.stories-hWw0L-0w.js";import"./iframe-BJE3gYiz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BZmliZtD.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B0BijLXy.js";import"./Layer-BpHZQDe5.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./ErrorBarContext-CmxXk9PG.js";import"./RechartsWrapper-6YVSs0X2.js";import"./arrayEqualityCheck-DOpOKb7k.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./CSSTransitionAnimate-BLvwHkg4.js";import"./useAnimationId-xUHk75MJ.js";import"./ZIndexLayer-PGry8EqE.js";import"./ScatterChart-uW5Uuqav.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./CartesianGrid-IzZGbxwv.js";import"./CartesianAxis-DYQqdQ0S.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./Label-8Du7WhKH.js";import"./types-BgpWyLLK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CiUlidyy.js";import"./YAxis-DFb5sVBj.js";import"./Scatter-CKEMHsdC.js";import"./ReactUtils-DpOzmnGs.js";import"./Curve-9wsGsorR.js";import"./tooltipContext-CEFht0ON.js";import"./Symbols-CA9SXzw3.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./Trapezoid-wLmtEI-B.js";import"./Sector-D1swSw6R.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./RechartsHookInspector-CmJjyPOL.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
