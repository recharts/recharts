import{j as r}from"./jsx-runtime-D2lxbR1Z.js";import{useMDXComponents as n}from"./index-BtvKNGAl.js";import{M as s,C as a,a as p}from"./blocks-BLOmDPcK.js";import{C as l,A as i}from"./ErrorBar.stories-CfTgxhNM.js";import"./iframe-majBtK-E.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8KZ_CA2.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Ci9Z6cxl.js";import"./Layer-BLDMzEqE.js";import"./resolveDefaultProps-B4pC6M3l.js";import"./ErrorBarContext-DUFA32t0.js";import"./RechartsWrapper-0u9Ddv25.js";import"./arrayEqualityCheck-DVgUr5sF.js";import"./PolarUtils-CJsRsyos.js";import"./hooks-oixdIqV0.js";import"./axisSelectors-Ce1DsLqd.js";import"./zIndexSlice-7SDVSN9y.js";import"./RegisterGraphicalItemId-CiSdioED.js";import"./CSSTransitionAnimate-B35iOljw.js";import"./useAnimationId-BsAnEyOV.js";import"./ZIndexLayer-Dv76Cipi.js";import"./ScatterChart-CTrUlKUl.js";import"./CartesianChart-BL_zgiIZ.js";import"./chartDataContext-CZTJj6RV.js";import"./CategoricalChart-D7h1yX10.js";import"./CartesianGrid-BX5yW7yI.js";import"./CartesianAxis-BrVqccJA.js";import"./Text-phE5o1Gx.js";import"./DOMUtils-mrrzRZs0.js";import"./Label-e34JrSXW.js";import"./types-C6X4a6Ih.js";import"./XAxis-BuPlQDHV.js";import"./YAxis-RBaLqt0k.js";import"./Scatter-Dy4tPLCT.js";import"./ReactUtils-CnNdH0Da.js";import"./Curve-9TopWPhs.js";import"./tooltipContext-D16OHKBb.js";import"./Symbols-Cp35_dcw.js";import"./ActiveShapeUtils-CN13qk7C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-en3DGB-O.js";import"./Trapezoid-DktYSmhy.js";import"./Sector-7pSu32ck.js";import"./GraphicalItemClipPath-CMlJ6COV.js";import"./SetGraphicalItem-Bs7RhIp3.js";import"./RechartsHookInspector-C8tTsK9b.js";import"./ChartSizeDimensions-CwqFjkkT.js";import"./OffsetShower-CIon6stJ.js";import"./PlotAreaShower-BUoNZ3NG.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
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
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
