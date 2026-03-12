import{j as r}from"./jsx-runtime-B7ICJarJ.js";import{useMDXComponents as n}from"./index-KTLwpLFK.js";import{M as p,C as s,a}from"./blocks-BVAcYpnx.js";import{C as m,A as i}from"./ErrorBar.stories-B9pT7pFA.js";import"./iframe-tnEFgkcx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_XUjRxy.js";import"./utils-ePvtT4un.js";import"./ErrorBar-pAopGhDq.js";import"./Layer-DvhQWyN1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BeZ1TWKo.js";import"./ErrorBarContext-BSDSa2Nb.js";import"./RechartsWrapper-cR-RvqVo.js";import"./arrayEqualityCheck-DqJ8srhf.js";import"./immer-ncBRdkeU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B4jDL_1j.js";import"./hooks-DptPG5bY.js";import"./axisSelectors-KZFlWzxW.js";import"./d3-scale-ByLEGZpF.js";import"./zIndexSlice-CXrfbzcc.js";import"./renderedTicksSlice-D0-SyI8-.js";import"./RegisterGraphicalItemId-CBL_DLkS.js";import"./CSSTransitionAnimate--W-evT4X.js";import"./useAnimationId-CMZ4Qpmu.js";import"./ZIndexLayer-BcZ51bY1.js";import"./ScatterChart-BOhyOacI.js";import"./CartesianChart-TKSiJtpn.js";import"./chartDataContext-qO9BwWme.js";import"./CategoricalChart-a9SFhw6w.js";import"./CartesianGrid-Cgu76c9S.js";import"./CartesianAxis-BAHnc_tG.js";import"./Text-BKpNJ0c7.js";import"./DOMUtils-Bml29IBx.js";import"./Label-DekpC_Fs.js";import"./types-1yHH6o1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DyD39sPk.js";import"./YAxis-ExPMB155.js";import"./Scatter-B_8NVB1X.js";import"./ReactUtils-CCMVcigr.js";import"./Curve-DSeHhcSU.js";import"./step-BN--2jEq.js";import"./tooltipContext-C_CGt6pP.js";import"./Symbols-DUWbDiG2.js";import"./symbol-Bc_lVtCg.js";import"./ActiveShapeUtils-CgS0gI7T.js";import"./isPlainObject-CCD3tKcT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bj9CslW_.js";import"./Trapezoid-DLvbqVqP.js";import"./Sector-BeRUQC1b.js";import"./GraphicalItemClipPath-ByitOfMe.js";import"./SetGraphicalItem-B_lEpaDw.js";import"./RechartsHookInspector-C8yNaUl0.js";import"./ChartSizeDimensions-CS0lJGsa.js";import"./OffsetShower-BTWXwS8x.js";import"./PlotAreaShower-CFtvb_hv.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
