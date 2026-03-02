import{j as r}from"./jsx-runtime-5UUP8wXk.js";import{useMDXComponents as n}from"./index-BLUc7T2Q.js";import{M as p,C as s,a}from"./blocks-CD7PaOJX.js";import{C as m,A as i}from"./ErrorBar.stories-1r-Ub73I.js";import"./iframe-iwEL6Umv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LsQkT41Y.js";import"./utils-ePvtT4un.js";import"./ErrorBar-D19P5Jju.js";import"./Layer-blbwcMF4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCVuQ-Yr.js";import"./ErrorBarContext-CgjFOrMU.js";import"./RechartsWrapper-9n0f-4bA.js";import"./arrayEqualityCheck-BhZQM3Cp.js";import"./immer-Cr1rPGS6.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DLdiPLRr.js";import"./hooks-BKxqdv6E.js";import"./axisSelectors-OvY2hZ5X.js";import"./d3-scale-DtoPWeCi.js";import"./zIndexSlice-B2mfmoSl.js";import"./renderedTicksSlice-C2RN1S42.js";import"./RegisterGraphicalItemId-DquoBc_j.js";import"./CSSTransitionAnimate-Bc0JSTNd.js";import"./useAnimationId-fTTqSava.js";import"./ZIndexLayer--muSGjRM.js";import"./ScatterChart-gFbSaKRh.js";import"./CartesianChart-awM32UjI.js";import"./chartDataContext-GxGvfaB0.js";import"./CategoricalChart-DS_wxFYH.js";import"./CartesianGrid-BBwa0t5D.js";import"./CartesianAxis-BWMGM7_Q.js";import"./Text-BGZOUB9S.js";import"./DOMUtils-DAlnAof2.js";import"./Label-D1qeHozD.js";import"./types-CbKx0ZMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Dgqn4iEv.js";import"./YAxis-umZBaGOr.js";import"./Scatter-RkyHcqYs.js";import"./ReactUtils-sQyeAkyW.js";import"./Curve-_1pLvIld.js";import"./step-4pZgFtPk.js";import"./tooltipContext-Ct2699AQ.js";import"./Symbols-CT2be5W7.js";import"./symbol-Q9vYiwbO.js";import"./ActiveShapeUtils-C3Zx6KRY.js";import"./isPlainObject-Ddh5v3It.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXew48xc.js";import"./Trapezoid-CwbjlUlI.js";import"./Sector-CvrBUmaX.js";import"./GraphicalItemClipPath-DN8WJV-C.js";import"./SetGraphicalItem-7qCAbAa9.js";import"./RechartsHookInspector-CYTcWIXs.js";import"./ChartSizeDimensions-CbGn3agI.js";import"./OffsetShower-DbewMYJd.js";import"./PlotAreaShower-DJ_CeKT6.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
