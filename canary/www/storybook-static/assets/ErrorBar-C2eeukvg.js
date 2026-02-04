import{j as r}from"./jsx-runtime-T4XNx38_.js";import{useMDXComponents as n}from"./index-B71C0mAK.js";import{M as s,C as a,a as p}from"./blocks-BTAj7rkt.js";import{C as l,A as i}from"./ErrorBar.stories-DQSUsdNS.js";import"./iframe-2vdihYaA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DIOAgVA6.js";import"./utils-ePvtT4un.js";import"./ErrorBar-dpO9x_sd.js";import"./Layer-BY-fsyoM.js";import"./resolveDefaultProps-BMo1MjoM.js";import"./ErrorBarContext-CWPUp6By.js";import"./RechartsWrapper-BKqPTBXa.js";import"./arrayEqualityCheck-Cz6bem1a.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DRq4Dknc.js";import"./axisSelectors-B6I2jDAj.js";import"./zIndexSlice-_CZsqZq4.js";import"./RegisterGraphicalItemId-BxLSDVx1.js";import"./CSSTransitionAnimate-D0qwQCAz.js";import"./useAnimationId-C00yQmDC.js";import"./ZIndexLayer-BhK_pYZk.js";import"./ScatterChart-COGKrXDe.js";import"./CartesianChart-CgDezk2P.js";import"./chartDataContext-DF08vkso.js";import"./CategoricalChart-CTkRrNay.js";import"./CartesianGrid-DZECSw9p.js";import"./CartesianAxis-BzbcZQiG.js";import"./Text-B79Sux8Q.js";import"./DOMUtils-CHIYEZ9y.js";import"./Label-DyVMIxDt.js";import"./types-BVLdKdSl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dj-4Nnot.js";import"./YAxis-DeIibkX2.js";import"./Scatter-C9Tf7JDu.js";import"./ReactUtils-YY1V_Sy8.js";import"./Curve-CO1p58ib.js";import"./tooltipContext-Dt1_-fAv.js";import"./Symbols-DySEQhPv.js";import"./ActiveShapeUtils-BzwzNQ6E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-LulPmG5i.js";import"./Trapezoid-Csj6mQp9.js";import"./Sector-BfatqE6A.js";import"./GraphicalItemClipPath-ZZzgSpw_.js";import"./SetGraphicalItem-B1yLHWtu.js";import"./RechartsHookInspector-CqgE5Nv7.js";import"./ChartSizeDimensions-C8811dw0.js";import"./OffsetShower-ePUr3CkU.js";import"./PlotAreaShower-D0LZ_i9v.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
