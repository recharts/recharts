import{j as r}from"./jsx-runtime-KhG_sdiS.js";import{useMDXComponents as n}from"./index-BDnAL294.js";import{M as p,C as s,a}from"./blocks-CucJCJLC.js";import{C as m,A as i}from"./ErrorBar.stories-5fNnX6Ln.js";import"./iframe-NG7xn8us.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D29y0xCx.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CITDlaOv.js";import"./Layer-DoTh6aNf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wED6QReO.js";import"./ErrorBarContext-D-lQEB7R.js";import"./RechartsWrapper-BZXpt1WI.js";import"./arrayEqualityCheck-DBfkDrHK.js";import"./immer-B8QNuQuL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DNpbdYzC.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./d3-scale-C8XpcDzx.js";import"./zIndexSlice-a1m4fSW4.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./RegisterGraphicalItemId-wCSwaH-X.js";import"./CSSTransitionAnimate-CQo4ILXK.js";import"./useAnimationId-DOHX5rOk.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./ScatterChart-DBjPrndb.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./CartesianGrid-tO3meBLn.js";import"./CartesianAxis-F1bzBjNH.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./Label-mpYwp3tS.js";import"./types-DHhKLS2Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DsLntPLQ.js";import"./YAxis-C_VVeJTb.js";import"./Scatter-BkbddRZC.js";import"./ReactUtils-CiPsQej4.js";import"./Curve-CO2TUzXD.js";import"./step-CZRzZlp2.js";import"./tooltipContext-CYaUy5K-.js";import"./Symbols-DVT-5QSh.js";import"./symbol-BtGJ97KY.js";import"./ActiveShapeUtils-DHpoPjkT.js";import"./isPlainObject-5-gXFuU7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6QRuf4O.js";import"./Trapezoid-CPIxctnZ.js";import"./Sector-CCDhVr63.js";import"./GraphicalItemClipPath-CXScC-pK.js";import"./SetGraphicalItem-C8yfvTXJ.js";import"./RechartsHookInspector-DUqk6vIV.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
