import{j as r}from"./jsx-runtime-BCJRiH32.js";import{useMDXComponents as n}from"./index-B1xtOmkq.js";import{M as p,C as s,a}from"./blocks-BrFhfuJO.js";import{C as m,A as i}from"./ErrorBar.stories-Dnd5Pm4j.js";import"./iframe-B0wKxNpK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CyRoQl_d.js";import"./utils-ePvtT4un.js";import"./ErrorBar-auhh9P_M.js";import"./Layer-DSIwel9q.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./ErrorBarContext-B1oYf-9A.js";import"./RechartsWrapper-CrtUXLbx.js";import"./arrayEqualityCheck-5nuhtSeT.js";import"./immer-DUb1bWtb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cnz4_p8Q.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./d3-scale-CQFM5VB3.js";import"./zIndexSlice-BcKpuoZl.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./RegisterGraphicalItemId-CDkf5IwF.js";import"./CSSTransitionAnimate-5AOlPY4P.js";import"./useAnimationId-BdZ_5XMP.js";import"./ZIndexLayer-70VD5Z7C.js";import"./ScatterChart-DimaPEfD.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./CartesianGrid-BXbLZ40w.js";import"./CartesianAxis-BqdAX1QZ.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./Label-BdkcMQDU.js";import"./types-CYNiifb0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-y_MJiFx9.js";import"./YAxis-Cj3ZlpOa.js";import"./Scatter-CYSZHiKO.js";import"./ReactUtils-sKOkm0_2.js";import"./Curve-DiJIjJff.js";import"./step-CkYKWKxI.js";import"./tooltipContext-FVKKCIVe.js";import"./Symbols-D24cFx-Z.js";import"./symbol-CrLzL-Wg.js";import"./ActiveShapeUtils-D6gjATQs.js";import"./isPlainObject-CDFz0xXj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLIXCh-E.js";import"./Trapezoid-DtGJqYre.js";import"./Sector-CjeW4NDg.js";import"./GraphicalItemClipPath-BCjuGXXY.js";import"./SetGraphicalItem-Be0sJCS3.js";import"./RechartsHookInspector-DYn9zJB9.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
