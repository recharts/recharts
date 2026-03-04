import{j as r}from"./jsx-runtime-DSerUeCU.js";import{useMDXComponents as n}from"./index-C2AC_OND.js";import{M as p,C as s,a}from"./blocks-BNTYMWc2.js";import{C as m,A as i}from"./ErrorBar.stories-DP5-pIqY.js";import"./iframe-D83ZSNbz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSluNsr9.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DlUCLExd.js";import"./Layer-CzMDOsc5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./ErrorBarContext-DI1C1qO8.js";import"./RechartsWrapper-6kLXfAE0.js";import"./arrayEqualityCheck-BGA4RwPN.js";import"./immer-CVep4-EU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-8b00PKjq.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./zIndexSlice-z-sDwpjP.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./CSSTransitionAnimate-rUxRhOWd.js";import"./useAnimationId-DC1LkXPL.js";import"./ZIndexLayer-BlsfoIRs.js";import"./ScatterChart-CBb68dHk.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./CartesianGrid-DOXYo2au.js";import"./CartesianAxis-4L0yK2SL.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./Label-CPoQ7ALx.js";import"./types-CQ4rEtgJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-C6_NJJDB.js";import"./YAxis-QvVYxZLS.js";import"./Scatter-B_su7QmH.js";import"./ReactUtils-Dwz5eB4M.js";import"./Curve-VgEiMVDm.js";import"./step-DnRHTEfS.js";import"./tooltipContext-DO06d1Q0.js";import"./Symbols-BiJ-DNBY.js";import"./symbol-S6sIvH4b.js";import"./ActiveShapeUtils-C7T_TsZu.js";import"./isPlainObject-CP5WOR_K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcHYsitW.js";import"./Trapezoid-DcZW9PM6.js";import"./Sector-BNG-UwhR.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./RechartsHookInspector-BWsm2Zwo.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
