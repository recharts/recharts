import{j as r}from"./jsx-runtime-C2qIItfJ.js";import{useMDXComponents as n}from"./index-D0VslsMf.js";import{M as s,C as a,a as p}from"./blocks-93Fb8H4-.js";import{C as l,A as i}from"./ErrorBar.stories-C4klrO6U.js";import"./iframe-C4Awkoff.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C4xfSpfA.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DdQVVSsM.js";import"./Layer-3uSdf7p6.js";import"./resolveDefaultProps-B49yJYL9.js";import"./ErrorBarContext-COm8GL2L.js";import"./RechartsWrapper-D13K1qt6.js";import"./arrayEqualityCheck-B4QvsFQi.js";import"./PolarUtils-CG-ELovL.js";import"./hooks-Gb_nE6Hc.js";import"./axisSelectors-CRRN5Cb6.js";import"./zIndexSlice-BPscvr6m.js";import"./RegisterGraphicalItemId-DlrlPqlA.js";import"./CSSTransitionAnimate-DrRk8B8n.js";import"./useAnimationId-BOjGjWHD.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./ScatterChart-L4SBL7C3.js";import"./CartesianChart-DYhYqUl7.js";import"./chartDataContext-BbHvubZk.js";import"./CategoricalChart-CQLlvG-9.js";import"./CartesianGrid-BH8aP75T.js";import"./CartesianAxis-CA9DIeAi.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./Label-BgopB1Yd.js";import"./types-BzBfPwET.js";import"./XAxis-BNPVvEKI.js";import"./YAxis-OmZ5CylP.js";import"./Scatter-PRs45zey.js";import"./ReactUtils-QCPHueip.js";import"./Curve-CSLJzt9O.js";import"./tooltipContext-86YEwt54.js";import"./Symbols-D7LlaOYy.js";import"./ActiveShapeUtils-DGax7cBC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGrEruZe.js";import"./Trapezoid-C9Na_GGw.js";import"./Sector-Bh3LTLHk.js";import"./GraphicalItemClipPath-DelQe7IH.js";import"./SetGraphicalItem-Dytz3s7d.js";import"./RechartsHookInspector-C8xIuzm_.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
