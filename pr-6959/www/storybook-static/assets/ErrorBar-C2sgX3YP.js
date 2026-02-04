import{j as r}from"./jsx-runtime-D1aNSPFt.js";import{useMDXComponents as n}from"./index-DTDPSQzL.js";import{M as s,C as a,a as p}from"./blocks-C5YB_OOs.js";import{C as l,A as i}from"./ErrorBar.stories-D6TOrw3h.js";import"./iframe-lWBX64pI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-04LEDiAf.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CLK3uoY-.js";import"./Layer-BUTtt9Bz.js";import"./resolveDefaultProps-F9aAykDU.js";import"./ErrorBarContext-BmsITwJg.js";import"./RechartsWrapper-Djqv5WdD.js";import"./arrayEqualityCheck-Bc4Ot0PW.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DxrNJMr4.js";import"./axisSelectors-BWmy8ZsX.js";import"./zIndexSlice-DrTdUYuM.js";import"./RegisterGraphicalItemId-nVIwNLcs.js";import"./CSSTransitionAnimate-DQDClPpE.js";import"./useAnimationId-Bj8WvXUY.js";import"./ZIndexLayer-BWtmJpZw.js";import"./ScatterChart-B6c6dQpO.js";import"./CartesianChart-Dxi5Jpt2.js";import"./chartDataContext-BrNcW05w.js";import"./CategoricalChart-CNbBFS0r.js";import"./CartesianGrid-Dbc3AG7y.js";import"./CartesianAxis-CCAPZiMN.js";import"./Text-Cr9QQRZN.js";import"./DOMUtils-DKHDOrvS.js";import"./Label-BnM6Z2ZH.js";import"./types-CeMusotU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-TPgD44nE.js";import"./YAxis-Bfy5qxVv.js";import"./Scatter-mIW_chZb.js";import"./ReactUtils-Caa168vS.js";import"./Curve-BU8W3PHf.js";import"./tooltipContext-DPhc0NFx.js";import"./Symbols-D38f067d.js";import"./ActiveShapeUtils-BBPTy8PE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2euSkY-d.js";import"./Trapezoid-C8NVxs2k.js";import"./Sector-EvQq1WWA.js";import"./GraphicalItemClipPath-B0xhchCc.js";import"./SetGraphicalItem-CksZixPS.js";import"./RechartsHookInspector-DQzLYc7l.js";import"./ChartSizeDimensions-BCIgaepb.js";import"./OffsetShower-CEpgJiJ4.js";import"./PlotAreaShower-BJAGaSX0.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
