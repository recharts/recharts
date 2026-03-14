import{j as r}from"./jsx-runtime-C0ROnLV3.js";import{useMDXComponents as n}from"./index-BfJS-EyB.js";import{M as p,C as s,a}from"./blocks-DRe9XXRM.js";import{C as m,A as i}from"./ErrorBar.stories-D34VkUvd.js";import"./iframe-DTYvDHnt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CrrTnEOk.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DDs3CdFF.js";import"./Layer-D1ZUQvW9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkSqodrF.js";import"./ErrorBarContext-C4u9P8TO.js";import"./RechartsWrapper-C_fFV3co.js";import"./arrayEqualityCheck-1nsmynxr.js";import"./immer-D3GAE1ff.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B3wSVZ9D.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./zIndexSlice-CBk7l9Bz.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./CSSTransitionAnimate-j_Ohwr40.js";import"./useAnimationId-CwNlC5fD.js";import"./ZIndexLayer-DhriUgdb.js";import"./ScatterChart-uIvYZuGg.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./CartesianGrid-NSfsJ-pb.js";import"./CartesianAxis-BvJIB3EW.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./Label-Dl6pWHvn.js";import"./types-JQYj2LUa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-D4mtTZaA.js";import"./YAxis-D1_iMkgA.js";import"./Scatter-BvEhZi2r.js";import"./ReactUtils-C-Mw6kzE.js";import"./Curve-D1NGPsms.js";import"./step-CL79bITl.js";import"./tooltipContext-BoDWUbo_.js";import"./Symbols-iaprTSLF.js";import"./symbol-Bx0PtbXY.js";import"./ActiveShapeUtils-vpnhlhYE.js";import"./isPlainObject-D_8yM-sa.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpDkrfm.js";import"./Trapezoid-BdxbKZVQ.js";import"./Sector-BIC07wIa.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./RechartsHookInspector-Pg_EkWGi.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
