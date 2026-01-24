import{j as r}from"./jsx-runtime-Bo3Dn4po.js";import{useMDXComponents as n}from"./index-BzcYyrYF.js";import{M as s,C as a,a as p}from"./blocks-CWwmqwwv.js";import{C as m,A as i}from"./ErrorBar.stories-DhxoMmfk.js";import"./iframe-BMCIaxKG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-a6yAW-au.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BRLpihtZ.js";import"./Layer-MWXbZbYh.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./ErrorBarContext-KqD_eRKg.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./arrayEqualityCheck--GVOH9-X.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./zIndexSlice-B9Z5B7ke.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./CSSTransitionAnimate-CTL8mjkF.js";import"./useAnimationId-BmU-cqjD.js";import"./ZIndexLayer-D3DglK0F.js";import"./ScatterChart-DJdrBT51.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./CartesianGrid-DT41IuTf.js";import"./CartesianAxis-BYfW_8DA.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./Label-DX5r6J7L.js";import"./types-CjLOz-vL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CQh89uUR.js";import"./YAxis-DfmH9Dom.js";import"./Scatter-BnY8R0yL.js";import"./ReactUtils-5tDB8KCJ.js";import"./Curve-B-WNVokC.js";import"./tooltipContext-DbQ4U6Ut.js";import"./Symbols-DwSHOnga.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1cropaK.js";import"./Trapezoid-CAvOGSEj.js";import"./Sector-DluXzhdl.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./RechartsHookInspector-BEE5VJHB.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
