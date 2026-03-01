import{j as r}from"./jsx-runtime-Z-eAoZjO.js";import{useMDXComponents as n}from"./index-BCI89Oro.js";import{M as p,C as s,a}from"./blocks-QEJcoYPN.js";import{C as m,A as i}from"./ErrorBar.stories-DOu4jtCP.js";import"./iframe-BKMt6m5h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CM5FbTKx.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DmRpCynn.js";import"./Layer-C7IPz0M5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRqv39RM.js";import"./ErrorBarContext-CYXSxlYD.js";import"./RechartsWrapper-CBmXgxrR.js";import"./arrayEqualityCheck-DKiSJyxs.js";import"./immer-119-Vx0I.js";import"./PolarUtils-CTnnDHZv.js";import"./index-0ICx_Jh1.js";import"./hooks-CVLKfhqZ.js";import"./axisSelectors-_eXkUPwd.js";import"./d3-scale-eFzonIBi.js";import"./zIndexSlice-C-hcpEb_.js";import"./renderedTicksSlice-CoSXmQJE.js";import"./RegisterGraphicalItemId-Cr9Zp2xj.js";import"./CSSTransitionAnimate-MfFt2vHu.js";import"./useAnimationId-CMiOk1pX.js";import"./ZIndexLayer-BVz5K0QN.js";import"./ScatterChart-BmbX3A4h.js";import"./CartesianChart-DIHhcgBc.js";import"./chartDataContext-BHrrZZEw.js";import"./CategoricalChart-BQZ3b4pY.js";import"./CartesianGrid-_qyEGuWy.js";import"./CartesianAxis-BvH7Qvln.js";import"./Text-DA8ucQjy.js";import"./DOMUtils-AZdfoklW.js";import"./Label-COa6_klK.js";import"./types-CWEN2hKj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CDLcqOUJ.js";import"./YAxis-BewdCXRw.js";import"./Scatter-B501PrYr.js";import"./ReactUtils-ChQm2gA4.js";import"./Curve-CIJPKaTL.js";import"./step-q1byNl46.js";import"./tooltipContext-B56jwArc.js";import"./Symbols-DEMmgvtO.js";import"./symbol-Mq3R2Ynh.js";import"./ActiveShapeUtils-CFZSnkxp.js";import"./isPlainObject-7Y5kwcXL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_C8hcZh.js";import"./Trapezoid-Cs1O72ba.js";import"./Sector-_bf6LJcr.js";import"./GraphicalItemClipPath-DfzX8699.js";import"./SetGraphicalItem-DCaX05zE.js";import"./RechartsHookInspector-C8vh1C69.js";import"./ChartSizeDimensions-DMUyiIA2.js";import"./OffsetShower-r91l4zph.js";import"./PlotAreaShower-Sm9yLIMv.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
