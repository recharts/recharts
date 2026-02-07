import{j as r}from"./jsx-runtime-DjP5wPnX.js";import{useMDXComponents as n}from"./index-DsP-T3bK.js";import{M as s,C as a,a as p}from"./blocks-CCfoxFno.js";import{C as l,A as i}from"./ErrorBar.stories-o2O6oZEW.js";import"./iframe-C04w6IgM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Demzea1L.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DEn0Ffw_.js";import"./Layer-DCya1uir.js";import"./resolveDefaultProps-W7dKz5yL.js";import"./ErrorBarContext-vRJZfYBF.js";import"./RechartsWrapper-CFnGMsu4.js";import"./arrayEqualityCheck-CbUGNhnJ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Cld4lrxT.js";import"./axisSelectors-BYq9-SUS.js";import"./zIndexSlice-BbE5d2nx.js";import"./RegisterGraphicalItemId-DHraWFR-.js";import"./CSSTransitionAnimate-Woze_FA3.js";import"./useAnimationId-DPZtvNGp.js";import"./ZIndexLayer-HIOEAvam.js";import"./ScatterChart-D4r2vksV.js";import"./CartesianChart-enHf794Z.js";import"./chartDataContext-Cjixp2uN.js";import"./CategoricalChart-PYyhSed2.js";import"./CartesianGrid-NOO7UTOC.js";import"./CartesianAxis-02lidDov.js";import"./Text-BJaKJCkK.js";import"./DOMUtils-BGMw9OAN.js";import"./Label-B7VXzhwV.js";import"./types-D-OVIK3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BLBsMt8p.js";import"./YAxis-Bx_U4OHG.js";import"./Scatter-BQbXVA7b.js";import"./ReactUtils-C2UklmlD.js";import"./Curve-BQk4xMcU.js";import"./tooltipContext-DKp330o1.js";import"./Symbols-DPND5ycq.js";import"./ActiveShapeUtils-BwfeuSce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXVXA4zS.js";import"./Trapezoid-C_oXf8hs.js";import"./Sector-Cbb0SBJZ.js";import"./GraphicalItemClipPath-Do9yu51T.js";import"./SetGraphicalItem-vjtDhulh.js";import"./RechartsHookInspector-B7Jr2nYf.js";import"./ChartSizeDimensions-BMKfYLeY.js";import"./OffsetShower-RZSmdjyo.js";import"./PlotAreaShower-BeZsrL7O.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
