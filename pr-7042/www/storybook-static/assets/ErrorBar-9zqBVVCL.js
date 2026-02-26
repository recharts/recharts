import{j as r}from"./jsx-runtime-CPQgSpu5.js";import{useMDXComponents as n}from"./index-C5snQvX7.js";import{M as p,C as s,a}from"./blocks-DmqISX0V.js";import{C as m,A as i}from"./ErrorBar.stories-8JIJva6Y.js";import"./iframe-CJQnRCN7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BmBTwCFz.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C8bKM_M-.js";import"./Layer-B-568WrD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bn42vmR1.js";import"./ErrorBarContext-WcfhBNrP.js";import"./RechartsWrapper-DEeMF7CZ.js";import"./arrayEqualityCheck-DcQtyVca.js";import"./immer-pCuW_8mX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1Dxg2z1.js";import"./hooks-D3GLo4z9.js";import"./axisSelectors-CBcJoGrJ.js";import"./d3-scale-AQeZIKmR.js";import"./zIndexSlice-D7pH0QjK.js";import"./renderedTicksSlice-6is9WC9q.js";import"./RegisterGraphicalItemId-CErdNO5K.js";import"./CSSTransitionAnimate-B_7XAp38.js";import"./useAnimationId-Btjbf-3C.js";import"./ZIndexLayer-DBz_ncGo.js";import"./ScatterChart-Du--dEaH.js";import"./CartesianChart-pu1Q9M14.js";import"./chartDataContext-DYHRLxlR.js";import"./CategoricalChart-DZh5W8ZS.js";import"./CartesianGrid-BWHoKEcJ.js";import"./CartesianAxis-CA-DoWhq.js";import"./Text-8oP5Jeys.js";import"./DOMUtils-CpcfJsF7.js";import"./Label-C1IYMHDK.js";import"./types-Bb5s1IIN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DGEO6QJA.js";import"./YAxis-Bx_UxG-b.js";import"./Scatter-Bh6LI_y4.js";import"./ReactUtils-BMRDQSQL.js";import"./Curve-ClJjpRlb.js";import"./step-xPk2jUCK.js";import"./tooltipContext-LQxmXr66.js";import"./Symbols-BqZb3kY5.js";import"./symbol-CVXqLImo.js";import"./ActiveShapeUtils-Al5O4_0X.js";import"./isPlainObject-Cy53febZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIClz7bW.js";import"./Trapezoid-DO_o8qI8.js";import"./Sector-DPKTnHdo.js";import"./GraphicalItemClipPath-BMpRvZ7r.js";import"./SetGraphicalItem-oTp0Feor.js";import"./RechartsHookInspector-DQZJ1VRL.js";import"./ChartSizeDimensions-BxOAeUa_.js";import"./OffsetShower-Bp1qc7mw.js";import"./PlotAreaShower-DPY3URo4.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
