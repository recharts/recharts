import{j as r}from"./jsx-runtime-CC0novw7.js";import{useMDXComponents as n}from"./index-BCkpboEX.js";import{M as s,C as a,a as p}from"./blocks-CuM-stmw.js";import{C as l,A as i}from"./ErrorBar.stories-CsL4mCdQ.js";import"./iframe-BsuuU2ac.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BhAql3N3.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Bej4O8z1.js";import"./Layer-DM57kvBs.js";import"./resolveDefaultProps-saNtUn-1.js";import"./ErrorBarContext-CA3TWQkR.js";import"./RechartsWrapper-BH32z_Kk.js";import"./arrayEqualityCheck-BjO3Er2E.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./zIndexSlice-Bir2u6Kx.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./CSSTransitionAnimate-CNXjxcsc.js";import"./useAnimationId-WGg8-jRM.js";import"./ZIndexLayer-DAoCiEXG.js";import"./ScatterChart-Z7Lq10RG.js";import"./CartesianChart-CfWYFhMG.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./CartesianGrid-CmOXpYee.js";import"./CartesianAxis-CECRCtr2.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./Label-DXc_GGWc.js";import"./types-DmRJx57M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CsIw1iGz.js";import"./YAxis-BTKigBpk.js";import"./Scatter-CMd4GhSE.js";import"./ReactUtils-D7uw0LSD.js";import"./Curve-C6_JEQin.js";import"./tooltipContext-D4mwNmDm.js";import"./Symbols-CcIdb3bs.js";import"./ActiveShapeUtils-Drd0OeIB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D5Cka5hS.js";import"./Trapezoid-Ds5p844S.js";import"./Sector-CZIlwJfI.js";import"./GraphicalItemClipPath-CSReekSQ.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./RechartsHookInspector-BGkLBTS7.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./OffsetShower-BRn6lv3J.js";import"./PlotAreaShower-C1V0JDKa.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
