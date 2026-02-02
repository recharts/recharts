import{j as r}from"./jsx-runtime-LFT0TkSV.js";import{useMDXComponents as n}from"./index-Bo-HdT7P.js";import{M as s,C as a,a as p}from"./blocks-Cawy8s_7.js";import{C as l,A as i}from"./ErrorBar.stories-D-wINxiK.js";import"./iframe-Ct3-EmvQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtF0TcD5.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B1TzDSaR.js";import"./Layer-B8MEBogB.js";import"./resolveDefaultProps-CLCYDClS.js";import"./ErrorBarContext-DASfBuRX.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./arrayEqualityCheck-6IWQNVnF.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-PlM3qON0.js";import"./axisSelectors-CMJXMyjC.js";import"./zIndexSlice-DuEz9NCx.js";import"./RegisterGraphicalItemId-XVqhZVps.js";import"./CSSTransitionAnimate-DWa_X0uv.js";import"./useAnimationId-BJitn0wZ.js";import"./ZIndexLayer-BPGi17AG.js";import"./ScatterChart-Lf6Xjyr9.js";import"./CartesianChart-DTOqEhzT.js";import"./chartDataContext-mVWnipwc.js";import"./CategoricalChart-DnvqP6Kl.js";import"./CartesianGrid-InnXGM-h.js";import"./CartesianAxis-C_XdVR0m.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./Label-DHx5gLtP.js";import"./types-_oa_IGij.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BUqB6c6n.js";import"./YAxis-FGYgR9Es.js";import"./Scatter-zMDf3oPy.js";import"./ReactUtils-DN8_9Eno.js";import"./Curve-C_yJ7Ryc.js";import"./tooltipContext-Wt6yWfLp.js";import"./Symbols-Bp94E4fO.js";import"./ActiveShapeUtils-BFvFZr_D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOfd_qYz.js";import"./Trapezoid-DB54BMON.js";import"./Sector-C0TYwl3N.js";import"./GraphicalItemClipPath-m8qPdP4H.js";import"./SetGraphicalItem-DB0AUuOj.js";import"./RechartsHookInspector-CNP9TKyO.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
