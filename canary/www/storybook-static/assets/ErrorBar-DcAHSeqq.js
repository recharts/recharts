import{j as r}from"./jsx-runtime-CBjQ3zIm.js";import{useMDXComponents as n}from"./index-B2YCt5qC.js";import{M as p,C as s,a}from"./blocks-DLYWpkmJ.js";import{C as m,A as i}from"./ErrorBar.stories-Dy-KIzeI.js";import"./iframe-KW6q1dC8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8EwdUQHQ.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CjXYt0yh.js";import"./Layer-6RQ8uR29.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./ErrorBarContext-DmVYT152.js";import"./RechartsWrapper-B3hZLvHH.js";import"./arrayEqualityCheck-CsL9oElz.js";import"./immer-DJQrWxfT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-IRfq0wV0.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./zIndexSlice-BRzCHmzO.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./CSSTransitionAnimate-CBzFVfZR.js";import"./useAnimationId-D6KMdx62.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./ScatterChart-CRdkDzgf.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./CartesianGrid-B0_0b3T8.js";import"./CartesianAxis-CKh1nWaH.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./Label-Bmj0n5iK.js";import"./types-Dwy1lCB-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CfKcv1L2.js";import"./YAxis-BTdozUYh.js";import"./Scatter-DbxGNK4K.js";import"./ReactUtils-_GmE1-On.js";import"./Curve-DF4GvF_O.js";import"./step-B042Wr1e.js";import"./tooltipContext-Dx_SB0W0.js";import"./Symbols-BNAk55Bs.js";import"./symbol-5c1t0HLC.js";import"./ActiveShapeUtils-CDAKapsu.js";import"./isPlainObject-j8d21_8Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2IbtLxi.js";import"./Trapezoid-DNVzy1-l.js";import"./Sector-CjdyVVOd.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./RechartsHookInspector-DHhOwwId.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./OffsetShower-BWgPsPSu.js";import"./PlotAreaShower-BcdTxtG3.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
