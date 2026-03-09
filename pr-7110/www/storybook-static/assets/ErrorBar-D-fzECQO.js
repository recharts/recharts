import{j as r}from"./jsx-runtime-Ru4TAw7w.js";import{useMDXComponents as n}from"./index-B1J7IaQM.js";import{M as p,C as s,a}from"./blocks-DUOZ661H.js";import{C as m,A as i}from"./ErrorBar.stories-BhMkYp-U.js";import"./iframe-CE_u6gw7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BnKoqAo2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DgCaZd28.js";import"./Layer-DWHUvPCA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_XoAT-1.js";import"./ErrorBarContext-Cf8SIugI.js";import"./RechartsWrapper-B6u2BPsd.js";import"./arrayEqualityCheck-DrWQ_zH1.js";import"./immer-B4lMi1z1.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CxjNEs9W.js";import"./hooks-PVjuMKZG.js";import"./axisSelectors-BIg47fnU.js";import"./d3-scale-DJKgZxBp.js";import"./zIndexSlice-BphKS-MH.js";import"./renderedTicksSlice-PB7f1cWi.js";import"./RegisterGraphicalItemId-CbUb9Psg.js";import"./CSSTransitionAnimate-DtNhkKLT.js";import"./useAnimationId-Ey9rpLv3.js";import"./ZIndexLayer-DmUZ0Rp1.js";import"./ScatterChart-DTkALrzi.js";import"./CartesianChart-Cxn-kkBD.js";import"./chartDataContext-DcP55NXx.js";import"./CategoricalChart-8rYVrRQy.js";import"./CartesianGrid-Cc4ioig5.js";import"./CartesianAxis-CWIyTumo.js";import"./Text-CMYMNHqG.js";import"./DOMUtils-BxWdBvEt.js";import"./Label-B0RF5qp9.js";import"./types-BY4GBGia.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CLmHv_2r.js";import"./YAxis-Bs0Yklvo.js";import"./Scatter-ClR1WZqS.js";import"./ReactUtils-DKt0JvWb.js";import"./Curve-VV1uNtUT.js";import"./step-CYcDECZ0.js";import"./tooltipContext-BjdUKaWd.js";import"./Symbols-BcL7Z710.js";import"./symbol-CRUhxG3e.js";import"./ActiveShapeUtils-bsQr1W6P.js";import"./isPlainObject-B1Oby2ns.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CJD0TK60.js";import"./Trapezoid-3IU8o-1x.js";import"./Sector-DrGniStY.js";import"./GraphicalItemClipPath-DEfFS43K.js";import"./SetGraphicalItem-afAcTt-s.js";import"./RechartsHookInspector-Dl79BROd.js";import"./ChartSizeDimensions-DBXaHco-.js";import"./OffsetShower-Dg42jmMc.js";import"./PlotAreaShower-Dg2xDHUw.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
