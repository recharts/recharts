import{j as r}from"./jsx-runtime-CG061sZ4.js";import{useMDXComponents as n}from"./index--OHD-iYi.js";import{M as s,C as a,a as p}from"./blocks-Civ5nBPS.js";import{C as m,A as i}from"./ErrorBar.stories-DPbzTO4k.js";import"./iframe-BlWijLqW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BlR-9DJp.js";import"./utils-ePvtT4un.js";import"./ErrorBar-07mqomNz.js";import"./Layer-3MYXWHxJ.js";import"./resolveDefaultProps-BXixkRdf.js";import"./ErrorBarContext-uU_zcojk.js";import"./RechartsWrapper-DVoFofdD.js";import"./arrayEqualityCheck-wpbGPGp4.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./CSSTransitionAnimate-D-7YFrNR.js";import"./useAnimationId-B1CL6Xpk.js";import"./ZIndexLayer-CJd84X-g.js";import"./ScatterChart-BR8T1e1j.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./CartesianGrid-DlT4qS99.js";import"./CartesianAxis-Bh0UbraM.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./Label-Df_5RPeD.js";import"./types-CMl5R0ed.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-OLUbmSHc.js";import"./YAxis-DCz5GEme.js";import"./Scatter-TKxfLH4j.js";import"./ReactUtils-CbcjOK7p.js";import"./Curve-DR-_MvJg.js";import"./tooltipContext-DqK1JGcx.js";import"./Symbols-BEH-AFaJ.js";import"./ActiveShapeUtils-CPx9BhWQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IDnxfDb1.js";import"./Trapezoid-B75mUvLe.js";import"./Sector-BYlteXBh.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./RechartsHookInspector-DmBYfqJt.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
