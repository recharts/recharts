import{j as r}from"./jsx-runtime-CV7DQCuM.js";import{useMDXComponents as n}from"./index-DafK2Xdh.js";import{M as p,C as s,a}from"./blocks-CfTjU2MN.js";import{C as m,A as i}from"./ErrorBar.stories-DV-QrquF.js";import"./iframe-BDLVz6Jf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1g-GKPY.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bb5g38FD.js";import"./Layer-E90Uxi_N.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./ErrorBarContext-CHqnPMdC.js";import"./RechartsWrapper-BNGXTKCd.js";import"./arrayEqualityCheck-CUwHcVyI.js";import"./immer-D7ppHI2d.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B5IfmkK5.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./d3-scale-DrvOhfRi.js";import"./zIndexSlice-Dba-j24Y.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./RegisterGraphicalItemId-DgsZoNJO.js";import"./CSSTransitionAnimate-BPSd2N_O.js";import"./useAnimationId-DiGR44lM.js";import"./ZIndexLayer-CeMtlwqL.js";import"./ScatterChart-Di1fJFNd.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./CartesianGrid-C_vcoOOS.js";import"./CartesianAxis-DpZWUA10.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-rGGZujHk.js";import"./YAxis-DhrJBh1G.js";import"./Scatter-CWoaVGD4.js";import"./ReactUtils-Z_uY6BWT.js";import"./Curve-BkotQ_Ul.js";import"./step-BVw-sImN.js";import"./tooltipContext-CoKMvDHF.js";import"./Symbols-UHZicULa.js";import"./symbol-DWU8_PrF.js";import"./ActiveShapeUtils-1odowpJ3.js";import"./isPlainObject-D6WBWEYO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MA5abZlf.js";import"./Trapezoid-B0zvPW8H.js";import"./Sector-Bzk7xgyA.js";import"./GraphicalItemClipPath-52erAg5v.js";import"./SetGraphicalItem-D-MDoVx7.js";import"./RechartsHookInspector-DdlV-82E.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
