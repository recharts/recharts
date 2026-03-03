import{j as r}from"./jsx-runtime-BKpqnl1C.js";import{useMDXComponents as n}from"./index-MelyXZBU.js";import{M as p,C as s,a}from"./blocks-DWO0XpCr.js";import{C as m,A as i}from"./ErrorBar.stories-DYIFFGLv.js";import"./iframe-C3IizUjd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-COvlj-J8.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BBcErWo_.js";import"./Layer-BScYV_nA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DskrAGQW.js";import"./ErrorBarContext-ZY5h9mih.js";import"./RechartsWrapper-nOVK-a7O.js";import"./arrayEqualityCheck-BN5YAPve.js";import"./immer-Zfp8_KXi.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BDIXnKn2.js";import"./hooks-Dky24mZ6.js";import"./axisSelectors-DftPES2E.js";import"./d3-scale-CueCtyXL.js";import"./zIndexSlice-BO04q8IP.js";import"./renderedTicksSlice-Dt_Lih6a.js";import"./RegisterGraphicalItemId-BeeC0A7D.js";import"./CSSTransitionAnimate-zftgUF5l.js";import"./useAnimationId-CDYOyu_I.js";import"./ZIndexLayer-D0ch3miO.js";import"./ScatterChart-DRPY3qqG.js";import"./CartesianChart-6pUZjxxf.js";import"./chartDataContext-CC6e_g43.js";import"./CategoricalChart-bB5xHAMm.js";import"./CartesianGrid-fnBE0d0U.js";import"./CartesianAxis-Cf07KQuR.js";import"./Text-Cq5Z8SfY.js";import"./DOMUtils-D3cjVXs_.js";import"./Label-D4qF_xzL.js";import"./types-XYE2Po1C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CEjSdtmZ.js";import"./YAxis-C9Xei-d9.js";import"./Scatter-d339-Kd6.js";import"./ReactUtils-DvBN6ieP.js";import"./Curve-CEEm8y0E.js";import"./step-CEFPVq0V.js";import"./tooltipContext-__SpLffu.js";import"./Symbols-wCZQNuZQ.js";import"./symbol-CdebLSvg.js";import"./ActiveShapeUtils-C-x2J9sD.js";import"./isPlainObject-BfiDfeU3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do-vXOL9.js";import"./Trapezoid-BMwhO9Tl.js";import"./Sector-Bpnrz7tS.js";import"./GraphicalItemClipPath-CxTZUJ58.js";import"./SetGraphicalItem-BkT7mDpp.js";import"./RechartsHookInspector-CMzm5IMa.js";import"./ChartSizeDimensions-BMoEUk31.js";import"./OffsetShower-C3Z070Oz.js";import"./PlotAreaShower-DeOjQ5h5.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
