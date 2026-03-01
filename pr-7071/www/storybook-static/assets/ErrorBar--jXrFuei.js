import{j as r}from"./jsx-runtime-MOfbUEBM.js";import{useMDXComponents as n}from"./index-Ca4kQy01.js";import{M as p,C as s,a}from"./blocks-DJTTKk1E.js";import{C as m,A as i}from"./ErrorBar.stories-BuM6nFvu.js";import"./iframe-DKyU_iXE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CAiBL-v8.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BbwLMe5D.js";import"./Layer--fTJnsnP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cUmGB5BP.js";import"./ErrorBarContext-BwvMd7Q8.js";import"./RechartsWrapper-B1k7PNNo.js";import"./arrayEqualityCheck-CBuQt-LQ.js";import"./immer-CaNK2Wnd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bc9uivsf.js";import"./hooks-CcwQQS4K.js";import"./axisSelectors-CdP5XGoN.js";import"./d3-scale-frJU2Btm.js";import"./zIndexSlice-w00ysM4m.js";import"./renderedTicksSlice-CWpXf5qL.js";import"./RegisterGraphicalItemId-BtuRgDxJ.js";import"./CSSTransitionAnimate-RAmZZLYv.js";import"./useAnimationId-De9-pIXx.js";import"./ZIndexLayer-6WeTgCgn.js";import"./ScatterChart-B4lIrCVo.js";import"./CartesianChart-DR1aPl1R.js";import"./chartDataContext-B1YWbHj7.js";import"./CategoricalChart-BzovAk5i.js";import"./CartesianGrid-COdiZEbw.js";import"./CartesianAxis-D-Yy--uR.js";import"./Text-D31e4mTY.js";import"./DOMUtils-BSHfgs8I.js";import"./Label-kMa1V762.js";import"./types-DZPKaEAC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-4nisg1uZ.js";import"./YAxis-C-bpHLVI.js";import"./Scatter-Bcu2_kch.js";import"./ReactUtils-CiNFkB-2.js";import"./Curve-CExLt2Iv.js";import"./step-DMWIYdYk.js";import"./tooltipContext-NQeLXPf3.js";import"./Symbols-0HhL3rnr.js";import"./symbol-CXDVJGuj.js";import"./ActiveShapeUtils-BhHFALxr.js";import"./isPlainObject-ClBz4bnQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFv_pW3l.js";import"./Trapezoid-CI4993jy.js";import"./Sector-dJduajY3.js";import"./GraphicalItemClipPath-f-LT7H0l.js";import"./SetGraphicalItem-geCsQwmc.js";import"./RechartsHookInspector-Dv9I4YHQ.js";import"./ChartSizeDimensions-BOJu1RXr.js";import"./OffsetShower-CJI2DXcR.js";import"./PlotAreaShower-Bq5ePm5q.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
