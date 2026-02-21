import{j as r}from"./jsx-runtime-BfNJRevS.js";import{useMDXComponents as n}from"./index-t9FOZmlA.js";import{M as p,C as s,a}from"./blocks-DJwMlFW3.js";import{C as m,A as i}from"./ErrorBar.stories-Ctbj02s3.js";import"./iframe-Bu-inuC_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CiBd-8tu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BMozNFRk.js";import"./Layer-Dlph539k.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CsH4psWY.js";import"./ErrorBarContext-DApypuO7.js";import"./RechartsWrapper-DprTEw8A.js";import"./arrayEqualityCheck-DU89AxsE.js";import"./immer-XJQsdFk2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DtrjCIe1.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./zIndexSlice-jAGqg83w.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./CSSTransitionAnimate-Ca_Y7Bb6.js";import"./useAnimationId-BQHAYEwx.js";import"./ZIndexLayer-XPmioUZb.js";import"./ScatterChart-s4zAw5NF.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./CartesianGrid-DprSPxu5.js";import"./CartesianAxis-RY4R-JEB.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./Label-Bztw_jsS.js";import"./types-kezhLfGE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B7Sm-Q2v.js";import"./YAxis-C2_h55z2.js";import"./Scatter-DON1xL-4.js";import"./ReactUtils-CbatvDS3.js";import"./Curve-SSe25XRS.js";import"./step-CG3E5dJ5.js";import"./tooltipContext-PmNssIxI.js";import"./Symbols-CfIo9P3Y.js";import"./symbol-DCuuGdc1.js";import"./ActiveShapeUtils-BT0ZFYuE.js";import"./isPlainObject-Dg1QCtSt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ih3X5Nav.js";import"./Trapezoid-DN15z973.js";import"./Sector-K5K0caPh.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./RechartsHookInspector-kfypTTkJ.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./OffsetShower-D2S5vzbK.js";import"./PlotAreaShower-BXNxywRo.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
