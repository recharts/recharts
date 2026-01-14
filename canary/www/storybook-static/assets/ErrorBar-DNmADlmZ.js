import{j as r}from"./jsx-runtime-RlvmNLlW.js";import{useMDXComponents as n}from"./index-CsQsDG1a.js";import{M as s,C as a,a as p}from"./blocks-BQcHl3st.js";import{C as l,A as i}from"./ErrorBar.stories-DK6lZxrv.js";import"./iframe-BtpSaGeD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-o2N_x1RI.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DFq3vgAf.js";import"./Layer-CYyvuKkx.js";import"./resolveDefaultProps-DkARaCDv.js";import"./ErrorBarContext-D_YNM0zR.js";import"./RechartsWrapper-BQPGXXGO.js";import"./arrayEqualityCheck-csfjq8mV.js";import"./PolarUtils-5F1_zZA0.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./zIndexSlice-ydm78BYW.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./CSSTransitionAnimate-BBG8tU2X.js";import"./useAnimationId-Be_3bM2l.js";import"./ZIndexLayer-BcDwNHGX.js";import"./ScatterChart-uCy57KpU.js";import"./CartesianChart-2vMAanpf.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./CartesianGrid-DjzQkRle.js";import"./CartesianAxis-B74-p-s1.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./Label-BOlhuZqt.js";import"./types-245F3-IH.js";import"./XAxis-iLH9P-hU.js";import"./YAxis-Bmepm0jT.js";import"./Scatter-C0zFA8Pb.js";import"./ReactUtils-TAFDop8V.js";import"./Curve-BC2lzeAQ.js";import"./tooltipContext-DDmowHlH.js";import"./Symbols-Dt8Khp4u.js";import"./ActiveShapeUtils-D3Igja4T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3A1KPVj.js";import"./Trapezoid-xDGlDRMK.js";import"./Sector-NNIkOagX.js";import"./GraphicalItemClipPath-CmYuvuXv.js";import"./SetGraphicalItem-CMYrG93h.js";import"./RechartsHookInspector-Dh2n9Wob.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./OffsetShower-DBzvXmYz.js";import"./PlotAreaShower-BzkhZKlK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
