import{j as r}from"./jsx-runtime-i1yV5TI8.js";import{useMDXComponents as n}from"./index-Dz-qdaJO.js";import{M as s,C as a,a as p}from"./blocks-C1F8ZJHI.js";import{C as l,A as i}from"./ErrorBar.stories-CmilDrY6.js";import"./iframe-CMiM_Qgn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1Y0M71Of.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DkLpqQv3.js";import"./Layer-CgUnyU8v.js";import"./resolveDefaultProps-41R1n5JW.js";import"./ErrorBarContext-DTmAcjw7.js";import"./RechartsWrapper-NJ0Ez51E.js";import"./arrayEqualityCheck-_vyoivmV.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-BePoF5l4.js";import"./axisSelectors-Cx7ZtEIH.js";import"./zIndexSlice-BExtdyub.js";import"./RegisterGraphicalItemId-ChahBClM.js";import"./CSSTransitionAnimate-DfsnFJA5.js";import"./useAnimationId-Cub4YggD.js";import"./ZIndexLayer-BI90jm2U.js";import"./ScatterChart-CgrMIqRY.js";import"./CartesianChart-CauNMHrH.js";import"./chartDataContext-By2fKgIb.js";import"./CategoricalChart-O0vVyZYM.js";import"./CartesianGrid-fLuhqndc.js";import"./CartesianAxis-BZUH34_W.js";import"./Text-BCzzepAd.js";import"./DOMUtils-DDwkXkUm.js";import"./Label-gyqygLIm.js";import"./types-CyIMtLrt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DaiKeapO.js";import"./YAxis-Dt3qo-M7.js";import"./Scatter-D2Q2ZF6Z.js";import"./ReactUtils-BtLAWZFM.js";import"./Curve-BXAMzxgI.js";import"./tooltipContext-DFzSd-KY.js";import"./Symbols-BXDeECV7.js";import"./ActiveShapeUtils-DqPdrrUk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-PYLd1R2f.js";import"./Trapezoid-BG55ZEGY.js";import"./Sector-D5UzUxjZ.js";import"./GraphicalItemClipPath-DrjjmV4D.js";import"./SetGraphicalItem-DFpoPkFf.js";import"./RechartsHookInspector-DmT1dtLd.js";import"./ChartSizeDimensions-DBnJjpf_.js";import"./OffsetShower-D9-0tfso.js";import"./PlotAreaShower-Dq9EyHFw.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
