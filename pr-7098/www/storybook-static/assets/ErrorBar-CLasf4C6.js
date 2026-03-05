import{j as r}from"./jsx-runtime-BcymbHPb.js";import{useMDXComponents as n}from"./index-D43nr1gd.js";import{M as p,C as s,a}from"./blocks-CEtkq9Pc.js";import{C as m,A as i}from"./ErrorBar.stories-CG3f8f_A.js";import"./iframe-BheSPRxC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NavELH2p.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DAxI8HK3.js";import"./Layer-Dnr25hkA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YxfO8nVM.js";import"./ErrorBarContext-CYeurdws.js";import"./RechartsWrapper-BReu-8p6.js";import"./arrayEqualityCheck-DTJTJDIZ.js";import"./immer-Bk3tlmFk.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTAK_CzP.js";import"./hooks-D7thV8Yx.js";import"./axisSelectors-Bt_ndlyL.js";import"./d3-scale-Bi7kPPR-.js";import"./zIndexSlice-RIxi073z.js";import"./renderedTicksSlice-B7gUlO0Z.js";import"./RegisterGraphicalItemId-CfZTXmBZ.js";import"./CSSTransitionAnimate-DhVDbRxt.js";import"./useAnimationId-CA-fcZvu.js";import"./ZIndexLayer-BR-xGhiB.js";import"./ScatterChart-B5jKejJF.js";import"./CartesianChart-oljUKRjY.js";import"./chartDataContext-CTcUXfN7.js";import"./CategoricalChart-BxAT78Yw.js";import"./CartesianGrid-BEc0b5n8.js";import"./CartesianAxis-BNiz-eqI.js";import"./Text-BUur2DfR.js";import"./DOMUtils-qoxeJE6c.js";import"./Label-DvFgjn-2.js";import"./types-Ig8fwHS7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-w4I0Dz-P.js";import"./YAxis-Co--vqpb.js";import"./Scatter-Cwtx3ZVQ.js";import"./ReactUtils-eBHsRDRZ.js";import"./Curve-D5XGZpaq.js";import"./step-BEEMHEX_.js";import"./tooltipContext-BchO8CMc.js";import"./Symbols-DnaEJ_wk.js";import"./symbol-BrB1FpAX.js";import"./ActiveShapeUtils-CEbptTt-.js";import"./isPlainObject-DdlnvCr2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLKGSdHG.js";import"./Trapezoid-8ylyG2hR.js";import"./Sector-GkU_9DAY.js";import"./GraphicalItemClipPath-CyqMb0de.js";import"./SetGraphicalItem-vkl4WKoz.js";import"./RechartsHookInspector-BuIPrOmw.js";import"./ChartSizeDimensions-Dbu0-vjG.js";import"./OffsetShower-DiJ1X-2O.js";import"./PlotAreaShower-CtIhvInc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
