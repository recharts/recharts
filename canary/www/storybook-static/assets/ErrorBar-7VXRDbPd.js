import{j as r}from"./jsx-runtime-DEKHyv9H.js";import{useMDXComponents as n}from"./index-DQdwac6f.js";import{M as s,C as a,a as p}from"./blocks-DH_4PWV6.js";import{C as l,A as i}from"./ErrorBar.stories-BlSdiwz1.js";import"./iframe-C_JnpPxC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BwFDqC8u.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BT9tw5b6.js";import"./Layer-WpsYuzZU.js";import"./resolveDefaultProps-DMs63srN.js";import"./ErrorBarContext-BfsPTak7.js";import"./RechartsWrapper-Be1xWQVx.js";import"./arrayEqualityCheck-sT-8H7T8.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./zIndexSlice-DoGitowx.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./CSSTransitionAnimate-Ch9ZkvWm.js";import"./useAnimationId-BOqolhoS.js";import"./ZIndexLayer-B-ShVZV-.js";import"./ScatterChart-BsUiq4sp.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./CartesianGrid-DA_b3ABB.js";import"./CartesianAxis-VwfEIEjI.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./Label-CxS5BAR7.js";import"./types-BnNymUFW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BpjCkomw.js";import"./YAxis-DzTe-R4y.js";import"./Scatter-CN2f585p.js";import"./ReactUtils-D29wERIN.js";import"./Curve-qS1_4eph.js";import"./tooltipContext-BX1tpN4n.js";import"./Symbols-fhVjgxn_.js";import"./ActiveShapeUtils-Ft9Dseux.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnZDt0bN.js";import"./Trapezoid-D9fBkVlH.js";import"./Sector-H2-tBEz5.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./RechartsHookInspector-C-nhVX4u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
