import{j as r}from"./jsx-runtime-Dnt6YwzK.js";import{useMDXComponents as n}from"./index-Bm8MIZHy.js";import{M as p,C as s,a}from"./blocks-B5aBUlM5.js";import{C as m,A as i}from"./ErrorBar.stories-jKVg2f9x.js";import"./iframe-CsXVB2ZJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Kp1LJ2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BMSBT89N.js";import"./Layer-ZxhtGexe.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxo_4k9c.js";import"./ErrorBarContext-Dh71FriX.js";import"./RechartsWrapper-CsYOQVLv.js";import"./arrayEqualityCheck-BCHdTh97.js";import"./immer-BTK-YsvV.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DrJPvX0I.js";import"./hooks-D_05cmM9.js";import"./axisSelectors-DotnTkUo.js";import"./d3-scale-COfDs1Hg.js";import"./zIndexSlice-COIrpl7N.js";import"./renderedTicksSlice-BIUh3E5-.js";import"./RegisterGraphicalItemId-Bh8wdrii.js";import"./CSSTransitionAnimate-C2RphYJj.js";import"./useAnimationId-CQeQyoAC.js";import"./ZIndexLayer-kRMHxQSg.js";import"./ScatterChart-BupOrJ_0.js";import"./CartesianChart-D5A6zJYY.js";import"./chartDataContext-U_ALNAnQ.js";import"./CategoricalChart-D25YEStt.js";import"./CartesianGrid-CHNGn_jU.js";import"./CartesianAxis-D3FkxlAO.js";import"./Text-t92igXCI.js";import"./DOMUtils-DOi0Kbgg.js";import"./Label-CpKh3CyV.js";import"./types-BRXmP5ht.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B7CspB_5.js";import"./YAxis-CG9kcCow.js";import"./Scatter-SkC9cmN9.js";import"./ReactUtils-BPsWb6oC.js";import"./Curve-DWbGncva.js";import"./step-Do92eA3g.js";import"./tooltipContext-CL623EMG.js";import"./Symbols-B41PQ-gK.js";import"./symbol-C0zx-DBl.js";import"./ActiveShapeUtils-CSysbPr0.js";import"./isPlainObject-C0suLCJu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BziwuLFH.js";import"./Trapezoid-XBp8FK9I.js";import"./Sector-BbnyTQRb.js";import"./GraphicalItemClipPath-CHSTcUHY.js";import"./SetGraphicalItem-1mPwySrk.js";import"./RechartsHookInspector-DPsZ88KI.js";import"./ChartSizeDimensions-DnhUms5f.js";import"./OffsetShower-DndIy-Mf.js";import"./PlotAreaShower-BkBHMfKD.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
