import{j as r}from"./jsx-runtime-C58oBtyG.js";import{useMDXComponents as n}from"./index-B1K914fx.js";import{M as s,C as a,a as p}from"./blocks-BokthM4H.js";import{C as l,A as i}from"./ErrorBar.stories-C7WXhAXx.js";import"./iframe-D1NCNqUw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BmYae47F.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bj34M4Pp.js";import"./Layer-BCRy6dX1.js";import"./resolveDefaultProps-Djsbq22w.js";import"./ErrorBarContext-DeYCKUhW.js";import"./RechartsWrapper-DHOsEYDB.js";import"./arrayEqualityCheck-CQjIdQCx.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./CSSTransitionAnimate-Cj0duasV.js";import"./useAnimationId-CaRLwgfn.js";import"./ZIndexLayer-DGrkiEgC.js";import"./ScatterChart-qZ_RFYT2.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./CartesianGrid-Bd5YNvuL.js";import"./CartesianAxis-C56nwzMo.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./Label-BNrwDKuI.js";import"./types-gvwBC4-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-u0hdrjRw.js";import"./YAxis-A9YbMvOB.js";import"./Scatter-BIpoHizD.js";import"./ReactUtils-BB1Bvtm-.js";import"./Curve-C3pHY6tL.js";import"./tooltipContext-Cmujxu44.js";import"./Symbols-DMX5HiXT.js";import"./ActiveShapeUtils-5Ae3vqBy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNiHE16P.js";import"./Trapezoid-BR4vRuXB.js";import"./Sector-TTqZtEvI.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./RechartsHookInspector-ZreWXCAw.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
