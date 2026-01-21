import{j as r}from"./jsx-runtime-BrZeu4a9.js";import{useMDXComponents as n}from"./index-CJjvoPm1.js";import{M as s,C as a,a as p}from"./blocks-CbOqu3xl.js";import{C as m,A as i}from"./ErrorBar.stories-Coc0YNIi.js";import"./iframe-B3JCtExw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DqnQGlGG.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BKSVQ1CZ.js";import"./Layer-m9bU_GMN.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./ErrorBarContext-Bf3IY7YL.js";import"./RechartsWrapper-D9I6VAiu.js";import"./arrayEqualityCheck-BI5ikbve.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./zIndexSlice-CzadPF-N.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./CSSTransitionAnimate-DHL1ll2J.js";import"./useAnimationId-YJOXYlAT.js";import"./ZIndexLayer-BuYvVcNP.js";import"./ScatterChart-C2PHA5GP.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./CartesianGrid-BeqWnVU4.js";import"./CartesianAxis-D0PW3MM-.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./Label-DjeP5w8o.js";import"./types-CzJtAzjL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D8u9sAce.js";import"./YAxis-jqSdFVky.js";import"./Scatter-4aLyA4zI.js";import"./ReactUtils-YAdCW6ic.js";import"./Curve-CrR1QL9p.js";import"./tooltipContext-b-HqDcfL.js";import"./Symbols-CjdLCsX8.js";import"./ActiveShapeUtils-B5WBZ39Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D23yRLTV.js";import"./Trapezoid-54tzhOdh.js";import"./Sector-zNAlF0WR.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./RechartsHookInspector-B6PrNXux.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
