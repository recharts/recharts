import{R as t}from"./iframe-DLBrGVIL.js";import{z as a}from"./RechartsWrapper-CQD9R6Ch.js";import{R as p}from"./zIndexSlice-D04f94zz.js";import{C as n}from"./ComposedChart-B19GUyoN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dp11xR-K.js";import{X as l}from"./XAxis-CeLc4bEQ.js";import{Y as h}from"./YAxis-BYVuK0Yz.js";import{L as c}from"./Legend-rYKJOgHs.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./axisSelectors-e5FgB8sH.js";import"./throttle-Csq4RHLA.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./polarAxisSelectors-5dY8QunD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7f23rgt.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./getRadiusAndStrokeWidthFromDot-XT9ud7Ex.js";import"./Layer-fmxJ3YOZ.js";import"./Curve-COZ7WQ5e.js";import"./types-Bhx-lAgy.js";import"./step-Rw1feLL3.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C-aMudj3.js";import"./Label-B42eZj7W.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./ActivePoints-9q7wkDTC.js";import"./Dot-DOIYCHL9.js";import"./activeStyles-DixW-39S.js";import"./useAnimationId-UzUbsW_e.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./ErrorBarContext-5vBRFIsn.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./CartesianAxis-DwNRBXKt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CivVGgp9.js";import"./uniqBy-ConzCxl5.js";import"./iteratee-BL4ehpYl.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
