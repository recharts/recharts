import{j as r}from"./jsx-runtime-C-p8ossf.js";import{useMDXComponents as n}from"./index-DoangAMg.js";import{M as s,C as a,a as p}from"./blocks-CMOr3U1s.js";import{C as m,A as i}from"./ErrorBar.stories-DHCAeX7B.js";import"./iframe-CgKUDY6I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2ufv7V98.js";import"./utils-ePvtT4un.js";import"./ErrorBar-ChxB1_N_.js";import"./Layer-DyDQThNB.js";import"./resolveDefaultProps-DMHVQbHf.js";import"./ErrorBarContext-DEMjkEM_.js";import"./RechartsWrapper-DRtAtWmJ.js";import"./arrayEqualityCheck-4uJZ54sz.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C-jfEB0O.js";import"./axisSelectors-78x8Dv2Q.js";import"./zIndexSlice-L1yp4KKu.js";import"./RegisterGraphicalItemId-DTO6cAIg.js";import"./CSSTransitionAnimate-QVTGHDNs.js";import"./useAnimationId-BABjQp7J.js";import"./ZIndexLayer-Cm5c_q02.js";import"./ScatterChart-o1-7jd_g.js";import"./CartesianChart-DklQ4GGx.js";import"./chartDataContext-B10HjSyG.js";import"./CategoricalChart-BTXI1VEa.js";import"./CartesianGrid-HdDclIG7.js";import"./CartesianAxis-B5IaiaWB.js";import"./Text-D7eyVQni.js";import"./DOMUtils-oL5y8gGU.js";import"./Label-Dn5iT33K.js";import"./types-DoxvimZ4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DwOryPfA.js";import"./YAxis-D1iy5DZK.js";import"./Scatter-CLo_30pE.js";import"./ReactUtils-4_OOWgDq.js";import"./Curve-BuIdVsH6.js";import"./tooltipContext-BX66OGI4.js";import"./Symbols-Crrpo09o.js";import"./ActiveShapeUtils-4Z7GGztm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDDRsXYi.js";import"./Trapezoid-XOwgAbCO.js";import"./Sector-BF2Rl4dz.js";import"./GraphicalItemClipPath-D2P2Wy6l.js";import"./SetGraphicalItem-GcELh7Cs.js";import"./RechartsHookInspector-BbTYK-9O.js";import"./ChartSizeDimensions-BloifcJy.js";import"./OffsetShower-BASfXPJZ.js";import"./PlotAreaShower-d7Om0wsj.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
