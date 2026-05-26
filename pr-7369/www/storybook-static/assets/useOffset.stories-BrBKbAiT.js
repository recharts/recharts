import{e as t}from"./iframe-D8sYifa2.js";import{O as p}from"./OffsetShower-BZMcKLdA.js";import{X as a}from"./hooks-BU-t5LUJ.js";import{d as s}from"./arrayEqualityCheck-y2Q9GogF.js";import{C as n}from"./ComposedChart-DEf9PDgh.js";import{p as f}from"./Page-DPte-9pC.js";import{L as h}from"./Line-CkUEu8v5.js";import{X as d}from"./XAxis-9biS9qcH.js";import{Y as g}from"./YAxis-BUVq_Z24.js";import{L as c}from"./Legend-7cd7NCmD.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./immer-DGWVQIGE.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./index-DUx68t71.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkonLtU6.js";import"./zIndexSlice-_08NoE64.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./Curve-D7_AU4BE.js";import"./types-C-x3ql1e.js";import"./step-Cv8kCHVT.js";import"./path-DyVhHtw_.js";import"./Layer-D0lgb40K.js";import"./graphicalItemTheme-BorrGmPK.js";import"./Label-DJUogzP7.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./ZIndexLayer-BoxbsGwS.js";import"./ActivePoints-DwTRXl_F.js";import"./Dot-IstG4xe6.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./ErrorBarContext-CMRjTkut.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./useAnimationId-W_naYXH9.js";import"./getRadiusAndStrokeWidthFromDot-E4UfAf03.js";import"./ActiveShapeUtils-gpKwZwuV.js";import"./CartesianAxis-k72kWN9A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Iph-WCB-.js";import"./symbol-B2tLKIcI.js";import"./useElementOffset-B8DfRQ2Q.js";import"./uniqBy-CHW-V9O0.js";import"./iteratee-DhisUvfr.js";const dt={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},e={name:"useOffset",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:f,margin:r.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UseOffset"];export{e as UseOffset,gt as __namedExportsOrder,dt as default};
